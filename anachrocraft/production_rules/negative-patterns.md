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
- **Status: gelöst und bestätigt** (nicht mehr nur Verdacht) — die
  Gegenprobe mit korrigiertem Prompt (Grounding positiv, ausschließlich in
  Main Action, Handlung endet vor Aufprall) hat den Fehler beseitigt. Wird
  jetzt proaktiv in `quality-check.md`, Punkt 4, vor jeder Generierung
  abgefragt, statt erst nach einem Fehler reaktiv korrigiert zu werden.

## Objekt-Kontinuität/Persistenz
Gilt für **jedes** physische Objekt in der Szene, nicht nur Leifs eigene
Ausrüstung (siehe dazu auch "Charakter" oben) — z.B. Äste, Werkzeug,
zukünftiges Baumaterial.
- **Objekte verschwinden, nachdem sie abgelegt/fallen gelassen wurden** —
  ein abgelegtes Objekt muss sichtbar irgendwo liegen bleiben oder die Szene
  nachvollziehbar verlassen, nicht einfach nicht mehr existieren
- **Objekte ändern Form/Größe ohne Grund** — z.B. ein Ast, der zwischen
  Frames dicker/länger/anders geformt wird
- **Objekte teleportieren zwischen Positionen** — Sprung an einen anderen
  Ort im Bild ohne nachvollziehbare Bewegung dazwischen
- **Requisiten erscheinen/verschwinden zwischen Frames** — z.B. ein
  Asthaufen, der nicht im Prompt vorgesehen war und trotzdem auftaucht
  (siehe `episodes/episode-02-unterstand.md`, Shot 5)

**Prüfen (vor Freigabe eines Videos):**
- Hat jedes physische Objekt eine durchgehende Existenz über den ganzen Clip?
- Bleiben in der Hand gehaltene Objekte konsistent, bis sie erkennbar
  losgelassen werden?
- Landen fallen gelassene/abgelegte Objekte sichtbar irgendwo, statt zu
  verschwinden?

## Unplanned Object Generation / Scene Contamination
Eigene Unterkategorie, weil dieser Fehler zeitlich vor der Objekt-Kontinuität
ansetzt: nicht "ändert sich ein bekanntes Objekt falsch", sondern "erzeugt
Veo ein Objekt, das nirgends angefordert war".
- **Veo erzeugt ein Objekt ohne Grundlage** — taucht weder im Prompt-Text,
  im Referenzbild noch als plausibler Bestandteil der natürlichen Umgebung
  auf (z.B. ein einzelner Stock/Ast, der einfach im Bild erscheint, ohne
  dass er Teil der beschriebenen Szene war)
- **Das unangeforderte Objekt verschwindet später wieder** — bestätigt, dass
  es kein bewusst generiertes Umgebungsdetail war, sondern ein Fehler
  (Fund aus `episodes/episode-02-unterstand.md`, Shot 6)
- **Prüfen (Video-Review, nach der Generierung):** ist jedes sichtbare
  Objekt im fertigen Clip durch mindestens eine Quelle erklärt — Prompt-Text,
  Referenzbild, oder eindeutig plausible natürliche Umgebung (z.B. normale
  Waldboden-Streuung, die nicht einzeln benannt werden muss)? Ein Objekt, das
  keiner dieser drei Quellen zuzuordnen ist, gilt als Fehler, unabhängig
  davon, ob es "harmlos" aussieht.

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
