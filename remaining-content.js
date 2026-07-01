/* ============================================================
   Aanvullende hoofdstukken
   ------------------------------------------------------------
   Vult de resterende curriculum-hoofdstukken met theorie,
   flitskaarten, oefenvragen en examenopgaven.

   Let op: video's blijven methodegebonden via nectar-videos.js.
   Deze topics bevatten daarom geen videodata, behalve dat het
   bestaande Nectar-topic "gedrag" zijn videoleerlijn behoudt.
   ============================================================ */
(function () {
  "use strict";

  const topics = window.TOPICS || [];
  const curriculum = window.CURRICULUM || {};

  const card = (term, def) => ({ term, def });
  const quiz = (q, options, answer, explain) => ({ q, options, answer, explain });
  const paragraph = (id, title, summary, goals, cards, quizItems, sequences = []) => ({
    id,
    title,
    summary,
    goals,
    cards,
    quiz: quizItems,
    sequences
  });
  const exam = (id, title, context, question, points, model) => ({
    id,
    title,
    context,
    question,
    points,
    model
  });

  function upsertTopic(topic) {
    const existing = topics.find(t => t.id === topic.id);
    if (existing) Object.assign(existing, topic);
    else topics.push(topic);
  }

  function setTopic(levelId, methodId, num, topicId) {
    const level = curriculum[levelId];
    const method = level && level.methodes && level.methodes[methodId];
    const chapter = method && method.chapters && method.chapters.find(ch => ch.num === num);
    if (chapter) chapter.topic = topicId;
  }

  upsertTopic({
    id: "gedrag",
    title: "Gedrag",
    icon: "🐾",
    theme: "t-teal",
    domain: "Gedrag",
    intro: "Gedrag is alles wat een dier of mens doet als reactie op prikkels. Je leert hoe gedrag ontstaat, hoe je gedrag objectief onderzoekt, hoe communicatie werkt en hoe aangeboren en aangeleerd gedrag samen gedragspatronen vormen.",
    paragraphs: [
      paragraph(
        "1",
        "Gedrag en prikkels",
        "Gedrag bestaat uit waarneembare handelingen van een organisme. Het ontstaat door een combinatie van uitwendige prikkels, inwendige prikkels en motivatie. Een prikkel is alleen effectief als die sterk genoeg is en past bij de toestand van het dier.\n\nGedrag heeft vaak een functie: voedsel vinden, gevaar vermijden, een territorium verdedigen, soortgenoten herkennen of voortplanten. Biologen beschrijven gedrag in gedragssystemen, zoals voedingsgedrag, sociaal gedrag of voortplantingsgedrag. Een gedragssysteem bestaat uit kleinere gedragselementen die je afzonderlijk kunt waarnemen.",
        [
          "Je legt uit hoe prikkels, motivatie en respons samen gedrag veroorzaken.",
          "Je beschrijft de functie van gedrag voor overleving en voortplanting.",
          "Je onderscheidt gedragssystemen en gedragselementen."
        ],
        [
          card("Gedrag", "Alle waarneembare handelingen van een organisme."),
          card("Prikkel", "Invloed uit de omgeving of uit het lichaam waarop een organisme kan reageren."),
          card("Uitwendige prikkel", "Prikkel van buiten het lichaam, zoals licht, geur, geluid of aanraking."),
          card("Inwendige prikkel", "Prikkel uit het lichaam, zoals honger, dorst, hormonen of pijn."),
          card("Respons", "Reactie van een organisme op een prikkel."),
          card("Motivatie", "De inwendige bereidheid om op een prikkel te reageren."),
          card("Gedragssysteem", "Groep gedragselementen met dezelfde functie, bijvoorbeeld voedselgedrag."),
          card("Gedragselement", "Kleine, duidelijk herkenbare handeling binnen een gedragssysteem.")
        ],
        [
          quiz("Welke combinatie bepaalt vooral of een dier gedrag vertoont?", ["Alleen erfelijkheid", "Prikkels en motivatie", "Alleen toeval", "Alleen de grootte van het dier"], 1, "Een prikkel leidt pas tot gedrag als de motivatie en omstandigheden daarvoor aanwezig zijn."),
          quiz("Wat is een voorbeeld van een inwendige prikkel?", ["Daglicht", "Honger", "Het geluid van een roofdier", "De geur van voedsel"], 1, "Honger ontstaat in het lichaam en verhoogt de motivatie om voedselzoekgedrag te vertonen."),
          quiz("Waarom heeft baltsgedrag een biologische functie?", ["Het kost geen energie", "Het vergroot de kans op voortplanting", "Het voorkomt alle predatie", "Het maakt dieren altijd sterker"], 1, "Balts helpt partners herkennen en kiezen, waardoor succesvolle voortplanting waarschijnlijker wordt."),
          quiz("Wat is een gedragselement?", ["Een complete levenscyclus", "Een klein herkenbaar onderdeel van gedrag", "Een orgaanstelsel", "Een erfelijke ziekte"], 1, "Gedragselementen zijn losse handelingen die je in een ethogram kunt noteren.")
        ],
        [
          { title: "Van prikkel naar gedrag", steps: ["Uitwendige of inwendige prikkel", "Zintuigcellen nemen de prikkel waar", "Zenuwstelsel verwerkt informatie", "Motivatie bepaalt de reactie", "Respons: zichtbaar gedrag"] }
        ]
      ),
      paragraph(
        "2",
        "Gedrag onderzoeken",
        "Gedragsonderzoek moet objectief zijn: je beschrijft wat je ziet, niet wat je denkt dat het dier voelt. Een ethogram is een lijst met gedragselementen en hun afkortingen. Met een protocol noteer je wanneer en hoe vaak gedragselementen voorkomen.\n\nEen goed onderzoek heeft een duidelijke onderzoeksvraag, een vaste observatiemethode en voldoende herhaling. Door frequentie, duur en volgorde van gedragselementen te vergelijken kun je patronen vinden zonder meteen een voorbarige conclusie te trekken.",
        [
          "Je gebruikt een ethogram en protocol om gedrag objectief vast te leggen.",
          "Je onderscheidt beschrijven, meten en interpreteren.",
          "Je legt uit waarom herhaling en vaste observatieregels nodig zijn."
        ],
        [
          card("Ethogram", "Lijst met objectief omschreven gedragselementen en afkortingen."),
          card("Protocol", "Tabel of verslag waarin staat welk gedrag op welk moment is waargenomen."),
          card("Objectief", "Beschrijving zonder mening of menselijke interpretatie."),
          card("Frequentie", "Aantal keren dat een gedragselement voorkomt."),
          card("Duur", "Hoe lang een gedragselement aanhoudt."),
          card("Observatiemethode", "Vaste manier waarop je waarnemingen verzamelt."),
          card("Steekproef", "De groep waarnemingen of organismen waarop je meting is gebaseerd."),
          card("Interpretatie", "Uitleg die je geeft aan de gemeten waarnemingen.")
        ],
        [
          quiz("Welke zin is het meest objectief?", ["De hond is jaloers", "De hond blaft drie keer", "De hond wil aandacht", "De hond vindt het oneerlijk"], 1, "Objectief beschrijven betekent dat een andere waarnemer hetzelfde kan zien en noteren."),
          quiz("Waarvoor gebruik je een ethogram?", ["Om DNA te lezen", "Om gedragselementen eenduidig te beschrijven", "Om bloedgroepen te bepalen", "Om energie te berekenen"], 1, "Een ethogram voorkomt dat waarnemers verschillende namen gebruiken voor hetzelfde gedrag."),
          quiz("Wat noteer je in een protocol?", ["Alleen de conclusie", "Waargenomen gedrag met tijdstip of telling", "Alleen de hypothese", "Alleen de namen van dieren"], 1, "Het protocol bevat de ruwe waarnemingen waarmee je later kunt rekenen en vergelijken."),
          quiz("Waarom is herhaling belangrijk bij gedragsonderzoek?", ["Dan wordt de uitkomst betrouwbaarder", "Dan verandert erfelijk gedrag", "Dan verdwijnen prikkels altijd", "Dan heb je geen ethogram nodig"], 0, "Met meer waarnemingen is de kans kleiner dat je conclusie door toeval of een afwijkend moment komt.")
        ]
      ),
      paragraph(
        "3",
        "Communicatie en sociaal gedrag",
        "Communicatie is informatieoverdracht tussen organismen. Dat gebeurt met signalen zoals geurstoffen, geluiden, kleuren, houdingen of bewegingen. Een signaal kan een sleutelprikkel zijn: een prikkel die een vaste reactie oproept. Soms werkt een overdreven prikkel sterker dan de natuurlijke prikkel; dat heet een supernormale prikkel.\n\nSociaal gedrag speelt een rol bij samenwerking, rangorde, territorium, balts en broedzorg. Veel sociaal gedrag is geritualiseerd: gevaarlijke handelingen zijn omgevormd tot herkenbare signalen, waardoor conflicten minder vaak tot verwonding leiden.",
        [
          "Je legt uit hoe signalen informatie overdragen tussen organismen.",
          "Je herkent sleutelprikkels, supernormale prikkels en ritueel gedrag.",
          "Je beschrijft functies van sociaal gedrag."
        ],
        [
          card("Communicatie", "Informatieoverdracht tussen organismen via signalen."),
          card("Signaal", "Prikkel met informatie voor een ander organisme."),
          card("Sleutelprikkel", "Prikkel die een vaste, vaak aangeboren reactie oproept."),
          card("Supernormale prikkel", "Overdreven prikkel die een sterkere reactie oproept dan de natuurlijke prikkel."),
          card("Sociaal gedrag", "Gedrag tussen soortgenoten."),
          card("Ritueel gedrag", "Vast gedragspatroon dat als signaal werkt en conflicten kan beperken."),
          card("Territoriumgedrag", "Gedrag waarmee een dier een gebied afbakent en verdedigt."),
          card("Baltsgedrag", "Gedrag waarmee soortgenoten elkaar als partner herkennen en paringsbereidheid tonen.")
        ],
        [
          quiz("Wat is communicatie bij dieren?", ["Alleen spreken", "Informatieoverdracht via signalen", "Alleen vechten", "Het maken van glucose"], 1, "Signalen kunnen visueel, chemisch, auditief of via aanraking worden overgedragen."),
          quiz("Wat is een sleutelprikkel?", ["Een willekeurige beweging", "Een prikkel die een vaste reactie oproept", "Een prikkel zonder effect", "Een aangeleerde straf"], 1, "Een sleutelprikkel werkt als een herkenbaar signaal waarop een dier sterk reageert."),
          quiz("Waarom is ritueel gedrag nuttig bij conflicten?", ["Het kan verwondingen voorkomen", "Het stopt alle voortplanting", "Het verwijdert alle predatoren", "Het verlaagt altijd de motivatie"], 0, "Dieren kunnen dreigen of rangorde tonen zonder direct een riskant gevecht aan te gaan."),
          quiz("Welke situatie past bij een supernormale prikkel?", ["Een vogel kiest een overdreven groot kunstei", "Een dier ademt sneller", "Een plant sluit huidmondjes", "Een bacterie deelt zich"], 0, "Een supernormale prikkel is overdreven en lokt daardoor een extra sterke reactie uit.")
        ]
      ),
      paragraph(
        "4",
        "Aangeboren en aangeleerd gedrag",
        "Aangeboren gedrag ontstaat door erfelijke aanleg en is bij de geboorte of later in de ontwikkeling aanwezig zonder oefening. Aangeleerd gedrag ontstaat door ervaring. Dieren leren door gewenning, inprenting, klassieke conditionering, operante conditionering, trial-and-error, sociaal leren en inzicht.\n\nBij leren verandert de reactie op prikkels. Dat vergroot de overlevingskans, omdat een dier zijn gedrag kan aanpassen aan de omgeving. Bij mensen speelt cultuur een grote rol: kennis en gewoonten worden doorgegeven binnen groepen.",
        [
          "Je onderscheidt aangeboren en aangeleerd gedrag.",
          "Je legt vormen van leren uit met voorbeelden.",
          "Je beschrijft hoe ervaring gedrag kan aanpassen."
        ],
        [
          card("Aangeboren gedrag", "Gedrag dat vooral door erfelijke aanleg wordt bepaald en geen voorafgaande oefening nodig heeft."),
          card("Aangeleerd gedrag", "Gedrag dat verandert door ervaring."),
          card("Gewenning", "Afname van reactie op een herhaalde, onbelangrijke prikkel."),
          card("Inprenting", "Leren in een gevoelige periode, vaak kort na de geboorte."),
          card("Klassieke conditionering", "Leren door twee prikkels aan elkaar te koppelen."),
          card("Operante conditionering", "Leren door beloning of straf na gedrag."),
          card("Trial-and-error", "Leren door uitproberen en fouten maken."),
          card("Inzicht", "Een probleem oplossen door relaties te overzien, zonder alle stappen toevallig uit te proberen.")
        ],
        [
          quiz("Wat is gewenning?", ["Sterker reageren op elke prikkel", "Minder reageren op een herhaalde onbelangrijke prikkel", "Alleen leren door straf", "Een vaste erfelijke reflex"], 1, "Bij gewenning neemt de reactie af doordat de prikkel geen belangrijke betekenis blijkt te hebben."),
          quiz("Welke vorm van leren hoort bij Pavlovs honden?", ["Klassieke conditionering", "Inprenting", "Inzicht", "Territoriumgedrag"], 0, "De honden leerden een neutrale prikkel te koppelen aan voedsel."),
          quiz("Wat is operante conditionering?", ["Leren door gevolgen van gedrag", "Leren zonder prikkels", "Alleen aangeboren gedrag", "Het kopieren van DNA"], 0, "Gedrag dat beloond wordt, wordt vaker vertoond; gedrag met nadelige gevolgen minder vaak."),
          quiz("Waarom kan sociaal leren voordelig zijn?", ["Je hoeft niet alles zelf uit te proberen", "Het verhindert alle mutaties", "Het maakt fotosynthese mogelijk", "Het verlaagt de lichaamstemperatuur altijd"], 0, "Door gedrag van soortgenoten te observeren kan een dier sneller bruikbaar gedrag leren.")
        ],
        [
          { title: "Klassieke conditionering", steps: ["Neutrale prikkel", "Neutrale prikkel samen met voedsel", "Herhaling", "Neutrale prikkel wordt voorwaardelijke prikkel", "Voorwaardelijke reactie"] }
        ]
      )
    ],
    exams: [
      exam(
        "gd-ex1",
        "Objectief gedragsonderzoek",
        "Een leerling observeert kippen op het schoolplein. In haar aantekeningen staat: 'Kip A is boos en pest kip B.'",
        "Leg uit waarom deze notitie niet geschikt is als objectieve waarneming en geef een betere notitie voor in een protocol.",
        2,
        [
          "De notitie bevat interpretaties over emoties of bedoelingen, zoals boos en pesten, en is daardoor niet objectief (1 p).",
          "Een betere notitie beschrijft waarneembaar gedrag, bijvoorbeeld: Kip A pikt Kip B drie keer in de nek / Kip B loopt daarna weg (1 p)."
        ]
      ),
      exam(
        "gd-ex2",
        "Leren bij een hond",
        "Een hond krijgt steeds een koekje nadat hij is gaan zitten op commando. Na een paar dagen gaat hij sneller zitten wanneer hij het commando hoort.",
        "Welke vorm van leren is dit? Leg je antwoord uit met beloning en gedrag.",
        2,
        [
          "Dit is operante conditionering (1 p).",
          "Het gedrag zitten wordt gevolgd door een beloning, waardoor de kans groter wordt dat de hond dit gedrag opnieuw vertoont bij het commando (1 p)."
        ]
      )
    ]
  });

  upsertTopic({
    id: "inleiding-biologie",
    title: "Inleiding in de biologie",
    icon: "🧬",
    theme: "t-green",
    domain: "Biologie als systeem",
    intro: "Biologie onderzoekt leven op verschillende niveaus: van moleculen en cellen tot ecosystemen en de biosfeer. Je leert de basisbegrippen waarmee je biologische verschijnselen kunt beschrijven en verklaren.",
    paragraphs: [
      paragraph(
        "1",
        "Leven en organisatieniveaus",
        "Levende organismen vertonen levensverschijnselen zoals stofwisseling, groei, ontwikkeling, voortplanting, reageren op prikkels en homeostase. Een organisme bestaat uit onderdelen die samenwerken. Biologen bekijken die samenwerking op organisatieniveaus: molecuul, organel, cel, weefsel, orgaan, orgaanstelsel, organisme, populatie, ecosysteem en biosfeer.\n\nBij elk hoger niveau ontstaan nieuwe eigenschappen. Een hartcel kan samentrekken, maar pas een hart als orgaan kan bloed rondpompen. Door niveaus te herkennen kun je biologische vragen precieser beantwoorden.",
        [
          "Je noemt levensverschijnselen van organismen.",
          "Je ordent biologische verschijnselen op organisatieniveaus.",
          "Je legt uit dat hogere organisatieniveaus nieuwe eigenschappen hebben."
        ],
        [
          card("Levensverschijnselen", "Kenmerken van leven, zoals stofwisseling, groei, voortplanting en reageren op prikkels."),
          card("Organisatieniveau", "Schaal waarop je biologische systemen bekijkt, van molecuul tot biosfeer."),
          card("Cel", "Kleinste levende eenheid van een organisme."),
          card("Weefsel", "Groep cellen met dezelfde bouw en functie."),
          card("Orgaan", "Deel van een organisme met een specifieke functie, opgebouwd uit meerdere weefsels."),
          card("Orgaanstelsel", "Groep organen die samenwerken aan een grote taak."),
          card("Populatie", "Groep individuen van dezelfde soort in hetzelfde gebied."),
          card("Ecosysteem", "Alle organismen in een gebied samen met hun abiotische omgeving.")
        ],
        [
          quiz("Wat is het kleinste levende organisatieniveau?", ["Molecuul", "Organel", "Cel", "Weefsel"], 2, "Een cel is de kleinste eenheid die alle kenmerken van leven kan vertonen."),
          quiz("Welke reeks staat van klein naar groot?", ["Orgaan - cel - weefsel", "Cel - weefsel - orgaan", "Ecosysteem - populatie - organisme", "Biosfeer - orgaan - molecuul"], 1, "Cellen vormen weefsels, weefsels vormen organen."),
          quiz("Wat is homeostase?", ["Het stabiel houden van het inwendige milieu", "Het maken van geslachtscellen", "Het uitsterven van soorten", "Het vormen van fossielen"], 0, "Homeostase betekent dat waarden zoals temperatuur, pH en glucose binnen grenzen blijven."),
          quiz("Waarom is een hart meer dan losse hartcellen?", ["Omdat op orgaanniveau de pompfunctie ontstaat", "Omdat cellen geen DNA hebben", "Omdat weefsels niet samenwerken", "Omdat bloed geen cellen bevat"], 0, "De pompfunctie ontstaat door de georganiseerde samenwerking van veel cellen en weefsels.")
        ]
      ),
      paragraph(
        "2",
        "Cellen, DNA en informatie",
        "Alle organismen bestaan uit een of meer cellen. In cellen vindt stofwisseling plaats: het geheel van chemische reacties waarbij stoffen worden opgebouwd, afgebroken en omgezet. DNA bevat erfelijke informatie voor de bouw en werking van cellen. Genen leveren informatie voor eiwitten, en eiwitten bepalen veel eigenschappen en processen.\n\nHet genotype is de erfelijke aanleg; het fenotype is wat je waarneemt aan eigenschappen. Het fenotype ontstaat door genotype en milieu samen. Training, voeding, temperatuur en licht kunnen de uiting van eigenschappen beinvloeden.",
        [
          "Je beschrijft de rol van cellen en DNA in levende organismen.",
          "Je onderscheidt genotype en fenotype.",
          "Je legt uit dat eigenschappen door erfelijke aanleg en milieu ontstaan."
        ],
        [
          card("Stofwisseling", "Alle chemische reacties in een organisme."),
          card("DNA", "Molecuul met erfelijke informatie."),
          card("Gen", "Stuk DNA met informatie voor een erfelijke eigenschap of eiwit."),
          card("Eiwit", "Molecuul met bouw-, transport-, regel- of enzymfunctie in cellen."),
          card("Genotype", "De erfelijke aanleg van een organisme."),
          card("Fenotype", "De waarneembare eigenschappen van een organisme."),
          card("Milieu", "Omgevingsinvloeden die het fenotype kunnen beinvloeden."),
          card("Enzym", "Eiwit dat een chemische reactie versnelt zonder zelf verbruikt te worden.")
        ],
        [
          quiz("Wat bevat de erfelijke informatie van cellen?", ["Water", "DNA", "Zetmeel", "Koolstofdioxide"], 1, "DNA bevat genen met informatie voor eigenschappen en eiwitten."),
          quiz("Wat is het fenotype?", ["Alleen het DNA", "De waarneembare eigenschappen", "Alleen de geslachtscellen", "De populatiegrootte"], 1, "Het fenotype is wat je aan eigenschappen kunt meten of waarnemen."),
          quiz("Waardoor ontstaat het fenotype?", ["Alleen genotype", "Alleen milieu", "Genotype en milieu samen", "Alleen toeval"], 2, "Eigenschappen worden bepaald door erfelijke aanleg en omgevingsinvloeden."),
          quiz("Welke uitspraak over enzymen klopt?", ["Enzymen versnellen reacties", "Enzymen zijn altijd vetten", "Enzymen worden altijd DNA", "Enzymen werken alleen buiten cellen"], 0, "Enzymen zijn meestal eiwitten die stofwisselingsreacties versnellen.")
        ]
      ),
      paragraph(
        "3",
        "Biologisch redeneren",
        "Biologie gebruikt vaak de vraag: hoe hangt bouw samen met functie? Een dun longblaasje past bij snelle gaswisseling; een wortelhaar past bij wateropname. Ook oorzaak-gevolg denken is belangrijk: als een factor verandert, kan dat doorwerken op cellen, organen, organismen en ecosystemen.\n\nBiologische verklaringen combineren meestal meerdere niveaus. Bij koorts spelen cellen van het afweersysteem, regelkringen in de hypothalamus, gedrag en ziekteverwekkers samen een rol. Goede antwoorden gebruiken dus vakbegrippen en laten de tussenstappen zien.",
        [
          "Je gebruikt bouw-functie-denken bij biologische verklaringen.",
          "Je legt oorzaak-gevolgrelaties uit met tussenstappen.",
          "Je combineert informatie uit meerdere organisatieniveaus."
        ],
        [
          card("Bouw-functierelatie", "Verband tussen de vorm of bouw van een onderdeel en wat het doet."),
          card("Oorzaak-gevolgrelatie", "Verband waarbij een verandering leidt tot een andere verandering."),
          card("Systeem", "Geheel van onderdelen die elkaar beinvloeden."),
          card("Regelkring", "Systeem met sensor, norm, regelcentrum en effector dat een waarde bijstuurt."),
          card("Context", "Concrete situatie waarin je biologische kennis toepast."),
          card("Concept", "Algemeen biologisch idee, zoals homeostase, evolutie of kringloop."),
          card("Model", "Vereenvoudigde weergave van de werkelijkheid."),
          card("Vakbegrip", "Biologisch begrip dat precies aangeeft wat je bedoelt.")
        ],
        [
          quiz("Welke vraag hoort bij bouw-functie-denken?", ["Waarom past deze vorm bij deze taak?", "Hoeveel letters heeft het woord?", "Welke kleur is het plaatje?", "Wie heeft het boek geschreven?"], 0, "Bouw-functie-denken verbindt structuur met werking."),
          quiz("Waarom moet je tussenstappen noemen in een biologisch antwoord?", ["Dan wordt de oorzaak-gevolgrelatie duidelijk", "Dan is het antwoord altijd langer", "Dan hoef je geen vakbegrippen te gebruiken", "Dan verdwijnen meetfouten"], 0, "Examenantwoorden scoren vaak op correcte biologische schakels in de redenering."),
          quiz("Wat is een biologisch concept?", ["Een algemeen idee dat je in nieuwe situaties toepast", "Een willekeurig getal", "Een fout in een grafiek", "Een losse mening"], 0, "Concepten zoals homeostase of evolutie helpen om contexten te verklaren."),
          quiz("Welke verklaring gebruikt meerdere niveaus?", ["Koorts komt door temperatuur", "Cytokinen beinvloeden de hypothalamus, waardoor lichaamstemperatuur en gedrag veranderen", "Bacterien zijn klein", "Een mens heeft organen"], 1, "Deze verklaring verbindt cellulaire signalen, regelcentrum, organisme en gedrag.")
        ]
      )
    ],
    exams: [
      exam(
        "inl-ex1",
        "Van cel naar organisme",
        "Bij een sporter nemen spiercellen extra glucose op. Daardoor kunnen spieren krachtiger werken en verandert de prestatie van het hele lichaam.",
        "Leg uit hoe deze situatie laat zien dat biologische processen op meerdere organisatieniveaus samenhangen.",
        3,
        [
          "Op celniveau nemen spiercellen glucose op en gebruiken dit in de stofwisseling/dissimilatie voor energie (1 p).",
          "Op orgaan- of orgaanstelselniveau kunnen spieren daardoor krachtiger of langer samentrekken (1 p).",
          "Op organismeniveau verandert de sportprestatie doordat veel cellen en organen samenwerken (1 p)."
        ]
      ),
      exam(
        "inl-ex2",
        "Genotype en milieu",
        "Twee stekjes van dezelfde plant hebben hetzelfde genotype. Het ene stekje krijgt veel licht en voldoende mineralen; het andere staat donker en krijgt weinig mineralen.",
        "Leg uit waarom de planten toch een verschillend fenotype kunnen krijgen.",
        2,
        [
          "Het fenotype ontstaat door genotype en milieu samen (1 p).",
          "Verschillen in licht en mineralen beinvloeden bijvoorbeeld fotosynthese/groei, waardoor de planten verschillend kunnen worden (1 p)."
        ]
      )
    ]
  });

  upsertTopic({
    id: "cellen",
    title: "Cellen",
    icon: "🔬",
    theme: "t-blue",
    domain: "Celbiologie",
    intro: "Cellen zijn de bouwstenen van leven. Je leert hoe prokaryote en eukaryote cellen zijn opgebouwd, hoe membranen transport regelen en hoe cellen delen, groeien en specialiseren.",
    paragraphs: [
      paragraph(
        "1",
        "Celtypen en organellen",
        "Prokaryote cellen, zoals bacterien, hebben geen celkern en geen membraan-omgeven organellen. Hun DNA ligt los in het cytoplasma. Eukaryote cellen hebben wel een celkern en organellen. Plantencellen, dierlijke cellen en schimmelcellen zijn eukaryoot.\n\nOrganellen hebben elk een functie. De celkern bevat DNA, mitochondrien leveren ATP door dissimilatie, ribosomen maken eiwitten, het ER en golgisysteem verwerken en vervoeren stoffen. Plantencellen hebben daarnaast chloroplasten, een grote vacuole en een celwand.",
        [
          "Je vergelijkt prokaryote en eukaryote cellen.",
          "Je noemt functies van belangrijke organellen.",
          "Je onderscheidt plantaardige en dierlijke cellen."
        ],
        [
          card("Prokaryoot", "Cel zonder celkern en zonder membraan-omgeven organellen."),
          card("Eukaryoot", "Cel met celkern en membraan-omgeven organellen."),
          card("Celkern", "Organel met DNA; regelt veel processen in de cel."),
          card("Cytoplasma", "Grondplasma met organellen binnen het celmembraan."),
          card("Mitochondrium", "Organel waar aerobe dissimilatie plaatsvindt en ATP wordt gevormd."),
          card("Ribosoom", "Structuur waarop eiwitten worden gemaakt."),
          card("Chloroplast", "Bladgroenkorrel; organel waar fotosynthese plaatsvindt."),
          card("Celwand", "Stevige laag buiten het celmembraan van planten, schimmels en bacterien.")
        ],
        [
          quiz("Wat ontbreekt bij prokaryote cellen?", ["DNA", "Celmembraan", "Celkern", "Ribosomen"], 2, "Bacterien hebben wel DNA en ribosomen, maar geen celkern."),
          quiz("Welk organel maakt ATP bij aerobe dissimilatie?", ["Mitochondrium", "Vacuole", "Celkern", "Golgisysteem"], 0, "In mitochondrien wordt energie uit organische stoffen vastgelegd in ATP."),
          quiz("Welke structuur komt vooral voor in plantencellen en niet in dierlijke cellen?", ["Celmembraan", "Celkern", "Chloroplast", "Ribosoom"], 2, "Chloroplasten voeren fotosynthese uit en komen voor in groene plantendelen."),
          quiz("Waar worden eiwitten gemaakt?", ["Ribosomen", "Vacuolen", "Celwanden", "Lysosomen"], 0, "Ribosomen koppelen aminozuren aan elkaar tot eiwitten.")
        ]
      ),
      paragraph(
        "2",
        "Membranen en transport",
        "Het celmembraan bestaat uit fosfolipiden en eiwitten. Het is selectief permeabel: sommige stoffen passeren makkelijk, andere alleen via transporteiwitten of helemaal niet. Diffusie verplaatst stoffen van hoge naar lage concentratie. Osmose is diffusie van water door een semipermeabel membraan.\n\nActief transport kost ATP en kan stoffen tegen het concentratieverval in verplaatsen. Bij endocytose neemt een cel stoffen op in blaasjes; bij exocytose geeft een cel stoffen af. Daardoor kan een cel zijn inwendige milieu regelen.",
        [
          "Je legt diffusie, osmose en actief transport uit.",
          "Je beschrijft de selectieve doorlaatbaarheid van membranen.",
          "Je voorspelt wat er met cellen gebeurt in verschillende oplossingen."
        ],
        [
          card("Selectief permeabel", "Sommige stoffen kunnen een membraan passeren en andere niet."),
          card("Diffusie", "Verplaatsing van deeltjes van hoge naar lage concentratie."),
          card("Osmose", "Diffusie van water door een semipermeabel membraan."),
          card("Concentratieverval", "Verschil in concentratie tussen twee plaatsen."),
          card("Actief transport", "Transport tegen het concentratieverval in; kost ATP."),
          card("Transporteiwit", "Membraaneiwit dat een specifieke stof doorlaat of verplaatst."),
          card("Endocytose", "Opname van stoffen door instulping van het celmembraan."),
          card("Exocytose", "Afgifte van stoffen doordat blaasjes versmelten met het celmembraan.")
        ],
        [
          quiz("Wat is osmose?", ["Verplaatsing van water door een semipermeabel membraan", "Verbranding van glucose", "Deling van de celkern", "Transport zonder membraan"], 0, "Osmose is waterverplaatsing door een membraan dat niet alle opgeloste stoffen doorlaat."),
          quiz("Wanneer is transport actief?", ["Als het ATP kost", "Als het altijd met het concentratieverval meegaat", "Als alleen water beweegt", "Als er geen eiwitten nodig zijn"], 0, "Actief transport gebruikt energie om stoffen tegen hun concentratieverval te verplaatsen."),
          quiz("Wat gebeurt meestal met een dierlijke cel in een sterk hypotone oplossing?", ["Hij neemt water op en kan barsten", "Hij verliest al zijn DNA", "Hij maakt een celwand", "Hij stopt osmose volledig"], 0, "Water stroomt de cel in doordat buiten relatief weinig opgeloste stoffen aanwezig zijn."),
          quiz("Waarom is een membraan selectief permeabel?", ["Door fosfolipiden en specifieke transporteiwitten", "Omdat alle stoffen even snel passeren", "Omdat het geen eiwitten bevat", "Omdat water nooit passeert"], 0, "De membraanbouw bepaalt welke stoffen vrij, via eiwitten of niet kunnen passeren.")
        ],
        [
          { title: "Osmose naar een hoge concentratie opgeloste stoffen", steps: ["Twee oplossingen gescheiden door semipermeabel membraan", "Watermoleculen passeren het membraan", "Netto watertransport naar de meest geconcentreerde oplossing", "Volume of druk aan die kant neemt toe"] }
        ]
      ),
      paragraph(
        "3",
        "Celdeling en specialisatie",
        "Door mitose ontstaan uit een moedercel twee dochtercellen met dezelfde erfelijke informatie. Voor mitose wordt het DNA verdubbeld. Daarna worden chromosomen verdeeld over twee kernen en splitst de cel. Mitose is nodig voor groei, herstel en ongeslachtelijke voortplanting.\n\nBij meercellige organismen specialiseren cellen. Door celdifferentiatie worden cellen verschillend van bouw en functie, terwijl ze meestal hetzelfde DNA houden. Stamcellen kunnen nog delen en zich ontwikkelen tot gespecialiseerde cellen.",
        [
          "Je beschrijft het doel en de hoofdlijnen van mitose.",
          "Je legt uit waarom DNA-verdubbeling nodig is voor celdeling.",
          "Je beschrijft celdifferentiatie en stamcellen."
        ],
        [
          card("Celcyclus", "Reeks fasen waarin een cel groeit, DNA verdubbelt en deelt."),
          card("DNA-replicatie", "Verdubbeling van DNA voorafgaand aan celdeling."),
          card("Mitose", "Kerndeling waarbij twee kernen met dezelfde erfelijke informatie ontstaan."),
          card("Dochtercel", "Cel die ontstaat na celdeling."),
          card("Chromosoom", "Opgerold DNA-molecuul met eiwitten."),
          card("Celdifferentiatie", "Ontwikkeling waarbij cellen verschillend worden in bouw en functie."),
          card("Stamcel", "Cel die kan delen en kan uitgroeien tot gespecialiseerde celtypen."),
          card("Apoptose", "Geprogrammeerde celdood; belangrijk bij ontwikkeling en onderhoud van weefsels.")
        ],
        [
          quiz("Waarom wordt DNA verdubbeld voor mitose?", ["Zodat beide dochtercellen dezelfde erfelijke informatie krijgen", "Zodat de celwand verdwijnt", "Zodat osmose stopt", "Zodat enzymen geen functie hebben"], 0, "Elke dochtercel moet een complete set DNA ontvangen."),
          quiz("Waarvoor is mitose nodig?", ["Groei en herstel", "Alleen voor bevruchting", "Alleen voor fotosynthese", "Alleen voor evolutie"], 0, "Mitose levert nieuwe lichaamscellen voor groei, vervanging en herstel."),
          quiz("Wat gebeurt bij celdifferentiatie?", ["Cellen specialiseren in bouw en functie", "Alle cellen verliezen hun DNA", "Cellen worden prokaryoot", "Alle organellen verdwijnen"], 0, "Gespecialiseerde cellen gebruiken verschillende delen van dezelfde erfelijke informatie."),
          quiz("Wat is een stamcel?", ["Een cel die kan delen en specialiseren", "Een dode cel zonder kern", "Een bacterie zonder DNA", "Een enzym in bloed"], 0, "Stamcellen leveren nieuwe cellen en kunnen zich ontwikkelen tot gespecialiseerde celtypen.")
        ]
      )
    ],
    exams: [
      exam(
        "cel-ex1",
        "Osmose in aardappelstaafjes",
        "Aardappelstaafjes worden gewogen en daarna een uur in gedestilleerd water gelegd. Na afloop zijn ze zwaarder.",
        "Leg met osmose uit waardoor de aardappelstaafjes zwaarder zijn geworden.",
        2,
        [
          "In de aardappelcellen is de concentratie opgeloste stoffen hoger dan in gedestilleerd water (1 p).",
          "Water stroomt door osmose de cellen in, waardoor de massa van de aardappelstaafjes toeneemt (1 p)."
        ]
      ),
      exam(
        "cel-ex2",
        "Antibiotica en celwanden",
        "Een antibioticum remt de vorming van de bacteriele celwand. Het medicijn beschadigt menselijke cellen nauwelijks.",
        "Leg uit waarom dit antibioticum vooral bacterien treft en menselijke cellen nauwelijks.",
        2,
        [
          "Bacterien hebben een celwand die nodig is voor stevigheid en overleving (1 p).",
          "Menselijke cellen hebben geen celwand, waardoor het doelwit van dit antibioticum bij menselijke cellen ontbreekt (1 p)."
        ]
      )
    ]
  });

  upsertTopic({
    id: "onderzoek",
    title: "Onderzoek doen",
    icon: "🧪",
    theme: "t-purple",
    domain: "Onderzoeksvaardigheden",
    intro: "Biologisch onderzoek begint met een goede vraag en eindigt met een onderbouwde conclusie. Je leert hypotheses opstellen, variabelen controleren, data verwerken en kritisch naar resultaten kijken.",
    paragraphs: [
      paragraph(
        "1",
        "Onderzoeksvraag en hypothese",
        "Een goede onderzoeksvraag is biologisch, afgebakend en meetbaar. Een hypothese is een voorlopig antwoord op die vraag, vaak met een biologische verklaring. Uit de hypothese leid je een voorspelling af: wat verwacht je te meten als de hypothese klopt?\n\nBij experimenteel onderzoek verander je bewust een onafhankelijke variabele en meet je het effect op een afhankelijke variabele. Andere factoren houd je constant zodat ze de uitkomst niet verstoren.",
        [
          "Je formuleert een meetbare onderzoeksvraag.",
          "Je onderscheidt hypothese en voorspelling.",
          "Je herkent onafhankelijke, afhankelijke en constante variabelen."
        ],
        [
          card("Onderzoeksvraag", "Vraag die je met waarnemingen of metingen kunt beantwoorden."),
          card("Hypothese", "Voorlopige verklaring of antwoord op de onderzoeksvraag."),
          card("Voorspelling", "Verwachte uitkomst als de hypothese klopt."),
          card("Onafhankelijke variabele", "Factor die de onderzoeker verandert."),
          card("Afhankelijke variabele", "Factor die je meet als resultaat."),
          card("Constante variabele", "Factor die gelijk moet blijven tijdens het experiment."),
          card("Controleproef", "Vergelijking zonder de onderzochte behandeling of factor."),
          card("Meetbaar", "Zo geformuleerd dat je gegevens kunt verzamelen.")
        ],
        [
          quiz("Wat is de onafhankelijke variabele?", ["Wat je meet", "Wat je bewust verandert", "Wat altijd fout is", "Wat je conclusie noemt"], 1, "De onafhankelijke variabele is de factor waarvan je het effect onderzoekt."),
          quiz("Wat is een hypothese?", ["Een voorlopige verklaring", "Een tabel met ruwe data", "Altijd een bewezen feit", "Een meetinstrument"], 0, "Een hypothese is toetsbaar maar nog niet bewezen."),
          quiz("Waarom houd je variabelen constant?", ["Om andere verklaringen uit te sluiten", "Om geen metingen te hoeven doen", "Om de hypothese te veranderen", "Om de controlegroep te verwijderen"], 0, "Constante variabelen voorkomen dat verschillen door andere factoren komen."),
          quiz("Wat hoort in een voorspelling?", ["Wat je verwacht te meten als de hypothese klopt", "Alleen de namen van onderzoekers", "Een mening over het onderwerp", "Een willekeurige grafiek"], 0, "Een voorspelling koppelt de hypothese aan een verwachte meetuitkomst.")
        ]
      ),
      paragraph(
        "2",
        "Betrouwbaar en valide meten",
        "Betrouwbaarheid gaat over herhaalbaarheid: krijg je bij herhaling ongeveer dezelfde uitkomst? Je vergroot betrouwbaarheid door veel metingen, herhalingen en een vaste meetmethode. Validiteit gaat over de vraag of je echt meet wat je wilt meten.\n\nEen controlegroep maakt vergelijking mogelijk. Randomisatie verdeelt toevalsverschillen eerlijk over groepen. Blind of dubbelblind onderzoek voorkomt dat verwachtingen van proefpersonen of onderzoekers de uitkomst beinvloeden.",
        [
          "Je onderscheidt betrouwbaarheid en validiteit.",
          "Je legt het nut van controlegroep, herhaling en randomisatie uit.",
          "Je herkent bronnen van bias en meetfouten."
        ],
        [
          card("Betrouwbaarheid", "Mate waarin herhaalde metingen dezelfde uitkomst geven."),
          card("Validiteit", "Mate waarin een onderzoek meet wat het moet meten."),
          card("Herhaling", "Meerdere metingen of proeven uitvoeren om toeval te verkleinen."),
          card("Randomisatie", "Proefpersonen of proefobjecten willekeurig over groepen verdelen."),
          card("Blind onderzoek", "De proefpersoon weet niet in welke groep hij zit."),
          card("Dubbelblind onderzoek", "Proefpersoon en onderzoeker weten niet wie welke behandeling krijgt."),
          card("Bias", "Systematische vertekening in waarneming, meting of selectie."),
          card("Meetfout", "Afwijking tussen gemeten waarde en werkelijke waarde.")
        ],
        [
          quiz("Wat betekent betrouwbaarheid?", ["Herhaalbaarheid van metingen", "De mooiste grafiek", "De lengte van de hypothese", "Een onderzoek zonder variabelen"], 0, "Betrouwbare metingen geven bij herhaling vergelijkbare resultaten."),
          quiz("Wat betekent validiteit?", ["Meten wat je wilt meten", "Altijd veel proefpersonen hebben", "Een perfecte score halen", "Alle data verwijderen"], 0, "Een valide onderzoek past bij de onderzoeksvraag en meet de juiste grootheid."),
          quiz("Waarom gebruik je randomisatie?", ["Om toevalsverschillen eerlijk over groepen te verdelen", "Om de afhankelijke variabele te verwijderen", "Om de conclusie vooraf vast te leggen", "Om minder zorgvuldig te meten"], 0, "Randomisatie verkleint de kans dat groepen vooraf systematisch verschillen."),
          quiz("Wat is een controlegroep?", ["Een groep waarmee je het effect van de behandeling vergelijkt", "Een groep zonder organismen", "Een groep die altijd gelijk krijgt", "Een grafiek met foutbalken"], 0, "De controlegroep laat zien wat er gebeurt zonder de onderzochte factor.")
        ]
      ),
      paragraph(
        "3",
        "Data verwerken",
        "Ruwe data worden pas bruikbaar als je ze overzichtelijk verwerkt. Tabellen tonen meetwaarden; grafieken laten patronen zien. Bij een lijn- of spreidingsdiagram kun je verbanden onderzoeken. Een gemiddelde vat metingen samen, terwijl spreiding laat zien hoeveel de metingen verschillen.\n\nCorrelatie betekent dat twee variabelen samen veranderen, maar bewijst nog geen oorzaak. Voor een causale conclusie heb je een passend experiment, controle van variabelen en een biologische verklaring nodig.",
        [
          "Je kiest passende tabellen en grafieken voor data.",
          "Je gebruikt gemiddelde en spreiding bij het beoordelen van resultaten.",
          "Je onderscheidt correlatie en causaliteit."
        ],
        [
          card("Ruwe data", "Oorspronkelijke meetwaarden zoals je die hebt verzameld."),
          card("Gemiddelde", "Som van meetwaarden gedeeld door het aantal metingen."),
          card("Spreiding", "Mate waarin meetwaarden van elkaar verschillen."),
          card("Foutbalk", "Grafische weergave van onzekerheid of spreiding rond een waarde."),
          card("Correlatie", "Samenhang tussen twee variabelen."),
          card("Causaliteit", "Oorzakelijk verband: verandering in de ene factor veroorzaakt verandering in de andere."),
          card("Trendlijn", "Lijn die de algemene richting van meetpunten weergeeft."),
          card("Conclusie", "Antwoord op de onderzoeksvraag, gebaseerd op resultaten.")
        ],
        [
          quiz("Wat laat spreiding zien?", ["Hoeveel meetwaarden van elkaar verschillen", "Alleen het hoogste getal", "De naam van de variabele", "De kleur van de grafiek"], 0, "Spreiding vertelt hoe sterk individuele metingen rond een gemiddelde liggen."),
          quiz("Waarom bewijst correlatie nog geen causaliteit?", ["Er kan een andere factor meespelen", "Omdat grafieken nooit kloppen", "Omdat gemiddelden verboden zijn", "Omdat variabelen niet bestaan"], 0, "Twee variabelen kunnen samen veranderen zonder dat de ene de andere veroorzaakt."),
          quiz("Waarop moet een conclusie gebaseerd zijn?", ["De resultaten en de onderzoeksvraag", "Alleen een vermoeden", "De titel van de grafiek", "Een willekeurige bron"], 0, "Een goede conclusie beantwoordt de onderzoeksvraag met steun van de data."),
          quiz("Wat is een trendlijn?", ["Een lijn die de algemene richting van meetpunten aangeeft", "Een lijn zonder betekenis", "Een lijst met organellen", "Een controlegroep"], 0, "Een trendlijn helpt om een patroon in een spreidingsdiagram te zien.")
        ]
      )
    ],
    exams: [
      exam(
        "ond-ex1",
        "Bemesting en plantengroei",
        "Een leerling wil onderzoeken of extra nitraat de groei van tuinkers vergroot. Ze zet twee bakken tuinkers neer: een bak met extra nitraat en een bak zonder extra nitraat.",
        "Noem de onafhankelijke en afhankelijke variabele en leg uit waarom de andere omstandigheden gelijk moeten blijven.",
        3,
        [
          "De onafhankelijke variabele is de hoeveelheid/toevoeging nitraat (1 p).",
          "De afhankelijke variabele is de groei van de tuinkers, bijvoorbeeld lengte of massa (1 p).",
          "Andere omstandigheden zoals licht, water en temperatuur moeten gelijk blijven, zodat een verschil in groei aan nitraat kan worden toegeschreven (1 p)."
        ]
      ),
      exam(
        "ond-ex2",
        "Cafeine en hartslag",
        "In een klas blijkt dat leerlingen die veel cafeine drinken gemiddeld een hogere hartslag hebben. Een leerling concludeert: 'Cafeine veroorzaakt dus een hogere hartslag.'",
        "Leg uit waarom deze conclusie op basis van alleen deze gegevens te sterk is.",
        2,
        [
          "De gegevens laten hoogstens een correlatie zien tussen cafeinegebruik en hartslag (1 p).",
          "Andere factoren, zoals stress, beweging of slaaptekort, kunnen de hartslag ook beinvloeden; voor causaliteit is een gecontroleerd experiment nodig (1 p)."
        ]
      )
    ]
  });

  upsertTopic({
    id: "soorten-populaties",
    title: "Soorten en populaties",
    icon: "🌿",
    theme: "t-teal",
    domain: "Biodiversiteit",
    intro: "Soorten leven in populaties en staan voortdurend in relatie met soortgenoten, andere soorten en hun omgeving. Je leert hoe biodiversiteit, populatiegrootte en interacties samen ecosystemen vormgeven.",
    paragraphs: [
      paragraph(
        "1",
        "Soorten en biodiversiteit",
        "Een soort is een groep organismen die zich onder natuurlijke omstandigheden onderling kunnen voortplanten en vruchtbare nakomelingen kunnen krijgen. Biodiversiteit beschrijft de variatie aan genen, soorten en ecosystemen. Hoe groter de biodiversiteit, hoe meer mogelijkheden een ecosysteem vaak heeft om verstoringen op te vangen.\n\nBiologen ordenen organismen in groepen op basis van verwantschap. DNA-onderzoek helpt om verwantschappen nauwkeuriger vast te stellen dan alleen uiterlijke kenmerken.",
        [
          "Je legt het biologische soortbegrip uit.",
          "Je beschrijft biodiversiteit op gen-, soort- en ecosysteemniveau.",
          "Je gebruikt verwantschap bij het ordenen van organismen."
        ],
        [
          card("Soort", "Groep organismen die samen vruchtbare nakomelingen kunnen krijgen."),
          card("Biodiversiteit", "Variatie aan genen, soorten en ecosystemen."),
          card("Genetische variatie", "Verschillen in allelen binnen een populatie."),
          card("Verwantschap", "Mate waarin organismen een gemeenschappelijke voorouder delen."),
          card("Taxonomie", "Het ordenen en benoemen van organismen."),
          card("Determineren", "Met kenmerken bepalen tot welke soort een organisme behoort."),
          card("Vruchtbare nakomelingen", "Nakomelingen die zich zelf ook kunnen voortplanten."),
          card("Ecosysteemdiversiteit", "Variatie aan verschillende ecosystemen in een gebied.")
        ],
        [
          quiz("Wat hoort bij het biologische soortbegrip?", ["Vruchtbare nakomelingen kunnen krijgen", "Altijd dezelfde kleur hebben", "In hetzelfde hok leven", "Even groot zijn"], 0, "Bij het biologische soortbegrip gaat het om natuurlijke voortplanting met vruchtbare nakomelingen."),
          quiz("Wat is genetische variatie?", ["Verschillen in allelen binnen een populatie", "Het aantal organen", "De hoeveelheid water in een cel", "Alleen het aantal ecosystemen"], 0, "Genetische variatie is variatie in erfelijke informatie."),
          quiz("Waarom is DNA nuttig bij verwantschapsonderzoek?", ["DNA bevat erfelijke informatie die je kunt vergelijken", "DNA is altijd zichtbaar met het blote oog", "DNA voorkomt mutaties", "DNA komt alleen bij planten voor"], 0, "Hoe meer overeenkomsten in DNA, hoe nauwer de verwantschap meestal is."),
          quiz("Welke niveaus horen bij biodiversiteit?", ["Genen, soorten en ecosystemen", "Alleen organen", "Alleen cellen", "Alleen moleculen"], 0, "Biodiversiteit kun je op meerdere biologische niveaus bekijken.")
        ]
      ),
      paragraph(
        "2",
        "Populaties",
        "Een populatie is een groep individuen van dezelfde soort in een bepaald gebied. De populatiegrootte verandert door geboorte, sterfte, immigratie en emigratie. De draagkracht van een gebied is de maximale populatiegrootte die langere tijd kan worden onderhouden door voedsel, ruimte, nestplaatsen en andere factoren.\n\nPopulatiedichtheid kun je onderzoeken met steekproeven, kwadraten of merken-terugvangen. Populaties groeien niet onbeperkt: dichtheidsafhankelijke factoren zoals voedseltekort, predatie en ziekte remmen groei sterker als de populatie groter wordt.",
        [
          "Je verklaart veranderingen in populatiegrootte.",
          "Je beschrijft draagkracht en dichtheidsafhankelijke factoren.",
          "Je legt uit hoe populaties met steekproeven worden geschat."
        ],
        [
          card("Populatie", "Groep individuen van dezelfde soort in hetzelfde gebied."),
          card("Populatiegrootte", "Aantal individuen in een populatie."),
          card("Populatiedichtheid", "Aantal individuen per oppervlakte- of volume-eenheid."),
          card("Geboorte", "Toename van populatiegrootte door voortplanting."),
          card("Sterfte", "Afname van populatiegrootte doordat individuen doodgaan."),
          card("Immigratie", "Binnenkomst van individuen in een populatie."),
          card("Emigratie", "Vertrek van individuen uit een populatie."),
          card("Draagkracht", "Maximale populatiegrootte die een gebied langdurig kan dragen.")
        ],
        [
          quiz("Waardoor neemt een populatie toe?", ["Geboorte en immigratie", "Sterfte en emigratie", "Alleen predatie", "Alleen ziekte"], 0, "Geboorte en immigratie voegen individuen toe aan een populatie."),
          quiz("Wat betekent draagkracht?", ["Maximale populatiegrootte die een gebied kan onderhouden", "Het gewicht van een dier", "Het aantal chromosomen", "De lengte van een voedselketen"], 0, "Draagkracht hangt af van beperkende factoren zoals voedsel en ruimte."),
          quiz("Welke factor is vaak dichtheidsafhankelijk?", ["Besmettelijke ziekte", "Een vulkaanuitbarsting", "Een meteorietinslag", "Daglengte"], 0, "Ziekten verspreiden vaak sneller als individuen dichter op elkaar leven."),
          quiz("Waarom gebruik je kwadraten bij plantenonderzoek?", ["Om populatiedichtheid te schatten uit steekproeven", "Om DNA te kopieren", "Om dieren te verdoven", "Om zuurstof te meten"], 0, "Met kwadraten tel je in kleine oppervlaktes en reken je door naar het hele gebied.")
        ]
      ),
      paragraph(
        "3",
        "Relaties tussen soorten",
        "Soorten beinvloeden elkaar door predatie, concurrentie, parasitisme, mutualisme en commensalisme. Concurrentie ontstaat wanneer organismen dezelfde beperkte hulpbron nodig hebben. Bij predatie eet de predator de prooi; bij parasitisme leeft de parasiet ten koste van de gastheer zonder die meestal direct te doden.\n\nRelaties tussen soorten werken door in populaties. Als het aantal prooidieren toeneemt, kan het aantal predatoren later ook toenemen. Als een soort verdwijnt, kan dat via voedselwebben gevolgen hebben voor veel andere soorten.",
        [
          "Je onderscheidt verschillende relaties tussen soorten.",
          "Je verklaart hoe relaties populatiegroottes beinvloeden.",
          "Je beschrijft gevolgen van veranderingen in voedselwebben."
        ],
        [
          card("Predatie", "Relatie waarbij een predator een prooi vangt en opeet."),
          card("Concurrentie", "Strijd om dezelfde beperkte hulpbron."),
          card("Parasitisme", "Relatie waarbij een parasiet leeft ten koste van een gastheer."),
          card("Mutualisme", "Relatie waarbij beide soorten voordeel hebben."),
          card("Commensalisme", "Relatie waarbij de ene soort voordeel heeft en de andere nauwelijks effect ondervindt."),
          card("Voedselweb", "Netwerk van voedselrelaties in een ecosysteem."),
          card("Niche", "Rol en plaats van een soort in een ecosysteem."),
          card("Beperkende factor", "Factor die groei, overleving of voortplanting begrenst.")
        ],
        [
          quiz("Wat is mutualisme?", ["Beide soorten hebben voordeel", "Een soort eet de andere altijd op", "Beide soorten hebben nadeel", "Geen enkele soort wordt beinvloed"], 0, "Bij mutualisme profiteren beide partners."),
          quiz("Wanneer ontstaat concurrentie?", ["Als organismen dezelfde beperkte hulpbron nodig hebben", "Als er onbeperkt voedsel is", "Alleen bij fotosynthese", "Alleen tussen organellen"], 0, "Concurrentie ontstaat door schaarste aan bijvoorbeeld voedsel, licht, ruimte of partners."),
          quiz("Wat kan gebeuren als het aantal prooidieren stijgt?", ["Het aantal predatoren kan later stijgen", "Predatoren verdwijnen altijd direct", "Fotosynthese stopt", "Alle parasieten worden mutualisten"], 0, "Meer prooi kan meer voedsel voor predatoren betekenen, waardoor hun populatie later groeit."),
          quiz("Wat is een niche?", ["De rol en plaats van een soort in een ecosysteem", "Alleen een nest", "Een type chromosoom", "Een meetfout"], 0, "De niche omvat onder andere voedsel, leefgebied, activiteitstijd en relaties met andere soorten.")
        ]
      )
    ],
    exams: [
      exam(
        "sp-ex1",
        "Merken en terugvangen",
        "Onderzoekers vangen 40 salamanders in een poel, merken ze en laten ze vrij. Een week later vangen ze 50 salamanders, waarvan 10 gemerkt zijn.",
        "Schat de populatiegrootte en noem een voorwaarde voor een betrouwbare schatting.",
        3,
        [
          "De schatting is (40 x 50) / 10 = 200 salamanders (1 p).",
          "De gemerkte dieren moeten zich goed mengen met de niet-gemerkte dieren / de merkering mag de vangkans niet veranderen (1 p).",
          "Er mag tussen vangst en terugvangst weinig geboorte, sterfte, immigratie of emigratie zijn (1 p)."
        ]
      ),
      exam(
        "sp-ex2",
        "Predator en prooi",
        "In een duingebied neemt het aantal konijnen sterk toe. Enkele jaren later neemt ook het aantal vossen toe.",
        "Leg uit waardoor de toename van konijnen kan leiden tot een latere toename van vossen.",
        2,
        [
          "Konijnen zijn voedsel/prooi voor vossen, dus meer konijnen betekent meer beschikbare energie/voedsel voor vossen (1 p).",
          "Daardoor overleven en planten vossen zich beter voort, waardoor hun populatie later kan toenemen (1 p)."
        ]
      )
    ]
  });

  upsertTopic({
    id: "mens-milieu",
    title: "Mens en milieu",
    icon: "🌍",
    theme: "t-blue",
    domain: "Aarde en duurzaamheid",
    intro: "Mensen veranderen ecosystemen door landgebruik, uitstoot, voedselproductie en energiegebruik. Je leert hoe kringlopen, klimaat, draagkracht en duurzaamheid met elkaar samenhangen.",
    paragraphs: [
      paragraph(
        "1",
        "Draagkracht en voetafdruk",
        "De draagkracht van de aarde hangt af van beschikbare hulpbronnen, biodiversiteit en de snelheid waarmee ecosystemen herstellen. De ecologische voetafdruk geeft weer hoeveel land en water nodig is voor iemands gebruik van voedsel, energie, grondstoffen en afvalverwerking.\n\nDuurzaamheid betekent dat mensen in hun behoeften voorzien zonder de mogelijkheden van toekomstige generaties te beschadigen. Dat vraagt om kringloopdenken: grondstoffen hergebruiken, energie besparen en ecosystemen niet sneller belasten dan ze kunnen herstellen.",
        [
          "Je beschrijft draagkracht op schaal van ecosystemen en aarde.",
          "Je legt de ecologische voetafdruk uit.",
          "Je verbindt duurzaamheid met kringlopen en hulpbronnen."
        ],
        [
          card("Draagkracht", "Maximale belasting of populatie die een systeem langdurig kan dragen."),
          card("Ecologische voetafdruk", "Oppervlakte land en water die nodig is voor iemands consumptie en afvalverwerking."),
          card("Duurzaamheid", "Gebruik van hulpbronnen zonder toekomstige mogelijkheden uit te putten."),
          card("Hulpbron", "Materiaal, energiebron of ecosysteemdienst die mensen gebruiken."),
          card("Ecosysteemdienst", "Dienst van de natuur, zoals bestuiving, waterzuivering of klimaatregeling."),
          card("Circulaire economie", "Economie waarin grondstoffen zo veel mogelijk worden hergebruikt."),
          card("Uitputting", "Sneller gebruiken van een hulpbron dan die wordt aangevuld."),
          card("Landgebruik", "Manier waarop mensen grond gebruiken, bijvoorbeeld landbouw, stad of natuur.")
        ],
        [
          quiz("Wat geeft de ecologische voetafdruk aan?", ["Hoeveel land en water nodig is voor consumptie en afval", "Hoe hard iemand loopt", "Hoeveel chromosomen iemand heeft", "De pH van regenwater"], 0, "De voetafdruk vertaalt gebruik van hulpbronnen en afval naar benodigde oppervlakte."),
          quiz("Wat past het best bij duurzaamheid?", ["Hulpbronnen gebruiken zonder toekomstige generaties te benadelen", "Alle grondstoffen in een keer opmaken", "Biodiversiteit altijd verlagen", "Afval nooit hergebruiken"], 0, "Duurzaamheid draait om langdurig evenwicht tussen menselijk gebruik en herstelvermogen."),
          quiz("Wat is een ecosysteemdienst?", ["Bestuiving door insecten", "Een celkern", "Een erfelijke mutatie", "Een foutbalk"], 0, "Bestuiving is een dienst van ecosystemen waar landbouw en natuur van profiteren."),
          quiz("Waarom verlaagt hergebruik de druk op ecosystemen?", ["Er zijn minder nieuwe grondstoffen nodig", "Er ontstaat meer DNA", "Alle soorten verdwijnen", "Osmose stopt"], 0, "Hergebruik vermindert winning, afval en energiegebruik.")
        ]
      ),
      paragraph(
        "2",
        "Kringlopen en vervuiling",
        "Stoffen circuleren in ecosystemen via kringlopen. In de koolstofkringloop worden CO2, organische stoffen en fossiele brandstoffen met elkaar verbonden. In de stikstofkringloop zetten bacterien stikstofverbindingen om, waardoor planten stikstof kunnen opnemen voor eiwitten en DNA.\n\nMenselijke activiteit kan kringlopen verstoren. Extra nitraat en fosfaat uit landbouw of afvalwater veroorzaken eutrofiering: algen groeien snel, sterven af en worden afgebroken door bacterien die zuurstof verbruiken. Sommige gifstoffen hopen op in organismen en worden sterker geconcentreerd hoger in de voedselketen.",
        [
          "Je beschrijft koolstof- en stikstofkringloop in hoofdlijnen.",
          "Je legt eutrofiering uit.",
          "Je verklaart ophoping en doorvergiftiging in voedselketens."
        ],
        [
          card("Koolstofkringloop", "Kringloop van koolstof tussen CO2, organismen, bodem, water en fossiele brandstoffen."),
          card("Stikstofkringloop", "Kringloop waarin stikstofverbindingen door organismen en bacterien worden omgezet."),
          card("Nitraat", "Stikstofverbinding die planten kunnen opnemen."),
          card("Fosfaat", "Voedingszout dat nodig is voor onder andere DNA en ATP."),
          card("Eutrofiering", "Verrijking van water met voedingsstoffen, vaak met algenbloei en zuurstofgebrek als gevolg."),
          card("Bioaccumulatie", "Ophoping van een stof in een organisme."),
          card("Doorvergiftiging", "Toename van gifstofconcentratie op hogere trofische niveaus."),
          card("Afbraak", "Omzetting van dode resten door reducenten.")
        ],
        [
          quiz("Waardoor ontstaat eutrofiering vaak?", ["Te veel nitraat en fosfaat in water", "Te weinig zonlicht op land", "Een tekort aan DNA", "Het ontbreken van alle bacterien"], 0, "Voedingsstoffen stimuleren algenbloei, waarna afbraak zuurstof kan verbruiken."),
          quiz("Waarom kan zuurstofgebrek ontstaan na algenbloei?", ["Afbraakbacterien verbruiken zuurstof", "Algen maken nooit organische stoffen", "Vissen maken fosfaat", "Water bevat geen bacterien"], 0, "Dode algen worden afgebroken; daarbij gebruiken reducenten zuurstof."),
          quiz("Wat is doorvergiftiging?", ["Gifstoffen worden geconcentreerder hoger in de voedselketen", "Water verdampt sneller", "Planten nemen meer licht op", "DNA verdubbelt"], 0, "Predatoren eten veel prooidieren en krijgen zo opgehoopte gifstoffen binnen."),
          quiz("Waarvoor gebruiken planten nitraat?", ["Voor de bouw van aminozuren en eiwitten", "Alleen om zuurstof te maken", "Om licht te breken", "Om haren te bewegen"], 0, "Stikstof uit nitraat is nodig voor aminozuren, eiwitten en nucleotiden.")
        ],
        [
          { title: "Eutrofiering", steps: ["Extra nitraat/fosfaat komt in water", "Algen groeien snel", "Algen sterven af", "Bacterien breken dode algen af", "Zuurstofgehalte daalt", "Waterdieren kunnen sterven"] }
        ]
      ),
      paragraph(
        "3",
        "Klimaat en natuurbeheer",
        "Door verbranding van fossiele brandstoffen en verandering in landgebruik neemt de concentratie broeikasgassen toe. Daardoor wordt het versterkte broeikaseffect groter en stijgt de gemiddelde temperatuur op aarde. Klimaatverandering beinvloedt verspreiding van soorten, timing van seizoenen, zeespiegel en extreme weersomstandigheden.\n\nNatuurbeheer probeert biodiversiteit en ecosysteemfuncties te behouden of herstellen. Dat kan door gebieden te verbinden, leefgebieden te herstellen, vervuiling te verminderen en indicatorsoorten te volgen.",
        [
          "Je legt het versterkte broeikaseffect uit.",
          "Je beschrijft biologische gevolgen van klimaatverandering.",
          "Je noemt manieren om biodiversiteit te beschermen."
        ],
        [
          card("Broeikasgas", "Gas dat warmtestraling vasthoudt, zoals CO2, methaan en waterdamp."),
          card("Versterkt broeikaseffect", "Extra opwarming door toename van broeikasgassen door menselijke activiteit."),
          card("Klimaatverandering", "Langdurige verandering in gemiddelde temperatuur en weerpatronen."),
          card("Habitat", "Leefgebied van een soort."),
          card("Versnippering", "Opdeling van leefgebied in kleinere, geisoleerde stukken."),
          card("Ecologische verbinding", "Verbinding waardoor organismen tussen leefgebieden kunnen bewegen."),
          card("Indicatorsoort", "Soort waarvan aanwezigheid iets zegt over de toestand van een ecosysteem."),
          card("Natuurherstel", "Maatregelen die een beschadigd ecosysteem weer beter laten functioneren.")
        ],
        [
          quiz("Wat veroorzaakt het versterkte broeikaseffect vooral?", ["Toename van broeikasgassen door menselijke activiteit", "Afname van alle planten", "Het verdwijnen van osmose", "Een lagere zonkracht"], 0, "Extra CO2 en methaan houden meer warmtestraling vast."),
          quiz("Wat is versnippering?", ["Leefgebied raakt opgedeeld in geisoleerde delen", "DNA wordt altijd korter", "Water wordt zuurstof", "Een grafiek krijgt meer punten"], 0, "Versnippering maakt uitwisseling tussen populaties moeilijker."),
          quiz("Waarom zijn ecologische verbindingen nuttig?", ["Populaties kunnen uitwisselen en leefgebieden bereiken", "Ze maken alle soorten identiek", "Ze verhogen altijd vervuiling", "Ze stoppen fotosynthese"], 0, "Verbindingen helpen migratie en genetische uitwisseling."),
          quiz("Wat doet een indicatorsoort?", ["Geeft informatie over de toestand van een ecosysteem", "Meet bloeddruk", "Maakt ATP in mitochondrien", "Vormt antistoffen"], 0, "Sommige soorten komen alleen voor bij bepaalde milieukwaliteit.")
        ]
      )
    ],
    exams: [
      exam(
        "mm-ex1",
        "Meststoffen in een sloot",
        "Na zware regen spoelen meststoffen van een akker een sloot in. Enkele weken later worden veel dode vissen gevonden.",
        "Leg uit hoe meststoffen kunnen leiden tot vissterfte.",
        3,
        [
          "Meststoffen bevatten nitraat/fosfaat waardoor algen sterk groeien (1 p).",
          "Als algen sterven, breken bacterien de dode algen af en gebruiken daarbij zuurstof (1 p).",
          "Daardoor daalt het zuurstofgehalte in het water, waardoor vissen kunnen stikken/sterven (1 p)."
        ]
      ),
      exam(
        "mm-ex2",
        "Verbonden natuurgebieden",
        "Een provincie legt natuurstroken aan tussen kleine heidegebieden.",
        "Leg uit hoe zulke verbindingen de overlevingskans van populaties kunnen vergroten.",
        2,
        [
          "Individuen kunnen tussen gebieden bewegen, waardoor immigratie en voortplanting tussen populaties mogelijk wordt (1 p).",
          "Daardoor neemt genetische uitwisseling toe en wordt de kans op inteelt of lokaal uitsterven kleiner (1 p)."
        ]
      )
    ]
  });

  upsertTopic({
    id: "planten",
    title: "Planten",
    icon: "🌱",
    theme: "t-green",
    domain: "Plantenfysiologie",
    intro: "Planten maken organische stoffen uit licht, water en koolstofdioxide. Je leert hoe bladeren, wortels, stengels, transportweefsels, hormonen en bloemen samenwerken in groei en voortplanting.",
    paragraphs: [
      paragraph(
        "1",
        "Fotosynthese en bladbouw",
        "Bij fotosynthese zetten planten koolstofdioxide en water om in glucose en zuurstof met behulp van lichtenergie. Dit gebeurt in chloroplasten met chlorofyl. Glucose gebruikt de plant voor verbranding, opslag als zetmeel en bouw van andere organische stoffen.\n\nBladeren zijn aangepast aan fotosynthese. Het palissadeparenchym bevat veel chloroplasten, huidmondjes regelen gaswisseling en het sponsparenchym heeft luchtholtes waardoor CO2 en O2 kunnen diffunderen.",
        [
          "Je beschrijft de reactanten en producten van fotosynthese.",
          "Je legt uit hoe bladbouw past bij fotosynthese en gaswisseling.",
          "Je verklaart de rol van huidmondjes."
        ],
        [
          card("Fotosynthese", "Proces waarbij lichtenergie wordt gebruikt om CO2 en water om te zetten in glucose en zuurstof."),
          card("Chlorofyl", "Bladgroen pigment dat licht absorbeert."),
          card("Chloroplast", "Organel waarin fotosynthese plaatsvindt."),
          card("Huidmondje", "Opening in de opperhuid van een blad voor gaswisseling en verdamping."),
          card("Sluitcel", "Cel die een huidmondje opent of sluit."),
          card("Palissadeparenchym", "Bladweefsel met veel chloroplasten; belangrijke plaats van fotosynthese."),
          card("Sponsparenchym", "Bladweefsel met luchtholtes voor gaswisseling."),
          card("Zetmeel", "Opslagvorm van glucose in planten.")
        ],
        [
          quiz("Wat zijn de grondstoffen van fotosynthese?", ["CO2 en water", "Glucose en zuurstof", "Eiwit en vet", "Nitraat en DNA"], 0, "CO2 en water worden met lichtenergie omgezet in glucose en zuurstof."),
          quiz("Waar vindt fotosynthese plaats?", ["Chloroplasten", "Mitochondrien", "Celkernen", "Ribosomen"], 0, "Chloroplasten bevatten chlorofyl en de enzymen voor fotosynthese."),
          quiz("Wat regelen huidmondjes?", ["Gaswisseling en verdamping", "DNA-replicatie", "Bloeddruk", "Impulsgeleiding"], 0, "Via huidmondjes komt CO2 binnen en gaan O2 en waterdamp naar buiten."),
          quiz("Waarom heeft sponsparenchym luchtholtes?", ["Voor snelle diffusie van gassen", "Voor opslag van botweefsel", "Voor vorming van antistoffen", "Voor transport van impulsen"], 0, "Luchtholtes verkorten de diffusieweg voor CO2 en O2.")
        ]
      ),
      paragraph(
        "2",
        "Transport in planten",
        "Wortelharen vergroten het opnameoppervlak voor water en mineralen. Water gaat via osmose en transport door wortelcellen naar de houtvaten. Houtvaten vervoeren water en mineralen omhoog, vooral door verdamping aan bladeren: de verdampingsstroom.\n\nBastvaten vervoeren opgeloste suikers van bronnen naar bestemmingen. Een bron is een plantendeel waar suiker wordt gemaakt of vrijgemaakt, zoals een blad. Een bestemming is een deel waar suiker wordt gebruikt of opgeslagen, zoals wortels, vruchten of groeiende knoppen.",
        [
          "Je beschrijft opname van water en mineralen door wortels.",
          "Je vergelijkt houtvaten en bastvaten.",
          "Je legt de verdampingsstroom uit."
        ],
        [
          card("Wortelhaar", "Uitgroei van een wortelcel die het opnameoppervlak vergroot."),
          card("Houtvat", "Transportweefsel voor water en mineralen, meestal omhoog."),
          card("Bastvat", "Transportweefsel voor opgeloste suikers en andere organische stoffen."),
          card("Verdamping", "Overgang van water naar waterdamp, vooral via huidmondjes."),
          card("Verdampingsstroom", "Opwaartse waterstroom in houtvaten door verdamping aan bladeren."),
          card("Mineralen", "Anorganische voedingsstoffen zoals nitraat, fosfaat en magnesium."),
          card("Bron", "Plantendeel dat suikers levert aan bastvaten."),
          card("Bestemming", "Plantendeel dat suikers gebruikt of opslaat.")
        ],
        [
          quiz("Wat vervoeren houtvaten vooral?", ["Water en mineralen", "Antistoffen", "Zenuwimpulsen", "Alleen zuurstof"], 0, "Houtvaten transporteren water en mineralen vanuit de wortels omhoog."),
          quiz("Wat vervoeren bastvaten?", ["Opgeloste suikers", "Alleen DNA", "Alleen CO2", "Bloedplasma"], 0, "Bastvaten verdelen assimilatieproducten zoals sacharose door de plant."),
          quiz("Waarom vergroten wortelharen de opname?", ["Ze vergroten het oppervlak", "Ze maken de plant warmbloedig", "Ze sluiten huidmondjes", "Ze vormen bloemen"], 0, "Meer oppervlak geeft meer contact met bodemwater en mineralen."),
          quiz("Wat drijft de verdampingsstroom vooral aan?", ["Verdamping uit bladeren", "Mitose in bloemen", "Geluidstrillingen", "Antibiotica"], 0, "Door verdamping ontstaat trekkracht in de waterkolom van de houtvaten.")
        ]
      ),
      paragraph(
        "3",
        "Groei en regeling",
        "Planten groeien door celdeling in meristemen, gevolgd door celstrekking en differentiatie. Plantenhormonen regelen groei, rijping en reacties op de omgeving. Auxine stimuleert onder andere celstrekking en speelt een rol bij fototropie: groei naar licht.\n\nPlanten reageren op prikkels zonder zenuwstelsel. Bij tropie hangt de groeirichting af van de richting van de prikkel, zoals licht of zwaartekracht. Nastie is een beweging waarbij de richting niet afhangt van de prikkelrichting, bijvoorbeeld het sluiten van sommige bladeren bij aanraking.",
        [
          "Je beschrijft groei door deling, strekking en differentiatie.",
          "Je legt de rol van plantenhormonen uit.",
          "Je onderscheidt tropie en nastie."
        ],
        [
          card("Meristeem", "Deelweefsel in planten waar nieuwe cellen ontstaan."),
          card("Celstrekking", "Groei doordat plantencellen groter worden."),
          card("Plantenhormoon", "Regelstof die groei en ontwikkeling van planten beinvloedt."),
          card("Auxine", "Plantenhormoon dat celstrekking beinvloedt en betrokken is bij fototropie."),
          card("Fototropie", "Groeibeweging naar of van licht."),
          card("Geotropie", "Groeibeweging onder invloed van zwaartekracht."),
          card("Nastie", "Beweging waarvan de richting niet afhangt van de prikkelrichting."),
          card("Differentiatie", "Ontwikkeling van cellen tot gespecialiseerde celtypen.")
        ],
        [
          quiz("Waar vindt primaire groei vooral plaats?", ["In meristemen", "In dode houtvaten", "In zaden zonder cellen", "In zuurstof"], 0, "Meristemen bevatten delende cellen."),
          quiz("Wat is fototropie?", ["Groeibeweging onder invloed van licht", "Verbranding van glucose", "Vorming van antistoffen", "Deling van bacterien"], 0, "Bij fototropie bepaalt licht de richting van groei."),
          quiz("Welke stof is een plantenhormoon?", ["Auxine", "Hemoglobine", "Antigeen", "Myeline"], 0, "Auxine regelt onder andere celstrekking."),
          quiz("Wat is een verschil tussen tropie en nastie?", ["Bij tropie hangt de richting af van de prikkelrichting", "Bij nastie is altijd DNA betrokken", "Tropie komt alleen bij dieren voor", "Nastie is altijd fotosynthese"], 0, "Tropie is gericht ten opzichte van de prikkel; nastie niet.")
        ]
      ),
      paragraph(
        "4",
        "Voortplanting van planten",
        "Bloemplanten planten zich geslachtelijk voort met bloemen. Meeldraden maken stuifmeelkorrels met mannelijke geslachtscellen; stampers bevatten zaadbeginsels met eicellen. Bij bestuiving komt stuifmeel op de stempel. Daarna groeit een stuifmeelbuis naar het zaadbeginsel en kan bevruchting plaatsvinden.\n\nNa bevruchting ontstaat uit het zaadbeginsel een zaad en uit het vruchtbeginsel vaak een vrucht. Verspreiding van zaden door wind, water of dieren vergroot de kans dat nakomelingen op een geschikte plek groeien. Planten kunnen zich ook ongeslachtelijk voortplanten, bijvoorbeeld met bollen, knollen, uitlopers of stekken.",
        [
          "Je beschrijft bestuiving, bevruchting, zaad en vruchtvorming.",
          "Je legt het nut van zaadverspreiding uit.",
          "Je vergelijkt geslachtelijke en ongeslachtelijke voortplanting bij planten."
        ],
        [
          card("Bestuiving", "Overbrengen van stuifmeel op de stempel van een bloem."),
          card("Bevruchting", "Versmelting van mannelijke geslachtscel met eicel."),
          card("Meeldraad", "Mannelijk bloemdeel dat stuifmeel vormt."),
          card("Stamper", "Vrouwelijk bloemdeel met stempel, stijl en vruchtbeginsel."),
          card("Zaadbeginsel", "Deel in het vruchtbeginsel met eicel; groeit na bevruchting uit tot zaad."),
          card("Vruchtbeginsel", "Onderste deel van de stamper dat kan uitgroeien tot vrucht."),
          card("Zaadverspreiding", "Verplaatsing van zaden weg van de ouderplant."),
          card("Ongeslachtelijke voortplanting", "Voortplanting zonder versmelting van geslachtscellen; nakomelingen zijn genetisch gelijk aan de ouder, behalve door mutaties.")
        ],
        [
          quiz("Wat gebeurt bij bestuiving?", ["Stuifmeel komt op de stempel", "Een zaad kiemt", "Water verdampt uit houtvaten", "Auxine wordt afgebroken"], 0, "Bestuiving is de overdracht van stuifmeel naar de stempel."),
          quiz("Waaruit ontstaat na bevruchting meestal een zaad?", ["Zaadbeginsel", "Kroonblad", "Houtvat", "Huidmondje"], 0, "Het zaadbeginsel ontwikkelt zich tot zaad."),
          quiz("Wat is een voordeel van zaadverspreiding?", ["Minder concurrentie met de ouderplant", "Geen fotosynthese nodig", "Alle zaden vallen op dezelfde plek", "Alle nakomelingen worden steriel"], 0, "Verspreiding vergroot de kans op geschikte groeiplaatsen en verlaagt concurrentie."),
          quiz("Wat kenmerkt ongeslachtelijke voortplanting?", ["Geen versmelting van geslachtscellen", "Altijd bestuiving door insecten", "Altijd meer genetische variatie", "Alleen in dieren"], 0, "Bij ongeslachtelijke voortplanting ontstaat een nieuwe plant uit delen van de ouderplant.")
        ],
        [
          { title: "Van bloem naar zaad", steps: ["Bestuiving", "Stuifmeelbuis groeit", "Mannelijke geslachtscel bereikt eicel", "Bevruchting", "Zaadbeginsel wordt zaad", "Vruchtbeginsel wordt vrucht"] }
        ]
      )
    ],
    exams: [
      exam(
        "pl-ex1",
        "Huidmondjes bij droogte",
        "Op een warme droge dag sluiten veel planten hun huidmondjes gedeeltelijk.",
        "Leg uit wat het voordeel en het nadeel hiervan is voor de plant.",
        3,
        [
          "Door sluiten van huidmondjes verliest de plant minder water door verdamping (1 p).",
          "Er komt ook minder CO2 het blad binnen (1 p).",
          "Daardoor kan de fotosynthesesnelheid dalen / wordt minder glucose gevormd (1 p)."
        ]
      ),
      exam(
        "pl-ex2",
        "Suikertransport naar vruchten",
        "In de zomer maken bladeren veel glucose. Een deel daarvan wordt als suiker naar groeiende vruchten vervoerd.",
        "Noem het transportweefsel dat hierbij betrokken is en leg uit waarom de vrucht een bestemming is.",
        2,
        [
          "De suikers worden vervoerd via bastvaten (1 p).",
          "De vrucht is een bestemming omdat daar suikers worden gebruikt voor groei of opgeslagen als reservestof (1 p)."
        ]
      )
    ]
  });

  upsertTopic({
    id: "samenhang-biologie",
    title: "Samenhang in de biologie",
    icon: "🧩",
    theme: "t-purple",
    domain: "Systeemdenken",
    intro: "In dit hoofdstuk verbind je de losse onderwerpen. Je oefent hoe cellen, organen, organismen, populaties en ecosystemen elkaar beinvloeden en hoe je biologische redeneringen compleet opbouwt.",
    paragraphs: [
      paragraph(
        "1",
        "Homeostase en terugkoppeling",
        "Organismen houden hun inwendige milieu binnen grenzen door homeostase. Regelkringen bestaan uit receptoren, een norm, een regelcentrum en effectoren. Negatieve terugkoppeling verkleint een afwijking van de norm, zoals bij temperatuurregeling of glucosegehalte.\n\nPositieve terugkoppeling versterkt juist een proces en komt minder vaak voor, bijvoorbeeld bij weeën tijdens de geboorte. Voor examenredeneringen is vooral belangrijk dat je prikkel, sensor, regelcentrum, effector en gevolg in de juiste volgorde beschrijft.",
        [
          "Je herkent onderdelen van een regelkring.",
          "Je legt negatieve en positieve terugkoppeling uit.",
          "Je past homeostase toe op nieuwe contexten."
        ],
        [
          card("Homeostase", "Het constant houden van het inwendige milieu binnen grenzen."),
          card("Receptor", "Cel of orgaan dat een verandering waarneemt."),
          card("Norm", "Gewenste waarde waar een regelkring omheen stuurt."),
          card("Regelcentrum", "Orgaan of gebied dat informatie vergelijkt met de norm en effectoren aanstuurt."),
          card("Effector", "Spier of klier die een reactie uitvoert."),
          card("Negatieve terugkoppeling", "Terugkoppeling die een afwijking van de norm verkleint."),
          card("Positieve terugkoppeling", "Terugkoppeling die een proces versterkt."),
          card("Inwendig milieu", "Bloed, weefselvloeistof en lymfe rond de lichaamscellen.")
        ],
        [
          quiz("Wat doet negatieve terugkoppeling?", ["Een afwijking van de norm verkleinen", "Een afwijking altijd vergroten", "DNA kopieren", "Alle cellen doden"], 0, "Negatieve terugkoppeling stuurt een waarde terug richting de norm."),
          quiz("Wat is een effector?", ["Spier of klier die de reactie uitvoert", "Een meetfout", "Een stuk DNA zonder functie", "Een voedselketen"], 0, "Effectoren zorgen voor de daadwerkelijke correctie."),
          quiz("Welke reeks past bij een regelkring?", ["Receptor - regelcentrum - effector - reactie", "Effector - DNA - fossiel - ecosysteem", "Mitochondrium - populatie - stempel - gedrag", "Antistof - huidmondje - genotype - zuurstof"], 0, "Een regelkring verwerkt waarneming en stuurt daarna een reactie aan."),
          quiz("Wat gebeurt bij positieve terugkoppeling?", ["Een proces wordt versterkt", "Een waarde keert altijd direct terug naar de norm", "Alle prikkels verdwijnen", "Er ontstaan geen signalen"], 0, "Positieve terugkoppeling vergroot de oorspronkelijke verandering.")
        ]
      ),
      paragraph(
        "2",
        "Stof, energie en transport",
        "Organismen zijn open systemen: ze nemen stoffen en energie op en geven stoffen en warmte af. Bij mensen leveren voeding, vertering, transport, gaswisseling en uitscheiding samen de voorwaarden voor celstofwisseling. Glucose en zuurstof bereiken cellen via bloed; koolstofdioxide en afvalstoffen worden afgevoerd.\n\nBij planten koppelen fotosynthese, transport en groei dezelfde thema's. Fotosynthese legt energie vast in glucose, dissimilatie maakt ATP vrij en kringlopen brengen stoffen terug in ecosystemen. Energie stroomt door voedselketens, stoffen blijven in kringlopen circuleren.",
        [
          "Je verbindt vertering, transport, gaswisseling en uitscheiding met celstofwisseling.",
          "Je legt het verschil uit tussen energiestroom en stoffenkringloop.",
          "Je past systeemdenken toe op mens, plant en ecosysteem."
        ],
        [
          card("Open systeem", "Systeem dat stoffen en energie uitwisselt met de omgeving."),
          card("Assimilatie", "Opbouw van organische stoffen uit eenvoudigere stoffen."),
          card("Dissimilatie", "Afbraak van organische stoffen waarbij energie vrijkomt."),
          card("ATP", "Energiedrager die cellen direct gebruiken voor processen."),
          card("Energiestroom", "Doorstroom van energie door voedselketens, met verlies als warmte."),
          card("Stoffenkringloop", "Herhaald gebruik en omzetting van stoffen in ecosystemen."),
          card("Uitscheiding", "Verwijdering van afvalstoffen uit het lichaam."),
          card("Transportstelsel", "Stelsel dat stoffen binnen een organisme vervoert.")
        ],
        [
          quiz("Waarom zijn organismen open systemen?", ["Ze wisselen stoffen en energie uit", "Ze hebben nooit membranen", "Ze bestaan niet uit cellen", "Ze hebben geen DNA"], 0, "Organismen nemen op, zetten om en geven stoffen en energie af."),
          quiz("Wat is het verschil tussen energie en stoffen in ecosystemen?", ["Energie stroomt door, stoffen kringlopen", "Stoffen verdwijnen altijd, energie kringloopt", "Beide verdwijnen volledig", "Geen van beide verandert"], 0, "Energie gaat uiteindelijk als warmte verloren; stoffen kunnen worden hergebruikt."),
          quiz("Welke combinatie levert cellen brandstof en zuurstof?", ["Vertering, gaswisseling en transport", "Alleen het skelet", "Alleen de huid", "Alleen het netvlies"], 0, "Vertering levert voedingsstoffen, gaswisseling zuurstof en transport brengt ze naar cellen."),
          quiz("Waarvoor gebruiken cellen ATP?", ["Als directe energiedrager", "Als erfelijke code", "Als antigeen", "Als pigment"], 0, "ATP levert direct energie voor celprocessen zoals actief transport en beweging.")
        ],
        [
          { title: "Glucose van maaltijd naar ATP", steps: ["Voedsel bevat koolhydraten", "Vertering tot glucose", "Opname in bloed", "Transport naar cellen", "Dissimilatie met zuurstof", "ATP beschikbaar voor celprocessen"] }
        ]
      ),
      paragraph(
        "3",
        "Evolutie, ecologie en gezondheid",
        "Biologische systemen veranderen door selectie op erfelijke variatie. Op populatieniveau kan natuurlijke selectie leiden tot aanpassing aan de omgeving. Op ecosysteemniveau werken populaties samen in voedselwebben en kringlopen. Menselijke keuzes, ziekteverwekkers en klimaatverandering kunnen die systemen snel veranderen.\n\nGezondheid is ook samenhang: genen, gedrag, milieu, afweer, hormonen en leefstijl beinvloeden elkaar. Een compleet biologisch antwoord benoemt daarom vaak meerdere factoren en legt uit hoe ze via oorzaak en gevolg verbonden zijn.",
        [
          "Je verbindt erfelijke variatie, selectie en populatieverandering.",
          "Je legt uit hoe ecologische veranderingen doorwerken in voedselwebben.",
          "Je bouwt meerstapsverklaringen met meerdere biologische factoren."
        ],
        [
          card("Erfelijke variatie", "Verschillen in DNA/allelen tussen individuen."),
          card("Natuurlijke selectie", "Proces waarbij individuen met gunstige erfelijke eigenschappen gemiddeld meer nakomelingen krijgen."),
          card("Aanpassing", "Eigenschap die de overlevings- of voortplantingskans in een omgeving vergroot."),
          card("Voedselweb", "Netwerk van voedselrelaties tussen soorten."),
          card("Gezondheid", "Toestand waarin lichamelijke en mentale functies goed kunnen verlopen."),
          card("Leefstijl", "Gedragspatroon zoals voeding, beweging, slaap en middelengebruik."),
          card("Risicofactor", "Factor die de kans op ziekte of schade vergroot."),
          card("Meerstapsverklaring", "Biologische uitleg waarin meerdere oorzaken en gevolgen logisch op elkaar volgen.")
        ],
        [
          quiz("Op welk niveau werkt natuurlijke selectie direct?", ["Populaties over generaties", "Losse organellen zonder erfelijkheid", "Alleen ecosystemen zonder soorten", "Alleen dode stoffen"], 0, "Individuen verschillen, maar de samenstelling van populaties verandert over generaties."),
          quiz("Waarom is erfelijke variatie nodig voor evolutie?", ["Zonder variatie is er niets waarop selectie verschillend kan werken", "Omdat variatie alle organismen hetzelfde maakt", "Omdat variatie fotosynthese stopt", "Omdat selectie geen nakomelingen gebruikt"], 0, "Selectie verandert alleen populaties als eigenschappen erfelijk verschillen."),
          quiz("Wat hoort bij een meerstapsverklaring?", ["Elke schakel tussen oorzaak en gevolg noemen", "Alleen het eindantwoord geven", "Geen vakbegrippen gebruiken", "De vraag overschrijven"], 0, "Een complete verklaring laat zien hoe de ene verandering de volgende veroorzaakt."),
          quiz("Waarom kan een verandering in een voedselweb veel soorten raken?", ["Soorten zijn via voedselrelaties met elkaar verbonden", "Alle soorten hebben hetzelfde DNA", "Energie kringloopt zonder verlies", "Predatie bestaat niet"], 0, "Als een soort verandert, veranderen voedselbeschikbaarheid en predatiedruk voor andere soorten.")
        ]
      )
    ],
    exams: [
      exam(
        "sam-ex1",
        "Glucose na een maaltijd",
        "Na een koolhydraatrijke maaltijd stijgt het glucosegehalte van het bloed. Enige tijd later daalt het weer richting de normale waarde.",
        "Leg uit hoe negatieve terugkoppeling hierbij werkt. Noem receptor/regelcentrum, hormoon en effector.",
        3,
        [
          "Cellen in de alvleesklier nemen de stijging van het glucosegehalte waar en functioneren als receptor/regelcentrum (1 p).",
          "De alvleesklier geeft meer insuline af aan het bloed (1 p).",
          "Lever- en spiercellen nemen meer glucose op en slaan het op als glycogeen, waardoor het glucosegehalte daalt richting de norm (1 p)."
        ]
      ),
      exam(
        "sam-ex2",
        "Van droogte naar populatieverandering",
        "Door een lange droge zomer groeien er minder planten in een gebied. In hetzelfde jaar krijgen planteneters minder jongen.",
        "Leg met een keten van oorzaak en gevolg uit hoe droogte kan leiden tot minder jongen bij planteneters.",
        3,
        [
          "Door droogte is er minder water beschikbaar voor planten, waardoor fotosynthese/groei afneemt (1 p).",
          "Daardoor is er minder plantaardig voedsel/energie beschikbaar voor planteneters (1 p).",
          "Planteneters hebben minder energie voor voortplanting of overleving van jongen, waardoor er minder jongen komen/overleven (1 p)."
        ]
      )
    ]
  });

  upsertTopic({
    id: "examenvaardigheden",
    title: "Op weg naar het examen",
    icon: "🎯",
    theme: "t-gold",
    domain: "Examenvaardigheden",
    intro: "Biologie-examens toetsen niet alleen kennis, maar vooral toepassen, redeneren en data gebruiken. In dit hoofdstuk oefen je hoe je vragen leest, berekeningen maakt en antwoorden formuleert volgens het antwoordmodel.",
    paragraphs: [
      paragraph(
        "1",
        "Examentaal lezen",
        "Een examenvraag bevat vaak een context, bronnen en een opdrachtwoord. Lees eerst wat er precies gevraagd wordt: noem, beschrijf, leg uit, bereken, verklaar of beargumenteer. Het opdrachtwoord bepaalt hoeveel redenering nodig is.\n\nOnderstreep grootheden, organismen, organen, processen en tijdstippen. Koppel daarna de context aan een biologisch concept, zoals homeostase, evolutie, stofwisseling, afweer of ecologie. Zo voorkom je dat je algemene kennis opschrijft die niet bij de vraag past.",
        [
          "Je herkent opdrachtwoorden in examenvragen.",
          "Je koppelt contextinformatie aan biologische concepten.",
          "Je selecteert relevante informatie uit tekst en bronnen."
        ],
        [
          card("Context", "Situatie of bron waarbinnen de examenvraag speelt."),
          card("Opdrachtwoord", "Werkwoord dat aangeeft wat je moet doen, zoals leg uit of bereken."),
          card("Noem", "Geef een kort antwoord zonder uitgebreide verklaring."),
          card("Beschrijf", "Geef kenmerken of verloop in woorden."),
          card("Leg uit", "Geef oorzaak en gevolg met biologische tussenstappen."),
          card("Verklaar", "Geef de biologische reden voor een verschijnsel."),
          card("Beargumenteer", "Onderbouw een keuze of standpunt met biologische gegevens."),
          card("Brongebruik", "Gegevens uit tekst, afbeelding, tabel of grafiek gericht gebruiken.")
        ],
        [
          quiz("Wat vraagt het opdrachtwoord 'leg uit' meestal?", ["Een oorzaak-gevolgredenering", "Alleen een getal", "Alleen ja of nee", "Een tekening zonder tekst"], 0, "Bij 'leg uit' moet je biologische tussenstappen noemen."),
          quiz("Waarom moet je eerst de vraag lezen?", ["Dan weet je welke broninformatie relevant is", "Dan hoef je de bron nooit te bekijken", "Dan verandert het antwoordmodel", "Dan verdwijnen foutbalken"], 0, "De vraag bepaalt waar je in de context op moet letten."),
          quiz("Wat is een context?", ["De concrete situatie bij een vraag", "Altijd een formule", "Een los begrip zonder toepassing", "Een meetfout"], 0, "De context is de situatie waarin je biologische kennis toepast."),
          quiz("Wat doe je bij 'bereken'?", ["Een getal bepalen met berekening en eenheid", "Alleen een mening geven", "Een proces uitleggen zonder getal", "Een organisme benoemen"], 0, "Bij berekenen laat je stappen zien en geef je de juiste eenheid.")
        ]
      ),
      paragraph(
        "2",
        "Data, grafieken en rekenen",
        "Biologische data staan vaak in tabellen, grafieken of diagrammen. Let op assen, eenheden, schaalverdeling en legenda. Bij grafieken beschrijf je eerst wat je ziet: stijging, daling, optimum, minimum, maximum of verband. Daarna verklaar je het met biologie.\n\nRekenen gaat vaak over procenten, verhouding, snelheid, oppervlakte, vergroting of concentratie. Schrijf je formule of rekenstap op. Rond pas aan het eind af en controleer of je antwoord biologisch logisch is.",
        [
          "Je leest assen, eenheden en trends in grafieken.",
          "Je maakt basisberekeningen met procenten, verhoudingen en snelheid.",
          "Je koppelt data aan biologische verklaringen."
        ],
        [
          card("Trend", "Algemene richting in data, zoals stijging of daling."),
          card("Optimum", "Waarde waarbij een proces het best of snelst verloopt."),
          card("Minimum", "Laagste gemeten of mogelijke waarde."),
          card("Maximum", "Hoogste gemeten of mogelijke waarde."),
          card("Procentuele verandering", "Verandering gedeeld door beginwaarde, maal 100%."),
          card("Verhouding", "Vergelijking tussen twee hoeveelheden."),
          card("Concentratie", "Hoeveelheid stof per volume-eenheid."),
          card("Eenheid", "Maatstaf bij een getal, zoals mg/L, %, s of mmol/L.")
        ],
        [
          quiz("Waar kijk je eerst naar bij een grafiek?", ["Assen, eenheden en legenda", "Alleen de kleur", "Alleen de titel van het hoofdstuk", "De laatste zin van je antwoord"], 0, "Assen en eenheden bepalen wat de data betekenen."),
          quiz("Wat is een optimum?", ["Waarde waarbij een proces maximaal of het best verloopt", "Altijd nul", "De beginwaarde van elke tabel", "Een fout in een proef"], 0, "Bij enzymen is bijvoorbeeld een optimumtemperatuur mogelijk."),
          quiz("Hoe bereken je procentuele verandering?", ["(verandering / beginwaarde) x 100%", "beginwaarde x eindwaarde", "eindwaarde + eenheid", "verandering / 100 zonder beginwaarde"], 0, "Je vergelijkt de verandering met de beginwaarde."),
          quiz("Waarom rond je pas aan het eind af?", ["Om afrondingsfouten te beperken", "Omdat eenheden dan verdwijnen", "Omdat grafieken anders niet bestaan", "Omdat het antwoordmodel dat nooit leest"], 0, "Te vroeg afronden kan je eindantwoord onnauwkeuriger maken.")
        ]
      ),
      paragraph(
        "3",
        "Antwoorden volgens het model",
        "Een antwoordmodel verdeelt punten over biologische score-elementen. Een lang antwoord is niet automatisch beter: het moet de juiste begrippen, richting en oorzaak-gevolgrelatie bevatten. Gebruik daarom korte, volledige zinnen en voorkom losse trefwoorden zonder verband.\n\nBij uitlegvragen werkt de structuur 'doordat ... daardoor ...' vaak goed. Controleer of je antwoord de vraag herhaalt in biologische termen, of je alle gevraagde onderdelen hebt genoemd en of je geen tegenstrijdige informatie toevoegt.",
        [
          "Je formuleert antwoorden met scorepunten in gedachten.",
          "Je gebruikt vakbegrippen in volledige zinnen.",
          "Je controleert antwoorden op volledigheid en richting."
        ],
        [
          card("Score-element", "Onderdeel van een antwoord waarvoor een punt kan worden gegeven."),
          card("Vakterm", "Precies biologisch begrip dat in een antwoord past."),
          card("Richting", "Juiste toe- of afname in een redenering, bijvoorbeeld meer/minder."),
          card("Volledige zin", "Zin met onderwerp, persoonsvorm en duidelijke biologische relatie."),
          card("Tegenstrijdigheid", "Informatie die je juiste antwoord onderuit kan halen."),
          card("Controle", "Laatste check of je alle delen van de vraag hebt beantwoord."),
          card("Oorzaak-gevolgketen", "Reeks stappen waarin elke stap uit de vorige volgt."),
          card("Conclusiezin", "Korte zin die expliciet antwoord geeft op de vraag.")
        ],
        [
          quiz("Wat levert meestal punten op in een antwoordmodel?", ["Biologische score-elementen", "Een zo lang mogelijk verhaal", "Alleen mooie zinnen", "Een mening zonder uitleg"], 0, "Punten horen bij inhoudelijke onderdelen van de redenering."),
          quiz("Welke structuur helpt bij uitlegvragen?", ["Doordat ... daardoor ...", "Misschien ... leuk ...", "Ja ... nee ...", "Alleen trefwoorden"], 0, "Deze structuur dwingt je oorzaak en gevolg te verbinden."),
          quiz("Waarom zijn losse trefwoorden riskant?", ["Het verband tussen begrippen ontbreekt", "Ze zijn altijd fout gespeld", "Ze zijn nooit biologisch", "Ze tellen dubbel"], 0, "Het antwoordmodel vraagt vaak om de relatie tussen begrippen."),
          quiz("Wat moet je controleren voor je doorgaat?", ["Of alle gevraagde onderdelen zijn beantwoord", "Of je antwoord zo vaag mogelijk is", "Of je de vraag hebt genegeerd", "Of je geen eenheid gebruikt"], 0, "Veel punten gaan verloren doordat een deelvraag of richting ontbreekt.")
        ]
      )
    ],
    exams: [
      exam(
        "exv-ex1",
        "Antwoord verbeteren",
        "Vraag: Leg uit waarom een hogere lichaamstemperatuur de werking van een enzym kan verminderen. Leerlingantwoord: 'Warm is slecht voor enzymen.'",
        "Verbeter dit leerlingantwoord zodat het in examenstijl twee scorepunten kan opleveren.",
        2,
        [
          "Bij een te hoge temperatuur verandert de ruimtelijke vorm/actieve plaats van het enzym (denaturatie) (1 p).",
          "Daardoor past het substraat minder goed of niet meer in het enzym en daalt de reactiesnelheid (1 p)."
        ]
      ),
      exam(
        "exv-ex2",
        "Procentuele verandering",
        "In een proef neemt de gemiddelde lengte van kiemplanten toe van 8,0 cm naar 10,4 cm.",
        "Bereken de procentuele toename van de gemiddelde lengte.",
        2,
        [
          "De toename is 10,4 - 8,0 = 2,4 cm (1 p).",
          "De procentuele toename is 2,4 / 8,0 x 100% = 30% (1 p)."
        ]
      )
    ]
  });

  upsertTopic({
    id: "sport",
    title: "Sport",
    icon: "🏃",
    theme: "t-red",
    domain: "Inspanning",
    intro: "Bij sport werken spieren, zenuwstelsel, bloedsomloop, ademhaling, hormonen en stofwisseling intensief samen. Je leert hoe ATP wordt geleverd, hoe spieren bewegen en hoe het lichaam homeostase bewaart tijdens inspanning.",
    paragraphs: [
      paragraph(
        "1",
        "Energie voor spieren",
        "Spiercellen gebruiken ATP voor samentrekking. De voorraad ATP in spieren is klein en moet voortdurend worden aangevuld. Bij korte maximale inspanning wordt creatinefosfaat gebruikt om snel ATP te vormen. Bij intensieve inspanning zonder voldoende zuurstof levert anaerobe dissimilatie snel ATP, maar ontstaat melkzuur.\n\nBij langdurige inspanning overheerst aerobe dissimilatie in mitochondrien. Daarbij worden glucose en vetzuren met zuurstof afgebroken tot CO2 en water, met veel ATP als opbrengst.",
        [
          "Je vergelijkt ATP-voorraad, creatinefosfaat, anaerobe en aerobe dissimilatie.",
          "Je legt uit waarom zuurstof belangrijk is bij duurinspanning.",
          "Je beschrijft het ontstaan van melkzuur bij intensieve inspanning."
        ],
        [
          card("ATP", "Directe energiedrager voor spiercontractie en andere celprocessen."),
          card("Creatinefosfaat", "Energierijke stof die snel fosfaat kan afstaan om ATP aan te vullen."),
          card("Anaerobe dissimilatie", "Afbraak van glucose zonder zuurstof, met weinig ATP en vorming van melkzuur."),
          card("Aerobe dissimilatie", "Afbraak van brandstoffen met zuurstof, met veel ATP als opbrengst."),
          card("Melkzuur", "Product van anaerobe dissimilatie in spieren."),
          card("Glycogeen", "Opslagvorm van glucose in lever en spieren."),
          card("Vetzuur", "Energierijke brandstof die vooral bij duurinspanning wordt gebruikt."),
          card("Zuurstofschuld", "Extra zuurstofopname na inspanning om herstelprocessen mogelijk te maken.")
        ],
        [
          quiz("Waarvoor gebruiken spiercellen ATP?", ["Voor samentrekking", "Als erfelijk materiaal", "Als antistof", "Voor bestuiving"], 0, "Myosine gebruikt ATP om spiervezels te laten samentrekken."),
          quiz("Welke route levert het meeste ATP per glucosemolecuul?", ["Aerobe dissimilatie", "Anaerobe dissimilatie", "Alleen creatinefosfaat", "Diffusie"], 0, "Met zuurstof kan glucose veel verder worden afgebroken."),
          quiz("Wat ontstaat bij anaerobe dissimilatie in spieren?", ["Melkzuur", "Antistoffen", "Zetmeel", "Myeline"], 0, "Bij zuurstoftekort wordt pyruvaat omgezet in melkzuur."),
          quiz("Wanneer is creatinefosfaat vooral belangrijk?", ["Bij heel korte, explosieve inspanning", "Alleen tijdens slaap", "Bij fotosynthese", "Bij bloedgroepbepaling"], 0, "Creatinefosfaat kan snel ATP aanvullen maar de voorraad is klein.")
        ],
        [
          { title: "Energievoorziening bij sprint", steps: ["Kleine ATP-voorraad wordt gebruikt", "Creatinefosfaat vult ATP snel aan", "Anaerobe dissimilatie neemt toe", "Melkzuur hoopt op", "Na inspanning volgt herstel met extra zuurstof"] }
        ]
      ),
      paragraph(
        "2",
        "Spieren, zenuwen en training",
        "Skeletspieren bestaan uit spiervezels die samentrekken wanneer motorische neuronen impulsen afgeven. In de neuromusculaire synaps zorgt acetylcholine voor depolarisatie van de spiervezel. Binnen spiervezels schuiven actine- en myosinefilamenten langs elkaar, waardoor de spier korter wordt.\n\nTraining veroorzaakt aanpassingen. Krachttraining kan spiervezels dikker maken door meer contractiele eiwitten. Duurtraining vergroot onder andere het aantal mitochondrien, haarvaten en de capaciteit voor aerobe dissimilatie.",
        [
          "Je beschrijft hoe zenuwimpulsen spiercontractie aansturen.",
          "Je legt het schuiffilamentmodel in hoofdlijnen uit.",
          "Je vergelijkt aanpassingen door kracht- en duurtraining."
        ],
        [
          card("Motorisch neuron", "Zenuwcel die impulsen naar spiervezels stuurt."),
          card("Neuromusculaire synaps", "Synaps tussen motorisch neuron en spiervezel."),
          card("Acetylcholine", "Neurotransmitter die spiervezels kan activeren."),
          card("Actine", "Dun filament in spiervezels."),
          card("Myosine", "Dik filament dat met ATP langs actine beweegt."),
          card("Schuifilamentmodel", "Model waarbij actine en myosine langs elkaar schuiven tijdens samentrekking."),
          card("Hypertrofie", "Toename van spieromvang door grotere spiervezels."),
          card("Duurtraining", "Training die aerobe capaciteit en uithoudingsvermogen vergroot.")
        ],
        [
          quiz("Welke neurotransmitter activeert skeletspiervezels vaak?", ["Acetylcholine", "Insuline", "Melanine", "ADH"], 0, "Acetylcholine komt vrij in de neuromusculaire synaps."),
          quiz("Wat gebeurt volgens het schuifilamentmodel?", ["Actine en myosine schuiven langs elkaar", "DNA verlaat de celkern", "Huidmondjes sluiten", "Antistoffen klonteren"], 0, "Door het schuiven worden sarcomeren korter en trekt de spier samen."),
          quiz("Wat is hypertrofie?", ["Grotere spiervezels", "Afbraak van alle mitochondrien", "Lagere botdichtheid", "Vorming van zaadcellen"], 0, "Krachttraining kan leiden tot dikkere spiervezels met meer contractiele eiwitten."),
          quiz("Welke aanpassing past bij duurtraining?", ["Meer mitochondrien en haarvaten", "Minder zuurstoftransport", "Geen aerobe dissimilatie", "Verdwijnen van alle enzymen"], 0, "Duurtraining verhoogt de capaciteit voor zuurstofgebruik en aerobe energieproductie.")
        ]
      ),
      paragraph(
        "3",
        "Homeostase tijdens inspanning",
        "Tijdens inspanning stijgt de behoefte aan zuurstof en brandstoffen. Het ademhalingscentrum verhoogt ademfrequentie en ademdiepte, het hart pompt meer bloed per minuut en bloedvaten naar actieve spieren verwijden. Hormonen zoals adrenaline helpen glucose vrij te maken en hartslag te verhogen.\n\nSpieren produceren ook warmte. De hypothalamus bewaakt de lichaamstemperatuur en activeert zweetklieren en vaatverwijding in de huid. Door zweten verlies je water en zouten; aanvullen is nodig om bloedvolume en osmotische waarde op peil te houden.",
        [
          "Je verbindt ademhaling, bloedsomloop en stofwisseling tijdens inspanning.",
          "Je beschrijft temperatuurregeling door hypothalamus, zweet en huiddoorbloeding.",
          "Je legt uit waarom vocht- en zoutbalans belangrijk zijn bij sport."
        ],
        [
          card("Ademminuutvolume", "Hoeveelheid lucht die per minuut wordt in- en uitgeademd."),
          card("Hartminuutvolume", "Hoeveelheid bloed die het hart per minuut rondpompt."),
          card("Adrenaline", "Hormoon dat het lichaam voorbereidt op actie, onder andere door hartslag en glucosebeschikbaarheid te verhogen."),
          card("Vaatverwijding", "Groter worden van bloedvaten, waardoor meer bloed door een gebied stroomt."),
          card("Thermoregulatie", "Regeling van de lichaamstemperatuur."),
          card("Zweten", "Afgifte van vocht door zweetklieren; verdamping voert warmte af."),
          card("Osmotische waarde", "Maat voor de concentratie opgeloste stoffen in een vloeistof."),
          card("Dehydratie", "Watertekort in het lichaam.")
        ],
        [
          quiz("Waarom stijgt de ademhaling tijdens inspanning?", ["Cellen hebben meer O2 nodig en maken meer CO2", "Er is minder ATP nodig", "De nieren stoppen", "De huid maakt glucose"], 0, "Actieve spieren hebben meer aerobe dissimilatie en produceren meer CO2."),
          quiz("Wat doet adrenaline bij inspanning?", ["Hartslag en glucosebeschikbaarheid verhogen", "Huidmondjes openen", "Antistoffen afbreken", "Melanine vormen"], 0, "Adrenaline ondersteunt snelle actie van het lichaam."),
          quiz("Waarom ga je zweten?", ["Verdamping van zweet voert warmte af", "Zweet maakt ATP", "Zweet vervoert zuurstof naar spieren", "Zweet vormt bot"], 0, "Verdamping kost warmte en koelt het lichaam."),
          quiz("Waarom kan dehydratie prestaties verlagen?", ["Bloedvolume en transport nemen af", "DNA verdubbelt sneller", "Alle enzymen werken optimaal", "Er ontstaat meer zuurstof in bloed"], 0, "Watertekort vermindert transport en verstoort homeostase.")
        ]
      )
    ],
    exams: [
      exam(
        "sport-ex1",
        "Sprint en melkzuur",
        "Een sprinter rent 200 meter maximaal. Aan het einde voelt hij verzuring in zijn beenspieren.",
        "Leg uit waardoor bij zo'n sprint melkzuur ontstaat.",
        3,
        [
          "De ATP-behoefte van de spiercellen is zeer hoog tijdens maximale inspanning (1 p).",
          "De zuurstoftoevoer is niet voldoende voor volledige aerobe dissimilatie (1 p).",
          "Daardoor vindt meer anaerobe dissimilatie van glucose plaats, waarbij melkzuur ontstaat (1 p)."
        ]
      ),
      exam(
        "sport-ex2",
        "Warm tijdens hardlopen",
        "Tijdens een hardloopwedstrijd op een warme dag wordt de huid van een sporter rood en zweet hij veel.",
        "Leg uit hoe deze reacties helpen om de lichaamstemperatuur te regelen.",
        3,
        [
          "De hypothalamus registreert dat de lichaamstemperatuur stijgt en stuurt effectoren aan (1 p).",
          "Bloedvaten in de huid verwijden, waardoor meer warmte via de huid kan worden afgegeven (1 p).",
          "Zweet verdampt op de huid en onttrekt warmte aan het lichaam, waardoor afkoeling optreedt (1 p)."
        ]
      )
    ]
  });

  setTopic("havo", "bvj", "1", "inleiding-biologie");
  setTopic("havo", "bvj", "14", "samenhang-biologie");
  setTopic("vwo", "bvj", "1", "inleiding-biologie");
  setTopic("vwo", "bvj", "6", "mens-milieu");
  setTopic("vwo", "bvj", "11", "planten");
  setTopic("vwo", "bvj", "16", "samenhang-biologie");

  setTopic("havo", "nectar", "1", "gedrag");
  setTopic("havo", "nectar", "2", "cellen");
  setTopic("havo", "nectar", "3", "onderzoek");
  setTopic("havo", "nectar", "7", "soorten-populaties");
  setTopic("havo", "nectar", "15", "examenvaardigheden");

  setTopic("vwo", "nectar", "1", "gedrag");
  setTopic("vwo", "nectar", "2", "cellen");
  setTopic("vwo", "nectar", "3", "onderzoek");
  setTopic("vwo", "nectar", "6", "soorten-populaties");
  setTopic("vwo", "nectar", "9", "mens-milieu");
  setTopic("vwo", "nectar", "19", "sport");
  setTopic("vwo", "nectar", "20", "planten");
})();
