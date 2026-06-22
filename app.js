/* ===================================================================
   BioQuest — engine
   =================================================================== */
(function () {
  "use strict";

  const SAVE_KEY = "bioquest_v2";
  const AIKEY_KEY = "bioquest_openai_key";
  const DAILY_GOAL = 60;

  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; };
  const todayStr = () => new Date().toISOString().slice(0, 10);
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

  /* ---------- state ---------- */
  const defaultState = () => ({ xp: 0, streakDays: 0, lastDay: null, day: { d: null, xp: 0 }, cards: {}, paras: {}, settings: { sound: true, model: "gpt-4o-mini" } });
  let state = load();
  function load() { try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); return s ? Object.assign(defaultState(), s) : defaultState(); } catch (e) { return defaultState(); } }
  function save() { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }
  const getKey = () => localStorage.getItem(AIKEY_KEY) || "";
  const setKey = (k) => { if (k) localStorage.setItem(AIKEY_KEY, k); else localStorage.removeItem(AIKEY_KEY); };

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
    mascotSay("🔥 Streak: " + state.streakDays + " dag(en)! Top bezig.");
  }

  /* ---------- progress ---------- */
  const cardKey = (paraId, term) => paraId + "::" + term;
  function paraProgress(p) {
    const rec = state.paras[p.id] || {};
    const quiz = rec.quizBest || 0;
    let known = 0; p.cards.forEach(c => { const cc = state.cards[cardKey(p.id, c.term)]; if (cc && cc.box >= 3) known++; });
    const cardPct = p.cards.length ? known / p.cards.length : 0;
    const parts = [quiz, cardPct, rec.learnDone ? 1 : 0];
    if (p.sequences.length) parts.push(rec.seqDone ? 1 : 0);
    return Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100);
  }
  function worldProgress(w) { const v = w.paragraphs.map(paraProgress); return Math.round(v.reduce((a, b) => a + b, 0) / v.length); }
  function starsFor(pct) { return pct >= 80 ? 3 : pct >= 50 ? 2 : pct >= 20 ? 1 : 0; }

  /* ---------- topbar ---------- */
  function refreshTopbar() {
    const li = levelInfo(state.xp);
    $("#xpFill").style.width = li.pct + "%";
    $("#lvlBadge").textContent = li.level;
    $("#lvlRing").style.setProperty("--p", li.pct);
    $("#xpText").textContent = state.xp + " XP";
    $("#streakVal").textContent = state.streakDays;
  }

  /* ---------- helpers ---------- */
  const WORLD_COLORS = { h14: ["#58cc02", "#46a302"], h15: ["#1cb0f6", "#1899d6"], h16: ["#ce82ff", "#a568cc"] };
  function worldOf(para) { return COURSE.worlds.find(w => w.paragraphs.some(p => p.id === para.id)); }
  const app = $("#app");
  function go(view, ...args) { window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" }); view(...args); }
  function animateNumber(node, to, suffix) {
    const from = 0, dur = 700, t0 = performance.now();
    (function step(t) { const k = clamp((t - t0) / dur, 0, 1); const e = 1 - Math.pow(1 - k, 3); node.textContent = Math.round(from + (to - from) * e) + (suffix || ""); if (k < 1) requestAnimationFrame(step); })(t0);
  }

  /* ===================================================================
     HOME / DASHBOARD
     =================================================================== */
  function renderHome() {
    const li = levelInfo(state.xp);
    const dGoalPct = clamp((dailyXP() / DAILY_GOAL) * 100, 0, 100);
    const totalCards = COURSE.worlds.reduce((a, w) => a + w.paragraphs.reduce((s, p) => s + p.cards.length, 0), 0);
    const hour = new Date().getHours();
    const greet = hour < 6 ? "Nog wakker?" : hour < 12 ? "Goedemorgen!" : hour < 18 ? "Goedemiddag!" : "Goedenavond!";
    const v = el("div", "view");

    const hero = el("div", "hero");
    hero.innerHTML = `
      <span class="kicker">Schoolexamen biologie</span>
      <h1>${greet} Klaar voor je <span class="grad">BioQuest</span>?</h1>
      <p>Leer de stof spelend: volg het levelpad, verdien XP en hou je streak vast. Elke dag een beetje = onthouden zonder stress. 🔥</p>
      <div class="dash">
        <div class="tile"><div class="lab">Level</div><div class="val" id="dLvl">${li.level}</div></div>
        <div class="tile"><div class="lab">🔥 Streak</div><div class="val" id="dStreak">${state.streakDays} dag</div></div>
        <div class="tile"><div class="lab">Dagdoel</div>
          <div class="goalring"><span class="ring" style="--p:${dGoalPct}"><i>${dGoalPct >= 100 ? "✅" : "🎯"}</i></span>
          <div><div class="val" style="font-size:18px">${dailyXP()}/${DAILY_GOAL}</div><div class="lab" style="text-transform:none">XP vandaag</div></div></div>
        </div>
      </div>`;
    v.appendChild(hero);

    v.appendChild(el("div", "section-title", "Kies je wereld"));
    const grid = el("div", "worlds stagger");
    COURSE.worlds.forEach(w => {
      const pct = worldProgress(w);
      const c = el("div", "world " + w.theme);
      c.innerHTML = `<div class="glow"></div>
        <div class="wicon">${w.icon}</div>
        <h3>${esc(w.title)}</h3>
        <div class="wmeta">${w.paragraphs.length} levels · ${w.paragraphs.reduce((s, p) => s + p.cards.length, 0)} begrippen</div>
        <div class="wbar"><span style="width:0%"></span></div>
        <div class="wpct">${pct}% beheerst</div>`;
      c.onclick = () => go(renderWorld, w.id);
      grid.appendChild(c);
      requestAnimationFrame(() => { c.querySelector(".wbar > span").style.width = pct + "%"; });
    });
    v.appendChild(grid);

    v.appendChild(el("div", "section-title", "Snel oefenen"));
    const quick = el("div", "quick stagger");
    const dueCount = countDueCards();
    const exam = el("div", "qcard");
    exam.innerHTML = `<div class="qi">⚔️</div><div><h4>Examen-battle</h4><p>15 gemixte vragen · 3 levens · haal een S-rang!</p></div>`;
    exam.onclick = startExam;
    const due = el("div", "qcard");
    due.innerHTML = `<div class="qi">🧠</div><div><h4>Herhaal-stapel</h4><p>${dueCount ? dueCount + " kaart(en) klaar om te herhalen" : "Niets te herhalen — speel een level!"}</p></div>`;
    due.onclick = () => dueCount ? startReview() : go(renderWorld, "h14");
    quick.appendChild(exam); quick.appendChild(due);
    v.appendChild(quick);

    app.replaceChildren(v);
    mascotSay(pickHomeTip());
  }

  /* ===================================================================
     WERELD = LEVELPAD
     =================================================================== */
  function renderWorld(worldId) {
    const w = COURSE.worlds.find(x => x.id === worldId);
    const [c1, c2] = WORLD_COLORS[worldId];
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Werelden"); back.onclick = () => go(renderHome); v.appendChild(back);
    const banner = el("div", "world-banner " + w.theme);
    banner.innerHTML = `<div class="big">${w.icon}</div><h2>${esc(w.title)}</h2><div class="wmeta">${worldProgress(w)}% beheerst · ${w.paragraphs.length} levels</div>`;
    v.appendChild(banner);

    // bepaal node-states
    const prog = w.paragraphs.map(paraProgress);
    let currentIdx = prog.findIndex(p => p < 70); if (currentIdx === -1) currentIdx = w.paragraphs.length - 1;

    const W = 320, spacing = 120, top = 56, pattern = [-58, 0, 58, 0];
    const height = (w.paragraphs.length - 1) * spacing + top + 70;
    const map = el("div", "map"); map.style.width = W + "px"; map.style.height = height + "px";

    const pts = w.paragraphs.map((p, i) => ({ x: W / 2 + pattern[i % 4], y: top + i * spacing }));
    // trail
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i], my = (a.y + b.y) / 2; d += ` C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`; }
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg"); svg.setAttribute("class", "trail"); svg.setAttribute("width", W); svg.setAttribute("height", height); svg.setAttribute("viewBox", `0 0 ${W} ${height}`);
    const path = document.createElementNS(svgNS, "path"); path.setAttribute("d", d); path.setAttribute("fill", "none");
    path.setAttribute("stroke", "rgba(255,255,255,.12)"); path.setAttribute("stroke-width", "10"); path.setAttribute("stroke-linecap", "round"); path.setAttribute("stroke-dasharray", "2 20");
    svg.appendChild(path); map.appendChild(svg);

    w.paragraphs.forEach((p, i) => {
      const pct = prog[i], st = starsFor(pct);
      const done = pct >= 70, current = i === currentIdx && !done;
      const node = el("div", "node " + (done ? "done" : current ? "current" : "todo"));
      node.style.left = pts[i].x + "px"; node.style.top = pts[i].y + "px";
      node.style.setProperty("--n1", c1); node.style.setProperty("--n2", c2);
      const inner = done ? "⭐" : `<span class="ic">${w.icon}</span>`;
      const starStr = "★★★".slice(0, st * 2) + "☆☆☆".slice(0, (3 - st) * 2);
      node.innerHTML = `${st === 3 ? '<div class="crown">👑</div>' : ""}<div class="disc"><span class="disc-in">${inner}</span></div>
        <div class="label">${esc(p.id)} ${esc(p.title)}</div>
        <div class="stars${st ? " has" : ""}">${starStr}</div>`;
      node.onclick = () => go(renderParagraph, w.id, p.id);
      map.appendChild(node);
    });
    v.appendChild(map);
    app.replaceChildren(v);
  }

  /* ===================================================================
     PARAGRAAF
     =================================================================== */
  function renderParagraph(worldId, paraId) {
    const w = COURSE.worlds.find(x => x.id === worldId);
    const p = w.paragraphs.find(x => x.id === paraId);
    const rec = state.paras[p.id] || {};
    const v = el("div", "view");
    const back = el("button", "backbtn", "← " + w.title); back.onclick = () => go(renderWorld, w.id); v.appendChild(back);
    v.appendChild(el("div", "para-head", `<div class="big">${w.icon}</div><div><h2>${esc(p.id)} ${esc(p.title)}</h2></div>`));

    const goals = el("div", "glass goalbox");
    goals.innerHTML = `<div class="gt">🎯 Wat je gaat leren</div><ul>${p.goals.map(g => `<li>${esc(g)}</li>`).join("")}</ul>`;
    v.appendChild(goals);

    const known = p.cards.filter(c => { const cc = state.cards[cardKey(p.id, c.term)]; return cc && cc.box >= 3; }).length;
    const modes = el("div", "modes stagger");
    const mk = (icon, title, desc, fn, opts = {}) => {
      const m = el("div", "mode");
      m.innerHTML = `<div class="mi">${icon}</div><h4>${title}</h4><p>${desc}</p>
        ${opts.tag ? `<span class="tag">${opts.tag}</span>` : ""}${opts.done ? `<span class="done-pill">✅</span>` : ""}`;
      m.onclick = fn; return m;
    };
    modes.appendChild(mk("📖", "Leer", p.cards.length + " begrippen", () => startLearn(p), { done: rec.learnDone }));
    modes.appendChild(mk("⚡", "Quiz", p.quiz.length + " vragen + combo's", () => startQuiz(p, p.quiz, "⚡ " + p.id), { done: (rec.quizBest || 0) >= 0.99 }));
    modes.appendChild(mk("🃏", "Flashcards", known + "/" + p.cards.length + " gekend", () => startFlashcards(p)));
    if (p.sequences.length) modes.appendChild(mk("🔢", "Proces", "Zet de stappen op volgorde", () => startSequence(p), { done: rec.seqDone }));
    modes.appendChild(mk("🤖", "AI-tutor", "Laat je uitleggen & overhoren", () => startTutor(p), { tag: "AI" }));
    v.appendChild(modes);
    app.replaceChildren(v);
  }

  /* ===================================================================
     LEER (lesson slides)
     =================================================================== */
  function startLearn(p) {
    const emojis = ["💡", "🔬", "🧩", "✨", "📌", "🧠", "⭐", "🔎"];
    let i = 0; const n = p.cards.length;
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => go(renderParagraph, worldOf(p).id, p.id); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel); app.replaceChildren(v);

    function draw() {
      const c = p.cards[i];
      panel.replaceChildren();
      const stage = el("div", "lesson");
      stage.innerHTML = `<div class="emoji">${emojis[i % emojis.length]}</div>
        <div class="badge">Begrip ${i + 1} / ${n}</div>
        <div class="term">${esc(c.term)}</div>
        <div class="def">${esc(c.def)}</div>`;
      panel.appendChild(stage);
      const dots = el("div", "dots");
      p.cards.forEach((_, di) => dots.appendChild(el("span", "d" + (di === i ? " on" : ""))));
      panel.appendChild(dots);
      const nav = el("div", "lesson-nav");
      if (i > 0) { const b = el("button", "btn ghost", "← Vorige"); b.onclick = () => { i--; draw(); }; nav.appendChild(b); }
      const nx = el("button", "btn", i < n - 1 ? "Volgende →" : "Klaar! Naar de quiz 🚀");
      nx.onclick = () => { if (i < n - 1) { i++; draw(); } else finish(); };
      nav.appendChild(nx); panel.appendChild(nav);
    }
    function finish() {
      const rec = state.paras[p.id] || {}; if (!rec.learnDone) addXP(15); rec.learnDone = true; state.paras[p.id] = rec; save();
      markStudiedToday(); mascotCheer(); confettiBurst(.5);
      startQuiz(p, p.quiz, "⚡ " + p.id);
    }
    draw();
  }

  /* ===================================================================
     QUIZ
     =================================================================== */
  function startQuiz(para, questions, label, opts = {}) {
    const lives = opts.lives || 0;
    const qs = shuffle(questions).map(q => { const order = shuffle(q.options.map((_, i) => i)); return { q: q.q, opts: order.map(i => q.options[i]), ans: order.indexOf(q.answer), explain: q.explain }; });
    let i = 0, score = 0, combo = 0, best = 0, hp = lives, xpEarned = 0;
    const KEYS = ["A", "B", "C", "D", "E"];
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => para ? go(renderParagraph, worldOf(para).id, para.id) : go(renderHome); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel); app.replaceChildren(v);

    function draw() {
      const q = qs[i];
      panel.replaceChildren();
      const top = el("div", "topline");
      const pct = (i / qs.length) * 100;
      top.innerHTML = `<span class="pbar"><span style="width:${pct}%"></span></span>` +
        (lives ? `<span class="hearts">${Array.from({ length: lives }, (_, h) => `<span class="h ${h >= hp ? "lost" : ""}">❤️</span>`).join("")}</span>` : `<span class="combo" id="combo">${combo > 1 ? "🔥 " + combo : ""}</span>`);
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
        const cb = $("#combo"); if (cb) { cb.textContent = combo > 1 ? "🔥x" + combo : ""; cb.classList.add("bump"); setTimeout(() => cb.classList.remove("bump"), 200); }
        if (combo >= 3) confettiBurst(.35);
      } else { combo = 0; sound("wrong"); if (lives) { hp--; } }
      panel.appendChild(el("div", "explain " + (ok ? "good" : "bad"), `<b class="${ok ? "ok" : "no"}">${ok ? "Goed! ✅" : "Helaas ❌"}</b> ${esc(q.explain)}`));
      const foot = el("div", "qfoot");
      const last = i >= qs.length - 1, dead = lives && hp <= 0;
      const nx = el("button", "btn", dead ? "Game over 💀" : last ? "Klaar 🎉" : "Volgende →");
      nx.onclick = () => { if (dead) return finish(); i++; (i < qs.length) ? draw() : finish(); };
      foot.appendChild(nx); panel.appendChild(foot);
    }
    function finish() {
      markStudiedToday();
      const acc = score / qs.length;
      if (para) { const rec = state.paras[para.id] || {}; rec.quizBest = Math.max(rec.quizBest || 0, acc); state.paras[para.id] = rec; save(); }
      const rank = lives ? (hp <= 0 ? "F" : acc >= 1 ? "S" : acc >= .85 ? "A" : acc >= .7 ? "B" : acc >= .5 ? "C" : "D") : null;
      const stars = acc >= .9 ? 3 : acc >= .6 ? 2 : acc > 0 ? 1 : 0;
      resultScreen({
        emoji: acc >= .9 ? "🏆" : acc >= .6 ? "🎉" : "💪",
        title: lives ? "Battle voorbij!" : acc >= .9 ? "Briljant!" : acc >= .6 ? "Goed gedaan!" : "Blijf oefenen!",
        rank, stars, xpEarned,
        score: `${score} / ${qs.length} goed · hoogste combo 🔥${best}`,
        onRetry: () => startQuiz(para, questions, label, opts),
        onBack: () => para ? go(renderParagraph, worldOf(para).id, para.id) : go(renderHome)
      });
      if (acc >= .6 && !(lives && hp <= 0)) { confettiBurst(); mascotCheer(); }
    }
    draw();
  }
  function startExam() {
    const all = []; COURSE.worlds.forEach(w => w.paragraphs.forEach(p => p.quiz.forEach(q => all.push(q))));
    startQuiz(null, shuffle(all).slice(0, 15), "⚔️ Battle", { lives: 3 });
  }

  /* ===================================================================
     FLASHCARDS (spaced repetition)
     =================================================================== */
  const BOX_INTERVAL = [0, 0, 1, 3, 7, 16];
  const dueTime = (box) => Date.now() + (BOX_INTERVAL[box] || 0) * 864e5;
  function countDueCards() { let n = 0; const now = Date.now(); COURSE.worlds.forEach(w => w.paragraphs.forEach(p => p.cards.forEach(c => { const r = state.cards[cardKey(p.id, c.term)]; if (r && r.due <= now && r.box < 5) n++; }))); return n; }
  function startReview() {
    const now = Date.now(), deck = [];
    COURSE.worlds.forEach(w => w.paragraphs.forEach(p => p.cards.forEach(c => { const r = state.cards[cardKey(p.id, c.term)]; if (r && r.due <= now && r.box < 5) deck.push({ paraId: p.id, card: c }); })));
    if (!deck.length) { mascotSay("Niets te herhalen! Speel een level voor nieuwe kaarten. 🎉"); return go(renderHome); }
    runFlashcards(shuffle(deck), null, "🧠 Herhaal-stapel");
  }
  const boxOf = (d) => { const r = state.cards[cardKey(d.paraId, d.card.term)]; return r ? r.box : 0; };
  function startFlashcards(para) { const deck = para.cards.map(c => ({ paraId: para.id, card: c })); deck.sort((a, b) => boxOf(a) - boxOf(b)); runFlashcards(deck, para, "🃏 " + para.id); }

  function runFlashcards(deck, para, label) {
    let i = 0, learned = 0;
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => para ? go(renderParagraph, worldOf(para).id, para.id) : go(renderHome); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel); app.replaceChildren(v);

    function draw() {
      if (i >= deck.length) return done();
      const d = deck[i], c = d.card, box = boxOf(d);
      panel.replaceChildren();
      const pct = (i / deck.length) * 100;
      panel.appendChild(el("div", "topline", `<span class="pbar"><span style="width:${pct}%"></span></span><span class="fc-meta">box ${box}/5</span>`));
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
      const k = cardKey(d.paraId, d.card.term), rec = state.cards[k] || { box: 1, due: 0 };
      if (g === 0) rec.box = 1; else if (g === 1) rec.box = Math.max(1, rec.box); else { rec.box = Math.min(5, (rec.box || 1) + 1); learned++; addXP(6); sound("correct"); }
      rec.due = dueTime(rec.box); state.cards[k] = rec; save(); i++; draw();
    }
    function done() {
      markStudiedToday(); mascotCheer();
      resultScreen({ emoji: "🃏", title: "Stapel doorgewerkt!", score: `${learned} kaart(en) als gekend gemarkeerd`,
        onRetry: () => para ? startFlashcards(para) : startReview(), onBack: () => para ? go(renderParagraph, worldOf(para).id, para.id) : go(renderHome) });
    }
    draw();
  }

  /* ===================================================================
     SEQUENCE PUZZLE
     =================================================================== */
  function startSequence(para) {
    const seq = para.sequences[0];
    let order = shuffle(seq.steps.map((_, i) => i)); while (order.every((x, i) => x === i)) order = shuffle(order);
    let solved = false, listEl = null;
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => go(renderParagraph, worldOf(para).id, para.id); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel); app.replaceChildren(v);

    function draw() {
      panel.replaceChildren();
      panel.appendChild(el("div", "qtext", "🔢 " + esc(seq.title)));
      panel.appendChild(el("div", "fc-meta", "Sleep de stappen, of gebruik de pijltjes, naar de juiste volgorde."));
      const list = el("div", "seq-list"); listEl = list;
      order.forEach((stepIdx, pos) => {
        const item = el("div", "seq-item"); item.draggable = true; item.dataset.pos = pos;
        item.innerHTML = `<span class="grip">⠿</span><span class="idx">${pos + 1}</span><span class="txt">${esc(seq.steps[stepIdx])}</span>
          <span class="seq-controls"><button data-up>▲</button><button data-down>▼</button></span>`;
        item.querySelector("[data-up]").onclick = (e) => { e.stopPropagation(); if (pos > 0) { [order[pos - 1], order[pos]] = [order[pos], order[pos - 1]]; draw(); } };
        item.querySelector("[data-down]").onclick = (e) => { e.stopPropagation(); if (pos < order.length - 1) { [order[pos + 1], order[pos]] = [order[pos], order[pos + 1]]; draw(); } };
        item.addEventListener("dragstart", () => item.classList.add("dragging"));
        item.addEventListener("dragend", () => item.classList.remove("dragging"));
        item.addEventListener("dragover", (e) => { e.preventDefault(); item.classList.add("over"); });
        item.addEventListener("dragleave", () => item.classList.remove("over"));
        item.addEventListener("drop", (e) => { e.preventDefault(); item.classList.remove("over"); const drag = $(".dragging", list); if (!drag) return; const from = +drag.dataset.pos, to = pos; const m = order.splice(from, 1)[0]; order.splice(to, 0, m); draw(); });
        list.appendChild(item);
      });
      panel.appendChild(list);
      const foot = el("div", "qfoot"); const chk = el("button", "btn", "Controleer ✓"); chk.onclick = check; foot.appendChild(chk); panel.appendChild(foot);
    }
    function check() {
      const items = listEl ? [...listEl.children] : []; if (!items.length) return; let allOk = true;
      order.forEach((stepIdx, pos) => { const ok = stepIdx === pos; items[pos].classList.add(ok ? "ok" : "no"); if (!ok) allOk = false; });
      if (allOk && !solved) {
        solved = true; addXP(25); sound("levelup"); confettiBurst(); mascotCheer(); markStudiedToday();
        const rec = state.paras[para.id] || {}; rec.seqDone = true; state.paras[para.id] = rec; save();
        const foot = el("div", "qfoot"); const b = el("button", "btn", "Gelukt! Terug →"); b.onclick = () => go(renderParagraph, worldOf(para).id, para.id); panel.appendChild(foot); foot.appendChild(b);
      } else if (!allOk) { sound("wrong"); setTimeout(draw, 850); }
    }
    draw();
  }

  /* ===================================================================
     AI TUTOR
     =================================================================== */
  function startTutor(para) {
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => go(renderParagraph, worldOf(para).id, para.id); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel);
    panel.appendChild(el("div", "qtext", `🤖 AI-tutor · ${esc(para.id)} ${esc(para.title)}`));
    const chat = el("div", "chat"); const log = el("div", "chat-log"); chat.appendChild(log);
    const suggest = el("div", "chat-suggest");
    ["Leg dit simpel uit", "Geef me een ezelsbruggetje", "Overhoor me met 3 vragen", "Wat zijn de valkuilen?"].forEach(s => { const c = el("button", "chip", s); c.onclick = () => sendMsg(s); suggest.appendChild(c); });
    chat.appendChild(suggest);
    const inWrap = el("div", "chat-input"); const ta = el("textarea"); ta.placeholder = "Stel je vraag over deze stof…";
    ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMsg(ta.value); } });
    const sendBtn = el("button", "btn", "Stuur"); sendBtn.onclick = () => sendMsg(ta.value);
    inWrap.appendChild(ta); inWrap.appendChild(sendBtn); chat.appendChild(inWrap);
    panel.appendChild(chat); app.replaceChildren(v);

    const sys = "Je bent een enthousiaste, geduldige biologie-bijlesdocent voor een Nederlandse middelbare scholier die zich voorbereidt op een schoolexamen (SE). " +
      "Antwoord altijd in het Nederlands, kort en helder, met soms een emoji of ezelsbruggetje. Baseer je op deze leerstof van paragraaf " + para.id + " (" + para.title + ").\n\n" +
      "Leerdoelen:\n- " + para.goals.join("\n- ") + "\n\nBegrippen:\n" + para.cards.map(c => "• " + c.term + ": " + c.def).join("\n") +
      "\n\nBlijf bij deze stof; breng afdwalingen vriendelijk terug naar de biologie.";
    const history = [{ role: "system", content: sys }];
    addMsg("ai", `Hoi! 👋 Ik help je met **${para.title}**. Stel een vraag of kies een knopje hierboven. Vraag me gerust om je te overhoren!`);

    function addMsg(role, text) { const m = el("div", "msg " + role); m.textContent = text; log.appendChild(m); log.scrollTop = log.scrollHeight; return m; }
    async function sendMsg(text) {
      text = (text || "").trim(); if (!text) return;
      ta.value = ""; addMsg("user", text); history.push({ role: "user", content: text });
      const typing = el("div", "msg ai typing"); typing.innerHTML = "<span></span><span></span><span></span>"; log.appendChild(typing); log.scrollTop = log.scrollHeight; sendBtn.disabled = true;
      try { const reply = await aiChat(history, state.settings.model); typing.remove(); addMsg("ai", reply); history.push({ role: "assistant", content: reply }); addXP(3); }
      catch (e) { typing.remove(); if (e.code === "NO_KEY") { addMsg("sys", "⚙️ Nog geen AI-sleutel ingesteld. Open instellingen (tandwiel) om je OpenAI-key toe te voegen — die wordt onthouden."); openSettings(); } else addMsg("sys", "⚠️ " + e.message); }
      finally { sendBtn.disabled = false; }
    }
  }

  async function aiChat(messages, model) {
    try {
      const r = await fetch("/api/ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages, model }) });
      if (r.ok) { const d = await r.json(); if (d.content) return d.content; if (d.error) throw new Error("OpenAI (server): " + d.error); }
    } catch (e) { if (/OpenAI \(server\)/.test(e.message)) throw e; }
    const key = getKey(); if (!key) { const err = new Error("NO_KEY"); err.code = "NO_KEY"; throw err; }
    const r2 = await fetch("https://api.openai.com/v1/chat/completions", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key }, body: JSON.stringify({ model: model || "gpt-4o-mini", messages, temperature: 0.4 }) });
    const d2 = await r2.json().catch(() => ({})); if (!r2.ok) throw new Error((d2.error && d2.error.message) || ("OpenAI fout " + r2.status)); return d2.choices[0].message.content;
  }

  /* ===================================================================
     RESULT
     =================================================================== */
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
  let confetti = [], confAnim = null;
  function sizeCanvas() { confCanvas.width = innerWidth; confCanvas.height = innerHeight; }
  addEventListener("resize", sizeCanvas); sizeCanvas();
  function confettiBurst(scale = 1) {
    const colors = ["#58cc02", "#1cb0f6", "#ffc800", "#ce82ff", "#ff4b4b", "#ff9600"];
    const n = Math.round(95 * scale);
    for (let k = 0; k < n; k++) confetti.push({ x: innerWidth / 2 + (Math.random() - .5) * 220, y: innerHeight / 3, vx: (Math.random() - .5) * 13, vy: Math.random() * -13 - 4, g: .4 + Math.random() * .3, r: 4 + Math.random() * 7, rot: Math.random() * 6, vr: (Math.random() - .5) * .45, c: colors[(Math.random() * colors.length) | 0], life: 95 });
    if (!confAnim) confLoop();
  }
  function confLoop() {
    cctx.clearRect(0, 0, confCanvas.width, confCanvas.height);
    confetti.forEach(p => { p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--; cctx.save(); cctx.translate(p.x, p.y); cctx.rotate(p.rot); cctx.fillStyle = p.c; cctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6); cctx.restore(); });
    confetti = confetti.filter(p => p.life > 0 && p.y < confCanvas.height + 40);
    if (confetti.length) confAnim = requestAnimationFrame(confLoop); else { confAnim = null; cctx.clearRect(0, 0, confCanvas.width, confCanvas.height); }
  }
  function levelUpToast(lvl) { const t = $("#toast"); t.textContent = "🎉 Level " + lvl + "! Lekker bezig!"; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2600); }

  /* ---------- mascot ---------- */
  const mascotEl = $("#mascot"); let bubbleTimer = null;
  function mascotSay(text) { const old = $("#bubble"); if (old) old.remove(); const b = el("div", "bubble"); b.id = "bubble"; b.textContent = text; document.body.appendChild(b); clearTimeout(bubbleTimer); bubbleTimer = setTimeout(() => b.remove(), 6000); }
  function mascotCheer() { mascotEl.classList.add("cheer"); setTimeout(() => mascotEl.classList.remove("cheer"), 700); }
  mascotEl.onclick = () => { mascotCheer(); sound("correct"); mascotSay(pickHomeTip()); };
  function pickHomeTip() { const t = ["Doe elke dag één level — je streak dankt je! 🔥", "Begin met 'Leer', daarna de quiz. Blijft beter hangen! 📖", "Twijfel je? Markeer 'm 'Nog niet' en hij komt vanzelf terug. 🃏", "Combo's geven bonus-XP. Hou een reeks goed! ⚡", "Vastgelopen? De AI-tutor legt 't je rustig uit. 🤖", "Processen onthou je het best via de proces-puzzels. 🔢"]; return t[(Math.random() * t.length) | 0]; }

  /* ===================================================================
     SETTINGS
     =================================================================== */
  function openSettings() {
    const ov = el("div", "overlay"); const m = el("div", "modal"); const keySet = !!getKey();
    m.innerHTML = `
      <h3>⚙️ Instellingen</h3>
      <p class="sub">De AI-tutor draait op OpenAI. Stel je sleutel één keer in — daarna onthoudt de app 'm.</p>
      <div class="note">💡 <b>Op Vercel?</b> Zet een environment variable <code>OPENAI_API_KEY</code> in je project. Dan werkt de AI automatisch via <code>/api/ai</code> en blijft je sleutel server-side. Hieronder hoef je dan niets in te vullen.</div>
      <div class="field">
        <label>OpenAI API-key <span class="${keySet ? "badge-ok" : "badge-warn"}">${keySet ? "✓ opgeslagen" : "nog niet ingesteld"}</span></label>
        <input id="apiKey" type="password" placeholder="sk-..." value="${keySet ? "••••••••••••" : ""}">
        <div class="help">Wordt alleen in je browser (localStorage) bewaard en komt nooit in de code/repo. Aanrader voor GitHub Pages.</div>
      </div>
      <div class="field"><label>Model</label>
        <select id="model"><option value="gpt-4o-mini">gpt-4o-mini (snel & goedkoop)</option><option value="gpt-4o">gpt-4o (slimmer)</option><option value="gpt-4.1-mini">gpt-4.1-mini</option></select>
      </div>
      <div class="toggle"><span>🔊 Geluidseffecten</span><input id="sound" class="switch" type="checkbox" ${state.settings.sound ? "checked" : ""}></div>
      <div class="toggle"><span style="color:var(--bad)">🗑️ Alle voortgang wissen</span><button id="reset" class="btn ghost" style="padding:7px 15px">Reset</button></div>
      <div class="row"><button class="btn ghost" id="cancel">Sluiten</button><button class="btn" id="saveS">Opslaan</button></div>`;
    ov.appendChild(m); document.body.appendChild(ov);
    $("#model", m).value = state.settings.model;
    ov.onclick = (e) => { if (e.target === ov) ov.remove(); };
    $("#cancel", m).onclick = () => ov.remove();
    $("#reset", m).onclick = () => { if (confirm("Weet je zeker dat je alle voortgang (XP, streak, kaarten) wist?")) { state = defaultState(); save(); refreshTopbar(); ov.remove(); go(renderHome); } };
    $("#saveS", m).onclick = () => { const kv = $("#apiKey", m).value.trim(); if (kv && !/^•+$/.test(kv)) setKey(kv); state.settings.model = $("#model", m).value; state.settings.sound = $("#sound", m).checked; save(); ov.remove(); mascotSay("Opgeslagen! ✅"); };
  }

  /* ---------- init ---------- */
  $("#brand").onclick = () => go(renderHome);
  $("#settingsBtn").onclick = openSettings;
  refreshTopbar();
  go(renderHome);
})();
