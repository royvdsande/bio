import {
  initializeApp,
  getApps,
  getApp,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgXo3zllXtFJZDn4elpY8DemEQG_ltMk0",
  authDomain: "account.binas.app",
  projectId: "binas-91a32",
  storageBucket: "binas-91a32.firebasestorage.app",
  messagingSenderId: "971498903694",
  appId: "1:971498903694:web:5ab8b630b183f5204ed1df",
  measurementId: "G-1LLBGZNRNC",
};

const bridge = {
  app: null,
  auth: null,
  db: null,
  user: null,
  handlers: {},
  unsubscribe: null,
  ready: false,
  cloudLoaded: false,
  pendingState: null,
  saveTimer: null,
  syncStatus: "idle",
  syncError: "",
};

function initFirebase() {
  if (!bridge.app) {
    bridge.app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  }
  if (!bridge.auth) {
    bridge.auth = getAuth(bridge.app);
    bridge.auth.languageCode = "nl";
  }
  if (!bridge.db) {
    bridge.db = getFirestore(bridge.app);
  }
}

function cleanState(value) {
  return JSON.parse(JSON.stringify(value || {}));
}

function userSnapshot(user = bridge.user) {
  if (!user) return null;
  return {
    uid: user.uid,
    email: user.email || "",
    displayName: user.displayName || "",
    photoURL: user.photoURL || "",
    emailVerified: !!user.emailVerified,
    providerId: user.providerData?.[0]?.providerId || user.providerId || "password",
  };
}

function notifyAuth() {
  bridge.handlers.onAuthChange?.({
    ready: bridge.ready,
    user: userSnapshot(),
  });
}

function notifySync(status, error = "") {
  bridge.syncStatus = status;
  bridge.syncError = error || "";
  bridge.handlers.onSyncChange?.({
    status,
    error: bridge.syncError,
    user: userSnapshot(),
  });
}

function profilePayload() {
  return {
    email: bridge.user?.email || "",
    displayName: bridge.user?.displayName || "",
    photoURL: bridge.user?.photoURL || "",
    lastBioQuestSeenAt: serverTimestamp(),
  };
}

async function flushPendingState() {
  if (!bridge.user || !bridge.db || !bridge.pendingState || !bridge.cloudLoaded) return false;
  const uid = bridge.user.uid;
  const stateToSave = cleanState(bridge.pendingState);
  clearTimeout(bridge.saveTimer);
  bridge.saveTimer = null;
  notifySync("saving");

  try {
    await setDoc(
      doc(bridge.db, "users", uid),
      {
        ...profilePayload(),
        bioQuest: {
          schemaVersion: 3,
          updatedAt: serverTimestamp(),
          updatedAtMs: Date.now(),
          state: stateToSave,
        },
      },
      { merge: true }
    );
    if (bridge.user?.uid === uid) {
      bridge.pendingState = null;
      notifySync("saved");
    }
    return true;
  } catch (error) {
    notifySync("error", error.message || "Opslaan in Firestore is mislukt.");
    return false;
  }
}

async function loadCloudState(user) {
  bridge.cloudLoaded = false;
  notifySync("loading");
  const uid = user.uid;

  try {
    const snap = await getDoc(doc(bridge.db, "users", uid));
    if (!bridge.user || bridge.user.uid !== uid) return;

    const data = snap.exists() ? snap.data() : {};
    const bioQuest = data?.bioQuest || {};
    const cloudState = bioQuest.state || data?.bioQuestState || null;
    const appliedState = await bridge.handlers.onCloudState?.(cloudState, {
      hasCloudState: !!cloudState,
      updatedAtMs: bioQuest.updatedAtMs || 0,
      raw: bioQuest,
    });

    bridge.cloudLoaded = true;
    notifySync("saved");
    await saveState(appliedState || bridge.handlers.getState?.(), { immediate: true });
  } catch (error) {
    bridge.cloudLoaded = true;
    notifySync("error", error.message || "Cloudvoortgang laden is mislukt.");
  }
}

async function handleAuthUser(user) {
  bridge.user = user && !user.isAnonymous ? user : null;
  bridge.ready = true;
  notifyAuth();

  if (!bridge.user) {
    bridge.cloudLoaded = false;
    bridge.pendingState = null;
    clearTimeout(bridge.saveTimer);
    bridge.saveTimer = null;
    notifySync("idle");
    return;
  }

  await loadCloudState(bridge.user);
}

export function init(handlers = {}) {
  bridge.handlers = { ...bridge.handlers, ...handlers };
  initFirebase();

  if (!bridge.unsubscribe) {
    bridge.unsubscribe = onAuthStateChanged(bridge.auth, handleAuthUser, (error) => {
      bridge.ready = true;
      notifyAuth();
      notifySync("error", error.message || "Accountstatus laden is mislukt.");
    });
  } else {
    notifyAuth();
    bridge.handlers.onSyncChange?.({
      status: bridge.syncStatus,
      error: bridge.syncError,
      user: userSnapshot(),
    });
  }
}

export async function saveState(nextState, options = {}) {
  if (!bridge.user) return false;
  bridge.pendingState = cleanState(nextState);
  if (!bridge.cloudLoaded) return false;
  if (options.immediate) return flushPendingState();

  clearTimeout(bridge.saveTimer);
  bridge.saveTimer = setTimeout(flushPendingState, 900);
  return true;
}

export async function signInWithEmail(email, password) {
  initFirebase();
  return signInWithEmailAndPassword(bridge.auth, email, password);
}

export async function createAccount(name, email, password) {
  initFirebase();
  const result = await createUserWithEmailAndPassword(bridge.auth, email, password);
  if (name) await updateProfile(result.user, { displayName: name });
  try {
    await sendEmailVerification(result.user);
  } catch {
    // Account creation should not fail if the verification email cannot be sent.
  }
  return result;
}

export async function signInWithGoogle() {
  initFirebase();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return signInWithPopup(bridge.auth, provider);
}

export async function signOutUser() {
  initFirebase();
  await flushPendingState();
  return signOut(bridge.auth);
}

export async function updateDisplayName(name) {
  if (!bridge.user) throw new Error("Niet ingelogd.");
  await updateProfile(bridge.user, { displayName: name });
  await setDoc(doc(bridge.db, "users", bridge.user.uid), profilePayload(), { merge: true });
  notifyAuth();
}

export async function setPassword(password) {
  if (!bridge.user) throw new Error("Niet ingelogd.");
  await updatePassword(bridge.user, password);
}

export function getCurrentUser() {
  return userSnapshot();
}

window.BioQuestAccount = {
  init,
  saveState,
  signInWithEmail,
  createAccount,
  signInWithGoogle,
  signOutUser,
  updateDisplayName,
  setPassword,
  getCurrentUser,
};

document.documentElement.dataset.bioQuestAccountModule = "loaded";
window.dispatchEvent(new CustomEvent("bioquest-account-ready"));
