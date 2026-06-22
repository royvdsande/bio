/* ============================================================
   BioQuest – Leerstof SE Biologie (H14, H15, H16)
   Inhoud gebaseerd op de drie hoofdstukken.
   Structuur:
     COURSE.worlds[] -> { id, title, icon, theme, paragraphs[] }
     paragraph -> { id, title, goals[], cards[], quiz[], sequences[] }
       card     -> { term, def }
       quiz     -> { q, options[], answer(index), explain }
       sequence -> { title, steps[] }  (steps in juiste volgorde)
   ============================================================ */

const COURSE = {
  title: "BioQuest",
  subtitle: "SE Biologie · Zenuwstelsel · Waarnemen · Afweer",
  worlds: [
    /* ===================== HOOFDSTUK 14 ===================== */
    {
      id: "h14",
      title: "Zenuwstelsel",
      icon: "🧠",
      theme: "world-brain",
      paragraphs: [
        {
          id: "14.1",
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
          id: "14.2",
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
          id: "14.3",
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
          id: "14.4",
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
          id: "14.5",
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
      ]
    },

    /* ===================== HOOFDSTUK 15 ===================== */
    {
      id: "h15",
      title: "Waarnemen",
      icon: "👁️",
      theme: "world-senses",
      paragraphs: [
        {
          id: "15.1",
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
          id: "15.2",
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
          id: "15.3",
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
          id: "15.4",
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
          id: "15.5",
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
      ]
    },

    /* ===================== HOOFDSTUK 16 ===================== */
    {
      id: "h16",
      title: "Afweer",
      icon: "🛡️",
      theme: "world-immune",
      paragraphs: [
        {
          id: "16.1",
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
          id: "16.2",
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
          id: "16.3",
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
          id: "16.4",
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
          id: "16.5",
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
      ]
    }
  ]
};

// Maak globaal beschikbaar
window.COURSE = COURSE;
