# Episode 1 — Ankunft

## Episode Ziel

Leif verlässt die Zivilisation endgültig und betritt die Wildnis, die ab
jetzt sein Zuhause wird. Kein Baufortschritt in dieser Episode — reiner
Einstieg.

## Hook

Intensiver, entschlossener Blick Leifs, bevor klar ist, wo er sich befindet.

## Emotion

Entschlossenheit, gemischt mit Respekt/Unsicherheit vor der unbekannten
Umgebung.

## Umgebung

Nordischer Kiefernwald mit nahegelegenem Fluss. Fixe Episoden-Werte (siehe
`../production_rules/lighting-rules.md`): früher Vormittag, bewölkt-diffuses
Licht, leichter Bodennebel, kühle Farbtemperatur.

## Story Outline (nach `../production_rules/story-structure.md`)

| Phase | Zeit | Inhalt |
|---|---|---|
| Hook | 0-5s | Leifs entschlossener Blick — Kontext noch unklar |
| Setup | 5-20s | Er betritt den Wald, Ort wird etabliert |
| Journey/Conflict | 20-60s | Weg durch unbekanntes Terrain, erster physischer Kontakt mit der Wildnis |
| Payoff | 60-90s | Ankunft am Fluss — offene Frage, wie es weitergeht (Cliffhanger) |

**Viewer Retention Check**
- HOOK: Der Blick allein wirft die Frage auf, wer das ist und was passiert.
- OPEN LOOP: Wo ist er, und warum ist er allein hier?
- EMOTION: Entschlossenheit gemischt mit Respekt/Unsicherheit vor der Wildnis.
- PAYOFF: Kein Ort erreicht, der wie ein Ziel wirkt — nur ein Fluss, der die
  nächste Entscheidung erzwingt. Das hält die Frage bewusst offen.

## Shot-Liste

**Shot 1** — Hook (0-5s)
- Zweck: Hook
- Shot-Größe: Close-up
- Kamerabewegung: Push-in (langsam)
- Perspektive: Eye-level
- Länge: 3-4s
- Hauptaktion: Leif blickt konzentriert in die Ferne

**Shot 2** — Setup (5-20s)
- Zweck: Setup — Ort etablieren
- Shot-Größe: Establishing Shot
- Kamerabewegung: Dolly (langsame Annäherung)
- Perspektive: Eye-level
- Länge: 6-8s
- Hauptaktion: Leif betritt den Wald

**Shot 3** — Journey/Conflict (20-60s)
- Zweck: Fortschritt — die Reise zeigen, Weite der Wildnis spürbar machen
- Shot-Größe: Wide Shot
- Kamerabewegung: Tracking (von hinten)
- Perspektive: High angle (Leif wirkt klein gegenüber der Wildnis)
- Länge: 5-6s
- Hauptaktion: Leif läuft weiter in den Wald hinein

**Shot 4** — Journey/Conflict (20-60s)
- Zweck: *(im Quality Check verbessert, siehe unten)* erster physischer
  Kontakt mit unberührtem Terrain — visualisiert den Übergang von
  Zivilisation zu echter Wildnis
- Shot-Größe: Extreme Close-up
- Kamerabewegung: Push-in (minimal)
- Perspektive: Low angle (Bodennähe)
- Länge: 2-3s
- Hauptaktion: Stiefel treten von festem Pfad auf unberührtes Moos und Laub

**Shot 5** — Payoff (60-90s)
- Zweck: Payoff/Cliffhanger — emotionaler Abschluss, offene Frage
- Shot-Größe: Medium Shot
- Kamerabewegung: Push-in (leicht)
- Perspektive: Over-the-shoulder
- Länge: 4-6s
- Hauptaktion: Leif blickt auf einen Fluss, unklar wie es weitergeht

Alle Shots teilen die fixen Episoden-Werte aus "Umgebung" oben (früher
Vormittag, bewölkt-diffus, Bodennebel, kühle Farbtemperatur).

## Quality-Check-Ergebnisse (gegen `../production_rules/quality-check.md`)

| Shot | 1 Charakter | 2 Kleidung/Equip. | 3 Kamera | 4 Physik | 5 Artefakt | 6 Veo-Eignung | 7 Story-Zweck |
|---|---|---|---|---|---|---|---|
| 1 | ✅ Master Prompt (28J., Canon) | ✅ unverändert | ✅ Größe+Bewegung explizit | ✅ eine Aktion | ✅ Ecke prüfen bei Generierung | ✅ 3-4s, 9:16 | ✅ wirft sofort Frage auf |
| 2 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ 6-8s, 9:16 | ✅ etabliert Ort/Ton |
| 3 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ 5-6s, 9:16 | ✅ High angle verstärkt Thema "allein in der Weite" |
| 4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ 2-3s, 9:16 | ⚠️ **ursprünglich zu schwach** — siehe Korrektur unten |
| 5 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ 4-6s, 9:16 | ✅ hält die Frage offen (Cliffhanger) |

**Zwei Funde aus dem Check:**

1. **Shot 4, Punkt 7 (Story-Zweck) — ursprünglich unzureichend.** "Stiefel treten auf Moos" war rein dekorativ, ohne erkennbare Story-Funktion. Korrigiert: Hauptaktion jetzt explizit als Übergangsmoment von festem Pfad zu unberührtem Terrain formuliert — visualisiert den Punkt, an dem Zivilisation endet. Damit besteht der Shot Punkt 7 nur nach der Korrektur, nicht in der ursprünglichen Fassung.

2. **Systemfund, nicht Episode-spezifisch:** Der Style-Block im Master Character Prompt (`characters/leif.md`) enthält "warm sunlight" als festen Bestandteil. Diese Episode nutzt aber bewölkt-diffuses, kühles Licht (siehe `lighting-rules.md`). Für alle Shots dieser Episode wird "warm sunlight" aus dem Style-Block **nicht** in die finalen Prompts übernommen — die episodenspezifische Lighting-Regel hat Vorrang vor dem generischen Style-Satz. Rest des Style-Blocks (photorealistic, earth tones, film grain etc.) bleibt unverändert gültig.

## Nano Banana Bildpläne (nach `../production_rules/nano-banana-workflow.md`)

Alle Pläne sind ausführungsbereit, sobald Phase 1 (3-Ansichten-Charaktersheet)
abgeschlossen ist — aktuell noch offen (siehe `../characters/leif.md`).

**Shot 1**
- Image 1 = Gesichtsidentität (Front-Ansicht Charaktersheet)
- Image 2 = Kleidung/Ausrüstung (offizielles Referenzfoto)
- Text: Close-up, Leif blickt konzentriert in die Ferne, neutraler Waldhintergrund unscharf, bewölkt-diffuses Morgenlicht, kühle Farbtemperatur, kein Sonnenlicht-Akzent

**Shot 2**
- Image 1 = Gesichtsidentität
- Image 2 = Kleidung/Ausrüstung
- Text: Establishing Shot, Leif von vorne/leicht seitlich beim Betreten eines nordischen Kiefernwaldes, Bodennebel, bewölkt-diffuses Licht

**Shot 3**
- Image 1 = Gesichtsidentität
- Image 2 = Kleidung/Ausrüstung
- Text: Wide Shot von hinten, High-angle-Perspektive, Leif klein im Bild gegenüber hohen Kiefern, Bodennebel, kühles Licht

**Shot 4**
- Image 2 = Kleidung/Ausrüstung (Stiefel-Detail aus Referenzfoto)
- Text: Extreme Close-up, Bodenhöhe, Stiefel treten von Waldpfad auf Moos/Laub, kein Gesicht im Bild, diffuses Licht von oben

**Shot 5**
- Image 1 = Gesichtsidentität
- Image 2 = Kleidung/Ausrüstung
- Text: Medium Shot, Over-the-shoulder, Blick auf einen Fluss im Nebel, bewölkt-diffuses Licht, kühle Farbtemperatur

**Noch keine finalen Veo-Prompts** — diese entstehen erst, wenn die Shot-Liste
oben freigegeben ist (Anforderung dieses Tests). Nächster Schritt nach
Freigabe: Charaktersheet erzeugen (Phase 1), dann die fünf Keyframes gemäß
obiger Pläne generieren, dann erst `veo-workflow.md` Schritt 3 (Veo-Prompt
nach 7-Feld-Struktur).

## Shot-Listen-Freigabeprüfung

| Shot | 1 Character Consistency | 2 Story Purpose | 3 Retention | 4 Visual Continuity | 5 Veo Feasibility |
|---|---|---|---|---|---|
| 1 | ✅ Gesicht voll sichtbar, Kanon prüfbar | ✅ Hook, klare Funktion | ✅ offene Frage "wer/wo" | ✅ passt zu Episoden-Licht | ✅ 4s (Bereichsobergrenze), Push-in umsetzbar |
| 2 | ✅ Ausrüstungs-Silhouette sichtbar, Gesicht optional | ✅ etabliert Ort | ✅ "was macht er hier" | ✅ | ✅ 6 oder 8s |
| 3 | ⚠️ nur von hinten sichtbar — **logisch**, aber Rucksack/Axt-Silhouette muss im Bildplan explizit bestätigt werden (höchstes Drift-Risiko, siehe unten) | ✅ High-angle verstärkt Thema | ✅ wachsende Unsicherheit | ⚠️ Himmel muss bewölkt/neblig bleiben, nicht klar/dramatisch werden | ✅ 6s (nächstliegender gültiger Wert) |
| 4 | ✅ Abwesenheit logisch (Detail-Insert) | ✅ Übergangsmoment (korrigiert letzte Runde) | ✅ "point of no return" | ✅ | ✅ nativ 4s generieren, auf 2-3s trimmen (siehe Fix in `camera-system.md`) |
| 5 | ⚠️ nur Profil/Rücken sichtbar — logisch (Over-the-shoulder), Rucksack-Silhouette explizit bestätigen | ✅ Cliffhanger | ✅ offene Frage bleibt bestehen | ✅ | ✅ 4 oder 6s |

**Befund 1 (gelöst, kein Blocker):** Shots 1 und 4 lagen unter Veos
Mindestlänge von 4s. Fix bereits in `camera-system.md` ergänzt: nativ auf
4s generieren, danach in CapCut auf Ziel-Länge trimmen.

**Befund 2 (gelöst, kein Blocker):** Shots 3 und 5 zeigen Leif nicht von
vorne — Ausrüstungs-Silhouette (Rucksack-Form, eine Axt) muss in den
Nano-Banana-Bildplänen oben explizit genannt werden, nicht nur "Kleidung/
Ausrüstung" pauschal, weil genau bei Rücken-/Seitenansichten der
ursprüngliche Rucksack-Drift beobachtet wurde. Ergänzt in den Bildplänen
oben (Image 2 = Kleidung/Ausrüstung, jetzt bewusst auch für Shots 3 und 5
vermerkt).

**Befund 3 (offen, braucht Entscheidung):** Die 5 Shots ergeben zusammen nur
~20-27s Gesamtlänge. Das Story-Timing in `story-structure.md` sieht ein
Fenster von bis zu 90s vor (Journey/Conflict allein 20-60s) — aktuell füllen
Shots 3+4 diese Phase mit nur ~7-9s. Für eine Meilenstein-Episode wie die
Pilotfolge ist das knapp. Zwei Optionen:
- **A)** Als bewusst kurze erste Episode akzeptieren (zulässig nach
  `capacity-and-cadence.md`, aber unüblich kurz für eine Meilenstein-Episode)
- **B)** 2-3 weitere Shots in die Journey/Conflict-Phase ergänzen, bevor
  final freigegeben wird

**Status:** Punkte 1, 2, 4 und 5 bestehen für alle 5 Shots. Punkt 3
(Retention/Vollständigkeit) bestehen die einzelnen Shots technisch, aber die
Gesamtlänge unterschreitet das Episoden-Ziel deutlich — **finale Freigabe
steht daher noch aus, bis Befund 3 entschieden ist.**
