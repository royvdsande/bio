/* ===================================================================
   BioQuest — engine (herontworpen overzicht)
   Overzicht → niveau + methode → hoofdstukken → hoofdstuk met tabbladen
   (Theorie · Flitskaarten · Oefenvragen · Examenopgaven)
   AI is overal strikt opt-in: gebeurt alleen als de gebruiker erop klikt.
   =================================================================== */
(function () {
  "use strict";

  const SAVE_KEY = "bioquest_v3";
  const AIKEY_KEY = "bioquest_openai_key";
  const DAILY_GOAL = 60;

  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  /* ---------- inline vector-iconen ---------- */
  const ICONS = {
    flame: '<svg class="ic ic-flame" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path class="flame-out" d="M12 23c4.4 0 7.5-3 7.5-7.2 0-2.9-1.6-5.2-3.1-7-.5 1.1-1.3 1.8-2.2 1.9.8-2.3.3-4.8-2.1-7.4-.3 2.3-1.6 3.7-3 5.2C7.2 10.1 6 12.3 6 15.8 6 20 7.6 23 12 23z"/><path class="flame-in" d="M12 22c2.4 0 4-1.7 4-3.9 0-1.8-1.1-3-2.2-4.2-.4 1.4-1.2 1.8-1.9 1.9.5-1.6-.4-3-1.6-4-.2 1.6-1 2.3-1.6 3.2-.5.8-1 1.7-1 3 0 2.3 1.9 4 4.3 4z"/></svg>',
    target: '<svg class="ic ic-target" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="var(--red)" stroke-width="2.4"/><circle cx="12" cy="12" r="5" fill="none" stroke="var(--red)" stroke-width="2.4"/><circle cx="12" cy="12" r="1.6" fill="var(--red)"/></svg>',
    check: '<svg class="ic" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M5 13l4 4 10-11" fill="none" stroke="var(--green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    heart: '<svg class="ic ic-heart" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M12 21C5.5 16.7 3 13.3 3 9.5 3 6.9 5 5 7.4 5c1.6 0 3 .8 3.9 2 .9-1.2 2.3-2 3.9-2C18.6 5 20.6 6.9 20.6 9.5c0 3.8-2.6 7.2-8.6 11.5z" fill="var(--red)"/></svg>',
    book: '<svg class="ic" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M20 18v3H6.5A2.5 2.5 0 0 1 4 18.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    cards: '<svg class="ic" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><rect x="3" y="6" width="13" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 3h9a2 2 0 0 1 2 2v11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    quiz: '<svg class="ic" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 1-1 1.9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="17.5" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    exam: '<svg class="ic" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M6 3h9l4 4v14H6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 3v5h5M8.5 13h7M8.5 16.5h7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    spark: '<svg class="ic" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="currentColor"/></svg>',
    video: '<svg class="ic" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9.2v5.6l5-2.8z" fill="currentColor"/></svg>',
    gear: '<svg class="ic ic-gear" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M19.4 13a7.8 7.8 0 0 0 0-2l2-1.6-2-3.4-2.4 1a7.6 7.6 0 0 0-1.7-1l-.4-2.6H10.9l-.4 2.6a7.6 7.6 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.8 7.8 0 0 0 0 2l-2 1.6 2 3.4 2.4-1c.5.4 1.1.7 1.7 1l.4 2.6h4.2l.4-2.6c.6-.3 1.2-.6 1.7-1l2.4 1 2-3.4-2-1.6zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z"/></svg>',
  };
  const icon = (name) => ICONS[name] || "";
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; };
  const todayStr = () => new Date().toISOString().slice(0, 10);
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

  /* ---------- state ---------- */
  const defaultState = () => ({
    xp: 0, streakDays: 0, lastDay: null, day: { d: null, xp: 0 },
    cards: {}, paras: {}, videos: {},
    settings: { sound: true, model: "gpt-4o-mini", niveau: null, methode: null }
  });
  let state = load();
  function load() { try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); return s ? deepMerge(defaultState(), s) : defaultState(); } catch (e) { return defaultState(); } }
  function deepMerge(base, add) { const out = Object.assign({}, base, add); out.settings = Object.assign({}, base.settings, add.settings || {}); return out; }
  function save() { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }
  const getKey = () => localStorage.getItem(AIKEY_KEY) || "";
  const setKey = (k) => { if (k) localStorage.setItem(AIKEY_KEY, k); else localStorage.removeItem(AIKEY_KEY); };
  const method = () => METHODS[state.settings.methode] || METHODS.bvj;
  const niveau = () => CURRICULUM[state.settings.niveau] || null;

  /* ---------- leveling & xp ---------- */
  function levelInfo(xp) {
    let lvl = 1, need = 120, acc = 0;
    while (xp >= acc + need) { acc += need; lvl++; need = Math.round(need * 1.3); }
    return { level: lvl, into: xp - acc, need, pct: clamp(((xp - acc) / need) * 100, 0, 100) };
  }
  function dailyXP() { if (state.day.d !== todayStr()) state.day = { d: todayStr(), xp: 0 }; return state.day.xp; }
  function addXP(n) {
    const before = levelInfo(state.xp).level;
    state.xp += n; dailyXP(); state.day.xp += n; save();
    const after = levelInfo(state.xp).level;
    refreshTopbar();
    if (after > before) { levelUpToast(after); confettiBurst(); sound("levelup"); mascotCheer(); }
  }
  function markStudiedToday() {
    const t = todayStr();
    if (state.lastDay === t) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    state.streakDays = (state.lastDay === y) ? state.streakDays + 1 : 1;
    state.lastDay = t; save(); refreshTopbar();
    const sc = $("#streakChip"); if (sc) { sc.classList.remove("pulse"); void sc.offsetWidth; sc.classList.add("pulse"); }
    mascotSay("🔥 Streak: " + state.streakDays + " dag(en)! Top bezig.");
  }

  /* ---------- progress ---------- */
  const pkey = (topic, para) => topic.id + ":" + para.id;
  const cardKey = (topic, para, term) => pkey(topic, para) + "::" + term;
  function paraProgress(topic, p) {
    const rec = state.paras[pkey(topic, p)] || {};
    const quiz = rec.quizBest || 0;
    let known = 0; p.cards.forEach(c => { const cc = state.cards[cardKey(topic, p, c.term)]; if (cc && cc.box >= 3) known++; });
    const cardPct = p.cards.length ? known / p.cards.length : 0;
    const parts = [quiz, cardPct, rec.learnDone ? 1 : 0];
    return Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100);
  }
  function topicProgress(topic) {
    if (!topic.paragraphs.length && hasVideos(topic)) return videoProgress(topic);
    const v = topic.paragraphs.map(p => paraProgress(topic, p)); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : 0;
  }

  /* ---------- videoleerlijn ---------- */
  const hasVideos = (topic) => Array.isArray(topic.videos) && topic.videos.length > 0;
  const allVideos = (topic) => hasVideos(topic) ? topic.videos.reduce((a, s) => a.concat(s.items), []) : [];
  const vkey = (topic, item) => (topic.videoKey || topic.id) + ":vid:" + (parseYouTube(item.url).id || item.url);
  function videoProgress(topic) {
    const all = allVideos(topic); if (!all.length) return 0;
    const seen = all.filter(it => state.videos[vkey(topic, it)]).length;
    return Math.round((seen / all.length) * 100);
  }
  function parseYouTube(url) {
    const out = { id: "", start: 0 };
    if (!url) return out;
    const idm = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
    if (idm) out.id = idm[1];
    const tm = url.match(/[?&]t=(\d+)/) || url.match(/[?&]start=(\d+)/);
    if (tm) out.start = parseInt(tm[1], 10) || 0;
    return out;
  }

  function chapterTopic(chapter, levelId, methodId) {
    const base = chapter.topic ? getTopic(chapter.topic) : null;
    const chapterVideos = Array.isArray(chapter.videos) && chapter.videos.length ? chapter.videos : null;
    const videos = chapterVideos || (base && base.videos);
    if (!base && !videos) return null;

    const topic = Object.assign({
      id: `${methodId}-${levelId}-${chapter.num}`,
      title: chapter.title,
      icon: "🎬",
      theme: "t-blue",
      domain: "Videoleerlijn",
      intro: `${METHODS[methodId]?.name || "Methode"} ${levelId.toUpperCase()} hoofdstuk ${chapter.num}: bekijk de videoleerlijn bij ${chapter.title}.`,
      paragraphs: [],
      exams: []
    }, base || {});

    topic.title = chapter.title || topic.title;
    if (videos) topic.videos = videos;
    if (chapterVideos || !base) topic.videoKey = `${levelId}:${methodId}:${chapter.num}`;
    topic.chapterRef = { levelId, methodId, num: chapter.num };
    return topic;
  }

  function chapterTopicFromRef(ref) {
    if (!ref) return null;
    const levelData = CURRICULUM[ref.levelId];
    const chapters = levelData && levelData.methodes[ref.methodId] && levelData.methodes[ref.methodId].chapters;
    const chapter = chapters && chapters.find(ch => ch.num === ref.num);
    return chapter ? chapterTopic(chapter, ref.levelId, ref.methodId) : null;
  }

  /* ---------- topbar ---------- */
  function refreshTopbar() {
    const li = levelInfo(state.xp);
    const setup = !!(state.settings.niveau && state.settings.methode);
    const hud = $("#hud"); if (hud) hud.style.visibility = setup ? "visible" : "hidden";
    $("#xpFill").style.width = li.pct + "%";
    $("#lvlBadge").textContent = li.level;
    $("#lvlRing").style.setProperty("--p", li.pct);
    $("#xpText").textContent = state.xp + " XP";
    $("#streakVal").textContent = state.streakDays;
  }

  /* ---------- nav helpers ---------- */
  const app = $("#app");
  function go(view, ...args) { try { window.scrollTo({ top: 0, behavior: "instant" }); } catch (e) { window.scrollTo(0, 0); } view(...args); }

  /* ===================================================================
     ONBOARDING — kies niveau + methode
     =================================================================== */
  function renderSetup(fromSettings) {
    const v = el("div", "view setup");
    let pickNiveau = state.settings.niveau, pickMethode = state.settings.methode;

    const hero = el("div", "setup-hero");
    hero.innerHTML = `
      <span class="kicker">Biologie · HAVO & VWO</span>
      <h1>Welkom bij <span class="grad">BioQuest</span> 🧬</h1>
      <p>Alles voor je biologie in één overzicht: samengevatte theorie, flitskaarten, oefenvragen en échte examenopgaven met antwoordmodel. Kies je niveau en methode om te beginnen.</p>`;
    v.appendChild(hero);

    v.appendChild(el("div", "section-title", "1 · Kies je niveau"));
    const nivRow = el("div", "pick-row");
    ["havo", "vwo"].forEach(id => {
      const c = CURRICULUM[id];
      const b = el("button", "pick-card", `<div class="pick-emoji">${id === "havo" ? "🎓" : "🏛️"}</div><h3>${esc(c.name)}</h3><p>${esc(c.tagline)}</p>`);
      b.dataset.id = id;
      if (pickNiveau === id) b.classList.add("sel");
      b.onclick = () => { pickNiveau = id; [...nivRow.children].forEach(x => x.classList.toggle("sel", x.dataset.id === id)); refreshBtn(); };
      nivRow.appendChild(b);
    });
    v.appendChild(nivRow);

    v.appendChild(el("div", "section-title", "2 · Kies je methode"));
    const metRow = el("div", "pick-row");
    Object.values(METHODS).forEach(m => {
      const b = el("button", "pick-card", `<div class="pick-emoji" style="color:${m.color}">${icon("book")}</div><h3>${esc(m.name)}</h3><p>${esc(m.tagline)}</p>`);
      b.dataset.id = m.id;
      if (pickMethode === m.id) b.classList.add("sel");
      b.onclick = () => { pickMethode = m.id; [...metRow.children].forEach(x => x.classList.toggle("sel", x.dataset.id === m.id)); refreshBtn(); };
      metRow.appendChild(b);
    });
    v.appendChild(metRow);

    const foot = el("div", "setup-foot");
    if (fromSettings) { const cancel = el("button", "btn ghost", "Annuleren"); cancel.onclick = () => go(renderHome); foot.appendChild(cancel); }
    const start = el("button", "btn big", "Aan de slag →"); start.id = "setupGo";
    start.onclick = () => {
      if (!pickNiveau || !pickMethode) { mascotSay("Kies eerst een niveau én een methode 🙂"); return; }
      state.settings.niveau = pickNiveau; state.settings.methode = pickMethode; save(); refreshTopbar();
      confettiBurst(.5); go(renderHome);
    };
    foot.appendChild(start); v.appendChild(foot);
    app.replaceChildren(v);
    function refreshBtn() { start.disabled = !(pickNiveau && pickMethode); }
    refreshBtn();
  }

  /* ===================================================================
     HOME / OVERZICHT
     =================================================================== */
  function renderHome() {
    if (!(state.settings.niveau && state.settings.methode)) return renderSetup(false);
    refreshTopbar();
    const li = levelInfo(state.xp);
    const dGoalPct = clamp((dailyXP() / DAILY_GOAL) * 100, 0, 100);
    const cur = niveau(), m = method();
    const hour = new Date().getHours();
    const greet = hour < 6 ? "Nog aan het leren?" : hour < 12 ? "Goedemorgen!" : hour < 18 ? "Goedemiddag!" : "Goedenavond!";
    const v = el("div", "view");

    /* hero + context switcher */
    const hero = el("div", "hero");
    hero.innerHTML = `
      <div class="hero-top">
        <span class="kicker">${greet}</span>
        <button class="ctx-chip" id="ctxChip" title="Wissel niveau of methode">
          <b>${esc(cur.name)}</b><span class="dot">·</span><span>${esc(m.name)}</span> <span class="ctx-edit">wijzig</span>
        </button>
      </div>
      <h1>Jouw biologie-<span class="grad">overzicht</span></h1>
      <p>Per hoofdstuk vind je de samengevatte theorie, flitskaarten, oefenvragen en échte examenopgaven met antwoordmodel. Kies een hoofdstuk om te starten. 🔥</p>
      <div class="dash">
        <div class="tile"><div class="lab">Level</div><div class="val">${li.level}</div></div>
        <div class="tile"><div class="lab"><span class="lab-ic">${icon("flame")}</span> Streak</div><div class="val">${state.streakDays} dag</div></div>
        <div class="tile"><div class="lab">Dagdoel</div>
          <div class="goalring"><span class="ring" style="--p:${dGoalPct}"><i>${dGoalPct >= 100 ? icon("check") : icon("target")}</i></span>
          <div><div class="val" style="font-size:18px">${dailyXP()}/${DAILY_GOAL}</div><div class="lab" style="text-transform:none">XP vandaag</div></div></div>
        </div>
      </div>`;
    v.appendChild(hero);

    /* chapters grid */
    const chapters = cur.methodes[m.id].chapters;
    const editie = cur.methodes[m.id].editie;
    const ready = chapters.filter(ch => chapterTopic(ch, cur.id, m.id)).length;
    const st = el("div", "section-title-row");
    st.innerHTML = `<span class="section-title" style="margin:0">Hoofdstukken · ${esc(m.name)} (${esc(editie)})</span><span class="st-count">${ready}/${chapters.length} beschikbaar</span>`;
    v.appendChild(st);
    const grid = el("div", "chapters stagger");
    chapters.forEach(ch => {
      const topic = chapterTopic(ch, cur.id, m.id);
      const card = el("div", "chapter" + (topic ? "" : " soon"));
      if (topic) {
        const pct = topicProgress(topic);
        card.classList.add(topic.theme);
        const videoOnly = !topic.paragraphs.length && hasVideos(topic);
        const meta = videoOnly
          ? `${allVideos(topic).length} video's · videoleerlijn`
          : `${topic.paragraphs.length} paragrafen${hasVideos(topic) ? " · " + allVideos(topic).length + " video's" : ""} · ${topic.exams.length} examenopgaven`;
        card.innerHTML = `
          <div class="ch-top"><span class="ch-num">${esc(ch.num)}</span><span class="ch-emoji">${topic.icon}</span><span class="ch-domain">${esc(topic.domain)}</span></div>
          <h3>${esc(ch.title)}</h3>
          <div class="ch-meta">${meta}</div>
          <div class="ch-bar"><span style="width:0%"></span></div>
          <div class="ch-foot"><span class="ch-pct">${pct}% ${videoOnly ? "bekeken" : "beheerst"}</span><span class="ch-go">Open →</span></div>`;
        card.onclick = () => go(renderChapter, topic.id, undefined, topic.chapterRef);
        requestAnimationFrame(() => { const b = card.querySelector(".ch-bar > span"); if (b) b.style.width = pct + "%"; });
      } else {
        card.innerHTML = `
          <div class="ch-top"><span class="ch-num">${esc(ch.num)}</span><span class="ch-emoji">📚</span></div>
          <h3>${esc(ch.title)}</h3>
          <div class="ch-meta">Inhoud in ontwikkeling</div>
          <div class="ch-foot"><span class="soon-pill">Binnenkort</span></div>`;
        card.onclick = () => mascotSay("Dit hoofdstuk wordt nog toegevoegd. Er zijn al veel hoofdstukken volledig uitgewerkt — kies er een met een gekleurde balk! ✨");
      }
      grid.appendChild(card);
    });
    v.appendChild(grid);

    /* recommendation */
    const weak = weakestParagraph();
    if (weak) {
      v.appendChild(el("div", "section-title", "Voor jou aanbevolen"));
      const rec = el("div", "rec-banner");
      rec.innerHTML = `<div class="rec-ic">🎯</div>
        <div class="rec-txt"><h4>Pak je zwakke plek</h4><p>${esc(weak.topic.icon + " " + weak.topic.title + " · " + weak.p.title)} · ${weak.pct}% beheerst</p></div>
        <span class="rec-go">Oefenen →</span>`;
      rec.onclick = () => go(renderChapter, weak.topic.id);
      v.appendChild(rec);
    }

    /* quick practice */
    v.appendChild(el("div", "section-title", "Snel oefenen"));
    const quick = el("div", "quick stagger");
    const dueCount = countDueCards();
    const smart = el("div", "qcard");
    smart.innerHTML = `<div class="qi">🧠</div><div><h4>Slimme sessie</h4><p>Adaptieve mix van oefenvragen over alle hoofdstukken</p></div>`;
    smart.onclick = smartSession;
    const examB = el("div", "qcard");
    examB.innerHTML = `<div class="qi">⚔️</div><div><h4>Examentraining</h4><p>15 gemixte vragen · 3 levens · haal een S-rang</p></div>`;
    examB.onclick = startExam;
    const due = el("div", "qcard");
    due.innerHTML = `<div class="qi">🔁</div><div><h4>Herhaal-stapel</h4><p>${dueCount ? dueCount + " flitskaart(en) klaar om te herhalen" : "Niets te herhalen — leer een hoofdstuk!"}</p></div>`;
    due.onclick = () => dueCount ? startReview() : go(renderChapter, TOPICS[0].id);
    quick.appendChild(smart); quick.appendChild(examB); quick.appendChild(due);
    v.appendChild(quick);

    app.replaceChildren(v);
    $("#ctxChip").onclick = () => go(renderSetup, true);
    mascotSay(pickHomeTip());
  }

  function weakestParagraph() {
    let best = null;
    TOPICS.forEach(topic => topic.paragraphs.forEach(p => {
      const pct = paraProgress(topic, p);
      if (pct > 0 && pct < 80 && (!best || pct < best.pct)) best = { topic, p, pct };
    }));
    return best;
  }
  function smartSession() {
    const pool = [];
    TOPICS.forEach(topic => topic.paragraphs.forEach(p => {
      const weight = Math.max(1, Math.round((100 - paraProgress(topic, p)) / 22) + 1);
      p.quiz.forEach(q => { for (let k = 0; k < weight; k++) pool.push({ q, id: pkey(topic, p) + "|" + q.q }); });
    }));
    const picked = [], seen = new Set(); let guard = 0;
    while (picked.length < 12 && guard++ < 600) { const it = pool[(Math.random() * pool.length) | 0]; if (!it || seen.has(it.id)) continue; seen.add(it.id); picked.push(it.q); }
    startQuiz(null, picked, "🧠 Slimme sessie");
  }

  /* ===================================================================
     HOOFDSTUK — tabbladen
     =================================================================== */
  function renderChapter(topicId, tab, chapterRef) {
    const topic = chapterTopicFromRef(chapterRef) || getTopic(topicId);
    if (!topic) return go(renderHome);
    const activeChapterRef = chapterRef || topic.chapterRef || null;

    const TAB_DEFS = [];
    if (topic.paragraphs.length) TAB_DEFS.push(
      ["theorie", icon("book"), "Theorie"],
      ["flitskaarten", icon("cards"), "Flitskaarten"],
      ["oefenvragen", icon("quiz"), "Oefenvragen"],
      ["examen", icon("exam"), "Examenopgaven"]
    );
    if (hasVideos(topic)) TAB_DEFS.push(["videos", icon("video"), "Video's"]);
    const validTabs = TAB_DEFS.map(t => t[0]);
    if (!validTabs.includes(tab)) tab = validTabs[0] || "theorie";

    const v = el("div", "view");
    const back = el("button", "backbtn", "← Overzicht"); back.onclick = () => go(renderHome); v.appendChild(back);

    const banner = el("div", "ch-banner " + topic.theme);
    const pct = topicProgress(topic);
    const metaBits = [];
    if (topic.paragraphs.length) metaBits.push(topic.paragraphs.length + " paragrafen");
    if (hasVideos(topic)) metaBits.push(allVideos(topic).length + " video's");
    banner.innerHTML = `<div class="ch-banner-ic">${topic.icon}</div>
      <div class="ch-banner-txt"><h2>${esc(topic.title)}</h2><p>${esc(topic.intro)}</p>
      <div class="ch-banner-bar"><span style="width:${pct}%"></span></div>
      <div class="ch-banner-meta">${pct}% ${topic.paragraphs.length ? "beheerst" : "bekeken"}${metaBits.length ? " · " + metaBits.join(" · ") : ""}</div></div>`;
    v.appendChild(banner);

    const tabs = el("div", "tabs");
    TAB_DEFS.forEach(([id, ic, label]) => {
      const t = el("button", "tab" + (id === tab ? " on" : ""), `${ic}<span>${label}</span>`);
      t.onclick = () => go(renderChapter, topicId, id, activeChapterRef);
      tabs.appendChild(t);
    });
    v.appendChild(tabs);

    const body = el("div", "tab-body");
    v.appendChild(body);
    app.replaceChildren(v);

    if (tab === "videos") tabVideos(topic, body);
    else if (tab === "theorie") tabTheorie(topic, body);
    else if (tab === "flitskaarten") tabFlashcards(topic, body);
    else if (tab === "oefenvragen") tabQuiz(topic, body);
    else if (tab === "examen") tabExam(topic, body);
  }

  /* ---------- tab: video's (videoleerlijn) ---------- */
  function tabVideos(topic, body) {
    body.appendChild(el("p", "tab-lead", "Bekijk de videoleerlijn van dit hoofdstuk. Elke video hoort bij een paragraaf en heeft de belangrijkste begrippen erbij. Markeer een video als bekeken om je voortgang bij te houden — dat levert ook XP op."));

    const all = allVideos(topic);
    const watchedCount = () => all.filter(it => state.videos[vkey(topic, it)]).length;
    const prog = el("div", "vid-progress");
    const updateProg = () => {
      const w = watchedCount(), pct = all.length ? Math.round(w / all.length * 100) : 0;
      prog.innerHTML = `<div class="vid-prog-bar"><span style="width:${pct}%"></span></div>
        <div class="vid-prog-lab">${w}/${all.length} video's bekeken · ${pct}%</div>`;
    };
    updateProg();
    body.appendChild(prog);

    topic.videos.forEach(section => {
      const sec = el("section", "vid-section");
      sec.innerHTML = `<div class="vid-sec-head"><span class="vid-sec-id">${esc(section.id)}</span>
        <div><h3 class="vid-sec-title">${esc(section.title || "")}</h3>${section.intro ? `<p class="vid-sec-intro">${esc(section.intro)}</p>` : ""}</div></div>`;
      const grid = el("div", "vid-grid");
      section.items.forEach(item => grid.appendChild(videoCard(topic, item, updateProg)));
      sec.appendChild(grid);
      body.appendChild(sec);
    });
  }

  function videoCard(topic, item, onWatchChange) {
    const yt = parseYouTube(item.url);
    const key = vkey(topic, item);
    const card = el("article", "vid-card" + (state.videos[key] ? " watched" : ""));

    const frame = el("div", "vid-frame");
    if (yt.id) {
      const src = `https://www.youtube-nocookie.com/embed/${yt.id}?rel=0&modestbranding=1${yt.start ? "&start=" + yt.start : ""}`;
      const iframe = el("iframe");
      iframe.src = src;
      iframe.title = item.title;
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.setAttribute("allowfullscreen", "");
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      frame.appendChild(iframe);
    } else {
      frame.appendChild(el("a", "vid-fallback", `▶ Bekijk op YouTube`)).href = item.url;
    }
    card.appendChild(frame);

    const info = el("div", "vid-info");
    const head = el("div", "vid-head");
    head.innerHTML = `<h4 class="vid-title">${esc(item.title)}</h4>${item.duration ? `<span class="vid-dur">${esc(item.duration)}</span>` : ""}`;
    info.appendChild(head);
    if (item.desc) info.appendChild(el("p", "vid-desc", esc(item.desc)));
    if (item.note) info.appendChild(el("div", "vid-note", "⏱️ " + esc(item.note)));
    if (item.terms && item.terms.length) {
      const tags = el("div", "vid-terms");
      item.terms.forEach(t => tags.appendChild(el("span", "vid-term", esc(t))));
      info.appendChild(tags);
    }

    const foot = el("div", "vid-foot");
    const watchBtn = el("button", "btn ghost small vid-watch");
    const setLabel = () => { watchBtn.innerHTML = state.videos[key] ? "✓ Bekeken" : "Markeer als bekeken"; };
    setLabel();
    watchBtn.onclick = () => {
      if (state.videos[key]) {
        delete state.videos[key];
        card.classList.remove("watched");
      } else {
        state.videos[key] = { at: Date.now() };
        card.classList.add("watched");
        addXP(5); markStudiedToday();
      }
      save(); setLabel(); if (onWatchChange) onWatchChange();
    };
    const openLink = el("a", "vid-open", "YouTube ↗"); openLink.href = item.url; openLink.target = "_blank"; openLink.rel = "noopener";
    foot.appendChild(watchBtn); foot.appendChild(openLink);
    info.appendChild(foot);

    card.appendChild(info);
    return card;
  }

  /* ---------- tab: theorie ---------- */
  function tabTheorie(topic, body) {
    body.appendChild(el("p", "tab-lead", "Lees per paragraaf de samengevatte theorie. Wil je meer? Vraag de AI-tutor gericht om uitleg — dat gebeurt alleen als jij erop klikt."));
    topic.paragraphs.forEach(p => {
      const rec = state.paras[pkey(topic, p)] || {};
      const det = el("details", "para-acc" + (rec.learnDone ? " done" : ""));
      const goalsHtml = `<div class="glass goalbox"><div class="gt">🎯 Wat je gaat leren</div><ul>${p.goals.map(g => `<li>${esc(g)}</li>`).join("")}</ul></div>`;
      det.innerHTML = `<summary><span class="pa-id">${esc(p.id)}</span><span class="pa-title">${esc(p.title)}</span>${rec.learnDone ? '<span class="pa-done">✓ gelezen</span>' : ""}<span class="pa-chev">▾</span></summary>`;
      const inner = el("div", "para-inner");
      inner.innerHTML = goalsHtml + `<div class="summary">${formatSummary(p.summary)}</div>`;

      const aiRow = el("div", "chat-suggest");
      [["🤖 Geef een voorbeeld", "Geef één concreet, alledaags voorbeeld dat deze stof goed illustreert. Maximaal 3 zinnen."],
      ["✨ Leg simpeler uit", "Leg deze samenvatting nog eenvoudiger uit, in 3 korte zinnen, alsof ik 12 ben."],
      ["🧠 Ezelsbruggetje", "Geef een pakkend ezelsbruggetje om de belangrijkste begrippen te onthouden."]]
        .forEach(([label, prompt]) => { const c = el("button", "chip", label); c.onclick = () => aiElaborate(topic, p, inner, prompt); aiRow.appendChild(c); });
      inner.appendChild(el("div", "ai-optin-note", "AI-uitleg is optioneel — klik hierboven als je het wilt."));
      inner.appendChild(aiRow);

      const nav = el("div", "para-actions");
      const done = el("button", "btn ghost small", rec.learnDone ? "✓ Gemarkeerd als gelezen" : "Markeer als gelezen");
      done.onclick = () => { const r = state.paras[pkey(topic, p)] || {}; if (!r.learnDone) addXP(10); r.learnDone = true; state.paras[pkey(topic, p)] = r; save(); markStudiedToday(); done.textContent = "✓ Gemarkeerd als gelezen"; det.classList.add("done"); };
      const toCards = el("button", "btn small", "Flitskaarten van deze paragraaf →");
      toCards.onclick = () => startFlashcards(topic, p);
      nav.appendChild(done); nav.appendChild(toCards);
      inner.appendChild(nav);
      det.appendChild(inner);
      body.appendChild(det);
    });
    async function aiElaborate(topic, p, container, prompt) {
      const old = container.querySelector(".ai-note"); if (old) old.remove();
      const note = el("div", "ai-note"); note.appendChild(spinnerEl("AI denkt mee…")); container.querySelector(".chat-suggest").after(note);
      try {
        const reply = await aiChat([
          { role: "system", content: "Je bent een biologie-bijlesdocent (Nederlands, HAVO/VWO). Gebruik UITSLUITEND onderstaande leerstof en verzin niets bij.\n\n" + groundingText(p) },
          { role: "user", content: prompt }
        ], { temperature: 0.5, max_tokens: 320 });
        note.replaceChildren(); note.innerHTML = `<div class="ai-tag">🤖 AI-tutor</div>${esc(reply)}`;
        addXP(2);
      } catch (e) { note.remove(); handleAiErr(e); }
    }
  }

  /* ---------- tab: flitskaarten ---------- */
  function tabFlashcards(topic, body) {
    body.appendChild(el("p", "tab-lead", "Oefen de begrippen met flitskaarten. Je moeilijke kaarten komen via spaced repetition vaker terug."));
    const all = el("div", "card-launch");
    const allDeck = el("button", "launch-card");
    const total = topic.paragraphs.reduce((s, p) => s + p.cards.length, 0);
    const known = topic.paragraphs.reduce((s, p) => s + p.cards.filter(c => { const cc = state.cards[cardKey(topic, p, c.term)]; return cc && cc.box >= 3; }).length, 0);
    allDeck.innerHTML = `<div class="lc-ic">🃏</div><div><h4>Alle begrippen</h4><p>${known}/${total} gekend · hele hoofdstuk</p></div>`;
    allDeck.onclick = () => startFlashcards(topic, null);
    all.appendChild(allDeck);
    body.appendChild(all);
    body.appendChild(el("div", "section-title", "Per paragraaf"));
    const grid = el("div", "card-launch");
    topic.paragraphs.forEach(p => {
      const k = p.cards.filter(c => { const cc = state.cards[cardKey(topic, p, c.term)]; return cc && cc.box >= 3; }).length;
      const b = el("button", "launch-card small");
      b.innerHTML = `<div class="lc-ic">${p.id}</div><div><h4>${esc(p.title)}</h4><p>${k}/${p.cards.length} gekend</p></div>`;
      b.onclick = () => startFlashcards(topic, p);
      grid.appendChild(b);
    });
    body.appendChild(grid);
  }

  /* ---------- tab: oefenvragen ---------- */
  function tabQuiz(topic, body) {
    body.appendChild(el("p", "tab-lead", "Toets jezelf met meerkeuzevragen. Direct feedback, combo-bonus en — als je wilt — AI-uitleg bij een fout antwoord."));
    const allQ = [];
    const grid = el("div", "card-launch");
    topic.paragraphs.forEach(p => {
      p.quiz.forEach(q => allQ.push(q));
      const rec = state.paras[pkey(topic, p)] || {};
      const best = Math.round((rec.quizBest || 0) * 100);
      const b = el("button", "launch-card small");
      b.innerHTML = `<div class="lc-ic">${p.id}</div><div><h4>${esc(p.title)}</h4><p>${p.quiz.length} vragen · beste ${best}%</p></div>`;
      b.onclick = () => startQuiz(p, p.quiz, "⚡ " + topic.title + " " + p.id, { topic });
      grid.appendChild(b);
    });
    const allBtn = el("button", "launch-card");
    allBtn.innerHTML = `<div class="lc-ic">⚡</div><div><h4>Alle oefenvragen</h4><p>${allQ.length} vragen uit het hele hoofdstuk</p></div>`;
    allBtn.onclick = () => startQuiz(null, allQ, "⚡ " + topic.title, { topic });
    body.appendChild(allBtn);
    body.appendChild(el("div", "section-title", "Per paragraaf"));
    body.appendChild(grid);
  }

  /* ---------- tab: examenopgaven ---------- */
  function tabExam(topic, body) {
    body.appendChild(el("p", "tab-lead", "Échte examenopgaven in examenstijl, mét puntenantwoordmodel. Schrijf je antwoord, vergelijk met het model — en laat de AI desgewenst je inhoud én formulering nakijken."));
    topic.exams.forEach((ex, idx) => {
      const rec = state.paras["exam:" + ex.id] || {};
      const item = el("div", "exam-item");
      item.innerHTML = `
        <div class="exam-head"><span class="exam-badge">${icon("exam")} Examenopgave ${idx + 1}</span><span class="exam-pts">${ex.points} punten</span>${rec.done ? '<span class="pa-done">✓ gedaan</span>' : ""}</div>
        <h4 class="exam-title">${esc(ex.title)}</h4>
        ${ex.context ? `<div class="exam-context">${esc(ex.context)}</div>` : ""}
        <div class="exam-q">${esc(ex.question)}</div>`;
      const ta = el("textarea", "open-input"); ta.placeholder = "Schrijf hier je antwoord in volledige zinnen…"; ta.rows = 5;
      item.appendChild(ta);

      const foot = el("div", "open-foot");
      const modelBtn = el("button", "btn ghost small", "📘 Toon antwoordmodel");
      const aiBtn = el("button", "btn small", "🤖 Laat AI nakijken");
      foot.appendChild(modelBtn); foot.appendChild(aiBtn);
      item.appendChild(foot);
      item.appendChild(el("div", "ai-optin-note", "AI-nakijken is optioneel: krijg feedback op je inhoud én je formulering, plus een geschatte score."));

      const modelBox = el("div", "exam-model hidden");
      modelBox.innerHTML = `<div class="fb-model-tag">📘 Antwoordmodel (${ex.points} p)</div><ol>${ex.model.map(x => `<li>${esc(x)}</li>`).join("")}</ol>`;
      item.appendChild(modelBox);
      const aiBox = el("div", "ai-fb-slot"); item.appendChild(aiBox);

      modelBtn.onclick = () => {
        const open = modelBox.classList.toggle("hidden") === false;
        modelBtn.textContent = open ? "📘 Verberg antwoordmodel" : "📘 Toon antwoordmodel";
        if (open) { const r = state.paras["exam:" + ex.id] || {}; if (!r.done) { addXP(5); r.done = true; state.paras["exam:" + ex.id] = r; save(); markStudiedToday(); } }
      };
      aiBtn.onclick = () => gradeExam(topic, ex, ta.value, aiBox, aiBtn);
      body.appendChild(item);
    });
    async function gradeExam(topic, ex, answer, box, btn) {
      if (!answer.trim()) { mascotSay("Schrijf eerst een antwoord ✍️"); return; }
      box.replaceChildren(spinnerEl("Je antwoord wordt nagekeken op inhoud én formulering…"));
      btn.disabled = true;
      try {
        const res = await aiJSON([
          { role: "system", content: "Je bent een ervaren, eerlijke maar bemoedigende examinator biologie (Nederlands, HAVO/VWO). Beoordeel het antwoord van de leerling t.o.v. het puntenantwoordmodel. Geef zowel feedback op de INHOUD (kloppen de biologiepunten?) als op de FORMULERING (helder, volledig, correct vakjargon, in hele zinnen). Baseer de inhoud UITSLUITEND op onderstaande leerstof en het antwoordmodel.\n\n" + groundingText2(topic) +
            "\n\nAntwoord UITSLUITEND met geldige JSON: {\"score\": <geheel getal 0-" + ex.points + ">, \"maxscore\": " + ex.points + ", \"oordeel\": \"korte samenvatting\", \"inhoud\": \"1-3 zinnen feedback op de biologische inhoud\", \"formulering\": \"1-2 zinnen feedback op de manier van formuleren\", \"goed\": [\"wat goed was\"], \"gemist\": [\"welk scorepunt nog ontbrak\"]}." },
          { role: "user", content: JSON.stringify({ vraag: ex.question, context: ex.context, antwoordmodel: ex.model, maxpunten: ex.points, antwoord_leerling: answer }) }
        ], { temperature: 0.2, max_tokens: 550 });
        renderExamFeedback(ex, res, box);
        const r = state.paras["exam:" + ex.id] || {}; if (!r.done) { r.done = true; state.paras["exam:" + ex.id] = r; save(); }
        markStudiedToday();
      } catch (e) { box.replaceChildren(); handleAiErr(e); }
      finally { btn.disabled = false; }
    }
    function renderExamFeedback(ex, res, box) {
      const max = res.maxscore || ex.points;
      const score = clamp(Math.round(res.score || 0), 0, max);
      const ratio = max ? score / max : 0;
      const col = ratio >= 0.7 ? "var(--green)" : ratio >= 0.4 ? "var(--gold)" : "var(--red)";
      box.replaceChildren();
      const head = el("div", "fb-head");
      head.innerHTML = `<div class="score-ring" style="--p:${ratio * 100};--col:${col}"><i>${score}<small>/${max}</small></i></div>
        <div><div class="fb-verdict">${esc(res.oordeel || (ratio >= .7 ? "Goed!" : ratio >= .4 ? "Bijna" : "Nog oefenen"))}</div></div>`;
      box.appendChild(head);
      const detail = el("div", "fb-detail");
      if (res.inhoud) detail.appendChild(el("div", "fb-block", `<b>🔬 Inhoud</b><p>${esc(res.inhoud)}</p>`));
      if (res.formulering) detail.appendChild(el("div", "fb-block", `<b>✍️ Formulering</b><p>${esc(res.formulering)}</p>`));
      box.appendChild(detail);
      const lists = el("div", "fb-lists");
      if (res.goed && res.goed.length) lists.appendChild(el("div", "fb-good", `<b>✅ Goed</b><ul>${res.goed.map(x => "<li>" + esc(x) + "</li>").join("")}</ul>`));
      if (res.gemist && res.gemist.length) lists.appendChild(el("div", "fb-miss", `<b>➕ Nog toevoegen</b><ul>${res.gemist.map(x => "<li>" + esc(x) + "</li>").join("")}</ul>`));
      box.appendChild(lists);
      const gain = 4 + Math.round(ratio * 10); addXP(gain);
      if (ratio >= .7) { confettiBurst(.5); mascotCheer(); }
    }
  }

  /* ===================================================================
     QUIZ
     =================================================================== */
  function startQuiz(para, questions, label, opts = {}) {
    const topic = opts.topic || null;
    const lives = opts.lives || 0;
    const qs = shuffle(questions).map(q => { const order = shuffle(q.options.map((_, i) => i)); return { q: q.q, opts: order.map(i => q.options[i]), ans: order.indexOf(q.answer), explain: q.explain }; });
    let i = 0, score = 0, combo = 0, best = 0, hp = lives, xpEarned = 0;
    const KEYS = ["A", "B", "C", "D", "E"];
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => backToChapterOrHome(topic, "oefenvragen"); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel); app.replaceChildren(v);

    function draw() {
      const q = qs[i];
      panel.replaceChildren();
      const top = el("div", "topline");
      const pct = (i / qs.length) * 100;
      top.innerHTML = `<span class="pbar"><span style="width:${pct}%"></span></span>` +
        (lives ? `<span class="hearts">${Array.from({ length: lives }, (_, h) => `<span class="h ${h >= hp ? "lost" : ""}">${icon("heart")}</span>`).join("")}</span>` : `<span class="combo" id="combo">${combo > 1 ? icon("flame") + " " + combo : ""}</span>`);
      panel.appendChild(top);
      panel.appendChild(el("div", "qtext", esc(q.q)));
      const options = el("div", "options");
      q.opts.forEach((o, oi) => { const b = el("button", "opt", `<span class="key">${KEYS[oi]}</span><span>${esc(o)}</span>`); b.onclick = () => answer(oi, options, q); options.appendChild(b); });
      panel.appendChild(options);
    }
    function answer(choice, options, q) {
      [...options.children].forEach((b, bi) => { b.disabled = true; if (bi === q.ans) b.classList.add("correct"); else if (bi === choice) b.classList.add("wrong"); else b.classList.add("dim"); });
      const ok = choice === q.ans;
      if (ok) {
        combo++; best = Math.max(best, combo); score++;
        const gain = 8 + Math.min(combo, 6) * 2; xpEarned += gain; addXP(gain); sound("correct");
        const correctBtn = options.children[q.ans]; floatXP(gain, correctBtn);
        const cb = $("#combo"); if (cb) { cb.innerHTML = combo > 1 ? icon("flame") + " x" + combo : ""; cb.classList.add("bump"); setTimeout(() => cb.classList.remove("bump"), 200); }
        if (combo >= 3) confettiBurst(.4, centerOf(correctBtn));
      } else { combo = 0; sound("wrong"); if (lives) { hp--; } }
      const exBox = el("div", "explain " + (ok ? "good" : "bad"), `<b class="${ok ? "ok" : "no"}">${ok ? "Goed! ✅" : "Helaas ❌"}</b> ${esc(q.explain)}`);
      panel.appendChild(exBox);
      if (!ok) {
        const why = el("button", "why-btn", "🤖 Leg uit waarom");
        why.onclick = () => aiWhy(exBox, why, q, q.opts[choice]);
        exBox.appendChild(why);
      }
      const foot = el("div", "qfoot");
      const last = i >= qs.length - 1, dead = lives && hp <= 0;
      const nx = el("button", "btn", dead ? "Game over 💀" : last ? "Klaar 🎉" : "Volgende →");
      nx.onclick = () => { if (dead) return finish(); i++; (i < qs.length) ? draw() : finish(); };
      foot.appendChild(nx); panel.appendChild(foot);
    }
    async function aiWhy(box, btn, q, chosenText) {
      btn.replaceWith(spinnerEl("AI legt het uit…"));
      const ground = para ? groundingText(para) : ("Vraag-uitleg: " + q.explain);
      try {
        const reply = await aiChat([
          { role: "system", content: "Je bent een biologiedocent (Nederlands, HAVO/VWO). Gebruik UITSLUITEND deze leerstof als bron en verzin niets.\n\n" + ground },
          { role: "user", content: "Vraag: " + q.q + "\nIk koos: \"" + chosenText + "\"\nHet juiste antwoord is: \"" + q.opts[q.ans] + "\".\nLeg in maximaal 3 zinnen uit waarom mijn keuze fout is en waarom het juiste antwoord klopt." }
        ], { temperature: 0.3, max_tokens: 220 });
        const note = el("div", "ai-note"); note.innerHTML = `<div class="ai-tag">🤖 AI-tutor</div>${esc(reply)}`;
        const sp = box.querySelector(".ai-loading"); if (sp) sp.replaceWith(note); else box.appendChild(note);
        addXP(2);
      } catch (e) {
        const sp = box.querySelector(".ai-loading"); if (sp) sp.remove(); handleAiErr(e);
      }
    }
    function finish() {
      markStudiedToday();
      const acc = score / qs.length;
      if (para && topic) { const k = pkey(topic, para); const rec = state.paras[k] || {}; rec.quizBest = Math.max(rec.quizBest || 0, acc); state.paras[k] = rec; save(); }
      const rank = lives ? (hp <= 0 ? "F" : acc >= 1 ? "S" : acc >= .85 ? "A" : acc >= .7 ? "B" : acc >= .5 ? "C" : "D") : null;
      const stars = acc >= .9 ? 3 : acc >= .6 ? 2 : acc > 0 ? 1 : 0;
      resultScreen({
        emoji: acc >= .9 ? "🏆" : acc >= .6 ? "🎉" : "💪",
        title: lives ? "Training voorbij!" : acc >= .9 ? "Briljant!" : acc >= .6 ? "Goed gedaan!" : "Blijf oefenen!",
        rank, stars, xpEarned,
        score: `${score} / ${qs.length} goed · hoogste combo 🔥${best}`,
        onRetry: () => startQuiz(para, questions, label, opts),
        onBack: () => backToChapterOrHome(topic, "oefenvragen")
      });
      if (acc >= .6 && !(lives && hp <= 0)) { confettiBurst(); mascotCheer(); }
    }
    draw();
  }
  function startExam() {
    const all = []; TOPICS.forEach(topic => topic.paragraphs.forEach(p => p.quiz.forEach(q => all.push(q))));
    startQuiz(null, shuffle(all).slice(0, 15), "⚔️ Examentraining", { lives: 3 });
  }

  /* ===================================================================
     FLITSKAARTEN (spaced repetition)
     =================================================================== */
  const BOX_INTERVAL = [0, 0, 1, 3, 7, 16];
  const dueTime = (box) => Date.now() + (BOX_INTERVAL[box] || 0) * 864e5;
  function countDueCards() { let n = 0; const now = Date.now(); TOPICS.forEach(topic => topic.paragraphs.forEach(p => p.cards.forEach(c => { const r = state.cards[cardKey(topic, p, c.term)]; if (r && r.due <= now && r.box < 5) n++; }))); return n; }
  function startReview() {
    const now = Date.now(), deck = [];
    TOPICS.forEach(topic => topic.paragraphs.forEach(p => p.cards.forEach(c => { const r = state.cards[cardKey(topic, p, c.term)]; if (r && r.due <= now && r.box < 5) deck.push({ topic, para: p, card: c }); })));
    if (!deck.length) { mascotSay("Niets te herhalen! Leer een hoofdstuk voor nieuwe kaarten. 🎉"); return go(renderHome); }
    runFlashcards(shuffle(deck), null, null);
  }
  const boxOf = (d) => { const r = state.cards[cardKey(d.topic, d.para, d.card.term)]; return r ? r.box : 0; };
  function startFlashcards(topic, para) {
    const deck = [];
    (para ? [para] : topic.paragraphs).forEach(p => p.cards.forEach(c => deck.push({ topic, para: p, card: c })));
    deck.sort((a, b) => boxOf(a) - boxOf(b));
    runFlashcards(deck, topic, para);
  }
  function runFlashcards(deck, topic, para) {
    let i = 0, learned = 0;
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => topic ? go(renderChapter, topic.id, "flitskaarten") : go(renderHome); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel); app.replaceChildren(v);

    function draw() {
      if (i >= deck.length) return done();
      const d = deck[i], c = d.card, box = boxOf(d);
      panel.replaceChildren();
      const pct = (i / deck.length) * 100;
      panel.appendChild(el("div", "topline", `<span class="pbar"><span style="width:${pct}%"></span></span><span class="fc-meta">box ${box}/5 · ${i + 1}/${deck.length}</span>`));
      const stage = el("div", "fc-stage");
      const fc = el("div", "flashcard");
      fc.innerHTML = `<div class="fc-inner">
        <div class="fc-face fc-front"><div class="cn">🃏</div><div class="term">${esc(c.term)}</div><div class="hint">tik om om te draaien 🔄</div></div>
        <div class="fc-face fc-back"><div class="def">${esc(c.def)}</div></div></div>`;
      let flipped = false;
      const rate = el("div", "fc-rate hidden");
      fc.onclick = () => { flipped = !flipped; fc.classList.toggle("flipped", flipped); rate.classList.toggle("hidden", !flipped); };
      const mkr = (cls, txt, g) => { const b = el("button", cls, txt); b.onclick = (e) => { e.stopPropagation(); rateCard(d, g); }; return b; };
      rate.appendChild(mkr("rate-again", "❌ Nog niet", 0));
      rate.appendChild(mkr("rate-hard", "😅 Twijfel", 1));
      rate.appendChild(mkr("rate-good", "✅ Ik weet 't", 2));
      stage.appendChild(fc); stage.appendChild(rate);
      panel.appendChild(stage);
    }
    function rateCard(d, g) {
      const k = cardKey(d.topic, d.para, d.card.term), rec = state.cards[k] || { box: 1, due: 0 };
      if (g === 0) rec.box = 1; else if (g === 1) rec.box = Math.max(1, rec.box); else { rec.box = Math.min(5, (rec.box || 1) + 1); learned++; addXP(6); sound("correct"); }
      rec.due = dueTime(rec.box); state.cards[k] = rec; save(); i++; draw();
    }
    function done() {
      markStudiedToday(); mascotCheer();
      resultScreen({ emoji: "🃏", title: "Stapel doorgewerkt!", score: `${learned} kaart(en) als gekend gemarkeerd`,
        onRetry: () => topic ? startFlashcards(topic, para) : startReview(), onBack: () => topic ? go(renderChapter, topic.id, "flitskaarten") : go(renderHome) });
    }
    draw();
  }

  /* ===================================================================
     RESULT
     =================================================================== */
  function backToChapterOrHome(topic, tab) { topic ? go(renderChapter, topic.id, tab) : go(renderHome); }
  function resultScreen({ emoji, title, rank, stars, score, xpEarned, onRetry, onBack }) {
    const v = el("div", "view"); const panel = el("div", "panel result");
    panel.innerHTML = `<div class="big">${emoji}</div>` + (rank ? `<div class="rank">${rank}</div>` : "") +
      (stars != null && !rank ? `<div class="stars">${"★".repeat(stars)}<span class="dim">${"★".repeat(3 - stars)}</span></div>` : "") +
      `<h2>${esc(title)}</h2><div class="score">${esc(score)}</div>` +
      (xpEarned ? `<div class="xpgain" id="xpg">+0 XP</div>` : "");
    const actions = el("div", "actions");
    const r = el("button", "btn", "Opnieuw 🔁"); r.onclick = onRetry;
    const b = el("button", "btn ghost", "Verder →"); b.onclick = onBack;
    actions.appendChild(r); actions.appendChild(b); panel.appendChild(actions);
    v.appendChild(panel); app.replaceChildren(v);
    if (xpEarned) { const g = $("#xpg"); const t0 = performance.now(); (function st(t) { const k = clamp((t - t0) / 700, 0, 1); g.textContent = "+" + Math.round(xpEarned * (1 - Math.pow(1 - k, 3))) + " XP"; if (k < 1) requestAnimationFrame(st); })(t0); }
  }

  /* ===================================================================
     AI helpers
     =================================================================== */
  async function aiChat(messages, opts = {}) {
    const model = opts.model || state.settings.model || "gpt-4o-mini";
    const proxyBody = { messages, model };
    if (opts.json) proxyBody.json = true;
    if (typeof opts.temperature === "number") proxyBody.temperature = opts.temperature;
    if (typeof opts.max_tokens === "number") proxyBody.max_tokens = opts.max_tokens;
    try {
      const r = await fetch("/api/ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(proxyBody) });
      if (r.ok) { const d = await r.json(); if (d.content) return d.content; if (d.error) throw new Error("OpenAI (server): " + d.error); }
    } catch (e) { if (/OpenAI \(server\)/.test(e.message)) throw e; }
    const key = getKey(); if (!key) { const err = new Error("NO_KEY"); err.code = "NO_KEY"; throw err; }
    const body = { model, messages, temperature: typeof opts.temperature === "number" ? opts.temperature : 0.4 };
    if (opts.json) body.response_format = { type: "json_object" };
    if (typeof opts.max_tokens === "number") body.max_tokens = opts.max_tokens;
    const r2 = await fetch("https://api.openai.com/v1/chat/completions", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key }, body: JSON.stringify(body) });
    const d2 = await r2.json().catch(() => ({})); if (!r2.ok) throw new Error((d2.error && d2.error.message) || ("OpenAI fout " + r2.status)); return d2.choices[0].message.content;
  }
  async function aiJSON(messages, opts = {}) {
    const raw = await aiChat(messages, Object.assign({ json: true, temperature: 0.3 }, opts));
    try { return JSON.parse(raw); }
    catch (e) { const m = raw.match(/\{[\s\S]*\}/); if (m) { try { return JSON.parse(m[0]); } catch (_) { } } throw new Error("Kon het AI-antwoord niet lezen, probeer opnieuw."); }
  }
  function groundingText(p) {
    return "BRONTEKST (paragraaf " + p.id + " – " + p.title + "):\n" + (p.summary || "") +
      "\n\nBEGRIPPEN:\n" + p.cards.map(c => "• " + c.term + ": " + c.def).join("\n");
  }
  function groundingText2(topic) {
    return "BRONTEKST (hoofdstuk " + topic.title + "):\n" + topic.paragraphs.map(p => p.summary).join("\n\n") +
      "\n\nBEGRIPPEN:\n" + topic.paragraphs.flatMap(p => p.cards).map(c => "• " + c.term + ": " + c.def).join("\n");
  }
  function spinnerEl(text) { const d = el("div", "ai-loading"); d.innerHTML = `<span class="spinner"></span><span>${esc(text || "AI denkt na…")}</span>`; return d; }
  function handleAiErr(e) {
    if (e && e.code === "NO_KEY") { mascotSay("Stel eerst je AI-sleutel in ⚙️ (AI is optioneel)"); openSettings(); }
    else mascotSay("⚠️ " + (e && e.message || "Er ging iets mis met de AI."));
  }
  function formatSummary(txt) {
    const out = []; let list = null;
    String(txt).split("\n").forEach(line => {
      line = line.trim();
      if (!line) { if (list) { out.push(list + "</ul>"); list = null; } return; }
      if (line.startsWith("•")) { if (!list) list = '<ul class="sum-list">'; list += "<li>" + esc(line.replace(/^•\s*/, "")) + "</li>"; }
      else { if (list) { out.push(list + "</ul>"); list = null; } out.push("<p>" + esc(line) + "</p>"); }
    });
    if (list) out.push(list + "</ul>");
    return out.join("");
  }

  /* ===================================================================
     EFFECTS
     =================================================================== */
  let audioCtx = null;
  function sound(type) {
    if (!state.settings.sound) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const seq = type === "correct" ? [[660, 0], [880, .08]] : type === "wrong" ? [[200, 0]] : [[523, 0], [659, .09], [784, .18], [1047, .27]];
      seq.forEach(([f, t]) => { const o = audioCtx.createOscillator(), g = audioCtx.createGain(); o.type = type === "wrong" ? "sawtooth" : "triangle"; o.frequency.value = f; o.connect(g); g.connect(audioCtx.destination); const s = audioCtx.currentTime + t; g.gain.setValueAtTime(.0001, s); g.gain.exponentialRampToValueAtTime(.18, s + .02); g.gain.exponentialRampToValueAtTime(.0001, s + .22); o.start(s); o.stop(s + .24); });
    } catch (e) { }
  }

  const confCanvas = $("#confetti"), cctx = confCanvas.getContext("2d");
  let confetti = [], confAnim = null, confDpr = 1;
  const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function sizeCanvas() {
    confDpr = Math.min(2, window.devicePixelRatio || 1);
    confCanvas.width = innerWidth * confDpr; confCanvas.height = innerHeight * confDpr;
    confCanvas.style.width = innerWidth + "px"; confCanvas.style.height = innerHeight + "px";
    cctx.setTransform(confDpr, 0, 0, confDpr, 0, 0);
  }
  addEventListener("resize", sizeCanvas); sizeCanvas();
  const CONF_COLORS = ["#58cc02", "#1cb0f6", "#ffc800", "#ce82ff", "#ff4b4b", "#ff9600"];
  const SHAPES = ["rect", "circle", "ribbon"];
  function confettiBurst(scale = 1, origin) {
    if (reduceMotion()) return;
    const ox = origin ? origin.x : innerWidth / 2;
    const oy = origin ? origin.y : innerHeight / 3;
    const spread = origin ? 90 : 220;
    const n = Math.round(95 * scale);
    for (let k = 0; k < n; k++) {
      confetti.push({
        x: ox + (Math.random() - .5) * spread, y: oy + (Math.random() - .5) * 24,
        vx: (Math.random() - .5) * 13, vy: Math.random() * -13 - 4,
        g: .34 + Math.random() * .28, drag: .985 + Math.random() * .01,
        r: 4 + Math.random() * 7, rot: Math.random() * 6, vr: (Math.random() - .5) * .45,
        c: CONF_COLORS[(Math.random() * CONF_COLORS.length) | 0], shape: SHAPES[(Math.random() * SHAPES.length) | 0],
        life: 90 + (Math.random() * 40) | 0, max: 130
      });
    }
    if (!confAnim) confLoop();
  }
  function confLoop() {
    cctx.clearRect(0, 0, innerWidth, innerHeight);
    confetti.forEach(p => {
      p.vy += p.g; p.vx *= p.drag; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
      cctx.save(); cctx.globalAlpha = clamp(p.life / 28, 0, 1); cctx.translate(p.x, p.y); cctx.rotate(p.rot); cctx.fillStyle = p.c;
      if (p.shape === "circle") { cctx.beginPath(); cctx.arc(0, 0, p.r * .5, 0, 6.283); cctx.fill(); }
      else if (p.shape === "ribbon") { cctx.fillRect(-p.r * .28, -p.r * .9, p.r * .56, p.r * 1.8); }
      else { cctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6); }
      cctx.restore();
    });
    confetti = confetti.filter(p => p.life > 0 && p.y < innerHeight + 40);
    if (confetti.length) confAnim = requestAnimationFrame(confLoop); else { confAnim = null; cctx.clearRect(0, 0, innerWidth, innerHeight); }
  }
  function centerOf(node) { if (!node) return null; const r = node.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }
  function floatXP(amount, node) {
    if (reduceMotion() || !amount) return;
    const c = centerOf(node) || { x: innerWidth / 2, y: innerHeight / 2 };
    const f = el("div", "xp-float", "+" + amount + " XP");
    f.style.left = c.x + "px"; f.style.top = c.y + "px";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1000);
  }
  function levelUpToast(lvl) { const t = $("#toast"); t.textContent = "🎉 Level " + lvl + "! Lekker bezig!"; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2600); }

  /* ---------- mascot ---------- */
  const mascotEl = $("#mascot"); let bubbleTimer = null;
  function mascotSay(text) { const old = $("#bubble"); if (old) old.remove(); const b = el("div", "bubble"); b.id = "bubble"; b.textContent = text; b.title = "Tik om te sluiten"; b.onclick = () => b.remove(); document.body.appendChild(b); clearTimeout(bubbleTimer); bubbleTimer = setTimeout(() => b.remove(), 6000); }
  function mascotCheer() { mascotEl.classList.add("cheer"); setTimeout(() => mascotEl.classList.remove("cheer"), 700); }
  mascotEl.onclick = () => { mascotCheer(); sound("correct"); mascotSay(pickHomeTip()); };
  function pickHomeTip() { const t = ["Begin met de Theorie, oefen dan met de flitskaarten en vragen. 📖", "De examenopgaven hebben échte antwoordmodellen — vergelijk je antwoord goed. 📝", "Twijfel je bij een flitskaart? Markeer 'm 'Nog niet', hij komt vanzelf terug. 🃏", "Combo's in de quiz geven bonus-XP. Hou een reeks goed! ⚡", "AI is optioneel: laat je antwoord op inhoud én formulering nakijken. 🤖", "Elke dag een beetje oefenen houdt je streak in leven. 🔥"]; return t[(Math.random() * t.length) | 0]; }

  /* ===================================================================
     SETTINGS
     =================================================================== */
  function openSettings() {
    const ov = el("div", "overlay"); const m = el("div", "modal"); const keySet = !!getKey();
    const cur = niveau(), me = method();
    m.innerHTML = `
      <h3><span class="h3-ic">${icon("gear")}</span> Instellingen</h3>
      <p class="sub">Kies je niveau en methode. De AI-tutor is optioneel en draait op OpenAI.</p>
      <div class="field"><label>Niveau</label>
        <select id="setNiveau"><option value="havo">HAVO</option><option value="vwo">VWO</option></select></div>
      <div class="field"><label>Methode</label>
        <select id="setMethode"><option value="bvj">Biologie voor Jou</option><option value="nectar">Nectar</option></select></div>
      <div class="ai-optin-note" style="margin:2px 0 14px">🤖 AI-functies (uitleg, feedback op je antwoord & formulering) worden alléén uitgevoerd als jij er zelf op klikt.</div>
      <div class="note">💡 <b>Op Vercel?</b> Zet een environment variable <code>OPENAI_API_KEY</code> in je project. Dan werkt de AI automatisch via <code>/api/ai</code> en blijft je sleutel server-side.</div>
      <div class="field">
        <label>OpenAI API-key <span class="${keySet ? "badge-ok" : "badge-warn"}">${keySet ? "✓ opgeslagen" : "niet ingesteld (optioneel)"}</span></label>
        <input id="apiKey" type="password" placeholder="sk-..." value="${keySet ? "••••••••••••" : ""}">
        <div class="help">Wordt alleen in je browser (localStorage) bewaard en komt nooit in de code/repo.</div>
      </div>
      <div class="field"><label>AI-model</label>
        <select id="model"><option value="gpt-4o-mini">gpt-4o-mini (snel & goedkoop)</option><option value="gpt-4o">gpt-4o (slimmer)</option><option value="gpt-4.1-mini">gpt-4.1-mini</option></select>
      </div>
      <div class="toggle"><span>🔊 Geluidseffecten</span><input id="sound" class="switch" type="checkbox" ${state.settings.sound ? "checked" : ""}></div>
      <div class="toggle"><span style="color:var(--red)">🗑️ Alle voortgang wissen</span><button id="reset" class="btn ghost" style="padding:7px 15px">Reset</button></div>
      <div class="row"><button class="btn ghost" id="cancel">Sluiten</button><button class="btn" id="saveS">Opslaan</button></div>`;
    ov.appendChild(m); document.body.appendChild(ov);
    $("#setNiveau", m).value = state.settings.niveau || "havo";
    $("#setMethode", m).value = state.settings.methode || "bvj";
    $("#model", m).value = state.settings.model;
    ov.onclick = (e) => { if (e.target === ov) ov.remove(); };
    $("#cancel", m).onclick = () => ov.remove();
    $("#reset", m).onclick = () => { if (confirm("Weet je zeker dat je alle voortgang (XP, streak, kaarten) wist?")) { state = defaultState(); save(); refreshTopbar(); ov.remove(); go(renderSetup, false); } };
    $("#saveS", m).onclick = () => {
      const kv = $("#apiKey", m).value.trim(); if (kv && !/^•+$/.test(kv)) setKey(kv);
      state.settings.niveau = $("#setNiveau", m).value;
      state.settings.methode = $("#setMethode", m).value;
      state.settings.model = $("#model", m).value; state.settings.sound = $("#sound", m).checked; save();
      refreshTopbar(); ov.remove(); mascotSay("Opgeslagen! ✅"); go(renderHome);
    };
  }

  /* ---------- init ---------- */
  $("#brand").onclick = () => go(renderHome);
  $("#brand").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(renderHome); } });
  $("#settingsBtn").onclick = openSettings;
  refreshTopbar();
  go(renderHome);
})();
