# Negative Patterns

Keine lange generische Negativ-Prompt-Liste. Stattdessen: typische Fehler,
auf die beim Prüfen eines generierten Shots konkret geachtet wird (siehe
`quality_check.md`, Punkt 5).

- **Wechselndes Gesicht** — Gesichtszüge weichen vom Referenzbild/-sheet ab
- **Andere Kleidung** — Farbe/Schnitt weicht vom Master-Prompt ab (auch
  Details wie Knopfanzahl, Ärmelstand)
- **Zusätzliche Finger / falsche Handanatomie** — bei Nahaufnahmen von Händen
  besonders prüfen (Detail-Shots)
- **Schwebende Objekte** — Rucksackriemen, Axt oder Kleidungsstücke, die
  physikalisch nicht korrekt am Körper anliegen
- **Unlogische Physik** — Bewegungen, die nicht zur beschriebenen Handlung
  passen (z.B. Gehen ohne Beinbewegung, Feuer ohne Rauchrichtung passend zum
  Wind)
- **Falsche Kamerabewegungen** — Kamera bewegt sich anders als im Prompt
  angegeben, oder wechselt mitten im Clip die Perspektive
- **Zufällige Personen im Hintergrund** — Leif soll allein sein; jede
  zusätzliche Person im Bild ist ein Fehler, kein "netter Zufall"
- **Timestamp-Multi-Beat innerhalb eines Clips** — bewusst verworfener Ansatz
  (erhöht alle oben genannten Risiken), nicht erneut versuchen
