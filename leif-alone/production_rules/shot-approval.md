# Shot Approval

Freigabeprüfung der gesamten Shot-Liste einer Episode — läuft, nachdem die
Shot-Liste steht, aber **bevor** Bildreferenzen (Nano Banana) oder finale
Veo-Prompts erstellt werden. Ergänzt `quality-check.md` (prüft einzelne
finale Prompts eine Stufe später), ersetzt es nicht.

## 1. Character Consistency

- Bleibt Leif visuell konsistent (Gesicht, Haare, Bart, Kleidung, Rucksack,
  Axt gemäß `../characters/leif.md`)?
- Falls Leif in einem Shot nicht sichtbar ist: ist die Abwesenheit logisch
  (z.B. Detail-Insert)?

## 2. Story Purpose

- Hat jeder Shot eine klare Funktion?
- Treibt jeder Shot die Geschichte weiter?
- Gibt es dekorative Shots ohne Mehrwert (siehe `quality-check.md`, Punkt 7)?

## 3. Retention

- Erzeugt jeder Shot Interesse für den nächsten (siehe Viewer Retention Check
  in `story-structure.md`)?
- Gibt es eine offene Frage oder Erwartung?

## 4. Visual Continuity

- Sind Umgebung, Wetter, Licht und Tageszeit über alle Shots hinweg
  konsistent (siehe `continuity-rules.md`, `lighting-rules.md`)?
- Gibt es Konflikte mit der Episoden-Lighting-Regel?
- **Environment-Continuity-Check (verbindlich):** für jeden Shot mit
  derselben Location wie sein unmittelbarer Vorgänger-Shot den vollständigen
  Abgleich aus `continuity-rules.md`, Abschnitt "Environment-Continuity-Check"
  durchführen. Unbegründete Abweichungen blockieren die Freigabe dieses
  Shots, bis sie korrigiert oder als Story-/Ortswechsel begründet sind.

## 5. Veo Feasibility

- Ist jeder Shot innerhalb der geplanten Clip-Länge realistisch (siehe
  `camera-system.md`)?
- Ist die Kamerabewegung umsetzbar?
- Gibt es zu viele Aktionen in einem Shot?

## Regel

Freigabe erst, wenn alle fünf Punkte für jeden Shot der Liste bestanden
sind. Offene Punkte (z.B. unvollständige Gesamtlänge, ungeklärte
Kontinuität zwischen Shots) blockieren die Freigabe, bis sie entschieden
sind. Diese Prüfung läuft immer vor `quality-check.md`, nie als Ersatz
dafür.
