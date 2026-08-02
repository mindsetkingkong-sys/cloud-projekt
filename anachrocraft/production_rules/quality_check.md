# Quality Check — vor jedem finalen Prompt

Diese Checkliste läuft **vor** dem Absenden eines Prompts an Nano Banana oder
Veo, nicht erst nach der Generierung. Ziel: Fehler vorher abfangen, nicht
hinterher reparieren.

## 1. Charakter-Kontinuität
- [ ] Stimmt der Prompt mit dem Master Character Prompt aus `characters/leif.md` überein (nicht aus dem Gedächtnis umformuliert)?
- [ ] Wird das Referenzbild (bzw. das 3-Ansichten-Sheet) tatsächlich als Bild-Input mitgegeben, nicht nur in Textform beschrieben?

## 2. Kleidung/Körper/Equipment-Kontrolle
- [ ] Rucksack = Canvas mit Schlafmatte (keine andere Variante)?
- [ ] Genau eine Axt, keine zweite?
- [ ] Keine Mütze/Beanie?
- [ ] Kleidungszustand passt zum aktuellen Story-Zeitpunkt (siehe `continuity_rules.md`)?

## 3. Kamera-Logik
- [ ] Einstellungsgröße explizit benannt (wide/close-up/...), nicht nur eine mm-Zahl?
- [ ] Kamerabewegung explizit benannt (static/tracking/slow pan/dolly)?
- [ ] Genau eine Kamera, ein Shot — kein Schnitt/Perspektivwechsel innerhalb des Prompts?

## 4. Physik-Prüfung
- [ ] Nur eine Handlung im Prompt (kein "läuft, schaut, hebt auf, dreht sich")?
- [ ] Ist die beschriebene Handlung in der gewählten Clip-Länge plausibel machbar (siehe Clip-Längen-Tabelle in `camera-system.md`)?

## 5. Artefakt-Risiken
- [ ] Bildausschnitt so gewählt, dass ein mögliches Wasserzeichen/Icon in der Ecke nicht mitten im relevanten Bildbereich landet?
- [ ] Prompt enthält keine Formulierung, die zu bekannten Fehlermustern führt (siehe `negative_patterns.md`)?

## 6. Veo 3.1 Eignungsprüfung
- [ ] Clip-Länge liegt bei 4, 6 oder 8 Sekunden (keine anderen Werte anfragen)?
- [ ] Kein Timestamp-Multi-Beat für Story-Shots (verworfen, siehe `negative_patterns.md`)?
- [ ] Seitenverhältnis 9:16 explizit gesetzt?

**Regel:** Wenn ein Punkt nicht erfüllt ist, wird der Prompt korrigiert, bevor
generiert wird — nicht danach in der Nachbearbeitung "repariert".
