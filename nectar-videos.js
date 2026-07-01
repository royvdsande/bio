/* ============================================================
   Nectar videoleerlijnen
   ------------------------------------------------------------
   Gegenereerd uit:
   - /Users/royvdsande/Downloads/videoleerlijn nectar vwo.docx
   - /Users/royvdsande/Downloads/videoleerlijn nectar havo.docx

   VWO hoofdstuk 1 blijft de bestaande handmatig geteste implementatie
   in content.js gebruiken. De overige Nectar-hoofdstukken krijgen hier
   hoofdstukspecifieke videodata.
   ============================================================ */
(function () {
  "use strict";

  const NECTAR_VIDEOS = {
  "vwo": {
    "1": [
      {
        "id": "1.1",
        "title": "Paragraaf 1.1",
        "items": [
          {
            "title": "Gedrag en functie",
            "url": "https://www.youtube.com/watch?v=Yugi9PePcVc",
            "desc": "de functie van gedrag voor het overleven van een individu en het voortbestaan van de soort",
            "terms": [
              "voortbewegen",
              "lichaamsverzorging",
              "sociaal gedrag",
              "voedsel zoeken",
              "baltsgedrag",
              "voortplantingsgedrag",
              "territoriumgedrag",
              "broedzorggedrag"
            ],
            "duration": "10'21"
          },
          {
            "title": "Rats Save Humans From Landmines",
            "url": "https://www.youtube.com/watch?v=L0swUc492hU",
            "desc": "het trainen van ratten bij het opsporen van landmijnen",
            "terms": [
              "geur",
              "uitwendige prikkel"
            ],
            "duration": "3'43"
          },
          {
            "title": "This Lizard Escapes the Heat in an Unusual Way",
            "url": "https://www.youtube.com/watch?v=1rkkKyYCxio",
            "desc": "een overlevingsstrategie van een hagedis in de hitte van de woestijn",
            "terms": [
              "uitwendige prikkels"
            ],
            "duration": "1'49"
          },
          {
            "title": "Waring Elephants | Deadly Instincts",
            "url": "https://www.youtube.com/watch?v=KpN-P1OVzl4",
            "desc": "mannelijke olifanten die paringsbereid zijn en twee mannetjes die vechten om de vrouwtjes.",
            "terms": [
              "inwendige prikkels",
              "hormonen"
            ],
            "duration": "2'55"
          }
        ]
      },
      {
        "id": "1.2",
        "title": "Paragraaf 1.2",
        "items": [
          {
            "title": "Ethogram",
            "url": "https://www.youtube.com/watch?v=65BSiATmVwg",
            "desc": "het bestuderen van het gedrag van een hond aan de hand van een ethogram",
            "terms": [
              "gedragselementen",
              "ethogram",
              "signalen"
            ],
            "duration": "9'12"
          },
          {
            "title": "Inprenten en opvoeden",
            "url": "https://www.youtube.com/watch?v=LDcnnAEwzV8",
            "desc": "ganzen leren wie hun moeder is door middel van inprenting; geïsoleerd opgegroeide vrouwtjes apen groeien op tot minder goede moeders",
            "terms": [
              "inprenten",
              "opvoeden",
              "sociaal gedrag"
            ],
            "duration": "10'10"
          },
          {
            "title": "Signalen en sleutelprikkels",
            "url": "https://www.youtube.com/watch?v=8-2ys48Uw6E&t=210s",
            "desc": "gedrag van stekelbaarsjes, roodborstjes, meeuwen en koekoeken onder invloed van signalen, sleutelprikkels en supernormale prikkels",
            "terms": [
              "signalen en sleutelprikkels",
              "supernormale prikkels"
            ],
            "duration": "10'28"
          }
        ]
      },
      {
        "id": "1.3",
        "title": "Paragraaf 1.3",
        "items": [
          {
            "title": "The Waggle Dance",
            "url": "https://www.youtube.com/watch?v=12Q8FfyLLso",
            "desc": "bijen geven door middel van een kwispeldans de locatie van een voedselbron aan",
            "terms": [
              "communicatie"
            ],
            "duration": "2'38"
          },
          {
            "title": "Futen",
            "url": "https://www.youtube.com/watch?v=ZbRrxw-H6xA",
            "desc": "balts van een mannetjesfuut en een vrouwtjesfuut",
            "terms": [
              "ritueel gedrag"
            ],
            "duration": "1'44"
          },
          {
            "title": "Greetings From Around the World",
            "url": "https://www.youtube.com/watch?v=nANhSfCGAs4",
            "desc": "culturele verschillen tussen de begroeting van mensen",
            "terms": [
              "communicatie",
              "ritueel gedrag",
              "begroetingsgedrag",
              "cultuur"
            ],
            "duration": "1'47"
          },
          {
            "title": "Dugout Frustration",
            "url": "https://www.youtube.com/watch?v=m1rYUov-DaE",
            "desc": "sporters vertonen omgericht gedrag en richten hun woede op de dug-out",
            "terms": [
              "omgericht gedrag"
            ],
            "duration": "4'20"
          }
        ]
      },
      {
        "id": "1.4",
        "title": "Paragraaf 1.4",
        "items": [
          {
            "title": "Aangeleerd of erfelijk?",
            "url": "https://www.youtube.com/watch?v=E_aG1elN38A",
            "desc": "een onderzoek van William Thorne; zang van vinken aangeboren of aangeleerd?",
            "terms": [
              "aangeleerd",
              "aangeboren",
              "inprenting"
            ],
            "duration": "6'07"
          },
          {
            "title": "Chimps vs Humans",
            "url": "https://www.youtube.com/watch?v=cPiDHXtM0VA",
            "desc": "een geheugenwedstrijd tussen chimpansee en mens",
            "terms": [
              "aangeleerd gedrag"
            ],
            "duration": "2'21"
          },
          {
            "title": "Klassieke Conditionering",
            "url": "https://www.youtube.com/watch?v=nnYN5v5VTAA",
            "desc": "onderzoek van Pavlov aan klassieke conditionering van honden",
            "terms": [
              "prikkels",
              "klassieke conditionering"
            ],
            "duration": "6'01van 0 tot 4:32"
          },
          {
            "title": "Operante Conditionering",
            "url": "https://www.youtube.com/watch?v=3PbbDRoHfcU",
            "desc": "onderzoek naar het leren van de weg in een doolhof van jonge kuikens; onderzoek naar hoe katten leren uit een kooi te ontsnappen",
            "terms": [
              "operante conditionering"
            ],
            "duration": "5'38"
          }
        ]
      },
      {
        "id": "1.5",
        "title": "Paragraaf 1.5",
        "items": [
          {
            "title": "Two Monkeys Were Paid Unequally",
            "url": "https://www.youtube.com/watch?v=meiU6TxysCg",
            "desc": "een onderzoek naar het effect van verschillende beloning bij apen",
            "terms": [
              "inlevingsvermogen"
            ],
            "duration": "2'43"
          },
          {
            "title": "Monkeys Use Tools to Open Shells",
            "url": "https://www.youtube.com/watch?v=FzIYaZk9s-o",
            "desc": "apen gebruiken gereedschap voor het openen van schelpen",
            "terms": [
              "inzicht"
            ],
            "duration": "2'20"
          },
          {
            "title": "Inzicht: Chimpanzee Problem Solving",
            "url": "https://www.youtube.com/watch?v=fPz6uvIbWZE",
            "desc": "een aap toont inzicht om bij een ‘onbereikbaar’ lekker hapje te komen",
            "terms": [
              "inzicht"
            ],
            "duration": "1'03"
          }
        ]
      }
    ],
    "2": [
      {
        "id": "2.1",
        "title": "Paragraaf 2.1",
        "items": [
          {
            "title": "Exploring Different Levels of Biological Organization",
            "url": "https://www.youtube.com/watch?v=_MgWRg20HW0",
            "desc": "uitleg over de verschillende organisatieniveaus",
            "terms": [
              "organisatieniveau",
              "molecuul",
              "organel",
              "cel",
              "weefsel",
              "orgaan",
              "populatie",
              "levensgemeenschap",
              "ecosysteem"
            ],
            "duration": "4'06"
          },
          {
            "title": "How are Exchange Surfaces Adapted to Their Function?",
            "url": "https://www.youtube.com/watch?v=dVNr8IwaGqQ",
            "desc": "grotere organismen hebben een relatief kleiner oppervlak ten opzichte van het volume dan kleinere organismen",
            "terms": [
              "oppervlak en volume van organismen"
            ],
            "duration": "4'41"
          },
          {
            "title": "Characteristics of Living Things-What makes something alive?",
            "url": "https://www.youtube.com/watch?v=30qOijVBS7o",
            "desc": "de levenskenmerken",
            "terms": [
              "levenskenmerken"
            ],
            "duration": "3'13"
          }
        ]
      },
      {
        "id": "2.2",
        "title": "Paragraaf 2.2",
        "items": [
          {
            "title": "Cell Structure",
            "url": "https://www.youtube.com/watch?v=URUJD5NEXC8",
            "desc": "bouw van een cel; verschillen tussen eukaryotische en prokaryotische cellen",
            "terms": [
              "eukaryoot",
              "prokaryoot",
              "celmembraan",
              "(cel)kern",
              "ribosomen",
              "cytoplasma",
              "ER",
              "golgisysteem",
              "vacuole",
              "lysosomen",
              "mitochondriën",
              "ATP",
              "celskelet",
              "chloroplast",
              "celwand",
              "trilharen",
              "flagel"
            ],
            "duration": "7'21"
          },
          {
            "title": "Travel Deep Inside a Leaf",
            "url": "https://www.youtube.com/watch?v=pwymX2LxnQs",
            "desc": "een virtuele reis door een plantencel",
            "terms": [
              "golgisysteem",
              "ER",
              "mitochondriën",
              "celskelet",
              "ATP",
              "chloroplast"
            ],
            "duration": "2'52"
          }
        ]
      },
      {
        "id": "2.3",
        "title": "Paragraaf 2.3",
        "items": [
          {
            "title": "Active, Passive, and Bulk Cell Transport",
            "url": "https://www.youtube.com/watch?v=BGeSDI03aaw",
            "desc": "het vervoer van verschillende stoffen door een celmembraan",
            "terms": [
              "passief transport",
              "diffusie",
              "celmembraan",
              "gefaciliteerd transport",
              "osmose",
              "actief transport",
              "ATP",
              "concentratiegradiënt",
              "endocytose",
              "exocytose"
            ],
            "duration": "4'43"
          },
          {
            "title": "Overview of Cell Boundaries",
            "url": "https://www.youtube.com/watch?v=FYwB1EETakY",
            "desc": "de begrenzing van een plantencel en dierlijke cel",
            "terms": [
              "celwand",
              "celmembraan",
              "plantencel",
              "dierlijke cel",
              "semi-permeabel"
            ],
            "duration": "2'26"
          },
          {
            "title": "Active Transport",
            "url": "https://www.youtube.com/watch?v=5asMngTQqxQ",
            "desc": "actief transport tegen een concentratieverval in",
            "terms": [
              "actief transport",
              "endocytose",
              "fagocytose",
              "pinocytose",
              "exocytose",
              "transporteiwitten"
            ],
            "duration": "4'01"
          }
        ]
      },
      {
        "id": "2.4",
        "title": "Paragraaf 2.4",
        "items": [
          {
            "title": "Structure and Function of DNA",
            "url": "https://www.youtube.com/watch?v=T6_wKPAbf2k",
            "desc": "bouw van DNA",
            "terms": [
              "helix",
              "opbouw DNA",
              "nucleotide",
              "complementaire basen",
              "triplet",
              "aminozuur",
              "gen",
              "eiwit",
              "functie eiwitten"
            ],
            "duration": "6'32"
          },
          {
            "title": "From DNA to protein",
            "url": "https://www.youtube.com/watch?v=gG7uCskUOrA",
            "desc": "de transcriptie van DNA in mRNA en de translatie van mRNA in de ribosomen",
            "terms": [
              "gen",
              "mRNA",
              "ribosomen",
              "aminozuren",
              "eiwit",
              "triplet"
            ],
            "duration": "2'41"
          }
        ]
      },
      {
        "id": "2.5",
        "title": "Paragraaf 2.5",
        "items": [
          {
            "title": "Cell Cycle and Mitosis",
            "url": "https://www.youtube.com/watch?v=7NM-UWFHG18",
            "desc": "de functie van de mitose bij het herstel van een wond; alle stadia van mitose komen aan de orde",
            "terms": [
              "celcyclus: G1 → S → G2 → M",
              "structuureiwitten (trekdraden)"
            ],
            "duration": "6'19"
          },
          {
            "title": "Cell Differentiation, Specialisation & Stem Cells",
            "url": "https://www.youtube.com/watch?v=X0GMp8oM_2E",
            "desc": "specialisatie en differentiatie bij stamcellen; weefselkweek bij planten en de verschillen tussen embryonale en volwassen stamcellen",
            "terms": [
              "stamcel",
              "specialisatie",
              "differentiatie"
            ],
            "duration": "7'35"
          },
          {
            "title": "Introduction to Cancer Biology",
            "url": "https://www.youtube.com/watch?v=bdWRZd19swg",
            "desc": "uitleg over het verspreiden(uitzaaien) van tumorcellen via lymfe en bloed",
            "terms": [
              "metastase",
              "tumor",
              "kanker"
            ],
            "duration": "3'09"
          }
        ]
      }
    ],
    "3": [
      {
        "id": "3.1",
        "title": "Paragraaf 3.1",
        "items": [
          {
            "title": "The Scientific Method: Steps, Examples, Tips, and Exercise",
            "url": "https://www.youtube.com/watch?v=yi0hwFDQTSQ",
            "desc": "de stappen van wetenschappelijke onderzoek",
            "terms": [
              "wetenschappelijk onderzoek",
              "valide onderzoek",
              "onderzoeksvraag",
              "hypothese",
              "materiaal en methode",
              "resultaten",
              "conclusie"
            ],
            "duration": "8'38"
          },
          {
            "title": "Biology: Controlled Experiments",
            "url": "https://www.youtube.com/watch?v=D3ZB2RTylR4&t=22s",
            "desc": "het opzetten van een experimenteel onderzoek en het formuleren en testen van een hypothese",
            "terms": [
              "experimenteel onderzoek",
              "onderzoeksvraag",
              "hypothese",
              "materiaal en methode",
              "resultaten",
              "verwerking",
              "conclusie. afhankelijke variabele",
              "onafhankelijke variabele"
            ],
            "duration": "4'06"
          }
        ]
      },
      {
        "id": "3.2",
        "title": "Paragraaf 3.2",
        "items": [
          {
            "title": "Independent vs. Dependent Variables",
            "url": "https://www.youtube.com/watch?v=nqj0rJEf3Ew&t=0s",
            "desc": "het verschil tussen de onafhankelijke en de afhankelijke variabele",
            "terms": [
              "hypothese",
              "onafhankelijke variabele",
              "afhankelijke variabele",
              "experimenteel onderzoek",
              "beschrijvend onderzoek"
            ],
            "duration": "3'16"
          },
          {
            "title": "Qualitative and Quantitative Data",
            "url": "https://www.youtube.com/watch?v=sRK049652ic",
            "desc": "het verschil tussen kwantitatief beschrijvend onderzoek en kwalitatief beschrijvend onderzoek",
            "terms": [
              "kwantitatief beschrijvend onderzoek",
              "kwalitatief beschrijvend onderzoek"
            ],
            "duration": "3'57"
          }
        ]
      },
      {
        "id": "3.3",
        "title": "Paragraaf 3.3",
        "items": [
          {
            "title": "A Beginner's Guide to Graphing Data",
            "url": "https://www.youtube.com/watch?v=9BkbYeTC6Mo",
            "desc": "het kiezen van het juiste diagram voor het uitzetten van resultaten",
            "terms": [
              "assenstelsel",
              "x-as",
              "y-as",
              "onafhankelijke variabele",
              "afhankelijke variabele",
              "lijndiagram",
              "staafdiagram",
              "sectordiagram"
            ],
            "duration": "10'37"
          },
          {
            "title": "How to Understand Graphs",
            "url": "https://www.youtube.com/watch?v=JXejcX1nQs4",
            "desc": "het interpreteren van verschillende diagrammen",
            "terms": [
              "assenstelsel",
              "x-as",
              "y-as",
              "onafhankelijke variabele",
              "afhankelijke variabele",
              "lijndiagram",
              "staafdiagram",
              "sectordiagram"
            ],
            "duration": "7'21"
          }
        ]
      },
      {
        "id": "3.4",
        "title": "Paragraaf 3.4",
        "items": [
          {
            "title": "Difference between validity and reliability",
            "url": "https://www.youtube.com/watch?v=G4cH_g2-SsM",
            "desc": "het verschil tussen validiteit en betrouwbaarheid van een exeriment",
            "terms": [
              "validiteit",
              "betrouwbaarheid"
            ],
            "duration": "2'53"
          },
          {
            "title": "Bioethics",
            "url": "https://www.youtube.com/watch?v=6-YI7nG0CVc",
            "desc": "ethische dilemma’s in de biologie en medische wereld",
            "terms": [
              "ethische dillema’s"
            ],
            "duration": "5'58"
          }
        ]
      }
    ],
    "4": [
      {
        "id": "4.1",
        "title": "Paragraaf 4.1",
        "items": [
          {
            "title": "Fertilization",
            "url": "https://www.youtube.com/watch?v=_5OvgQW6FG4",
            "desc": "de weg van zaadcellen vanuit de vagina naar de eicel in de eileider",
            "terms": [
              "zaadcellen",
              "vagina",
              "baarmoedermond",
              "eileider",
              "eicel",
              "trilhaarcellen",
              "zona pellucida",
              "bevruchtingsmembraan",
              "zygote",
              "innesteling"
            ],
            "duration": "5'42"
          },
          {
            "title": "Labor and Delivery | Childbirth",
            "url": "https://www.youtube.com/watch?v=dYu-0rOnLpA",
            "desc": "een animatie van een geboorte",
            "terms": [
              "baarmoedermond",
              "weeën",
              "vruchtwater",
              "ontsluiting",
              "persweeën",
              "geboorte",
              "nageboorte",
              "placenta",
              "navelstreng"
            ],
            "duration": "3'04"
          }
        ]
      },
      {
        "id": "4.2",
        "title": "Paragraaf 4.2",
        "items": [
          {
            "title": "What are Haploid and Diploid Cells?",
            "url": "https://www.youtube.com/watch?v=NR9zTvMg-pE",
            "desc": "het verschil tussen haploïde en diploïde cellen",
            "terms": [
              "haploïd",
              "diploïd",
              "gameten",
              "zygote",
              "homologe chromosomen",
              "lichaamscellen",
              "mitose",
              "meiose"
            ],
            "duration": "4'28"
          },
          {
            "title": "Spermatogenesis",
            "url": "https://www.youtube.com/watch?v=6fBa8UqEano",
            "desc": "de ontwikkeling van zaadcellen in de testes",
            "terms": [
              "spermatogenese"
            ],
            "duration": "1'41"
          },
          {
            "title": "Oogenesis",
            "url": "https://www.youtube.com/watch?v=_dYxH9MxRpw",
            "desc": "de oögenese",
            "terms": [
              "oögenese",
              "primaire follikels",
              "ovulatie"
            ],
            "duration": "0'56"
          },
          {
            "title": "Meiosis: Crossing Over and Variability",
            "url": "https://www.youtube.com/watch?v=vyf2xwqzfFs",
            "desc": "het verschil tussen mitose en meiose",
            "terms": [
              "meiose",
              "gameten",
              "haploïd",
              "diploïd",
              "celcyclus",
              "centromeer",
              "chromatiden",
              "crossing-over",
              "meiose-I",
              "meiose-II",
              "cytokinese (celdeling)"
            ],
            "duration": "6'45"
          }
        ]
      },
      {
        "id": "4.3",
        "title": "Paragraaf 4.3",
        "items": [
          {
            "title": "Hormonal Control of the Menstrual Cycle",
            "url": "https://www.youtube.com/watch?v=VBIch0kgSUo",
            "desc": "de hormoonproductie tijdens de menstruatiecyclus",
            "terms": [
              "ovulatie",
              "baarmoederslijmvlies",
              "hypofyse",
              "oestrogenen",
              "hypothalamus",
              "LH",
              "gele lichaam",
              "progesteron",
              "menstruatie"
            ],
            "duration": "2'54"
          },
          {
            "title": "How do Pregnancy Tests Work?",
            "url": "https://www.youtube.com/watch?v=umRe7GBJ5GE",
            "desc": "uitleg van een zwangerschapstest gebaseerd op de aanwezigheid van HCG in urine",
            "terms": [
              "monoklonale antistoffen",
              "HCG",
              "zwangerschapstest"
            ],
            "duration": "3'28"
          }
        ]
      },
      {
        "id": "4.4",
        "title": "Paragraaf 4.4",
        "items": [
          {
            "title": "IVF/ICSI-behandeling in het LUMC: laboratorium en terugplaatsing",
            "url": "https://www.youtube.com/watch?v=7AI5KMX7Gxc",
            "desc": "uitleg over een ivf/ICSI-behandeling",
            "terms": [
              "ivf",
              "ICSI",
              "follikelpunctie",
              "terugplaatsing"
            ],
            "duration": "6'08"
          },
          {
            "title": "Zwangeren kiezen massaal voor NIP-test",
            "url": "https://www.youtube.com/watch?v=D1PVAVi0NwY",
            "desc": "de NIPT-test",
            "terms": [
              "syndroom van Down",
              "abortus"
            ],
            "duration": "1'02"
          },
          {
            "title": "Tissue Culture",
            "url": "https://www.youtube.com/watch?v=xuwV3ywCxW8&t=44s",
            "desc": "de geschiedenis en ontwikkeling van weefselkweek en de voordelen van weefselkweek",
            "terms": [
              "weefselkweek",
              "in vitro",
              "voedingsstoffen",
              "plantenhormonen",
              "totipotentie",
              "klonering"
            ],
            "duration": "5'37"
          }
        ]
      },
      {
        "id": "4.5",
        "title": "Paragraaf 4.5",
        "items": [
          {
            "title": "Anticonceptie - De keuze van hormonen in anticonceptie",
            "url": "https://www.youtube.com/watch?v=RkgEdgTrY-4",
            "desc": "verschillende vormen van hormonale anticonceptie",
            "terms": [
              "hormonale anticonceptie"
            ],
            "duration": "2'43"
          },
          {
            "title": "Animatie: Wat is chlamydia?",
            "url": "https://www.youtube.com/watch?v=aeez9SGU1jM",
            "desc": "de symptomen van een besmetting met chlamydia",
            "terms": [
              "chlamydia"
            ],
            "duration": "1'07"
          },
          {
            "title": "HPV: wat is het?",
            "url": "https://www.youtube.com/watch?v=yv-CGfIicSw",
            "desc": "mogelijke gevolgen van een besmetting met het humaan papillomavirus",
            "terms": [
              "HPV"
            ],
            "duration": "1'42"
          }
        ]
      }
    ],
    "5": [
      {
        "id": "5.1",
        "title": "Paragraaf 5.1",
        "items": [
          {
            "title": "Mutation and Haplotype",
            "url": "https://www.youtube.com/watch?v=MeuQLee5YqI",
            "desc": "verschillende vormen van overerving van markers",
            "terms": [
              "mutaties",
              "haplotype",
              "verwantschap",
              "Y-chromosomaal DNA",
              "mtDNA",
              "autosomaal DNA",
              "X-chromosomaal DNA",
              "DNA-replicatie"
            ],
            "duration": "2'46"
          },
          {
            "title": "Alleles / Dominant / Heterozygous / Phenotypes",
            "url": "https://www.youtube.com/watch?v=zNEtVaNQ0s8",
            "desc": "verschillende begrippen uit de genetica: genen, allelen, dominant, recessief, homozygoot, heterozygoot, genotype, fenotype",
            "terms": [
              "DNA",
              "homologe chromosomen",
              "expressie",
              "genen",
              "allelen",
              "dominant",
              "recessief",
              "homozygoot",
              "heterozygoot",
              "geslachtschromosomen",
              "genen",
              "genotype",
              "fenotype"
            ],
            "duration": "5'26"
          }
        ]
      },
      {
        "id": "5.2",
        "title": "Paragraaf 5.2",
        "items": [
          {
            "title": "A Human Karyotype Preparation",
            "url": "https://www.youtube.com/watch?v=AtGfc-ebrP8",
            "desc": "een karyogram maken van een bloedmonster",
            "terms": [
              "karyogram",
              "metafase"
            ],
            "duration": "1'13"
          },
          {
            "title": "Karyotype",
            "url": "https://www.youtube.com/watch?v=RTo2lRgfluI",
            "desc": "het maken van een karyogram en het beoordelen van een karyogram op eventuele afwijkingen",
            "terms": [
              "karyogram",
              "geslachtschromosomen",
              "autosomen",
              "downsyndroom",
              "syndroom van Klinefelter",
              "syndroom van Turner",
              "duplicatie",
              "translocatie",
              "inversie",
              "mutaties",
              "opsporen chromosomale afwijkingen bij een embryo"
            ],
            "duration": "4'29"
          },
          {
            "title": "Visualizing Nondisjunction",
            "url": "https://www.youtube.com/watch?v=SbrVw1jrZxE",
            "desc": "nondisjunctie tijdens meiose I of meiose II",
            "terms": [
              "nondisjunctie",
              "trisomie",
              "meiose I",
              "meiose II",
              "monosomie"
            ],
            "duration": "1'34"
          }
        ]
      },
      {
        "id": "5.3",
        "title": "Paragraaf 5.3",
        "items": [
          {
            "title": "What are Pedigree Charts",
            "url": "https://www.youtube.com/watch?v=Wuk0W10EveU",
            "desc": "afspraken over het weergeven van een stamboom",
            "terms": [
              "stamboom"
            ],
            "duration": "4'23"
          },
          {
            "title": "Family Trees / Family Pedigrees",
            "url": "https://www.youtube.com/watch?v=uhKqmNOiPR8&t=31s",
            "desc": "het uitrekenen van de kans op een erfelijke aandoening met behulp van een stamboom",
            "terms": [
              "stamboom",
              "recessieve overerving",
              "drager"
            ],
            "duration": "6'24"
          },
          {
            "title": "Punnett Square Basics | Mendelian Genetic Crosses",
            "url": "https://www.youtube.com/watch?v=PyP_5EgQBmE",
            "desc": "de kans op overerving van een eigenschap met behulp van een monohybride kruising",
            "terms": [
              "kruisingsschema’s (Punnett Square)"
            ],
            "duration": "2'52"
          },
          {
            "title": "Dihybrid Genetic Cross",
            "url": "https://www.youtube.com/watch?v=1QU2phs-hws",
            "desc": "de kans op overerving van een eigenschap met behulp van een dihybride kruising",
            "terms": [
              "dihybride kruising",
              "P-generatie",
              "F1-generatie",
              "F2-generatie"
            ],
            "duration": "2'06"
          },
          {
            "title": "Codominance and Incomplete Dominance: Non-Mendelian Genetics",
            "url": "https://www.youtube.com/watch?v=FXc5F9AMAiQ",
            "desc": "het verschil tussen co-dominante en intermediaire overerving",
            "terms": [
              "co-dominante overerving",
              "intermediaire overerving"
            ],
            "duration": "4'08"
          }
        ]
      },
      {
        "id": "5.4",
        "title": "Paragraaf 5.4",
        "items": [
          {
            "title": "Selective Breeding | Evolution",
            "url": "https://www.youtube.com/watch?v=fHS-OY9XDZc",
            "desc": "het gericht fokken van dieren en het klassiek veredelen van planten",
            "terms": [
              "klassieke veredeling",
              "drager",
              "inteelt"
            ],
            "duration": "4'23"
          },
          {
            "title": "Selective Breeding",
            "url": "https://www.youtube.com/watch?v=3B4LEssKSLs",
            "desc": "de kans op overerving van een eigenschap met behulp van een monohybride kruising",
            "terms": [
              "klassieke veredeling",
              "drager",
              "inteelt",
              "genenpool"
            ],
            "duration": "3'44"
          },
          {
            "title": "Inheritance of Skin Color in Human",
            "url": "https://www.youtube.com/watch?v=XSx-Sm3I7aU",
            "desc": "polygene overerving van huidskleur",
            "terms": [
              "polygene overerving"
            ],
            "duration": "7'32"
          }
        ]
      },
      {
        "id": "5.5",
        "title": "Paragraaf 5.5",
        "items": [
          {
            "title": "What are 'twin studies'?",
            "url": "https://www.youtube.com/watch?v=BTYCv1ObZrI",
            "desc": "de invloed van nature en nurture op het tot stand komen van een bepaalde eigenschap bij eeneiige tweelingen",
            "terms": [
              "nature",
              "nurture",
              "eeneiige tweelingen",
              "twee-eiige tweelingen",
              "epigenetica",
              "omgeving genotype"
            ],
            "duration": "2'13"
          },
          {
            "title": "Epigenetics: Nature vs nurture",
            "url": "https://www.youtube.com/watch?v=k50yMwEOWGU",
            "desc": "uitleg van ontstane verschillen tussen een gescheiden opgegroeide eeneiige tweeling",
            "terms": [
              "methylering",
              "nurture",
              "nature",
              "epigenetica"
            ],
            "duration": "4'55"
          }
        ]
      }
    ],
    "6": [
      {
        "id": "6.1",
        "title": "Paragraaf 6.1",
        "items": [
          {
            "title": "Binomial Nomenclature",
            "url": "https://www.youtube.com/watch?v=eSAt_SnBK9k",
            "desc": "toelichting bij binominale naamgeving",
            "terms": [
              "binominale naamgeving",
              "geslachtsnaam (genus)",
              "soortaanduiding (species)"
            ],
            "duration": "2'32"
          },
          {
            "title": "Classification",
            "url": "https://www.youtube.com/watch?v=HLnaIJm5wM4",
            "desc": "indeling en naamgeving van organismen; (evolutionaire) stambomen",
            "terms": [
              "soort",
              "geslacht",
              "familie",
              "orde",
              "klasse",
              "afdeling",
              "rijk",
              "Linnaeus",
              "binominale naamgeving",
              "domein",
              "eukaryoten",
              "prokaryoten",
              "bacteriën",
              "archaea",
              "(evolutionaire) stambomen",
              "gemeenschappelijke voorouder"
            ],
            "duration": "5'45"
          }
        ]
      },
      {
        "id": "6.2",
        "title": "Paragraaf 6.2",
        "items": [
          {
            "title": "Ecological Carrying Capacity",
            "url": "https://www.youtube.com/watch?v=ozW7y-y6Ymw",
            "desc": "uitleg over de draagkracht van een ecosysteem",
            "terms": [
              "populatie",
              "populatiegrootte",
              "draagkracht (carrying capacity)",
              "ecosysteem"
            ],
            "duration": "3'26"
          },
          {
            "title": "Wild in Nederland: ecoduct",
            "url": "https://www.youtube.com/watch?v=qs9EbkJKiG0",
            "desc": "ecoducten verbinden ecosystemen met elkaar om versnippering op te heffen",
            "terms": [
              "ecoducten",
              "versnippering",
              "ontsnippering"
            ],
            "duration": "3'58"
          },
          {
            "title": "Biggest mice swarms ever seen",
            "url": "https://www.youtube.com/watch?v=zWVw-j8eYSk",
            "desc": "een muizenplaag in Australië",
            "terms": [
              "plaag"
            ],
            "duration": "2'08"
          }
        ]
      },
      {
        "id": "6.3",
        "title": "Paragraaf 6.3",
        "items": [
          {
            "title": "Tolerance",
            "url": "https://www.youtube.com/watch?v=Q6ENLe4W_K0",
            "desc": "uitleg over de aanpassingen van organismen aan abiotische omstandigheden",
            "terms": [
              "beperkende factor",
              "temperatuur",
              "licht",
              "vochtigheid",
              "drempelwaarde",
              "tolerantiecurve",
              "maximum",
              "minimum",
              "optimum",
              "adaptatie"
            ],
            "duration": "5'17"
          },
          {
            "title": "Adaptations",
            "url": "https://www.youtube.com/watch?v=tC-u8xcZYSM",
            "desc": "uitleg van en vragen over hoe organismen zich aan de omgeving aanpassen",
            "terms": [
              "adaptatie",
              "extremofielen (bacteriën en archaea)"
            ],
            "duration": "6'14"
          }
        ]
      },
      {
        "id": "6.4",
        "title": "Paragraaf 6.4",
        "items": [
          {
            "title": "Food Chain",
            "url": "https://www.youtube.com/watch?v=bvqN9H3QtTQ",
            "desc": "uitleg van de begrippen met betrekking tot voedselketens en voedselwebben",
            "terms": [
              "voedselketen",
              "voedselweb",
              "trofische niveaus",
              "producenten",
              "autotroof",
              "C1",
              "herbivoren",
              "C2",
              "omnivoren",
              "carnivoren",
              "insectivoren",
              "reducenten (decomposers)"
            ],
            "duration": "2'37"
          },
          {
            "title": "What is symbiosis?",
            "url": "https://www.youtube.com/watch?v=IWAA75k-UWI&",
            "desc": "uitleg van de verschillende vormen van symbiose",
            "terms": [
              "symbiose",
              "mutualisme",
              "commensalisme",
              "parasitisme"
            ],
            "duration": "5'56"
          }
        ]
      },
      {
        "id": "6.5",
        "title": "Paragraaf 6.5",
        "items": [
          {
            "title": "Equilibrium Theory of Island Biogeography",
            "url": "https://www.youtube.com/watch?v=3OQdCil-mRQ",
            "desc": "uitleg van de eilandtheorie",
            "terms": [
              "eilandtheorie",
              "soortenrijkdom",
              "isolatie",
              "successie",
              "immigratie",
              "uitsterven",
              "eilandgrootte",
              "afstand tot vaste land"
            ],
            "duration": "3'06"
          },
          {
            "title": "What is Island Biogeography Theory?",
            "url": "https://www.youtube.com/watch?v=8XP5tS-I0Jc",
            "desc": "het ontstaan van de flora en fauna van het eiland Madeira en de gevolgen van de mens op het ecosysteem",
            "terms": [
              "inheemse soorten",
              "kolonisatie",
              "successie",
              "isolatie",
              "niche",
              "soortvorming",
              "habitat",
              "uitsterven",
              "founder effect"
            ],
            "duration": "5'17"
          },
          {
            "title": "Founder Effect",
            "url": "https://www.youtube.com/watch?v=2WWmiyHmmLY",
            "desc": "soortvorming bij bananenvliegjes (Drosophila) op verschillende Hawaii-eilanden",
            "terms": [
              "soortvorming",
              "founder effect",
              "eilandtheorie"
            ],
            "duration": "2'29"
          }
        ]
      }
    ],
    "7": [
      {
        "id": "7.1",
        "title": "Paragraaf 7.1",
        "items": [
          {
            "title": "Variation and Evolution",
            "url": "https://www.youtube.com/watch?v=VjlE5Qzl1S0",
            "desc": "mutaties in genen veroorzaken variatie in het fenotype onder individuen in een populatie; individuen met de best aangepaste fenotypen hebben voordeel bij natuurlijke selectie en geven gunstige genen door",
            "terms": [
              "genen",
              "eiwitten",
              "variatie",
              "fenotype",
              "genotype",
              "milieu",
              "genoom",
              "mutaties",
              "survival of the fittest",
              "natuurlijke selectie",
              "evolutie",
              "soortvorming"
            ],
            "duration": "5'27"
          },
          {
            "title": "Walking With Lucy",
            "url": "https://www.youtube.com/watch?v=xT8Np0gI1dI",
            "desc": "een vergelijking tussen de bouw van een chimpansee, Lucy en de moderne mens",
            "terms": [
              "Lucy (Australopithecus afarensis)",
              "chimpansee",
              "moderne mens"
            ],
            "duration": "1'58"
          },
          {
            "title": "Oldest Tool Use",
            "url": "https://www.youtube.com/watch?v=rxGAGzS9e9M",
            "desc": "een bewijs van het gebruik van gereedschap door Lucy (Australopithecus afarensis)",
            "terms": [
              "gereedschappen",
              "Lucy (Australopithecus afarensis)",
              "geslacht Homo"
            ],
            "duration": "2'56"
          }
        ]
      },
      {
        "id": "7.2",
        "title": "Paragraaf 7.2",
        "items": [
          {
            "title": "Evolution of the Peppered Moth by Natural Selection",
            "url": "https://www.youtube.com/watch?v=Pop-xetGaBM",
            "desc": "de gevolgen van de industriële revolutie op natuurlijke selectie bij Biston betularia",
            "terms": [
              "evolutie",
              "natuurlijke selectie"
            ],
            "duration": "3.04"
          },
          {
            "title": "Selective Breeding",
            "url": "https://www.youtube.com/watch?v=3B4LEssKSLs",
            "desc": "het selecteren en vermenigvuldigen van de best aangepaste planten of dieren en de nadelen van deze vorm van veredelen",
            "terms": [
              "klassiek veredelen (selective breeding)",
              "genenpool",
              "inteelt",
              "variatie"
            ],
            "duration": "3'44"
          },
          {
            "title": "Allopatric Speciation",
            "url": "https://www.youtube.com/watch?v=ztm96J4eXg4",
            "desc": "uitleg van allopatrische soortvorming",
            "terms": [
              "variatie",
              "allopatrische soortvorming",
              "natuurlijke selectie"
            ],
            "duration": "2'50"
          }
        ]
      },
      {
        "id": "7.3",
        "title": "Paragraaf 7.3",
        "items": [
          {
            "title": "Fossils",
            "url": "https://www.youtube.com/watch?v=bRuSmxJo_iA",
            "desc": "verschillende vormen van fossielen en fossilisatie",
            "terms": [
              "fossielen",
              "fossilisatie",
              "mineralisatie"
            ],
            "duration": "4'07"
          },
          {
            "title": "How Does Radiocarbon Dating Work?",
            "url": "https://www.youtube.com/watch?v=phZeE7Att_s",
            "desc": "het bepalen van de absolute leeftijd met behulp van de 14C-methode",
            "terms": [
              "12C/14C",
              "leeftijd-bepaling",
              "halfwaardetijd"
            ],
            "duration": "2'10"
          },
          {
            "title": "Homologous Structures vs Analogous Structures",
            "url": "https://www.youtube.com/watch?v=2N3OPRodRvk",
            "desc": "het verschil tussen homologe en analoge structuren",
            "terms": [
              "homologe structuren",
              "analoge structuren"
            ],
            "duration": "1'53"
          }
        ]
      },
      {
        "id": "7.4",
        "title": "Paragraaf 7.4",
        "items": [
          {
            "title": "Stanley Miller's Forgotten Experiments, Analyzed",
            "url": "https://www.youtube.com/watch?v=As-B4kOfHNE",
            "desc": "de resultaten van het experiment van Miller uit 1953 opnieuw bekeken",
            "terms": [
              "experiment van Stanley Miller",
              "oersoep",
              "eiwitten"
            ],
            "duration": "2'13"
          },
          {
            "title": "ENDOSYMBIOSIS",
            "url": "https://www.youtube.com/watch?v=8oSqXAwLsZc",
            "desc": "uitleg van de endosymbiosetheorie",
            "terms": [
              "mitochondriën",
              "chloroplasten",
              "endosymbiose",
              "prokaryoten",
              "membranen",
              "eukaryoten",
              "oerkaryoot",
              "kernmembraan"
            ],
            "duration": "3'30"
          },
          {
            "title": "Evolutionary Trees",
            "url": "https://www.youtube.com/watch?v=iZ3iXGd3vCg",
            "desc": "uitleg van de evolutionaire stamboom",
            "terms": [
              "evolutionaire stamboom",
              "gemeenschappelijke voorouder",
              "uitsterven",
              "soortvorming"
            ],
            "duration": "2'35"
          },
          {
            "title": "Cladistics Constructing Cladograms",
            "url": "https://www.youtube.com/watch?v=CPcNfQfjjiw",
            "desc": "uitleg van een cladogram",
            "terms": [
              "clade",
              "cladogram",
              "gemeenschappelijk kenmerk",
              "verwantschap",
              "convergente evolutie"
            ],
            "duration": "10'11"
          }
        ]
      },
      {
        "id": "7.5",
        "title": "Paragraaf 7.5",
        "items": [
          {
            "title": "Hardy-Weinberg Equilibrium",
            "url": "https://www.youtube.com/watch?v=gKXNB-V6i-I",
            "desc": "voorwaarden voor een Hardy-Weinberg evenwicht",
            "terms": [
              "Hardy-Weinberg evenwicht",
              "allelfrequentie",
              "natuurlijke selectie",
              "populatie",
              "genetic drift",
              "founder effect (stichterseffect)",
              "bottleneck effect (flessenhalseffect)",
              "mutatie",
              "migratie"
            ],
            "duration": "3'05"
          },
          {
            "title": "The Hardy-Weinberg Principle",
            "url": "https://www.youtube.com/watch?v=oG7ob-MtO8c",
            "desc": "geschiedenis over de oorsprong de populatiegenetica en een rekenvoorbeeld volgens een stappenplan",
            "terms": [
              "Hardy-Weinberg evenwicht",
              "populatiegenetica",
              "dominante allelen",
              "recessieve allelen",
              "allelfrequentie",
              "genotypefrequentie",
              "homozygoot dominant",
              "homozygoot recessief",
              "heterozygoot"
            ],
            "duration": "12'15"
          }
        ]
      }
    ],
    "8": [
      {
        "id": "8.1",
        "title": "Paragraaf 8.1",
        "items": [
          {
            "title": "Energy Flow in Ecosystems",
            "url": "https://www.youtube.com/watch?v=lnAKICtJIA4",
            "desc": "uitleg over energiestromen in een ecosysteem",
            "terms": [
              "energie",
              "zonlicht",
              "producenten",
              "fotosynthese",
              "chemosynthese",
              "dissimilatie",
              "trofische niveau",
              "biomassa",
              "productiviteit",
              "BPP (GPP)",
              "NPP",
              "ecosystemen",
              "seizoensinvloed op NPP",
              "C1",
              "C2",
              "C3",
              "warmteverlies"
            ],
            "duration": "7'45"
          },
          {
            "title": "What's a Decomposer?",
            "url": "https://www.youtube.com/watch?v=WZXB1ptpmcs",
            "desc": "de rol van reducenten en detrituseters in een ecosysteem",
            "terms": [
              "reducenten (decomposers)",
              "organisch afval",
              "bacteriën",
              "schimmels",
              "detritus",
              "detrituseters"
            ],
            "duration": "2'53"
          }
        ]
      },
      {
        "id": "8.2",
        "title": "Paragraaf 8.2",
        "items": [
          {
            "title": "Pyramids of Biomass",
            "url": "https://www.youtube.com/watch?v=Tn0_L-8amjM",
            "desc": "uitleg over de opbouw van een piramide van biomassa en het doorgeven van biomassa van het ene naar het andere trofische niveau",
            "terms": [
              "piramide van biomassa",
              "biomassa",
              "procenten",
              "consumenten (C1",
              "C2",
              "C3)",
              "voedselketen"
            ],
            "duration": "5'01"
          },
          {
            "title": "Ecological Pyramids",
            "url": "https://www.youtube.com/watch?v=wGfOoRrICto",
            "desc": "uitleg over piramiden van aantallen organismen en biomassa",
            "terms": [
              "piramide van aantallen",
              "piramide van biomassa",
              "trofische niveaus",
              "producenten",
              "consumenten (C1",
              "C2 en C3)"
            ],
            "duration": "3'41"
          },
          {
            "title": "Eutrophication Explained",
            "url": "https://www.youtube.com/watch?v=mLbDbmmV6Qc",
            "desc": "de gevolgen van het gebruik van meststoffen in de landbouw voor omringende ecosystemen",
            "terms": [
              "voedingsstoffen",
              "eutrofiëring",
              "algenbloei",
              "fotosynthese",
              "aerobe bacteriën",
              "zuurstofgehalte water",
              "sterfte"
            ],
            "duration": "3'47"
          }
        ]
      },
      {
        "id": "8.3",
        "title": "Paragraaf 8.3",
        "items": [
          {
            "title": "The Carbon Cycle - 1",
            "url": "https://www.youtube.com/watch?v=zrD3tMNPjXU",
            "desc": "de snelle koolstofkringloop",
            "terms": [
              "zonlicht",
              "snelle",
              "koolstofkringloop",
              "fotosynthese",
              "dissimilatie",
              "assimilatie",
              "vertering"
            ],
            "duration": "3'32"
          },
          {
            "title": "The Carbon Cycle - 2",
            "url": "https://www.youtube.com/watch?v=oe2kPpmhLuc",
            "desc": "de langzame koolstofkringloop",
            "terms": [
              "fossiele brandstoffen",
              "toenamen CO2 in de atmosfeer",
              "recyclen"
            ],
            "duration": "2'54"
          },
          {
            "title": "The Nitrogen Cycle",
            "url": "https://www.youtube.com/watch?v=vZ9b5c8BOT4",
            "desc": "de stikstofkringloop",
            "terms": [
              "stikstof",
              "eiwitten",
              "N2",
              "NO3-",
              "stikstoffixatie",
              "vlinderbloemige planten",
              "reducenten",
              "NH3",
              "fotochemische stikstoffixatie",
              "HNO3",
              "zure regen",
              "denitrificatie"
            ],
            "duration": "3'31"
          },
          {
            "title": "Where Does Your Sewage Go?",
            "url": "https://www.youtube.com/watch?v=YW6GBciRHLg",
            "desc": "rioolwaterzuivering in Londen",
            "terms": [
              "rioolwaterzuivering",
              "filtratie",
              "slib",
              "organisch afval",
              "aerobe bacteriën",
              "biologische reiniging"
            ],
            "duration": "2'54"
          }
        ]
      },
      {
        "id": "8.4",
        "title": "Paragraaf 8.4",
        "items": [
          {
            "title": "Ecological succession",
            "url": "https://www.youtube.com/watch?v=IrIvMt6HWlA",
            "desc": "uitleg over primaire en secundaire successie",
            "terms": [
              "primaire successie",
              "pionierstadium",
              "bodem",
              "dominante soorten",
              "humus",
              "habitat",
              "climaxstadium",
              "bos",
              "secundaire successie",
              "bosbrand"
            ],
            "duration": "3'32"
          },
          {
            "title": "Climax Communities",
            "url": "https://www.youtube.com/watch?v=iZA5yfrzLV8",
            "desc": "verschillende climax-en subclimaxstadia",
            "terms": [
              "stabiele ecosystemen",
              "climaxstadia (regenwoud",
              "woestijn",
              "savanne)",
              "abiotische factoren",
              "menselijke invloed",
              "subclimaxstadia"
            ],
            "duration": "2'51"
          },
          {
            "title": "Swarm Of Locusts",
            "url": "https://www.youtube.com/watch?v=6bx5JUGVahk",
            "desc": "een sprinkhanenplaag",
            "terms": [
              "woestijnsprinkhaan",
              "feromonen",
              "vraat",
              "zwermen",
              "plagen"
            ],
            "duration": "3'44"
          }
        ]
      }
    ],
    "9": [
      {
        "id": "9.1",
        "title": "Paragraaf 9.1",
        "items": [
          {
            "title": "What are carbon sinks? | Sustainability for all - ACCIONA - YouTube",
            "url": "https://www.youtube.com/watch?v=OoW2PlvMpZs",
            "desc": "koolstofsinks van systeem Aarde",
            "terms": [
              "koolstofsink",
              "klimaatverandering"
            ],
            "duration": "2'00"
          },
          {
            "title": "How Carbon Dioxide Warms Planet Earth",
            "url": "https://www.youtube.com/watch?v=FSBydPkLEII",
            "desc": "invloed van menselijke activiteiten op de uitstoot van broeikasgassen",
            "terms": [
              "broeikasgassen",
              "koolstofdioxide",
              "versterkt broeikaseffect",
              "ijstijden"
            ],
            "duration": "2'32"
          },
          {
            "title": "The carbon cycle is key to understanding climate change - YouTube",
            "url": "https://www.youtube.com/watch?v=yhlg9txl7yM",
            "desc": "C-kringloop",
            "terms": [
              "koolstofkringloop",
              "sinks",
              "sources",
              "koolstofdioxide",
              "klimaatverandering"
            ],
            "duration": "7'43 (eerste 5 minuten)"
          },
          {
            "title": "Causes and Effects of Climate Change",
            "url": "https://www.youtube.com/watch?v=G4H1N_yXBiA",
            "desc": "oorzaken en effecten van klimaatverandering",
            "terms": [
              "broeikaseffect",
              "broeikasgassen",
              "koolstofdioxide",
              "waterstijging",
              "extremer weer",
              "smog"
            ],
            "duration": "3'04"
          },
          {
            "title": "How does global warming affect biodiversity?",
            "url": "https://www.youtube.com/watch?v=U27-RWXU6rA",
            "desc": "effect van klimaatveranderingen op biodiversiteit",
            "terms": [
              "klimaatverandering",
              "biodiversiteit",
              "habitat",
              "adaptatie",
              "soort",
              "competitie"
            ],
            "duration": "5'02"
          }
        ]
      },
      {
        "id": "9.2",
        "title": "Paragraaf 9.2",
        "items": [
          {
            "title": "Nitrogen cycle",
            "url": "https://www.youtube.com/watch?v=LbBgPekjiyc",
            "desc": "N-kringloop",
            "terms": [
              "N-kringloop",
              "N2",
              "N-fixatie",
              "N-bindende bacteriën",
              "N-assimilatie",
              "ammonificatie",
              "nitrificatie",
              "denitrificatie"
            ],
            "duration": "4'48"
          },
          {
            "title": "De stikstofkringloop",
            "url": "https://www.youtube.com/watch?v=fw413dIw9gA",
            "desc": "stikstofkringloop - uitleg Binas 93G",
            "terms": [
              "stikstofkringloop",
              "knolletjesbacteriën",
              "mutualisme",
              "stikstofassimilatie",
              "denitrificerende bacteriën",
              "deammonificerende bacteriën",
              "ammonificerende bacteriën",
              "rottingsbacteriën urobacteriën",
              "nitriet- en nitraatbacteriën"
            ],
            "duration": "6'52"
          },
          {
            "title": "Nitrogen Fixation - Seven Wonders of the Microbe World",
            "url": "https://www.youtube.com/watch?v=4NKGS4bj7cc",
            "desc": "bacteriële N-fixatie",
            "terms": [
              "symbiose",
              "N-bindende bacteriën",
              "N-fixatie",
              "kunstmest"
            ],
            "duration": "3'33"
          },
          {
            "title": "How Do Humans Affect The Nitrogen Cycle",
            "url": "https://www.youtube.com/watch?v=_G-LhiI0Tf8",
            "desc": "invloed van de mens op de N-cyclus",
            "terms": [
              "N-cyclus",
              "N-vervuiling",
              "luchtvervuiling",
              "verzuring van bodem",
              "ozonlaag"
            ],
            "duration": "2'35"
          }
        ]
      },
      {
        "id": "9.3",
        "title": "Paragraaf 9.3",
        "items": [
          {
            "title": "Plastic Pollution",
            "url": "https://www.youtube.com/watch?v=XD-k_Tkw3lY1",
            "desc": "effect van plasticvervuiling op flora en fauna",
            "terms": [
              "plasticvervuiling"
            ],
            "duration": "2'01"
          },
          {
            "title": "Plastic Pollution",
            "url": "https://www.youtube.com/watch?v=IA9O9YUbQew2",
            "desc": "effect van plasticvervuiling op flora en fauna",
            "terms": [
              "plasticvervuiling",
              "recycling",
              "microplastic"
            ],
            "duration": "1'19"
          },
          {
            "title": "Climate Change: The Facts",
            "url": "https://www.youtube.com/watch?v=febBRv2Vftk",
            "desc": "oorzaken en effecten van klimaatverandering",
            "terms": [
              "klimaatverandering",
              "opwarming aarde",
              "waterstijging",
              "kantelpunt (tipping point)"
            ],
            "duration": "5'15"
          },
          {
            "title": "The climate tipping points that could change the Earth forever",
            "url": "https://www.youtube.com/watch?v=j3q7j8igyN4",
            "desc": "kantelpunten door klimaatverandering",
            "terms": [
              "permafrost",
              "opwarming aarde"
            ],
            "duration": ""
          }
        ]
      },
      {
        "id": "9.4",
        "title": "Paragraaf 9.4",
        "items": [
          {
            "title": "What Is Sustainable Development?",
            "url": "https://www.youtube.com/watch?v=3WODX8fyRHA",
            "desc": "duurzame ontwikkeling",
            "terms": [
              "duurzaamheid",
              "innovatie"
            ],
            "duration": "2'08"
          },
          {
            "title": "What are Biofuels and Where are They Going?",
            "url": "https://www.youtube.com/watch?v=cp6lifuYXFw",
            "desc": "",
            "terms": [
              "CO2-uitstoot",
              "biobrandstof",
              "biomassa",
              "snelle koolstofkringloop",
              "fossiele brandstof",
              "langzame koolstofkringloop",
              "algen"
            ],
            "duration": "7'38"
          },
          {
            "title": "Sustainable trade for sustainable food systems - YouTube",
            "url": "https://www.youtube.com/watch?v=DJx7MySikZI",
            "desc": "verduurzamen van voedselsystemen",
            "terms": [
              "biodiversiteit",
              "duurzame doelstellingen"
            ],
            "duration": "1'55"
          }
        ]
      }
    ],
    "10": [
      {
        "id": "10.1",
        "title": "Paragraaf 10.1",
        "items": [
          {
            "title": "Heart",
            "url": "https://www.youtube.com/watch?v=GMBSU-2GK3E",
            "desc": "de bouw van het hart en de weg van bloed door de bloedvaten",
            "terms": [
              "hartzakje",
              "boezems",
              "kamers",
              "hartkleppen",
              "slagaderkleppen",
              "hartaanval",
              "bloeddruk"
            ],
            "duration": "2'41"
          },
          {
            "title": "Insect circulatory system",
            "url": "https://www.youtube.com/watch?v=KCC_FrbuR3U",
            "desc": "bloedsomloop van een insect",
            "terms": [
              "open bloedsomloop",
              "hart",
              "kleppen",
              "aorta",
              "hemoglobine"
            ],
            "duration": "1'38"
          },
          {
            "title": "Fetal Circulation",
            "url": "https://www.youtube.com/watch?v=iciwEwNXEWI",
            "desc": "embryonale bloedsomloop",
            "terms": [
              "placenta",
              "foramen ovale",
              "ductus arteriosis"
            ],
            "duration": "4'39"
          }
        ]
      },
      {
        "id": "10.2",
        "title": "Paragraaf 10.2",
        "items": [
          {
            "title": "Blood Flow and Pressure",
            "url": "https://www.youtube.com/watch?v=pD7YSNE0cLU",
            "desc": "het verloop van de bloeddruk en stroomsnelheid van het bloed door het bloedvaatstelsel",
            "terms": [
              "aorta",
              "haarvaten",
              "holle ader (=vena cava)",
              "boven- en onderdruk",
              "gezamenlijke diameter van de haarvaten",
              "bloedstroomsnelheid",
              "bloeddrukmeting"
            ],
            "duration": "9'57"
          },
          {
            "title": "How Blood Pressure Works",
            "url": "https://www.youtube.com/watch?v=rc4vipEx__U",
            "desc": "bloeddruk",
            "terms": [
              "bloeddruk",
              "systole",
              "diastole"
            ],
            "duration": "1'43"
          },
          {
            "title": "Arteries and Veins",
            "url": "https://www.youtube.com/watch?v=mYZXoD73GO0",
            "desc": "bouw en functie van de bloedvaten",
            "terms": [
              "slagader",
              "haarvaten",
              "ader",
              "uitwisseling stoffen",
              "bloeddruk",
              "kleppen"
            ],
            "duration": "4'43"
          }
        ]
      },
      {
        "id": "10.3",
        "title": "Paragraaf 10.3",
        "items": [
          {
            "title": "Cardiac Cycle",
            "url": "https://www.youtube.com/watch?v=SwxA3L55yqs",
            "desc": "hartcyclus",
            "terms": [
              "hartkleppen",
              "kamercontractie",
              "boezemcontractie",
              "slagaderkleppen",
              "systole",
              "diastole"
            ],
            "duration": "1'21"
          },
          {
            "title": "Electrical Conduction System of the Heart",
            "url": "https://www.youtube.com/watch?v=FIeCPC7Hpf8",
            "desc": "prikkelgeleidingssysteem van het hart",
            "terms": [
              "ecg",
              "elektrische activiteit",
              "sinusknoop",
              "AV-knoop",
              "boezems",
              "kamers"
            ],
            "duration": "3'01"
          },
          {
            "title": "Cardiac Output and How to Calculate It | Visible Body - YouTube",
            "url": "https://www.youtube.com/watch?v=bUW-2GHfX64",
            "desc": "berekenen van het hartminuutvolume",
            "terms": [
              "slagvolume",
              "hartslagfrequentie",
              "hartminuutvolume"
            ],
            "duration": "0'50"
          }
        ]
      },
      {
        "id": "10.4",
        "title": "Paragraaf 10.4",
        "items": [
          {
            "title": "What Is Blood Made of?",
            "url": "https://www.youtube.com/watch?v=81w0BXg7QJA",
            "desc": "bouw en functie van de verschillende bestanddelen van het bloed.",
            "terms": [
              "rode bloedcellen",
              "hemoglobine",
              "witte bloedcellen",
              "bloedplaatjes",
              "bloedstolling",
              "bloedplasma",
              "bloedtransfusie"
            ],
            "duration": "4'34"
          },
          {
            "title": "CO2 Transport",
            "url": "https://www.youtube.com/watch?v=gEdt7ykNzAw",
            "desc": "transport van CO2",
            "terms": [
              "gaswisseling",
              "stofwisseling",
              "hemoglobine",
              "Bohr-effect",
              "Haldane-effect"
            ],
            "duration": "5'03"
          },
          {
            "title": "Oxygen Hemoglobin Dissociation Curve",
            "url": "https://www.youtube.com/watch?v=r-16hB76Ark",
            "desc": "transport van O2",
            "terms": [
              "deoxyhemoglobine",
              "oxyhemoglobine",
              "myoglobine zuurstofverzadigingscurve"
            ],
            "duration": "8'51"
          }
        ]
      },
      {
        "id": "10.5",
        "title": "Paragraaf 10.5",
        "items": [
          {
            "title": "Blood Vessels",
            "url": "https://www.youtube.com/watch?v=AlSQEs694qY",
            "desc": "bouw en functie van bloedvaten",
            "terms": [
              "slagaders",
              "haarvaten",
              "aders",
              "bloeddruk",
              "totale oppervlak",
              "kleppen"
            ],
            "duration": "4'01"
          },
          {
            "title": "Coagulation Cascade",
            "url": "https://www.youtube.com/watch?v=DKFSH5MMPLM",
            "desc": "bloedstolling na verwonding",
            "terms": [
              "bloedplaatjes",
              "rode bloedcellen",
              "fibrine",
              "stollingsfactoren",
              "plaatjesprop",
              "cascade"
            ],
            "duration": "2'44"
          },
          {
            "title": "Capillary Exchange and Edema",
            "url": "https://www.youtube.com/watch?v=6ecmOuCIoNc",
            "desc": "uitwisseling van stoffen in de haarvaten",
            "terms": [
              "haarvaten",
              "endotheel",
              "diffusie",
              "osmose",
              "filtratie",
              "reabsorptie",
              "hydrostatische druk",
              "filtratiedruk",
              "colloïd-osmotische druk",
              "lymfe",
              "oedeem"
            ],
            "duration": "4'25"
          },
          {
            "title": "The Lymphatic System",
            "url": "https://www.youtube.com/watch?v=cCPyWFK0IKs",
            "desc": "het lymfesysteem",
            "terms": [
              "bloedsomloop",
              "haarvaten",
              "weefselvloeistof",
              "lymfesysteem",
              "lymfevaten",
              "lymfe",
              "kleppen",
              "lymfeknopen",
              "afweer"
            ],
            "duration": "4'34"
          }
        ]
      }
    ],
    "11": [
      {
        "id": "11.1",
        "title": "Paragraaf 11.1",
        "items": [
          {
            "title": "Duurzaam & Gezond eten met de Schijf van Vijf | Voedingscentrum",
            "url": "https://www.youtube.com/watch?v=2pKJJPBLn-0",
            "desc": "duurzaam en gezond eten met de Schijf van Vijf",
            "terms": [
              "voedingsstoffen",
              "Schijf van Vijf",
              "gezond en duurzaam eten"
            ],
            "duration": "2'38"
          },
          {
            "title": "Waarom zijn vezels zo belangrijk? Prof. Ben Witteman legt het uit.",
            "url": "https://www.youtube.com/watch?v=b8FBav5A0SA",
            "desc": "belang van voedingsvezels in voeding",
            "terms": [
              "vezels",
              "darmbacteriën",
              "ontlasting"
            ],
            "duration": "6'07 (tot 4'55)"
          },
          {
            "title": "Wat zijn E-nummers?",
            "url": "https://www.youtube.com/watch?v=cW0OKFnyqzc",
            "desc": "voedseladditieven",
            "terms": [
              "additieven",
              "E-nummers"
            ],
            "duration": "2'52"
          }
        ]
      },
      {
        "id": "11.2",
        "title": "Paragraaf 11.2",
        "items": [
          {
            "title": "Physiology Basics: the Digestive System, Animation",
            "url": "https://www.youtube.com/watch?v=zSXgoYdHotw",
            "desc": "bouw en werking van het verteringsstelsel",
            "terms": [
              "peristaltiek",
              "vertering",
              "enkelvoudige suikers",
              "aminozuren",
              "glycerol en vetzuren",
              "slokdarm",
              "maag",
              "twaalfvingerige darm",
              "dunne darm",
              "dikke darm",
              "endeldarm",
              "verteringsenzymen",
              "ontlasting (feces)",
              "darmflora"
            ],
            "duration": "4'21"
          },
          {
            "title": "What is peristalsis?",
            "url": "https://www.youtube.com/watch?v=kVjeNZA5pi4",
            "desc": "transport van voedsel door het maagdarmkanaal",
            "terms": [
              "peristaltische bewegingen"
            ],
            "duration": "0'58"
          },
          {
            "title": "My X Ray swallows",
            "url": "https://www.youtube.com/watch?v=umnnA50IDIY",
            "desc": "röntgenopname van het inslikken van voedsel",
            "terms": [
              "peristaltiek",
              "slokdarm"
            ],
            "duration": "1'49"
          },
          {
            "title": "Why is the gut microbiome important?",
            "url": "https://www.youtube.com/watch?v=AsyzqhFKLoI",
            "desc": "de invloed van darmbacteriën (microbioom) op de gezondheid",
            "terms": [
              "darmbacteriën",
              "gezondheid"
            ],
            "duration": "2'19"
          }
        ]
      },
      {
        "id": "11.3",
        "title": "Paragraaf 11.3",
        "items": [
          {
            "title": "Digestive enzymes | Physiology",
            "url": "https://www.youtube.com/watch?v=a0yGDipKWlo",
            "desc": "de werking van verschillende verteringsenzymen",
            "terms": [
              "verteringsenzymen",
              "vertering",
              "vetten",
              "eiwitten",
              "koolhydraten"
            ],
            "duration": "4'17"
          },
          {
            "title": "How Temperature and pH Affect Rate of Reaction",
            "url": "https://www.youtube.com/watch?v=n9He_FK6nao",
            "desc": "invloed van de temperatuur en de pH uit op de snelheid van een enzymreactie",
            "terms": [
              "enzymwerking",
              "enzym",
              "substraat",
              "denaturatie",
              "optimumtemperatuur",
              "pH",
              "optimum-pH"
            ],
            "duration": "3'36"
          },
          {
            "title": "Digestive system: protein digestion",
            "url": "https://www.youtube.com/watch?v=QUK9r0cWWgE",
            "desc": "het verschil tussen endopeptidasen en exopeptidasen",
            "terms": [
              "endopeptidase",
              "exopeptidase"
            ],
            "duration": "1'08"
          }
        ]
      },
      {
        "id": "11.4",
        "title": "Paragraaf 11.4",
        "items": [
          {
            "title": "lipid digestion experiment",
            "url": "https://www.youtube.com/watch?v=qVgSm0lWmRw",
            "desc": "experiment met vetvertering door lipase met en zonder gal",
            "terms": [
              "vet",
              "lipase",
              "gal (bile)",
              "vetzuren",
              "pH"
            ],
            "duration": "2'32"
          },
          {
            "title": "Bile and Emulsification",
            "url": "https://www.youtube.com/watch?v=TNG-RRzwBVU",
            "desc": "de bijdrage van gal aan de afbraak van vetten",
            "terms": [
              "kauwen",
              "oppervlakvergroting",
              "gal (bile)",
              "vetzuren",
              "glycerol",
              "emulsie",
              "optimum pH"
            ],
            "duration": "3'35"
          },
          {
            "title": "Wat doet je lever?",
            "url": "https://www.youtube.com/watch?v=wbh3SjzydnQ",
            "desc": "functies van de lever",
            "terms": [
              "lever",
              "leverslagader",
              "poortader",
              "leverader",
              "detoxificatie",
              "cholesterol",
              "vitamine D",
              "gal (bile)",
              "galblaas"
            ],
            "duration": "3'24"
          },
          {
            "title": "Hydrophilic vs Hydrophobic | Substances | Cell Membranes",
            "url": "https://www.youtube.com/watch?v=JbaScpYu8Vs",
            "desc": "het verschil tussen hydrofiele en hydrofobe stoffen",
            "terms": [
              "hydrofiel",
              "hydrofoob",
              "polair",
              "apolair",
              "oplosbaarheid"
            ],
            "duration": "2'20"
          }
        ]
      },
      {
        "id": "11.5",
        "title": "Paragraaf 11.5",
        "items": [
          {
            "title": "Functions of the Small Intestine",
            "url": "https://www.youtube.com/watch?v=3Dl2N6ZNAQc",
            "desc": "vertering van eiwitten, koolhydraten en vetten",
            "terms": [
              "dunne darm",
              "bouw wand dunne darm",
              "darmvlok (villus)",
              "enzymen",
              "microvilli",
              "alvleesklier (pancreas)",
              "eiwitvertering",
              "koolhydraatvertering",
              "vetvertering",
              "gal (bile)",
              "lever",
              "emulgeren",
              "lymfevaten",
              "peristaltiek"
            ],
            "duration": "7'50"
          },
          {
            "title": "All about the small intestine",
            "url": "https://www.youtube.com/watch?v=2gblAUxTJfU",
            "desc": "",
            "terms": [
              "dunne darm",
              "oppervlaktevergroting",
              "darmvlokken (villi)",
              "microvilli",
              "verschillende verteringsenzymen",
              "gal",
              "peristaltiek",
              "dikke darm"
            ],
            "duration": ""
          },
          {
            "title": "Cell Junctions",
            "url": "https://www.youtube.com/watch?v=gJ9WTD0XEnc",
            "desc": "verschillende verbindingen tussen cellen",
            "terms": [
              "tight-junctions",
              "anchoring junctions",
              "gap junctions"
            ],
            "duration": "1'40"
          },
          {
            "title": "Cholesterol Metabolism, LDL, HDL and other Lipoproteins",
            "url": "https://www.youtube.com/watch?v=9dghtf7Z7fw",
            "desc": "de bijdrage van de lever aan de verwerking van vetachtige stoffen",
            "terms": [
              "cholesterol",
              "celmembraan",
              "gal (bile)",
              "hormonen",
              "vitamine D",
              "negatieve terugkoppeling",
              "lipoproteïne",
              "chylomicron",
              "VLDL",
              "LDL",
              "HDL",
              "aderverkalking"
            ],
            "duration": "3'45"
          }
        ]
      }
    ],
    "12": [
      {
        "id": "12.1",
        "title": "Paragraaf 12.1",
        "items": [
          {
            "title": "Homeostasis & Feedback Mechanisms",
            "url": "https://www.youtube.com/watch?v=_obgJ2zc3ZU",
            "desc": "werking van regelkringen",
            "terms": [
              "homeostase",
              "receptor",
              "norm",
              "effector",
              "negatieve terugkoppeling",
              "positieve terugkoppeling"
            ],
            "duration": "3'46"
          },
          {
            "title": "Negative Feedback",
            "url": "https://www.youtube.com/watch?v=14SQT97EE4c",
            "desc": "voorbeelden van regelkringen in het menselijk lichaam",
            "terms": [
              "negatieve terugkoppeling",
              "homeostase",
              "receptor",
              "norm",
              "effector",
              "hypothalamus"
            ],
            "duration": "3'55"
          }
        ]
      },
      {
        "id": "12.2",
        "title": "Paragraaf 12.2",
        "items": [
          {
            "title": "What is Liver?",
            "url": "https://www.youtube.com/watch?v=Wpxx_TCaqQ4",
            "desc": "ligging, bouw en functies van de lever",
            "terms": [
              "lever",
              "leverslagader",
              "poortader",
              "leverader",
              "leverlobjes",
              "galgangetjes",
              "gal",
              "galblaas"
            ],
            "duration": "4'27"
          },
          {
            "title": "Liver Function: What Does The Liver Do For Your Body?",
            "url": "https://www.youtube.com/watch?v=YvAedbNl-jg",
            "desc": "bijdrage van de lever aan de stofwisseling van voedingsstoffen",
            "terms": [
              "lever",
              "vetten",
              "eiwitten",
              "koolhydraten",
              "gal",
              "bilirubine",
              "detoxificatie",
              "ureum",
              "ijzeropslag",
              "plasma-eiwitten"
            ],
            "duration": "2'00"
          }
        ]
      },
      {
        "id": "12.3",
        "title": "Paragraaf 12.3",
        "items": [
          {
            "title": "Anatomy and physiology of the respiratory system",
            "url": "https://www.youtube.com/watch?v=0fVoz4V75_E",
            "desc": "bouw, werking en functie van de ademhalingsorganen",
            "terms": [
              "longen",
              "middenrif",
              "in- en uitademing",
              "neusholte",
              "luchtpijp",
              "bronchi",
              "bronchiolen",
              "longblaasjes",
              "haarvaten"
            ],
            "duration": "10'28"
          },
          {
            "title": "Smoking Causes Cancer, Heart Disease, Emphysema",
            "url": "https://www.youtube.com/watch?v=gwuwrRK-I2Y",
            "desc": "het effect van roken op de gezondheid",
            "terms": [
              "roken",
              "CO",
              "NO",
              "nicotine",
              "verslaving",
              "hart- en vaatziekten",
              "COPD",
              "emfyseem",
              "longkanker"
            ],
            "duration": "8'58"
          }
        ]
      },
      {
        "id": "12.4",
        "title": "Paragraaf 12.4",
        "items": [
          {
            "title": "Mechanics of breathing",
            "url": "https://www.youtube.com/watch?v=NM3PK5qy9uA",
            "desc": "ventilatiebewegingen bij borst- en buikademhaling",
            "terms": [
              "tussenribspieren",
              "middenrif",
              "longvolume",
              "in- en uitademing"
            ],
            "duration": "1'47"
          },
          {
            "title": "Pulmonary Ventilation",
            "url": "https://www.youtube.com/watch?v=86wD8fsc3m8",
            "desc": "in- en uitademen berust op een drukverschil tussen de longen en de buitenlucht",
            "terms": [
              "in- en uitademing",
              "ademhalingsspieren",
              "tussenribspieren",
              "middenrifspieren",
              "buikspieren"
            ],
            "duration": "2'58"
          },
          {
            "title": "Mechanism of Breathing,",
            "url": "https://www.youtube.com/watch?v=wc2K1Olt4Q8",
            "desc": "relatie tussen volume en druk bij de ademhaling",
            "terms": [
              "druk",
              "volume",
              "pleurale holte",
              "pneumothorax",
              "middenrif",
              "tussenribspieren",
              "emfyseem",
              "astma"
            ],
            "duration": "4'14"
          },
          {
            "title": "Boyle's Law",
            "url": "https://www.youtube.com/watch?v=0UmaLVJQ3wA",
            "desc": "relatie tussen volume en druk bij de ademhaling",
            "terms": [
              "druk",
              "volume",
              "gasmoleculen"
            ],
            "duration": "1'57"
          }
        ]
      },
      {
        "id": "12.5",
        "title": "Paragraaf 12.5",
        "items": [
          {
            "title": "Human Urinary System",
            "url": "https://www.youtube.com/watch?v=1NtPjzm1-74",
            "desc": "de bouw van de nieren",
            "terms": [
              "nierschors",
              "niermerg",
              "nefron",
              "nierkapsel",
              "glomerulus",
              "verzamelbuisje",
              "urineleider",
              "blaas",
              "urinebuis"
            ],
            "duration": "4'26"
          },
          {
            "title": "Formation of Urine",
            "url": "https://www.youtube.com/watch?v=9_h0ZXx1lFw&t=125s",
            "desc": "vorming van urine",
            "terms": [
              "nefron",
              "glomerulus",
              "kapsel van Bowman",
              "nierkanaaltjes",
              "reabsorptie",
              "verzamelbuisje",
              "urineleider"
            ],
            "duration": "6'55"
          },
          {
            "title": "Nephron - the Functional Unit of Kidney",
            "url": "https://www.youtube.com/watch?v=Z2PugQZFLR0",
            "desc": "bouw en werking van nefronen",
            "terms": [
              "nier",
              "bloedvolume",
              "bloeddruk",
              "afvalstoffen"
            ],
            "duration": "3'10"
          },
          {
            "title": "Ultrafiltration and reabsorption",
            "url": "https://www.youtube.com/watch?v=pv5-GwJ90ZM",
            "desc": "vorming van urine",
            "terms": [
              "ultrafiltratie",
              "glomerulus",
              "kapsel van Bowman",
              "voorurine",
              "reabsorptie",
              "nierkanaaltjes",
              "diffusie",
              "actief transport",
              "osmose",
              "urine"
            ],
            "duration": "2'53"
          },
          {
            "title": "How does a dialysis machine work?",
            "url": "https://www.youtube.com/watch?v=-uRghmBCFZk",
            "desc": "de werking van een dialyseapparaat",
            "terms": [
              "osmoregulatie",
              "nieren",
              "dialyseapparaat",
              "permeabiliteit"
            ],
            "duration": "1'42"
          }
        ]
      }
    ],
    "13": [
      {
        "id": "13.1",
        "title": "Paragraaf 13.1",
        "items": [
          {
            "title": "Hypothalamus & Pituitary Gland",
            "url": "https://www.youtube.com/watch?v=TVhm2rBGhB0",
            "desc": "hypofyse- en hypothalamushormonen regelen homeostase",
            "terms": [
              "hypothalamus",
              "hypofyse (pituitary gland)",
              "voor- en achterkwab"
            ],
            "duration": "2'00"
          }
        ]
      },
      {
        "id": "13.2",
        "title": "Paragraaf 13.2",
        "items": [
          {
            "title": "Hypothalamus and Pituitary Gland Functions",
            "url": "https://www.youtube.com/watch?v=AnQ2z-r_00s",
            "desc": "releasinghormonen uit hypothalamus reguleren de hormoonproductie van de hypofyse",
            "terms": [
              "hypothalamus",
              "releasinghormonen",
              "hypofyse (pituitary gland)"
            ],
            "duration": "3'59"
          },
          {
            "title": "Mechanisms of Hormone Action",
            "url": "https://www.youtube.com/watch?v=TgNwxF3aQpE",
            "desc": "hormonen beïnvloeden cellen van doelwitorganen",
            "terms": [
              "endocriene klieren",
              "peptide hormonen",
              "steroïde hormonen",
              "receptoren",
              "cAMP",
              "second messenger",
              "transcriptie",
              "translatie"
            ],
            "duration": "3'53"
          },
          {
            "title": "How do your hormones work?",
            "url": "https://www.youtube.com/watch?v=-SPRPkLoKp8",
            "desc": "invloed van hormonen op processen in het lichaam",
            "terms": [
              "klieren",
              "hormonen",
              "receptoren",
              "hormoonklieren",
              "doelwitcellen",
              "schildklier",
              "geslachtsklieren en - hormonen",
              "diabetes",
              "alvleesklier"
            ],
            "duration": "5'03"
          }
        ]
      },
      {
        "id": "13.3",
        "title": "Paragraaf 13.3",
        "items": [
          {
            "title": "Calcium Homeostasis: Regulation & Maintenance",
            "url": "https://www.youtube.com/watch?v=o_lBAPBhfIo",
            "desc": "het regelen van de calciumconcentratie in het bloed",
            "terms": [
              "calcium",
              "gebonden",
              "ionen",
              "homeostase",
              "nieren",
              "PTH",
              "vitamine D",
              "calcitonine",
              "osteoblasten",
              "osteoclasten"
            ],
            "duration": "5'06"
          },
          {
            "title": "Calcium Homeostasis Feedback Loop",
            "url": "https://www.youtube.com/watch?v=n7zY8FJY9BY",
            "desc": "het regelen van de calciumconcentratie in het bloed",
            "terms": [
              "homeostase",
              "osteoblasten",
              "osteoclasten",
              "osteocyten (botcellen)",
              "differentiatie",
              "calcium",
              "regelkring",
              "PTH",
              "calcitonine"
            ],
            "duration": "6'22"
          },
          {
            "title": "Introduction to Bone Biology",
            "url": "https://www.youtube.com/watch?v=inqWoakkiTc",
            "desc": "hormonen regelen de botafbraak en de botvorming",
            "terms": [
              "beenmerg",
              "osteocyten (botcellen)"
            ],
            "duration": "2'43"
          },
          {
            "title": "Osteoblasts and Osteoclasts",
            "url": "https://www.youtube.com/watch?v=78RBpWSOl08",
            "desc": "botvormende en botetende cellen",
            "terms": [
              "osteoclasten",
              "mineralen",
              "calciumfosfaat",
              "osteoblasten"
            ],
            "duration": "2'11"
          }
        ]
      },
      {
        "id": "13.4",
        "title": "Paragraaf 13.4",
        "items": [
          {
            "title": "Control of Blood Glucose Concentration",
            "url": "https://www.youtube.com/watch?v=OHrX3X3LGzI",
            "desc": "regeling van de glucoseconcentratie van het bloed",
            "terms": [
              "glucoseconcentratie",
              "glucagon",
              "insuline",
              "glucose",
              "glycogeen",
              "alvleesklier"
            ],
            "duration": "4'33"
          },
          {
            "title": "Diabetes Type 1 and Type 2",
            "url": "https://www.youtube.com/watch?v=XfyGv-xwjlI",
            "desc": "diabetes type 1 en type 2",
            "terms": [
              "glucosegehalte",
              "diabetes type 1",
              "diabetes type 2",
              "alvleesklier",
              "insuline",
              "β-cellen",
              "leefstijl"
            ],
            "duration": "3'45"
          }
        ]
      },
      {
        "id": "13.5",
        "title": "Paragraaf 13.5",
        "items": [
          {
            "title": "How We Control Our Body Temperature",
            "url": "https://www.youtube.com/watch?v=IGsQi0JZUTw",
            "desc": "regeling van de lichaamstemperatuur",
            "terms": [
              "temperatuurregulatie",
              "homeostase",
              "enzymactiviteit",
              "norm",
              "receptor",
              "effector",
              "huid",
              "zweetklieren"
            ],
            "duration": "4'28"
          },
          {
            "title": "How does the thyroid manage your metabolism?",
            "url": "https://www.youtube.com/watch?v=iNrUpBwU3q0",
            "desc": "regeling van de stofwisseling door de schildklier",
            "terms": [
              "schildklier",
              "T3",
              "T4",
              "stofwisseling",
              "hypofyse (pituitary gland)",
              "TSH"
            ],
            "duration": "3'36"
          },
          {
            "title": "Endocrine System",
            "url": "https://www.youtube.com/watch?v=BvpPCn1rwsw",
            "desc": "verschillen tussen het zenuwstelsel en het hormoonstelsel en hun interactie",
            "terms": [
              "hormoonstelsel",
              "zenuwstelsel",
              "hormoon",
              "receptoren",
              "hypofyse (pituitary gland)",
              "schildklier (thyroid)",
              "negatieve terugkoppeling",
              "bijnieren (adrenal glands)",
              "alvleesklier",
              "testes",
              "ovaria"
            ],
            "duration": "5'03"
          },
          {
            "title": "Red Blood Cells - Erythropoietin (EPO)",
            "url": "https://www.youtube.com/watch?v=SxgtW-dxp68",
            "desc": "regeling van het zuurstofgehalte in het bloed",
            "terms": [
              "terugkoppeling",
              "stimulus",
              "hormoon",
              "doelwitcel",
              "response",
              "nieren",
              "epo",
              "rode beenmerg",
              "rode bloedcellen"
            ],
            "duration": "1'23"
          }
        ]
      }
    ],
    "14": [
      {
        "id": "14.1",
        "title": "Paragraaf 14.1",
        "items": [
          {
            "title": "Structure function and types of neurons",
            "url": "https://www.youtube.com/watch?v=cUGuWh2UeMk",
            "desc": "bouw en functie van de verschillende typen neuronen",
            "terms": [
              "neuron",
              "synaps",
              "impulsgeleiding",
              "sensorische neuronen",
              "schakelneuronen",
              "motorische neuronen",
              "cellichaam",
              "dendrieten",
              "axon",
              "myelineschede"
            ],
            "duration": "4'09"
          },
          {
            "title": "The Neuron",
            "url": "https://www.youtube.com/watch?v=6qS83wD29PY",
            "desc": "bouw van neuronen",
            "terms": [
              "hersenen",
              "zenuwcellen (neuronen)",
              "dendriet",
              "cellichaam",
              "axon",
              "myelineschede",
              "synaps"
            ],
            "duration": "1'47"
          }
        ]
      },
      {
        "id": "14.2",
        "title": "Paragraaf 14.2",
        "items": [
          {
            "title": "Central & Peripheral Anatomy",
            "url": "https://www.youtube.com/watch?v=L6w0_j6mWbo",
            "desc": "verschil tussen het centrale en het perifere zenuwstelsel en de geleiding van impulsen via zenuwcellen",
            "terms": [
              "centraal zenuwstelsel",
              "hersenen",
              "ruggenmerg",
              "perifeer zenuwstelsel",
              "zenuwen",
              "reflexen",
              "dendriet",
              "axon",
              "cellichaam",
              "synaps (§4)",
              "neurotransmitters (§4)"
            ],
            "duration": "2'36"
          },
          {
            "title": "Brain",
            "url": "https://www.youtube.com/watch?v=pRFXSjkpKWA",
            "desc": "bouw en functies van de hersenen",
            "terms": [
              "hersenen",
              "grote hersenen",
              "kleine hersenen",
              "hersenstam",
              "ruggenmerg",
              "thalamus",
              "hypothalamus",
              "bloed-hersenbarrière"
            ],
            "duration": "3'58"
          },
          {
            "title": "Opbouw hersenen",
            "url": "https://www.youtube.com/watch?v=hVyVHuQMXz8",
            "desc": "opbouw hersenen (gedetailleerd)",
            "terms": [
              "grote hersenen",
              "motorische schors",
              "linker- en rechterhersenhelft",
              "hersenbalk",
              "grijze stof",
              "hersenschors",
              "witte stof",
              "kleine hersenen",
              "hypothalamus",
              "hypofyse",
              "hersenstam",
              "ruggenmerg"
            ],
            "duration": "6'07"
          }
        ]
      },
      {
        "id": "14.3",
        "title": "Paragraaf 14.3",
        "items": [
          {
            "title": "Neuron Resting Potential",
            "url": "https://www.youtube.com/watch?v=YP_P6bYvEjE&list=PL39D3B9844CFB7873&index=4",
            "desc": "rustpotentiaal in een neuron op molecuulniveau",
            "terms": [
              "rustpotentiaal",
              "membraanpotentiaal",
              "drempelwaarde",
              "K+-ionen",
              "Na+-ionen",
              "Cl−-ionen",
              "ionpoorten"
            ],
            "duration": "3'56"
          },
          {
            "title": "Neuron action potential",
            "url": "https://www.youtube.com/watch?v=XnksofQN8_s",
            "desc": "ontstaan van een actiepotentiaal door het overschrijden van de drempelwaarde",
            "terms": [
              "actiepotentiaal",
              "Schwanncellen",
              "ionpoorten",
              "rustpotentiaal",
              "drempelwaarde",
              "actiepotentiaal",
              "depolarisatie",
              "repolarisatie",
              "hyperpolarisatie",
              "refractaire periode",
              "Na+-K+-pomp"
            ],
            "duration": "3'24"
          }
        ]
      },
      {
        "id": "14.4",
        "title": "Paragraaf 14.4",
        "items": [
          {
            "title": "How synapses work",
            "url": "https://www.youtube.com/watch?v=Ibzfwtdtong",
            "desc": "werking van een synaps",
            "terms": [
              "actiepotentiaal",
              "synapsspleet",
              "neurotransmitters",
              "Na+- een K+-poorten",
              "Ca2+-ionen",
              "receptoren",
              "summatie",
              "excitatie",
              "inhibitie"
            ],
            "duration": "3'20"
          },
          {
            "title": "Chemical Synapse",
            "url": "https://www.youtube.com/watch?v=mItV4rC57kM",
            "desc": "impulsoverdracht via een synaps",
            "terms": [
              "synaps",
              "presynaptisch membraan",
              "synapsspleet",
              "postsynaptisch membraan",
              "receptoren",
              "neurotransmitters"
            ],
            "duration": "1'12"
          },
          {
            "title": "EPSP & IPSP",
            "url": "https://www.youtube.com/watch?v=ZnC8v9Dl_O4",
            "desc": "exciterende neurotransmitter en inhiberende neurotransmitters en het bereiken van de drempelwaarde van een neuron",
            "terms": [
              "exciterende neurotransmitter",
              "EPSP",
              "inhiberende neurotransmitters",
              "IPSP",
              "summatie",
              "depolarisatie",
              "drempelwaarde",
              "actiepotentiaal"
            ],
            "duration": "2'42"
          },
          {
            "title": "Neuron action potential",
            "url": "https://www.youtube.com/watch?v=BbUcWbtVjT4",
            "desc": "membraanpotentiaal op molecuulniveau en (sprongsgewijze) impulsoverdracht",
            "terms": [
              "dendrieten",
              "cellichaam",
              "axon",
              "myelineschede",
              "synaps",
              "neurotransmitter",
              "actiepotentiaal",
              "K+-",
              "Na+-",
              "Cl− en Ca2+-ionen",
              "rustpotentiaal",
              "ionpoorten",
              "depolarisatie",
              "EPSP",
              "IPSP",
              "repolarisatie",
              "drempelwaarde",
              "spanningsafhankelijke Na+- en K+-poorten",
              "Na+-K+-pomp",
              "refractaire periode",
              "hyperpolarisatie",
              "insnoering van Ranvier",
              "sprongsgewijze impulsgeleiding"
            ],
            "duration": "10'24"
          }
        ]
      },
      {
        "id": "14.5",
        "title": "Paragraaf 14.5",
        "items": [
          {
            "title": "Autonomic Nervous System",
            "url": "https://www.youtube.com/watch?v=D96mSg2_h0c",
            "desc": "verschil tussen het animale en het autonome zenuwstelsel",
            "terms": [
              "autonoom en animaal zenuwstelsel",
              "(ortho)sympatisch en parasympatisch zenuwstelsel"
            ],
            "duration": "4'22"
          },
          {
            "title": "Autonomic Nervous System",
            "url": "https://www.youtube.com/watch?v=YFYRosjcVuU",
            "desc": "(ortho)sympatisch en parasympatisch zenuwstelsel",
            "terms": [
              "autonoom zenuwstelsel",
              "onwillekeurig",
              "(ortho)sympatisch en parasympatisch zenuwstelsel",
              "ruggenmerg"
            ],
            "duration": "2'35"
          }
        ]
      }
    ],
    "15": [
      {
        "id": "15.1",
        "title": "Paragraaf 15.1",
        "items": [
          {
            "title": "Utricle and Saccule balance and equillibrium",
            "url": "https://www.youtube.com/watch?v=-jc4gkN8w7o",
            "desc": "bouw en werking van het evenwichtszintuig",
            "terms": [
              "buitenoor",
              "middenoor",
              "binnenoor",
              "slakkenhuis",
              "vestibulum",
              "haarcellen",
              "macula",
              "kalksteentjes",
              "halfcirkelvormige kanalen",
              "endolymfe",
              "ampulla",
              "cupula"
            ],
            "duration": "2'04"
          },
          {
            "title": "The Vestibular System",
            "url": "https://www.youtube.com/watch?v=ryGMI3SpxCE",
            "desc": "bouw en werking van het evenwichtszintuig",
            "terms": [
              "vestibulum",
              "halfcirkelvormige kanalen",
              "endolymfe",
              "ampulla",
              "haarcellen",
              "cupula",
              "maculae",
              "kalksteentjes",
              "rechtlijnige versnelling"
            ],
            "duration": "4'05"
          }
        ]
      },
      {
        "id": "15.2",
        "title": "Paragraaf 15.2",
        "items": [
          {
            "title": "Video about Hearing and How it Works",
            "url": "https://www.youtube.com/watch?v=flIAxGsV1q0",
            "desc": "bouw en de werking van het oor",
            "terms": [
              "trommelvlies",
              "hamer",
              "aambeeld",
              "stijgbeugel",
              "binnenoor",
              "slakkenhuis",
              "haarcellen",
              "orgaan van Corti",
              "gehoorzenuw"
            ],
            "duration": "3'07"
          },
          {
            "title": "How Old Are Your Ears? (Hearing Test)",
            "url": "https://www.youtube.com/watch?v=-E1SDl9vLo8",
            "desc": "gehoortest",
            "terms": [
              "frequentie",
              "geluid"
            ],
            "duration": "2'43"
          },
          {
            "title": "How hearing loss occurs",
            "url": "https://www.youtube.com/watch?v=mMiwxUUj7Xg",
            "desc": "gehoorbeschadiging",
            "terms": [
              "haarcellen met ciliën"
            ],
            "duration": "1'34"
          }
        ]
      },
      {
        "id": "15.3",
        "title": "Paragraaf 15.3",
        "items": [
          {
            "title": "How the Eye Works Nearsighted & Farsighted",
            "url": "https://www.youtube.com/watch?v=YcedXDN6a88",
            "desc": "bouw en werking van het oog",
            "terms": [
              "hoornvlies",
              "iris",
              "lens",
              "netvlies",
              "hersenen",
              "oogzenuw",
              "bijziendheid",
              "holle lens",
              "verziendheid",
              "bolle lens"
            ],
            "duration": "3'22"
          },
          {
            "title": "Seeing in bright light and in dim light",
            "url": "https://www.youtube.com/watch?v=EYpQMA0NeAw",
            "desc": "pupilreflex",
            "terms": [
              "pupilgrootte",
              "lengtespieren",
              "kringspieren",
              "iris"
            ],
            "duration": "1'04"
          },
          {
            "title": "Seeing objects at different distances",
            "url": "https://www.youtube.com/watch?v=uLPBLZKLd80",
            "desc": "accommodatie",
            "terms": [
              "accommodatie",
              "lens",
              "kringspier"
            ],
            "duration": "1'08"
          },
          {
            "title": "Visual Neural Pathways and Visual Field Defects",
            "url": "https://www.youtube.com/watch?v=s1ChzSyVEr8",
            "desc": "beeldverwerking in de hersenen en problemen hiermee bij defecten",
            "terms": [
              "netvlies",
              "oogzenuw",
              "optisch chiasma",
              "gezichtsveld",
              "primaire visuele schors (negeer 1’30- 2’24)"
            ],
            "duration": "5'28"
          },
          {
            "title": "Dissection of an ox eye",
            "url": "https://www.youtube.com/watch?v=lfIxZNssBLs",
            "desc": "ontleden van een koeienoog",
            "terms": [
              "hoornvlies",
              "iris",
              "pupil",
              "lens",
              "netvlies",
              "blinde vlek"
            ],
            "duration": "1'37"
          }
        ]
      },
      {
        "id": "15.4",
        "title": "Paragraaf 15.4",
        "items": [
          {
            "title": "The Retina",
            "url": "https://www.youtube.com/watch?v=fZDAwXh54is",
            "desc": "bouw van het netvlies",
            "terms": [
              "netvlies",
              "fotoreceptoren",
              "staafjes",
              "kegeltjes",
              "gele vlek",
              "bipolaire cellen",
              "ganglioncellen",
              "blinde vlek",
              "blinde vlek",
              "oogzenuw",
              "horizontale cellen",
              "amacriene cellen"
            ],
            "duration": "1'55"
          },
          {
            "title": "Vision Processing",
            "url": "https://www.youtube.com/watch?v=VgjXdKzBVlE",
            "desc": "de werking van staafjes op moleculair niveau",
            "terms": [
              "netvlies",
              "staafjes",
              "kegeltjes",
              "rodopsine",
              "G-eiwit",
              "Na+-poort",
              "signaalcascade",
              "hyperpolarisatie (in plaats van depolarisatie!)"
            ],
            "duration": "5'16"
          },
          {
            "title": "Neuroscience: Phototransduction",
            "url": "https://www.youtube.com/watch?v=dhd2fja0LZ4",
            "desc": "",
            "terms": [
              "netvlies",
              "staafjes",
              "kegeltjes",
              "Na+-poort",
              "depolarisatie",
              "neurotransmitters cGMP",
              "hyperpolarisatie (leidt tot een signaal!)",
              "cascade"
            ],
            "duration": "1'59"
          },
          {
            "title": "Rods, cones, iodopsin and rhodopsin",
            "url": "https://www.youtube.com/watch?v=5tORbTRDJic",
            "desc": "het verschil tussen de functie van staafjes en kegeltjes en de relatieve gevoeligheid van drie soorten kegeltjes",
            "terms": [
              "staafjes",
              "kegeltjes",
              "rodopsine",
              "fotopsine",
              "absorptiespectrum"
            ],
            "duration": "1'43"
          }
        ]
      },
      {
        "id": "15.5",
        "title": "Paragraaf 15.5",
        "items": [
          {
            "title": "De kniepeesreflex",
            "url": "https://www.youtube.com/watch?v=v1I0Iuq0bYs",
            "desc": "kniepeesreflex",
            "terms": [
              "kniepeesreflex",
              "ruggenmerg",
              "spierspoeltje",
              "sensorische neuronen",
              "motorische neuronen",
              "schakelneuronen",
              "stimulerende en remmende neurotransmitter"
            ],
            "duration": "0'58"
          },
          {
            "title": "The Structure and Function of the Muscle Spindle Fiber",
            "url": "https://www.youtube.com/watch?v=F0dp7A4IKyY",
            "desc": "ligging en werking van spierspoeltjes",
            "terms": [
              "bindweefsel",
              "spierspoeltje",
              "sensorische neuronen",
              "golgipeeslichaampjes"
            ],
            "duration": "1'30"
          }
        ]
      }
    ],
    "16": [
      {
        "id": "16.1",
        "title": "Paragraaf 16.1",
        "items": [
          {
            "title": "Immunology in the skin",
            "url": "https://www.youtube.com/watch?v=_VhcZTGv0CU&t=18s",
            "desc": "bouw van de huid; aangeboren en verworven afweer",
            "terms": [
              "huid",
              "barrière",
              "opperhuid",
              "hoornlaag",
              "lederhuid (dermis)",
              "onderhuids bindweefsel",
              "commensale bacteriën e.a",
              "ziekteverwekkers (pathogenen)",
              "verschillende immuuncellen (zie volgende paragrafen) mestcellen (§4)",
              "cytokinen",
              "macrofagen",
              "psoriasis"
            ],
            "duration": "7'29"
          },
          {
            "title": "How We Get Our Skin Color",
            "url": "https://www.youtube.com/watch?v=VC0TL_lYLm8",
            "desc": "bouw van de huid; bescherming tegen uv-straling",
            "terms": [
              "huid",
              "opperhuid",
              "hoorncellen (keratinocyten)",
              "lederhuid (dermis)",
              "onderhuids bindweefsel",
              "melanocyten",
              "pigment melanine",
              "uv-straling",
              "DNA",
              "huidkanker"
            ],
            "duration": "3'32"
          },
          {
            "title": "The amazing ways plants defend themselves",
            "url": "https://www.youtube.com/watch?v=Hja0SLs2kus",
            "desc": "afweer van planten",
            "terms": [
              "vraat",
              "predatoren",
              "lignine",
              "cuticula",
              "doornen",
              "stekels",
              "gifstoffen",
              "receptoren",
              "celwanden",
              "hormonen",
              "parasieten"
            ],
            "duration": "6'11"
          }
        ]
      },
      {
        "id": "16.2",
        "title": "Paragraaf 16.2",
        "items": [
          {
            "title": "Inflammation",
            "url": "https://www.youtube.com/watch?v=gIlZHyptUPM",
            "desc": "ontstekingsreacties",
            "terms": [
              "ontstekingsreacties",
              "bloedplaatjes",
              "histamine",
              "chemotaxis",
              "fagocytose"
            ],
            "duration": "3'38"
          },
          {
            "title": "Introduction to Innate Immunity",
            "url": "https://www.youtube.com/watch?v=sNIcR1PAGIk",
            "desc": "aangeboren afweer",
            "terms": [
              "aangeboren (innate) afweer",
              "verworven (adaptive) afweer",
              "huid",
              "complementsysteem",
              "cascade",
              "fagocyten",
              "mestcellen",
              "opsonisatie",
              "ontstekingsreacties",
              "afweercellen"
            ],
            "duration": ""
          },
          {
            "title": "Innate and Adaptive Immunity",
            "url": "https://www.youtube.com/watch?v=5dGg8TjDfDo&list=PLkv9qVBSWseFOyBm68jDLmr1df0wgvFVy&index=7",
            "desc": "aangeboren en de verworven afweer",
            "terms": [
              "aangeboren afweer",
              "huid",
              "slijmvliezen",
              "trilhaarepitheel",
              "slijm",
              "lysozym",
              "maagzuur",
              "huidflora",
              "ontstekingsreactie",
              "macrofagen",
              "fagocyten",
              "complementsysteem",
              "cascade",
              "opsonisatie",
              "verworven afweer"
            ],
            "duration": "3'13"
          }
        ]
      },
      {
        "id": "16.3",
        "title": "Paragraaf 16.3",
        "items": [
          {
            "title": "How your immune system works",
            "url": "https://www.youtube.com/watch?v=1KdlU1sQcyc",
            "desc": "aangeboren en de verworven afweer",
            "terms": [
              "afweersysteem",
              "virus",
              "cytokine",
              "fagocyten",
              "dendritische cellen",
              "T-cellen",
              "kloneren",
              "Tc-cel",
              "T-helpercel",
              "B-cellen",
              "antistoffen",
              "geheugencellen"
            ],
            "duration": "2'40"
          },
          {
            "title": "The Immune Response",
            "url": "https://www.youtube.com/watch?v=ef56-WOvyPA",
            "desc": "ontstaan van de verworven afweer",
            "terms": [
              "ziekteverwekker",
              "macrofaag",
              "fagocytose",
              "APC",
              "T-helpercellen",
              "cytokinen",
              "Tc-cellen",
              "B-cellen",
              "differentiatie",
              "plasmacellen",
              "antistoffen",
              "geheugencellen",
              "immuniteit"
            ],
            "duration": "2'32"
          },
          {
            "title": "Hoe gebruik je BINAS bij vragen over afweer?",
            "url": "https://www.youtube.com/watch?v=-7tNjJbt49E",
            "desc": "Binas 84L",
            "terms": [
              "aspecifieke afweer (macrofagen",
              "NK-cellen en granulocyten)",
              "cellulaire afweer",
              "APC",
              "MHC-II",
              "T-helpercel",
              "cellulaire afweer",
              "pre-Tc-cel",
              "virus",
              "APC",
              "MHC-I",
              "klonering",
              "cytokinen",
              "lysis",
              "humorale afweer",
              "B-cellen (inactief: APC en actief)",
              "klonering",
              "plasmacellen",
              "antistoffen",
              "geheugencellen"
            ],
            "duration": "7'13"
          },
          {
            "title": "Cellular Immunity - Adaptive Immunity",
            "url": "https://www.youtube.com/watch?v=nqRn5fN22t4",
            "desc": "verworven afweer",
            "terms": [
              "verworven afweer",
              "ziekteverwekker",
              "cellulaire immuniteit",
              "humorale immuniteit",
              "T-cellen",
              "thymus",
              "T-helpercellen",
              "CD4",
              "CD8",
              "Tc-cellen",
              "APC",
              "MHC-I",
              "MHC-II",
              "dendritische cellen",
              "kloneren",
              "geheugencellen",
              "cytokinen",
              "lymfeknopen",
              "T-suppressorcellen",
              "B-cellen"
            ],
            "duration": "5'15"
          },
          {
            "title": "Antigen Presentation: MHC Class I vs. MHC Class II",
            "url": "https://www.youtube.com/watch?v=t81EjpkCiss&list=PLkv9qVBSWseFOyBm68jDLmr1df0wgvFVy&index=6",
            "desc": "de verworven afweer",
            "terms": [
              "lichaamseigen",
              "lichaamsvreemd",
              "antigeenpresentatie",
              "MHC-I",
              "CD8 T-cel",
              "MHC-II",
              "CD4 T-helpercel",
              "lichaamseigen antigenen",
              "virusantigenen"
            ],
            "duration": "5'15"
          }
        ]
      },
      {
        "id": "16.4",
        "title": "Paragraaf 16.4",
        "items": [
          {
            "title": "Vaccines and the Immune Response",
            "url": "https://www.youtube.com/watch?v=Atrx1P2EkiQ",
            "desc": "vaccinatie",
            "terms": [
              "virussen",
              "inactieve virusdeeltjes",
              "macrofagen",
              "T-cellen",
              "B-cellen",
              "MHC",
              "antigenen",
              "Tc-cellen",
              "T-suppressorcellen",
              "T-helpercellen",
              "antistoffen",
              "geheugencellen",
              "plasmacellen"
            ],
            "duration": "3'36"
          },
          {
            "title": "How do Covid-19 vaccines work?",
            "url": "https://www.youtube.com/watch?v=UGPp7zdToKk",
            "desc": "vaccinatie tegen Covid-19",
            "terms": [
              "coronavirus",
              "mRNA-vaccin",
              "spike-eiwitten",
              "dendritische cellen",
              "T-helpercellen",
              "killercellen",
              "geheugencellen"
            ],
            "duration": "2'56"
          },
          {
            "title": "What is Antibiotic Resistance?",
            "url": "https://www.youtube.com/watch?v=HdroY9UOG9k",
            "desc": "antibiotica-resistentie",
            "terms": [
              "antibiotica",
              "bacteriën",
              "resistentie",
              "mutaties",
              "MRSA-bacteriën"
            ],
            "duration": "4'50"
          },
          {
            "title": "IgE Mediated Type I Hypersensitivity",
            "url": "https://www.youtube.com/watch?v=UOG_mChgPgE",
            "desc": "allergische reacties",
            "terms": [
              "IgE",
              "antigenen",
              "APC",
              "MHC-II",
              "T-helpercel",
              "cytokinen",
              "B-cellen",
              "cytokinen plasmacellen",
              "mestcellen",
              "histamine",
              "allergische reacties"
            ],
            "duration": "1'56"
          }
        ]
      },
      {
        "id": "16.5",
        "title": "Paragraaf 16.5",
        "items": [
          {
            "title": "Blood types - AB0 and Rh Blood Group Systems",
            "url": "https://www.youtube.com/watch?v=YJ7iBvKbXD8",
            "desc": "de verschillende bloedgroepen van het AB0- en het resussysteem",
            "terms": [
              "rode bloedcel",
              "bloedplasma",
              "bloedgroepen",
              "antigenen",
              "antistoffen",
              "AB0",
              "resusfactor",
              "klontering (=agglutination)",
              "universele donor",
              "universele ontvanger"
            ],
            "duration": "4'45"
          },
          {
            "title": "Bloedgroepen - Bloed",
            "url": "https://www.youtube.com/watch?v=XeIXGz0yv24",
            "desc": "AB0- en resusbloedgroepen",
            "terms": [
              "bloedgroepen",
              "factor (antigeen) A en B (AB0)",
              "resusfactor",
              "bloedtransfusie",
              "donor",
              "ontvanger",
              "antistoffen (antilichamen)"
            ],
            "duration": "3'22"
          },
          {
            "title": "How Rh factor affects a pregnancy",
            "url": "https://www.youtube.com/watch?v=e2KK86bekNw",
            "desc": "resusbaby",
            "terms": [
              "bloedgroep",
              "resusfactor",
              "resusbaby",
              "antiresus"
            ],
            "duration": "2'20"
          },
          {
            "title": "Bone Marrow Transplants",
            "url": "https://www.youtube.com/watch?v=YuirlplSfBU",
            "desc": "stamceltransplantatie",
            "terms": [
              "stamcel",
              "transplantatie",
              "HLA",
              "donor",
              "eeneiige tweeling"
            ],
            "duration": "2'55"
          },
          {
            "title": "T-cell therapy for cancer treatment: How it works",
            "url": "https://www.youtube.com/watch?v=0vyKw71rB-A",
            "desc": "T-celtherapie bij kanker",
            "terms": [
              "T-cel",
              "immuunsysteem",
              "T-celtherapie",
              "chemotherapie"
            ],
            "duration": "1'16"
          },
          {
            "title": "Tumour immunology and immunotherapy",
            "url": "https://www.youtube.com/watch?v=K09xzIQ8zsg",
            "desc": "immunotherapie bij de behandeling van huidkanker",
            "terms": [
              "NK-cellen",
              "Tc-cellen",
              "apoptose",
              "T-helpercellen",
              "macrofagen",
              "cytokinen"
            ],
            "duration": "5'03"
          }
        ]
      }
    ],
    "17": [
      {
        "id": "17.1",
        "title": "Paragraaf 17.1",
        "items": [
          {
            "title": "The Structure of DNA",
            "url": "https://www.youtube.com/watch?v=o_-6JXLYS-k&",
            "desc": "bouw van het DNA-molecuul",
            "terms": [
              "DNA-molecuul",
              "dsDNA",
              "dubbele helix",
              "nucleotiden",
              "suiker (deoxyribose)",
              "fosfaat",
              "basen (A",
              "C",
              "G en T)",
              "5’ zijde",
              "3’ zijde",
              "waterstofbruggen",
              "complementair"
            ],
            "duration": "5'58"
          },
          {
            "title": "Cell Cycle",
            "url": "https://www.youtube.com/watch?v=zZ1g2W1jl7E",
            "desc": "bouw van chromosomen",
            "terms": [
              "chromosoom",
              "chromatide",
              "chromatine",
              "DNA-molecuul",
              "eiwit",
              "spiralisatie",
              "haploïd (n)",
              "diploïd (2n)",
              "locus",
              "allelen",
              "homologe chromosomen",
              "celcyclus",
              "replicatie",
              "mitose"
            ],
            "duration": "6'24"
          },
          {
            "title": "DNA fingerprinting",
            "url": "https://www.youtube.com/watch?v=P9pqCJ42wHM",
            "desc": "de rol van STR's (in video: VNTR’s), bij verwantschapsonderzoek",
            "terms": [
              "DNA-fingerprinting",
              "niet-coderend DNA",
              "restrictie-enzymen STR’s (in video: elektroforese"
            ],
            "duration": "3'02"
          }
        ]
      },
      {
        "id": "17.2",
        "title": "Paragraaf 17.2",
        "items": [
          {
            "title": "DNA replication",
            "url": "https://www.youtube.com/watch?v=KexRCwMoXi4",
            "desc": "DNA-replicatie",
            "terms": [
              "replicatie",
              "dubbele helix",
              "complementaire basenparing",
              "matrijsstreng",
              "DNA-polymerase"
            ],
            "duration": "1'47"
          },
          {
            "title": "Okazaki fragments",
            "url": "https://www.youtube.com/watch?v=TEQMeP9GG6M",
            "desc": "Okazaki-fragment in het proces van DNA-replicatie",
            "terms": [
              "replicatie",
              "helicase",
              "5’ zijde",
              "3’ zijde",
              "leesrichting",
              "5’→3’",
              "leidende streng",
              "DNA-polymerase",
              "volgende streng",
              "Okazaki-fragmenten",
              "RNA-primer",
              "ligase"
            ],
            "duration": "1'35"
          },
          {
            "title": "Polymerase chain reaction",
            "url": "https://www.youtube.com/watch?v=Il8y2Wnd_8o&t=5s",
            "desc": "PCR-techniek",
            "terms": [
              "DNA-replicatie",
              "DNA-sequentie",
              "primers",
              "complementair",
              "DNA-polymerase"
            ],
            "duration": "2'38"
          },
          {
            "title": "What is Gel Electrophoresis?",
            "url": "https://www.youtube.com/watch?v=GUXKQBknYQo",
            "desc": "gelelektroforese",
            "terms": [
              "elektroforese",
              "gel",
              "elektrisch veld",
              "grootte moleculen",
              "lading",
              "fluorescentie",
              "banden"
            ],
            "duration": "7'31"
          }
        ]
      },
      {
        "id": "17.3",
        "title": "Paragraaf 17.3",
        "items": [
          {
            "title": "DNA transcription and translation",
            "url": "https://www.youtube.com/watch?v=8_f-8ISZ164",
            "desc": "transcriptie, splicing en translatie",
            "terms": [
              "DNA",
              "kern",
              "genen",
              "mRNA",
              "genexpressie",
              "transcriptie",
              "RNA-polymerase",
              "promotor",
              "matrijsstreng of template",
              "5’ zijde",
              "3’ zijde",
              "coderende streng",
              "pre-mRNA",
              "introns",
              "exons",
              "5’ cap",
              "3’ poly-A-staart",
              "splicing",
              "translatie",
              "codon",
              "startcodon",
              "stopcodons",
              "ribosoom",
              "genetische code",
              "tRNA",
              "anticodon",
              "aminozuur",
              "ontkoppelingseiwit"
            ],
            "duration": "7'17"
          }
        ]
      },
      {
        "id": "17.4",
        "title": "Paragraaf 17.4",
        "items": [
          {
            "title": "Sanger Sequencing",
            "url": "https://www.youtube.com/watch?v=-QIMkQ4E_wE",
            "desc": "sequencen",
            "terms": [
              "5’ zijde",
              "3’ zijde",
              "primers",
              "DNA-polymerase",
              "dNTP",
              "ddNTP",
              "elektroforese",
              "matrijsstreng"
            ],
            "duration": "11'54"
          },
          {
            "title": "Gene mutations",
            "url": "https://www.youtube.com/watch?v=U4mC0kGxuKk",
            "desc": "verschillende typen mutaties en hun gevolgen",
            "terms": [
              "deletie",
              "leesraamverschuiving",
              "insertie",
              "substitutie",
              "inversie"
            ],
            "duration": "2'16"
          },
          {
            "title": "Making of Golen Rice",
            "url": "https://www.youtube.com/watch?v=v2B6Xp4Uud4",
            "desc": "toepassing van gericht DNA knippen",
            "terms": [
              "genetisch modificeren",
              "gen",
              "restrictie-enzym",
              "plasmide",
              "ligase",
              "recombinant-DNA"
            ],
            "duration": "2'33"
          },
          {
            "title": "Production of GM animals",
            "url": "https://www.youtube.com/watch?v=LciR8T3oca4",
            "desc": "toepassing van gericht DNA knippen",
            "terms": [
              "genetisch modificeren",
              "gen",
              "bevruchte eicel",
              "embryo’s",
              "vector",
              "virus",
              "liposoom"
            ],
            "duration": "2'02"
          }
        ]
      },
      {
        "id": "17.5",
        "title": "Paragraaf 17.5",
        "items": [
          {
            "title": "Role of Epigenetics in Chronic Obstructive Pulmonary Disease Susceptibility",
            "url": "https://www.youtube.com/watch?v=KV6V_OLtoXs",
            "desc": "invloed van epigenetische factoren op de genexpressie",
            "terms": [
              "genexpressie",
              "epigenetica",
              "DNA-methylering",
              "SNP"
            ],
            "duration": "2'55"
          },
          {
            "title": "Epigenetics: Nature vs nurture",
            "url": "https://www.youtube.com/watch?v=k50yMwEOWGU",
            "desc": "invloed van methylering op het fenotype",
            "terms": [
              "milieu",
              "nurture",
              "nature",
              "genen",
              "methylering"
            ],
            "duration": "4'55"
          },
          {
            "title": "Knockout Mouse",
            "url": "https://www.youtube.com/watch?v=_PzUX81rtW4",
            "desc": "uitschakelen van genen",
            "terms": [
              "inactivatie van genen",
              "fenotype"
            ],
            "duration": "2'38"
          },
          {
            "title": "Epigenetics and Aging",
            "url": "https://www.youtube.com/watch?v=PYjPqq8P70s",
            "desc": "epigenetica en veroudering",
            "terms": [
              "eeneiige tweelingen",
              "chromatine",
              "genexpressie",
              "DNA reparatie"
            ],
            "duration": "4'33"
          },
          {
            "title": "The lac Operon Explained",
            "url": "https://www.youtube.com/watch?v=K53EOjjMt4E",
            "desc": "lac-operon in bacteriën",
            "terms": [
              "structurele genen",
              "regulatorgen",
              "actief repressoreiwit",
              "operator",
              "inactief repressoreiwit",
              "DNA-polymerase",
              "promotor",
              "translatie"
            ],
            "duration": "3'07"
          },
          {
            "title": "Transcription",
            "url": "https://www.youtube.com/watch?v=WsofH466lqk",
            "desc": "transcriptie bij eukaryoten (TATA-box)",
            "terms": [
              "DNA",
              "transcriptiefactoren",
              "RNA-polymerase",
              "ATP",
              "TATA-box",
              "enhancer",
              "RNA"
            ],
            "duration": "2'50"
          }
        ]
      }
    ],
    "18": [
      {
        "id": "18.1",
        "title": "Paragraaf 18.1",
        "items": [
          {
            "title": "DNA transcription and translation ook §17.3)",
            "url": "https://www.youtube.com/watch?v=8_f-8ISZ164(zie",
            "desc": "transcriptie, splicing en translatie",
            "terms": [
              "DNA",
              "kern",
              "genen",
              "mRNA",
              "genexpressie",
              "transcriptie",
              "RNA-polymerase",
              "promotor",
              "matrijsstreng of template",
              "5’ zijde",
              "3’ zijde",
              "coderende streng",
              "pre-mRNA",
              "introns",
              "exons",
              "5’ cap",
              "3’ poly-A-staart",
              "splicing",
              "translatie",
              "codon",
              "startcodon",
              "stopcodons",
              "ribosoom",
              "genetische code",
              "tRNA",
              "anticodon",
              "aminozuur",
              "ontkoppelingseiwit"
            ],
            "duration": "7'17"
          },
          {
            "title": "Recognition Particle SRP",
            "url": "https://www.youtube.com/watch?v=XCLfdGbySAA",
            "desc": "koppeling ribosoom aan ER met behulp van adreslabel en SHM (SRP in video)",
            "terms": [
              "ER",
              "ribosoom",
              "adreslabel (signal peptide)",
              "SHM (SRP)",
              "SHM-receptor",
              "verwijderen adreslabel"
            ],
            "duration": "0'47"
          },
          {
            "title": "Proteins and their Structure",
            "url": "https://www.youtube.com/watch?v=piXHivrTT-E",
            "desc": "bouw en functie van eiwitten",
            "terms": [
              "eiwitstructuur",
              "primaire structuur",
              "secundaire structuur",
              "tertiaire structuur",
              "quaternaire structuur",
              "S-bruggen",
              "denaturatie"
            ],
            "duration": "eiwitstructuur, primaire structuur, secundaire structuur, tertiaire structuur, quaternaire structuur, S-bruggen, denaturatie"
          },
          {
            "title": "Protein Structure and Denaturation",
            "url": "https://www.youtube.com/watch?v=gEycDKQn93Y",
            "desc": "denaturatie van eiwit",
            "terms": [
              "aminozuren",
              "hydrofoob",
              "hydrofiel",
              "primaire structuur",
              "secundaire structuur",
              "denaturatie"
            ],
            "duration": "aminozuren, hydrofoob, hydrofiel, primaire structuur, secundaire structuur, denaturatie"
          }
        ]
      },
      {
        "id": "18.2",
        "title": "Paragraaf 18.2",
        "items": [
          {
            "title": "Wat is een eiwit?",
            "url": "https://www.youtube.com/watch?v=wvTv8TqWC48",
            "desc": "bouw en functie van eiwitten",
            "terms": [
              "aminozuren",
              "aminogroep",
              "carboxylgroep",
              "hydrofiel",
              "primaire structuur",
              "secundaire structuur",
              "tertiaire structuur",
              "quaternaire structuur",
              "waterstofbruggen",
              "functies eiwitten"
            ],
            "duration": "aminozuren, aminogroep, carboxylgroep, hydrofiel, primaire structuur, secundaire structuur, tertiaire structuur, quaternaire structuur, waterstofbruggen, functies eiwitten"
          },
          {
            "title": "A Day in the Life of a Motor Protein",
            "url": "https://www.youtube.com/watch?v=tMKlPDBRJ1E",
            "desc": "functies van het motoreiwit kinesine",
            "terms": [
              "motoreiwit",
              "myosine",
              "celskelet"
            ],
            "duration": "motoreiwit, myosine, celskelet"
          },
          {
            "title": "Kinesin Walking Narrated Version for Garland",
            "url": "https://www.youtube.com/watch?v=YAva4g3Pk6k",
            "desc": "animatie motoreiwit (bron 7)",
            "terms": [
              "motoreiwit",
              "microtubulus",
              "ATP",
              "ADP",
              "Pi"
            ],
            "duration": "motoreiwit, microtubulus, ATP, ADP, Pi"
          }
        ]
      },
      {
        "id": "18.3",
        "title": "Paragraaf 18.3",
        "items": [
          {
            "title": "Hoe enzymen werken",
            "url": "https://www.youtube.com/watch?v=yk14dOOvwMk",
            "desc": "werking van enzymen",
            "terms": [
              "katalysatie",
              "substraat",
              "producten",
              "temperatuurafhankelijk",
              "actieve centrum",
              "induced fit"
            ],
            "duration": "katalysatie, substraat, producten, temperatuurafhankelijk, actieve centrum, induced fit"
          },
          {
            "title": "Enzymes: The Induced Fit Model",
            "url": "https://www.youtube.com/watch?v=pVoytz_3H_s",
            "desc": "enzymactiviteit",
            "terms": [
              "enzym",
              "actieve centrum",
              "substraat",
              "product",
              "substraatspecifiek",
              "optimumtemperatuur",
              "optimum-pH",
              "denaturatie"
            ],
            "duration": "enzym, actieve centrum, substraat, product, substraatspecifiek, optimumtemperatuur, optimum-pH, denaturatie"
          }
        ]
      },
      {
        "id": "18.4",
        "title": "Paragraaf 18.4",
        "items": [
          {
            "title": "protein degradation",
            "url": "https://www.youtube.com/watch?v=9ipUx6iz6xU",
            "desc": "afbraak van eiwitten in de cel",
            "terms": [
              "ubiquitine",
              "proteasoom",
              "ATP",
              "peptideketen"
            ],
            "duration": "ubiquitine, proteasoom, ATP, peptideketen"
          },
          {
            "title": "Gene Silencing by microRNA",
            "url": "https://www.youtube.com/watch?v=t5jroSCBBwk",
            "desc": "silencing (uitschakelen) van genen",
            "terms": [
              "kern",
              "DNA",
              "genen",
              "RNA-interferentie",
              "microRNA",
              "RNA-polymerase",
              "dicer",
              "RISC",
              "basenparing",
              "inhibitie",
              "ribosoom",
              "translatie"
            ],
            "duration": "kern, DNA, genen, RNA-interferentie, microRNA, RNA-polymerase, dicer, RISC, basenparing, inhibitie, ribosoom, translatie"
          },
          {
            "title": "CHAPERONES AND MISFOLDED PROTEINS",
            "url": "https://www.youtube.com/watch?v=ESC3CSApNnk",
            "desc": "afbraak van eiwitten in de cel",
            "terms": [
              "driedimensionale structuur",
              "co-factor",
              "chaperone",
              "proteasoom",
              "Hsp"
            ],
            "duration": "driedimensionale structuur, co-factor, chaperone, proteasoom, Hsp"
          },
          {
            "title": "CRISPR: Gene editing and beyond",
            "url": "https://www.youtube.com/watch?v=4YKFw2KZA5o",
            "desc": "toepassingen van CRISPR-Cas",
            "terms": [
              "CRISPR-Cas",
              "bacterieel immuunsysteem",
              "Cas9",
              "gids-RNA",
              "uitschakelen genen",
              "transcriptie"
            ],
            "duration": "CRISPR-Cas, bacterieel immuunsysteem, Cas9, gids-RNA, uitschakelen genen, transcriptie"
          }
        ]
      },
      {
        "id": "18.5",
        "title": "Paragraaf 18.5",
        "items": [
          {
            "title": "cDNA Synthesis Protocol by Reverse Transcription",
            "url": "https://www.youtube.com/watch?v=VT_nNVO95eI",
            "desc": "synthese van cDNA en actieve genen in een cel aantonen",
            "terms": [
              "reverse transcriptase",
              "mRNA",
              "cDNA",
              "5’ zijde",
              "3’ zijde",
              "poly-A-staart",
              "primer",
              "DNA-polymerase",
              "RNase",
              "ligase",
              "ds CDNA",
              "exons",
              "introns",
              "PCR",
              "microarray"
            ],
            "duration": "reverse transcriptase, mRNA, cDNA, 5' zijde, 3' zijde, poly-A-staart, primer, DNA-polymerase, RNase, ligase, ds CDNA, exons, introns, PCR, microarray"
          },
          {
            "title": "2D Gel Electrophoresis",
            "url": "https://www.youtube.com/watch?v=giEQjcz4mmU",
            "desc": "technieken om eiwitten van elkaar te scheiden",
            "terms": [
              "elektroforese",
              "scheiden eiwitten",
              "pH",
              "iso-elektrisch punt"
            ],
            "duration": "elektroforese, scheiden eiwitten, pH, iso-elektrisch punt"
          },
          {
            "title": "MALDI TOF Process",
            "url": "https://www.youtube.com/watch?v=0jeFpXHZ8W0",
            "desc": "technieken om eiwitten op grond van hun massa te scheiden",
            "terms": [
              "massaspectrometer",
              "ionisatie",
              "versnelling",
              "‘time of flight’"
            ],
            "duration": "massaspectrometer, ionisatie, versnelling, ‘time of flight'"
          }
        ]
      }
    ],
    "19": [
      {
        "id": "19.1",
        "title": "Paragraaf 19.1",
        "items": [
          {
            "title": "Muscle Tissue",
            "url": "https://www.youtube.com/watch?v=7t-DGxG09l8",
            "desc": "verschillende typen spierweefsel",
            "terms": [
              "skeletspier",
              "hartspierweefsel",
              "glad spierweefsel",
              "dwarsgestreept spierweefsel",
              "pezen",
              "spiervezel",
              "myofibril",
              "myofilament",
              "sarcomeer",
              "actine en myosine",
              "willekeurig",
              "gap junction",
              "onwillekeurig"
            ],
            "duration": "11'03"
          },
          {
            "title": "Neuromuscular Junction",
            "url": "https://www.youtube.com/watch?v=zbo0i1r1pXA",
            "desc": "neuromusculaire synapsen",
            "terms": [
              "motorneuron",
              "spiervezels",
              "motorische eenheid",
              "neuromusculaire synaps",
              "neurotransmitter",
              "acetylcholine",
              "receptor",
              "drempelwaarde",
              "eiwitpoortjes",
              "sarcoplasmatisch reticulum",
              "gifstoffen"
            ],
            "duration": "4'48"
          },
          {
            "title": "Cell Junctions",
            "url": "https://www.youtube.com/watch?v=gJ9WTD0XEnc",
            "desc": "cell junctions",
            "terms": [
              "tight junction",
              "anchoring junction",
              "gap junction"
            ],
            "duration": "1'40"
          }
        ]
      },
      {
        "id": "19.2",
        "title": "Paragraaf 19.2",
        "items": [
          {
            "title": "Muscle Contraction",
            "url": "https://www.youtube.com/watch?v=BVcgO4p88AA",
            "desc": "actine- en myosinemoleculen laten een spiervezel samentrekken",
            "terms": [
              "skeletspieren",
              "actinefilament",
              "myosinekopje",
              "sarcomeer",
              "calciumionen",
              "ATP"
            ],
            "duration": "2'48"
          },
          {
            "title": "Fast twitch vs Slow twitch muscle fibers",
            "url": "https://www.youtube.com/watch?v=3xTjnwo2S2A",
            "desc": "verschillende spiervezels",
            "terms": [
              "langzame en snelle spiervezels"
            ],
            "duration": "2'05"
          }
        ]
      },
      {
        "id": "19.3",
        "title": "Paragraaf 19.3",
        "items": [
          {
            "title": "Anaerobic System",
            "url": "https://www.youtube.com/watch?v=uCmNQQWlrc0",
            "desc": "energiebronnen voor je cellen",
            "terms": [
              "anaeroob",
              "fosfaataccu",
              "ATP",
              "ADP",
              "Pi",
              "CP (in de video PC)",
              "creatine",
              "melkzuur",
              "glycolyse"
            ],
            "duration": "4'24"
          },
          {
            "title": "How Glycolysis Works",
            "url": "https://www.youtube.com/watch?v=iChb5hEDzqc",
            "desc": "glycolyse",
            "terms": [
              "glycolyse",
              "anaeroob",
              "pyrodruivenzuur (pyruvate)",
              "ATP",
              "ADP",
              "NADH",
              "H+",
              "melkzuur"
            ],
            "duration": "1'43"
          },
          {
            "title": "Anaerobic Respiration and Fermentation",
            "url": "https://www.youtube.com/watch?v=bdzkbzscQm8",
            "desc": "anaerobe dissimilatie",
            "terms": [
              "anaeroob",
              "elektronenacceptor",
              "glycolyse",
              "NADH",
              "H+",
              "pyrodruivenzuur",
              "ethanal",
              "ethanol",
              "alcoholische gisting",
              "melkzuurgisting"
            ],
            "duration": "7'35"
          }
        ]
      },
      {
        "id": "19.4",
        "title": "Paragraaf 19.4",
        "items": [
          {
            "title": "Cellular Respiration Glycolysis, Krebs cycle, Electron Transport",
            "url": "https://www.youtube.com/watch?v=pNzFYBA2Ofg",
            "desc": "aerobe afbraak van glucose",
            "terms": [
              "dissimilatie",
              "glucose",
              "ATP",
              "glycolyse",
              "pyrodruivenzuur",
              "NADH",
              "H+",
              "mitochondriën",
              "acetyl-CoA",
              "citroenzuurcyclus",
              "NADH",
              "H+",
              "FADH2",
              "elektronentransportketen",
              "ATP-synthetase",
              "water"
            ],
            "duration": "6'01"
          },
          {
            "title": "The Krebs Cycle",
            "url": "https://www.youtube.com/watch?v=UZlmm-yzWrQ",
            "desc": "citroenzuurcyclus",
            "terms": [
              "acetyl-CoA",
              "NADH",
              "H+",
              "ATP",
              "FADH2"
            ],
            "duration": "3'14"
          },
          {
            "title": "The Electron Transport Chain",
            "url": "https://www.youtube.com/watch?v=zJNx1DDqIVo",
            "desc": "elektronentransportketen",
            "terms": [
              "elektronentransportketen. mitochondriën",
              "matrix",
              "membraan",
              "H+",
              "ATP-synthetase",
              "FADH2"
            ],
            "duration": "4'52"
          }
        ]
      },
      {
        "id": "19.5",
        "title": "Paragraaf 19.5",
        "items": [
          {
            "title": "Stress",
            "url": "https://www.youtube.com/watch?v=Y7FMbda05tY",
            "desc": "samenwerken van het zenuw- en het hormoonstelsel bij stress",
            "terms": [
              "stress",
              "thalamus",
              "amygdala",
              "hypothalamus",
              "fight",
              "flight",
              "bijnieren",
              "adrenaline",
              "CRF",
              "ACTH"
            ],
            "duration": "4'12"
          },
          {
            "title": "Frequency of stimulation and force",
            "url": "https://www.youtube.com/watch?v=Dtwow0BXW5c",
            "desc": "hoe een vloeiende spierbeweging ontstaat",
            "terms": [
              "motorische eenheid",
              "drempelwaarde",
              "actiepotentiaal",
              "spiervezel",
              "summatie",
              "getande tetanus",
              "gladde tetanus"
            ],
            "duration": "3'03"
          },
          {
            "title": "Demonstration: Forearm muscle stimulation",
            "url": "https://www.youtube.com/watch?v=hdFZLUx36rY",
            "desc": "spierstimulatie",
            "terms": [
              "stimulatie",
              "motorische eenheid",
              "summatie",
              "drempelwaarde",
              "tetanus"
            ],
            "duration": "3'09"
          }
        ]
      }
    ],
    "20": [
      {
        "id": "20.1",
        "title": "Paragraaf 20.1",
        "items": [
          {
            "title": "Plant Breeding",
            "url": "https://www.youtube.com/watch?v=eFKtYb9CG_s",
            "desc": "plantenveredeling",
            "terms": [
              "selectie",
              "fenotype",
              "genetische variatie",
              "DNA",
              "genoom",
              "gene editing"
            ],
            "duration": "2'33"
          },
          {
            "title": "GCSE Biology - Genetic Engineering #82",
            "url": "https://www.youtube.com/watch?v=CfTnVx31pr0",
            "desc": "genetische modificatie",
            "terms": [
              "genoom",
              "genetische modificatie",
              "gentherapie"
            ],
            "duration": "4'44"
          }
        ]
      },
      {
        "id": "20.2",
        "title": "Paragraaf 20.2",
        "items": [
          {
            "title": "Transportation in Plants",
            "url": "https://www.youtube.com/watch?v=JFb-CWlz7kE",
            "desc": "transport van organische stoffen in planten",
            "terms": [
              "wortelharen",
              "oppervlaktevergroting",
              "apoplast",
              "symplast",
              "houtvaten (xyleem)",
              "verdamping",
              "huidmondjes",
              "sluitcellen",
              "bastvaten (floëem)",
              "begeleidende cellen"
            ],
            "duration": "3'47"
          },
          {
            "title": "Transport in Plants 0-13’00",
            "url": "https://www.youtube.com/watch?v=Lwalf3d5fwAvan",
            "desc": "opname van water en voedingszouten door plantenwortels en de waterpotentiaal in een plant",
            "terms": [
              "wortelharen",
              "diffusie",
              "apoplast",
              "symplast",
              "cytoplasmastroming",
              "endodermis",
              "bandjes van Caspari",
              "houtvaten (xyleem)",
              "water",
              "mineralen",
              "worteldruk",
              "druppelen",
              "verdamping",
              "huidmondjes",
              "sluitcellen",
              "cohesie",
              "adhesie",
              "oppervlaktespanning"
            ],
            "duration": "25'15 (stoppen bij 9'00)"
          }
        ]
      },
      {
        "id": "20.3",
        "title": "Paragraaf 20.3",
        "items": [
          {
            "title": "Chloroplast Structure & Light Dependent Reactions",
            "url": "https://www.youtube.com/watch?v=a3oUc1tdj5Q",
            "desc": "niet-cyclische en cyclische fosforylering van de lichtreactie",
            "terms": [
              "bouw blad",
              "chloroplast",
              "grana",
              "stroma",
              "thylakoïden",
              "fotosysteem II en I",
              "chlorofyl",
              "elektronentransportketen",
              "ATP-synthetase"
            ],
            "duration": "4'06"
          },
          {
            "title": "Photosynthesis: The Calvin Cycle",
            "url": "https://www.youtube.com/watch?v=SltE4zP8-9w",
            "desc": "calvincyclus",
            "terms": [
              "fotosynthese",
              "chloroplast licht- en donkerreactie",
              "NADPH",
              "H+",
              "ATP",
              "stroma",
              "ribulose difosfaat (RuBP)",
              "rubisco",
              "C-fixatie (stap 1)",
              "vorming glyceraldehyde-3-fofaat (stap 2)",
              "vorming glucose",
              "terugvorming ribulose difosfaat (stap 3)"
            ],
            "duration": "3'54"
          },
          {
            "title": "Photosynthesis",
            "url": "https://www.youtube.com/watch?v=81CFtdyHzWs",
            "desc": "fotosynthese",
            "terms": [
              "fotosynthese",
              "chloroplast",
              "thylakoïden",
              "lichtreactie",
              "fotosystemen",
              "elektronentransportketen",
              "NADPH",
              "H+",
              "ATP-synthetase",
              "donkerreactie",
              "calvincyclus",
              "rubisco",
              "ATP",
              "NADPH",
              "H+",
              "glucose",
              "zetmeel",
              "cellulose",
              "mitochondrium",
              "gaswisseling huidmondjes"
            ],
            "duration": "3'39"
          },
          {
            "title": "ATP Synthase",
            "url": "https://www.youtube.com/watch?v=Io3UyGjhdmg",
            "desc": "ATP-synthetase",
            "terms": [
              "ATP-synthetase",
              "ATP",
              "ADP",
              "Pi"
            ],
            "duration": "2'56"
          }
        ]
      },
      {
        "id": "20.4",
        "title": "Paragraaf 20.4",
        "items": [
          {
            "title": "Uses of Glucose from Photosynthesis",
            "url": "https://www.youtube.com/watch?v=cDWBoMlx9d0",
            "desc": "voortgezette assimilatie in planten",
            "terms": [
              "fotosynthese",
              "glucose",
              "dissimilatie",
              "voortgezette assimilatie",
              "zetmeel",
              "vetten",
              "cellulose",
              "aminozuren",
              "NO3-"
            ],
            "duration": "5'27"
          },
          {
            "title": "The Pressure Flow Model in a Plant",
            "url": "https://www.youtube.com/watch?v=FybiafIu1vw",
            "desc": "opname van water en voedingszouten door plantenwortels",
            "terms": [
              "water",
              "mineralen",
              "houtvaten (xyleem)",
              "opwaarts transport",
              "bastvaten (floëem)",
              "sacharose (sucrose)",
              "source",
              "sink",
              "actief transport",
              "osmose"
            ],
            "duration": "2'31"
          },
          {
            "title": "Transport in Plants 18’17",
            "url": "https://youtu.be/Lwalf3d5fwA?t=1126vanaf",
            "desc": "transport van mineralen en voedingsstoffen",
            "terms": [
              "transport mineralen en voedingsstoffen",
              "hout- en bastvaten",
              "glucose",
              "source",
              "sink",
              "zeefplaten",
              "begeleidende cellen",
              "actief transport",
              "osmose"
            ],
            "duration": "25'15vanaf 18'17"
          }
        ]
      },
      {
        "id": "20.5",
        "title": "Paragraaf 20.5",
        "items": [
          {
            "title": "Factors Affecting the Rate of Photosynthesis",
            "url": "https://www.youtube.com/watch?v=J0KxRX3fyoI",
            "desc": "beperkende factoren bij de fotosynthese",
            "terms": [
              "beperkende factoren",
              "bladgroen",
              "lichtintensiteit",
              "CO2-concentratie",
              "temperatuur"
            ],
            "duration": "5'36"
          },
          {
            "title": "Photosynthesis - Photorespiration",
            "url": "https://www.youtube.com/watch?v=gtNL1U6j5ZM",
            "desc": "fotorespiratie",
            "terms": [
              "huidmondjes",
              "verdamping",
              "gaswisseling",
              "chloroplast",
              "calvincyclus",
              "rubisco",
              "fotorespiratie"
            ],
            "duration": "2'45"
          },
          {
            "title": "Photosynthesis: Comparing C3, C4 and CAM",
            "url": "https://www.youtube.com/watch?v=13h5oC4jIsk",
            "desc": "C3-planten, C4-planten, CAM-planten",
            "terms": [
              "fotosynthese",
              "C3-planten",
              "C3-molecuul",
              "parenchymcellen (mesofyl)",
              "huidmondjes",
              "C4-planten",
              "C4-molecuul",
              "CAM-planten"
            ],
            "duration": "3'25"
          }
        ]
      }
    ]
  },
  "havo": {
    "1": [
      {
        "id": "1.1",
        "title": "Paragraaf 1.1",
        "items": [
          {
            "title": "lindsey chimp school",
            "url": "https://www.youtube.com/watch?v=TXtIyMLdplA",
            "desc": "opvang van wees-chimpansees",
            "terms": [
              "sociaal gedrag"
            ],
            "duration": "2'24"
          },
          {
            "title": "Wolf Dominance Display",
            "url": "https://www.youtube.com/watch?v=MJvATG3bHbo",
            "desc": "Signalen van wolven waarmee ze de rangorde aangeven.",
            "terms": [
              "signalen",
              "communicatie",
              "rangorde"
            ],
            "duration": "2'09"
          },
          {
            "title": "Violent chimpanzee attack - Planet Earth",
            "url": "https://www.youtube.com/watch?v=a7XuXi3mqYM",
            "desc": "Een groep chimpansees die het eigen territorium beschermt tegen een groep rivaliserende chimpansees. Daarbij vallen doden.",
            "terms": [
              "territorium",
              "geursignalen",
              "aanvalsgedrag"
            ],
            "duration": "3'55"
          }
        ]
      },
      {
        "id": "1.2",
        "title": "Paragraaf 1.2",
        "items": [
          {
            "title": "Unpacking Bumblebee Hive @ March Farm Greenhouses",
            "url": "https://www.youtube.com/watch?v=cr_FLrj-Xu0",
            "desc": "het inzetten van hommels voor de bestuiving van tomatenplanten",
            "terms": [
              "-"
            ],
            "duration": "0'43"
          },
          {
            "title": "This Lizard Escapes the Heat in an Unusual Way",
            "url": "https://www.youtube.com/watch?v=1rkkKyYCxio",
            "desc": "een overlevingsstrategie van een hagedis in de hitte van de woestijn",
            "terms": [
              "uitwendige prikkels"
            ],
            "duration": "1'49"
          },
          {
            "title": "Waring Elephants | Deadly Instincts",
            "url": "https://www.youtube.com/watch?v=KpN-P1OVzl4",
            "desc": "Mannelijke olifanten die paringsbereid zijn en twee mannetjes die vechten om de vrouwtjes.",
            "terms": [
              "inwendige prikkels",
              "hormonen"
            ],
            "duration": "2'55"
          },
          {
            "title": "Signalen en Supernormale prikkels",
            "url": "https://www.youtube.com/watch?v=Th1SVdrubsY",
            "desc": "onderzoek van Tinbergen aan het gedrag van zilvermeeuwen. Illustratie van sleutelprikkels en een supernormale prikkel",
            "terms": [
              "signalen",
              "sleutelprikkels supernormale prikkels"
            ],
            "duration": "4'19"
          }
        ]
      },
      {
        "id": "1.3",
        "title": "Paragraaf 1.3",
        "items": [
          {
            "title": "Dogs establishing rank and dominance, posturing behavior to avoid conflict",
            "url": "https://www.youtube.com/watch?v=oWota4RZHk0",
            "desc": "Twee honden die elkaar ontmoeten. Door hun rangorde te tonen, vermijden beide honden een gevecht. Let op de staartsignalen.",
            "terms": [
              "rangorde",
              "signalen"
            ],
            "duration": "0'24"
          },
          {
            "title": "Klassieke Conditionering",
            "url": "https://www.youtube.com/watch?v=nnYN5v5VTAA",
            "desc": "Onderzoek van Pavlov aan klassieke conditionering van een honden. Het fragment is van 0 tot 4:32.",
            "terms": [
              "prikkels",
              "klassieke conditionering"
            ],
            "duration": "4'32(6'01)"
          },
          {
            "title": "Skinner",
            "url": "https://www.youtube.com/watch?v=CC7q6wE89yE",
            "desc": "onderzoek van Skinner aan operante conditionering van duiven en ratten",
            "terms": [
              "beloning",
              "operante conditionering"
            ],
            "duration": "2'27"
          }
        ]
      },
      {
        "id": "1.4",
        "title": "Paragraaf 1.4",
        "items": [
          {
            "title": "Elephant Care",
            "url": "https://www.youtube.com/watch?v=jQ_gcabDwB0",
            "desc": "het controleren en verzorgen van onder andere de ogen en nagels bij olifanten",
            "terms": [
              "dierenwelzijn",
              "training"
            ],
            "duration": "2'54"
          },
          {
            "title": "Chimps vs Humans",
            "url": "https://www.youtube.com/watch?v=cPiDHXtM0VA",
            "desc": "een geheugenwedstrijd tussen chimpansee en mens",
            "terms": [
              "aangeleerd gedrag"
            ],
            "duration": "2'21"
          }
        ]
      },
      {
        "id": "1.5",
        "title": "Paragraaf 1.5",
        "items": [
          {
            "title": "Testing Baby Reflexes | Moro Reflex",
            "url": "https://www.youtube.com/watch?v=igVAJZt5iWI",
            "desc": "het testen van de aangeboren reflexen bij een pasgeboren baby",
            "terms": [
              "aangeboren gedrag",
              "reflexen"
            ],
            "duration": "1'19"
          },
          {
            "title": "Inprenten",
            "url": "https://www.youtube.com/watch?v=jLDW-0ozeMI",
            "desc": "onderzoek van Lorenz naar inprenting bij jonge ganzen",
            "terms": [
              "inprenten"
            ],
            "duration": "1'07"
          },
          {
            "title": "Instinct vs Learned Behaviors",
            "url": "https://www.youtube.com/watch?v=RL2MqJy66YM",
            "desc": "instinct (aangeboren gedrag) en aangeleerd gedrag",
            "terms": [
              "instinct",
              "aangeboren gedrag",
              "aangeleerd gedrag"
            ],
            "duration": "6'04"
          }
        ]
      }
    ],
    "2": [
      {
        "id": "2.1",
        "title": "Paragraaf 2.1",
        "items": [
          {
            "title": "Exploring Different Levels of Biological Organization",
            "url": "https://www.youtube.com/watch?v=_MgWRg20HW0",
            "desc": "uitleg over de verschillende organisatieniveaus",
            "terms": [
              "molecuul",
              "organel",
              "cel",
              "weefsel",
              "orgaan",
              "populatie",
              "levensgemeenschap",
              "ecosysteem",
              "organisatieniveau"
            ],
            "duration": "4'06"
          },
          {
            "title": "Characteristics of Living Things-What makes something alive?",
            "url": "https://www.youtube.com/watch?v=30qOijVBS7o",
            "desc": "levenskenmerken",
            "terms": [
              "levenskenmerk"
            ],
            "duration": "3'13"
          },
          {
            "title": "Cell Structure I",
            "url": "https://www.youtube.com/watch?v=URUJD5NEXC8",
            "desc": "bouw van een cel; verschillen tussen eukaryotische en prokaryotische cellen",
            "terms": [
              "eukaryoot",
              "prokaryoot",
              "celmembraan",
              "kern",
              "ribosomen",
              "cytoplasma",
              "ER",
              "golgisysteem",
              "vacuole",
              "lysosomen",
              "mitochondriën",
              "ATP",
              "celskelet",
              "chloroplast",
              "celwand",
              "trilharen",
              "flagel"
            ],
            "duration": "7'21"
          }
        ]
      },
      {
        "id": "2.2",
        "title": "Paragraaf 2.2",
        "items": [
          {
            "title": "What is DNA? (Structure and Function of DNA)",
            "url": "https://www.youtube.com/watch?v=T6_wKPAbf2k",
            "desc": "bouw van DNA",
            "terms": [
              "helix",
              "opbouw DNA",
              "nucleotide",
              "complementaire basen",
              "triplet",
              "aminozuur",
              "gen",
              "eiwit",
              "functie eiwitten"
            ],
            "duration": "6'32"
          },
          {
            "title": "From DNA to protein - 3D",
            "url": "https://www.youtube.com/watch?v=gG7uCskUOrA",
            "desc": "de transcriptie van DNA in mRNA en de translatie van mRNA in de ribosomen",
            "terms": [
              "gen",
              "mRNA",
              "ribosomen",
              "aminozuren",
              "eiwit",
              "triplet"
            ],
            "duration": "2'41"
          }
        ]
      },
      {
        "id": "2.3",
        "title": "Paragraaf 2.3",
        "items": [
          {
            "title": "Cell Cycle and Mitosis",
            "url": "https://www.youtube.com/watch?v=7NM-UWFHG18",
            "desc": "Het belang van mitose bij het herstel van een wond; alle stadia van mitose komen aan de orde.",
            "terms": [
              "celcyclus: G1 → S → G2 → M",
              "structuureiwitten (trekdraden)"
            ],
            "duration": "6'19"
          },
          {
            "title": "Introduction to Cancer Biology (Part 3): Tissue Invasion and Metastasis",
            "url": "https://www.youtube.com/watch?v=bdWRZd19swg",
            "desc": "uitleg over het uitzaaien van tumorcellen via lymfe en bloed",
            "terms": [
              "metastase",
              "tumor",
              "kanker"
            ],
            "duration": "3'09"
          }
        ]
      },
      {
        "id": "2.4",
        "title": "Paragraaf 2.4",
        "items": [
          {
            "title": "GMO’s",
            "url": "https://www.youtube.com/watch?v=vribRyVQ6G8",
            "desc": "toepassingen van genetische modificatie",
            "terms": [
              "plasmide",
              "genetische gemodificeerde organismen (ggo)"
            ],
            "duration": "4'27"
          },
          {
            "title": "Cell Differentiation, Specialisation & Stem Cells",
            "url": "https://www.youtube.com/watch?v=X0GMp8oM_2E",
            "desc": "specialisatie en differentiatie bij stamcellen, weefselkweek bij planten en de verschillen tussen embryonale en volwassen stamcellen",
            "terms": [
              "stamcel",
              "specialisatie",
              "differentiatie"
            ],
            "duration": "7'35"
          }
        ]
      },
      {
        "id": "2.5",
        "title": "Paragraaf 2.5",
        "items": [
          {
            "title": "3D Plant Cell",
            "url": "https://www.youtube.com/watch?v=xGEoK8kRNoQ",
            "desc": "de verschillen tussen een plantencel en een dierlijke cel",
            "terms": [
              "organellen",
              "celwand",
              "vacuole",
              "chloroplasten"
            ],
            "duration": "2'57"
          },
          {
            "title": "Prokaryotic vs Eukaryotic Cells",
            "url": "https://www.youtube.com/watch?v=zZtcMBTQaS4",
            "desc": "de verschillen tussen prokaryoten en eukaryoten",
            "terms": [
              "eukaryoten",
              "prokaryoten",
              "eencellige en meercellige organismen",
              "celdeling"
            ],
            "duration": "4'41"
          }
        ]
      }
    ],
    "3": [
      {
        "id": "3.1",
        "title": "Paragraaf 3.1",
        "items": [
          {
            "title": "Fruit and Vegetable Decomposition",
            "url": "https://www.youtube.com/watch?v=c0En-_BVbGc",
            "desc": "het bederven van groenten en fruit gedurende een lange periode",
            "terms": [
              "voedselbederf"
            ],
            "duration": "1'36"
          },
          {
            "title": "Life Cycle Of Influenza A",
            "url": "https://www.youtube.com/watch?v=oXzwtGFyBik",
            "desc": "de gevolgen voor cellen van een gastheer na besmetting met het influenzavirus",
            "terms": [
              "virus",
              "infectie",
              "gastheercel",
              "erfelijk materiaal"
            ],
            "duration": "2'36"
          }
        ]
      },
      {
        "id": "3.2",
        "title": "Paragraaf 3.2",
        "items": [
          {
            "title": "Food preservation - Seven Wonders of the Microbe World",
            "url": "https://www.youtube.com/watch?v=LPWvzW82kWU",
            "desc": "bederven van voedsel door bacteriën en schimmels en verschillende manieren van voedselconservering.",
            "terms": [
              "bacteriën",
              "schimmels",
              "voedselvergiftiging",
              "conserveren van voedsel"
            ],
            "duration": "3'41"
          },
          {
            "title": "The Scientific Method: Steps, Examples, Tips, and Exercise",
            "url": "https://www.youtube.com/watch?v=yi0hwFDQTSQ",
            "desc": "de stappen van natuurwetenschappelijk onderzoek (goed te gebruiken bij het opzetten van onderzoek voor het PWS)",
            "terms": [
              "natuurwetenschappelijk onderzoek",
              "valide",
              "onderzoeksvraag",
              "hypothese",
              "materiaal en methode",
              "resultaten",
              "conclusie"
            ],
            "duration": "8'38"
          }
        ]
      },
      {
        "id": "3.3",
        "title": "Paragraaf 3.3",
        "items": [
          {
            "title": "The Semipermeable Membrane",
            "url": "https://www.youtube.com/watch?v=yU4otyMhjHU",
            "desc": "de bouw van het celmembraan en de wijze waarop stoffen dit membraan kunnen passeren",
            "terms": [
              "bouw celmembraan",
              "fosfolipiden",
              "diffusie",
              "transportkanaal",
              "actief transport"
            ],
            "duration": "1'48"
          },
          {
            "title": "Diffusion",
            "url": "https://www.youtube.com/watch?v=S_Y__0q0SOU",
            "desc": "diffusie van opgeloste suikermoleculen in een bekerglas water",
            "terms": [
              "diffusie",
              "concentratiegradiënt"
            ],
            "duration": "0'45"
          },
          {
            "title": "Osmosis and Tonicity",
            "url": "https://www.youtube.com/watch?v=Y_w07A7chnk",
            "desc": "de reactie van rode bloedcellen op de osmotische waarde van de omgeving en netto watertransport",
            "terms": [
              "semipermeabel membraan",
              "osmotische waarde",
              "osmose",
              "hypotonische oplossing",
              "hypertonische oplossing",
              "isotonische oplossing"
            ],
            "duration": "2'24"
          },
          {
            "title": "Osmosis",
            "url": "https://www.youtube.com/watch?v=4Eq8rO3fABM",
            "desc": "osmose in dierlijke cellen en plantencellen.",
            "terms": [
              "osmose",
              "diffusie",
              "hypotonische oplossing",
              "hypertonische oplossing",
              "semipermeabel membraan",
              "celwand",
              "turgor",
              "plasmolyse"
            ],
            "duration": "4'09"
          }
        ]
      },
      {
        "id": "3.4",
        "title": "Paragraaf 3.4",
        "items": [
          {
            "title": "Guidelines for Drawing Graphs",
            "url": "https://www.youtube.com/watch?v=hwK4IEsXFk0",
            "desc": "het tekenen van een lijndiagram",
            "terms": [
              "assenstelsel",
              "x-as",
              "y-as",
              "onafhankelijke variabele",
              "afhankelijke variabele"
            ],
            "duration": "11'09"
          },
          {
            "title": "The Strange Powers of the Placebo Effect",
            "url": "https://www.youtube.com/watch?v=yfRVCaA5o18",
            "desc": "de invloed van vorm, kleur en grootte van een placebo op het placebo-effect",
            "terms": [
              "placebo-effect"
            ],
            "duration": "2'57"
          }
        ]
      },
      {
        "id": "3.5",
        "title": "Paragraaf 3.5",
        "items": [
          {
            "title": "GMO’s",
            "url": "https://www.youtube.com/watch?v=vribRyVQ6G8",
            "desc": "genetisch modificeren van organismen en het verschil met gericht fokken / kweken van organismen",
            "terms": [
              "moderne biotechnologie",
              "recombinant DNA",
              "genetisch gemodificeerde organismen (ggo’s)",
              "bacterie",
              "cirkelvormig chromosoom",
              "plasmiden"
            ],
            "duration": "4'27"
          }
        ]
      }
    ],
    "4": [
      {
        "id": "4.1",
        "title": "Paragraaf 4.1",
        "items": [
          {
            "title": "Fertilization",
            "url": "https://www.youtube.com/watch?v=_5OvgQW6FG4",
            "desc": "de afgelegde weg van zaadcellen vanaf de vagina tot en met de bevruchting van een eicel",
            "terms": [
              "zaadcel",
              "eicel",
              "bevruchting",
              "zygote",
              "bevruchtingsmembraan",
              "chromosomen"
            ],
            "duration": "5'42"
          },
          {
            "title": "Male Reproductive System - Upto testis",
            "url": "https://www.youtube.com/watch?v=gBtcYkvIkdM",
            "desc": "het mannelijk voortplantingsorgaan",
            "terms": [
              "testes",
              "zaadleiders",
              "bijballen",
              "scrotum"
            ],
            "duration": "2'54"
          },
          {
            "title": "The female reproductive system",
            "url": "https://www.youtube.com/watch?v=OBnioyIUxNI",
            "desc": "de bouw van het vrouwelijke voortplantingsorgaan",
            "terms": [
              "ovaria",
              "eileiders",
              "baarmoeder",
              "geboortekanaal"
            ],
            "duration": "1'40"
          }
        ]
      },
      {
        "id": "4.2",
        "title": "Paragraaf 4.2",
        "items": [
          {
            "title": "Human Embryo Development",
            "url": "https://www.youtube.com/watch?v=1zpV5rzWXMA",
            "desc": "de ontwikkeling van een zygote tot een embryo tijdens de eerste 56 dagen",
            "terms": [
              "bevruchting",
              "blastula"
            ],
            "duration": "3'34"
          },
          {
            "title": "Meiosis",
            "url": "https://www.youtube.com/watch?v=jvIT4lKrt8o",
            "desc": "de verschillende stadia van de meiose",
            "terms": [
              "meiose"
            ],
            "duration": "3'16"
          }
        ]
      },
      {
        "id": "4.3",
        "title": "Paragraaf 4.3",
        "items": [
          {
            "title": "Pregnancy: The First Trimester",
            "url": "https://www.youtube.com/watch?v=8312a32dcQc",
            "desc": "de ontwikkeling van een zygote tot foetus",
            "terms": [
              "ovulatie",
              "bevruchting",
              "zygote",
              "embryo",
              "innesteling",
              "blastula",
              "foetus",
              "zwangerschap"
            ],
            "duration": "4'25"
          },
          {
            "title": "Labor and Delivery | Childbirth",
            "url": "https://www.youtube.com/watch?v=dYu-0rOnLpA",
            "desc": "de bevalling",
            "terms": [
              "bevalling",
              "nageboorte"
            ],
            "duration": "3'04"
          },
          {
            "title": "The Menstrual Cycle & Puberty",
            "url": "https://www.youtube.com/watch?v=Gf_WLrXAqIA",
            "desc": "hormonen in de puberteit en de menstruatiecyclus",
            "terms": [
              "ovaria",
              "eierstokken",
              "baarmoeder",
              "menstruatiecyclus",
              "oestrogenen",
              "progesteron",
              "LH",
              "FSH",
              "hypofyse",
              "hormonale regulatie"
            ],
            "duration": "6'14"
          }
        ]
      },
      {
        "id": "4.4",
        "title": "Paragraaf 4.4",
        "items": [
          {
            "title": "3D animation of how IVF works",
            "url": "https://www.youtube.com/watch?v=GeigYib39Rs",
            "desc": "een ivf- behandeling",
            "terms": [
              "ivf-behandeling"
            ],
            "duration": "3'17"
          }
        ]
      },
      {
        "id": "4.5",
        "title": "Paragraaf 4.5",
        "items": [
          {
            "title": "Welke vorm van anticonceptie kies je?",
            "url": "https://www.youtube.com/watch?v=PrtP1Vryoos",
            "desc": "verschillende vormen van anticonceptie",
            "terms": [
              "anticonceptie"
            ],
            "duration": "2'11"
          },
          {
            "title": "Soa's - Wat weet jij over geslachtsziektes?",
            "url": "https://www.youtube.com/watch?v=FRwgk-e5j9o",
            "desc": "verschillende geslachtsziekten en de gevolgen",
            "terms": [
              "soa"
            ],
            "duration": "2'39"
          }
        ]
      }
    ],
    "5": [
      {
        "id": "5.1",
        "title": "Paragraaf 5.1",
        "items": [
          {
            "title": "What Are Complete Proteins, Incomplete Proteins, Essential Amino Acids, Non Essential Amino Acids",
            "url": "https://www.youtube.com/watch?v=652GrZpLkPs",
            "desc": "de functies van eiwitten en het verschil tussen essentiële en niet-essentiële aminozuren",
            "terms": [
              "essentiële en niet-essentiële aminozuren",
              "eiwitten",
              "voedingsmiddelen"
            ],
            "duration": "1'47"
          },
          {
            "title": "6 complete protein sources for vegans",
            "url": "https://www.youtube.com/watch?v=p722_Sd8Csg",
            "desc": "tips voor vegetariërs om toch voldoende essentiële aminozuren binnen te krijgen",
            "terms": [
              "essentiële en niet-essentiële aminozuren",
              "eiwitten",
              "vegetarische voeding"
            ],
            "duration": "4'02"
          }
        ]
      },
      {
        "id": "5.2",
        "title": "Paragraaf 5.2",
        "items": [
          {
            "title": "Energy Systems - ATP Energy In The Body - Adenosine Triphosphate - Glycolysis",
            "url": "https://www.youtube.com/watch?v=dWe8vtztW-4&t=26s",
            "desc": "Hoe ATP vrijkomt bij de aerobe en anaerobe dissimilatie. Illustratie bij Binas 68A, Binas 68E en Binas 90A.",
            "terms": [
              "ATP",
              "anaerobe dissimilatie",
              "aerobe dissimilatie",
              "CP",
              "melkzuur"
            ],
            "duration": "4'47"
          }
        ]
      },
      {
        "id": "5.3",
        "title": "Paragraaf 5.3",
        "items": [
          {
            "title": "Respiration",
            "url": "https://www.youtube.com/watch?v=U4WwWuVZSe4",
            "desc": "aerobe en anaerobe dissimilatie (melkzuurgisting en alcoholische gisting)",
            "terms": [
              "dissimilatie",
              "enzymen",
              "aerobe dissimilatie",
              "anaerobe dissimilatie",
              "mitochondriën",
              "melkzuur"
            ],
            "duration": "4'39"
          },
          {
            "title": "Biologische reacties",
            "url": "https://www.youtube.com/watch?v=my8pdm9Hiqk&t=583s",
            "desc": "het ontstaan van melkzuur bij anaeroob sporten(vanaf 5’09 tot 9’39)",
            "terms": [
              "aerobe dissimilatie",
              "anaerobe dissimilatie"
            ],
            "duration": "4'30"
          }
        ]
      },
      {
        "id": "5.4",
        "title": "Paragraaf 5.4",
        "items": [
          {
            "title": "Huidmondjes - Het openen en sluiten van huidmondjes",
            "url": "https://schooltv.nl/video/huidmondjes-het-openen-en-sluiten-van-huidmondjes/",
            "desc": "het openen en sluiten van huidmondjes onder invloed van turgorbewegingen",
            "terms": [
              "huidmondjes"
            ],
            "duration": "1'03"
          },
          {
            "title": "Fotosynthese - Hoe een plant glucose en zuurstof maakt",
            "url": "https://schooltv.nl/video/fotosynthese-hoe-een-plant-glucose-en-zuurstof-maakt/",
            "desc": "de opname van stoffen door de plant voor fotosynthese",
            "terms": [
              "CO2- en H2O- en lichtopname",
              "fotosyntheseproducten"
            ],
            "duration": "1'01"
          },
          {
            "title": "Measure Photosynthesis with Floating Leaves",
            "url": "https://www.youtube.com/watch?v=gCHW7f88bAc",
            "desc": "Meten aan de mate van fotosynthese",
            "terms": [
              "fotosynthese",
              "O2",
              "lichtintensiteit",
              "CO2"
            ],
            "duration": "4'10"
          }
        ]
      },
      {
        "id": "5.5",
        "title": "Paragraaf 5.5",
        "items": [
          {
            "title": "Plant Transport Xylem and Phloem, Transpiration",
            "url": "https://www.youtube.com/watch?v=6CcgzRf8E9I",
            "desc": "het transport in planten door houtvaten (xyleem) en bastvaten (floëem)",
            "terms": [
              "bouw blad",
              "houtvaten",
              "bastvaten",
              "verdamping",
              "adhesie",
              "cohesie"
            ],
            "duration": "5'36"
          },
          {
            "title": "Water Transport In Plants",
            "url": "https://www.youtube.com/watch?v=5CMrK8rlzZw",
            "desc": "het transport van water in planten door houtvaten (xyleem)",
            "terms": [
              "bouw blad",
              "houtvaten",
              "bastvaten",
              "huidmondje",
              "verdamping"
            ],
            "duration": "3'18"
          }
        ]
      }
    ],
    "6": [
      {
        "id": "6.1",
        "title": "Paragraaf 6.1",
        "items": [
          {
            "title": "Hoe gezond zijn vitaminepillen?",
            "url": "https://schooltv.nl/video/broodje-gezond-in-de-klas-hoe-gezond-zijn-vitaminepillen/",
            "desc": "de zin en onzin van het slikken van vitaminepillen",
            "terms": [
              "voedingstoffen",
              "vitaminen",
              "ADH"
            ],
            "duration": "7'49"
          }
        ]
      },
      {
        "id": "6.2",
        "title": "Paragraaf 6.2",
        "items": [
          {
            "title": "My X Ray swallows",
            "url": "https://www.youtube.com/watch?v=umnnA50IDIY",
            "desc": "röntgenopname van het inslikken van voedsel",
            "terms": [
              "peristaltiek",
              "slokdarm"
            ],
            "duration": "1'49"
          },
          {
            "title": "De normale slikbeweging",
            "url": "https://www.youtube.com/watch?v=YU7JB3zog5s",
            "desc": "een normale slikbeweging",
            "terms": [
              "strottenklepje",
              "huig",
              "slokdarm"
            ],
            "duration": "0'15"
          }
        ]
      },
      {
        "id": "6.3",
        "title": "Paragraaf 6.3",
        "items": [
          {
            "title": "Physiology Basics: the Digestive System, Animation",
            "url": "https://www.youtube.com/watch?v=zSXgoYdHotw",
            "desc": "bouw en werking van het verteringsstelsel",
            "terms": [
              "peristaltiek",
              "vertering",
              "enkelvoudige suikers",
              "aminozuren",
              "glycerol en vetzuren",
              "slokdarm",
              "maag",
              "twaalfvingerige darm",
              "dunne darm",
              "dikke darm",
              "endeldarm",
              "verteringsenzymen",
              "ontlasting (feces)",
              "darmflora"
            ],
            "duration": "4'21"
          },
          {
            "title": "Enzymen - Eiwitten voor de goede orde",
            "url": "https://schooltv.nl/video/enzymen-eiwitten-voor-de-goede-orde/",
            "desc": "de werking van enzymen",
            "terms": [
              "enzymen",
              "amylase"
            ],
            "duration": "2'40"
          }
        ]
      },
      {
        "id": "6.4",
        "title": "Paragraaf 6.4",
        "items": [
          {
            "title": "Dikke darm - Vaste en vloeibare delen worden gescheiden",
            "url": "https://schooltv.nl/video/dikke-darm-vaste-en-vloeibare-delen-worden-gescheiden/",
            "desc": "de werking van de dikke darm",
            "terms": [
              "stoelgang",
              "peristaltiek",
              "diarree"
            ],
            "duration": "0'53"
          },
          {
            "title": "Zijn probiotica goed voor je darmflora?",
            "url": "https://schooltv.nl/video/broodje-gezond-in-de-klas-zijn-probiotica-goed-voor-je-darmflora/",
            "desc": "probiotica en gezondheid",
            "terms": [
              "darmflora",
              "probiotica",
              "vezels"
            ],
            "duration": "9'07"
          },
          {
            "title": "Wat is het nut van vezels?",
            "url": "https://schooltv.nl/video/object-unknown-8/",
            "desc": "het nut van vezels in je voeding",
            "terms": [
              "vezels",
              "darmbacteriën",
              "dikke darm"
            ],
            "duration": "8'33"
          },
          {
            "title": "How your digestive system works - Emma Bryce",
            "url": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
            "desc": "bouw en werking van het verteringsstelsel",
            "terms": [
              "verteringsstelsel",
              "verteringssappen",
              "slokdarm",
              "maag",
              "twaalfvingerige darm",
              "dunne darm",
              "dikke darm",
              "endeldarm",
              "ontlasting",
              "gal",
              "vetzuren",
              "glycerol",
              "aminozuren",
              "enkelvoudige suiker",
              "darmvlokken (darmvilli)"
            ],
            "duration": "4'56"
          }
        ]
      },
      {
        "id": "6.5",
        "title": "Paragraaf 6.5",
        "items": [
          {
            "title": "Focus op biologie - De lever",
            "url": "https://schooltv.nl/video/focus-op-biologie-de-lever/",
            "desc": "verschillende functies van de lever; bloedvaten die een rol spelen bij het functioneren van de lever; een operatie aan de galblaas",
            "terms": [
              "lever",
              "warmteproductie",
              "leverslagader",
              "poortader",
              "leverader",
              "gal",
              "galblaas",
              "twaalfvingerige darm",
              "vetvertering",
              "ontgiften",
              "hepatitis"
            ],
            "duration": "10'33"
          },
          {
            "title": "Hepatitis C",
            "url": "https://www.youtube.com/watch?v=HRemUSSeCKA",
            "desc": "geelzucht, een besmettelijke leverontsteking",
            "terms": [
              "besmetting",
              "lever",
              "hepatitis"
            ],
            "duration": "3'24"
          }
        ]
      }
    ],
    "7": [
      {
        "id": "7.1",
        "title": "Paragraaf 7.1",
        "items": [
          {
            "title": "Abiotic and Biotic Factors",
            "url": "https://www.youtube.com/watch?v=E1pp_7-yTN4",
            "desc": "uitleg van de begrippen biotisch en abiotisch",
            "terms": [
              "biotische en abiotische factoren"
            ],
            "duration": "3'45"
          },
          {
            "title": "GCSE Biology - Classification #80",
            "url": "https://www.youtube.com/watch?v=HLnaIJm5wM4",
            "desc": "uitleg van het principe van ordening, naamgeving van soorten en van stambomen",
            "terms": [
              "ordening",
              "soort",
              "geslacht (genus)",
              "familie",
              "orde",
              "wetenschappelijke naamgeving",
              "eukaryoten",
              "prokaryoten",
              "stambomen"
            ],
            "duration": "5'45"
          }
        ]
      },
      {
        "id": "7.2",
        "title": "Paragraaf 7.2",
        "items": [
          {
            "title": "Invasive Species 101 | National Geographic",
            "url": "https://www.youtube.com/watch?v=gYNAtw1c7hI",
            "desc": "voorbeelden van exoten (invasive soorten) en de gevolgen voor ecosystemen",
            "terms": [
              "exoten"
            ],
            "duration": "3'31"
          },
          {
            "title": "Bio-Bits 48: Biologische bestrijding met natuurlijke vijanden",
            "url": "https://www.youtube.com/watch?v=um1ch7VAfmg",
            "desc": "voorbeelden van natuurwetenschappelijk onderzoek naar organismen voor biologische bestrijding",
            "terms": [
              "natuurwetenschappelijk onderzoek",
              "biologische bestrijding",
              "resistentie"
            ],
            "duration": "9'54"
          },
          {
            "title": "Bestrijding van spint - Phytoseiulus persimilis",
            "url": "https://www.youtube.com/watch?v=IB56PyCk45w",
            "desc": "een praktijkvoorbeeld van de bestrijding van schadelijke spintmijten met roofmijten",
            "terms": [
              "biologische bestrijding"
            ],
            "duration": "1'22"
          }
        ]
      },
      {
        "id": "7.3",
        "title": "Paragraaf 7.3",
        "items": [
          {
            "title": "What is Symbiosis?",
            "url": "https://www.youtube.com/watch?v=eChtyqSqUIs",
            "desc": "voorbeelden van symbiose en uitleg dat een langdurige relatie tussen twee soorten organismen soms van ongunstig naar gunstig (voor gastheer) kan veranderen",
            "terms": [
              "symbiose",
              "mutualisme",
              "parasitisme",
              "commensalisme",
              "predatoren",
              "co-evolutie"
            ],
            "duration": "9'09"
          }
        ]
      },
      {
        "id": "7.4",
        "title": "Paragraaf 7.4",
        "items": [
          {
            "title": "GCSE Biology - Interdependence - Community and Competition #84",
            "url": "https://www.youtube.com/watch?v=XVD5izWXmKo",
            "desc": "uitleg van de relaties tussen organismen in een ecosysteem en van een aantal ecologische begrippen",
            "terms": [
              "habitat",
              "populatie",
              "levensgemeenschap (community)",
              "ecosysteem",
              "abiotische en biotische factoren",
              "competitie",
              "soorten (species)",
              "voedselweb"
            ],
            "duration": "5'27"
          },
          {
            "title": "Predation",
            "url": "https://www.youtube.com/watch?v=zx4CJn09p3c",
            "desc": "prooi-predator relaties",
            "terms": [
              "predatie",
              "prooi-predator relatie",
              "dynamisch evenwicht",
              "co-evolutie"
            ],
            "duration": "3'11"
          }
        ]
      },
      {
        "id": "7.5",
        "title": "Paragraaf 7.5",
        "items": [
          {
            "title": "GCSE Biology - Trophic Levels - Producers, Consumers, Herbivores & Carnivores #86",
            "url": "https://www.youtube.com/watch?v=D1In8W2qev4",
            "desc": "uitleg van de energiestroom en opbouw van een voedselketen",
            "terms": [
              "voedselketen",
              "trofische niveaus",
              "producenten",
              "consumenten",
              "omnivoren",
              "reducenten (decomposers)"
            ],
            "duration": "4'05"
          },
          {
            "title": "GCSE Biology - Food Chains & Predator Prey Cycles #85",
            "url": "https://www.youtube.com/watch?v=NFTSm3D2xrM",
            "desc": "uitleg van: een voedselketen en de richting van de pijlen; energieverlies in een voedselketen; dynamisch evenwicht tussen prooien en predatoren",
            "terms": [
              "voedselketen",
              "fotosynthese",
              "energiestroom",
              "dynamische evenwicht"
            ],
            "duration": "5'10"
          }
        ]
      }
    ],
    "8": [
      {
        "id": "8.1",
        "title": "Paragraaf 8.1",
        "items": [
          {
            "title": "Food Chain | Ecology and Environment",
            "url": "https://www.youtube.com/watch?v=bvqN9H3QtTQ",
            "desc": "het verschil tussen een voedselketen en een voedselweb",
            "terms": [
              "voedselketen",
              "voedselweb",
              "trofische niveaus",
              "producenten",
              "consumenten",
              "herbivoren",
              "carnivoren",
              "omnivoren",
              "reducenten (decomposers)"
            ],
            "duration": "2'37"
          },
          {
            "title": "Energy Flow in Ecosystems",
            "url": "https://www.youtube.com/watch?v=LnPRHcp5_vo",
            "desc": "energie van de zon komt door producenten in een ecosysteem en gaat via consumenten verder de voedselketen in",
            "terms": [
              "energie in ecosysteem",
              "fotosynthese",
              "producenten",
              "consumenten",
              "herbivoren",
              "carnivoren",
              "omnivoren",
              "reducenten (decomposers)"
            ],
            "duration": "2'55"
          }
        ]
      },
      {
        "id": "8.2",
        "title": "Paragraaf 8.2",
        "items": [
          {
            "title": "De koolstofkringloop",
            "url": "https://schooltv.nl/video/de-koolstofkringloop-koolstof-is-overal/",
            "desc": "de kringloop van het element koolstof",
            "terms": [
              "koolstof",
              "koolstofdioxide",
              "waterstofcarbonaat",
              "kalk",
              "fossiele brandstoffen"
            ],
            "duration": "0'53"
          },
          {
            "title": "Broeikaswereld - Tijdschalen en koolstofkringloop",
            "url": "https://schooltv.nl/video/broeikaswereld-afl2-tijdschalen-en-koolstofkringloop/",
            "desc": "de tijdschaal van de aarde en het ontstaan van leven op aarde; verschil tussen langzame en snelle koolstofkringloop",
            "terms": [
              "evolutie van leven op aarde",
              "methaan",
              "sedimenten",
              "koolstofdioxide",
              "broeikaseffect",
              "kringloop elementen",
              "fotosynthese",
              "snelle en langzame koolstofkringloop",
              "klimaatverandering"
            ],
            "duration": "14'38"
          }
        ]
      },
      {
        "id": "8.3",
        "title": "Paragraaf 8.3",
        "items": [
          {
            "title": "Stikstofkringloop - Het vastleggen van stikstof uit de lucht",
            "url": "https://schooltv.nl/video/stikstofkringloop-het-vastleggen-van-stikstof-uit-de-lucht/",
            "desc": "het vastleggen van gasvormige stikstof in organismen: de stikstofkringloop",
            "terms": [
              "abiotische factoren",
              "stikstofgas",
              "stikstoffixatie",
              "ammonium",
              "nitraat",
              "nitrificatie",
              "stikstof bevattende organische verbindingen",
              "stikstofassimilatie",
              "voortgezette stikstoffixatie",
              "denitrificatie"
            ],
            "duration": "1'46"
          },
          {
            "title": "De gevolgen van mestdampen voor de natuur",
            "url": "https://schooltv.nl/video/eenvandaag-in-de-klas-gevolgen-van-mestdampen-op-de-natuur/",
            "desc": "de invloed van stikstofuitstoot van de bio-industrie op de flora en fauna",
            "terms": [
              "zure regen",
              "mest",
              "ammoniak",
              "flora",
              "fauna",
              "stikstof",
              "bio-industrie",
              "milieumaatregelen"
            ],
            "duration": "5'26"
          },
          {
            "title": "Energie en kringlopen",
            "url": "https://www.youtube.com/watch?v=2qB1E92irPE",
            "desc": "bepalen van energiestromen in een sprinkhaan door metingen aan dissimilatie, warmteverlies, biomassa en ontlasting; de koolstofkringloop en de stikstofkringloop",
            "terms": [
              "fotosynthese",
              "producenten",
              "consumenten",
              "dissimilatie",
              "warmte",
              "energiestroom",
              "koolstofkringloop",
              "stikstofkringloop"
            ],
            "duration": "14'15"
          }
        ]
      },
      {
        "id": "8.4",
        "title": "Paragraaf 8.4",
        "items": [
          {
            "title": "Konijnen",
            "url": "https://schooltv.nl/video/vroege-vogels-in-de-klas-konijnen/",
            "desc": "onderzoek aan het verloop van de grootte van een populatie konijnen",
            "terms": [
              "populatiegrootte",
              "ecosysteem",
              "ziekten",
              "sterfte"
            ],
            "duration": "3'39"
          },
          {
            "title": "Ontstaan van duinen - Zee, wind en planten",
            "url": "https://schooltv.nl/video/ontstaan-van-duinen-zee-wind-en-planten/",
            "desc": "het ontstaan van duinen langs de kust",
            "terms": [
              "duinvorming"
            ],
            "duration": "2'11"
          },
          {
            "title": "Ecologie - Kwetsbare natuur, successie en dynamiek in ecosystemen",
            "url": "https://schooltv.nl/video/bio-bits-bovenbouw-ecologie-kwetsbare-natuur-successie-en-dynamiek-in-ecosystemen/",
            "desc": "onderzoek aan kwetsbare climax-ecosystemen",
            "terms": [
              "biodiversiteit",
              "korstmossen",
              "pionier-ecosysteem",
              "primaire successie",
              "climax-ecosysteem",
              "ontbossing",
              "klimaatverandering",
              "soortenrijkdom",
              "secundaire successie"
            ],
            "duration": "14'59"
          }
        ]
      },
      {
        "id": "8.5",
        "title": "Paragraaf 8.5",
        "items": [
          {
            "title": "Hoe duurzaam zijn vleesvervangers? - CO2-uitstoot per kilogram eiwit",
            "url": "https://schooltv.nl/video/hoe-duurzaam-zijn-vleesvervangers-co2-uitstoot-per-kilogram-eiwit/",
            "desc": "een vergelijking van de CO2-uitstoot / kg eiwit van vlees in vergelijking met vleesvervangers",
            "terms": [
              "duurzaamheid",
              "vleesvervangers"
            ],
            "duration": "3'11"
          },
          {
            "title": "Hoe groen is biomassa? - Energie uit verbranding van hout en GFT-afval",
            "url": "https://schooltv.nl/video/hoe-groen-is-biomassa-energie-uit-verbranding-van-hout-en-gft-afval/",
            "desc": "vrijmaken van energie uit biomassa en duurzaamheid",
            "terms": [
              "biomassa",
              "GFT-afval",
              "duurzaam",
              "fijnstof",
              "CO2-opname"
            ],
            "duration": "2'03"
          },
          {
            "title": "Biologische gewasbescherming in de praktijk: 2 voorbeelden",
            "url": "https://www.youtube.com/watch?v=BCa5BkkZgco&t=3s",
            "desc": "biologische gewasbescherming",
            "terms": [
              "plagen",
              "natuur",
              "sluipwesp",
              "predator"
            ],
            "duration": "3'52"
          },
          {
            "title": "Bioaccumulation",
            "url": "https://www.youtube.com/watch?v=N80av1SCugY",
            "desc": "ophoping (accumulatie) van gifstoffen in een voedselketen",
            "terms": [
              "gifstoffen",
              "accumulatie"
            ],
            "duration": "1'15"
          }
        ]
      }
    ],
    "9": [
      {
        "id": "9.1",
        "title": "Paragraaf 9.1",
        "items": [
          {
            "title": "the Karyogram",
            "url": "https://www.youtube.com/watch?v=zsafZ17pKC4",
            "desc": "uitleg over het maken van een karyogram tijdens de metafase van de mitose",
            "terms": [
              "chromosomen",
              "histonen",
              "chromatine",
              "chromatide",
              "karyogram",
              "paren (homologe) chromosomen",
              "geslachtschromosomen"
            ],
            "duration": "2'30"
          },
          {
            "title": "Gene Expression",
            "url": "https://www.youtube.com/watch?v=OEWOZS_JTgk",
            "desc": "binding van eiwitten aan receptoren op het celmembraan activeert de genexpressie",
            "terms": [
              "receptoren",
              "genexpressie",
              "transcriptie",
              "translatie",
              "ribosomen",
              "polypeptideketen"
            ],
            "duration": "2'21"
          },
          {
            "title": "Down syndrome (trisomy 21)",
            "url": "https://www.youtube.com/watch?v=ze_6VWwLtOE",
            "desc": "het ontstaan van een kind met het downsyndroom",
            "terms": [
              "DNA",
              "paren (homologe) chromosomen",
              "meiose-1",
              "meiose-2",
              "non-disjunctie",
              "downsyndroom",
              "mozaïek"
            ],
            "duration": "10'49"
          },
          {
            "title": "Structural and regulatory genes",
            "url": "https://www.youtube.com/watch?v=J7IhrBQZQ6k",
            "desc": "het ontstaan van verschillen tussen organismen van één soort en hoe genen het tot expressie komen van bepaalde fenotypische eigenschappen bepalen",
            "terms": [
              "regulatorgenen",
              "structuurgenen",
              "polymorfisme"
            ],
            "duration": "5'14"
          }
        ]
      },
      {
        "id": "9.2",
        "title": "Paragraaf 9.2",
        "items": [
          {
            "title": "What identical twins separated at birth teach us about genetics",
            "url": "https://www.youtube.com/watch?v=JMlJcOSRX-8",
            "desc": "de mate van invloed van het genotype en de omgeving op het fenotype",
            "terms": [
              "tweelingonderzoek",
              "nature",
              "nurture",
              "eeneiige en twee-eiige tweelingen",
              "genexpressie"
            ],
            "duration": "5'40"
          },
          {
            "title": "Basic Primer in Epigenetics",
            "url": "https://www.youtube.com/watch?v=WgERHur3FMQ",
            "desc": "eigenschappen van een weefsel ontstaan door het aan- of uitschakelen van genen; het ontstaan van kanker",
            "terms": [
              "epigenetische code",
              "aan- en uitschakelen van genen",
              "ontstaan van kanker",
              "tumorsuppressor genen",
              "oncogenen",
              "histonen",
              "transcriptie",
              "RNA"
            ],
            "duration": "6'06"
          }
        ]
      },
      {
        "id": "9.3",
        "title": "Paragraaf 9.3",
        "items": [
          {
            "title": "X-linked inheritance in basic terms",
            "url": "https://www.youtube.com/watch?v=YXVyIDaUOD8",
            "desc": "X-chromosomale overerving",
            "terms": [
              "X-chromosomale overerving",
              "drager"
            ],
            "duration": "1'58"
          },
          {
            "title": "X-Linked Pedigrees",
            "url": "https://www.youtube.com/watch?v=3zXMAzcsF2M&t=229s",
            "desc": "het oplossen van opgaven met betrekking tot X-chromosomale overerving",
            "terms": [
              "X-chromosomale overerving",
              "stamboom",
              "drager"
            ],
            "duration": "8'43"
          }
        ]
      },
      {
        "id": "9.4",
        "title": "Paragraaf 9.4",
        "items": [
          {
            "title": "Codominance and Incomplete Dominance: Non-Mendelian Genetics",
            "url": "https://www.youtube.com/watch?v=FXc5F9AMAiQ",
            "desc": "het verschil tussen co-dominante en intermediaire overerving",
            "terms": [
              "co-dominante overerving",
              "intermediaire overerving"
            ],
            "duration": "4'08"
          },
          {
            "title": "Inheritance of blood type",
            "url": "https://www.youtube.com/watch?v=yDTYjS1WB-k",
            "desc": "overerving van de allelen van het AB0-systeem",
            "terms": [
              "allelen van AB0-systeem",
              "overerving van bloedgroepen"
            ],
            "duration": "2'55"
          },
          {
            "title": "Chromosomal Inheritance",
            "url": "https://www.youtube.com/watch?v=KaxSDryqB6M",
            "desc": "het verschil tussen onafhankelijke en gekoppelde overerving",
            "terms": [
              "onafhankelijke overerving",
              "gekoppelde overerving",
              "gameten",
              "wetten van Mendel"
            ],
            "duration": "10'55"
          }
        ]
      },
      {
        "id": "9.5",
        "title": "Paragraaf 9.5",
        "items": [
          {
            "title": "Meet the Super Cow",
            "url": "https://www.youtube.com/watch?v=Nmkj5gq1cQU",
            "desc": "het selectief fokken van extreem gespierde runderen",
            "terms": [
              "selectief fokken",
              "kunstmatige inseminatie"
            ],
            "duration": "4'43"
          },
          {
            "title": "Embryo selection for IVF",
            "url": "https://www.youtube.com/watch?v=F6vITLLb9sI",
            "desc": "embryoselectie met als doel een gezonde baby te krijgen",
            "terms": [
              "embryoselectie",
              "ivf"
            ],
            "duration": "2'11"
          },
          {
            "title": "Gene Therapy Basics",
            "url": "https://www.youtube.com/watch?v=BxEoX6TkitY",
            "desc": "reparatie van een defect gen door middel van gentherapie",
            "terms": [
              "DNA",
              "eiwitten",
              "mutaties",
              "gentherapie",
              "virale vector"
            ],
            "duration": "3'30"
          },
          {
            "title": "Genetic modification",
            "url": "https://www.youtube.com/watch?v=HZmZ161njr8",
            "desc": "het veranderen en toevoegen van eigenschappen van organismen door het overbrengen van genen van het ene organismen in het andere organisme",
            "terms": [
              "genetisch gemodificeerde organismen (GMO’s)",
              "wetten van Mendel"
            ],
            "duration": "2'14"
          }
        ]
      }
    ],
    "10": [
      {
        "id": "10.1",
        "title": "Paragraaf 10.1",
        "items": [
          {
            "title": "Fossils",
            "url": "https://www.youtube.com/watch?v=bRuSmxJo_iA",
            "desc": "het ontstaan van fossielen",
            "terms": [
              "fossielen",
              "fossilisatie",
              "mineralisatie"
            ],
            "duration": "4'07"
          },
          {
            "title": "Carbon 14 dating",
            "url": "https://www.youtube.com/watch?v=MlisN_9BkE8",
            "desc": "het bepalen van de absolute leeftijd van fossielen met behulp van de 14C-methode",
            "terms": [
              "12C",
              "14C",
              "leeftijd-bepaling",
              "halfwaardetijd"
            ],
            "duration": "1'48"
          }
        ]
      },
      {
        "id": "10.2",
        "title": "Paragraaf 10.2",
        "items": [
          {
            "title": "Variation and Evolution",
            "url": "https://www.youtube.com/watch?v=VjlE5Qzl1S0",
            "desc": "mutaties in genen veroorzaken variatie in het fenotype in een populatie; individuen met de beste fenotypen hebben voordeel bij natuurlijke selectie en geven gunstige genen door",
            "terms": [
              "genen",
              "eiwitten",
              "variatie",
              "fenotype",
              "genotype",
              "milieu",
              "genoom",
              "gunstige mutaties",
              "survival of the fittest",
              "natuurlijke selectie",
              "evolutie",
              "soortvorming"
            ],
            "duration": "5'27"
          },
          {
            "title": "Selective Breeding",
            "url": "https://www.youtube.com/watch?v=3B4LEssKSLs",
            "desc": "het selecteren van de beste planten of dieren voor het krijgen van ‘betere’ nakomelingen en de nadelen hiervan",
            "terms": [
              "klassiek veredelen (selective breeding)",
              "genenpool",
              "inteelt",
              "variatie"
            ],
            "duration": "3'44"
          },
          {
            "title": "Genetic Drift | Founder Effect and Bottleneck Effect",
            "url": "https://www.youtube.com/watch?v=-UfrN11V9SM",
            "desc": "uitleg genetic drift: founder effect en bottleneck effect",
            "terms": [
              "genetic drift",
              "founder effect",
              "bottleneck effect"
            ],
            "duration": "2'16"
          }
        ]
      },
      {
        "id": "10.3",
        "title": "Paragraaf 10.3",
        "items": [
          {
            "title": "Genes and biodiversity",
            "url": "https://www.youtube.com/watch?v=XOxsjdB4-ZQ",
            "desc": "de invloed van de grootte van de genenpool op de kans op inteelt en daardoor de afname van de overlevingskans van een soort",
            "terms": [
              "genen",
              "genenpool",
              "biodiversiteit",
              "natuurlijke selectie",
              "grootte genenpool",
              "inteelt",
              "habitat",
              "uitsterven",
              "genetische diversiteit"
            ],
            "duration": "6'40"
          },
          {
            "title": "Reproductive Isolation and Speciation in Lizards",
            "url": "https://www.youtube.com/watch?v=EmtIofdeUbc",
            "desc": "reproductieve isolatie kan leiden tot het ontstaan van een nieuwe soort",
            "terms": [
              "reproductieve isolatie",
              "begrip soort",
              "habitat",
              "niche",
              "soortvorming"
            ],
            "duration": "2'38"
          }
        ]
      },
      {
        "id": "10.4",
        "title": "Paragraaf 10.4",
        "items": [
          {
            "title": "Endosymbiosis",
            "url": "https://www.youtube.com/watch?v=8oSqXAwLsZc",
            "desc": "de endosymbiose-theorie",
            "terms": [
              "prokaryoten",
              "membranen",
              "eukaryoten",
              "kernmembraan",
              "aerobe prokaryoot",
              "mitochondriën",
              "chloroplasten"
            ],
            "duration": "3'30"
          },
          {
            "title": "Homologous Structures vs Analogous Structures",
            "url": "https://www.youtube.com/watch?v=2N3OPRodRvk",
            "desc": "het verschil tussen homologe en analoge structuren",
            "terms": [
              "homologe structuren",
              "analoge structuren"
            ],
            "duration": "1'53"
          },
          {
            "title": "Phylogenetic Tree",
            "url": "https://www.youtube.com/watch?v=M7rqXEogkwU",
            "desc": "het aflezen van een stamboom",
            "terms": [
              "stamboom",
              "gemeenschappelijke voorouder",
              "verwantschap"
            ],
            "duration": "3'33"
          }
        ]
      }
    ],
    "11": [
      {
        "id": "11.1",
        "title": "Paragraaf 11.1",
        "items": [
          {
            "title": "How Does Heart Bypass Surgery Work?",
            "url": "https://www.youtube.com/watch?v=gyBPtLrKfk4",
            "desc": "bypassoperatie",
            "terms": [
              "bypassoperatie"
            ],
            "duration": "1'00"
          },
          {
            "title": "Cardiac Cycle",
            "url": "https://www.youtube.com/watch?v=SwxA3L55yqs",
            "desc": "hartcyclus, systole en diastole",
            "terms": [
              "hartkleppen",
              "samentrekken kamer",
              "samentrekken boezem",
              "slagaderkleppen",
              "systole",
              "diastole"
            ],
            "duration": "1'21"
          },
          {
            "title": "Electrical Conduction System of the Heart",
            "url": "https://www.youtube.com/watch?v=FIeCPC7Hpf8",
            "desc": "het prikkelgeleidingssysteem van het hart",
            "terms": [
              "ecg",
              "elektrische activiteit",
              "sinusknoop",
              "AV-knoop",
              "boezems",
              "kamers",
              "longslagader",
              "aorta"
            ],
            "duration": "3'01"
          },
          {
            "title": "Heart Bypass Surgery Explained Part1",
            "url": "https://www.youtube.com/watch?v=94w6VN2JYv8",
            "desc": "een hartoperatie, deel 1",
            "terms": [
              "kransslagaders",
              "bypassoperatie",
              "hartlongmachine"
            ],
            "duration": "6'47"
          },
          {
            "title": "Heart Bypass Surgery Explained Part2",
            "url": "https://www.youtube.com/watch?v=qpdvYsg2UhI",
            "desc": "een hartoperatie, deel 2",
            "terms": [
              "kransslagaders",
              "bypassoperatie",
              "hartlongmachine"
            ],
            "duration": "7'58"
          }
        ]
      },
      {
        "id": "11.2",
        "title": "Paragraaf 11.2",
        "items": [
          {
            "title": "Pulmonary and Systemic Circulations",
            "url": "https://www.youtube.com/watch?v=NDk8fmIl9V8&t=11s",
            "desc": "de grote en kleine bloedsomloop",
            "terms": [
              "kamers",
              "hartkleppen",
              "boezems",
              "longen",
              "weefsels",
              "aorta",
              "longslagaders",
              "holle aders",
              "longaders"
            ],
            "duration": "1'53"
          },
          {
            "title": "Blood Vessels",
            "url": "https://www.youtube.com/watch?v=AlSQEs694qY",
            "desc": "de bouw en de functies van de verschillende bloedvaten",
            "terms": [
              "bloedvaten",
              "slagaders",
              "haarvaten",
              "aders",
              "bloeddruk",
              "uitwisseling van stoffen"
            ],
            "duration": "4'01"
          }
        ]
      },
      {
        "id": "11.3",
        "title": "Paragraaf 11.3",
        "items": [
          {
            "title": "How Blood Pressure Works",
            "url": "https://www.youtube.com/watch?v=rc4vipEx__U",
            "desc": "het meten van de bloeddruk",
            "terms": [
              "bloeddruk",
              "systole",
              "diastole"
            ],
            "duration": "1'43"
          },
          {
            "title": "Blood Flow and Pressure",
            "url": "https://www.youtube.com/watch?v=pD7YSNE0cLU",
            "desc": "het verloop van de bloeddruk en de stroomsnelheid van het bloed door het bloedvaatstelsel",
            "terms": [
              "aorta",
              "haarvaten",
              "holle ader (=vena cava)",
              "boven- en onderdruk",
              "gezamenlijke diameter van de haarvaten",
              "bloedstroomsnelheid",
              "bloeddrukmeting"
            ],
            "duration": "9'57"
          }
        ]
      },
      {
        "id": "11.4",
        "title": "Paragraaf 11.4",
        "items": [
          {
            "title": "Red Blood Cells - Erythropoietin (epo)",
            "url": "https://www.youtube.com/watch?v=SxgtW-dxp68",
            "desc": "de invloed van epo op zuurstoftransport van het bloed",
            "terms": [
              "terugkoppeling",
              "stimulus",
              "doelweefsel",
              "respons",
              "hormonen",
              "epo",
              "nieren",
              "rode bloedcellen"
            ],
            "duration": "1'23"
          },
          {
            "title": "Platelet Activation and Factors for Clot Formation",
            "url": "https://www.youtube.com/watch?v=R8JMfbYW2p4",
            "desc": "het herstel van een bloedvat na verwonding",
            "terms": [
              "bloedstolling",
              "bloedplaatjesprop",
              "cascade",
              "stollingsfactoren",
              "trombine",
              "fibrine"
            ],
            "duration": "2'07"
          },
          {
            "title": "What Is Blood Made of? / What Does Blood",
            "url": "https://www.youtube.com/watch?v=81w0BXg7QJA",
            "desc": "de samenstelling van het bloed en de functie van de verschillende onderdelen van het bloed",
            "terms": [
              "rode bloedcellen",
              "hemoglobine",
              "witte bloedcellen",
              "bloedplaatjes",
              "bloedplasma",
              "bloedtransfusie"
            ],
            "duration": "4'34"
          },
          {
            "title": "How Red Blood Cell Carry Oxygen and Carbon Dioxide, Animation",
            "url": "https://www.youtube.com/watch?v=xEHGIRpGyh4",
            "desc": "O2- en CO2-transport door rode bloedcellen",
            "terms": [
              "rode bloedcellen",
              "hemoglobine",
              "ijzer",
              "waterstofcarbonaat"
            ],
            "duration": "3'47"
          }
        ]
      },
      {
        "id": "11.5",
        "title": "Paragraaf 11.5",
        "items": [
          {
            "title": "the Lymphatic System",
            "url": "https://www.youtube.com/watch?v=QD9AdNXSQe4",
            "desc": "de bouw en functie van het lymfesysteem",
            "terms": [
              "lymfesysteem",
              "lymfevaten",
              "lymfeknopen",
              "haarvaten",
              "weefselvloeistof",
              "lymfe",
              "milt",
              "thymus",
              "amandelen"
            ],
            "duration": "10'31"
          },
          {
            "title": "Capillary Exchange and Edema",
            "url": "https://www.youtube.com/watch?v=6ecmOuCIoNc",
            "desc": "de krachten die een rol spelen bij de uitwisseling van stoffen in de haarvaten",
            "terms": [
              "haarvaten",
              "filtratie",
              "resorptie",
              "bloeddruk",
              "colloïd osmotische waarde",
              "oedeem"
            ],
            "duration": "4'25"
          }
        ]
      }
    ],
    "12": [
      {
        "id": "12.1",
        "title": "Paragraaf 12.1",
        "items": [
          {
            "title": "Lifestyle & Risk Factors",
            "url": "https://www.youtube.com/watch?v=iy-47a68P60",
            "desc": "risicofactoren die je gezondheid bedreigen",
            "terms": [
              "risicofactoren",
              "leefstijl",
              "omgeving",
              "gezondheid"
            ],
            "duration": "4'09"
          },
          {
            "title": "Types Of Bacteria That Live On Your Skin",
            "url": "https://www.youtube.com/watch?v=enxYPfMl2fA",
            "desc": "bacteriën op je huid en de invloed ervan op je gezondheid",
            "terms": [
              "bacteriën",
              "huid"
            ],
            "duration": "3'37"
          },
          {
            "title": "Plant Disease and Defences",
            "url": "https://www.youtube.com/watch?v=oVg6ycY3eXQ",
            "desc": "ziekteverwekkers die planten bedreigen en hoe planten zich hiertegen verdedigen",
            "terms": [
              "plantenziekten",
              "mineralen",
              "ziekteverschijnselen",
              "cuticula",
              "gifstoffen",
              "doorns"
            ],
            "duration": "4'55"
          }
        ]
      },
      {
        "id": "12.2",
        "title": "Paragraaf 12.2",
        "items": [
          {
            "title": "How do Immune Cells (Macrophages) Engulf Bacteria Phagocytosis Process",
            "url": "https://www.youtube.com/playlist?list=PLVdFAH_AQ_B0SWzj1gKdn8z1nqLjJMC_q",
            "desc": "microscopische opnamen van macrofagen die bacteriën door fagocytose vernietigen",
            "terms": [
              "bacteriën",
              "macrofagen. fagocytose"
            ],
            "duration": "1'43"
          },
          {
            "title": "How antibiotics work",
            "url": "https://www.youtube.com/watch?v=X1GT2bKgci8",
            "desc": "de werking van antibiotica",
            "terms": [
              "infectie",
              "antibiotica",
              "bacteriën",
              "breed spectrum",
              "smal spectrum"
            ],
            "duration": "2'45"
          },
          {
            "title": "Zo genees je van andermans poep",
            "url": "https://www.youtube.com/watch?v=1waRbKqD7Uc&t=12s",
            "desc": "een poeptransplantatie kan de darmflora vernieuwen en mogelijk ziekten genezen",
            "terms": [
              "donorpoep",
              "poeptransplantatie",
              "darmflora"
            ],
            "duration": "4'16"
          }
        ]
      },
      {
        "id": "12.3",
        "title": "Paragraaf 12.3",
        "items": [
          {
            "title": "The Humoral Immune Response",
            "url": "https://www.youtube.com/watch?v=4s6IzVbyq-4",
            "desc": "de verschillende stappen van de afweer",
            "terms": [
              "macrofaag",
              "APC",
              "antigeenpresentatie",
              "T-helpercel",
              "cytokine",
              "B-cel",
              "plasmacel",
              "geheugencellen",
              "NK-cel"
            ],
            "duration": "4'01"
          },
          {
            "title": "The Adaptive Immune System",
            "url": "https://www.youtube.com/watch?v=jl4jo-zGmdI",
            "desc": "de verworven afweer",
            "terms": [
              "dendritische cel",
              "lymfeknoop",
              "T-helpercel",
              "B-cel",
              "antistoffen"
            ],
            "duration": "1'26"
          },
          {
            "title": "How COVID-19 mRNA Vaccines Work",
            "url": "https://www.youtube.com/watch?v=8nD6Q9X0SFw",
            "desc": "de werking van een mRNA-vaccin tegen corona",
            "terms": [
              "mRNA",
              "antistoffen",
              "eiwitten",
              "dendritische cel",
              "viruseiwitten",
              "lymfeknoop",
              "T-helpercel",
              "Tc-cel"
            ],
            "duration": "1'56"
          },
          {
            "title": "Edward Jenner Story",
            "url": "https://www.youtube.com/watch?v=jJwGNPRmyTI",
            "desc": "de geschiedenis van de ontdekking van het vaccin tegen pokken door Jenner",
            "terms": [
              "koepokken",
              "besmetting",
              "immuun",
              "pokken"
            ],
            "duration": "2'30"
          }
        ]
      },
      {
        "id": "12.4",
        "title": "Paragraaf 12.4",
        "items": [
          {
            "title": "BLOOD TYPES - ABO and Rh Blood Group Systems",
            "url": "https://www.youtube.com/watch?v=YJ7iBvKbXD8",
            "desc": "de verschillende bloedgroepen van het AB0- en het resussysteem",
            "terms": [
              "rode bloedcel",
              "bloedplasma",
              "bloedgroepen",
              "antigenen",
              "antistoffen",
              "AB0",
              "resusfactor",
              "klontering (=agglutination)",
              "universele donor",
              "universele ontvanger"
            ],
            "duration": "4'45"
          },
          {
            "title": "How Rh factor affects a pregnancy",
            "url": "https://www.youtube.com/watch?v=e2KK86bekNw",
            "desc": "het ontstaan van een resusbaby",
            "terms": [
              "bloedgroep",
              "resusfactor",
              "resusbaby",
              "antiresus"
            ],
            "duration": "2'20"
          },
          {
            "title": "In The Lab - Cross Matching - YouTube",
            "url": "https://www.youtube.com/watch?v=DmNO3adbLUw",
            "desc": "de uitvoering van een kruisproef voorafgaand aan een bloedtransfusie",
            "terms": [
              "kruisproef",
              "rode bloedcellen",
              "bloedplasma",
              "klontering"
            ],
            "duration": "3'56"
          }
        ]
      },
      {
        "id": "12.5",
        "title": "Paragraaf 12.5",
        "items": [
          {
            "title": "Oncogenes and Tumor Suppressor Genes",
            "url": "https://www.youtube.com/watch?v=cSXFjUpACWE",
            "desc": "het ontstaan van kanker door het optreden van verschillende mutaties",
            "terms": [
              "proto-oncogenen",
              "mutatie",
              "tumorsuppressorgenen",
              "celcyclus",
              "apoptose",
              "p53"
            ],
            "duration": "4'49"
          },
          {
            "title": "What Happens If You Get Coronavirus?",
            "url": "https://www.youtube.com/watch?v=5DGwOJXSxqg",
            "desc": "gevolgen van een besmetting met het coronavirus",
            "terms": [
              "coronavirus",
              "spikes (=antigenen van virus op de eiwitmantel)",
              "besmettelijk",
              "vaccin",
              "receptor",
              "ribosoom",
              "long",
              "vaccin",
              "antistof"
            ],
            "duration": "7'27"
          },
          {
            "title": "How Smoking Kills",
            "url": "https://www.youtube.com/watch?v=QDDnYcn-o8I&t=9s",
            "desc": "de gevaren van roken voor de gezondheid",
            "terms": [
              "longkanker",
              "roken",
              "longen",
              "bloedsomloop",
              "kankerverwekkende stof",
              "nicotine",
              "hersenen",
              "atherosclerose",
              "COPD"
            ],
            "duration": "9'01"
          }
        ]
      }
    ],
    "13": [
      {
        "id": "13.1",
        "title": "Paragraaf 13.1",
        "items": [
          {
            "title": "Boyle's Law",
            "url": "https://www.youtube.com/watch?v=0UmaLVJQ3wA",
            "desc": "realtie tussen volume en druk bij de ademhaling",
            "terms": [
              "druk",
              "volume",
              "gasmoleculen"
            ],
            "duration": "1'57"
          },
          {
            "title": "Pulmonary Ventilation",
            "url": "https://www.youtube.com/watch?v=86wD8fsc3m8",
            "desc": "in- en uitademen berust op een drukverschil tussen de longen en de buitenlucht",
            "terms": [
              "in- en uitademing",
              "ademhalingsspieren",
              "tussenribspieren",
              "middenrifspieren",
              "buikspieren"
            ],
            "duration": "2'58"
          },
          {
            "title": "Functions of Cilia and Goblet Cells",
            "url": "https://www.youtube.com/watch?v=miEEluVlemQ",
            "desc": "inademen via de neus zuivert, verwarmt en bevochtigt de ingeademde lucht",
            "terms": [
              "trilhaarepitheel",
              "slijmcellen"
            ],
            "duration": "0'37"
          }
        ]
      },
      {
        "id": "13.2",
        "title": "Paragraaf 13.2",
        "items": [
          {
            "title": "Gaseous Exchange",
            "url": "https://www.youtube.com/watch?v=AyUtdqiOgCA",
            "desc": "opname van zuurstof door de longen; binding van O2 aan de rode bloedcellen; route van rode bloedcellen",
            "terms": [
              "zuurstof",
              "longhaarvaten",
              "longblaasjes",
              "bloedplasma",
              "rode bloedcellen",
              "hemoglobine",
              "oxyhemoglobine"
            ],
            "duration": "0 - 2'14 (totaal 3'08)"
          },
          {
            "title": "The Lungs and the Pulmonary Circuit",
            "url": "https://www.youtube.com/watch?v=fCgQOsQVLL4",
            "desc": "de afgelegde weg van lucht door de luchtwegen; de gaswisseling in de longblaasjes",
            "terms": [
              "zuurstof",
              "koolstofdioxide",
              "neus",
              "mond",
              "strottenhoofd",
              "luchtpijp",
              "bronchi",
              "tussenribspieren",
              "middenrifspieren",
              "in- en uitademing",
              "grote en kleine bloedsomloop",
              "longblaasjes",
              "gaswisseling"
            ],
            "duration": "3'07"
          },
          {
            "title": "Immunology of the Lung",
            "url": "https://www.youtube.com/watch?v=rgphaHmAC_A",
            "desc": "het ontstaan van astma; bevat veel extra informatie",
            "terms": [
              "astma",
              "bronchi",
              "bronchiolen",
              "trilhaarepitheel",
              "slijm (=mucus)",
              "huisstofmijt",
              "roken",
              "mestcellen"
            ],
            "duration": "5'40"
          }
        ]
      },
      {
        "id": "13.3",
        "title": "Paragraaf 13.3",
        "items": [
          {
            "title": "Homeostasis In The Human Body",
            "url": "https://www.youtube.com/watch?v=LSgEJSlk6W4",
            "desc": "homeostase en het functioneren van het lichaam",
            "terms": [
              "homeostase",
              "lichaamstemperatuur",
              "norm",
              "bloeddruk",
              "interne milieu"
            ],
            "duration": "3'59"
          },
          {
            "title": "Wat doet je lever?",
            "url": "https://www.youtube.com/watch?v=wbh3SjzydnQ",
            "desc": "verschillende functies van de lever",
            "terms": [
              "lever",
              "voedingsstoffen",
              "leverader",
              "poortader",
              "ontgiften",
              "bloedeiwitten",
              "vitaminen",
              "gal",
              "galblaas"
            ],
            "duration": "3'25"
          }
        ]
      },
      {
        "id": "13.4",
        "title": "Paragraaf 13.4",
        "items": [
          {
            "title": "The Human Kidneys",
            "url": "https://www.youtube.com/watch?v=ZZMT0NOgCdA",
            "desc": "de vorming van urine",
            "terms": [
              "nieren",
              "blaas",
              "nierslagader",
              "nierader",
              "nefronen",
              "nierkapsel",
              "glomerulus",
              "filtratie",
              "voorurine",
              "nierkanaaltjes",
              "resorptie",
              "urine",
              "urineleider",
              "epo"
            ],
            "duration": "2'54"
          },
          {
            "title": "Excretion - ADH and Homeostasis",
            "url": "https://www.youtube.com/watch?v=yXWlSve_7Uw",
            "desc": "de rol van ADH bij het regelen van de waterhuishouding",
            "terms": [
              "uitscheiding",
              "homeostase",
              "ADH",
              "hypothalamus",
              "hypofyse",
              "verzamelbuisje",
              "regelkring",
              "bloeddruk",
              "osmotische waarde"
            ],
            "duration": "2'59"
          },
          {
            "title": "Kidney Transplant Surgery",
            "url": "https://www.youtube.com/watch?v=zPXphpl7gco",
            "desc": "de uitvoering van een niertransplantatie",
            "terms": [
              "niertransplantatie",
              "nierslagader",
              "nierader",
              "urineleider",
              "orgaantransplantatie"
            ],
            "duration": "5'26"
          }
        ]
      }
    ],
    "14": [
      {
        "id": "14.1",
        "title": "Paragraaf 14.1",
        "items": [
          {
            "title": "Types of muscle",
            "url": "https://www.youtube.com/watch?v=eShBZ3-RxHA",
            "desc": "de verschillende typen spieren en hun eigenschappen",
            "terms": [
              "gladde spieren",
              "hartspieren",
              "dwarsgestreepte spieren",
              "willekeurige spieren",
              "onwillekeurige spieren",
              "gewrichten"
            ],
            "duration": "2'00"
          },
          {
            "title": "Types of muscle fibres - fast twitch, slow twitch",
            "url": "https://www.youtube.com/watch?v=8x8H-GFtwyU",
            "desc": "het verschil tussen langzame en snelle spiervezels",
            "terms": [
              "langzame en snelle spiervezels",
              "rode en witte spiervezels"
            ],
            "duration": "2'26"
          },
          {
            "title": "Muscle Contraction",
            "url": "https://www.youtube.com/watch?v=nTZnBdeIb5c",
            "desc": "het samentrekken van spieren op molecuulniveau",
            "terms": [
              "spier",
              "spierbundel",
              "spiervezel",
              "spierfibril",
              "actine",
              "myosine"
            ],
            "duration": "2'22"
          }
        ]
      },
      {
        "id": "14.2",
        "title": "Paragraaf 14.2",
        "items": [
          {
            "title": "How the Eye Works",
            "url": "https://www.youtube.com/watch?v=YcedXDN6a88",
            "desc": "de werking van het oog; oorzaken van oogafwijkingen",
            "terms": [
              "hoornvlies",
              "iris",
              "lens",
              "netvlies",
              "bijziendheid",
              "oogzenuw",
              "hersenen",
              "positieve lens",
              "negatieve lens",
              "verziendheid"
            ],
            "duration": "3'22"
          },
          {
            "title": "Vision: Anatomy and Physiology",
            "url": "https://www.youtube.com/watch?v=_xKbjYBnHhc",
            "desc": "de werking van staafjes en kegeltjes",
            "terms": [
              "oogzenuw",
              "hersenen",
              "hoornvlies",
              "lens",
              "iris",
              "pupil",
              "netvlies",
              "gele vlek (optic disk)",
              "staafjes (rods)",
              "kegeltjes (cones)",
              "kleurenblindheid"
            ],
            "duration": "0 - 3'00 (6'39)"
          },
          {
            "title": "Cataract Surgery",
            "url": "https://www.youtube.com/watch?v=6hgvjigs2_E",
            "desc": "een staaroperatie",
            "terms": [
              "staar",
              "lens"
            ],
            "duration": "5'28"
          }
        ]
      },
      {
        "id": "14.3",
        "title": "Paragraaf 14.3",
        "items": [
          {
            "title": "Autonomic Nervous System",
            "url": "https://www.youtube.com/watch?v=D96mSg2_h0c",
            "desc": "het verschil tussen het orthosympatische en parasympatische deel van het autonome zenuwstelsel",
            "terms": [
              "autonome zenuwstelsel",
              "(ortho)sympatisch en parasympatisch deel"
            ],
            "duration": "4'22"
          },
          {
            "title": "Central & Peripheral Anatomy",
            "url": "https://www.youtube.com/watch?v=L6w0_j6mWbo",
            "desc": "het verschil tussen het centrale en het perifere zenuwstelsel; de geleiding van impulsen via zenuwcellen",
            "terms": [
              "centrale zenuwstelsel",
              "perifere zenuwstelsel",
              "reflexen",
              "dendriet",
              "axon",
              "cellichaam",
              "synaps",
              "neurotransmitters"
            ],
            "duration": "2'36"
          }
        ]
      },
      {
        "id": "14.4",
        "title": "Paragraaf 14.4",
        "items": [
          {
            "title": "The Neuron",
            "url": "https://www.youtube.com/watch?v=6qS83wD29PY",
            "desc": "de bouw van zenuwcellen",
            "terms": [
              "hersenen",
              "zenuwcellen (neuronen)",
              "dendriet",
              "cellichaam",
              "axon",
              "myelineschede",
              "synaps",
              "neurotransmitters"
            ],
            "duration": "1'47"
          },
          {
            "title": "Chemical Synapse",
            "url": "https://www.youtube.com/watch?v=mItV4rC57kM",
            "desc": "de werking van een synaps",
            "terms": [
              "synaps",
              "presynaptisch membraan",
              "synapsspleet",
              "postsynaptisch membraan",
              "receptoren",
              "neurotransmitters"
            ],
            "duration": "1'12"
          },
          {
            "title": "Knee-jerk Reflex",
            "url": "https://www.youtube.com/watch?v=c-dD0N53QRg",
            "desc": "de kniepeesreflex: voorbeeld van een reflexboog",
            "terms": [
              "reflexboog",
              "ruggenmerg",
              "receptoren",
              "gevoelszenuwcellen (sensorisch)",
              "bewegingszenuwcellen (motorisch)",
              "schakelzenuwcellen"
            ],
            "duration": "1'54"
          }
        ]
      },
      {
        "id": "14.5",
        "title": "Paragraaf 14.5",
        "items": [
          {
            "title": "Endocrine System",
            "url": "https://www.youtube.com/watch?v=BvpPCn1rwsw",
            "desc": "de verschillen tussen het zenuwstelsel en het hormoonstelsel en hun interactie",
            "terms": [
              "hormoonstelsel",
              "zenuwstelsel",
              "hormoon",
              "receptoren",
              "hypofyse (pituitary gland)",
              "schildklier (thyroid)",
              "negatieve terugkoppeling",
              "bijnieren (adrenal glands)",
              "alvleesklier",
              "testes",
              "ovaria"
            ],
            "duration": "5'03"
          },
          {
            "title": "Negative Feedback Loops - Positive Feedback Loops",
            "url": "https://www.youtube.com/watch?v=R6_oe_QcHKc&",
            "desc": "negatieve en positieve terugkoppeling",
            "terms": [
              "homeostase",
              "negatieve terugkoppeling",
              "positieve terugkoppeling"
            ],
            "duration": "2'25"
          },
          {
            "title": "Homeostatic Control Mechanisms and Feedback Control Loops",
            "url": "https://www.youtube.com/watch?v=5G3aKGGI8hw",
            "desc": "het handhaven van homeostase door het hormoon- en zenuwstelsel",
            "terms": [
              "homeostase",
              "regelkringen",
              "receptor",
              "norm",
              "effector",
              "hormoonklieren",
              "spieren"
            ],
            "duration": "4'56"
          },
          {
            "title": "Control of Blood Glucose",
            "url": "https://www.youtube.com/watch?v=OHrX3X3LGzI",
            "desc": "de regeling van het glucosegehalte van het bloed",
            "terms": [
              "glucosegehalte",
              "glucagon",
              "insuline",
              "alvleesklier",
              "negatieve terugkoppeling",
              "glycogeen",
              "lever"
            ],
            "duration": "4'33"
          }
        ]
      }
    ]
  }
};

  const attach = (level, chapterNums) => {
    const levelData = window.CURRICULUM && window.CURRICULUM[level];
    if (!levelData || !levelData.methodes || !levelData.methodes.nectar) return;
    levelData.methodes.nectar.chapters.forEach(chapter => {
      if (chapterNums.includes(chapter.num) && NECTAR_VIDEOS[level] && NECTAR_VIDEOS[level][chapter.num]) {
        chapter.videos = NECTAR_VIDEOS[level][chapter.num];
      }
    });
  };

  attach("vwo", ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]);
  attach("havo", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]);

  window.NECTAR_VIDEOS = NECTAR_VIDEOS;
})();
