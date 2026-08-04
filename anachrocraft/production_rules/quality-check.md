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
- [ ] Kleidungszustand passt zum aktuellen Story-Zeitpunkt (siehe `continuity-rules.md`)?
- [ ] **Bei fertigen Videos:** Rucksack und Axt an mindestens 3 Stellen im Clip geprüft (Anfang/Mitte/Ende), nicht nur an der Stelle des ursprünglich gemeldeten Problems — Ausrüstung kann irgendwo im Clip verschwinden, ohne dass der Rest auffällig wirkt.

## 3. Kamera-Logik
- [ ] Einstellungsgröße explizit benannt (wide/close-up/...), nicht nur eine mm-Zahl?
- [ ] Kamerabewegung explizit benannt (static/tracking/slow pan/dolly)?
- [ ] Genau eine Kamera, ein Shot — kein Schnitt/Perspektivwechsel innerhalb des Prompts?

## 4. Physik-Prüfung
- [ ] Eine dominante Hauptaktion im Prompt? Kleine natürliche Nebenbewegungen/Reaktionen sind erlaubt (z.B. "läuft, bleibt stehen, schaut sich um"), mehrere unabhängige Handlungen/Ortswechsel (z.B. "läuft, baut Hütte, kämpft, findet Gegenstand, wechselt Ort") nicht.
- [ ] Ist die beschriebene Hauptaktion in der gewählten Clip-Länge plausibel machbar (siehe Clip-Längen-Tabelle in `camera-system.md`)?
- [ ] **Kombiniert der Shot eine fixierte Körperposition (kniend, sitzend, "Static"-Kamera) mit einer kraftvollen/stoßhaften Handlung (Schlag, Stoß, Aufprall)?** Falls ja, verbindlich: Grounding-Anweisung positiv formuliert ausschließlich in Main Action (nie in Camera Movement), und die Handlung endet vor dem eigentlichen Aufprall/Materialbruch, nicht danach (siehe `veo-workflow.md`, Abschnitt "Positions-/Grounding-Anweisungen", und `negative-patterns.md`, Kategorie "Impact-/Materialphysik"). Ursache: das Modell kann den impliziten Rückstoß einer Kraftbewegung nicht isoliert in Armen/Schultern darstellen, wenn der Rest des Körpers als bewegungslos vorgegeben ist, und verschiebt stattdessen den ganzen Körper ("Schweben"/Rutschen).

## 5. Artefakt-Risiken
- [ ] Falls das Gemini-Wasserzeichen im leeren Hintergrund landet: gecropt? (Landet es auf Kleidung/Haut/Motiv, wird es akzeptiert, kein Regenerierungsgrund — siehe `veo-workflow.md`.)
- [ ] Prompt enthält keine Formulierung, die zu bekannten Fehlermustern führt (siehe `negative-patterns.md`)?
- [ ] **Objekt-Kontinuität:** enthält die Umgebungsbeschreibung nur Objekte, die tatsächlich im Prompt vorgesehen sind (kein unbeabsichtigter Requisiten-Zuwachs wie z.B. ein nicht angeforderter Asthaufen)? Bei mehreren losen/ähnlichen Objekten in einer Szene (Äste, Werkzeug) explizit "no other [Objekt] nearby" ergänzen (siehe `negative-patterns.md`, Kategorie "Objekt-Kontinuität/Persistenz").

## 6. Veo 3.1 Eignungsprüfung
- [ ] Clip-Länge entspricht den aktuell verfügbaren Einstellungen und ist so gewählt, dass die Szene innerhalb dieses einen Clips verständlich und visuell umsetzbar ist?
- [ ] Kein Timestamp-Multi-Beat für Story-Shots (verworfen, siehe `negative-patterns.md`)?
- [ ] Seitenverhältnis 9:16 explizit gesetzt?

## 7. Story-Zweck
- [ ] Warum existiert dieser Shot?
- [ ] Bringt er die Handlung weiter?
- [ ] Erzeugt er Interesse oder Emotion?

Ein visuell schöner Shot ohne Story-Funktion wird verbessert oder entfernt,
nicht allein wegen guter Optik behalten.

**Regel:** Wenn ein Punkt nicht erfüllt ist, wird der Prompt korrigiert, bevor
generiert wird — nicht danach in der Nachbearbeitung "repariert".
