# Veo Workflow

## Prompt-Struktur (fix für jeden Veo-Prompt)

Jeder Veo-Prompt enthält diese 7 Prompt-Elemente, in dieser Reihenfolge
(nicht zu verwechseln mit den Schritten im Abschnitt "Ablauf" weiter unten):

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

## Positions-/Grounding-Anweisungen (Regel, ✅ bestätigt durch erfolgreiche Neu-Generierung)

**Wann diese Regel greift (Trigger):** immer, wenn ein Shot eine fixierte
Körperposition (kniend, sitzend, angelehnt, "Static"-Kamera) **mit** einer
kraftvollen/stoßhaften Handlung kombiniert (Schlag, Stoß, Aufprall, Wurf).
Wird bereits in Phase 6 (`quality-check.md`, Punkt 4) vor jeder Generierung
geprüft, nicht erst nachträglich.

**Ursache des Fehlers:** eine kraftvolle Handlung (z.B. ein Axtschlag)
erzeugt in echter Biomechanik immer eine Gegenbewegung/Gewichtsverlagerung.
Wird der restliche Körper gleichzeitig als vollständig bewegungslos
vorgegeben, kann das Modell diesen Widerspruch nicht isoliert in
Armen/Schultern auflösen — es verschiebt stattdessen den ganzen Körper
("schwebt"/rutscht durch die Szene). Verstärkt wird das, wenn zusätzlich das
Ende des Aufpralls/der Materialverformung (z.B. Ast bricht) gezeigt werden
soll — eine zweite, eigenständig fehleranfällige Physik-Aufgabe.

**Lösung (dreifach, alle drei Teile nötig):**
1. **Positions- und Grounding-Anweisungen gehören ausschließlich** in
   Element 3 (Main Action) — nie in Element 5 (Camera Movement). Camera
   Movement beschreibt ausschließlich die Kamera selbst, nie den Charakter.
2. **Grounding immer positiv formulieren**, nicht als Verneinung. Statt "no
   shifting, no sliding" den Zielzustand beschreiben, z.B. "weight grounded
   and heavy through knee and boot, pressed into the ground".
3. **Handlung vor dem Aufprall/Materialbruch enden lassen**, statt ihn zu
   zeigen (z.B. "the shot ends the instant the blade makes contact, before
   it splits").

Fund entstand nach dreifacher Reproduktion desselben Fehlers, gelöst und
bestätigt in `episodes/episode-02-unterstand.md`, Shot 5. Siehe auch
`negative-patterns.md`, Kategorie "Impact-/Materialphysik".

## Experimentell: mehrere Referenzbilder direkt in Veo (❓ noch nicht Standard)

Veo 3.1 unterstützt laut offizieller Google-Dokumentation ("Ingredients to
Video") bis zu 3 Referenzbilder direkt in der Video-Generierung (nicht nur
im Nano-Banana-Keyframe): ein Bild für Charakter (Gesicht/Outfit), eines für
ein Objekt/Prop, eines für Ort/Stil. ✅ Existenz der Funktion belegt
(Google-Blog), ❓ tatsächlicher Effekt auf Charakterkonsistenz/Bodenkontakt/
Bewegungsqualität in unserem Workflow noch nicht getestet.

**Status: experimentell, kein Standard-Workflow — vorerst zurückgestellt.**
Grund: begrenztes Generierungs-Kontingent, daher zuerst die Prompt-/
Workflow-Änderungen (siehe oben) allein testen. Nur falls derselbe Fehler
(Schweben/Rutschen) trotz korrigiertem Prompt erneut auftritt, wird der
Test 1 vs. 2 vs. 3 Referenzbilder (Charakterkonsistenz, Bodenkontakt,
Bewegungsqualität) durchgeführt. Erst nach diesem Testergebnis wird
entschieden, ob es dauerhaft in den Standard-Workflow (Schritt 3 oben)
übernommen wird.

## Ablauf (Produktions-Schritte 1-7, nicht zu verwechseln mit den 7 Prompt-Elementen oben)

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
7. **Produktionsstand dokumentieren (verpflichtend)** — Ergebnis (Keyframe
   freigegeben? Video freigegeben? Besonderheiten/Abweichungen?) in der
   "Produktionsstand"-Tabelle der jeweiligen Episoden-Datei festhalten,
   direkt nach Freigabe — nicht nur im Gespräch belassen. Vorlage/Beispiel:
   `../episodes/episode-02-unterstand.md`, Abschnitt "Produktionsstand
   (laufend aktualisiert)". Ohne diesen Schritt gilt ein Shot nicht als
   abgeschlossen, auch wenn Keyframe und Video bereits freigegeben sind.

## Wann ein Shot neu generiert werden muss

- Ausrüstung weicht vom Kanon ab (Rucksack, Axt-Anzahl, Mütze)
- Licht/Tageszeit passt nicht zum Episoden-Wert
- Eine zweite, unabhängige Handlung ersetzt/überlagert die Hauptaktion (nicht
  zu verwechseln mit einer kleinen natürlichen Nebenbewegung) oder ein
  Perspektivwechsel ist eingeschlichen
- Physik wirkt falsch (schwebende Objekte, unlogische Bewegung)

Diese Liste gilt für die Prüfung **vor** der ersten Freigabe eines Shots.
Für einen bereits als **Approved** markierten Shot gilt danach die
strengere, engere Schwelle aus `prompt-versioning.md`, Abschnitt "Approved
Shot Protection" (nur Story-Logik-/Wahrnehmungsschäden rechtfertigen dort
noch eine Neu-Generierung) — beide Listen ergänzen sich, sie widersprechen
sich nicht.

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
