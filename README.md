# 🧬 BioQuest — SE Biologie spelend leren

Een speelse, visuele leerwebsite voor het schoolexamen biologie, gebaseerd op
de drie hoofdstukken:

- **H14 — Zenuwstelsel** 🧠 (neuronen, hersenen, impulsgeleiding, synapsen, autonoom zenuwstelsel)
- **H15 — Waarnemen** 👁️ (evenwicht, gehoor, oog, netvlies, zintuigen & regeling)
- **H16 — Afweer** 🛡️ (aangeboren & verworven afweer, immuniteit, bloedgroepen)

## Wat zit erin?

- 🗺️ **3 werelden** met in totaal 15 levels (de paragrafen), gepresenteerd als levelpad
- 📖 **Lees-modus**: per paragraaf een heldere samenvatting + alle begrippen
- ⚡ **Quizzen** met directe feedback, combo-multiplier, confetti en geluid
- 🃏 **Flashcards** met **spaced repetition** (Leitner): moeilijke begrippen komen vaker terug
- 🔢 **Proces-puzzels**: zet stappen (actiepotentiaal, synaps, afweer, allergie…) in de juiste volgorde
- 🔥 **XP, levels en een dagelijkse streak** voor de motivatie

### Diepe AI-integratie (OpenAI)
De AI is overal verweven, niet alleen een losse chatbot — en wordt **strikt gegrond op de
samenvatting + begrippen** van de paragraaf, zodat de inhoud klopt:

- ✍️ **Open oefenen**: de AI maakt échte SE-open-vragen, jij typt je antwoord, en de AI
  kijkt het na met een score, opbouwende feedback en een modelantwoord. Oneindig veel oefening.
- 🤖 **"Leg uit waarom"** bij een fout quizantwoord: contextuele uitleg van je misvatting.
- 💡 **Verdieping in de Lees-modus**: vraag om een voorbeeld, een simpelere uitleg of een ezelsbruggetje.
- 🎯 **Slimme sessie & aanbeveling**: adaptieve mix die focust op je zwakke plekken.
- 💬 **AI-tutor**: stelt vragen, legt uit en overhoort je.

Alle voortgang wordt lokaal in je browser bewaard (`localStorage`).

## Lokaal draaien

Het is een statische site, dus elke eenvoudige webserver werkt:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

(Direct het bestand openen via `file://` werkt ook, maar een servertje is netter.)

## De AI-tutor instellen

Je hoeft je sleutel **maar één keer** in te stellen. Er zijn twee manieren:

### Optie A — Vercel (aanbevolen, sleutel blijft server-side)
1. Deploy het project op [Vercel](https://vercel.com) (zero-config; de map `api/` wordt automatisch een serverless functie).
2. Ga in je project naar **Settings → Environment Variables**.
3. Voeg toe: `OPENAI_API_KEY` = jouw OpenAI-sleutel (`sk-...`).
4. Redeploy. De AI werkt nu automatisch via `/api/ai` — je hoeft in de app niets in te vullen.

### Optie B — Sleutel in de browser (bv. op GitHub Pages)
1. Open de app → tandwiel ⚙️ rechtsboven.
2. Plak je OpenAI API-key. Die wordt in je browser (`localStorage`) bewaard en **komt nooit in de code of de repo**.

De app probeert altijd eerst de server-route (`/api/ai`). Is daar geen sleutel
ingesteld, dan valt hij automatisch terug op de lokaal opgeslagen key.

## Bestanden

| Bestand | Functie |
|---|---|
| `index.html` | Pagina-structuur |
| `styles.css` | Vormgeving |
| `content.js` | Alle leerstof (begrippen, quizvragen, processen) |
| `app.js` | De game-engine (quiz, flashcards, sequence, AI, XP/streak) |
| `api/ai.js` | Vercel serverless proxy naar OpenAI |

De leerstof in `content.js` is met de hand uitgewerkt op basis van de drie
Word-documenten. Vragen of begrippen aanpassen? Pas gewoon `content.js` aan.
