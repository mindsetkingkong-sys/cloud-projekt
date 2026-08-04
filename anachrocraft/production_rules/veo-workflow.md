# Veo Workflow

## Prompt-Struktur (fix für jeden Veo-Prompt)

Jeder Veo-Prompt enthält diese 7 Elemente, in dieser Reihenfolge:

1. **Shot Type** — nur die Einstellungsgröße (Shot-Größe) inkl. Perspektive,
   z.B. "Close-up, Eye-level" (siehe `camera-system.md`)
2. **Character** — Master Character Prompt aus `../characters/leif.md`
3. **Main Action** — eine dominante Hauptaktion (kleine Nebenbewegungen erlaubt)
4. **Environment** — Ort/Umgebung, konsistent mit `continuity-rules.md`
5. **Camera Movement** — nur die Bewegung, z.B. "Dolly", "Tracking", "Push-in"
   (siehe `camera-system.md`) — **nicht** die Einstellungsgröße, die steht in
   Element 1
6. **Lighting** — aus `lighting-rules.md`, fix für die Episode
7. **Cinematic Style** — aus dem Style-Block des Master Character Prompts

Grundregeln: klare Hauptidee pro Shot, Szene nicht überladen, Kamera und
Bewegung physikalisch logisch, Charakterkonsistenz erhalten.

## Positions-/Grounding-Anweisungen (Regel, ✅ aus wiederholtem Praxisfund)

- **Positions- und Grounding-Anweisungen** (z.B. "Knie bleibt am Boden",
  "keine Verschiebung zur Kamera/zum Hintergrund") gehören **ausschließlich**
  in Element 3 (Main Action) — nie in Element 5 (Camera Movement).
- **Camera Movement beschreibt ausschließlich die Kamera selbst**, nie den
  Charakter. Wird eine Charakter-Anweisung ins Kamera-Feld gemischt, ist für
  das Modell unklar, worauf sich "keine Bewegung" bezieht — das schwächt
  statt zu verstärken.
- **Grounding immer positiv formulieren**, nicht als Verneinung. Statt "no
  shifting, no sliding" den Zielzustand beschreiben, z.B. "weight grounded
  and heavy through knee and boot, pressed into the ground". Negative
  Formulierungen liefern dem Modell kein greifbares Zielbild und sind
  nachweislich unzuverlässiger.

Hintergrund: dieser Fund entstand nach dreifacher Reproduktion desselben
Fehlers (Charakter "schwebt"/rutscht rückwärts durch die Szene trotz
"Static"-Kamera), siehe `episodes/episode-02-unterstand.md`, Shot 5.

## Experimentell: mehrere Referenzbilder direkt in Veo (❓ noch nicht Standard)

Veo 3.1 unterstützt laut offizieller Google-Dokumentation ("Ingredients to
Video") bis zu 3 Referenzbilder direkt in der Video-Generierung (nicht nur
im Nano-Banana-Keyframe): ein Bild für Charakter (Gesicht/Outfit), eines für
ein Objekt/Prop, eines für Ort/Stil. ✅ Existenz der Funktion belegt
(Google-Blog), ❓ tatsächlicher Effekt auf Charakterkonsistenz/Bodenkontakt/
Bewegungsqualität in unserem Workflow noch nicht getestet.

**Status: experimentell, kein Standard-Workflow.** Geplanter Test: 1 vs. 2
vs. 3 Referenzbilder am selben Shot vergleichen (Charakterkonsistenz,
Bodenkontakt, Bewegungsqualität). Erst nach Testergebnis wird entschieden,
ob dies dauerhaft in den Standard-Workflow (Schritt 3 oben) übernommen wird.

## Ablauf

1. **Shot planen** — aus der Episoden-Shot-Liste (`episodes/`), Shot-Größe +
   Kamerabewegung aus `camera-system.md` wählen.
2. **Referenz prüfen** — passendes Keyframe aus dem Nano-Banana-Workflow
   liegt vor und hat Phase 3 (Konsistenzprüfung) bestanden.
3. **Prompt erstellen** — Formel aus `camera-system.md`, Licht/Wetter aus
   `lighting-rules.md` und `continuity-rules.md` für diese Episode
   übernehmen, Keyframe als Asset-Referenzbild anhängen.
4. **Video generieren** — kurze Clip-Länge entsprechend der verfügbaren
   Einstellungen und der Shot-Größe (siehe `camera-system.md`). Eine
   **dominante Hauptaktion** pro Shot; kleine natürliche Bewegungen/Reaktionen
   sind erlaubt (z.B. "Leif läuft durch den Wald, bleibt stehen und schaut
   sich um"). Nicht erlaubt: mehrere unabhängige Handlungen oder Ortswechsel
   in einem Shot (z.B. "läuft, baut eine Hütte, kämpft, findet einen
   Gegenstand und wechselt den Ort"). Kein Timestamp-Multi-Beat.
5. **Fehler analysieren** — Ergebnis gegen `negative-patterns.md` prüfen.
6. **Verbessern** — bei Fehler: Prompt präzisieren oder neu generieren, nicht
   den Fehler in der Nachbearbeitung "wegschneiden", wenn er den Charakter
   selbst betrifft (Gesicht/Ausrüstung).

## Wann ein Shot neu generiert werden muss

- Ausrüstung weicht vom Kanon ab (Rucksack, Axt-Anzahl, Mütze)
- Licht/Tageszeit passt nicht zum Episoden-Wert
- Eine zweite, unabhängige Handlung ersetzt/überlagert die Hauptaktion (nicht
  zu verwechseln mit einer kleinen natürlichen Nebenbewegung) oder ein
  Perspektivwechsel ist eingeschlichen
- Physik wirkt falsch (schwebende Objekte, unlogische Bewegung)

**Kein Grund für Neu-Generierung:** das sichtbare Gemini-Wasserzeichen/Icon.
Es tritt bei praktisch jeder Veo-Generierung auf, wechselnd in Position —
erneutes Generieren verschiebt es nur, entfernt es nicht. Wird als
akzeptiertes Merkmal behandelt (croppen nur, wenn es in leerem Hintergrund
liegt und kein Bildinhalt verloren geht), nicht als Fehler mit
Regenerierungs-Kontingent bekämpft.

## Typische Veo-Fehler (worauf beim Ergebnis geachtet wird)

Siehe `negative-patterns.md` — das ist die verbindliche Liste, hier nicht
duplizieren.

## Qualitätskriterien

Ein Clip gilt als freigegeben, wenn er die komplette `quality-check.md`
besteht — nicht nach subjektivem "sieht gut aus".
