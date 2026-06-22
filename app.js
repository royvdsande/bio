/* ===================== BioQuest engine ===================== */
(function () {
  "use strict";

  const SAVE_KEY = "bioquest_v1";
  const AIKEY_KEY = "bioquest_openai_key";
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; };
  const todayStr = () => new Date().toISOString().slice(0, 10);

  /* ---------- State ---------- */
  const defaultState = () => ({ xp: 0, streakDays: 0, lastDay: null, cards: {}, paras: {}, settings: { sound: true, model: "gpt-4o-mini" } });
  let state = load();
  function load() { try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); return s ? Object.assign(defaultState(), s) : defaultState(); } catch (e) { return defaultState(); } }
  function save() { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }
  const getKey = () => localStorage.getItem(AIKEY_KEY) || "";
  const setKey = (k) => { if (k) localStorage.setItem(AIKEY_KEY, k); else localStorage.removeItem(AIKEY_KEY); };

  /* ---------- Leveling ---------- */
  function levelInfo(xp) {
    let lvl = 1, need = 120, acc = 0;
    while (xp >= acc + need) { acc += need; lvl++; need = Math.round(need * 1.3); }
    return { level: lvl, into: xp - acc, need, pct: Math.min(100, ((xp - acc) / need) * 100) };
  }
  function addXP(n) {
    const before = levelInfo(state.xp).level;
    state.xp += n; save();
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
  }

  /* ---------- Progress helpers ---------- */
  const cardKey = (paraId, term) => paraId + "::" + term;
  function paraProgress(p) {
    // gemiddelde van: quizbeste + aandeel kaarten in box>=3
    const rec = state.paras[p.id] || {};
    const quiz = rec.quizBest || 0;
    let known = 0;
    p.cards.forEach(c => { const cc = state.cards[cardKey(p.id, c.term)]; if (cc && cc.box >= 3) known++; });
    const cardPct = p.cards.length ? known / p.cards.length : 0;
    const seqPct = rec.seqDone ? 1 : 0;
    const parts = [quiz, cardPct]; if (p.sequences.length) parts.push(seqPct);
    return Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100);
  }
  function worldProgress(w) {
    const v = w.paragraphs.map(paraProgress);
    return Math.round(v.reduce((a, b) => a + b, 0) / v.length);
  }

  /* ---------- Topbar ---------- */
  function refreshTopbar() {
    const li = levelInfo(state.xp);
    $("#xpFill").style.width = li.pct + "%";
    $("#lvlBadge").textContent = "Lvl " + li.level;
    $("#xpText").textContent = state.xp + " XP";
    $("#streakVal").textContent = state.streakDays;
  }

  /* ---------- Router ---------- */
  const app = $("#app");
  function go(view, ...args) { window.scrollTo(0, 0); view(...args); }

  function renderHome() {
    const li = levelInfo(state.xp);
    const v = el("div", "view");
    const totalCards = COURSE.worlds.reduce((a, w) => a + w.paragraphs.reduce((s, p) => s + p.cards.length, 0), 0);
    v.appendChild(el("div", "hero", `
      <div class="logo" style="font-size:54px">🧬</div>
      <h1>Welkom bij <span class="grad">BioQuest</span></h1>
      <p>Leer de SE-stof spelend: quizzen, flashcards & processen. Verzamel XP, hou je streak vast! 🔥</p>
      <div class="daily">🔥 Streak: <b>${state.streakDays}</b> dag(en) · Level <b>${li.level}</b> · <b>${state.xp}</b> XP</div>
    `));
    v.appendChild(el("div", "section-title", "Kies je wereld"));
    const grid = el("div", "worlds");
    COURSE.worlds.forEach(w => {
      const pct = worldProgress(w);
      const c = el("div", "world " + w.theme);
      c.innerHTML = `
        <div class="wicon">${w.icon}</div>
        <h3>${esc(w.title)}</h3>
        <div class="wmeta">${w.paragraphs.length} levels · ${w.paragraphs.reduce((s, p) => s + p.cards.length, 0)} begrippen</div>
        <div class="wbar"><span style="width:${pct}%"></span></div>
        <div class="wpct">${pct}% beheerst</div>`;
      c.onclick = () => go(renderWorld, w.id);
      grid.appendChild(c);
    });
    v.appendChild(grid);

    v.appendChild(el("div", "section-title", "Snel oefenen"));
    const quick = el("div", "modes");
    const exam = el("div", "mode");
    exam.innerHTML = `<div class="mi">⚔️</div><h4>Examen-battle</h4><p>Gemixte quiz uit alle hoofdstukken</p>`;
    exam.onclick = () => startExam();
    const due = el("div", "mode");
    const dueCount = countDueCards();
    due.innerHTML = `<div class="mi">🃏</div><h4>Herhaal-stapel</h4><p>${dueCount} flashcard(s) klaar om te herhalen</p><span class="tag">spaced repetition</span>`;
    due.onclick = () => startReview();
    quick.appendChild(exam); quick.appendChild(due);
    v.appendChild(quick);

    app.replaceChildren(v);
    mascotSay(pickHomeTip());
  }

  function renderWorld(worldId) {
    const w = COURSE.worlds.find(x => x.id === worldId);
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Werelden"); back.onclick = () => go(renderHome); v.appendChild(back);
    v.appendChild(el("div", "para-head", `<div class="big">${w.icon}</div><div><h2>${esc(w.title)}</h2><div class="wmeta" style="color:var(--muted)">${worldProgress(w)}% beheerst</div></div>`));
    const levels = el("div", "levels");
    w.paragraphs.forEach((p, i) => {
      const pct = paraProgress(p);
      const card = el("div", "level-card");
      card.innerHTML = `
        <div class="level-num">${p.id}</div>
        <div class="level-info">
          <h4>${esc(p.title)}</h4>
          <div class="goals">${p.cards.length} begrippen · ${p.quiz.length} quizvragen${p.sequences.length ? " · " + p.sequences.length + " proces" : ""}</div>
        </div>
        <div class="level-right"><div class="ring" style="--p:${pct}"><i>${pct}%</i></div></div>`;
      card.onclick = () => go(renderParagraph, w.id, p.id);
      levels.appendChild(card);
    });
    v.appendChild(levels);
    app.replaceChildren(v);
  }

  function renderParagraph(worldId, paraId) {
    const w = COURSE.worlds.find(x => x.id === worldId);
    const p = w.paragraphs.find(x => x.id === paraId);
    const v = el("div", "view");
    const back = el("button", "backbtn", "← " + w.title); back.onclick = () => go(renderWorld, w.id); v.appendChild(back);
    v.appendChild(el("div", "para-head", `<div class="big">${w.icon}</div><div><h2>${esc(p.id)} ${esc(p.title)}</h2></div>`));
    const goals = el("div", "panel"); goals.style.marginBottom = "16px";
    goals.innerHTML = `<div style="font-weight:700;margin-bottom:8px">🎯 Wat je gaat leren</div><ul style="margin:0;padding-left:20px;color:var(--muted);line-height:1.7">${p.goals.map(g => `<li>${esc(g)}</li>`).join("")}</ul>`;
    v.appendChild(goals);

    const modes = el("div", "modes");
    const mk = (icon, title, desc, fn, tag) => { const m = el("div", "mode"); m.innerHTML = `<div class="mi">${icon}</div><h4>${title}</h4><p>${desc}</p>${tag ? `<span class="tag">${tag}</span>` : ""}`; m.onclick = fn; return m; };
    modes.appendChild(mk("🃏", "Flashcards", p.cards.length + " begrippen", () => startFlashcards(p)));
    modes.appendChild(mk("⚡", "Quiz", p.quiz.length + " vragen + combo's", () => startQuiz(p, p.quiz, p.id + " · " + p.title)));
    if (p.sequences.length) modes.appendChild(mk("🔢", "Proces-puzzel", "Zet de stappen op volgorde", () => startSequence(p)));
    modes.appendChild(mk("🤖", "AI-tutor", "Stel je vraag over deze stof", () => startTutor(p), "AI"));
    v.appendChild(modes);
    app.replaceChildren(v);
  }

  /* ===================== QUIZ ===================== */
  function startQuiz(para, questions, label) {
    const qs = shuffle(questions).map(q => {
      const idx = q.options.map((_, i) => i);
      const order = shuffle(idx);
      return { q: q.q, opts: order.map(i => q.options[i]), ans: order.indexOf(q.answer), explain: q.explain };
    });
    let i = 0, score = 0, combo = 0, best = 0;
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => para ? go(renderParagraph, worldOf(para).id, para.id) : go(renderHome); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel);
    app.replaceChildren(v);

    function draw() {
      const q = qs[i];
      panel.replaceChildren();
      const top = el("div", "qtop");
      top.innerHTML = `<div style="font-weight:700;font-size:13px;color:var(--muted)">${esc(label)} · ${i + 1}/${qs.length}</div>
        <div class="qprogress"><span style="width:${(i / qs.length) * 100}%"></span></div>
        <div class="combo" id="combo">${combo > 1 ? "🔥 x" + combo : ""}</div>`;
      panel.appendChild(top);
      panel.appendChild(el("div", "qtext", esc(q.q)));
      const opts = el("div", "options");
      q.opts.forEach((o, oi) => {
        const b = el("button", "opt", esc(o));
        b.onclick = () => answer(oi, opts, q);
        opts.appendChild(b);
      });
      panel.appendChild(opts);
    }
    function answer(choice, opts, q) {
      [...opts.children].forEach((b, bi) => {
        b.disabled = true;
        if (bi === q.ans) b.classList.add("correct");
        else if (bi === choice) b.classList.add("wrong");
        else b.classList.add("dim");
      });
      const ok = choice === q.ans;
      if (ok) {
        combo++; best = Math.max(best, combo);
        const gain = 8 + Math.min(combo, 6) * 2;
        score++; addXP(gain); sound("correct");
        const cb = $("#combo"); if (cb) { cb.textContent = combo > 1 ? "🔥 x" + combo : ""; cb.classList.add("bump"); setTimeout(() => cb.classList.remove("bump"), 200); }
        if (combo >= 3) confettiBurst(0.4);
      } else { combo = 0; sound("wrong"); }
      const ex = el("div", "explain", `<b>${ok ? "Goed! ✅" : "Bijna! ❌"}</b> ${esc(q.explain)}`);
      panel.appendChild(ex);
      const foot = el("div", "qfoot");
      const nx = el("button", "btn", i < qs.length - 1 ? "Volgende →" : "Klaar 🎉");
      nx.onclick = () => { i++; if (i < qs.length) draw(); else finish(); };
      foot.appendChild(nx); panel.appendChild(foot);
    }
    function finish() {
      markStudiedToday();
      const pct = score / qs.length;
      if (para) { const rec = state.paras[para.id] || {}; rec.quizBest = Math.max(rec.quizBest || 0, pct); state.paras[para.id] = rec; save(); }
      resultScreen({
        emoji: pct === 1 ? "🏆" : pct >= 0.7 ? "🎉" : pct >= 0.4 ? "💪" : "📚",
        title: pct === 1 ? "Perfect!" : pct >= 0.7 ? "Goed gedaan!" : "Blijf oefenen!",
        score: `${score} / ${qs.length} goed · hoogste combo 🔥${best}`,
        onRetry: () => startQuiz(para, questions, label),
        onBack: () => para ? go(renderParagraph, worldOf(para).id, para.id) : go(renderHome)
      });
      if (pct >= 0.7) { confettiBurst(); mascotCheer(); }
    }
    draw();
  }

  function startExam() {
    const all = [];
    COURSE.worlds.forEach(w => w.paragraphs.forEach(p => p.quiz.forEach(q => all.push(q))));
    startQuiz(null, shuffle(all).slice(0, 15), "⚔️ Examen-battle");
  }

  /* ===================== FLASHCARDS (spaced repetition) ===================== */
  const BOX_INTERVAL = [0, 0, 1, 3, 7, 16]; // dagen per box (box1..box5)
  function dueTime(box) { return Date.now() + (BOX_INTERVAL[box] || 0) * 864e5; }
  function countDueCards() {
    let n = 0; const now = Date.now();
    COURSE.worlds.forEach(w => w.paragraphs.forEach(p => p.cards.forEach(c => {
      const rec = state.cards[cardKey(p.id, c.term)];
      if (rec && rec.due <= now && rec.box < 5) n++;
    }))); return n;
  }
  function startReview() {
    const now = Date.now(); const deck = [];
    COURSE.worlds.forEach(w => w.paragraphs.forEach(p => p.cards.forEach(c => {
      const rec = state.cards[cardKey(p.id, c.term)];
      if (rec && rec.due <= now && rec.box < 5) deck.push({ paraId: p.id, card: c });
    })));
    if (!deck.length) { mascotSay("Niets te herhalen! Speel een level om nieuwe kaarten te leren. 🎉"); go(renderHome); return; }
    runFlashcards(shuffle(deck), null, "🃏 Herhaal-stapel");
  }
  function startFlashcards(para) {
    const deck = para.cards.map(c => ({ paraId: para.id, card: c }));
    // sorteer: laagste box eerst (minst gekend)
    deck.sort((a, b) => (boxOf(a) - boxOf(b)));
    runFlashcards(deck, para, para.id + " · " + para.title);
  }
  const boxOf = (d) => { const r = state.cards[cardKey(d.paraId, d.card.term)]; return r ? r.box : 0; };

  function runFlashcards(deck, para, label) {
    let i = 0, learned = 0;
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => para ? go(renderParagraph, worldOf(para).id, para.id) : go(renderHome); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel);
    app.replaceChildren(v);

    function draw() {
      if (i >= deck.length) return done();
      const d = deck[i]; const c = d.card; const box = boxOf(d);
      panel.replaceChildren();
      panel.appendChild(el("div", "qtop", `<div style="font-weight:700;font-size:13px;color:var(--muted)">${esc(label)} · ${i + 1}/${deck.length}</div><div class="qprogress"><span style="width:${(i / deck.length) * 100}%"></span></div><div class="fc-meta">box ${box}/5</div>`));
      const stage = el("div", "fc-stage");
      const fc = el("div", "flashcard");
      fc.innerHTML = `<div class="fc-inner">
        <div class="fc-face fc-front"><div class="term">${esc(c.term)}</div><div class="hint">tik om om te draaien 🔄</div></div>
        <div class="fc-face fc-back"><div class="def">${esc(c.def)}</div></div></div>`;
      let flipped = false;
      const rate = el("div", "fc-rate hidden");
      fc.onclick = () => { flipped = !flipped; fc.classList.toggle("flipped", flipped); rate.classList.toggle("hidden", !flipped); };
      const mkr = (cls, txt, grade) => { const b = el("button", cls, txt); b.onclick = (e) => { e.stopPropagation(); rateCard(d, grade); }; return b; };
      rate.appendChild(mkr("rate-again", "❌ Nog niet", 0));
      rate.appendChild(mkr("rate-hard", "😅 Twijfel", 1));
      rate.appendChild(mkr("rate-good", "✅ Ik weet 't", 2));
      stage.appendChild(fc); stage.appendChild(rate);
      panel.appendChild(stage);
    }
    function rateCard(d, grade) {
      const k = cardKey(d.paraId, d.card.term);
      const rec = state.cards[k] || { box: 1, due: 0 };
      if (grade === 0) rec.box = 1;
      else if (grade === 1) rec.box = Math.max(1, rec.box);
      else { rec.box = Math.min(5, (rec.box || 1) + 1); learned++; addXP(6); sound("correct"); }
      rec.due = dueTime(rec.box);
      state.cards[k] = rec; save();
      i++; draw();
    }
    function done() {
      markStudiedToday();
      resultScreen({
        emoji: "🃏", title: "Stapel doorgewerkt!",
        score: `${learned} kaart(en) als gekend gemarkeerd`,
        onRetry: () => para ? startFlashcards(para) : startReview(),
        onBack: () => para ? go(renderParagraph, worldOf(para).id, para.id) : go(renderHome)
      });
      mascotCheer();
    }
    draw();
  }

  /* ===================== SEQUENCE PUZZLE ===================== */
  function startSequence(para) {
    const seq = para.sequences[0];
    let order = shuffle(seq.steps.map((_, i) => i));
    while (order.every((x, i) => x === i)) order = shuffle(order);
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => go(renderParagraph, worldOf(para).id, para.id); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel);
    app.replaceChildren(v);
    let solved = false;

    function draw() {
      panel.replaceChildren();
      panel.appendChild(el("div", "qtext", "🔢 " + esc(seq.title)));
      panel.appendChild(el("div", "fc-meta", "Sleep of gebruik de pijltjes om de stappen op de juiste volgorde te zetten."));
      const list = el("div", "seq-list");
      order.forEach((stepIdx, pos) => {
        const item = el("div", "seq-item");
        item.draggable = true; item.dataset.pos = pos;
        item.innerHTML = `<span class="grip">⠿</span><span class="idx">${pos + 1}</span><span style="flex:1">${esc(seq.steps[stepIdx])}</span>
          <span class="seq-controls"><button data-up>▲</button><button data-down>▼</button></span>`;
        item.querySelector("[data-up]").onclick = (e) => { e.stopPropagation(); if (pos > 0) { [order[pos - 1], order[pos]] = [order[pos], order[pos - 1]]; draw(); } };
        item.querySelector("[data-down]").onclick = (e) => { e.stopPropagation(); if (pos < order.length - 1) { [order[pos + 1], order[pos]] = [order[pos], order[pos + 1]]; draw(); } };
        item.addEventListener("dragstart", () => item.classList.add("dragging"));
        item.addEventListener("dragend", () => item.classList.remove("dragging"));
        item.addEventListener("dragover", (e) => { e.preventDefault(); item.classList.add("over"); });
        item.addEventListener("dragleave", () => item.classList.remove("over"));
        item.addEventListener("drop", (e) => {
          e.preventDefault(); item.classList.remove("over");
          const from = +$(".dragging", list).dataset.pos, to = pos;
          const m = order.splice(from, 1)[0]; order.splice(to, 0, m); draw();
        });
        list.appendChild(item);
      });
      panel.appendChild(list);
      const foot = el("div", "qfoot");
      const chk = el("button", "btn", solved ? "Gelukt! ✅" : "Controleer ✓");
      chk.onclick = check; foot.appendChild(chk); panel.appendChild(foot);
    }
    function check() {
      const items = [...$(".seq-list", panel).children];
      let allOk = true;
      order.forEach((stepIdx, pos) => {
        const ok = stepIdx === pos;
        items[pos].classList.add(ok ? "ok" : "no");
        if (!ok) allOk = false;
      });
      if (allOk && !solved) {
        solved = true; addXP(20); sound("levelup"); confettiBurst(); mascotCheer();
        markStudiedToday();
        const rec = state.paras[para.id] || {}; rec.seqDone = true; state.paras[para.id] = rec; save();
        const foot = el("div", "qfoot");
        const b = el("button", "btn", "Terug naar level →"); b.onclick = () => go(renderParagraph, worldOf(para).id, para.id);
        panel.appendChild(foot); foot.appendChild(b);
      } else if (!allOk) { sound("wrong"); setTimeout(draw, 900); }
    }
    draw();
  }

  /* ===================== AI TUTOR ===================== */
  function startTutor(para) {
    const v = el("div", "view");
    const back = el("button", "backbtn", "← Terug"); back.onclick = () => go(renderParagraph, worldOf(para).id, para.id); v.appendChild(back);
    const panel = el("div", "panel"); v.appendChild(panel);
    panel.appendChild(el("div", "qtext", `🤖 AI-tutor · ${esc(para.id)} ${esc(para.title)}`));
    const chat = el("div", "chat");
    const log = el("div", "chat-log");
    chat.appendChild(log);
    const suggest = el("div", "chat-suggest");
    ["Leg dit hoofdstuk simpel uit", "Geef me een ezelsbruggetje", "Overhoor me met 3 vragen", "Wat is het verschil tussen de belangrijkste begrippen?"]
      .forEach(s => { const c = el("button", "chip", s); c.onclick = () => sendMsg(s); suggest.appendChild(c); });
    chat.appendChild(suggest);
    const inWrap = el("div", "chat-input");
    const ta = el("textarea"); ta.placeholder = "Stel je vraag over deze stof…";
    ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMsg(ta.value); } });
    const sendBtn = el("button", "btn", "Stuur");
    sendBtn.onclick = () => sendMsg(ta.value);
    inWrap.appendChild(ta); inWrap.appendChild(sendBtn);
    chat.appendChild(inWrap);
    panel.appendChild(chat);
    app.replaceChildren(v);

    const sys = "Je bent een enthousiaste, geduldige biologie-bijlesdocent voor een Nederlandse middelbare scholier die zich voorbereidt op een schoolexamen (SE). " +
      "Antwoord altijd in het Nederlands, kort en helder, met soms een emoji of ezelsbruggetje om het te onthouden. " +
      "Baseer je op de volgende leerstof van paragraaf " + para.id + " (" + para.title + ").\n\n" +
      "Leerdoelen:\n- " + para.goals.join("\n- ") + "\n\n" +
      "Belangrijke begrippen:\n" + para.cards.map(c => "• " + c.term + ": " + c.def).join("\n") +
      "\n\nBlijf bij deze stof. Als iets buiten het onderwerp valt, breng het vriendelijk terug naar de biologie.";
    const history = [{ role: "system", content: sys }];

    addMsg("ai", `Hoi! 👋 Ik help je met **${para.title}**. Stel een vraag, of kies hierboven een knopje. Tip: vraag me gerust om je te overhoren!`);

    function addMsg(role, text) {
      const m = el("div", "msg " + role); m.textContent = text; log.appendChild(m); log.scrollTop = log.scrollHeight; return m;
    }
    async function sendMsg(text) {
      text = (text || "").trim(); if (!text) return;
      ta.value = ""; addMsg("user", text); history.push({ role: "user", content: text });
      const typing = el("div", "msg ai typing"); typing.innerHTML = "<span></span><span></span><span></span>"; log.appendChild(typing); log.scrollTop = log.scrollHeight;
      sendBtn.disabled = true;
      try {
        const reply = await aiChat(history, state.settings.model);
        typing.remove(); addMsg("ai", reply); history.push({ role: "assistant", content: reply });
        addXP(3);
      } catch (e) {
        typing.remove();
        if (e.code === "NO_KEY") {
          addMsg("sys", "⚙️ Er is nog geen AI-sleutel ingesteld. Open instellingen (tandwiel rechtsboven) om je OpenAI API-key toe te voegen — die wordt onthouden.");
          openSettings();
        } else {
          addMsg("sys", "⚠️ " + e.message);
        }
      } finally { sendBtn.disabled = false; }
    }
  }

  /* ---------- AI client (server -> lokale key fallback) ---------- */
  async function aiChat(messages, model) {
    // 1) probeer serverless proxy (/api/ai met OPENAI_API_KEY in Vercel)
    try {
      const r = await fetch("/api/ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages, model }) });
      if (r.ok) {
        const d = await r.json();
        if (d.content) return d.content;
        if (d.error) throw new Error("OpenAI (server): " + d.error);
        // d.needKey === true -> val terug op lokale key
      }
    } catch (e) {
      if (/OpenAI \(server\)/.test(e.message)) throw e; // echte serverfout tonen
      // anders: route ontbreekt of netwerk -> fallback
    }
    // 2) fallback: lokaal opgeslagen key, direct naar OpenAI
    const key = getKey();
    if (!key) { const err = new Error("NO_KEY"); err.code = "NO_KEY"; throw err; }
    const r2 = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify({ model: model || "gpt-4o-mini", messages, temperature: 0.4 })
    });
    const d2 = await r2.json().catch(() => ({}));
    if (!r2.ok) throw new Error((d2.error && d2.error.message) || ("OpenAI fout " + r2.status));
    return d2.choices[0].message.content;
  }

  /* ===================== RESULT SCREEN ===================== */
  function resultScreen({ emoji, title, score, xpGain, onRetry, onBack }) {
    const v = el("div", "view");
    const panel = el("div", "panel result");
    panel.innerHTML = `<div class="big">${emoji}</div><h2>${esc(title)}</h2><div class="score">${esc(score)}</div>`;
    const li = levelInfo(state.xp);
    panel.appendChild(el("div", "xpgain", `Level ${li.level} · ${state.xp} XP · 🔥 ${state.streakDays}`));
    const actions = el("div", "actions");
    const r = el("button", "btn", "Opnieuw 🔁"); r.onclick = onRetry;
    const b = el("button", "btn ghost", "Verder"); b.onclick = onBack;
    actions.appendChild(r); actions.appendChild(b); panel.appendChild(actions);
    v.appendChild(panel); app.replaceChildren(v);
  }

  function worldOf(para) { return COURSE.worlds.find(w => w.paragraphs.some(p => p.id === para.id)); }

  /* ===================== EFFECTS ===================== */
  let audioCtx = null;
  function sound(type) {
    if (!state.settings.sound) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const seq = type === "correct" ? [[660, 0], [880, .08]] : type === "wrong" ? [[200, 0]] : [[523, 0], [659, .09], [784, .18], [1047, .27]];
      seq.forEach(([f, t]) => {
        const o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = type === "wrong" ? "sawtooth" : "triangle"; o.frequency.value = f;
        o.connect(g); g.connect(audioCtx.destination);
        const start = audioCtx.currentTime + t;
        g.gain.setValueAtTime(0.0001, start); g.gain.exponentialRampToValueAtTime(0.18, start + .02);
        g.gain.exponentialRampToValueAtTime(0.0001, start + .22);
        o.start(start); o.stop(start + .24);
      });
    } catch (e) { }
  }

  const confCanvas = $("#confetti"); const cctx = confCanvas.getContext("2d");
  let confetti = [];
  function sizeCanvas() { confCanvas.width = innerWidth; confCanvas.height = innerHeight; }
  addEventListener("resize", sizeCanvas); sizeCanvas();
  function confettiBurst(scale = 1) {
    const colors = ["#7c5cff", "#00d4ff", "#2bd576", "#ffcf3f", "#ff5d73", "#ff9d3d"];
    const n = Math.round(90 * scale);
    for (let i = 0; i < n; i++) confetti.push({
      x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight / 3,
      vx: (Math.random() - .5) * 12, vy: Math.random() * -12 - 4,
      g: .4 + Math.random() * .3, r: 4 + Math.random() * 6, rot: Math.random() * 6,
      vr: (Math.random() - .5) * .4, c: colors[(Math.random() * colors.length) | 0], life: 90
    });
    if (!confAnim) confLoop();
  }
  let confAnim = null;
  function confLoop() {
    cctx.clearRect(0, 0, confCanvas.width, confCanvas.height);
    confetti.forEach(p => { p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--; cctx.save(); cctx.translate(p.x, p.y); cctx.rotate(p.rot); cctx.fillStyle = p.c; cctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6); cctx.restore(); });
    confetti = confetti.filter(p => p.life > 0 && p.y < confCanvas.height + 40);
    if (confetti.length) confAnim = requestAnimationFrame(confLoop); else { confAnim = null; cctx.clearRect(0, 0, confCanvas.width, confCanvas.height); }
  }

  function levelUpToast(lvl) {
    const t = $("#toast"); t.textContent = "🎉 Level " + lvl + "! Lekker bezig!"; t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2600);
  }

  /* ---------- Mascot ---------- */
  const mascotEl = $("#mascot");
  let bubbleTimer = null;
  function mascotSay(text) {
    const old = $("#bubble"); if (old) old.remove();
    const b = el("div", "bubble"); b.id = "bubble"; b.textContent = text; document.body.appendChild(b);
    clearTimeout(bubbleTimer); bubbleTimer = setTimeout(() => b.remove(), 6000);
  }
  function mascotCheer() { mascotEl.classList.add("cheer"); setTimeout(() => mascotEl.classList.remove("cheer"), 600); }
  mascotEl.onclick = () => { mascotCheer(); mascotSay(pickHomeTip()); };
  function pickHomeTip() {
    const tips = ["Doe elke dag één level — je streak dankt je! 🔥", "Twijfel je bij een begrip? Markeer 'm 'Nog niet' en hij komt terug. 🃏", "Combo's geven extra XP. Probeer een reeks goed te houden! ⚡", "Vastgelopen? Vraag de AI-tutor om uitleg. 🤖", "Processen onthoud je het best via de proces-puzzels. 🔢"];
    return tips[(Math.random() * tips.length) | 0];
  }

  /* ===================== SETTINGS ===================== */
  function openSettings() {
    const hasServerHint = location.hostname.endsWith("vercel.app") || location.hostname === "localhost";
    const ov = el("div", "overlay");
    const m = el("div", "modal");
    const keySet = !!getKey();
    m.innerHTML = `
      <h3>⚙️ Instellingen</h3>
      <p class="sub">AI-tutor draait op OpenAI. Je hebt twee opties — je hoeft je sleutel maar één keer in te stellen.</p>
      <div class="field">
        <label>OpenAI API-key <span class="${keySet ? 'badge-ok' : 'badge-warn'}">${keySet ? '✓ opgeslagen' : 'nog niet ingesteld'}</span></label>
        <input id="apiKey" type="password" placeholder="sk-..." value="${keySet ? '••••••••••••••••' : ''}">
        <div class="help">Wordt veilig in je browser (localStorage) bewaard, komt nooit in de code. Aanrader voor GitHub Pages.</div>
      </div>
      <div class="field">
        <label>Model</label>
        <select id="model">
          <option value="gpt-4o-mini">gpt-4o-mini (snel & goedkoop)</option>
          <option value="gpt-4o">gpt-4o (slimmer)</option>
          <option value="gpt-4.1-mini">gpt-4.1-mini</option>
        </select>
      </div>
      <div class="field help" style="background:var(--bg-soft);padding:12px;border-radius:12px">
        💡 <b>Op Vercel?</b> Zet in je project een environment variable <code>OPENAI_API_KEY</code>.
        Dan werkt de AI automatisch via <code>/api/ai</code> — je hoeft hierboven niets in te vullen en je sleutel blijft serverkant.
      </div>
      <div class="toggle"><span>🔊 Geluidseffecten</span><input id="sound" type="checkbox" ${state.settings.sound ? "checked" : ""}></div>
      <div class="toggle"><span style="color:var(--bad)">🗑️ Voortgang wissen</span><button id="reset" class="btn ghost" style="padding:6px 14px">Reset</button></div>
      <div class="row"><button class="btn ghost" id="cancel">Sluiten</button><button class="btn" id="saveS">Opslaan</button></div>`;
    ov.appendChild(m); document.body.appendChild(ov);
    $("#model", m).value = state.settings.model;
    ov.onclick = (e) => { if (e.target === ov) ov.remove(); };
    $("#cancel", m).onclick = () => ov.remove();
    $("#reset", m).onclick = () => { if (confirm("Weet je zeker dat je alle voortgang (XP, streak, kaarten) wist?")) { state = defaultState(); save(); refreshTopbar(); ov.remove(); go(renderHome); } };
    $("#saveS", m).onclick = () => {
      const kv = $("#apiKey", m).value.trim();
      if (kv && !/^•+$/.test(kv)) setKey(kv);
      state.settings.model = $("#model", m).value;
      state.settings.sound = $("#sound", m).checked;
      save(); ov.remove(); mascotSay("Opgeslagen! ✅");
    };
  }

  /* ===================== INIT ===================== */
  $("#brand").onclick = () => go(renderHome);
  $("#settingsBtn").onclick = openSettings;
  refreshTopbar();
  go(renderHome);
})();
