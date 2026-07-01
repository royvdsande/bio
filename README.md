# 🧬 BioQuest — Biologie HAVO & VWO leren en oefenen

Een speelse, overzichtelijke leerwebsite voor biologie in de bovenbouw van
**HAVO en VWO**. Je kiest je **niveau** (HAVO/VWO) en je **methode**
(**Biologie voor Jou** of **Nectar**) en krijgt per hoofdstuk alles wat je
nodig hebt om te leren én te oefenen — met een speels, motiverend jasje en
optionele AI-hulp.

Het idee: biologiepagina.nl, maar dan met een strak, gebruiksvriendelijk
ontwerp, speelse features (XP, streak, combo's, confetti) en AI-integratie die
je alleen inzet wanneer jíj dat wilt.

## Wat kan je ermee?

Na het kiezen van niveau + methode zie je een **overzicht met alle
hoofdstukken**. Elk hoofdstuk biedt in elk geval vier leertabbladen:

- 📖 **Theorie** — de samengevatte leerstof met heldere uitleg en leerdoelen per paragraaf.
- 🃏 **Flitskaarten** — alle begrippen, met **spaced repetition** (Leitner): moeilijke kaarten komen vaker terug.
- ⚡ **Oefenvragen** — meerkeuzevragen met directe feedback en combo-bonus.
- 📝 **Examenopgaven** — examenopgaven in examenstijl **mét een puntenantwoordmodel**, zodat je precies ziet hoe je scoort.

De hoofdstukken krijgen automatisch het **juiste hoofdstuknummer en de juiste
titel** voor de gekozen methode en niveau, op basis van de officiële
inhoudsopgaven (Biologie voor Jou 7e editie met thema-nummering; Nectar editie
4.1 met doorlopende hoofdstuknummering).

Volledig uitgewerkt zijn de kernonderwerpen én de aanvullende methodehoofdstukken:

- **Zenuwstelsel**, **Waarnemen**, **Hormonen & homeostase** (domein Regeling)
- **Afweer** (immuunsysteem, bloedgroepen)
- **Voortplanting & seksualiteit**
- **Erfelijkheid** en **DNA & eiwitsynthese**
- **Evolutie**
- **Ecologie**
- **Stofwisseling in de cel** (enzymen, dissimilatie, fotosynthese)
- **Voeding en vertering**
- **Transport** (hart, bloedvaten, bloed)
- **Gaswisseling en uitscheiding** (longen, nieren, homeostase)
- **Gedrag**, **Cellen**, **Onderzoek doen**, **Soorten en populaties**
- **Mens en milieu**, **Planten**, **Sport**
- **Inleiding in de biologie**, **Samenhang in de biologie** en **Op weg naar het examen**

Deze onderwerpen worden gedeeld tussen de methodes en niveaus en gekoppeld aan
het juiste hoofdstuk. Nectar-hoofdstukken behouden daarnaast hun videoleerlijn
waar die beschikbaar is. Biologie voor Jou gebruikt geen video-tabblad.

Daarnaast: 🔥 **XP, levels en een dagelijkse streak**, een **slimme sessie**
(adaptieve mix die op je zwakke plekken focust) en een **examentraining**
(gemixte vragen met levens en een S-rang).

## AI — alleen als jij het wilt

AI wordt hier bewust **niet** overal automatisch ingezet. Het draait puur op
jouw keuze en heeft telkens een duidelijke reden:

- 💡 **Verdieping bij de theorie**: vraag om een voorbeeld, een simpelere uitleg of een ezelsbruggetje.
- 🤖 **"Leg uit waarom"** bij een fout quizantwoord: uitleg van je misvatting.
- ✍️ **Nakijken van je examenantwoord**: feedback op je **inhoud** (kloppen de biologiepunten t.o.v. het antwoordmodel?) én op je **formulering** (helder, volledig, correct vakjargon), plus een geschatte score.

De AI wordt **strikt gegrond op de samenvatting + begrippen** van het
hoofdstuk, zodat de inhoud klopt. Zonder AI-sleutel werkt de site gewoon; de
AI-knoppen vragen dan eenmalig om een sleutel.

Alle voortgang wordt lokaal in je browser bewaard (`localStorage`).

## Lokaal draaien

Het is een statische site, dus elke eenvoudige webserver werkt:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## De AI instellen (optioneel)

### Optie A — Vercel (aanbevolen, sleutel blijft server-side)
1. Deploy het project op [Vercel](https://vercel.com) (de map `api/` wordt automatisch een serverless functie).
2. Ga naar **Settings → Environment Variables** en voeg toe: `OPENAI_API_KEY` = jouw OpenAI-sleutel (`sk-...`).
3. Redeploy. De AI werkt nu automatisch via `/api/ai`.

### Optie B — Sleutel in de browser (bv. GitHub Pages)
1. Open de app → tandwiel ⚙️ rechtsboven.
2. Plak je OpenAI API-key. Die wordt alleen in je browser (`localStorage`) bewaard en komt nooit in de code of de repo.

De app probeert altijd eerst de server-route (`/api/ai`) en valt anders terug op de lokaal opgeslagen key.

## Bestanden

| Bestand | Functie |
|---|---|
| `index.html` | Pagina-structuur |
| `styles.css` | Vormgeving (speels, licht thema) |
| `content.js` | Alle leerstof: methodes, curriculum (HAVO/VWO), hoofdstukken met theorie, begrippen, oefenvragen en examenopgaven met antwoordmodel |
| `remaining-content.js` | Aanvullende leerstof en runtime-koppelingen voor de resterende hoofdstukken |
| `app.js` | De engine: overzicht, hoofdstuk-tabbladen, quiz, flitskaarten, examenopgaven, AI, XP/streak |
| `api/ai.js` | Vercel serverless proxy naar OpenAI |

De leerstof in `content.js` is met de hand uitgewerkt op basis van de
hoofdstukken zenuwstelsel, waarnemen en afweer. Vragen, begrippen of
examenopgaven aanpassen of uitbreiden? Pas gewoon `content.js` aan — het
datamodel staat bovenaan het bestand toegelicht.
