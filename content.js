/* ============================================================
   BioQuest – Leerstof biologie HAVO & VWO
   ------------------------------------------------------------
   Datamodel (herontworpen):

   METHODS        -> keuze Biologie voor Jou / Nectar
   TOPICS         -> de hoofdstukken met de échte leerstof:
       topic  -> { id, title, icon, theme, domain, intro, paragraphs[], exams[] }
       paragraph -> { id, title, summary, goals[], cards[], quiz[], sequences[] }
         card     -> { term, def }
         quiz     -> { q, options[], answer(index), explain }
         sequence -> { title, steps[] }  (stappen in juiste volgorde)
       exam   -> { id, title, context, question, points, model[] }
                 (examenopgave in examenstijl mét puntenantwoordmodel)
   CURRICULUM     -> per niveau (havo/vwo) de hoofdstuk-indeling,
                     met per methode de hoofdstuknaam. Een hoofdstuk
                     verwijst naar een topic (of null = in ontwikkeling).
   ============================================================ */

/* ---------- methodes ---------- */
const METHODS = {
  bvj: {
    id: "bvj",
    name: "Biologie voor Jou",
    short: "BvJ",
    tagline: "De methode met de thema's en basisstof/herhalingsstof.",
    color: "#58cc02",
    colorDark: "#46a302"
  },
  nectar: {
    id: "nectar",
    name: "Nectar",
    short: "Nectar",
    tagline: "De methode met de context-concept aanpak van Noordhoff.",
    color: "#1cb0f6",
    colorDark: "#1899d6"
  }
};

/* ============================================================
   TOPICS — de échte, volledig uitgewerkte hoofdstukken
   ============================================================ */
const TOPICS = [
  /* ===================== ZENUWSTELSEL ===================== */
  {
    id: "zenuwstelsel",
    title: "Zenuwstelsel",
    icon: "🧠",
    theme: "t-green",
    domain: "Regeling",
    intro: "Hoe verwerkt je lichaam prikkels razendsnel? In dit hoofdstuk leer je hoe neuronen impulsen opwekken en doorgeven, hoe je hersenen en ruggenmerg werken en hoe het autonome zenuwstelsel je organen aanstuurt.",
    paragraphs: [
      {
        id: "1",
        title: "Cellen in het zenuwstelsel",
        summary: "Een neuron (zenuwcel) heeft een cellichaam met celkern en uitlopers: dendrieten voeren impulsen náár het cellichaam, het axon voert ze eraf. Elke axon-aftakking eindigt in een synaps, waar de overdracht via een neurotransmitter verloopt.\n\nDrie typen neuronen:\n• Sensorisch: van zintuigcellen naar het CZS; cellichaam in een spinaal ganglion.\n• Schakel: liggen in hersenen/ruggenmerg en schakelen impulsen door (meestal geen myeline).\n• Motorisch: van het CZS naar spieren en klieren.\n\nDe myelineschede (cellen van Schwann) om een axon geeft bescherming én een hogere geleidingssnelheid. Gliacellen (~800 miljard) ondersteunen, voeden en vormen de myeline. Een zenuw is een bundel gemyeliniseerde uitlopers met bindweefsel en bloedvaten; een gemengde zenuw bevat zowel sensorische als motorische uitlopers.",
        goals: [
          "Je beschrijft de bouw en functie van de verschillende typen neuronen.",
          "Je beschrijft de bouw van een zenuw."
        ],
        cards: [
          { term: "Neuron", def: "Zenuwcel: een cellichaam met celkern en uitlopers (dendrieten en een axon) die impulsen geleidt." },
          { term: "Dendriet", def: "Uitloper die impulsen náár het cellichaam toe voert (aanvoerend)." },
          { term: "Axon", def: "Afvoerende uitloper die impulsen ván het cellichaam af voert; elke aftakking eindigt in een synaps." },
          { term: "Synaps", def: "Contactplaats waar een neuron zijn informatie via een neurotransmitter overdraagt aan een andere cel." },
          { term: "Neurotransmitter", def: "Stof waarmee in een synaps de informatie wordt overgedragen aan de volgende cel." },
          { term: "Myelineschede", def: "Isolerende laag van cellen van Schwann om een axon; biedt bescherming en geeft een hogere geleidingssnelheid." },
          { term: "Sensorisch neuron", def: "Voert impulsen van zintuigcellen naar hersenen of ruggenmerg; cellichaam ligt in een spinaal ganglion." },
          { term: "Schakelneuron", def: "Ligt in hersenen of ruggenmerg en schakelt impulsen door; meestal zonder myelineschede." },
          { term: "Motorisch neuron", def: "Voert impulsen van hersenen of ruggenmerg naar spieren en klieren." },
          { term: "Gliacellen", def: "Ondersteunende cellen (±800 miljard) die neuronen voeden, beschermen of de myelineschede vormen." },
          { term: "Zenuw", def: "Bundel gemyeliniseerde uitlopers van neuronen, met bindweefsel en bloedvaten." },
          { term: "Gemengde zenuw", def: "Zenuw met zowel dendrieten van sensorische als axonen van motorische neuronen." },
          { term: "Spinaal ganglion", def: "Verdikking aan de achterzijde van het ruggenmerg met de cellichamen van sensorische neuronen." }
        ],
        quiz: [
          { q: "Welke uitloper voert impulsen náár het cellichaam toe?", options: ["Axon", "Dendriet", "Synaps", "Myelineschede"], answer: 1, explain: "Dendrieten zijn aanvoerend; het axon is afvoerend." },
          { q: "Wat is de functie van de myelineschede?", options: ["Neurotransmitter maken", "Impulsen opwekken", "Bescherming én hogere geleidingssnelheid", "Cellichamen verbinden"], answer: 2, explain: "De myelineschede van Schwanncellen isoleert, beschermt en versnelt de impulsgeleiding." },
          { q: "Welk type neuron ligt volledig in hersenen/ruggenmerg en schakelt impulsen door?", options: ["Sensorisch neuron", "Motorisch neuron", "Schakelneuron", "Gliacel"], answer: 2, explain: "Schakelneuronen liggen allemaal in het centrale zenuwstelsel en hebben meestal geen myelineschede." },
          { q: "Waaruit bestaat een zenuw?", options: ["Eén lange axon", "Bundel uitlopers met bindweefsel en bloedvaten", "Alleen cellichamen", "Alleen gliacellen"], answer: 1, explain: "Een zenuw is een bundel gemyeliniseerde uitlopers met bindweefsel en bloedvaten." },
          { q: "Waar liggen de cellichamen van sensorische neuronen?", options: ["In de grensstreng", "In het spinaal ganglion", "In de myelineschede", "In de hersenbalk"], answer: 1, explain: "De cellichamen van sensorische neuronen liggen bij elkaar in de spinale ganglia aan de achterzijde van het ruggenmerg." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Het centrale zenuwstelsel",
        summary: "Het zenuwstelsel bestaat uit het centrale zenuwstelsel (CZS: hersenen + ruggenmerg) en het perifere zenuwstelsel (de zenuwen daarbuiten). Grijze stof bevat de cellichamen, witte stof de uitlopers met myeline. De bloed-hersenbarrière (tight junctions tussen endotheelcellen + astrocyten) laat selectief stoffen door.\n\nDe grote hersenen (twee helften, verbonden door de hersenbalk) verwerken zintuiginfo, bewustzijn, geheugen en wil. De hersenschors heeft primaire centra (bewustwording) en secundaire centra (herkenning). De thalamus selecteert welke impulsen naar de schors gaan; de hypothalamus regelt homeostase, temperatuur en de biologische klok.\n\nDe kleine hersenen coördineren bewegingen. De hersenstam verbindt alles met het ruggenmerg, bevat centra voor o.a. ademhaling en hartslag, en hier kruisen de zenuwbanen (de linkerhelft stuurt de rechter lichaamszijde aan). Een reflex verloopt via een reflexboog: zintuigcel → sensorisch → schakel → motorisch neuron → spier/klier.",
        goals: [
          "Je beschrijft de bouw van het centrale en perifere zenuwstelsel.",
          "Je beschrijft de bouw en functies van de grote hersenen.",
          "Je licht toe hoe kleine hersenen, hersenstam en ruggenmerg betrokken zijn bij spieren en organen."
        ],
        cards: [
          { term: "Centraal zenuwstelsel (CZS)", def: "De neuronen van de hersenen en het ruggenmerg met hun gliacellen." },
          { term: "Perifeer zenuwstelsel", def: "De zenuwen die het CZS met je organen en weefsels verbinden." },
          { term: "Grijze stof", def: "Donker deel met de cellichamen van de neuronen." },
          { term: "Witte stof", def: "Licht deel met de uitlopers van neuronen, omgeven door (vettige) myeline." },
          { term: "Bloed-hersenbarrière", def: "Tight junctions tussen endotheelcellen + astrocyten; laten selectief stoffen door en beschermen de hersenen." },
          { term: "Grote hersenen", def: "Grootste deel; twee helften verbonden door de hersenbalk; verwerken zintuiginfo, bewustzijn, geheugen en wil." },
          { term: "Hersenschors", def: "Grijze buitenlaag met motorische en sensorische centra." },
          { term: "Primaire vs secundaire centra", def: "Primaire centra dienen voor bewustwording, secundaire centra voor herkenning." },
          { term: "Thalamus", def: "Selecteert welke impulsen (behalve geur) naar de hersenschors gaan." },
          { term: "Hypothalamus", def: "Regelt homeostase (o.a. lichaamstemperatuur), bevat de biologische klok en stuurt de hypofyse." },
          { term: "Kleine hersenen", def: "Coördineren bewegingen en koppelen terug met de grote hersenen." },
          { term: "Hersenstam", def: "Verbindt grote/kleine hersenen met ruggenmerg; centra voor ademhaling, hartslag, slikken; zenuwbanen kruisen hier." },
          { term: "Reflex", def: "Reactie op een prikkel zonder of voordat er bewustwording optreedt." },
          { term: "Reflexboog", def: "Korte weg: zintuigcel → sensorisch neuron → schakelneuron → motorisch neuron → spier-/kliercel." }
        ],
        quiz: [
          { q: "Wat veroorzaakt de donkere kleur van de grijze stof?", options: ["Myeline", "Cellichamen van neuronen", "Bloedvaten", "Hersenvocht"], answer: 1, explain: "De grijze stof is donker door de miljarden cellichamen; witte stof is licht door myeline." },
          { q: "Welk hersendeel regelt de homeostase en lichaamstemperatuur?", options: ["Thalamus", "Kleine hersenen", "Hypothalamus", "Hersenbalk"], answer: 2, explain: "De hypothalamus regelt homeostase, temperatuur en de biologische klok." },
          { q: "Welk hersendeel coördineert je bewegingen?", options: ["Kleine hersenen", "Thalamus", "Hersenstam", "Grote hersenen"], answer: 0, explain: "De sterk vertakte neuronen van de kleine hersenen coördineren bewegingen." },
          { q: "Waar kruisen de zenuwbanen uit beide lichaamshelften?", options: ["In de hersenbalk", "In de hersenstam", "In de thalamus", "In het spinaal ganglion"], answer: 1, explain: "In de hersenstam (verlengde merg) kruisen de banen, daarom stuurt de linkerhelft de rechter lichaamszijde." },
          { q: "Wat doet de thalamus?", options: ["Maakt neurotransmitters", "Selecteert welke impulsen naar de schors gaan", "Vormt myeline", "Regelt de hartslag"], answer: 1, explain: "De thalamus is een schakelstation dat impulsen (behalve geur) selecteert voor de hersenschors." }
        ],
        sequences: [
          { title: "Reflexboog (volgorde van de impuls)", steps: ["Zintuigcel", "Sensorisch neuron", "Schakelneuron", "Motorisch neuron", "Spier- of kliercel"] }
        ]
      },
      {
        id: "3",
        title: "Impulsgeleiding",
        summary: "Over het celmembraan staat een spanningsverschil: de membraanpotentiaal. In rust is dit ≈ −70 mV (rustpotentiaal), gehandhaafd door de Na+-K+-pomp (3 Na+ eruit, 2 K+ erin).\n\nEen voldoende sterke prikkel brengt de potentiaal tot de prikkeldrempel (≈ −50 mV). Dan gaan spanningsafhankelijke Na+-poorten open en stroomt Na+ naar binnen: depolarisatie tot +30 mV. Daarna sluiten de Na+-poorten en openen K+-poorten: K+ stroomt eruit (repolarisatie), met kort een hyperpolarisatie (≈ −80 mV). Tijdens de refractaire periode is het neuron ongevoelig voor een nieuwe prikkel.\n\nAlles-of-niets: een actiepotentiaal is altijd even sterk; een sterkere prikkel geeft alleen een hogere frequentie. Een impuls is een actiepotentiaal die zich over het membraan verplaatst. Bij gemyeliniseerde axonen springt hij van insnoering van Ranvier naar insnoering: sprongsgewijze, snellere geleiding.",
        goals: [
          "Je legt op molecuulniveau uit hoe een actiepotentiaal ontstaat.",
          "Je legt het alles-of-niets principe uit.",
          "Je beschrijft hoe een impuls langs het celmembraan beweegt."
        ],
        cards: [
          { term: "Membraanpotentiaal", def: "Het spanningsverschil tussen de binnen- en buitenzijde van het celmembraan." },
          { term: "Rustpotentiaal", def: "Membraanpotentiaal van een niet-actief neuron: ongeveer −70 mV." },
          { term: "Na+-K+-pomp", def: "Pompt actief 3 Na+-ionen naar buiten en 2 K+-ionen naar binnen; handhaaft de rustpotentiaal." },
          { term: "Prikkeldrempel", def: "Drempelwaarde (≈ −50 mV) waarbij een actiepotentiaal ontstaat." },
          { term: "Actiepotentiaal", def: "Snelle verandering van de membraanpotentiaal (−70 → +30 → −70 mV) na een voldoende sterke prikkel." },
          { term: "Depolarisatie", def: "Na+-ionen stromen naar binnen; de membraanpotentiaal stijgt naar +30 mV." },
          { term: "Repolarisatie", def: "K+-ionen stromen naar buiten; de membraanpotentiaal daalt terug richting rustpotentiaal." },
          { term: "Hyperpolarisatie", def: "Membraanpotentiaal daalt kort onder de rustpotentiaal (≈ −80 mV) door extra K+-uitstroom." },
          { term: "Refractaire periode", def: "Periode waarin het neuron ter plekke ongevoelig is voor een nieuwe prikkel." },
          { term: "Alles-of-niets principe", def: "Een actiepotentiaal heeft altijd dezelfde sterkte; een sterkere prikkel geeft alleen een hogere frequentie." },
          { term: "Impuls", def: "Het verplaatsen van een actiepotentiaal over het celmembraan." },
          { term: "Insnoering van Ranvier", def: "Plek tussen twee Schwanncellen waar ionen het membraan passeren." },
          { term: "Sprongsgewijze impulsgeleiding", def: "De actiepotentiaal springt van insnoering naar insnoering; dat verhoogt de snelheid." }
        ],
        quiz: [
          { q: "Wat is de waarde van de rustpotentiaal?", options: ["+30 mV", "0 mV", "−50 mV", "−70 mV"], answer: 3, explain: "De rustpotentiaal is ongeveer −70 mV, gehandhaafd door de Na+-K+-pompen." },
          { q: "Wat doet de Na+-K+-pomp per pompactie?", options: ["3 Na+ in, 2 K+ uit", "3 Na+ uit, 2 K+ in", "2 Na+ uit, 3 K+ in", "Alleen K+ naar buiten"], answer: 1, explain: "Drie Na+ naar buiten en twee K+ naar binnen, tegen het concentratieverval in." },
          { q: "Bij welke waarde wordt de prikkeldrempel bereikt?", options: ["−80 mV", "−70 mV", "−50 mV", "+30 mV"], answer: 2, explain: "Bij ≈ −50 mV gaan heel veel spanningsafhankelijke Na+-poorten open en volgt depolarisatie." },
          { q: "Wat houdt het alles-of-niets principe in?", options: ["Een sterkere prikkel geeft een sterkere actiepotentiaal", "Een actiepotentiaal heeft altijd dezelfde sterkte", "Er ontstaat nooit een actiepotentiaal", "Alleen myeline bepaalt de sterkte"], answer: 1, explain: "Wordt de prikkeldrempel bereikt, dan is de actiepotentiaal altijd even sterk; verschil zit in de frequentie." },
          { q: "Waardoor neemt de impulssnelheid toe bij gemyeliniseerde axonen?", options: ["Door meer neurotransmitter", "Door sprongsgewijze geleiding", "Door een lagere rustpotentiaal", "Door dunnere vezels"], answer: 1, explain: "De actiepotentiaal springt van insnoering naar insnoering: sprongsgewijze (saltatoire) geleiding." }
        ],
        sequences: [
          { title: "Verloop van een actiepotentiaal", steps: ["Rustpotentiaal (−70 mV)", "Prikkel bereikt de prikkeldrempel (−50 mV)", "Na+-poorten open: depolarisatie (+30 mV)", "Na+-poorten blokkeren, K+-poorten open: repolarisatie", "Hyperpolarisatie (−80 mV)", "Rustpotentiaal hersteld"] }
        ]
      },
      {
        id: "4",
        title: "Impulsoverdracht tussen neuronen",
        summary: "Neuronen maken contact via synapsen. Tussen het presynaptische membraan (axoneinde) en het postsynaptische membraan zit de synapsspleet (10–40 nm). Overdracht verloopt via een neurotransmitter; er is eenrichtingsverkeer, omdat alleen het axoneinde blaasjes met neurotransmitter bevat.\n\nStappen: de impuls opent Ca2+-poorten → Ca2+ stroomt naar binnen → synaptische blaasjes versmelten met het membraan → exocytose van de neurotransmitter → binding aan receptoren op het postsynaptische membraan.\n\nEen exciterende neurotransmitter (bv. acetylcholine) opent Na+-poorten → depolarisatie richting de prikkeldrempel: een EPSP. Een inhiberende (bv. GABA) opent K+-poorten → hyperpolarisatie, van de drempel af: een IPSP. Het enzym acetylcholinesterase breekt de neurotransmitter weer af. Of er een actiepotentiaal ontstaat, hangt af van de summatie: de optelsom van alle EPSP's en IPSP's.",
        goals: [
          "Je beschrijft de impulsoverdracht via een synaps.",
          "Je legt uit wat summatie inhoudt."
        ],
        cards: [
          { term: "Synapsspleet", def: "Ruimte van 10–40 nm tussen het pre- en het postsynaptische membraan." },
          { term: "Presynaptisch membraan", def: "Membraan van het axoneinde dat de neurotransmitter afgeeft." },
          { term: "Postsynaptisch membraan", def: "Membraan van het volgende neuron met receptoren voor de neurotransmitter." },
          { term: "Synaptische blaasjes", def: "Blaasjes in het axoneinde gevuld met neurotransmitter." },
          { term: "Exocytose", def: "Het lozen van de neurotransmitter vanuit de blaasjes in de synapsspleet." },
          { term: "Acetylcholine", def: "Voorbeeld van een exciterende (stimulerende) neurotransmitter." },
          { term: "GABA", def: "Voorbeeld van een inhiberende (remmende) neurotransmitter." },
          { term: "EPSP", def: "Exciterende postsynaptische potentiaal: membraanpotentiaal beweegt richting prikkeldrempel." },
          { term: "IPSP", def: "Inhiberende postsynaptische potentiaal: hyperpolarisatie, beweegt van de prikkeldrempel af." },
          { term: "Acetylcholinesterase", def: "Enzym in de synapsspleet dat acetylcholine snel afbreekt." },
          { term: "Summatie", def: "De optelsom van alle EPSP's en IPSP's die bepaalt of er een actiepotentiaal ontstaat." }
        ],
        quiz: [
          { q: "Wat gebeurt er als een impuls het einde van het axon bereikt?", options: ["K+-poorten sluiten", "Ca2+-poorten openen en Ca2+ stroomt naar binnen", "De myelineschede valt uiteen", "De rustpotentiaal stijgt naar +30 mV"], answer: 1, explain: "Ca2+ stroomt naar binnen, waardoor de blaasjes met het membraan versmelten en neurotransmitter loost." },
          { q: "Welke neurotransmitter werkt inhiberend (remmend)?", options: ["Acetylcholine", "GABA", "Dopamine", "Na+"], answer: 1, explain: "GABA opent K+-poorten → hyperpolarisatie → IPSP. Acetylcholine werkt juist exciterend." },
          { q: "Wat is een EPSP?", options: ["Potentiaal richting de prikkeldrempel", "Potentiaal van de prikkeldrempel af", "Een afgebroken neurotransmitter", "Een rustende synaps"], answer: 0, explain: "Een EPSP brengt de membraanpotentiaal dichter bij de prikkeldrempel (exciterend)." },
          { q: "Wat houdt summatie in?", options: ["Het maken van neurotransmitter", "De optelsom van alle EPSP's en IPSP's", "Het afbreken van acetylcholine", "Het versterken van myeline"], answer: 1, explain: "Of er een actiepotentiaal ontstaat hangt af van de som van alle exciterende en inhiberende effecten." },
          { q: "Waarom is er eenrichtingsverkeer in een synaps?", options: ["Door de myelineschede", "Alleen het presynaptische membraan geeft neurotransmitter af", "Door de Na+-K+-pomp", "Door de synapsspleet"], answer: 1, explain: "Alleen het axoneinde bevat blaasjes met neurotransmitter, dus de prikkel gaat altijd pre → post." }
        ],
        sequences: [
          { title: "Impulsoverdracht in een synaps", steps: ["Impuls bereikt het axoneinde", "Ca2+-poorten openen, Ca2+ stroomt naar binnen", "Blaasjes versmelten met het presynaptische membraan", "Exocytose: neurotransmitter in de synapsspleet", "Neurotransmitter bindt aan receptoren postsynaptisch", "Na+ stroomt in: depolarisatie (EPSP)", "Bij prikkeldrempel ontstaat een nieuwe actiepotentiaal", "Acetylcholinesterase breekt de neurotransmitter af"] }
        ]
      },
      {
        id: "5",
        title: "Het autonome zenuwstelsel",
        summary: "Het zenuwstelsel kun je naar functie indelen. Het animale zenuwstelsel verwerkt zintuiginformatie en stuurt (willekeurig) de skeletspieren aan. Het autonome zenuwstelsel werkt onwillekeurig (buiten je wil), regelt o.a. hartslag, ademhaling en vertering, en houdt het inwendige milieu constant. De hypothalamus staat hierin centraal.\n\nHet autonome zenuwstelsel heeft twee delen met een antagonistische (tegengestelde) werking; organen krijgen dubbele innervatie:\n• Orthosympatisch: ondersteunt actie/inspanning — snellere hartslag en ademhaling, en het remt de vertering. Loopt via de grensstrengen.\n• Parasympatisch: ondersteunt rust en herstel en bevordert de vertering. Loopt via de zwervende zenuw.",
        goals: [
          "Je beschrijft het verschil tussen het animale en het autonome zenuwstelsel.",
          "Je beschrijft de werking van het para- en orthosympatische zenuwstelsel op organen."
        ],
        cards: [
          { term: "Animale zenuwstelsel", def: "Verwerkt zintuiginformatie en stuurt skeletspieren aan (willekeurig)." },
          { term: "Autonome zenuwstelsel", def: "Regelt onwillekeurig o.a. ademhaling en hartslag en houdt het inwendige milieu constant." },
          { term: "Orthosympatisch deel", def: "Ondersteunt actie: snelle hartslag en ademhaling, remt de vertering; loopt via de grensstrengen." },
          { term: "Parasympatisch deel", def: "Ondersteunt rust en herstel en bevordert de vertering; loopt via de zwervende zenuw." },
          { term: "Antagonistische werking", def: "De twee delen van het autonome zenuwstelsel hebben een tegengesteld effect op organen." },
          { term: "Dubbele innervatie", def: "Organen zijn met zowel het para- als het orthosympatische deel verbonden." },
          { term: "Zwervende zenuw", def: "De 12e hersenzenuw die de parasympatische innervatie verzorgt." },
          { term: "Grensstreng", def: "Ketens van ganglia naast de wervelkolom; verzorgen de orthosympatische innervatie." }
        ],
        quiz: [
          { q: "Welk deel van het autonome zenuwstelsel is actief bij rust en herstel?", options: ["Orthosympatisch", "Parasympatisch", "Animaal", "Centraal"], answer: 1, explain: "Het parasympatische deel ondersteunt rust en herstel en bevordert de vertering." },
          { q: "Via welke zenuw verloopt de parasympatische innervatie?", options: ["Oogzenuw", "Gehoorzenuw", "Zwervende zenuw", "Grensstreng"], answer: 2, explain: "De parasympatische innervatie loopt via de zwervende zenuw (12e hersenzenuw)." },
          { q: "Wat doet het orthosympatische deel met je hartslag bij inspanning?", options: ["Vertraagt hem", "Versnelt hem", "Stopt hem", "Geen effect"], answer: 1, explain: "Bij actieve skeletspieren versnelt het orthosympatische deel de hartslag en ademhaling." },
          { q: "Wat betekent 'antagonistische werking'?", options: ["Versterkend effect", "Tegengesteld effect", "Geen effect", "Willekeurig effect"], answer: 1, explain: "De twee delen werken tegengesteld op de organen (bijv. hartslag sneller vs. langzamer)." },
          { q: "Welk hersendeel staat centraal in de controle van het autonome zenuwstelsel?", options: ["Kleine hersenen", "Hypothalamus", "Hersenbalk", "Thalamus"], answer: 1, explain: "De hypothalamus voert de controle en koppelt het zenuwstelsel aan het hormoonstelsel." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "zs-ex1",
        title: "Reactietijd en de reflexboog",
        context: "Bij een practicum laat een leerling een liniaal vallen tussen de vingers van een klasgenoot. De klasgenoot moet de liniaal zo snel mogelijk vangen. Uit de valafstand berekent de leerling de reactietijd.",
        question: "Bij het vangen van de liniaal is géén sprake van een reflex. Leg met behulp van de bouw van het zenuwstelsel uit waarom het vangen van de liniaal langer duurt dan een reflex.",
        points: 2,
        model: [
          "Bij het vangen worden impulsen via sensorische neuronen naar de (grote) hersenen geleid, waar bewustwording en een besluit plaatsvinden (1 p).",
          "Bij een reflex loopt de impuls via een korte reflexboog in het ruggenmerg zonder de omweg langs de hersenschors, waardoor die weg korter is en dus sneller (1 p)."
        ]
      },
      {
        id: "zs-ex2",
        title: "Werking van een zenuwgif",
        context: "Sommige insecticiden remmen het enzym acetylcholinesterase in de synapsspleet van de neuromusculaire synaps (de synaps tussen een motorisch neuron en een spiercel).",
        question: "Leg uit welk effect het remmen van acetylcholinesterase heeft op de spiercel. Betrek in je antwoord wat er normaal met de neurotransmitter gebeurt.",
        points: 3,
        model: [
          "Normaal breekt acetylcholinesterase de neurotransmitter acetylcholine in de synapsspleet af (1 p).",
          "Door de remming blijft acetylcholine aan de receptoren op het postsynaptische membraan gebonden / hoopt het zich op (1 p).",
          "Daardoor blijft de spiercel steeds opnieuw gedepolariseerd/geprikkeld worden (aanhoudende samentrekking/verkramping) (1 p)."
        ]
      },
      {
        id: "zs-ex3",
        title: "Alles-of-niets en prikkelsterkte",
        context: "Een onderzoeker prikkelt een axon met steeds sterkere prikkels en meet telkens de actiepotentialen die ontstaan.",
        question: "Verklaar met het alles-of-niets principe waarom een sterkere prikkel niet leidt tot een hógere actiepotentiaal, en beschrijf hoe het zenuwstelsel de sterkte van een prikkel dan wél doorgeeft.",
        points: 2,
        model: [
          "Zodra de prikkeldrempel wordt bereikt, is de actiepotentiaal altijd even sterk; onder de drempel ontstaat er geen — dus de amplitude verandert niet met de prikkelsterkte (1 p).",
          "Een sterkere prikkel geeft een hógere impulsfrequentie (meer actiepotentialen per seconde), waarmee de prikkelsterkte wordt gecodeerd (1 p)."
        ]
      }
    ]
  },

  /* ===================== WAARNEMEN / ZINTUIGEN ===================== */
  {
    id: "waarnemen",
    title: "Waarnemen",
    icon: "👁️",
    theme: "t-blue",
    domain: "Regeling",
    intro: "Hoe zet je licht, geluid en beweging om in beelden en informatie? Je leert de bouw en werking van het evenwichts-, gehoor- en gezichtszintuig en hoe je hersenen die signalen verwerken.",
    paragraphs: [
      {
        id: "1",
        title: "Evenwicht en zintuigcellen",
        summary: "Het evenwichtszintuig in het binnenoor bestaat uit een vestibulum en drie halfcirkelvormige kanalen, gevuld met endolymfe. In het vestibulum nemen de maculae (met kalksteentjes) rechtlijnige versnelling/vertraging en de stand t.o.v. de zwaartekracht waar. In de kanalen nemen de cupulae draaibewegingen waar. De haarcellen (mechanoreceptoren) sturen via buigende ciliën impulsen naar het evenwichtscentrum in de hersenstam.\n\nZintuigcellen reageren elk op hun eigen adequate prikkel: mechanoreceptoren (druk/beweging), thermoreceptoren (temperatuur), chemoreceptoren (stoffen) en fotoreceptoren (licht). Een sterkere prikkel geeft meestal een hogere impulsfrequentie.\n\nBij een langdurige, constante prikkel stijgt de prikkeldrempel: adaptatie (gewenning). Pijnzintuigjes vertonen geen gewenning.",
        goals: [
          "Je beschrijft de bouw en werking van het evenwichtszintuig.",
          "Je beschrijft de reactie van zintuigcellen op adequate prikkels.",
          "Je legt het effect uit van langdurige en herhaalde prikkels."
        ],
        cards: [
          { term: "Evenwichtszintuig", def: "Orgaan in het binnenoor: een vestibulum + drie halfcirkelvormige kanalen, gevuld met endolymfe." },
          { term: "Vestibulum", def: "Centraal deel van het evenwichtszintuig met de maculae." },
          { term: "Macula", def: "Zintuigorgaantje met kalksteentjes dat rechtlijnige versnelling/vertraging en de stand t.o.v. de zwaartekracht waarneemt." },
          { term: "Cupula", def: "Geleimassa in de halfcirkelvormige kanalen die draaibewegingen van het hoofd waarneemt." },
          { term: "Endolymfe", def: "Vloeistof in het evenwichtszintuig (en het slakkenhuis)." },
          { term: "Haarcellen", def: "Zintuigcellen met ciliën (zintuigharen); het zijn mechanoreceptoren." },
          { term: "Adequate prikkel", def: "De specifieke prikkel waarop een bepaalde zintuigcel reageert." },
          { term: "Mechanoreceptor", def: "Zintuigcel gevoelig voor mechanische prikkels (druk, beweging, buigen van ciliën)." },
          { term: "Thermoreceptor", def: "Zintuigcel gevoelig voor temperatuurveranderingen." },
          { term: "Chemoreceptor", def: "Zintuigcel gevoelig voor bepaalde stoffen (tong, neus)." },
          { term: "Fotoreceptor", def: "Zintuigcel in het oog die op licht reageert." },
          { term: "Adaptatie (gewenning)", def: "Bij een langdurige constante prikkel gaat de prikkeldrempel omhoog en reageert de zintuigcel minder." }
        ],
        quiz: [
          { q: "Waarmee neem je rechtlijnige versnelling en de stand van je hoofd waar?", options: ["Cupulae", "Maculae", "Slakkenhuis", "Trommelvlies"], answer: 1, explain: "De maculae in het vestibulum reageren op rechtlijnige versnelling/vertraging en de zwaartekracht." },
          { q: "Waarmee neem je draaibewegingen van je hoofd waar?", options: ["Maculae", "Cupulae in de halfcirkelvormige kanalen", "Pigmentcellen", "Gele vlek"], answer: 1, explain: "De cupulae in de drie halfcirkelvormige kanalen registreren draaibewegingen." },
          { q: "Wat is een adequate prikkel?", options: ["Elke willekeurige prikkel", "De specifieke prikkel waarop een zintuigcel reageert", "Een te sterke prikkel", "Een pijnprikkel"], answer: 1, explain: "Elke zintuigcel reageert op zijn eigen adequate prikkel (bv. licht voor fotoreceptoren)." },
          { q: "Welk type receptor zit er in je oog?", options: ["Chemoreceptor", "Thermoreceptor", "Fotoreceptor", "Mechanoreceptor"], answer: 2, explain: "In het oog zitten fotoreceptoren die op licht reageren." },
          { q: "Wat is adaptatie?", options: ["Prikkeldrempel daalt", "Prikkeldrempel stijgt bij langdurige prikkel", "Zintuigcel sterft af", "Impulsfrequentie stijgt"], answer: 1, explain: "Bij gewenning gaat de prikkeldrempel omhoog en reageert de cel minder op een constante prikkel." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Het gehoorzintuig",
        summary: "Geluid (trillingen van ~20 tot 20.000 Hz) doorloopt het oor in stappen. Buitenoor: oorschelp en gehoorgang vangen de trilling op; het trommelvlies trilt mee. De buis van Eustachius houdt de luchtdruk aan beide kanten van het trommelvlies gelijk.\n\nMiddenoor: de gehoorbeentjes hamer, aambeeld en stijgbeugel versterken de trilling en geven die via het ovale venster (dat sterker trilt dan het trommelvlies) door aan het binnenoor.\n\nBinnenoor: in het slakkenhuis brengt de trilling de perilymfe en het basilair membraan in beweging. Hoge tonen laten het membraan vooral bij het ovale venster trillen, lage tonen in de top. De haarcellen van het orgaan van Corti buigen met hun ciliën en sturen via de gehoorzenuw impulsen naar de hersenen.\n\nHard geluid (pijngrens ~120 dB; de dB-schaal is logaritmisch) beschadigt de ciliën, wat tot blijvend gehoorverlies en tinnitus (oorsuizen) kan leiden.",
        goals: [
          "Je beschrijft de bouw en werking van het gehoorzintuig.",
          "Je legt het verband uit tussen geluidsvolume en gehoorbeschadiging."
        ],
        cards: [
          { term: "Buitenoor", def: "Oorschelp en gehoorgang; vangt geluidstrillingen op en leidt ze naar binnen." },
          { term: "Trommelvlies", def: "Vlies dat meetrilt met de luchttrillingen." },
          { term: "Gehoorbeentjes", def: "Hamer, aambeeld en stijgbeugel in het middenoor; nemen trillingen over en versterken ze." },
          { term: "Buis van Eustachius", def: "Verbinding tussen middenoor en keelholte die de luchtdruk aan beide zijden van het trommelvlies gelijk houdt." },
          { term: "Slakkenhuis", def: "Opgerolde, met vloeistof gevulde kanalen in het binnenoor met de zintuigcellen voor gehoor." },
          { term: "Ovale venster", def: "Membraan waar de stijgbeugel de trillingen doorgeeft; trilt sterker dan het trommelvlies." },
          { term: "Basilair membraan", def: "Membraan dat bij verschillende frequenties op verschillende plaatsen trilt." },
          { term: "Orgaan van Corti", def: "Strook mechanoreceptoren (haarcellen met ciliën) op het basilair membraan." },
          { term: "Perilymfe", def: "Vloeistof in de grote kanalen van het slakkenhuis (veel Na+)." },
          { term: "Decibel (dB)", def: "Eenheid van geluidssterkte; de schaal is logaritmisch (+10 dB = 10× zoveel energie)." },
          { term: "Tinnitus", def: "Oorsuizen (fluittonen/ruis) door beschadigde ciliën die onjuiste informatie doorgeven." }
        ],
        quiz: [
          { q: "Welke gehoorbeentjes zitten in het middenoor?", options: ["Hamer, aambeeld, stijgbeugel", "Macula, cupula, vestibulum", "Staafje, kegeltje, lens", "Iris, pupil, lens"], answer: 0, explain: "De drie gehoorbeentjes hamer, aambeeld en stijgbeugel versterken de trillingen." },
          { q: "Wat doet de buis van Eustachius?", options: ["Versterkt geluid", "Houdt de luchtdruk gelijk", "Maakt endolymfe", "Buigt de ciliën"], answer: 1, explain: "De buis van Eustachius egaliseert de luchtdruk tussen middenoor en keelholte." },
          { q: "Waar liggen de zintuigcellen voor het gehoor?", options: ["In het trommelvlies", "In de gehoorgang", "In het slakkenhuis (orgaan van Corti)", "In het ovale venster"], answer: 2, explain: "De haarcellen van het orgaan van Corti op het basilair membraan zetten trillingen om in impulsen." },
          { q: "Waar trilt het basilair membraan vooral bij hoge tonen?", options: ["In de top van het slakkenhuis", "Vlak bij het ovale venster", "In het trommelvlies", "In de buis van Eustachius"], answer: 1, explain: "Hoge tonen → trilling vlak bij het ovale venster; lage tonen → in de top van het slakkenhuis." },
          { q: "Wat veroorzaakt gehoorbeschadiging door hard geluid?", options: ["Een dik trommelvlies", "Beschadigde ciliën van de haarcellen", "Te veel endolymfe", "Een verstopte buis van Eustachius"], answer: 1, explain: "Hard of langdurig geluid beschadigt de ciliën; bij zware schade herstellen ze niet en ontstaat o.a. tinnitus." }
        ],
        sequences: [
          { title: "Weg van het geluid door het oor", steps: ["Oorschelp vangt de trilling op", "Gehoorgang", "Trommelvlies trilt mee", "Gehoorbeentjes (hamer-aambeeld-stijgbeugel) versterken", "Ovale venster", "Trilling in de perilymfe", "Basilair membraan trilt", "Ciliën van de haarcellen buigen", "Sensorische neuronen → gehoorzenuw → gehoorcentrum"] }
        ]
      },
      {
        id: "3",
        title: "Het gezichtszintuig",
        summary: "Licht wordt in het oog gebroken en valt omgekeerd en verkleind op het netvlies; de hersenen draaien het beeld weer om. De grootste breking gebeurt bij het hoornvlies, daarna bij de ooglens. De iris regelt met de kringspier (pupilreflex bij fel licht) en straalsgewijze spiertjes de pupilgrootte; pigmentcellen vangen extra licht weg.\n\nScherp zien gebeurt in de gele vlek (alleen kegeltjes, elk met een eigen zenuwcel). In de blinde vlek (waar de oogzenuw vertrekt) zitten geen receptoren. Accommodatie = vormverandering van de ooglens: boller voor dichtbij, platter voor veraf.\n\nOogafwijkingen: verziend = beeld áchter het netvlies, corrigeren met een bolle +bril (convergerend); bijziend = beeld vóór het netvlies, holle −bril (divergerend). Diepte zie je door stereoscopisch zien: de hersenen vergelijken de iets verschillende beelden van beide ogen (de zenuwen kruisen deels in het optisch chiasma).",
        goals: [
          "Je beschrijft de bouw van het oog en bescherming tegen overbelichting.",
          "Je legt uit hoe je scherp ziet en oogafwijkingen corrigeert.",
          "Je legt uit hoe je afstand inschat en diepte ziet."
        ],
        cards: [
          { term: "Hoornvlies", def: "Doorzichtig laagje vooraan het oog; zorgt voor de grootste lichtbreking." },
          { term: "Iris", def: "Het gekleurde deel; regelt met kringspier en straalsgewijze spiertjes de grootte van de pupil." },
          { term: "Pupil", def: "De opening in de iris waardoor licht binnenkomt." },
          { term: "Ooglens", def: "Bolle lens die het licht verder convergeert en van vorm verandert (accommodatie)." },
          { term: "Netvlies", def: "Laag achterin het oog met de fotoreceptoren (staafjes en kegeltjes)." },
          { term: "Gele vlek", def: "Centraal deel van het netvlies met alleen kegeltjes; hier zie je het scherpst." },
          { term: "Blinde vlek", def: "Plek zonder receptorcellen, waar de oogzenuw het oog verlaat." },
          { term: "Pupilreflex", def: "De kringspier maakt de pupil kleiner bij fel licht om het netvlies te beschermen." },
          { term: "Pigmentcellen", def: "Cellen achter in het netvlies waarvan de pigmentkorrels bij fel licht licht wegvangen." },
          { term: "Accommodatie", def: "Vormverandering van de ooglens om dichtbij of veraf scherp te stellen." },
          { term: "Verziend", def: "Beeld valt scherp áchter het netvlies; corrigeren met een bolle +bril (convergerend)." },
          { term: "Bijziend", def: "Beeld valt scherp vóór het netvlies; corrigeren met een holle −bril (divergerend)." },
          { term: "Stereoscopisch zien", def: "Diepte zien door in de hersenen de beelden van beide ogen te vergelijken." },
          { term: "Optisch chiasma", def: "Plaats waar de gezichtszenuwen gedeeltelijk kruisen." }
        ],
        quiz: [
          { q: "Waar ontstaat de grootste lichtbreking in het oog?", options: ["Ooglens", "Hoornvlies", "Glasachtig lichaam", "Netvlies"], answer: 1, explain: "Op het grensvlak lucht–hoornvlies breekt het licht het sterkst; de lens breekt het verder." },
          { q: "Wat gebeurt er met de ooglens als je iets dichtbij scherp wilt zien?", options: ["De lens wordt platter", "De lens wordt boller", "De pupil wordt kleiner", "De lens verdwijnt"], answer: 1, explain: "Bij dichtbij kijken accommodeert de lens en wordt boller (grotere brekingsindex)." },
          { q: "Wat is verziendheid en hoe corrigeer je het?", options: ["Beeld vóór netvlies; −bril", "Beeld achter netvlies; +bril", "Beeld op netvlies; geen bril", "Blinde vlek; laserbril"], answer: 1, explain: "Bij verziendheid valt het beeld achter het netvlies; een bolle +bril (convergerend) helpt om dichtbij scherp te zien." },
          { q: "Wat ligt er in de gele vlek?", options: ["Alleen staafjes", "Alleen kegeltjes", "Geen receptoren", "Pigmentcellen"], answer: 1, explain: "In de gele vlek liggen alleen kegeltjes, elk met een eigen zenuwcel → scherp zien." },
          { q: "Hoe schat je diepte met twee ogen?", options: ["Met de pupilreflex", "Door stereoscopisch zien", "Met de blinde vlek", "Door accommodatie"], answer: 1, explain: "De hersenen vergelijken de iets verschillende beelden van beide ogen: stereoscopisch zien." }
        ],
        sequences: [
          { title: "Weg van het licht door het oog", steps: ["Hoornvlies", "Pupil (opening in de iris)", "Ooglens", "Glasachtig lichaam", "Netvlies (fotoreceptoren)"] }
        ]
      },
      {
        id: "4",
        title: "Het netvlies en de hersenen",
        summary: "Het netvlies bevat twee soorten fotoreceptoren. Staafjes (pigment rodopsine, vitamine A nodig) hebben een lage prikkeldrempel: ze werken bij weinig licht, maar geven alleen grijstinten. Kegeltjes (pigment fotopsine) hebben een hoge prikkeldrempel en geven kleur; er zijn drie typen (rood, groen, blauw), samen goed voor ~10 miljoen kleuren. Wit = alle drie even sterk geprikkeld; zwart = geen enkele boven de drempel.\n\nDe informatie gaat via bipolaire cellen naar ganglioncellen, die hem via de oogzenuw afvoeren. Een groep zintuigcellen op één ganglioncel vormt een receptief veld. Kleine velden (gele vlek, losse kegeltjes) → hoog scheidend vermogen (veel detail); grote velden (staafjes in de rand) → laag scheidend vermogen.\n\nIn de visuele schors achter in de grote hersenen wordt het beeld verwerkt (primair: bewustwording; secundair: herkenning).",
        goals: [
          "Je legt de werking van staafjes en kegeltjes uit.",
          "Je legt uit hoe het netvlies samen met de visuele schors zien mogelijk maakt."
        ],
        cards: [
          { term: "Staafjes", def: "Fotoreceptoren voor weinig licht; geven grijstinten (geen kleur), lage prikkeldrempel, bevatten rodopsine." },
          { term: "Kegeltjes", def: "Fotoreceptoren voor kleur; 3 typen (rood/groen/blauw), hoge prikkeldrempel, bevatten fotopsine." },
          { term: "Rodopsine", def: "Lichtgevoelig pigment in staafjes; voor opbouw is vitamine A nodig." },
          { term: "Fotopsine", def: "Lichtgevoelig pigment in kegeltjes (drie varianten voor rood, groen, blauw)." },
          { term: "Bipolaire cellen", def: "Neuronen die staafjes en kegeltjes verbinden met de ganglioncellen." },
          { term: "Ganglioncellen", def: "Cellen die de impulsen via de oogzenuw naar de hersenen afvoeren." },
          { term: "Receptief veld", def: "Een groep zintuigcellen die samen op één ganglioncel is geschakeld." },
          { term: "Scheidend vermogen", def: "Het vermogen details te onderscheiden; hoog in de gele vlek (kleine receptieve velden)." },
          { term: "Visuele schors", def: "Sensorisch centrum voor zien achter in de grote hersenen." },
          { term: "Nachtblindheid", def: "Slecht zien bij weinig licht door een tekort aan vitamine A (rodopsine)." }
        ],
        quiz: [
          { q: "Welke fotoreceptoren werken bij weinig licht?", options: ["Kegeltjes", "Staafjes", "Bipolaire cellen", "Ganglioncellen"], answer: 1, explain: "Staafjes hebben een lage prikkeldrempel en werken bij weinig licht (grijstinten)." },
          { q: "Welk pigment zit in de staafjes?", options: ["Fotopsine", "Melanine", "Rodopsine", "Lysozym"], answer: 2, explain: "Staafjes bevatten rodopsine; voor de opbouw is vitamine A nodig." },
          { q: "Hoeveel typen kegeltjes heb je?", options: ["Eén", "Twee", "Drie (rood, groen, blauw)", "Vier"], answer: 2, explain: "Drie typen kegeltjes, elk gevoelig voor een andere golflengte; samen tot ±10 miljoen kleuren." },
          { q: "Waar is het scheidend vermogen het hoogst?", options: ["Aan de rand van het netvlies", "In de blinde vlek", "In de gele vlek", "In de oogzenuw"], answer: 2, explain: "In de gele vlek geven kegeltjes hun info apart door → klein receptief veld → hoog scheidend vermogen." },
          { q: "Welke cellen voeren de impulsen naar de hersenen af?", options: ["Staafjes", "Bipolaire cellen", "Ganglioncellen", "Horizontale cellen"], answer: 2, explain: "Ganglioncellen voeren via de oogzenuw de impulsen naar de hersenen af." }
        ],
        sequences: []
      },
      {
        id: "5",
        title: "Zintuigen en regeling",
        summary: "Je lichaam meet en regelt voortdurend je interne milieu. Inwendige chemoreceptoren in de aortaboog en de halsslagaders meten de pH en de concentraties O2 en CO2; bij meer CO2 gaat de ademhaling sneller. Drukreceptoren in de aortawand meten de bloeddruk. Dit verloopt via regelkringen, vaak met negatieve terugkoppeling (een afwijking wordt gecorrigeerd, bv. de bloeddruk daalt weer).\n\nVoor houding en beweging zijn er zintuigjes in spieren en pezen. Spierspoeltjes (tussen de spiervezels) meten de spierlengte/rek: bij uitrekking ontstaan meer impulsen (rekreflex → de spier trekt samen; ze werken ook als 'fixatiezintuig' om een houding vast te houden). Peeslichaampjes in de pezen meten de spanning: bij te grote uitrekking verslapt de spier via de peesreflex, wat blessures voorkomt.",
        goals: [
          "Je legt de bijdrage uit van inwendige receptoren en regelkringen.",
          "Je legt de bijdrage uit van spierspoeltjes en peeslichaampjes."
        ],
        cards: [
          { term: "Inwendige chemoreceptoren", def: "Meten de pH en de concentraties O2 en CO2 in het bloed (in aortaboog en halsslagaders)." },
          { term: "Drukreceptoren", def: "Uiteinden van sensorische neuronen die de bloeddruk meten via rek van de aortawand." },
          { term: "Regelkring", def: "Keten van reacties waarbij een veranderde waarde via feedback effect heeft op een volgende waarde." },
          { term: "Negatieve terugkoppeling", def: "Terugkoppeling die een afwijking corrigeert (bv. bloeddruk daalt weer)." },
          { term: "Spierspoeltje", def: "Zintuigje tussen spiervezels dat de spierlengte en rek meet." },
          { term: "Peeslichaampje", def: "Zintuigje in een pees dat reageert op het uitrekken van de pees (spierspanning)." },
          { term: "Rekreflex", def: "De spier trekt samen na uitrekking, via het spierspoeltje en een reflexboog." },
          { term: "Peesreflex", def: "Bij te grote uitrekking verslapt de spier om blessures te voorkomen." },
          { term: "Fixatiezintuig", def: "Functie van het spierspoeltje om een bepaalde houding vast te houden." }
        ],
        quiz: [
          { q: "Waar liggen de chemoreceptoren voor pH, O2 en CO2 van het bloed?", options: ["In de longen", "In de aortaboog en halsslagaders", "In het ruggenmerg", "In de huid"], answer: 1, explain: "Deze inwendige chemoreceptoren liggen in de wand van de aortaboog en de halsslagaders." },
          { q: "Wat meet een spierspoeltje?", options: ["De spierspanning in de pees", "De spierlengte en rek", "De bloeddruk", "De temperatuur"], answer: 1, explain: "Spierspoeltjes liggen tussen de spiervezels en meten de lengte/rek van de spier." },
          { q: "Wat meet een peeslichaampje?", options: ["De spierlengte", "De uitrekking/spanning van de pees", "De bloed-pH", "Licht"], answer: 1, explain: "Peeslichaampjes reageren op het uitrekken van een pees (de totale spierspanning)." },
          { q: "Wat doet de peesreflex?", options: ["Spier trekt sterker samen", "Spier verslapt om blessure te voorkomen", "Hartslag versnelt", "Pupil vernauwt"], answer: 1, explain: "Bij te grote uitrekking verslapt de spier en verkort de antagonist, zo voorkom je o.a. afscheuren." },
          { q: "Wat gebeurt er bij een hogere CO2-concentratie in het bloed?", options: ["Ademhaling vertraagt", "Ademhaling versnelt", "Bloeddruk verdwijnt", "Hartslag stopt"], answer: 1, explain: "Het ademhalingscentrum in de hersenstam reageert op CO2: meer CO2 → snellere ademhaling." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "wn-ex1",
        title: "Duiken en de buis van Eustachius",
        context: "Een duiker daalt af in het water. De waterdruk op het trommelvlies neemt daarbij snel toe. Duikers leren om regelmatig te 'klaren' (lucht naar het middenoor persen).",
        question: "Leg uit waarom een duiker die niet klaart, pijn aan het trommelvlies kan krijgen. Gebruik in je antwoord de buis van Eustachius.",
        points: 2,
        model: [
          "Bij het afdalen neemt de druk aan de buitenkant van het trommelvlies toe, terwijl de druk in het middenoor gelijk blijft (1 p).",
          "Zonder klaren wordt de luchtdruk in het middenoor niet via de buis van Eustachius aangepast, zodat het trommelvlies naar binnen gedrukt/uitgerekt wordt → pijn (1 p)."
        ]
      },
      {
        id: "wn-ex2",
        title: "Zien in het donker",
        context: "Als je vanuit een fel verlichte kamer een donkere ruimte inloopt, zie je eerst bijna niets. Na een paar minuten kun je steeds meer onderscheiden, maar alles blijft grijzig.",
        question: "Verklaar met de eigenschappen van staafjes en kegeltjes (a) waarom je in het donker vooral grijstinten ziet en (b) waarom je in het donker aan de zijkant van je gezichtsveld soms beter iets ziet dan als je er recht naar kijkt.",
        points: 3,
        model: [
          "In het donker werken vooral de staafjes; die hebben een lage prikkeldrempel maar geven alleen grijstinten (geen kleur) (1 p).",
          "De kegeltjes hebben een hoge prikkeldrempel en worden bij weinig licht niet geprikkeld, dus je ziet geen kleur (1 p).",
          "In de gele vlek (recht vooruit) zitten alleen kegeltjes; staafjes liggen meer aan de rand van het netvlies, dus recht naar iets kijken werkt in het donker juist slechter (1 p)."
        ]
      },
      {
        id: "wn-ex3",
        title: "Adaptatie van reukzintuig",
        context: "Als je een ruimte binnenkomt met een sterke geur, ruik je die eerst duidelijk. Na een tijdje merk je de geur nauwelijks meer op, terwijl de stof nog steeds in de lucht zit.",
        question: "Leg met het begrip adaptatie uit waarom je de geur na verloop van tijd nauwelijks meer ruikt.",
        points: 2,
        model: [
          "Bij een langdurige, constante prikkel gaat de prikkeldrempel van de (chemo)receptoren omhoog: adaptatie/gewenning (1 p).",
          "Daardoor sturen de zintuigcellen minder (of geen) impulsen meer naar de hersenen, zodat je de geur minder waarneemt (1 p)."
        ]
      }
    ]
  },

  /* ===================== AFWEER ===================== */
  {
    id: "afweer",
    title: "Afweer",
    icon: "🛡️",
    theme: "t-purple",
    domain: "Zelfregulatie",
    intro: "Hoe verdedigt je lichaam zich tegen ziekteverwekkers? Van de huid en witte bloedcellen tot antistoffen, vaccinatie, allergie en bloedgroepen: je leert hoe aangeboren én verworven afweer samenwerken.",
    paragraphs: [
      {
        id: "1",
        title: "Aangeboren afweer",
        summary: "De aangeboren afweer is vanaf de geboorte aanwezig en niet-specifiek. De eerste linie is mechanische/fysische afweer: dekweefsels vormen een barrière. De opperhuid heeft een hoornlaag van dode cellen; in de basale cellenlaag delen stamcellen en zitten melanocyten, die met melanine het DNA tegen uv-straling beschermen. Slijmvliezen scheiden slijm met bacteriedodende stoffen af, en traanvocht bevat het bacteriedodende enzym lysozym.\n\nPlanten hebben ook afweer:\n• Mechanisch: stekels en doornen tegen herbivoren.\n• Chemisch: bittere, brandende of giftige stoffen (bv. taxine van de venijnboom, brandharen van de brandnetel).\nSommige planten lokken zelfs de natuurlijke vijanden van hun belagers met geurstoffen.",
        goals: [
          "Je beschrijft de bescherming van het inwendige milieu en de bescherming tegen uv-straling.",
          "Je herkent afweermechanismen bij planten."
        ],
        cards: [
          { term: "Mechanische afweer", def: "Fysische barrière (huid, dekweefsel) die ziekteverwekkers tegenhoudt." },
          { term: "Dekweefsel", def: "Laag nauw aaneengesloten cellen waar grote moleculen en ziekteverwekkers niet doorheen kunnen." },
          { term: "Opperhuid", def: "Dekweefsel met een buitenste hoornlaag van dode, verdroogde cellen." },
          { term: "Basale cellenlaag (kiemlaag)", def: "Dunne laag met delende stamcellen en melanocyten waaruit de opperhuid aangroeit." },
          { term: "Melanocyten / melanine", def: "Pigmentvormende cellen; melanine beschermt de celkern (DNA) tegen uv-straling." },
          { term: "Slijmvlies", def: "Dekweefsel met slijmbekercellen dat slijm met bacteriedodende stoffen afscheidt." },
          { term: "Lysozym", def: "Bacteriedodend enzym, o.a. in traanvocht, dat de ogen beschermt." },
          { term: "Aangeboren afweer", def: "Niet-specifieke afweer die vanaf de geboorte aanwezig is (huid, slijmvliezen, witte bloedcellen)." },
          { term: "Mechanische afweer (planten)", def: "Bescherming met stekels en doornen tegen herbivoren." },
          { term: "Chemische afweer (planten)", def: "Bittere, brandende of giftige stoffen (bv. taxine, brandharen) tegen vraat." }
        ],
        quiz: [
          { q: "Wat is mechanische afweer bij de mens?", options: ["Witte bloedcellen", "Een fysische barrière zoals de huid/dekweefsel", "Antistoffen", "Koorts"], answer: 1, explain: "Dekweefsels vormen als fysische barrière een mechanische afweer tegen ziekteverwekkers." },
          { q: "Wat beschermt het DNA van huidcellen tegen uv-straling?", options: ["Lysozym", "Melanine uit melanocyten", "Slijm", "Hoornlaag"], answer: 1, explain: "Melanine uit de melanocyten hoopt zich op rond de celkernen en beschermt het DNA." },
          { q: "Welk enzym in traanvocht doodt bacteriën?", options: ["Integrase", "Acetylcholinesterase", "Lysozym", "Reverse transcriptase"], answer: 2, explain: "Lysozym in het traanvocht werkt bacteriedodend en beschermt de ogen." },
          { q: "Noem een vorm van mechanische afweer bij planten.", options: ["Bittere stoffen", "Stekels en doornen", "Histamine", "Gifstoffen"], answer: 1, explain: "Stekels en doornen zijn mechanische afweer; bittere/giftige stoffen zijn chemische afweer." },
          { q: "Wat is chemische afweer bij planten?", options: ["Trilharen", "Stekels", "Bittere of giftige stoffen", "Een dikke celwand"], answer: 2, explain: "Veel planten maken bittere of giftige stoffen (bv. taxine van de venijnboom) tegen vraat." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Vervolg aangeboren afweer",
        summary: "Passeert een ziekteverwekker de eerste linie, dan treedt de aangeboren (niet-specifieke) afweer in het bloed in werking. Bacteriën, parasieten (eukaryoot, bv. de malaria-parasiet Plasmodium), virussen en schimmels kunnen je ziek maken; een RNA-virus zet met reverse transcriptase zijn RNA om naar DNA en bouwt dit met integrase in het gastheer-DNA in.\n\nLichaamseigen vs lichaamsvreemd: alle cellen tonen via MHC-I-moleculen hun eigen antigenen, zodat ze herkenbaar zijn als lichaamseigen. Op vreemde antigenen volgt wél een reactie.\n\nWitte bloedcellen: granulocyten (met granula, giftig voor microben) en macrofagen (fagocytose: opnemen en verteren). NK-cellen doden geïnfecteerde of tumorcellen met perforine (lysis). Het complementsysteem (>30 bloedeiwitten) reageert in een cascade: het activeert witte bloedcellen (via cytokinen), bedekt ziekteverwekkers (opsonisatie) en perforeert hun membraan (lysis).",
        goals: [
          "Je legt uit hoe bacteriën, parasieten, virussen en schimmels je ziek maken.",
          "Je legt uit hoe je afweersysteem onderscheid maakt tussen lichaamsvreemd en lichaamseigen.",
          "Je beschrijft de rol van witte bloedcellen en complementeiwitten."
        ],
        cards: [
          { term: "Antigeen", def: "Molecuul (eiwitfragment) op het celmembraan dat het afweersysteem kan activeren (antibody generator)." },
          { term: "MHC-I-molecuul", def: "Presenteert lichaamseigen antigenen op álle lichaamscellen; maakt een cel herkenbaar als lichaamseigen." },
          { term: "Antigeen presenterende cel (APC)", def: "Cel die (vreemde) antigenen toont aan andere afweercellen." },
          { term: "Granulocyt", def: "Witte bloedcel met granula (giftig voor bacteriën, schimmels, parasieten)." },
          { term: "Macrofaag", def: "Grote witte bloedcel (fagocyt) die aspecifiek deeltjes opneemt en verteert." },
          { term: "Fagocytose", def: "Het opnemen en verteren van deeltjes (bv. ziekteverwekkers) door een cel." },
          { term: "Natural-killercel (NK-cel)", def: "Doodt geïnfecteerde of tumorcellen door perforine af te scheiden (lysis)." },
          { term: "Perforine", def: "Stof die gaten in het celmembraan maakt, waardoor lysis optreedt." },
          { term: "Complementsysteem", def: "Meer dan 30 bloedeiwitten die in een cascade ziekteverwekkers opruimen." },
          { term: "Cytokinen", def: "Signaalstoffen die o.a. witte bloedcellen activeren en de infectieplaats markeren." },
          { term: "Opsonisatie", def: "Complementeiwitten vormen een laagje op de ziekteverwekker, zodat macrofagen die makkelijk opruimen." },
          { term: "Lysis", def: "Het openbarsten/doden van een cel doordat het celmembraan wordt geperforeerd." },
          { term: "RNA-virus", def: "Virus dat met reverse transcriptase zijn RNA naar DNA omzet en met integrase inbouwt; muteert snel." }
        ],
        quiz: [
          { q: "Wat is een antigeen?", options: ["Een antistof", "Een molecuul dat het afweersysteem kan activeren", "Een witte bloedcel", "Een enzym"], answer: 1, explain: "Antigenen (antibody generators) op het celmembraan kunnen het afweersysteem activeren." },
          { q: "Welk molecuul presenteert lichaamseigen antigenen op álle lichaamscellen?", options: ["MHC-II", "MHC-I", "IgE", "Perforine"], answer: 1, explain: "MHC-I-moleculen zitten op alle lichaamscellen en maken ze herkenbaar als lichaamseigen." },
          { q: "Welke cel doodt geïnfecteerde cellen met perforine?", options: ["Granulocyt", "Macrofaag", "NK-cel", "Plasmacel"], answer: 2, explain: "Natural-killercellen scheiden perforine uit → gaten in het membraan → lysis." },
          { q: "Wat is fagocytose?", options: ["Antistoffen maken", "Het opnemen en verteren van deeltjes", "Histamine lozen", "DNA kopiëren"], answer: 1, explain: "Macrofagen nemen via fagocytose ziekteverwekkers op en verteren ze in een verteringsblaasje." },
          { q: "Wat is opsonisatie?", options: ["Perforeren van het membraan", "Een laagje complementeiwitten op de ziekteverwekker", "Het maken van cytokinen", "Het doden van een NK-cel"], answer: 1, explain: "Bij opsonisatie bedekken complementeiwitten de ziekteverwekker zodat macrofagen die makkelijk opruimen." },
          { q: "Welk enzym gebruikt een RNA-virus om RNA naar DNA om te zetten?", options: ["Integrase", "DNA-polymerase", "Reverse transcriptase", "Lysozym"], answer: 2, explain: "Reverse transcriptase zet viraal RNA om naar DNA; integrase bouwt dit daarna in het gastheer-DNA in." }
        ],
        sequences: []
      },
      {
        id: "3",
        title: "Verworven afweer en antistoffen",
        summary: "Ziekteverwekkers die de tweede linie passeren, krijgen te maken met de verworven (specifieke) afweer, gericht op één type ziekteverwekker. Een dendritische cel of macrofaag fagocyteert de indringer en toont diens antigeen op een MHC-II-molecuul (alleen op witte bloedcellen): de cel is nu een antigeen presenterende cel (APC).\n\nIn een lymfeknoop activeert de APC een passende T-helpercel (Th). Die deelt tot een kloon en activeert met cytokinen de cytotoxische T-cellen (Tc) én de B-cellen met de juiste receptor. De Tc-cellen doden geïnfecteerde lichaamscellen (lysis). B-cellen differentiëren tot plasmacellen die grote hoeveelheden antistoffen maken.\n\nEen antistof (immunoglobuline) is Y-vormig; het (hyper)variabele uiteinde bindt aan één specifiek antigeen. T-cellen rijpen in de thymus, B-cellen in het beenmerg; cellen die op lichaamseigen stoffen reageren, sterven daarbij af.",
        goals: [
          "Je beschrijft hoe de verworven afweer ontstaat en de rol van verschillende lymfocyten.",
          "Je legt het ontstaan en de werking van antistoffen uit."
        ],
        cards: [
          { term: "Verworven afweer", def: "Specifieke afweer (derde linie) gericht op één specifiek type ziekteverwekker." },
          { term: "Dendritische cel", def: "Cel uit huid/darmen/luchtwegen die ziekteverwekkers fagocyteert en de verworven afweer start (APC)." },
          { term: "MHC-II-molecuul", def: "Komt alleen voor op witte bloedcellen en presenteert daar lichaamsvreemde antigenen." },
          { term: "Lymfeknoop", def: "Verdikking in het lymfevatsysteem met veel B- en T-cellen (o.a. in liezen, oksels, hals)." },
          { term: "T-helpercel (Th)", def: "T-cel die met cytokinen andere lymfocyten (Tc- en B-cellen) activeert." },
          { term: "Cytotoxische T-cel (Tc)", def: "Doodt geïnfecteerde lichaamscellen door ze lek te maken (lysis)." },
          { term: "B-cel", def: "Lymfocyt die na activering deelt en differentieert tot plasmacellen." },
          { term: "Plasmacel", def: "Gedifferentieerde B-cel die grote hoeveelheden van één specifieke antistof maakt." },
          { term: "Antistof (immunoglobuline)", def: "Y-vormig eiwit met een (hyper)variabel deel dat aan een specifiek antigeen bindt." },
          { term: "Thymus", def: "Orgaan achter het borstbeen waar T-cellen uitrijpen en getest worden." },
          { term: "Geheugencel", def: "B- of T-cel die bewaard blijft en bij een tweede infectie snel reageert." }
        ],
        quiz: [
          { q: "Welke cel start de verworven afweer?", options: ["Rode bloedcel", "Dendritische cel (APC)", "Plasmacel", "Mestcel"], answer: 1, explain: "Dendritische cellen (en macrofagen) fagocyteren de ziekteverwekker en activeren als APC de verworven afweer." },
          { q: "Welk molecuul presenteert antigenen op witte bloedcellen?", options: ["MHC-I", "MHC-II", "IgE", "Perforine"], answer: 1, explain: "MHC-II zit alleen op witte bloedcellen; MHC-I zit op alle lichaamscellen." },
          { q: "Welke T-cel activeert andere lymfocyten?", options: ["Cytotoxische T-cel", "T-helpercel", "T-suppressorcel", "NK-cel"], answer: 1, explain: "De T-helpercel (Th) activeert met cytokinen Tc-cellen en B-cellen." },
          { q: "Wat maken plasmacellen?", options: ["Perforine", "Antistoffen", "Histamine", "Melanine"], answer: 1, explain: "Geactiveerde B-cellen differentiëren tot plasmacellen die antistoffen maken." },
          { q: "Welke vorm heeft een antistof?", options: ["Bolvorm", "Y-vorm", "Schijfvorm", "Spiraal"], answer: 1, explain: "Een antistof bestaat uit vier eiwitketens in een Y-vorm; het (hyper)variabele deel bindt aan het antigeen." }
        ],
        sequences: [
          { title: "Activering van de verworven afweer", steps: ["Ziekteverwekker dringt binnen", "Dendritische cel/macrofaag fagocyteert", "Antigeen op MHC-II (cel wordt APC)", "APC reist naar de lymfeknoop", "APC activeert een passende T-helpercel", "Th-cel deelt tot een kloon", "Th activeert Tc-cellen én B-cellen", "B-cellen → plasmacellen → antistoffen"] }
        ]
      },
      {
        id: "4",
        title: "Immuniteit, vaccinatie en allergie",
        summary: "Bij immuniteit onderscheid je de cellulaire respons (Tc-cellen doden geïnfecteerde cellen) en de humorale respons (antistoffen van B-/plasmacellen in lichaamsvloeistoffen). Na een infectie blijven geheugencellen achter, waardoor je immuun bent: bij een tweede besmetting reageer je sneller en sterker.\n\nVormen van immuniteit:\n• Natuurlijke actieve: door een echte infectie.\n• Kunstmatige actieve: door vaccinatie (verzwakte/dode/onderdeel ziekteverwekker, of mRNA voor spike-eiwitten).\n• Passieve (tijdelijk, geen geheugencellen): kant-en-klare antistoffen via een antiserum, of natuurlijk via de placenta/borstvoeding.\n\nAntibiotica (bv. penicilline) doden bacteriën; door mutaties kan resistentie ontstaan, overdraagbaar via plasmiden. Allergie: bij het 1e contact maken plasmacellen IgE dat zich aan mestcellen hecht; bij het 2e contact lozen de mestcellen histamine, met een ontstekingsreactie als gevolg. Het allergeen is een op zich onschuldige, lichaamsvreemde stof.",
        goals: [
          "Je beschrijft de cellulaire en humorale respons en de vormen van immuniteit; de rol van vaccinatie.",
          "Je beschrijft de werking van antibiotica en wat resistentie is.",
          "Je legt het verloop van een allergische reactie uit."
        ],
        cards: [
          { term: "Cellulaire respons", def: "Het opsporen en doden van geïnfecteerde cellen; vooral door Tc-cellen." },
          { term: "Humorale respons", def: "Het bestrijden van ziekteverwekkers in lichaamsvloeistoffen via antistoffen (B-cellen)." },
          { term: "Geheugencel", def: "Bewaarde lymfocyt die bij een tweede infectie sneller en meer reageert → je bent immuun." },
          { term: "Natuurlijke actieve immuniteit", def: "Immuniteit door antistoffen en geheugencellen na een echte infectie." },
          { term: "Kunstmatige actieve immuniteit", def: "Immuniteit door vaccinatie: een vaccin wekt een immuunrespons + geheugencellen op." },
          { term: "Passieve immuniteit", def: "Je krijgt kant-en-klare antistoffen (antiserum, placenta, borstvoeding); tijdelijk, geen geheugencellen." },
          { term: "Vaccin", def: "Bevat een verzwakte/dode vorm of een onderdeel van een ziekteverwekker (bv. mRNA voor spike-eiwitten)." },
          { term: "Antibioticum", def: "Bacteriedodende stof (bv. penicilline) die bv. de celwandaanmaak of stofwisseling van bacteriën verstoort." },
          { term: "Resistentie", def: "Ongevoeligheid van bacteriën voor een antibioticum, door mutaties; overdraagbaar via plasmiden." },
          { term: "Mestcel", def: "Witte bloedcel vol histamineblaasjes, met IgE op het membraan; betrokken bij allergie." },
          { term: "Histamine", def: "Mediator die ontstekingsreacties veroorzaakt: verwijdt bloedvaten en verhoogt de slijmproductie." },
          { term: "Allergeen", def: "Lichaamsvreemde, niet-ziekteverwekkende stof waarop het afweersysteem te heftig reageert." },
          { term: "IgE", def: "Antistoftype dat zich aan mestcellen hecht en de allergische reactie op gang brengt." }
        ],
        quiz: [
          { q: "Wat is de cellulaire respons?", options: ["Antistoffen in het bloed", "Tc-cellen doden geïnfecteerde cellen", "Histamine vrijmaken", "Complementeiwitten"], answer: 1, explain: "De cellulaire respons spoort geïnfecteerde cellen op en doodt ze; Tc-cellen zijn hierbij direct betrokken." },
          { q: "Wat is de humorale respons?", options: ["Tc-cellen doden cellen", "Antistoffen bestrijden ziekteverwekkers in vloeistoffen", "NK-cellen maken perforine", "Mechanische afweer"], answer: 1, explain: "De humorale respons gebruikt antistoffen (van B-/plasmacellen) tegen ziekteverwekkers in lichaamsvloeistoffen." },
          { q: "Welke immuniteit krijg je door vaccinatie?", options: ["Natuurlijke actieve", "Kunstmatige actieve", "Natuurlijke passieve", "Kunstmatige passieve"], answer: 1, explain: "Een vaccin wekt zelf een immuunrespons + geheugencellen op: kunstmatige actieve immuniteit." },
          { q: "Welke immuniteit krijgt een baby via de placenta?", options: ["Kunstmatige actieve", "Natuurlijke actieve", "Natuurlijke passieve", "Kunstmatige passieve"], answer: 2, explain: "Antistoffen van de moeder via placenta/borstvoeding = natuurlijke passieve immuniteit (tijdelijk)." },
          { q: "Wat is resistentie?", options: ["Een sterke immuniteit", "Ongevoeligheid van bacteriën voor antibiotica", "Een soort antistof", "Een vaccin"], answer: 1, explain: "Door mutaties kunnen bacteriën ongevoelig worden voor een antibioticum; dit kan via plasmiden worden doorgegeven." },
          { q: "Welke stof komt vrij uit mestcellen bij een allergie?", options: ["Perforine", "Lysozym", "Histamine", "Melanine"], answer: 2, explain: "Bij het tweede contact met het allergeen lozen de mestcellen histamine → allergische reactie." }
        ],
        sequences: [
          { title: "Verloop van een allergische reactie", steps: ["1e contact met het allergeen", "Plasmacellen maken IgE-antistoffen", "IgE hecht aan de mestcellen (op scherp)", "2e contact met hetzelfde allergeen", "Allergeen koppelt aan IgE op de mestcel", "Mestcel doet exocytose → histamine vrij", "Ontstekingsreactie (allergie)"] }
        ]
      },
      {
        id: "5",
        title: "Lichaamsvreemde eiwitten: afstoten of niet",
        summary: "Eiwitten op celmembranen werken als antigenen, ook op rode bloedcellen. Het AB0-stelsel kent antigeen A en B; de allelen A en B zijn codominant, 0 is recessief. In het plasma zitten antistoffen tegen het ontbrekende antigeen: bloedgroep A heeft anti-B, B heeft anti-A, AB heeft geen van beide (universele acceptor), 0 heeft beide (universele donor). Vóór een transfusie controleert een kruisproef of er geen klontering optreedt.\n\nDe resusfactor is antigeen D op de rode bloedcellen: ~85% is Rh+ (de rest Rh−). Een Rh− moeder kan na contact met Rh+ bloed anti-D en geheugencellen maken; een anti-D injectie voorkomt resusantagonisme bij een volgende zwangerschap.\n\nBij transplantaties verschillen de MHC-I-eiwitten (HLA-systeem) per persoon; de afweer herkent een donororgaan als lichaamsvreemd → afstoting. Bij auto-immuunziekten richt de afweer zich ten onrechte tegen lichaamseigen cellen.",
        goals: [
          "Je beschrijft het AB0-systeem en de gevolgen voor bloedtransfusies.",
          "Je legt uit wat de resusfactor is.",
          "Je legt de oorzaak uit van afstoting bij transplantaties."
        ],
        cards: [
          { term: "AB0-stelsel", def: "Bloedgroepstelsel met twee antigenen (A en B) op de rode bloedcellen." },
          { term: "Bloedgroep A", def: "Antigeen A op de cellen; anti-B in het bloedplasma." },
          { term: "Bloedgroep B", def: "Antigeen B op de cellen; anti-A in het bloedplasma." },
          { term: "Bloedgroep AB", def: "Beide antigenen, geen anti-A of anti-B (universele acceptor)." },
          { term: "Bloedgroep 0", def: "Geen antigenen, zowel anti-A als anti-B (universele donor)." },
          { term: "Codominant", def: "Het A-allel en B-allel komen samen beide tot expressie (bloedgroep AB)." },
          { term: "Kruisproef", def: "Test vóór een transfusie welk bloed geschikt is; klontering betekent ongeschikt." },
          { term: "Resusfactor", def: "Bloedgroepantigeen D op rode bloedcellen; Rh+ (±85%) of Rh−." },
          { term: "Resusantagonisme", def: "Een Rh− moeder maakt anti-D tegen het Rh+ bloed van haar kind." },
          { term: "Anti-D injectie", def: "Voorkomt dat een Rh− moeder geheugencellen tegen Rh+ bloed aanmaakt." },
          { term: "HLA-systeem", def: "Het geheel van MHC-eiwitten dat per individu verschilt." },
          { term: "Afstoting", def: "De afweer herkent de MHC-I-eiwitten van een transplantaat als lichaamsvreemd en beschadigt het orgaan." },
          { term: "Auto-immuunziekte", def: "Het afweersysteem richt zich ten onrechte tegen lichaamseigen cellen." }
        ],
        quiz: [
          { q: "Welke antistoffen heeft iemand met bloedgroep A in het plasma?", options: ["Anti-A", "Anti-B", "Anti-A én anti-B", "Geen"], answer: 1, explain: "Bloedgroep A heeft antigeen A op de cellen en anti-B in het plasma." },
          { q: "Welke bloedgroep is de universele donor?", options: ["A", "B", "AB", "0"], answer: 3, explain: "Bloedgroep 0 heeft geen A/B-antigenen op de cellen, dus geen klontering bij de ontvanger." },
          { q: "Wat betekent codominant bij het AB0-stelsel?", options: ["0 overheerst", "A en B komen beide tot expressie", "A overheerst B", "Geen expressie"], answer: 1, explain: "Bij genotype AB komen het A- en B-allel beide tot expressie: ze zijn codominant." },
          { q: "Wat is de resusfactor?", options: ["Een antistof in plasma", "Antigeen D op rode bloedcellen", "Een wit bloedlichaampje", "Een enzym"], answer: 1, explain: "De resusfactor is antigeen D op de rode bloedcellen; Rh+ heeft het, Rh− niet." },
          { q: "Waardoor treedt afstoting op bij een transplantatie?", options: ["Door bloedgroep 0", "Door histamine", "MHC-I/HLA-eiwitten worden als lichaamsvreemd herkend", "Door lysozym"], answer: 2, explain: "De MHC-I-eiwitten (HLA) verschillen per individu; de afweer herkent ze als vreemd en stoot het orgaan af." },
          { q: "Wat gebeurt er bij een auto-immuunziekte?", options: ["De afweer valt lichaamseigen cellen aan", "Er ontstaan geen antistoffen", "De huid wordt dikker", "Bacteriën worden resistent"], answer: 0, explain: "Lymfocyten beschouwen lichaamseigen antigenen ten onrechte als vreemd en vallen eigen cellen aan." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "af-ex1",
        title: "Waarom werkt een vaccin de tweede keer sneller?",
        context: "Bij een vaccinatie krijgt iemand een onschadelijk gemaakt onderdeel van een ziekteverwekker ingespoten. Wordt de persoon later besmet met de échte ziekteverwekker, dan wordt hij meestal niet (ernstig) ziek.",
        question: "Leg uit waarom iemand na een vaccinatie bij een latere besmetting sneller en sterker reageert dan iemand die niet gevaccineerd is. Gebruik in je antwoord de begrippen geheugencellen en antistoffen.",
        points: 3,
        model: [
          "Door het vaccin maakt het lichaam een specifieke afweerreactie tegen het antigeen én blijven er geheugencellen achter (1 p).",
          "Bij een latere besmetting herkennen de geheugencellen het antigeen meteen (1 p).",
          "Daardoor worden er sneller en in grotere hoeveelheid antistoffen/plasmacellen gemaakt, zodat de ziekteverwekker wordt opgeruimd vóór je (ernstig) ziek wordt (1 p)."
        ]
      },
      {
        id: "af-ex2",
        title: "Bloedtransfusie en het AB0-stelsel",
        context: "Een patiënt met bloedgroep A krijgt per ongeluk bloed van een donor met bloedgroep B toegediend. Kort daarna treedt er klontering (agglutinatie) van rode bloedcellen op.",
        question: "Verklaar waarom er klontering optreedt. Gebruik in je antwoord de antigenen op de rode bloedcellen en de antistoffen in het plasma.",
        points: 2,
        model: [
          "De ontvanger (bloedgroep A) heeft anti-B-antistoffen in zijn plasma (1 p).",
          "De donorcellen (bloedgroep B) dragen antigeen B; de anti-B-antistoffen binden hieraan, waardoor de rode bloedcellen samenklonteren (1 p)."
        ]
      },
      {
        id: "af-ex3",
        title: "Resus en zwangerschap",
        context: "Een Rh−-moeder is zwanger van een Rh+-kind. Bij de bevalling kan er bloed van het kind in de bloedbaan van de moeder komen. Bij een volgende Rh+-zwangerschap kan het kind bloedarmoede krijgen.",
        question: "Leg uit hoe het komt dat een tweede Rh+-kind risico loopt, en hoe een anti-D-injectie bij de moeder dit voorkomt.",
        points: 3,
        model: [
          "Bij het eerste kind komt Rh+-bloed (antigeen D) in de moeder; zij maakt daartegen anti-D-antistoffen én geheugencellen (1 p).",
          "Bij een volgende Rh+-zwangerschap maakt zij door de geheugencellen snel veel anti-D, dat via de placenta de rode bloedcellen van het kind afbreekt (1 p).",
          "Een anti-D-injectie ruimt de Rh+-cellen van het kind op vóór de moeder zelf geheugencellen aanmaakt, zodat er geen (blijvende) afweer ontstaat (1 p)."
        ]
      }
    ]
  },

  /* ===================== HORMONEN & HOMEOSTASE ===================== */
  {
    id: "hormonen",
    title: "Hormonen & homeostase",
    icon: "⚗️",
    theme: "t-orange",
    domain: "Regeling",
    intro: "Naast het zenuwstelsel regelt je lichaam veel processen met hormonen: langzamere, langer werkende signaalstoffen. Je leert de bouw van het hormoonstelsel, hoe hormonen werken, hoe je bloedglucose wordt geregeld en hoe homeostase via terugkoppeling in stand blijft.",
    paragraphs: [
      {
        id: "1",
        title: "Het hormoonstelsel",
        summary: "Hormonen zijn signaalstoffen die door hormoonklieren (endocriene klieren) rechtstreeks aan het bloed worden afgegeven. Ze verspreiden zich door het hele lichaam, maar werken alleen op doelwitcellen met de juiste receptor. Vergeleken met het zenuwstelsel werkt hormonale regeling langzamer, maar het effect houdt langer aan.\n\nBelangrijke klieren: de hypofyse (stuurklier), de schildklier (thyroxine → stofwisselingssnelheid), de bijnieren (o.a. adrenaline en cortisol), de eilandjes van Langerhans in de alvleesklier (insuline en glucagon) en de geslachtsklieren.\n\nDe hypothalamus koppelt het zenuwstelsel aan het hormoonstelsel: hij stuurt via afgiftehormonen de hypofyse aan, die op haar beurt andere klieren aanstuurt.",
        goals: [
          "Je beschrijft de bouw en functie van het hormoonstelsel.",
          "Je legt uit hoe de hypothalamus en hypofyse andere klieren aansturen."
        ],
        cards: [
          { term: "Hormoon", def: "Signaalstof die door een hormoonklier aan het bloed wordt afgegeven en op doelwitcellen werkt." },
          { term: "Hormoonklier (endocriene klier)", def: "Klier zonder afvoerbuis die haar product (hormoon) rechtstreeks aan het bloed afgeeft." },
          { term: "Doelwitcel", def: "Cel met een receptor die past bij een bepaald hormoon; alleen daar heeft het hormoon effect." },
          { term: "Hypofyse", def: "Stuurklier onder de hypothalamus die met hormonen andere hormoonklieren aanstuurt." },
          { term: "Hypothalamus", def: "Hersendeel dat het zenuwstelsel en hormoonstelsel koppelt en de hypofyse aanstuurt." },
          { term: "Schildklier", def: "Klier die thyroxine maakt en zo de snelheid van de stofwisseling regelt." },
          { term: "Bijnier", def: "Klier die o.a. adrenaline (snelle stressreactie) en cortisol afgeeft." },
          { term: "Eilandjes van Langerhans", def: "Groepjes cellen in de alvleesklier die insuline en glucagon maken." }
        ],
        quiz: [
          { q: "Waar geeft een hormoonklier haar hormoon aan af?", options: ["Aan een afvoerbuis", "Rechtstreeks aan het bloed", "Aan de darm", "Aan een zenuw"], answer: 1, explain: "Endocriene klieren hebben geen afvoerbuis; ze geven hun hormoon rechtstreeks aan het bloed af." },
          { q: "Waarom werkt een hormoon alleen op bepaalde cellen?", options: ["Alleen die cellen liggen bij de klier", "Alleen doelwitcellen hebben de juiste receptor", "Het bloed bereikt alleen die cellen", "Hormonen kiezen willekeurig"], answer: 1, explain: "Een hormoon werkt alleen op doelwitcellen met een passende receptor." },
          { q: "Welke klier is de 'stuurklier' die andere klieren aanstuurt?", options: ["Schildklier", "Hypofyse", "Bijnier", "Alvleesklier"], answer: 1, explain: "De hypofyse stuurt met hormonen andere hormoonklieren aan." },
          { q: "Wat is een verschil tussen hormonale en zenuwregeling?", options: ["Hormonen werken sneller", "Hormonen werken langzamer maar langer", "Hormonen werken alleen lokaal", "Zenuwen werken via het bloed"], answer: 1, explain: "Hormonale regeling is langzamer dan zenuwregeling, maar het effect houdt langer aan." },
          { q: "Welk hersendeel koppelt het zenuwstelsel aan het hormoonstelsel?", options: ["Kleine hersenen", "Hypothalamus", "Hersenbalk", "Thalamus"], answer: 1, explain: "De hypothalamus stuurt de hypofyse aan en verbindt zo beide regelsystemen." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Regeling van de bloedglucose",
        summary: "De glucoseconcentratie in je bloed wordt strak geregeld door twee hormonen uit de eilandjes van Langerhans. Na een maaltijd stijgt de bloedglucose; de bètacellen geven insuline af. Insuline zorgt dat lever- en spiercellen glucose opnemen en als glycogeen opslaan, waardoor de bloedglucose daalt.\n\nBij een lage bloedglucose (bv. tijdens inspanning of vasten) geven de alfacellen glucagon af. Glucagon zet de lever aan om glycogeen weer af te breken tot glucose, dat aan het bloed wordt afgegeven; de bloedglucose stijgt. Insuline en glucagon werken dus antagonistisch.\n\nBij diabetes type 1 maakt de alvleesklier (te) weinig insuline (auto-immuun); bij type 2 reageren de cellen minder goed op insuline (ongevoeligheid).",
        goals: [
          "Je legt uit hoe insuline en glucagon de bloedglucose regelen.",
          "Je beschrijft het verschil tussen diabetes type 1 en type 2."
        ],
        cards: [
          { term: "Insuline", def: "Hormoon van de bètacellen; verlaagt de bloedglucose door opname en opslag als glycogeen te stimuleren." },
          { term: "Glucagon", def: "Hormoon van de alfacellen; verhoogt de bloedglucose door glycogeen in de lever af te breken tot glucose." },
          { term: "Glycogeen", def: "Opslagvorm van glucose, vooral in lever en spieren." },
          { term: "Bètacellen", def: "Cellen in de eilandjes van Langerhans die insuline maken." },
          { term: "Alfacellen", def: "Cellen in de eilandjes van Langerhans die glucagon maken." },
          { term: "Diabetes type 1", def: "Te weinig insuline doordat de insulineproducerende cellen zijn beschadigd (auto-immuun)." },
          { term: "Diabetes type 2", def: "De doelwitcellen reageren minder goed op insuline (insulineongevoeligheid)." },
          { term: "Antagonistische werking", def: "Twee hormonen (insuline en glucagon) met een tegengesteld effect op de bloedglucose." }
        ],
        quiz: [
          { q: "Welk hormoon verlaagt de bloedglucose?", options: ["Glucagon", "Insuline", "Adrenaline", "Thyroxine"], answer: 1, explain: "Insuline laat cellen glucose opnemen en als glycogeen opslaan, waardoor de bloedglucose daalt." },
          { q: "Wat doet glucagon?", options: ["Slaat glucose op", "Breekt glycogeen af tot glucose", "Verlaagt de bloedglucose", "Maakt insuline"], answer: 1, explain: "Glucagon zet de lever aan glycogeen af te breken tot glucose → bloedglucose stijgt." },
          { q: "Waar worden insuline en glucagon gemaakt?", options: ["In de lever", "In de eilandjes van Langerhans", "In de bijnieren", "In de hypofyse"], answer: 1, explain: "De bèta- en alfacellen in de eilandjes van Langerhans (alvleesklier) maken insuline en glucagon." },
          { q: "Wat kenmerkt diabetes type 1?", options: ["Cellen reageren slecht op insuline", "Te weinig insulineproductie", "Te veel glucagon", "Te veel glycogeen"], answer: 1, explain: "Bij type 1 maakt de alvleesklier (te) weinig insuline door beschadigde bètacellen." },
          { q: "Insuline en glucagon werken op de bloedglucose...", options: ["Versterkend (samen)", "Antagonistisch (tegengesteld)", "Helemaal niet", "Alleen 's nachts"], answer: 1, explain: "Insuline verlaagt en glucagon verhoogt de bloedglucose: een antagonistische regeling." }
        ],
        sequences: [
          { title: "Bloedglucose stijgt na een maaltijd", steps: ["Bloedglucose stijgt", "Bètacellen geven insuline af", "Lever- en spiercellen nemen glucose op", "Glucose wordt opgeslagen als glycogeen", "Bloedglucose daalt naar normaal"] }
        ]
      },
      {
        id: "3",
        title: "Homeostase en terugkoppeling",
        summary: "Homeostase is het handhaven van een constant inwendig milieu (o.a. temperatuur, bloedglucose, pH, osmotische waarde), ondanks veranderingen buiten of binnen het lichaam. Dit gebeurt via regelkringen met meestal negatieve terugkoppeling: als een waarde afwijkt van de streefwaarde, komt een reactie op gang die de afwijking tegenwerkt.\n\nEen regelkring bevat een receptor (meet), een regelcentrum (vergelijkt met de norm, vaak de hypothalamus) en een effector (voert de reactie uit). Voorbeeld thermoregulatie: bij kou vernauwen huidbloedvaten, ga je rillen en staan haartjes overeind; bij warmte verwijden bloedvaten en ga je zweten.\n\nBij positieve terugkoppeling versterkt een reactie zichzelf juist (bv. weeën bij de bevalling), maar dat is minder algemeen.",
        goals: [
          "Je legt uit wat homeostase is en hoe een regelkring werkt.",
          "Je legt het verschil uit tussen negatieve en positieve terugkoppeling."
        ],
        cards: [
          { term: "Homeostase", def: "Het handhaven van een min of meer constant inwendig milieu ondanks veranderingen." },
          { term: "Regelkring", def: "Keten van receptor → regelcentrum → effector die een waarde op peil houdt." },
          { term: "Negatieve terugkoppeling", def: "Terugkoppeling die een afwijking tegenwerkt en de waarde terug naar de norm brengt." },
          { term: "Positieve terugkoppeling", def: "Terugkoppeling die een proces juist versterkt (bv. weeën)." },
          { term: "Effector", def: "Orgaan/cel (spier of klier) die de reactie uitvoert." },
          { term: "Streefwaarde (norm)", def: "De waarde waarnaar het regelcentrum de grootheid probeert terug te brengen." },
          { term: "Thermoregulatie", def: "Het constant houden van de lichaamstemperatuur (o.a. zweten, rillen, bloedvaten)." }
        ],
        quiz: [
          { q: "Wat is homeostase?", options: ["Snel groeien", "Een constant inwendig milieu handhaven", "Hormonen maken", "Cellen delen"], answer: 1, explain: "Homeostase is het handhaven van een min of meer constant inwendig milieu." },
          { q: "Wat doet negatieve terugkoppeling?", options: ["Versterkt de afwijking", "Werkt de afwijking tegen", "Heeft geen effect", "Stopt de regelkring"], answer: 1, explain: "Negatieve terugkoppeling corrigeert een afwijking terug naar de streefwaarde." },
          { q: "Wat doet je lichaam bij kou?", options: ["Bloedvaten in de huid verwijden", "Zweten", "Huidbloedvaten vernauwen en rillen", "Ademhaling stopt"], answer: 2, explain: "Bij kou vernauwen huidbloedvaten (minder warmteverlies) en ga je rillen (warmteproductie)." },
          { q: "Welk onderdeel van een regelkring meet de waarde?", options: ["Effector", "Receptor", "Klier", "Spier"], answer: 1, explain: "De receptor meet de waarde; het regelcentrum vergelijkt met de norm; de effector reageert." },
          { q: "Een voorbeeld van positieve terugkoppeling is...", options: ["Bloedglucoseregeling", "Temperatuurregeling", "Weeën bij de bevalling", "Osmoregulatie"], answer: 2, explain: "Weeën versterken zichzelf: een klassiek voorbeeld van positieve terugkoppeling." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "hm-ex1",
        title: "Bloedglucose na het sporten",
        context: "Tijdens een lange hardlooptraining daalt de glucoseconcentratie in het bloed van een sporter. Kort daarna is de concentratie weer normaal, terwijl de sporter niets heeft gegeten.",
        question: "Leg uit hoe het lichaam de bloedglucose weer op peil brengt. Gebruik in je antwoord een hormoon, het orgaan dat reageert en het begrip glycogeen.",
        points: 3,
        model: [
          "Bij een lage bloedglucose geven de alfacellen (eilandjes van Langerhans) glucagon af (1 p).",
          "Glucagon zet de lever aan om glycogeen af te breken tot glucose (1 p).",
          "De glucose wordt aan het bloed afgegeven, zodat de bloedglucose weer stijgt naar de normale waarde (1 p)."
        ]
      },
      {
        id: "hm-ex2",
        title: "Koorts en negatieve terugkoppeling",
        context: "Iemand met griep krijgt koorts: de streefwaarde voor de lichaamstemperatuur wordt tijdelijk hoger ingesteld. In de opwarmfase heeft de persoon het koud en rilt hij, terwijl zijn temperatuur al boven de 37 °C is.",
        question: "Leg met behulp van een regelkring uit waarom iemand met een oplopende koorts juist ligt te rillen.",
        points: 2,
        model: [
          "Het regelcentrum (hypothalamus) heeft de streefwaarde verhoogd; de gemeten temperatuur ligt nog onder die nieuwe streefwaarde (1 p).",
          "Via negatieve terugkoppeling zet het lichaam warmteproductie/-behoud in gang (rillen, bloedvaten vernauwen) om de temperatuur naar de hogere streefwaarde te brengen (1 p)."
        ]
      }
    ]
  },

  /* ===================== VOORTPLANTING ===================== */
  {
    id: "voortplanting",
    title: "Voortplanting & seksualiteit",
    icon: "👶",
    theme: "t-pink",
    domain: "Voortplanting",
    intro: "Hoe ontstaat nieuw leven? Je leert de bouw van de geslachtsorganen, de vorming van geslachtscellen, de hormonale regeling van de menstruatiecyclus en wat er gebeurt bij bevruchting, zwangerschap en anticonceptie.",
    paragraphs: [
      {
        id: "1",
        title: "Geslachtsorganen en geslachtscellen",
        summary: "De mannelijke geslachtscellen (zaadcellen) worden vanaf de puberteit continu gevormd in de zaadballen (testes): de spermatogenese. Ze rijpen in de bijbal; bij een zaadlozing gaan ze via de zaadleider en mengen ze met vocht van o.a. de prostaat tot sperma.\n\nDe vrouwelijke geslachtscellen (eicellen) rijpen in de eierstokken. Alle onrijpe eicellen zijn al bij de geboorte aanwezig; per cyclus rijpt meestal één eicel in een follikel (oögenese).\n\nGeslachtscellen (gameten) zijn haploïd (n): ze hebben de helft van het aantal chromosomen. Ze ontstaan door meiose (reductiedeling). Bij de bevruchting versmelten een zaadcel en een eicel tot een diploïde (2n) zygote, met chromosomen van beide ouders.",
        goals: [
          "Je beschrijft de vorming van zaadcellen en eicellen.",
          "Je legt uit waarom geslachtscellen haploïd zijn."
        ],
        cards: [
          { term: "Zaadbal (testis)", def: "Mannelijke geslachtsklier waarin zaadcellen worden gevormd (spermatogenese)." },
          { term: "Eierstok (ovarium)", def: "Vrouwelijke geslachtsklier waarin eicellen rijpen (oögenese)." },
          { term: "Follikel", def: "Blaasje in de eierstok waarin een eicel rijpt; maakt oestrogeen." },
          { term: "Gameet", def: "Geslachtscel (zaadcel of eicel); is haploïd (n)." },
          { term: "Meiose (reductiedeling)", def: "Celdeling die het aantal chromosomen halveert; vormt haploïde geslachtscellen." },
          { term: "Haploïd (n) / diploïd (2n)", def: "Haploïd = enkelvoudig chromosoomstel (gameet); diploïd = dubbel stel (lichaamscel/zygote)." },
          { term: "Zygote", def: "Diploïde cel die ontstaat bij de versmelting van een zaadcel en een eicel." },
          { term: "Prostaat / sperma", def: "De prostaat levert vocht dat met zaadcellen sperma vormt." }
        ],
        quiz: [
          { q: "Waar worden zaadcellen gevormd?", options: ["In de prostaat", "In de zaadballen", "In de bijbal", "In de zaadleider"], answer: 1, explain: "De spermatogenese vindt plaats in de zaadballen (testes)." },
          { q: "Hoeveel chromosoomstellen heeft een gameet?", options: ["Twee (2n)", "Eén (n)", "Vier", "Geen"], answer: 1, explain: "Geslachtscellen zijn haploïd (n): één chromosoomstel." },
          { q: "Welke celdeling vormt geslachtscellen?", options: ["Mitose", "Meiose", "Klieving", "Deling van bacteriën"], answer: 1, explain: "Meiose (reductiedeling) halveert het aantal chromosomen." },
          { q: "Wat ontstaat bij de bevruchting?", options: ["Een follikel", "Een haploïde cel", "Een diploïde zygote", "Een gameet"], answer: 2, explain: "Zaadcel + eicel versmelten tot een diploïde (2n) zygote." },
          { q: "Wanneer zijn de onrijpe eicellen aangelegd?", options: ["Elke maand nieuw", "Al bij de geboorte", "Vanaf de puberteit", "Na de eerste bevruchting"], answer: 1, explain: "Bij de geboorte zijn alle onrijpe eicellen al aanwezig; per cyclus rijpt er meestal één." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "De menstruatiecyclus",
        summary: "De cyclus (gemiddeld 28 dagen) wordt geregeld door hormonen uit de hypofyse en de eierstokken. FSH (uit de hypofyse) laat een follikel rijpen. De follikel maakt oestrogeen, dat het baarmoederslijmvlies laat groeien. Een sterke stijging (piek) van LH veroorzaakt rond dag 14 de ovulatie (eisprong).\n\nDe achtergebleven follikel wordt het gele lichaam en maakt progesteron (en oestrogeen); die houden het slijmvlies dik en goed doorbloed. Wordt de eicel niet bevrucht, dan verdwijnt het gele lichaam en dalen progesteron en oestrogeen. Het slijmvlies wordt afgestoten: de menstruatie. Door de lage hormoonwaarden komt weer FSH vrij en begint een nieuwe cyclus (negatieve terugkoppeling).",
        goals: [
          "Je beschrijft de rol van FSH, LH, oestrogeen en progesteron in de cyclus.",
          "Je legt uit wat er gebeurt als de eicel niet bevrucht wordt."
        ],
        cards: [
          { term: "FSH", def: "Hormoon uit de hypofyse dat een follikel laat rijpen." },
          { term: "LH", def: "Hormoon uit de hypofyse; een LH-piek veroorzaakt de ovulatie." },
          { term: "Oestrogeen", def: "Hormoon uit de follikel dat het baarmoederslijmvlies laat groeien." },
          { term: "Progesteron", def: "Hormoon uit het gele lichaam dat het baarmoederslijmvlies op peil houdt." },
          { term: "Ovulatie (eisprong)", def: "Het vrijkomen van een rijpe eicel uit de follikel, rond dag 14." },
          { term: "Gele lichaam", def: "De achtergebleven follikel na de ovulatie; maakt progesteron." },
          { term: "Baarmoederslijmvlies", def: "Laag in de baarmoeder die groeit voor innesteling en bij menstruatie wordt afgestoten." },
          { term: "Menstruatie", def: "Afstoten van het baarmoederslijmvlies als er geen bevruchting is." }
        ],
        quiz: [
          { q: "Welk hormoon veroorzaakt de ovulatie?", options: ["Een FSH-daling", "Een LH-piek", "Progesteron", "Insuline"], answer: 1, explain: "Een sterke LH-piek zorgt rond dag 14 voor de eisprong." },
          { q: "Wat doet oestrogeen in de cyclus?", options: ["Slijmvlies laten groeien", "Ovulatie stoppen", "Menstruatie starten", "FSH maken"], answer: 0, explain: "Oestrogeen (uit de follikel) laat het baarmoederslijmvlies groeien." },
          { q: "Wat maakt het gele lichaam?", options: ["FSH", "LH", "Progesteron", "Insuline"], answer: 2, explain: "Het gele lichaam maakt progesteron (en oestrogeen) en houdt het slijmvlies op peil." },
          { q: "Wat gebeurt er als de eicel niet bevrucht wordt?", options: ["Progesteron stijgt", "Het gele lichaam blijft actief", "Het slijmvlies wordt afgestoten (menstruatie)", "Er komt geen FSH meer"], answer: 2, explain: "Progesteron daalt, het slijmvlies wordt afgestoten (menstruatie) en een nieuwe cyclus begint." },
          { q: "Welk hormoon laat een follikel rijpen?", options: ["LH", "FSH", "Progesteron", "hCG"], answer: 1, explain: "FSH uit de hypofyse laat een follikel rijpen." }
        ],
        sequences: [
          { title: "Volgorde in de menstruatiecyclus", steps: ["FSH laat een follikel rijpen", "Follikel maakt oestrogeen, slijmvlies groeit", "LH-piek → ovulatie", "Gele lichaam maakt progesteron", "Geen bevruchting: progesteron daalt", "Menstruatie: slijmvlies wordt afgestoten"] }
        ]
      },
      {
        id: "3",
        title: "Bevruchting, zwangerschap en anticonceptie",
        summary: "De bevruchting vindt plaats in de eileider. De zygote deelt zich onderweg (klieving) en nestelt zich als een bolletje cellen in in het baarmoederslijmvlies (innesteling). Daarna vormt zich de placenta, waar stoffen tussen het bloed van moeder en embryo/foetus worden uitgewisseld (O2 en voeding naartoe, CO2 en afvalstoffen terug), zonder dat de bloedsystemen mengen. De placenta maakt hCG, dat het gele lichaam in stand houdt; zwangerschapstesten meten hCG in de urine.\n\nAnticonceptie voorkomt zwangerschap. De anticonceptiepil bevat stoffen die lijken op oestrogeen/progesteron; via negatieve terugkoppeling remmen ze FSH en LH, zodat er geen ovulatie plaatsvindt. Een condoom werkt als barrière en beschermt bovendien tegen soa's.",
        goals: [
          "Je beschrijft bevruchting, innesteling en de functie van de placenta.",
          "Je legt uit hoe de anticonceptiepil en het condoom werken."
        ],
        cards: [
          { term: "Bevruchting", def: "Versmelting van zaadcel en eicel; vindt plaats in de eileider." },
          { term: "Innesteling", def: "Het vastgroeien van het jonge embryo in het baarmoederslijmvlies." },
          { term: "Placenta (moederkoek)", def: "Orgaan waar stoffen tussen bloed van moeder en foetus worden uitgewisseld, zonder mengen." },
          { term: "Navelstreng", def: "Verbinding met bloedvaten tussen foetus en placenta." },
          { term: "hCG", def: "Hormoon van de placenta dat het gele lichaam in stand houdt; wordt gemeten in zwangerschapstesten." },
          { term: "Foetus", def: "Ongeboren kind vanaf ongeveer de negende week." },
          { term: "Anticonceptiepil", def: "Bevat oestrogeen/progesteron-achtige stoffen die via terugkoppeling de ovulatie remmen." },
          { term: "Condoom", def: "Barrièremiddel dat bevruchting voorkomt en ook tegen soa's beschermt." }
        ],
        quiz: [
          { q: "Waar vindt de bevruchting plaats?", options: ["In de baarmoeder", "In de eileider", "In de eierstok", "In de vagina"], answer: 1, explain: "De bevruchting vindt plaats in de eileider; daarna reist het embryo naar de baarmoeder." },
          { q: "Wat is de functie van de placenta?", options: ["Bloed van moeder en kind mengen", "Uitwisseling van stoffen zonder bloedmenging", "Hormonen afbreken", "Zaadcellen maken"], answer: 1, explain: "In de placenta worden stoffen uitgewisseld tussen het bloed van moeder en foetus, zonder dat het bloed mengt." },
          { q: "Welk hormoon meet een zwangerschapstest?", options: ["FSH", "hCG", "Insuline", "LH"], answer: 1, explain: "De placenta maakt hCG; een zwangerschapstest meet dit hormoon in de urine." },
          { q: "Hoe voorkomt de anticonceptiepil een zwangerschap?", options: ["Doodt zaadcellen", "Remt de ovulatie via terugkoppeling", "Breekt de placenta af", "Verwijdt de eileider"], answer: 1, explain: "De pil remt via negatieve terugkoppeling FSH/LH, zodat er geen eisprong plaatsvindt." },
          { q: "Welk anticonceptiemiddel beschermt ook tegen soa's?", options: ["De pil", "Het spiraaltje", "Het condoom", "De prikpil"], answer: 2, explain: "Een condoom is een barrière die naast zwangerschap ook soa's helpt voorkomen." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "vp-ex1",
        title: "Waarom stopt de menstruatie bij zwangerschap?",
        context: "Als een vrouw zwanger is, blijft de menstruatie uit. De placenta die zich vormt, maakt het hormoon hCG.",
        question: "Leg uit hoe hCG ervoor zorgt dat er tijdens de zwangerschap geen menstruatie optreedt. Gebruik in je antwoord het gele lichaam en progesteron.",
        points: 3,
        model: [
          "hCG houdt het gele lichaam in stand (het verdwijnt niet zoals normaal na de cyclus) (1 p).",
          "Het gele lichaam blijft daardoor progesteron maken (1 p).",
          "Door het hoge progesteron blijft het baarmoederslijmvlies intact en wordt het niet afgestoten, dus geen menstruatie (1 p)."
        ]
      },
      {
        id: "vp-ex2",
        title: "Werking van de pil",
        context: "De anticonceptiepil bevat stoffen die lijken op de vrouwelijke geslachtshormonen. Bij correct gebruik vindt er geen eisprong plaats.",
        question: "Leg uit hoe de hormonen in de pil via terugkoppeling voorkomen dat er een eisprong plaatsvindt.",
        points: 2,
        model: [
          "De hormoonachtige stoffen in de pil zorgen voor een constant (hoog) hormoonniveau dat via negatieve terugkoppeling de hypofyse remt (1 p).",
          "Daardoor komt er geen FSH-/LH-piek, zodat er geen follikel rijpt en geen ovulatie plaatsvindt (1 p)."
        ]
      }
    ]
  },

  /* ===================== ERFELIJKHEID ===================== */
  {
    id: "erfelijkheid",
    title: "Erfelijkheid",
    icon: "👪",
    theme: "t-indigo",
    domain: "Erfelijkheid",
    intro: "Waarom lijk je op je ouders? Je leert werken met genen en allelen, kruisingen voorspellen met kruisingsschema's, en overerving analyseren bij geslachtsgebonden eigenschappen en in stambomen.",
    paragraphs: [
      {
        id: "1",
        title: "Genen, allelen en fenotype",
        summary: "Erfelijke eigenschappen liggen vast in genen op de chromosomen. Van elk gen heb je twee allelen (varianten): één van je moeder, één van je vader. Het genotype is de combinatie van allelen; het fenotype is de waarneembare eigenschap (mede door het milieu).\n\nEen dominant allel (hoofdletter) komt altijd tot uiting; een recessief allel (kleine letter) alleen in dubbele aanleg. Homozygoot = twee dezelfde allelen (AA of aa); heterozygoot = twee verschillende (Aa). Bij intermediaire overerving ontstaat een mengvorm (bv. rood × wit → roze); bij codominantie komen beide allelen naast elkaar tot uiting (bv. bloedgroep AB).",
        goals: [
          "Je gebruikt de begrippen gen, allel, genotype en fenotype correct.",
          "Je legt dominant, recessief, homo- en heterozygoot uit."
        ],
        cards: [
          { term: "Gen", def: "Stukje DNA op een chromosoom dat de code voor een erfelijke eigenschap bevat." },
          { term: "Allel", def: "Een variant van een gen; je hebt er twee per gen (één per ouder)." },
          { term: "Genotype", def: "De combinatie van allelen die een individu heeft." },
          { term: "Fenotype", def: "De waarneembare eigenschap, bepaald door genotype én milieu." },
          { term: "Dominant allel", def: "Allel dat altijd tot uiting komt; genoteerd met een hoofdletter." },
          { term: "Recessief allel", def: "Allel dat alleen in dubbele aanleg tot uiting komt; kleine letter." },
          { term: "Homozygoot", def: "Twee dezelfde allelen voor een gen (AA of aa)." },
          { term: "Heterozygoot", def: "Twee verschillende allelen voor een gen (Aa)." },
          { term: "Codominantie", def: "Beide allelen komen naast elkaar tot uiting (bv. bloedgroep AB)." },
          { term: "Intermediair", def: "De heterozygoot vertoont een tussenvorm (bv. roze uit rood en wit)." }
        ],
        quiz: [
          { q: "Wat is het genotype?", options: ["De waarneembare eigenschap", "De combinatie van allelen", "Een stukje eiwit", "Een chromosoom"], answer: 1, explain: "Het genotype is de combinatie van allelen; het fenotype is de waarneembare eigenschap." },
          { q: "Een recessief allel komt tot uiting...", options: ["Altijd", "Alleen in dubbele aanleg (aa)", "Nooit", "Alleen bij mannen"], answer: 1, explain: "Een recessief allel komt alleen tot uiting als beide allelen recessief zijn (aa)." },
          { q: "Wat betekent heterozygoot?", options: ["Twee dezelfde allelen", "Twee verschillende allelen", "Geen allelen", "Drie allelen"], answer: 1, explain: "Heterozygoot = twee verschillende allelen (bv. Aa)." },
          { q: "Bloedgroep AB is een voorbeeld van...", options: ["Dominantie", "Codominantie", "Recessiviteit", "Intermediaire overerving"], answer: 1, explain: "Bij bloedgroep AB komen allel A en B naast elkaar tot uiting: codominantie." },
          { q: "Het fenotype wordt bepaald door...", options: ["Alleen het genotype", "Genotype én milieu", "Alleen het milieu", "Alleen dominante allelen"], answer: 1, explain: "Het fenotype hangt af van het genotype én invloeden van het milieu." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Kruisingen voorspellen",
        summary: "Met een kruisingsschema (kruistabel) voorspel je de nakomelingen. Bij een monohybride kruising kijk je naar één eigenschap. Kruis je twee heterozygoten (Aa × Aa), dan geeft de kruistabel genotypen 1 AA : 2 Aa : 1 aa, en fenotypisch 3 dominant : 1 recessief.\n\nBij een terugkruising (testkruising) kruis je een individu met het dominante fenotype met een homozygoot recessief individu (aa) om te achterhalen of het homo- of heterozygoot is. Bij een dihybride kruising (twee eigenschappen, AaBb × AaBb) ontstaat de verhouding 9 : 3 : 3 : 1, mits de genen op verschillende chromosomen liggen (vrije combinatie).",
        goals: [
          "Je maakt en interpreteert een kruisingsschema.",
          "Je legt uit wat een terugkruising is en waarvoor je die gebruikt."
        ],
        cards: [
          { term: "Kruisingsschema", def: "Schema/tabel waarmee je de genotypen van nakomelingen voorspelt." },
          { term: "Monohybride kruising", def: "Kruising waarbij je naar één eigenschap kijkt." },
          { term: "Dihybride kruising", def: "Kruising waarbij je naar twee eigenschappen tegelijk kijkt." },
          { term: "Verhouding 3:1", def: "Fenotypische verhouding bij Aa × Aa (3 dominant : 1 recessief)." },
          { term: "Verhouding 9:3:3:1", def: "Fenotypische verhouding bij een dihybride kruising AaBb × AaBb." },
          { term: "Terugkruising (testkruising)", def: "Kruising met een homozygoot recessief individu om een onbekend genotype te bepalen." },
          { term: "P, F1, F2", def: "Ouders (P), eerste nakomelingen (F1) en hun nakomelingen (F2)." }
        ],
        quiz: [
          { q: "Welke fenotypische verhouding geeft Aa × Aa?", options: ["1:1", "3:1", "9:3:3:1", "2:1"], answer: 1, explain: "Aa × Aa geeft fenotypisch 3 dominant : 1 recessief." },
          { q: "Waarvoor gebruik je een terugkruising?", options: ["Om het milieu te testen", "Om te bepalen of een individu homo- of heterozygoot is", "Om mutaties te maken", "Om chromosomen te tellen"], answer: 1, explain: "Kruisen met aa laat zien of het dominante individu AA of Aa is." },
          { q: "Welke verhouding hoort bij een dihybride kruising AaBb × AaBb?", options: ["3:1", "1:1", "9:3:3:1", "1:2:1"], answer: 2, explain: "Twee eigenschappen die vrij combineren geven 9:3:3:1." },
          { q: "Wat betekent F1?", options: ["De ouders", "De eerste generatie nakomelingen", "De tweede generatie", "Een fenotype"], answer: 1, explain: "F1 is de eerste generatie nakomelingen van de ouders (P)." },
          { q: "Genotypische verhouding van Aa × Aa is...", options: ["1 AA : 2 Aa : 1 aa", "3 AA : 1 aa", "alle Aa", "1 AA : 1 aa"], answer: 0, explain: "Genotypisch: 1 AA : 2 Aa : 1 aa (fenotypisch 3:1)." }
        ],
        sequences: []
      },
      {
        id: "3",
        title: "Geslachtsgebonden overerving en stambomen",
        summary: "Het geslacht wordt bepaald door de geslachtschromosomen: XX (vrouw) en XY (man). Sommige genen liggen op het X-chromosoom: geslachtsgebonden (X-gebonden) overerving. Omdat mannen maar één X hebben, komt een recessief X-gebonden allel bij hen sneller tot uiting (bv. rood-groenkleurenblindheid, hemofilie). Vrouwen zijn vaker draagster (heterozygoot) zonder de aandoening.\n\nIn een stamboom analyseer je hoe een eigenschap overerft. Aanwijzingen: verschijnt de aandoening bij kinderen van niet-aangedane ouders, dan is het allel recessief; treft het vooral mannen en 'slaat het een generatie over' via draagsters, dan wijst dat op X-gebonden recessieve overerving.",
        goals: [
          "Je legt geslachtsgebonden overerving uit.",
          "Je leidt uit een stamboom af of een eigenschap dominant/recessief en/of X-gebonden is."
        ],
        cards: [
          { term: "Geslachtschromosomen", def: "X en Y; XX = vrouw, XY = man." },
          { term: "Autosoom", def: "Een 'gewoon' chromosoom dat niet het geslacht bepaalt." },
          { term: "Geslachtsgebonden (X-gebonden)", def: "Overerving van een gen dat op het X-chromosoom ligt." },
          { term: "Draagster", def: "Vrouw die heterozygoot is voor een recessief X-gebonden allel (XᴬXᵃ) zonder de aandoening." },
          { term: "Kleurenblindheid / hemofilie", def: "Voorbeelden van X-gebonden recessieve aandoeningen, vaker bij mannen." },
          { term: "Stamboom", def: "Schema van familierelaties waarmee je overerving analyseert." },
          { term: "Recessieve aandoening", def: "Aandoening die tot uiting komt in dubbele aanleg; kan uit niet-aangedane ouders ontstaan." }
        ],
        quiz: [
          { q: "Welke geslachtschromosomen heeft een man?", options: ["XX", "XY", "YY", "X"], answer: 1, explain: "Een man heeft XY, een vrouw XX." },
          { q: "Waarom komt X-gebonden recessieve kleurenblindheid vaker bij mannen voor?", options: ["Mannen hebben twee X'en", "Mannen hebben maar één X", "Vrouwen hebben geen genen ervoor", "Het ligt op het Y-chromosoom"], answer: 1, explain: "Mannen hebben één X; één recessief allel komt dan meteen tot uiting." },
          { q: "Wat is een draagster?", options: ["Een aangedane vrouw", "Een heterozygote vrouw zonder de aandoening", "Een man met de aandoening", "Iemand zonder het gen"], answer: 1, explain: "Een draagster is heterozygoot (XᴬXᵃ) en heeft de aandoening zelf niet." },
          { q: "Aangedane kinderen uit twee niet-aangedane ouders wijzen op...", options: ["Een dominant allel", "Een recessief allel", "Codominantie", "Een Y-gebonden gen"], answer: 1, explain: "Als niet-aangedane ouders een aangedaan kind krijgen, is het allel recessief (beide ouders Aa)." },
          { q: "Wat is een autosoom?", options: ["Een geslachtschromosoom", "Een gewoon (niet-geslachts)chromosoom", "Een allel", "Een gen op het X-chromosoom"], answer: 1, explain: "Autosomen zijn de chromosomen die niet het geslacht bepalen." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "erf-ex1",
        title: "Kruising met een recessieve aandoening",
        context: "Een erfelijke aandoening wordt veroorzaakt door een recessief allel (a) op een autosoom. Twee gezonde ouders krijgen een kind met de aandoening.",
        question: "Bepaal de genotypen van de ouders en bereken de kans (in %) dat een volgend kind de aandoening heeft. Licht je antwoord toe met een kruisingsschema of redenering.",
        points: 3,
        model: [
          "Beide ouders zijn gezond maar krijgen een aangedaan kind (aa), dus beide ouders zijn heterozygoot: Aa × Aa (1 p).",
          "Kruisingsschema Aa × Aa geeft 1 AA : 2 Aa : 1 aa (1 p).",
          "De kans op een aangedaan kind (aa) is 1 op 4 = 25% (1 p)."
        ]
      },
      {
        id: "erf-ex2",
        title: "Kleurenblindheid in een gezin",
        context: "Rood-groenkleurenblindheid is X-gebonden recessief. Een vrouw die draagster is (XᴬXᵃ) krijgt kinderen met een man die niet kleurenblind is (XᴬY).",
        question: "Leg uit welke kinderen (jongens/meisjes) kleurenblind kunnen zijn en welke draagster kunnen worden. Gebruik de genotypen.",
        points: 3,
        model: [
          "Kruising XᴬXᵃ × XᴬY geeft dochters XᴬXᴬ of XᴬXᵃ en zonen XᴬY of XᵃY (1 p).",
          "Zonen met XᵃY zijn kleurenblind (kans 1 op 2 van de jongens); dochters zijn nooit kleurenblind hier, maar de helft is draagster (XᴬXᵃ) (1 p).",
          "Conclusie: alleen jongens kunnen kleurenblind zijn; meisjes kunnen wél draagster worden (1 p)."
        ]
      }
    ]
  },

  /* ===================== DNA & EIWITSYNTHESE ===================== */
  {
    id: "dna",
    title: "DNA & eiwitsynthese",
    icon: "🧬",
    theme: "t-teal",
    domain: "Zelforganisatie",
    intro: "Hoe staat de informatie voor een organisme opgeslagen, en hoe wordt die 'gelezen'? Je leert de bouw en replicatie van DNA, de eiwitsynthese (transcriptie en translatie) en wat mutaties en genregulatie doen.",
    paragraphs: [
      {
        id: "1",
        title: "Bouw en replicatie van DNA",
        summary: "DNA is een dubbele helix van twee nucleotideketens. Elk nucleotide bestaat uit een suiker (desoxyribose), een fosfaatgroep en een stikstofbase: A, T, C of G. De basen vormen paren volgens complementariteit: A–T en C–G. De volgorde van de basen (basenvolgorde) is de erfelijke code.\n\nBij de celdeling moet het DNA worden verdubbeld: replicatie. De twee ketens gaan uit elkaar; elke keten dient als mal (sjabloon) waarlangs een nieuwe complementaire keten wordt gebouwd. Zo ontstaan twee identieke DNA-moleculen, elk met één oude en één nieuwe keten (semiconservatief).",
        goals: [
          "Je beschrijft de bouw van DNA en de basenparing.",
          "Je legt uit hoe DNA-replicatie verloopt."
        ],
        cards: [
          { term: "DNA", def: "Molecuul met de erfelijke informatie; een dubbele helix van twee nucleotideketens." },
          { term: "Nucleotide", def: "Bouwsteen van DNA: een suiker, een fosfaatgroep en een stikstofbase." },
          { term: "Stikstofbasen (A, T, C, G)", def: "Adenine, thymine, cytosine en guanine; hun volgorde vormt de code." },
          { term: "Complementariteit", def: "Basen paren vast: A met T en C met G." },
          { term: "Dubbele helix", def: "De spiraalvorm van de twee tegenover elkaar liggende DNA-ketens." },
          { term: "Replicatie", def: "Het verdubbelen van DNA vóór de celdeling." },
          { term: "Semiconservatief", def: "Elk nieuw DNA-molecuul bevat één oude en één nieuwe keten." },
          { term: "Chromosoom", def: "Sterk opgevouwen DNA met eiwitten; drager van vele genen." }
        ],
        quiz: [
          { q: "Welke basen vormen een paar?", options: ["A–C en T–G", "A–T en C–G", "A–G en C–T", "A–A en C–C"], answer: 1, explain: "In DNA paren A met T en C met G (complementariteit)." },
          { q: "Waaruit bestaat een nucleotide?", options: ["Alleen een base", "Suiker, fosfaat en een base", "Twee basen", "Een eiwit"], answer: 1, explain: "Een nucleotide bestaat uit een suiker, een fosfaatgroep en een stikstofbase." },
          { q: "Wat gebeurt er bij replicatie?", options: ["Eiwitten maken", "DNA verdubbelen", "Basen afbreken", "Cellen versmelten"], answer: 1, explain: "Replicatie is het verdubbelen van het DNA vóór de celdeling." },
          { q: "Wat betekent semiconservatief?", options: ["Alle ketens zijn nieuw", "Elk molecuul heeft één oude en één nieuwe keten", "Er ontstaat maar één molecuul", "De basen veranderen"], answer: 1, explain: "Elk nieuw DNA bevat één oorspronkelijke en één nieuwe keten." },
          { q: "Als een keten de volgorde A-C-G heeft, is de complementaire keten...", options: ["T-G-C", "A-C-G", "U-G-C", "T-C-A"], answer: 0, explain: "A→T, C→G, G→C, dus de complementaire keten is T-G-C." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Eiwitsynthese: transcriptie en translatie",
        summary: "Een gen bevat de code voor een eiwit. De eiwitsynthese verloopt in twee stappen. Bij de transcriptie (in de kern) wordt van een gen een mRNA gemaakt, complementair aan de DNA-keten (met U in plaats van T). Het mRNA verlaat de kern.\n\nBij de translatie (aan de ribosomen) wordt het mRNA gelezen per codon (drie basen). Elk codon codeert voor één aminozuur; tRNA-moleculen met een anticodon brengen de bijpassende aminozuren aan. De aminozuren worden aan elkaar geregen tot een eiwit. De basenvolgorde bepaalt zo de aminozuurvolgorde en daarmee de bouw en functie van het eiwit.",
        goals: [
          "Je beschrijft transcriptie en translatie.",
          "Je legt uit hoe codons de aminozuurvolgorde bepalen."
        ],
        cards: [
          { term: "Gen", def: "Stukje DNA met de code voor (meestal) één eiwit." },
          { term: "Transcriptie", def: "Het overschrijven van een gen naar mRNA in de celkern." },
          { term: "mRNA", def: "Boodschapper-RNA dat de code van het DNA naar de ribosomen brengt (met base U i.p.v. T)." },
          { term: "Translatie", def: "Het vertalen van mRNA naar een aminozuurvolgorde aan het ribosoom." },
          { term: "Codon", def: "Drietal basen op het mRNA dat codeert voor één aminozuur." },
          { term: "tRNA / anticodon", def: "Transport-RNA met een anticodon dat het juiste aminozuur aanvoert." },
          { term: "Ribosoom", def: "Celorgaan waar de translatie (eiwitsynthese) plaatsvindt." },
          { term: "Aminozuur", def: "Bouwsteen van een eiwit; de volgorde bepaalt bouw en functie." }
        ],
        quiz: [
          { q: "Waar vindt de transcriptie plaats?", options: ["In het ribosoom", "In de celkern", "In het mitochondrion", "In het bloed"], answer: 1, explain: "Transcriptie (DNA → mRNA) vindt plaats in de celkern." },
          { q: "Wat is een codon?", options: ["Eén base", "Drie basen die één aminozuur coderen", "Een eiwit", "Een ribosoom"], answer: 1, explain: "Een codon is een drietal mRNA-basen dat codeert voor één aminozuur." },
          { q: "Welke base staat in RNA in plaats van thymine?", options: ["Guanine", "Uracil", "Cytosine", "Adenine"], answer: 1, explain: "In RNA staat uracil (U) op de plaats van thymine (T)." },
          { q: "Wat doet tRNA?", options: ["mRNA maken", "Het juiste aminozuur aanvoeren", "DNA kopiëren", "Basen afbreken"], answer: 1, explain: "tRNA voert met zijn anticodon het passende aminozuur aan tijdens de translatie." },
          { q: "Waar gebeurt de translatie?", options: ["Aan het ribosoom", "In de kern", "In de celwand", "In het bloedplasma"], answer: 0, explain: "De translatie (mRNA → eiwit) vindt plaats aan de ribosomen." }
        ],
        sequences: [
          { title: "Van gen naar eiwit", steps: ["Gen in het DNA (kern)", "Transcriptie: mRNA wordt gemaakt", "mRNA verlaat de kern", "mRNA bindt aan een ribosoom", "tRNA brengt aminozuren aan (per codon)", "Aminozuren vormen een eiwit"] }
        ]
      },
      {
        id: "3",
        title: "Mutaties en genregulatie",
        summary: "Een mutatie is een verandering in het DNA. Een genmutatie betreft één of enkele basen (bv. een verkeerd basenpaar); een chromosoommutatie betreft grotere stukken of het aantal chromosomen. Mutaties in lichaamscellen (somatisch) worden niet doorgegeven; mutaties in geslachtscellen wél. Veel mutaties hebben geen effect, sommige zijn schadelijk (bv. kanker) en zeldzaam zijn ze gunstig (grondstof voor evolutie). Stoffen of straling die mutaties veroorzaken heten mutagenen.\n\nAlle cellen van een organisme hebben hetzelfde DNA, maar ze zijn verschillend door genregulatie: in elke cel staan andere genen 'aan' of 'uit'. Zo ontstaan gespecialiseerde cellen (differentiatie). Regeleiwitten kunnen genen aan- of uitzetten, afhankelijk van signalen.",
        goals: [
          "Je legt uit wat mutaties zijn en wat hun gevolgen kunnen zijn.",
          "Je legt uit hoe genregulatie leidt tot verschillende celtypen."
        ],
        cards: [
          { term: "Mutatie", def: "Een verandering in het DNA (basenvolgorde of chromosomen)." },
          { term: "Genmutatie", def: "Verandering in één of enkele basen van een gen." },
          { term: "Chromosoommutatie", def: "Verandering in stukken of het aantal chromosomen." },
          { term: "Mutageen", def: "Stof of straling die de kans op mutaties vergroot (bv. uv, teer)." },
          { term: "Somatische vs kiembaanmutatie", def: "In lichaamscellen (niet erfelijk) versus in geslachtscellen (wel erfelijk)." },
          { term: "Genregulatie", def: "Het aan- en uitzetten van genen, zodat cellen verschillend worden." },
          { term: "Differentiatie", def: "Het gespecialiseerd raken van cellen door genregulatie." }
        ],
        quiz: [
          { q: "Wat is een mutatie?", options: ["Een nieuw eiwit", "Een verandering in het DNA", "Een celdeling", "Een hormoon"], answer: 1, explain: "Een mutatie is een verandering in het DNA." },
          { q: "Welke mutatie is erfelijk?", options: ["In een huidcel", "In een geslachtscel", "In een spiercel", "In een rode bloedcel"], answer: 1, explain: "Alleen mutaties in geslachtscellen (kiembaan) worden doorgegeven aan nakomelingen." },
          { q: "Waarom verschillen cellen met hetzelfde DNA toch?", options: ["Ander DNA", "Genregulatie: andere genen aan/uit", "Meer chromosomen", "Ander aantal ribosomen alleen"], answer: 1, explain: "Door genregulatie staan in verschillende cellen andere genen aan of uit." },
          { q: "Wat is een mutageen?", options: ["Een gen", "Een stof/straling die mutaties veroorzaakt", "Een eiwit", "Een enzym dat DNA maakt"], answer: 1, explain: "Mutagenen (bv. uv-straling) vergroten de kans op mutaties." },
          { q: "Mutaties zijn voor de evolutie belangrijk omdat ze...", options: ["Altijd schadelijk zijn", "Voor variatie zorgen", "Cellen laten delen", "Genen uitzetten"], answer: 1, explain: "Mutaties leveren nieuwe varianten (variatie), de grondstof voor natuurlijke selectie." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "dna-ex1",
        title: "Van mutatie naar eiwit",
        context: "In een gen verandert door een mutatie één base. Het eiwit dat met dit gen wordt gemaakt, werkt daardoor niet meer goed.",
        question: "Leg uit hoe de verandering van één base in het DNA ertoe kan leiden dat het eiwit niet goed werkt. Gebruik in je antwoord de begrippen codon en aminozuur.",
        points: 3,
        model: [
          "Door de mutatie verandert een base in het DNA en daardoor (na transcriptie) een codon in het mRNA (1 p).",
          "Een ander codon kan voor een ander aminozuur coderen, waardoor de aminozuurvolgorde van het eiwit verandert (1 p).",
          "Een andere aminozuurvolgorde geeft een andere vorm/bouw van het eiwit, zodat het zijn functie niet goed meer kan uitvoeren (1 p)."
        ]
      },
      {
        id: "dna-ex2",
        title: "Complementaire streng en mRNA",
        context: "Een stukje van de af te lezen DNA-keten (matrijs) heeft de basenvolgorde: T–A–C–G–G–A.",
        question: "Geef de basenvolgorde van het mRNA dat bij transcriptie van deze DNA-keten ontstaat, en leg uit welke basenparingsregel je gebruikt.",
        points: 2,
        model: [
          "Bij transcriptie paren de RNA-basen complementair aan de DNA-keten, met U in plaats van T: A–U–G–C–C–U (1 p).",
          "Toegepaste regel: A↔U (RNA), T↔A, C↔G, G↔C (1 p)."
        ]
      }
    ]
  },

  /* ===================== EVOLUTIE ===================== */
  {
    id: "evolutie",
    title: "Evolutie",
    icon: "🦕",
    theme: "t-amber",
    domain: "Evolutie",
    intro: "Hoe zijn de miljoenen soorten op aarde ontstaan? Je leert hoe variatie en natuurlijke selectie leiden tot aanpassing, hoe nieuwe soorten ontstaan en welk bewijs er is voor evolutie.",
    paragraphs: [
      {
        id: "1",
        title: "Variatie en natuurlijke selectie",
        summary: "Binnen een populatie bestaat er genetische variatie: individuen verschillen in erfelijke eigenschappen. Deze variatie ontstaat door mutaties en (bij seksuele voortplanting) door recombinatie van genen. \n\nEr worden meer nakomelingen geboren dan er kunnen overleven; er is een 'strijd om het bestaan'. Individuen met eigenschappen die beter passen bij het milieu (beter aangepast) hebben een grotere overlevings- en voortplantingskans: natuurlijke selectie. Zij geven hun gunstige allelen vaker door, zodat die allelen in de volgende generaties in frequentie toenemen. Zo verandert een populatie in de loop van generaties: evolutie. Selectie werkt op het fenotype; erfelijk is alleen wat in het DNA ligt.",
        goals: [
          "Je legt uit hoe variatie ontstaat.",
          "Je legt uit hoe natuurlijke selectie leidt tot aanpassing en evolutie."
        ],
        cards: [
          { term: "Genetische variatie", def: "Erfelijke verschillen tussen individuen in een populatie." },
          { term: "Mutatie en recombinatie", def: "Bronnen van variatie: nieuwe allelen (mutatie) en nieuwe combinaties (recombinatie)." },
          { term: "Natuurlijke selectie", def: "Best aangepaste individuen overleven en planten zich vaker voort." },
          { term: "Aanpassing (adaptatie)", def: "Erfelijke eigenschap die de overlevings-/voortplantingskans vergroot." },
          { term: "Fitness", def: "Mate waarin een individu overleeft en zich succesvol voortplant." },
          { term: "Selectiedruk", def: "Milieufactor die bepaalt welke eigenschappen voordeel geven." },
          { term: "Allelfrequentie", def: "Hoe vaak een allel in een populatie voorkomt; verandert door selectie." }
        ],
        quiz: [
          { q: "Waardoor ontstaat genetische variatie?", options: ["Alleen door het milieu", "Door mutaties en recombinatie", "Door natuurlijke selectie", "Door gewenning"], answer: 1, explain: "Variatie ontstaat door mutaties en (bij seksuele voortplanting) recombinatie." },
          { q: "Wat houdt natuurlijke selectie in?", options: ["Alle individuen overleven", "Best aangepaste individuen planten zich vaker voort", "Dieren kiezen hun eigenschappen", "Het milieu verandert het DNA direct"], answer: 1, explain: "Beter aangepaste individuen hebben een grotere overlevings- en voortplantingskans." },
          { q: "Waar grijpt selectie op aan?", options: ["Op het genotype rechtstreeks", "Op het fenotype", "Op mutagenen", "Op ribosomen"], answer: 1, explain: "Selectie werkt op het fenotype; het erfelijke deel ligt in het DNA." },
          { q: "Wat gebeurt met gunstige allelen door selectie?", options: ["Ze nemen af", "Ze nemen in frequentie toe", "Ze verdwijnen meteen", "Ze veranderen in eiwit"], answer: 1, explain: "Gunstige allelen worden vaker doorgegeven en nemen in frequentie toe." },
          { q: "Wat is 'fitness' in de evolutie?", options: ["Spierkracht", "Overlevings- en voortplantingssucces", "Snelheid", "Grootte"], answer: 1, explain: "Fitness is de mate van overleven én succesvol voortplanten." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Het ontstaan van soorten",
        summary: "Een soort is een groep organismen die zich onderling kan voortplanten met vruchtbare nakomelingen. Nieuwe soorten ontstaan vaak door isolatie. Bij geografische isolatie raakt een populatie ruimtelijk gescheiden (bv. door een rivier of gebergte). De gescheiden populaties ondergaan verschillende mutaties en selectie en groeien uit elkaar.\n\nOntstaat er daarna voortplantingsisolatie (ze kunnen zich niet meer met elkaar voortplanten of krijgen geen vruchtbare nakomelingen), dan zijn het aparte soorten geworden. Voorbeelden van voortplantingsisolatie: verschillende paartijd of -gedrag, onverenigbare voortplantingsorganen, of onvruchtbare hybriden (zoals de muildier).",
        goals: [
          "Je legt uit wat een soort is.",
          "Je legt uit hoe isolatie tot nieuwe soorten leidt."
        ],
        cards: [
          { term: "Soort", def: "Groep die onderling vruchtbare nakomelingen kan krijgen." },
          { term: "Populatie", def: "Alle individuen van één soort in een bepaald gebied." },
          { term: "Geografische isolatie", def: "Ruimtelijke scheiding van populaties (bv. door een barrière)." },
          { term: "Voortplantingsisolatie", def: "Populaties kunnen zich niet meer met elkaar voortplanten (met vruchtbare nakomelingen)." },
          { term: "Soortvorming", def: "Het ontstaan van een nieuwe soort, vaak na isolatie." },
          { term: "Hybride", def: "Nakomeling van twee soorten; vaak onvruchtbaar (bv. muildier)." },
          { term: "Genenpool", def: "Alle allelen in een populatie samen." }
        ],
        quiz: [
          { q: "Wat is de biologische definitie van een soort?", options: ["Dieren die op elkaar lijken", "Groep die onderling vruchtbare nakomelingen krijgt", "Alle dieren in een gebied", "Organismen met hetzelfde aantal chromosomen"], answer: 1, explain: "Een soort kan onderling vruchtbare nakomelingen krijgen." },
          { q: "Wat is geografische isolatie?", options: ["Verschil in paargedrag", "Ruimtelijke scheiding van populaties", "Onvruchtbare nakomelingen", "Een mutatie"], answer: 1, explain: "Bij geografische isolatie zijn populaties ruimtelijk gescheiden." },
          { q: "Wanneer zijn twee populaties aparte soorten geworden?", options: ["Als ze er anders uitzien", "Als er voortplantingsisolatie is", "Als ze ver uit elkaar wonen", "Als ze verschillend eten"], answer: 1, explain: "Pas bij voortplantingsisolatie (geen vruchtbare nakomelingen samen) zijn het aparte soorten." },
          { q: "Een muildier is een voorbeeld van...", options: ["Een nieuwe soort", "Een onvruchtbare hybride", "Geografische isolatie", "Een mutatie"], answer: 1, explain: "Een muildier is een (meestal onvruchtbare) hybride van paard en ezel." },
          { q: "Wat is een genenpool?", options: ["Alle eiwitten van een cel", "Alle allelen in een populatie", "Een groep ribosomen", "Het DNA van één individu"], answer: 1, explain: "De genenpool is het geheel van alle allelen in een populatie." }
        ],
        sequences: [
          { title: "Soortvorming door isolatie", steps: ["Eén populatie", "Geografische isolatie splitst de populatie", "Verschillende mutaties en selectie in beide delen", "Populaties groeien genetisch uit elkaar", "Voortplantingsisolatie ontstaat", "Twee aparte soorten"] }
        ]
      },
      {
        id: "3",
        title: "Aanwijzingen voor evolutie",
        summary: "Er zijn veel aanwijzingen dat soorten zijn geëvolueerd en gemeenschappelijke voorouders hebben. Fossielen laten uitgestorven soorten en overgangsvormen zien; met bijvoorbeeld radioactieve datering bepaal je hun ouderdom. Homologe organen hebben dezelfde bouw (en voorouder) maar een andere functie (bv. de voorpoot van mens, walvis en vleermuis) en wijzen op verwantschap. Analoge organen hebben dezelfde functie maar een andere bouw/oorsprong (bv. vleugel van insect en vogel) en wijzen niet op nauwe verwantschap.\n\nOok overeenkomsten in DNA en eiwitten laten verwantschap zien: hoe meer overeenkomst in het DNA, hoe nauwer verwant. Deze moleculaire gegevens gebruik je om evolutionaire stambomen op te stellen.",
        goals: [
          "Je noemt aanwijzingen voor evolutie.",
          "Je legt het verschil uit tussen homologe en analoge organen."
        ],
        cards: [
          { term: "Fossiel", def: "Overblijfsel of afdruk van een organisme uit het verleden." },
          { term: "Overgangsvorm", def: "Fossiel met kenmerken van twee groepen; wijst op evolutie." },
          { term: "Homoloog orgaan", def: "Zelfde bouw/oorsprong, andere functie; wijst op gemeenschappelijke voorouder." },
          { term: "Analoog orgaan", def: "Zelfde functie, andere bouw/oorsprong; geen nauwe verwantschap." },
          { term: "Moleculaire aanwijzingen", def: "Overeenkomsten in DNA/eiwitten die verwantschap aantonen." },
          { term: "Radioactieve datering", def: "Methode om de ouderdom van fossielen/gesteente te bepalen." },
          { term: "Evolutionaire stamboom", def: "Schema van de verwantschap en afstamming van soorten." }
        ],
        quiz: [
          { q: "Wat zijn homologe organen?", options: ["Zelfde functie, andere bouw", "Zelfde bouw/oorsprong, andere functie", "Altijd identiek", "Organen zonder functie"], answer: 1, explain: "Homologe organen hebben dezelfde bouw/oorsprong maar een andere functie; ze wijzen op verwantschap." },
          { q: "De vleugel van een insect en die van een vogel zijn...", options: ["Homoloog", "Analoog", "Identiek", "Fossielen"], answer: 1, explain: "Zelfde functie (vliegen), andere bouw/oorsprong: analoge organen." },
          { q: "Wat laten fossielen zien?", options: ["Alleen levende soorten", "Uitgestorven soorten en overgangsvormen", "Het DNA van cellen", "Genregulatie"], answer: 1, explain: "Fossielen tonen uitgestorven soorten en overgangsvormen uit het verleden." },
          { q: "Hoe meer overeenkomst in DNA tussen twee soorten,...", options: ["Hoe minder verwant", "Hoe nauwer verwant", "Geen verband", "Hoe ouder de fossielen"], answer: 1, explain: "Meer DNA-overeenkomst wijst op nauwere verwantschap." },
          { q: "Waarmee bepaal je de ouderdom van een fossiel?", options: ["Met een microscoop", "Met radioactieve datering", "Met een kruistabel", "Met een stamboom"], answer: 1, explain: "Met radioactieve datering bepaal je de ouderdom van fossielen/gesteente." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "ev-ex1",
        title: "Resistente bacteriën",
        context: "In een ziekenhuis worden bacteriën bestreden met een antibioticum. Na verloop van tijd blijkt een groot deel van de bacteriën ongevoelig (resistent) voor het middel.",
        question: "Leg met natuurlijke selectie uit hoe een populatie resistente bacteriën ontstaat. Gebruik de begrippen variatie en selectie.",
        points: 3,
        model: [
          "In de bacteriepopulatie bestaat variatie: door mutatie zijn enkele bacteriën (toevallig) resistent (1 p).",
          "Het antibioticum doodt de gevoelige bacteriën; de resistente bacteriën overleven en planten zich voort (selectie) (1 p).",
          "De resistente bacteriën geven het resistentie-allel door, zodat het aandeel resistente bacteriën in de populatie toeneemt (1 p)."
        ]
      },
      {
        id: "ev-ex2",
        title: "Overeenkomst in bouw",
        context: "De voorpoot van een mol, de vin van een walvis en de arm van een mens hebben allemaal dezelfde botopbouw, maar een verschillende functie (graven, zwemmen, grijpen).",
        question: "Leg uit of dit homologe of analoge organen zijn en welke conclusie je hieruit over hun verwantschap kunt trekken.",
        points: 2,
        model: [
          "Het zijn homologe organen: dezelfde bouw/oorsprong, maar een verschillende functie (1 p).",
          "Dit wijst op een gemeenschappelijke voorouder, dus op verwantschap tussen deze soorten (1 p)."
        ]
      }
    ]
  },

  /* ===================== ECOLOGIE ===================== */
  {
    id: "ecologie",
    title: "Ecologie",
    icon: "🌍",
    theme: "t-lime",
    domain: "Ecologie",
    intro: "Hoe hangen organismen samen met elkaar en met hun omgeving? Je leert de organisatieniveaus, voedselrelaties, de stroom van energie en stof, en hoe ecosystemen veranderen door natuur en mens.",
    paragraphs: [
      {
        id: "1",
        title: "Organisatieniveaus en factoren",
        summary: "In de ecologie kijk je naar verschillende niveaus: een individu, een populatie (alle individuen van één soort in een gebied), een levensgemeenschap (alle populaties samen) en een ecosysteem (levensgemeenschap + het abiotische milieu). Alle ecosystemen samen vormen de biosfeer.\n\nOrganismen worden beïnvloed door abiotische factoren (niet-levend: temperatuur, licht, water, pH, wind) en biotische factoren (levend: voedsel, vijanden, concurrentie, ziekten). De plek waar een organisme leeft is zijn biotoop/habitat; de rol/functie die het daarin vervult is zijn niche. Twee soorten met dezelfde niche concurreren sterk (concurrentie-uitsluiting).",
        goals: [
          "Je benoemt de ecologische organisatieniveaus.",
          "Je legt het verschil uit tussen abiotische en biotische factoren, en tussen biotoop en niche."
        ],
        cards: [
          { term: "Populatie", def: "Alle individuen van één soort in een bepaald gebied." },
          { term: "Levensgemeenschap", def: "Alle populaties (soorten) samen in een gebied." },
          { term: "Ecosysteem", def: "Levensgemeenschap samen met het abiotische milieu." },
          { term: "Biosfeer", def: "Alle ecosystemen op aarde samen." },
          { term: "Abiotische factor", def: "Niet-levende milieufactor (temperatuur, licht, water, pH)." },
          { term: "Biotische factor", def: "Levende milieufactor (voedsel, vijanden, concurrentie)." },
          { term: "Biotoop / habitat", def: "De plek/leefomgeving waar een organisme leeft." },
          { term: "Niche", def: "De functie/rol van een soort in het ecosysteem (o.a. voedsel, plaats, tijd)." }
        ],
        quiz: [
          { q: "Wat is een populatie?", options: ["Alle soorten in een gebied", "Alle individuen van één soort in een gebied", "Een ecosysteem", "Een levensgemeenschap"], answer: 1, explain: "Een populatie = alle individuen van één soort in een bepaald gebied." },
          { q: "Wat hoort bij een ecosysteem dat niet bij een levensgemeenschap hoort?", options: ["De planten", "De dieren", "Het abiotische milieu", "De bacteriën"], answer: 2, explain: "Een ecosysteem = levensgemeenschap + het abiotische (niet-levende) milieu." },
          { q: "Welke factor is abiotisch?", options: ["Concurrentie", "Temperatuur", "Vijanden", "Ziekten"], answer: 1, explain: "Temperatuur is een abiotische (niet-levende) factor." },
          { q: "Wat is de niche van een soort?", options: ["De plek waar hij leeft", "Zijn functie/rol in het ecosysteem", "Zijn aantal", "Zijn grootte"], answer: 1, explain: "De niche is de rol/functie van een soort; de biotoop is de plek waar hij leeft." },
          { q: "Twee soorten met dezelfde niche...", options: ["Leven vreedzaam samen", "Concurreren sterk", "Vormen één soort", "Eten elkaar op"], answer: 1, explain: "Gelijke niche → sterke concurrentie (concurrentie-uitsluiting)." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Voedselrelaties en kringlopen",
        summary: "Producenten (planten) leggen met fotosynthese zonne-energie vast in organische stof. Consumenten (planteneters, vleeseters) eten andere organismen; reducenten (bacteriën, schimmels) breken dode resten af tot anorganische stoffen. In een voedselketen geef je de eetrelaties weer; meerdere ketens samen vormen een voedselweb.\n\nEnergie stroomt éénrichting door het systeem: bij elke stap gaat veel energie verloren als warmte, dus per trofisch niveau blijft er minder over (piramide van biomassa/energie). Stoffen daarentegen gaan in kringlopen rond, zoals de koolstofkringloop: CO2 wordt door fotosynthese vastgelegd en door verbranding/verbranding (dissimilatie) en afbraak weer vrijgemaakt.",
        goals: [
          "Je beschrijft producenten, consumenten en reducenten in voedselrelaties.",
          "Je legt de energiestroom en de koolstofkringloop uit."
        ],
        cards: [
          { term: "Producent", def: "Organisme (plant) dat met fotosynthese organische stof maakt." },
          { term: "Consument", def: "Organisme dat andere organismen eet (planten- of vleeseter)." },
          { term: "Reducent", def: "Bacterie of schimmel die dode resten afbreekt tot anorganische stoffen." },
          { term: "Voedselketen", def: "Reeks organismen die elkaar opeten (energie/stofoverdracht)." },
          { term: "Voedselweb", def: "Netwerk van met elkaar verbonden voedselketens." },
          { term: "Trofisch niveau", def: "Stap in de voedselketen (producent, 1e consument, enz.)." },
          { term: "Energiestroom", def: "Energie stroomt één kant op; per niveau gaat veel verloren als warmte." },
          { term: "Koolstofkringloop", def: "CO2 wordt vastgelegd (fotosynthese) en weer vrijgemaakt (dissimilatie/afbraak/verbranding)." }
        ],
        quiz: [
          { q: "Wat is een producent?", options: ["Een planteneter", "Een plant die fotosynthese doet", "Een schimmel", "Een vleeseter"], answer: 1, explain: "Producenten (planten) maken met fotosynthese organische stof." },
          { q: "Wat doen reducenten?", options: ["Fotosynthese", "Dode resten afbreken tot anorganische stoffen", "Andere dieren eten", "Energie vastleggen"], answer: 1, explain: "Reducenten (bacteriën/schimmels) breken dood materiaal af." },
          { q: "Waarom neemt de biomassa per trofisch niveau af?", options: ["Er zijn minder soorten", "Bij elke stap gaat veel energie verloren als warmte", "Producenten eten consumenten", "Door de koolstofkringloop"], answer: 1, explain: "Energie gaat één kant op en per niveau gaat veel verloren als warmte." },
          { q: "Wat legt CO2 vast in de koolstofkringloop?", options: ["Verbranding", "Fotosynthese", "Dissimilatie", "Afbraak door reducenten"], answer: 1, explain: "Fotosynthese legt CO2 vast in organische stof." },
          { q: "Meerdere gekoppelde voedselketens vormen samen een...", options: ["Populatie", "Voedselweb", "Ecosysteem", "Niche"], answer: 1, explain: "Verbonden voedselketens vormen een voedselweb." }
        ],
        sequences: []
      },
      {
        id: "3",
        title: "Populaties en veranderende ecosystemen",
        summary: "De grootte van een populatie hangt af van geboorte, sterfte en migratie. Bij weinig concurrentie groeit een populatie eerst snel (bijna exponentieel), maar door beperkte voedsel/ruimte en toenemende vijanden vlakt de groei af rond de draagkracht van het milieu (S-vormige/logistische groei).\n\nEcosystemen veranderen door successie: een reeks levensgemeenschappen volgt elkaar op tot een relatief stabiel climaxstadium. De mens beïnvloedt ecosystemen sterk (vermesting/eutrofiëring, verzuring, versnippering, klimaatverandering), wat de biodiversiteit kan verlagen. Duurzaam beheer en natuurbescherming proberen ecosystemen en biodiversiteit in stand te houden.",
        goals: [
          "Je legt uit wat de groei van een populatie bepaalt en wat draagkracht is.",
          "Je beschrijft successie en menselijke invloed op ecosystemen."
        ],
        cards: [
          { term: "Draagkracht", def: "Het maximale aantal individuen dat een milieu langdurig kan onderhouden." },
          { term: "Logistische (S-)groei", def: "Snelle groei die afvlakt naar de draagkracht." },
          { term: "Geboorte/sterfte/migratie", def: "Factoren die de grootte van een populatie bepalen." },
          { term: "Successie", def: "Opvolging van levensgemeenschappen tot een stabiel climaxstadium." },
          { term: "Climaxstadium", def: "Het relatief stabiele eindstadium van successie." },
          { term: "Eutrofiëring (vermesting)", def: "Overmaat aan voedingsstoffen (bv. mest) verstoort het ecosysteem." },
          { term: "Biodiversiteit", def: "De verscheidenheid aan soorten (en genen/ecosystemen)." },
          { term: "Duurzaamheid", def: "Gebruik van de natuur zonder haar voor de toekomst uit te putten." }
        ],
        quiz: [
          { q: "Wat is de draagkracht van een milieu?", options: ["Het aantal soorten", "Het maximale aantal individuen dat het milieu aankan", "De hoeveelheid CO2", "De grootte van het gebied"], answer: 1, explain: "De draagkracht is het maximale aantal individuen dat een milieu langdurig kan onderhouden." },
          { q: "Wat is successie?", options: ["Groei van één individu", "Opvolging van levensgemeenschappen", "Afbraak door reducenten", "Een voedselketen"], answer: 1, explain: "Successie is de opeenvolging van levensgemeenschappen richting een climaxstadium." },
          { q: "Wat bepaalt de grootte van een populatie?", options: ["Alleen geboorte", "Geboorte, sterfte en migratie", "Alleen het weer", "Alleen voedsel"], answer: 1, explain: "Geboorte, sterfte en migratie (in/uit) bepalen samen de populatiegrootte." },
          { q: "Wat is eutrofiëring?", options: ["Tekort aan voedingsstoffen", "Overmaat aan voedingsstoffen die het ecosysteem verstoort", "Verzuring van de bodem", "Uitsterven van soorten"], answer: 1, explain: "Eutrofiëring (vermesting) is een overmaat aan voedingsstoffen, bv. door mest." },
          { q: "Wat betekent duurzaamheid?", options: ["Zo veel mogelijk oogsten", "De natuur gebruiken zonder haar voor de toekomst uit te putten", "Alle natuur beschermen tegen gebruik", "Meer soorten introduceren"], answer: 1, explain: "Duurzaam gebruik put de natuur niet uit, zodat toekomstige generaties er ook van kunnen leven." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "ec-ex1",
        title: "Energie in een voedselketen",
        context: "In een voedselketen gras → konijn → vos is de totale biomassa van het gras veel groter dan die van de konijnen, en die van de konijnen weer groter dan die van de vossen.",
        question: "Verklaar waarom de biomassa afneemt naarmate je hoger in de voedselketen komt. Gebruik in je antwoord de energiestroom.",
        points: 2,
        model: [
          "Bij de overgang naar een volgend trofisch niveau wordt maar een deel van de energie/biomassa opgenomen; veel energie gaat verloren (o.a. als warmte door dissimilatie en in niet-opgegeten/onverteerde delen) (1 p).",
          "Daardoor blijft er op elk hoger niveau minder energie en dus minder biomassa over (1 p)."
        ]
      },
      {
        id: "ec-ex2",
        title: "Eutrofiëring van een sloot",
        context: "In een sloot naast een akker komt veel mest terecht. Er groeit eerst enorm veel algen (algenbloei). Later sterven veel vissen door zuurstofgebrek.",
        question: "Leg uit hoe de mest uiteindelijk leidt tot zuurstofgebrek en vissterfte in de sloot.",
        points: 3,
        model: [
          "De mest (voedingsstoffen) veroorzaakt sterke groei van algen/waterplanten (algenbloei) (1 p).",
          "Als de algen afsterven, worden ze door reducenten (bacteriën) afgebroken; die verbruiken bij die afbraak veel zuurstof (1 p).",
          "Het zuurstofgehalte in het water daalt sterk, waardoor de vissen door zuurstofgebrek sterven (1 p)."
        ]
      }
    ]
  },

  /* ===================== STOFWISSELING IN DE CEL ===================== */
  {
    id: "stofwisseling",
    title: "Stofwisseling in de cel",
    icon: "🔬",
    theme: "t-red",
    domain: "Stofwisseling",
    intro: "Alle processen in een cel draaien op stofwisseling: opbouw en afbraak van stoffen, gestuurd door enzymen. Je leert hoe enzymen werken, hoe cellen energie vrijmaken (dissimilatie) en hoe planten energie vastleggen (fotosynthese).",
    paragraphs: [
      {
        id: "1",
        title: "Enzymen",
        summary: "Stofwisseling is het geheel van chemische reacties in een cel: opbouw (assimilatie) en afbraak (dissimilatie). Bijna alle reacties worden versneld door enzymen: biokatalysatoren (eiwitten) die zelf niet verbruikt worden. Elk enzym past maar op één type substraat: het substraat past als een sleutel in het actieve centrum (slot); dit heet substraatspecificiteit.\n\nDe werking hangt af van omstandigheden. Er is een optimumtemperatuur en een optimum-pH waarbij het enzym het snelst werkt. Bij te hoge temperatuur of verkeerde pH verandert de vorm van het enzym onherstelbaar (denaturatie), waardoor het niet meer werkt. Ook de substraat- en enzymconcentratie beïnvloeden de reactiesnelheid.",
        goals: [
          "Je legt uit wat enzymen zijn en hoe substraatspecificiteit werkt.",
          "Je beschrijft de invloed van temperatuur en pH op enzymwerking."
        ],
        cards: [
          { term: "Stofwisseling (metabolisme)", def: "Alle chemische reacties in een cel: opbouw en afbraak." },
          { term: "Assimilatie / dissimilatie", def: "Opbouw van stoffen (assimilatie) versus afbraak met energie vrij (dissimilatie)." },
          { term: "Enzym", def: "Biokatalysator (eiwit) die een reactie versnelt en zelf niet verbruikt wordt." },
          { term: "Substraat", def: "De stof waarop een enzym inwerkt." },
          { term: "Actief centrum", def: "Plek op het enzym waar het substraat precies past ('slot')." },
          { term: "Substraatspecificiteit", def: "Elk enzym werkt maar op één (type) substraat, als sleutel-slot." },
          { term: "Optimumtemperatuur / -pH", def: "De temperatuur/pH waarbij een enzym het snelst werkt." },
          { term: "Denaturatie", def: "Onherstelbare vormverandering van een enzym (bv. door hitte), waardoor het niet meer werkt." }
        ],
        quiz: [
          { q: "Wat is een enzym?", options: ["Een suiker", "Een biokatalysator (eiwit)", "Een hormoon", "Een vetzuur"], answer: 1, explain: "Een enzym is een biokatalysator (eiwit) die reacties versnelt zonder verbruikt te worden." },
          { q: "Wat betekent substraatspecificiteit?", options: ["Enzym werkt op alles", "Enzym werkt maar op één type substraat", "Enzym wordt verbruikt", "Enzym maakt energie"], answer: 1, explain: "Een enzym past maar op één substraat (sleutel-slot)." },
          { q: "Wat gebeurt er met een enzym bij te hoge temperatuur?", options: ["Het werkt sneller", "Het denatureert en werkt niet meer", "Het verandert in substraat", "Er gebeurt niets"], answer: 1, explain: "Te hoge temperatuur veroorzaakt denaturatie: de vorm verandert onherstelbaar." },
          { q: "Waar bindt het substraat aan het enzym?", options: ["Aan de celkern", "Aan het actieve centrum", "Aan het ribosoom", "Aan het membraan"], answer: 1, explain: "Het substraat past in het actieve centrum van het enzym." },
          { q: "Wat is dissimilatie?", options: ["Opbouw van stoffen", "Afbraak van stoffen met energie vrij", "DNA kopiëren", "Enzymen maken"], answer: 1, explain: "Dissimilatie is de afbraak van stoffen waarbij energie vrijkomt." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Dissimilatie: energie vrijmaken",
        summary: "Cellen halen energie uit organische stoffen (vooral glucose) door dissimilatie. Bij de aerobe verbranding (met zuurstof) wordt glucose volledig afgebroken: C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + energie. Dit gebeurt grotendeels in de mitochondriën en levert veel energie (ATP), de energiedrager van de cel.\n\nZonder voldoende zuurstof gebruikt de cel anaerobe dissimilatie (gisting). Bij melkzuurgisting in spiercellen ontstaat melkzuur (weinig energie); bij gisten en sommige micro-organismen ontstaan alcohol en CO2 (alcoholische gisting). Anaerobe dissimilatie levert veel minder energie op dan aerobe, omdat glucose niet volledig wordt afgebroken.",
        goals: [
          "Je beschrijft aerobe dissimilatie en de rol van mitochondriën en ATP.",
          "Je legt het verschil uit tussen aerobe en anaerobe dissimilatie."
        ],
        cards: [
          { term: "Dissimilatie", def: "Afbraak van organische stof waarbij energie vrijkomt." },
          { term: "Aerobe dissimilatie", def: "Verbranding met zuurstof; glucose volledig afgebroken tot CO2 en H2O; veel energie." },
          { term: "Anaerobe dissimilatie (gisting)", def: "Afbraak zonder zuurstof; glucose niet volledig afgebroken; weinig energie." },
          { term: "Mitochondrion", def: "Celorgaan waarin de aerobe dissimilatie grotendeels plaatsvindt." },
          { term: "ATP", def: "Energiedrager (energierijke stof) die de cel gebruikt voor processen." },
          { term: "Melkzuurgisting", def: "Anaerobe dissimilatie in spiercellen; er ontstaat melkzuur." },
          { term: "Alcoholische gisting", def: "Anaerobe dissimilatie (o.a. gisten); er ontstaan alcohol en CO2." },
          { term: "Reactie aerobe dissimilatie", def: "C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + energie." }
        ],
        quiz: [
          { q: "Waar vindt de aerobe dissimilatie vooral plaats?", options: ["In de kern", "In de mitochondriën", "In de ribosomen", "In de celwand"], answer: 1, explain: "De aerobe dissimilatie vindt grotendeels plaats in de mitochondriën." },
          { q: "Wat is ATP?", options: ["Een enzym", "De energiedrager van de cel", "Een suiker", "Een afvalstof"], answer: 1, explain: "ATP is de energierijke stof waarmee de cel processen aandrijft." },
          { q: "Welke stoffen ontstaan bij volledige aerobe verbranding van glucose?", options: ["Alcohol en CO2", "Melkzuur", "CO2 en water", "Alleen zuurstof"], answer: 2, explain: "C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + energie." },
          { q: "Wat ontstaat bij melkzuurgisting in spiercellen?", options: ["Alcohol", "Melkzuur", "Zuurstof", "Glucose"], answer: 1, explain: "Bij anaerobe dissimilatie in spiercellen ontstaat melkzuur." },
          { q: "Waarom levert anaerobe dissimilatie minder energie op?", options: ["Er is meer zuurstof", "Glucose wordt niet volledig afgebroken", "Er is geen glucose", "Enzymen ontbreken"], answer: 1, explain: "Zonder zuurstof wordt glucose niet volledig afgebroken, dus komt er minder energie vrij." }
        ],
        sequences: []
      },
      {
        id: "3",
        title: "Fotosynthese",
        summary: "Planten (en algen) leggen met fotosynthese lichtenergie vast in glucose. In de bladgroenkorrels (chloroplasten) zit bladgroen (chlorofyl), dat licht opvangt. De reactie: 6 CO2 + 6 H2O → (licht + chlorofyl) → C6H12O6 + 6 O2. De plant gebruikt de glucose voor opbouw (assimilatie) van o.a. zetmeel en cellulose, en voor haar eigen dissimilatie.\n\nDe snelheid van de fotosynthese hangt af van beperkende factoren: lichtsterkte, CO2-concentratie en temperatuur. De factor die het meest tekortschiet, bepaalt de snelheid (de wet van de beperkende factor). Fotosynthese is de basis van bijna alle voedselketens en levert de zuurstof in de atmosfeer.",
        goals: [
          "Je beschrijft de fotosynthese met de reactievergelijking.",
          "Je legt uit welke beperkende factoren de snelheid bepalen."
        ],
        cards: [
          { term: "Fotosynthese", def: "Vastleggen van lichtenergie in glucose: 6 CO2 + 6 H2O → C6H12O6 + 6 O2." },
          { term: "Bladgroenkorrel (chloroplast)", def: "Celorgaan waarin de fotosynthese plaatsvindt." },
          { term: "Bladgroen (chlorofyl)", def: "Groene kleurstof die lichtenergie opvangt." },
          { term: "Koolstofassimilatie", def: "Opbouw van organische stof (glucose) uit CO2 en water." },
          { term: "Beperkende factor", def: "De factor die het meest tekortschiet en zo de snelheid bepaalt." },
          { term: "Beperkende factoren fotosynthese", def: "Lichtsterkte, CO2-concentratie en temperatuur." },
          { term: "Zetmeel", def: "Opslagstof die de plant uit glucose maakt (assimilatieproduct)." }
        ],
        quiz: [
          { q: "Wat legt de fotosynthese vast?", options: ["Warmte in water", "Lichtenergie in glucose", "CO2 in zuurstof", "Zuurstof in glucose"], answer: 1, explain: "Fotosynthese legt lichtenergie vast in glucose." },
          { q: "Waar vindt de fotosynthese plaats?", options: ["In de mitochondriën", "In de bladgroenkorrels", "In de kern", "In de vacuole"], answer: 1, explain: "De fotosynthese vindt plaats in de bladgroenkorrels (chloroplasten)." },
          { q: "Welke stoffen ontstaan bij de fotosynthese?", options: ["CO2 en water", "Glucose en zuurstof", "Melkzuur", "Alcohol en CO2"], answer: 1, explain: "6 CO2 + 6 H2O → C6H12O6 (glucose) + 6 O2." },
          { q: "Wat is een beperkende factor?", options: ["De factor die het meest tekortschiet en de snelheid bepaalt", "De factor met de meeste voorraad", "Altijd de temperatuur", "Het bladgroen"], answer: 0, explain: "De beperkende factor is degene die het meest tekortschiet en zo de snelheid bepaalt." },
          { q: "Welke kleurstof vangt het licht op?", options: ["Melanine", "Chlorofyl (bladgroen)", "Rodopsine", "Hemoglobine"], answer: 1, explain: "Bladgroen (chlorofyl) vangt de lichtenergie op." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "sw-ex1",
        title: "Koorts en enzymen",
        context: "Bij hoge koorts (boven ±42 °C) kunnen lichaamsprocessen ernstig ontregeld raken. Veel enzymen werken dan niet meer goed.",
        question: "Leg uit waarom een zeer hoge lichaamstemperatuur de werking van enzymen verstoort. Gebruik in je antwoord het begrip denaturatie.",
        points: 2,
        model: [
          "Enzymen hebben een optimumtemperatuur; ver daarboven verandert door de hitte de ruimtelijke vorm van het enzym onherstelbaar (denaturatie) (1 p).",
          "Het substraat past dan niet meer in het actieve centrum, waardoor het enzym de reactie niet meer kan versnellen (1 p)."
        ]
      },
      {
        id: "sw-ex2",
        title: "Fotosynthese in een kas",
        context: "Een tuinder wil de fotosynthese in zijn kas verhogen. Bij voldoende licht en een goede temperatuur blijkt extra CO2 toevoegen de groei sterk te verbeteren.",
        question: "Leg met het begrip beperkende factor uit waarom juist het toevoegen van CO2 hier de fotosynthese versnelt.",
        points: 2,
        model: [
          "De snelheid van de fotosynthese wordt bepaald door de factor die het meest tekortschiet (de beperkende factor) (1 p).",
          "Omdat licht en temperatuur al voldoende zijn, was CO2 hier de beperkende factor; meer CO2 heft die beperking op en versnelt de fotosynthese (1 p)."
        ]
      }
    ]
  },

  /* ===================== VOEDING EN VERTERING ===================== */
  {
    id: "vertering",
    title: "Voeding en vertering",
    icon: "🍎",
    theme: "t-brown",
    domain: "Voeding & vertering",
    intro: "Je eten moet worden afgebroken tot kleine, opneembare moleculen. Je leert de bouw van het verteringsstelsel, hoe verteringsenzymen voedingsstoffen splitsen en hoe de verteerde stoffen in het bloed worden opgenomen.",
    paragraphs: [
      {
        id: "1",
        title: "Voedingsstoffen en het verteringskanaal",
        summary: "Voedingsstoffen zijn koolhydraten, eiwitten, vetten, water, mineralen (zouten) en vitamines. Koolhydraten en vetten zijn vooral brandstof; eiwitten vooral bouwstof; vitamines en mineralen heb je in kleine hoeveelheden nodig. Voedingsvezels worden niet verteerd, maar bevorderen de darmwerking.\n\nHet verteringskanaal loopt van mond → slokdarm → maag → dunne darm → dikke darm → endeldarm → anus. Verteringsklieren (o.a. speekselklieren, maagwand, alvleesklier en lever) geven verteringssappen af. Bij de mechanische vertering (kauwen, maagbewegingen) wordt het voedsel kleiner gemaakt; bij de chemische vertering splitsen enzymen de grote moleculen. Spierbewegingen van de darmwand (peristaltiek) duwen het voedsel voort.",
        goals: [
          "Je noemt de voedingsstoffen en hun functie.",
          "Je beschrijft de bouw van het verteringskanaal en het verschil tussen mechanische en chemische vertering."
        ],
        cards: [
          { term: "Koolhydraten", def: "Voedingsstof die vooral als brandstof dient (bv. zetmeel, suikers)." },
          { term: "Eiwitten", def: "Voedingsstof die vooral als bouwstof dient; opgebouwd uit aminozuren." },
          { term: "Vetten", def: "Energierijke voedingsstof (brand- en reservestof); opgebouwd uit vetzuren en glycerol." },
          { term: "Vitamines en mineralen", def: "Stoffen die je in kleine hoeveelheden nodig hebt voor een goede werking van je lichaam." },
          { term: "Voedingsvezels", def: "Onverteerbare stoffen die de darmwerking (peristaltiek) bevorderen." },
          { term: "Verteringskanaal", def: "Mond → slokdarm → maag → dunne darm → dikke darm → endeldarm → anus." },
          { term: "Mechanische vertering", def: "Het fijnmaken van voedsel (kauwen, maagbewegingen), zonder de moleculen te splitsen." },
          { term: "Chemische vertering", def: "Het splitsen van grote voedingsmoleculen door verteringsenzymen." },
          { term: "Peristaltiek", def: "Spierbewegingen van de darmwand die het voedsel voortduwen." }
        ],
        quiz: [
          { q: "Welke voedingsstof is vooral bouwstof?", options: ["Koolhydraten", "Eiwitten", "Vetten", "Water"], answer: 1, explain: "Eiwitten leveren vooral bouwstof (aminozuren); koolhydraten en vetten vooral brandstof." },
          { q: "Wat is de functie van voedingsvezels?", options: ["Energie leveren", "De darmwerking bevorderen", "Eiwit verteren", "Vet opnemen"], answer: 1, explain: "Vezels worden niet verteerd maar bevorderen de peristaltiek/darmwerking." },
          { q: "Wat is peristaltiek?", options: ["Het splitsen van moleculen", "Spierbewegingen die voedsel voortduwen", "Opname van glucose", "Het maken van gal"], answer: 1, explain: "Peristaltiek zijn de spierbewegingen van de darmwand die het voedsel voortduwen." },
          { q: "Wat gebeurt er bij mechanische vertering?", options: ["Moleculen worden gesplitst", "Voedsel wordt fijngemaakt", "Stoffen worden opgenomen", "Enzymen worden gemaakt"], answer: 1, explain: "Mechanische vertering maakt het voedsel kleiner (kauwen, maagbewegingen) zonder de moleculen te splitsen." },
          { q: "Wat is de juiste volgorde in het verteringskanaal?", options: ["Maag → slokdarm → dunne darm", "Slokdarm → maag → dunne darm → dikke darm", "Mond → maag → slokdarm", "Dunne darm → maag → dikke darm"], answer: 1, explain: "Mond → slokdarm → maag → dunne darm → dikke darm → endeldarm → anus." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "Verteringsenzymen",
        summary: "Verteringsenzymen splitsen grote voedingsmoleculen (polymeren) in kleine, opneembare bouwstenen (monomeren). Amylase (in speeksel en alvleessap) splitst zetmeel/koolhydraten tot glucose. Proteasen splitsen eiwitten tot aminozuren; pepsine werkt in de maag in een zuur milieu. Lipase (uit de alvleesklier) splitst vetten tot vetzuren en glycerol.\n\nGal (gemaakt in de lever, opgeslagen in de galblaas) bevat geen enzymen, maar emulgeert vet: het verdeelt grote vetdruppels in kleine druppeltjes, zodat lipase een groter oppervlak heeft en het vet sneller verteert. Elk enzym heeft een optimum-pH: pepsine werkt in het zure maagsap, de enzymen in de dunne darm juist in een meer basisch milieu.",
        goals: [
          "Je koppelt verteringsenzymen aan hun voedingsstof en product.",
          "Je legt uit wat gal doet bij de vetvertering."
        ],
        cards: [
          { term: "Verteringsenzym", def: "Enzym dat grote voedingsmoleculen splitst in opneembare bouwstenen." },
          { term: "Amylase", def: "Enzym dat zetmeel/koolhydraten splitst tot glucose (speeksel, alvleessap)." },
          { term: "Protease (o.a. pepsine)", def: "Enzym dat eiwitten splitst tot aminozuren; pepsine werkt in het zure maagsap." },
          { term: "Lipase", def: "Enzym (alvleesklier) dat vetten splitst tot vetzuren en glycerol." },
          { term: "Gal", def: "Vloeistof uit de lever (opgeslagen in de galblaas) die vet emulgeert; bevat geen enzymen." },
          { term: "Emulgeren", def: "Grote vetdruppels verdelen in kleine druppeltjes, zodat lipase beter werkt." },
          { term: "Monomeer/polymeer", def: "Kleine bouwsteen (monomeer) versus groot molecuul (polymeer) opgebouwd uit bouwstenen." },
          { term: "Optimum-pH", def: "De zuurgraad waarbij een enzym het snelst werkt (bv. pepsine in zuur milieu)." }
        ],
        quiz: [
          { q: "Welk enzym splitst zetmeel tot glucose?", options: ["Lipase", "Amylase", "Pepsine", "Protease"], answer: 1, explain: "Amylase splitst zetmeel/koolhydraten tot glucose." },
          { q: "Wat splitst lipase?", options: ["Eiwitten", "Koolhydraten", "Vetten tot vetzuren en glycerol", "DNA"], answer: 2, explain: "Lipase splitst vetten in vetzuren en glycerol." },
          { q: "Wat doet gal?", options: ["Eiwit verteren", "Vet emulgeren", "Zetmeel splitsen", "Glucose opnemen"], answer: 1, explain: "Gal emulgeert vet (kleine druppeltjes) zodat lipase beter werkt; het bevat zelf geen enzymen." },
          { q: "In welk milieu werkt pepsine?", options: ["Basisch", "Neutraal", "Zuur (maag)", "Zonder water"], answer: 2, explain: "Pepsine heeft een optimum bij lage pH: het zure maagsap." },
          { q: "Waartoe worden eiwitten verteerd?", options: ["Glucose", "Vetzuren", "Aminozuren", "Glycerol"], answer: 2, explain: "Proteasen splitsen eiwitten tot aminozuren." }
        ],
        sequences: []
      },
      {
        id: "3",
        title: "Opname en de rol van de lever",
        summary: "De opname (resorptie) van verteerde voedingsstoffen gebeurt vooral in de dunne darm. De binnenwand heeft darmplooien, darmvlokken (villi) en microvilli, waardoor het oppervlak enorm groot is en de opname snel gaat. Glucose en aminozuren gaan naar de bloedcapillairen in de darmvlokken; vetzuren en glycerol worden grotendeels via de lymfevaten afgevoerd.\n\nHet bloed uit de darm gaat via de poortader eerst naar de lever. De lever regelt de bloedglucose (opslag als glycogeen), maakt gal en ontgift schadelijke stoffen; zo zet hij het giftige ammoniak om in ureum. In de dikke darm wordt vooral water (en zouten) opgenomen; wat overblijft verlaat als ontlasting het lichaam.",
        goals: [
          "Je legt uit hoe de bouw van de dunne darm de opname vergroot.",
          "Je beschrijft de functies van de lever bij de vertering."
        ],
        cards: [
          { term: "Resorptie (opname)", def: "Opname van verteerde voedingsstoffen in het bloed/de lymfe, vooral in de dunne darm." },
          { term: "Darmvlok (villus)", def: "Uitstulping van de darmwand die het opnameoppervlak vergroot." },
          { term: "Microvilli", def: "Nog kleinere uitstulpingen op de darmcellen; vergroten het oppervlak verder." },
          { term: "Poortader", def: "Bloedvat dat bloed uit de darm eerst naar de lever voert." },
          { term: "Lever", def: "Orgaan dat o.a. de bloedglucose regelt, gal maakt en giftige stoffen ontgift." },
          { term: "Glycogeen", def: "Opslagvorm van glucose in de lever (en spieren)." },
          { term: "Ontgifting / ureum", def: "De lever maakt giftige stoffen onschadelijk, bv. ammoniak → ureum." },
          { term: "Dikke darm", def: "Hier worden vooral water en zouten opgenomen; de rest wordt ontlasting." }
        ],
        quiz: [
          { q: "Waar worden voedingsstoffen vooral opgenomen?", options: ["In de maag", "In de dunne darm", "In de dikke darm", "In de slokdarm"], answer: 1, explain: "De opname (resorptie) gebeurt vooral in de dunne darm, met een groot oppervlak door de darmvlokken." },
          { q: "Wat vergroot het opnameoppervlak van de dunne darm?", options: ["Peristaltiek", "Darmvlokken en microvilli", "Gal", "De poortader"], answer: 1, explain: "Darmplooien, darmvlokken (villi) en microvilli maken het oppervlak enorm groot." },
          { q: "Waar gaat het bloed uit de darm eerst naartoe?", options: ["Naar het hart", "Naar de lever (via de poortader)", "Naar de nieren", "Naar de longen"], answer: 1, explain: "Via de poortader gaat het darmbloed eerst naar de lever." },
          { q: "Hoe slaat de lever glucose op?", options: ["Als vet", "Als glycogeen", "Als ureum", "Als eiwit"], answer: 1, explain: "De lever slaat overtollige glucose op als glycogeen." },
          { q: "Wat wordt er vooral opgenomen in de dikke darm?", options: ["Glucose", "Water en zouten", "Vetzuren", "Aminozuren"], answer: 1, explain: "In de dikke darm wordt vooral water (en zouten) opgenomen." }
        ],
        sequences: [
          { title: "Weg van een boterham door de vertering", steps: ["Mond: kauwen + amylase (zetmeel)", "Slokdarm: peristaltiek", "Maag: pepsine in zuur milieu (eiwit)", "Dunne darm: enzymen + gal verteren verder", "Resorptie via darmvlokken", "Poortader → lever", "Dikke darm: wateropname → ontlasting"] }
        ]
      }
    ],
    exams: [
      {
        id: "vt-ex1",
        title: "Waarom is vetvertering zonder gal traag?",
        context: "Bij iemand van wie de galblaas is verwijderd en bij wie de galstroom is verstoord, verloopt de vertering van vet slechter. Onverteerd vet komt in de ontlasting terecht.",
        question: "Leg uit waarom vet zonder (voldoende) gal slechter wordt verteerd. Gebruik in je antwoord het begrip emulgeren en het enzym lipase.",
        points: 2,
        model: [
          "Gal emulgeert vet: het verdeelt grote vetdruppels in veel kleine druppeltjes, waardoor het totale oppervlak veel groter wordt (1 p).",
          "Zonder gal blijft het vet in grote druppels; lipase kan dan maar op een klein oppervlak inwerken, zodat het vet langzaam/onvolledig wordt verteerd (1 p)."
        ]
      },
      {
        id: "vt-ex2",
        title: "Bouw van de dunne darm",
        context: "De binnenwand van de dunne darm is niet glad, maar zit vol plooien en darmvlokken met microvilli. De dunne darm is bovendien enkele meters lang.",
        question: "Leg uit hoe deze bouw bijdraagt aan een efficiënte opname van voedingsstoffen.",
        points: 2,
        model: [
          "De plooien, darmvlokken en microvilli (en de lengte) vergroten het inwendige oppervlak enorm (1 p).",
          "Een groter oppervlak zorgt dat er meer voedingsstoffen tegelijk (sneller/vollediger) kunnen worden opgenomen in het bloed/de lymfe (1 p)."
        ]
      }
    ]
  },

  /* ===================== TRANSPORT / BLOEDSOMLOOP ===================== */
  {
    id: "transport",
    title: "Transport",
    icon: "❤️",
    theme: "t-rose",
    domain: "Transport",
    intro: "Je bloed vervoert stoffen door je hele lichaam. Je leert de bouw en werking van het hart, de verschillende bloedvaten met hun bloeddruk en stroomsnelheid, en de samenstelling en functies van bloed, weefselvloeistof en lymfe.",
    paragraphs: [
      {
        id: "1",
        title: "Het hart en de dubbele bloedsomloop",
        summary: "De mens heeft een dubbele, gesloten bloedsomloop. In de kleine (long)bloedsomloop pompt de rechterkamer bloed naar de longen, waar het zuurstof opneemt; het komt terug in de linkerboezem. In de grote (lichaams)bloedsomloop pompt de linkerkamer zuurstofrijk bloed naar het lichaam; het komt terug in de rechterboezem.\n\nHet hart heeft vier holten: twee boezems (atria) en twee kamers (ventrikels), gescheiden door het harttussenschot. Hartkleppen zorgen dat het bloed maar één kant op stroomt: kleppen tussen boezem en kamer, en kleppen bij de aorta en de longslagader. De hartslag wordt op gang gebracht door de sinusknoop (gangmaker) en versneld of vertraagd door het autonome zenuwstelsel en adrenaline.",
        goals: [
          "Je beschrijft de bouw van het hart en de dubbele bloedsomloop.",
          "Je legt uit hoe hartkleppen en de sinusknoop werken."
        ],
        cards: [
          { term: "Dubbele bloedsomloop", def: "Bloed stroomt via twee circuits: langs de longen én langs het lichaam." },
          { term: "Kleine (long)bloedsomloop", def: "Rechterkamer → longen → linkerboezem; hier neemt het bloed O2 op." },
          { term: "Grote (lichaams)bloedsomloop", def: "Linkerkamer → lichaam → rechterboezem." },
          { term: "Boezem (atrium)", def: "Holte die bloed ontvangt en naar de kamer pompt." },
          { term: "Kamer (ventrikel)", def: "Holte die bloed het lichaam of de longen in pompt; heeft een dikke spierwand." },
          { term: "Hartkleppen", def: "Kleppen die het bloed maar één kant op laten stromen." },
          { term: "Harttussenschot", def: "Wand die de linker- en rechterharthelft scheidt (geen menging)." },
          { term: "Sinusknoop", def: "De gangmaker die de hartslag op gang brengt (ritme)." }
        ],
        quiz: [
          { q: "Welke holte pompt bloed het lichaam in?", options: ["Rechterkamer", "Linkerkamer", "Linkerboezem", "Rechterboezem"], answer: 1, explain: "De linkerkamer pompt zuurstofrijk bloed de grote bloedsomloop (het lichaam) in." },
          { q: "Waar neemt het bloed zuurstof op?", options: ["In het lichaam", "In de longen (kleine bloedsomloop)", "In de lever", "In de nieren"], answer: 1, explain: "In de kleine bloedsomloop stroomt het bloed langs de longen en neemt daar O2 op." },
          { q: "Wat is de functie van hartkleppen?", options: ["Het hart sneller laten kloppen", "Bloed maar één kant op laten stromen", "Bloed zuurstof geven", "De hartspier voeden"], answer: 1, explain: "Hartkleppen voorkomen terugstroom: het bloed stroomt maar één richting op." },
          { q: "Wat doet de sinusknoop?", options: ["Bloed filteren", "De hartslag op gang brengen", "Zuurstof binden", "Kleppen sluiten"], answer: 1, explain: "De sinusknoop is de gangmaker die het ritme van de hartslag bepaalt." },
          { q: "Waarom heeft de linkerkamer een dikkere wand dan de rechter?", options: ["Hij is groter", "Hij moet bloed door het hele lichaam pompen (hogere druk)", "Hij ligt hoger", "Hij ontvangt meer bloed"], answer: 1, explain: "De linkerkamer moet tegen een hoge druk in bloed door het hele lichaam pompen." }
        ],
        sequences: [
          { title: "Weg van het bloed door hart en longen", steps: ["Lichaam → rechterboezem", "Rechterkamer", "Longslagader → longen (O2 op)", "Longader → linkerboezem", "Linkerkamer", "Aorta → lichaam"] }
        ]
      },
      {
        id: "2",
        title: "Bloedvaten, bloeddruk en stroomsnelheid",
        summary: "Er zijn drie soorten bloedvaten. Slagaders (arteriën) voeren bloed van het hart af; ze hebben een dikke, gespierde en elastische wand en een hoge bloeddruk die met de hartslag pulseert. Aders (venen) voeren bloed naar het hart toe; ze hebben een dunnere wand, een lage druk en aderkleppen die terugstromen tegengaan. Haarvaten (capillairen) hebben een wand van maar één cellaag, zodat er uitwisseling van stoffen met de weefsels mogelijk is.\n\nDe bloeddruk is het hoogst in de aorta en daalt geleidelijk richting de haarvaten. De stroomsnelheid is hoog in de aorta, het laagst in de haarvaten (samen hebben die de grootste doorsnede) — juist gunstig voor uitwisseling — en neemt in de aders weer wat toe richting het hart.",
        goals: [
          "Je beschrijft de bouw en functie van slagaders, aders en haarvaten.",
          "Je legt het verloop van bloeddruk en stroomsnelheid uit."
        ],
        cards: [
          { term: "Slagader (arterie)", def: "Voert bloed van het hart af; dikke, elastische, gespierde wand; hoge druk." },
          { term: "Ader (vene)", def: "Voert bloed naar het hart toe; dunnere wand, lage druk, met aderkleppen." },
          { term: "Haarvat (capillair)", def: "Vat met een wand van één cellaag; hier vindt uitwisseling met de weefsels plaats." },
          { term: "Aderklep", def: "Klep in aders die terugstromen van bloed voorkomt." },
          { term: "Bloeddruk", def: "De druk van het bloed op de vaatwand; hoog in de aorta, laag in de haarvaten." },
          { term: "Systolisch/diastolisch", def: "Bovendruk (kamer knijpt samen) en onderdruk (kamer ontspant)." },
          { term: "Stroomsnelheid", def: "De snelheid van het bloed; het laagst in de haarvaten (grootste totale doorsnede)." }
        ],
        quiz: [
          { q: "Welk bloedvat voert bloed van het hart af?", options: ["Ader", "Slagader", "Haarvat", "Lymfevat"], answer: 1, explain: "Slagaders (arteriën) voeren bloed van het hart af; aders voeren het aan." },
          { q: "Waar vindt uitwisseling van stoffen met de weefsels plaats?", options: ["In de slagaders", "In de aders", "In de haarvaten", "In het hart"], answer: 2, explain: "Haarvaten hebben een wand van één cellaag; daar wisselen stoffen uit met de weefsels." },
          { q: "Waar is de bloeddruk het hoogst?", options: ["In de haarvaten", "In de aorta", "In de aders", "In de longader"], answer: 1, explain: "De bloeddruk is het hoogst in de aorta en daalt richting de haarvaten." },
          { q: "Waarom is de stroomsnelheid het laagst in de haarvaten?", options: ["Ze zijn het langst", "Samen hebben ze de grootste doorsnede", "Ze liggen ver van het hart", "Ze hebben kleppen"], answer: 1, explain: "De gezamenlijke doorsnede van de haarvaten is het grootst; daardoor is de snelheid er het laagst (gunstig voor uitwisseling)." },
          { q: "Wat doen aderkleppen?", options: ["Bloed zuurstof geven", "Terugstromen van bloed voorkomen", "De druk verhogen", "Bloed filteren"], answer: 1, explain: "Aderkleppen zorgen dat het bloed in de aders niet terugstroomt." }
        ],
        sequences: []
      },
      {
        id: "3",
        title: "Bloed, weefselvloeistof en lymfe",
        summary: "Bloed bestaat uit bloedplasma en bloedcellen. Bloedplasma is water met opgeloste stoffen: voedingsstoffen, afvalstoffen, eiwitten en hormonen. De bloedcellen zijn: rode bloedcellen (erytrocyten), die met hemoglobine zuurstof vervoeren en geen celkern hebben; witte bloedcellen (leukocyten), die voor de afweer zorgen; en bloedplaatjes (trombocyten), die betrokken zijn bij de bloedstolling.\n\nIn de haarvaten wordt een deel van het plasma naar buiten geperst: dat is weefselvloeistof, die stoffen uitwisselt met de cellen. Het grootste deel keert terug in het bloed; de rest wordt via de lymfevaten als lymfe afgevoerd en komt uiteindelijk weer in het bloed. Lymfeknopen filteren de lymfe en spelen een rol bij de afweer.",
        goals: [
          "Je beschrijft de samenstelling en functies van bloed.",
          "Je legt het verband uit tussen bloed, weefselvloeistof en lymfe."
        ],
        cards: [
          { term: "Bloedplasma", def: "Vloeibaar deel van het bloed: water met o.a. voedingsstoffen, afvalstoffen, eiwitten en hormonen." },
          { term: "Rode bloedcel (erytrocyt)", def: "Cel zonder kern met hemoglobine; vervoert zuurstof." },
          { term: "Hemoglobine", def: "Ijzerhoudend eiwit in rode bloedcellen dat zuurstof bindt." },
          { term: "Witte bloedcel (leukocyt)", def: "Bloedcel die zorgt voor de afweer tegen ziekteverwekkers." },
          { term: "Bloedplaatje (trombocyt)", def: "Celfragment dat betrokken is bij de bloedstolling." },
          { term: "Weefselvloeistof", def: "Uit de haarvaten geperst plasma dat stoffen uitwisselt met de cellen." },
          { term: "Lymfe", def: "Weefselvloeistof die via de lymfevaten wordt afgevoerd en weer in het bloed komt." },
          { term: "Lymfeknoop", def: "Verdikking in het lymfestelsel die de lymfe filtert; betrokken bij de afweer." }
        ],
        quiz: [
          { q: "Wat vervoeren de rode bloedcellen?", options: ["Afvalstoffen", "Zuurstof (met hemoglobine)", "Antistoffen", "Hormonen"], answer: 1, explain: "Rode bloedcellen vervoeren met hemoglobine zuurstof; ze hebben geen kern." },
          { q: "Welke cellen zorgen voor de afweer?", options: ["Rode bloedcellen", "Witte bloedcellen", "Bloedplaatjes", "Plasma"], answer: 1, explain: "Witte bloedcellen (leukocyten) verzorgen de afweer." },
          { q: "Waarbij zijn bloedplaatjes betrokken?", options: ["Zuurstoftransport", "Bloedstolling", "Afweer", "Vertering"], answer: 1, explain: "Bloedplaatjes (trombocyten) spelen een rol bij de bloedstolling." },
          { q: "Wat is weefselvloeistof?", options: ["Bloed in de aders", "Uit de haarvaten geperst plasma dat cellen omspoelt", "Lymfe in de knopen", "Maagsap"], answer: 1, explain: "Weefselvloeistof is uit de haarvaten geperst plasma dat stoffen met de cellen uitwisselt." },
          { q: "Waar komt lymfe uiteindelijk terecht?", options: ["In de darm", "Weer in het bloed", "In de nieren", "In de longen"], answer: 1, explain: "Lymfe wordt via de lymfevaten afgevoerd en komt uiteindelijk weer in het bloed." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "tr-ex1",
        title: "Dikte van de hartwand",
        context: "Als je een hart doorsnijdt, zie je dat de wand van de linkerkamer veel dikker is dan die van de rechterkamer.",
        question: "Verklaar het verschil in wanddikte tussen de linker- en de rechterkamer. Gebruik in je antwoord de twee bloedsomlopen.",
        points: 2,
        model: [
          "De rechterkamer pompt bloed alleen naar de longen (kleine bloedsomloop), over een korte afstand en tegen een lage druk (1 p).",
          "De linkerkamer pompt bloed door de hele grote bloedsomloop (het lichaam) en moet daarvoor een veel hogere druk leveren, dus heeft hij een dikkere spierwand (1 p)."
        ]
      },
      {
        id: "tr-ex2",
        title: "Stroomsnelheid en uitwisseling",
        context: "In de haarvaten is de stroomsnelheid van het bloed veel lager dan in de aorta, hoewel de haarvaten heel dun zijn.",
        question: "Leg uit waarom de lage stroomsnelheid in de haarvaten gunstig is voor het lichaam.",
        points: 2,
        model: [
          "In de haarvaten vindt de uitwisseling van stoffen (O2, voeding, afvalstoffen) met de weefsels plaats (1 p).",
          "Doordat het bloed er langzaam stroomt, is er meer tijd voor deze uitwisseling, zodat die vollediger verloopt (1 p)."
        ]
      }
    ]
  },

  /* ===================== GASWISSELING EN UITSCHEIDING ===================== */
  {
    id: "gaswisseling",
    title: "Gaswisseling en uitscheiding",
    icon: "🫁",
    theme: "t-sky",
    domain: "Gaswisseling & uitscheiding",
    intro: "Je lichaam neemt zuurstof op, geeft koolstofdioxide af en verwijdert afvalstoffen. Je leert de bouw en werking van de longen (gaswisseling), de nieren (uitscheiding) en hoe deze organen de homeostase bewaken.",
    paragraphs: [
      {
        id: "1",
        title: "Ademhaling en gaswisseling",
        summary: "Ingeademde lucht gaat via neus/mond → keel → luchtpijp → bronchiën → bronchiolen → longblaasjes (alveoli). In de longblaasjes vindt de gaswisseling plaats: door diffusie gaat zuurstof (O2) naar het bloed en koolstofdioxide (CO2) van het bloed naar de longblaasjes. Het zeer grote oppervlak, de dunne wand (één cellaag) en de vele haarvaten maken dit efficiënt.\n\nBij het inademen trekt het middenrif samen (wordt plat) en gaan de ribben omhoog: het borstvolume neemt toe, de druk in de longen daalt en lucht stroomt naar binnen. Bij uitademen ontspant het middenrif. De ademhaling wordt geregeld door het ademhalingscentrum in de hersenstam, dat vooral reageert op de CO2-concentratie in het bloed: meer CO2 → sneller en dieper ademen.",
        goals: [
          "Je beschrijft de weg van de lucht en de gaswisseling in de longblaasjes.",
          "Je legt uit hoe de ademhalingsbewegingen en -regeling werken."
        ],
        cards: [
          { term: "Longblaasje (alveolus)", def: "Klein blaasje in de long met een dunne wand waar de gaswisseling plaatsvindt." },
          { term: "Gaswisseling", def: "Uitwisseling van O2 (naar bloed) en CO2 (uit bloed) in de longblaasjes." },
          { term: "Diffusie", def: "Verplaatsing van stoffen van hoge naar lage concentratie; drijft de gaswisseling." },
          { term: "Luchtpijp en bronchiën", def: "Buizen die de lucht van de keel naar de longblaasjes leiden." },
          { term: "Middenrif", def: "Spier onder de longen; samentrekken → inademen, ontspannen → uitademen." },
          { term: "Inademen/uitademen", def: "Borstvolume groter (druk lager) → lucht in; volume kleiner → lucht uit." },
          { term: "Ademhalingscentrum", def: "Deel van de hersenstam dat de ademhaling regelt, vooral op basis van CO2." },
          { term: "Groot oppervlak longblaasjes", def: "Zorgt samen met de dunne wand voor een snelle, efficiënte gaswisseling." }
        ],
        quiz: [
          { q: "Waar vindt de gaswisseling plaats?", options: ["In de luchtpijp", "In de longblaasjes", "In het middenrif", "In de bronchiën"], answer: 1, explain: "De gaswisseling (O2 in, CO2 uit) vindt plaats in de longblaasjes (alveoli)." },
          { q: "Door welk proces gaan O2 en CO2 door de wand?", options: ["Actief transport", "Diffusie", "Osmose van cellen", "Peristaltiek"], answer: 1, explain: "O2 en CO2 verplaatsen zich door diffusie (van hoge naar lage concentratie)." },
          { q: "Wat gebeurt er bij het inademen?", options: ["Middenrif ontspant", "Middenrif trekt samen en het borstvolume neemt toe", "De longen krimpen", "De druk in de longen stijgt"], answer: 1, explain: "Bij inademen trekt het middenrif samen; het borstvolume neemt toe en de druk daalt, dus stroomt lucht in." },
          { q: "Waarop reageert het ademhalingscentrum vooral?", options: ["Op de O2-concentratie", "Op de CO2-concentratie in het bloed", "Op de temperatuur", "Op de hartslag"], answer: 1, explain: "Het ademhalingscentrum in de hersenstam reageert vooral op de CO2-concentratie: meer CO2 → sneller ademen." },
          { q: "Waardoor is de gaswisseling in de longen efficiënt?", options: ["Dikke wand", "Groot oppervlak en dunne wand met veel haarvaten", "Weinig bloedvaten", "Trage luchtstroom"], answer: 1, explain: "Het grote oppervlak, de dunne wand (één cellaag) en de vele haarvaten maken de gaswisseling efficiënt." }
        ],
        sequences: []
      },
      {
        id: "2",
        title: "De nieren en uitscheiding",
        summary: "Uitscheiding is het verwijderen van afvalstoffen uit het bloed. De nieren verwijderen vooral ureum (afbraakproduct van eiwitten), overtollig water en zouten. De functionele eenheid van de nier is de nefron. In het nierkapsel (kapsel van Bowman) wordt bloed onder druk gefilterd: bij deze ultrafiltratie gaan kleine moleculen (water, glucose, zouten, ureum) de nierbuis in, terwijl bloedcellen en grote eiwitten in het bloed achterblijven.\n\nIn de nierbuisjes worden nuttige stoffen weer teruggeresorbeerd naar het bloed: (bijna) alle glucose, veel water en een deel van de zouten. Wat overblijft is urine (vooral water, ureum en zouten). De urine gaat via de urineleiders naar de urineblaas. Naast de nieren scheiden ook de longen (CO2 en water), de huid (zweet) en de lever (gal) stoffen uit.",
        goals: [
          "Je beschrijft hoe de nier bloed filtert en urine vormt.",
          "Je noemt de uitscheidingsorganen en hun afvalstoffen."
        ],
        cards: [
          { term: "Uitscheiding", def: "Het verwijderen van afvalstoffen uit het bloed/lichaam." },
          { term: "Nier / nefron", def: "Uitscheidingsorgaan; de nefron is de functionele eenheid die urine vormt." },
          { term: "Nierkapsel (kapsel van Bowman)", def: "Begin van de nefron waar het bloed wordt gefilterd." },
          { term: "Ultrafiltratie", def: "Filtratie onder druk: kleine moleculen eruit, bloedcellen en eiwitten blijven achter." },
          { term: "Terugresorptie", def: "Opname van nuttige stoffen (glucose, water, zouten) uit de nierbuis terug in het bloed." },
          { term: "Ureum", def: "Afvalstof uit de afbraak van eiwitten (ammoniak), uitgescheiden via de nieren." },
          { term: "Urine", def: "Wat na terugresorptie overblijft: water, ureum en zouten." },
          { term: "Uitscheidingsorganen", def: "Nieren (urine), longen (CO2/water), huid (zweet) en lever (gal)." }
        ],
        quiz: [
          { q: "Wat is de belangrijkste afvalstof die de nieren verwijderen?", options: ["Glucose", "Ureum", "Zuurstof", "Eiwitten"], answer: 1, explain: "De nieren verwijderen vooral ureum (afbraak van eiwitten), plus overtollig water en zouten." },
          { q: "Wat gebeurt er bij ultrafiltratie?", options: ["Urine wordt geconcentreerd", "Bloed wordt onder druk gefilterd (kleine moleculen eruit)", "Glucose wordt gemaakt", "CO2 wordt uitgeademd"], answer: 1, explain: "Bij ultrafiltratie in het nierkapsel gaan kleine moleculen de nierbuis in; bloedcellen en eiwitten blijven achter." },
          { q: "Wat gebeurt er met glucose in een gezonde nier?", options: ["Het verdwijnt in de urine", "Het wordt (bijna) volledig teruggeresorbeerd", "Het wordt afgebroken tot ureum", "Het blijft in het kapsel"], answer: 1, explain: "Glucose is nuttig en wordt in de nierbuisjes (bijna) volledig teruggeresorbeerd naar het bloed." },
          { q: "Welk orgaan scheidt CO2 uit?", options: ["De nieren", "De longen", "De lever", "De darm"], answer: 1, explain: "De longen scheiden CO2 (en water) uit; de nieren scheiden ureum uit." },
          { q: "Waar wordt urine opgeslagen?", options: ["In de nier", "In de urineblaas", "In de lever", "In de darm"], answer: 1, explain: "Urine gaat via de urineleiders naar de urineblaas." }
        ],
        sequences: [
          { title: "Vorming van urine in de nefron", steps: ["Bloed komt in het nierkapsel", "Ultrafiltratie: kleine moleculen naar de nierbuis", "Terugresorptie van glucose, water en zouten", "Overblijvende vloeistof = urine", "Urine via urineleider naar de blaas"] }
        ]
      },
      {
        id: "3",
        title: "Homeostase: osmoregulatie en thermoregulatie",
        summary: "De nieren zijn belangrijk voor de homeostase van het inwendige milieu. Ze regelen de hoeveelheid water en zouten: de osmoregulatie. Bij een tekort aan water maakt de hypofyse meer van het hormoon ADH; dat laat de nierbuizen extra water terugresorberen, zodat je weinig, geconcentreerde urine maakt. Bij veel water komt er weinig ADH vrij en produceer je veel, verdunde urine.\n\nDe huid draagt bij aan de thermoregulatie. Bij warmte verwijden de huidbloedvaten en ga je zweten; verdampend zweet onttrekt warmte aan het lichaam. Bij kou vernauwen de huidbloedvaten en ga je rillen. Zo houdt het lichaam de temperatuur, het watergehalte en het zoutgehalte binnen nauwe grenzen, via negatieve terugkoppeling.",
        goals: [
          "Je legt uit hoe de nieren met ADH het watergehalte regelen (osmoregulatie).",
          "Je legt uit hoe de huid bijdraagt aan de thermoregulatie."
        ],
        cards: [
          { term: "Homeostase", def: "Het handhaven van een constant inwendig milieu (temperatuur, water, zouten)." },
          { term: "Osmoregulatie", def: "Het regelen van het water- en zoutgehalte van het lichaam." },
          { term: "ADH", def: "Hormoon uit de hypofyse dat de nierbuizen meer water laat terugresorberen." },
          { term: "Terugresorptie van water", def: "Opname van water uit de nierbuis terug in het bloed; bepaalt hoe geconcentreerd de urine is." },
          { term: "Thermoregulatie", def: "Het constant houden van de lichaamstemperatuur." },
          { term: "Zweten", def: "Afgifte van zweet; verdamping onttrekt warmte aan het lichaam (koelt af)." },
          { term: "Negatieve terugkoppeling", def: "Terugkoppeling die een afwijking corrigeert richting de streefwaarde." },
          { term: "Inwendig milieu", def: "De vloeistof rond de cellen (weefselvloeistof/bloed) die constant gehouden wordt." }
        ],
        quiz: [
          { q: "Wat regelt de osmoregulatie?", options: ["De lichaamstemperatuur", "Het water- en zoutgehalte", "De bloedglucose", "De hartslag"], answer: 1, explain: "Osmoregulatie is het regelen van het water- en zoutgehalte van het lichaam." },
          { q: "Wat doet het hormoon ADH?", options: ["Verlaagt de bloedglucose", "Laat de nieren meer water terugresorberen", "Verhoogt de temperatuur", "Maakt urine aan"], answer: 1, explain: "ADH laat de nierbuizen extra water terugresorberen, zodat je weinig, geconcentreerde urine maakt." },
          { q: "Wat gebeurt er als je veel water drinkt?", options: ["Veel ADH, weinig urine", "Weinig ADH, veel verdunde urine", "Meer zweten", "Geen effect op de urine"], answer: 1, explain: "Bij veel water komt er weinig ADH vrij, zodat je veel, verdunde urine produceert." },
          { q: "Hoe koelt zweten je af?", options: ["Het isoleert de huid", "Verdampend zweet onttrekt warmte aan het lichaam", "Het verwarmt de huid", "Het vernauwt de bloedvaten"], answer: 1, explain: "Verdampend zweet onttrekt warmte aan de huid, waardoor je afkoelt." },
          { q: "Homeostase werkt meestal via...", options: ["Positieve terugkoppeling", "Negatieve terugkoppeling", "Toeval", "Diffusie"], answer: 1, explain: "Homeostase gebruikt vooral negatieve terugkoppeling: afwijkingen worden gecorrigeerd." }
        ],
        sequences: []
      }
    ],
    exams: [
      {
        id: "gu-ex1",
        title: "Snellere ademhaling bij inspanning",
        context: "Als je hard sport, gaan je spieren meer verbranden. Je gaat vanzelf sneller en dieper ademen, ook al denk je er niet bij na.",
        question: "Leg uit hoe het komt dat je bij inspanning automatisch sneller gaat ademen. Gebruik in je antwoord CO2 en het ademhalingscentrum.",
        points: 3,
        model: [
          "Bij inspanning verbranden de spieren meer, waardoor er meer CO2 in het bloed ontstaat (1 p).",
          "Het ademhalingscentrum in de hersenstam meet de verhoogde CO2-concentratie (1 p).",
          "Het ademhalingscentrum laat je daardoor sneller en dieper ademen, zodat er meer O2 wordt opgenomen en CO2 wordt afgevoerd (1 p)."
        ]
      },
      {
        id: "gu-ex2",
        title: "Weinig gedronken, donkere urine",
        context: "Iemand heeft een hele dag intensief gesport en weinig gedronken. Aan het eind van de dag plast hij weinig en is zijn urine donker en geconcentreerd.",
        question: "Leg met het hormoon ADH uit waarom de urine dan geconcentreerd is. Gebruik het begrip terugresorptie.",
        points: 2,
        model: [
          "Door het watertekort geeft de hypofyse meer ADH af (1 p).",
          "ADH zorgt dat de nierbuizen meer water terugresorberen naar het bloed, zodat er weinig, geconcentreerde (donkere) urine overblijft (1 p)."
        ]
      }
    ]
  }
];

/* ============================================================
   CURRICULUM — de échte hoofdstukindeling per niveau én methode,
   met de juiste hoofdstuknummers en -titels (bovenbouw):
     • Biologie voor Jou (7e editie) — thema-nummering
     • Nectar (editie 4.1) — doorlopende hoofdstuknummering
   Elk hoofdstuk verwijst met 'topic' naar de uitgewerkte leerstof
   (of null als de inhoud nog in ontwikkeling is).
   Bron: officiële inhoudsopgaven/thema-overzichten van de methodes.
   ============================================================ */
const CURRICULUM = {
  havo: {
    id: "havo",
    name: "HAVO",
    tagline: "Bovenbouw (4–5 havo) · schoolexamen & centraal examen",
    methodes: {
      bvj: {
        editie: "7e editie",
        chapters: [
          { num: "1", title: "Inleiding in de biologie", topic: null },
          { num: "2", title: "Voortplanting en seksualiteit", topic: "voortplanting" },
          { num: "3", title: "Genetica", topic: "erfelijkheid" },
          { num: "4", title: "Evolutie", topic: "evolutie" },
          { num: "5", title: "Regeling", topic: "zenuwstelsel" },
          { num: "6", title: "Waarneming en gedrag", topic: "waarnemen" },
          { num: "7", title: "Ecologie en milieu", topic: "ecologie" },
          { num: "8", title: "Stofwisseling in de cel", topic: "stofwisseling" },
          { num: "9", title: "DNA", topic: "dna" },
          { num: "10", title: "Voeding en vertering", topic: "vertering" },
          { num: "11", title: "Transport", topic: "transport" },
          { num: "12", title: "Gaswisseling en uitscheiding", topic: "gaswisseling" },
          { num: "13", title: "Afweer", topic: "afweer" },
          { num: "14", title: "Samenhang in de biologie", topic: null }
        ]
      },
      nectar: {
        editie: "editie 4.1",
        chapters: [
          { num: "1", title: "Gedrag", topic: null },
          { num: "2", title: "Cellen", topic: null },
          { num: "3", title: "Onderzoek doen", topic: null },
          { num: "4", title: "Voortplanting en seksualiteit", topic: "voortplanting" },
          { num: "5", title: "Voeding en energie", topic: "stofwisseling" },
          { num: "6", title: "Voeding, vertering en gezondheid", topic: "vertering" },
          { num: "7", title: "Soorten en relaties", topic: null },
          { num: "8", title: "Ecosystemen en evenwicht", topic: "ecologie" },
          { num: "9", title: "Erfelijkheid", topic: "erfelijkheid" },
          { num: "10", title: "Evolutie", topic: "evolutie" },
          { num: "11", title: "Transport", topic: "transport" },
          { num: "12", title: "Gezondheid", topic: "afweer" },
          { num: "13", title: "Gaswisseling en uitscheiding", topic: "gaswisseling" },
          { num: "14", title: "Reageren", topic: "zenuwstelsel" },
          { num: "15", title: "Op weg naar het examen", topic: null }
        ]
      }
    }
  },
  vwo: {
    id: "vwo",
    name: "VWO",
    tagline: "Bovenbouw (4–6 vwo) · schoolexamen & centraal examen",
    methodes: {
      bvj: {
        editie: "7e editie",
        chapters: [
          { num: "1", title: "Inleiding in de biologie", topic: null },
          { num: "2", title: "Voortplanting en seksualiteit", topic: "voortplanting" },
          { num: "3", title: "Genetica", topic: "erfelijkheid" },
          { num: "4", title: "Evolutie", topic: "evolutie" },
          { num: "5", title: "Ecologie", topic: "ecologie" },
          { num: "6", title: "Mens en milieu", topic: null },
          { num: "7", title: "Regeling", topic: "hormonen" },
          { num: "8", title: "Waarneming en gedrag", topic: "waarnemen" },
          { num: "9", title: "Stofwisseling in de cel", topic: "stofwisseling" },
          { num: "10", title: "DNA", topic: "dna" },
          { num: "11", title: "Planten", topic: null },
          { num: "12", title: "Voeding en vertering", topic: "vertering" },
          { num: "13", title: "Transport", topic: "transport" },
          { num: "14", title: "Gaswisseling en uitscheiding", topic: "gaswisseling" },
          { num: "15", title: "Afweer", topic: "afweer" },
          { num: "16", title: "Samenhang in de biologie", topic: null }
        ]
      },
      nectar: {
        editie: "editie 4.1",
        chapters: [
          { num: "1", title: "Gedrag", topic: null },
          { num: "2", title: "Cel en leven", topic: null },
          { num: "3", title: "Wetenschappelijk onderzoek", topic: null },
          { num: "4", title: "Voortplanting", topic: "voortplanting" },
          { num: "5", title: "Erfelijkheid", topic: "erfelijkheid" },
          { num: "6", title: "Soorten en populaties", topic: null },
          { num: "7", title: "Evolutie", topic: "evolutie" },
          { num: "8", title: "Kenmerken van ecosystemen", topic: "ecologie" },
          { num: "9", title: "Systeem Aarde en de mens", topic: null },
          { num: "10", title: "Bloedsomloop", topic: "transport" },
          { num: "11", title: "Voeding en vertering", topic: "vertering" },
          { num: "12", title: "Gaswisseling en uitscheiding", topic: "gaswisseling" },
          { num: "13", title: "Hormonen", topic: "hormonen" },
          { num: "14", title: "Zenuwstelsel", topic: "zenuwstelsel" },
          { num: "15", title: "Waarnemen", topic: "waarnemen" },
          { num: "16", title: "Afweer", topic: "afweer" },
          { num: "17", title: "DNA", topic: "dna" },
          { num: "18", title: "Eiwitten", topic: "stofwisseling" },
          { num: "19", title: "Sport", topic: null },
          { num: "20", title: "Planten", topic: null }
        ]
      }
    }
  }
};

/* ---------- globaal beschikbaar maken ---------- */
window.METHODS = METHODS;
window.TOPICS = TOPICS;
window.CURRICULUM = CURRICULUM;
window.getTopic = (id) => TOPICS.find(t => t.id === id) || null;
