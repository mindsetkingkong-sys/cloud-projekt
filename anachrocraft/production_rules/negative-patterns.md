# Negative Patterns

Keine lange generische Negativ-Prompt-Liste. Stattdessen: eine Fehler-Datenbank
nach Kategorie, auf die beim Prüfen eines generierten Shots konkret geachtet
wird (siehe `quality-check.md`, Punkt 5).

## Charakter
- **Gesicht verändert sich** — Gesichtszüge weichen vom Referenzbild/-sheet ab
- **Kleidung wechselt ohne Erklärung** — Farbe/Schnitt weicht vom Master-Prompt
  ab (auch Details wie Knopfanzahl, Ärmelstand); eine Änderung ist nur gültig,
  wenn sie als bewusste Story-Entwicklung im Kanon dokumentiert ist (siehe
  `../characters/leif.md`)
- **Ausrüstung verschwindet oder erscheint ohne Ursache** — Rucksack oder Axt
  fehlen, ändern sich gegenüber dem Kanon (auch: zweite Axt statt einer), oder
  es taucht ein zusätzlicher Gegenstand ohne erklärten Grund auf

## Physik
- **Hände falsch** — zusätzliche Finger/falsche Handanatomie, besonders bei
  Nahaufnahmen von Händen prüfen (Detail-Shots)
- **Objekte schweben** — Rucksackriemen, Axt oder Kleidungsstücke, die
  physikalisch nicht korrekt am Körper anliegen
- **Bewegungen unrealistisch** — passen nicht zur beschriebenen Handlung
  (z.B. Gehen ohne Beinbewegung, Feuer ohne Rauchrichtung passend zum Wind)

## Impact-/Materialphysik
- **Charakter "schwebt"/rutscht statt sich mit Körpergewicht zu bewegen** —
  besonders bei fixierter Position (z.B. kniend, "Static" Kamera) kombiniert
  mit einer kraftvollen Handlung (Schlag, Stoß); das Modell kann den
  impliziten Rückstoß/die Gewichtsverlagerung nicht isoliert in Armen/
  Schultern darstellen und verschiebt stattdessen den ganzen Körper
- **Aufprall auf Widerstand + Materialverformung** — Klinge trifft Holz,
  Holz bricht/splittert: hohe Fehleranfälligkeit, wenn in einem Clip mit
  strikter Positionsanforderung gezeigt. Empfehlung: Shot vor dem
  eigentlichen Aufprall/Bruch enden lassen, statt ihn vollständig zu zeigen
  (siehe `veo-workflow.md`, Positions-/Grounding-Regel)

## Kamera
- **Unlogische Perspektiven** — Blickwinkel passt nicht zur beschriebenen
  Szene/Position
- **Unmögliche Bewegungen** — Kamera bewegt sich anders als im Prompt
  angegeben, oder wechselt mitten im Clip die Perspektive

## Sonstiges
- **Zufällige Personen im Hintergrund** — Leif soll allein sein; jede
  zusätzliche Person im Bild ist ein Fehler, kein "netter Zufall"
- **Timestamp-Multi-Beat innerhalb eines Clips** — bewusst verworfener Ansatz
  (erhöht alle oben genannten Risiken), nicht erneut versuchen
