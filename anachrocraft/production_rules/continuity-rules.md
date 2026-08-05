# Continuity Rules

Ziel: Keine zufälligen Änderungen zwischen Shots derselben Szene/Episode.
Jeder Shot wird unabhängig generiert — Kontinuität entsteht nur, wenn sie
explizit in jedem Prompt wiederholt wird, nicht von selbst.

## Tageszeit
Pro Episode (oder Szenenblock innerhalb einer Episode) wird die Tageszeit
**einmal festgelegt** und in jedem Shot-Prompt dieser Episode wortgleich
wiederholt (z.B. "early morning, low sun"). Nicht pro Shot neu erfinden.

## Wetter
Gleiche Regel wie Tageszeit: einmal pro Episode fixieren (z.B. "overcast,
light mist"), in allen Shots dieser Episode identisch übernehmen.

## Lichtstimmung
Sonnenrichtung und Farbtemperatur werden als Teil des Tageszeit-Werts mit
festgelegt (siehe `lighting-rules.md` für Details) — nicht als separate,
möglicherweise widersprüchliche Angabe.

## Umgebung
Wiederkehrende Orte (Fluss, Lagerfeuerstelle, Hütten-Baustelle) bekommen eine
kurze, feste Beschreibung, die bei jedem Auftreten identisch verwendet wird
(z.B. immer "moss-covered ground, lichen-covered pine trunks" für den
Hauptwald). Bei Fortschritt der Hütte: neue Beschreibung als neue,
versionierte Variante anlegen (v1 Fundament, v2 Wände, ...), alte Version
nicht überschreiben.

**Konkretisierung (aus Praxisfehler, Episode 2 Shot 7/8):** bei Bau-Fortschritt
reicht "neue Version" nicht als Beschreibung — die **Menge/Dichte** der
sichtbaren Baumaterialien muss explizit beziffert werden (z.B. "only 3-4
branches placed, sparse" vs. "dense, fully woven frame"), sonst zeigen
aufeinanderfolgende Shots zufällig ähnlich viel Fortschritt statt einer
erkennbaren Steigerung.

### Environment-Continuity-Check (verbindlich, einzige Quelle dieser Regel)

Bevor die Environment-Beschreibung eines Shots festgeschrieben wird: mit dem
**unmittelbar vorherigen Shot derselben Location** abgleichen, mindestens in
diesen sechs Dimensionen:

1. Bodentyp
2. Vegetation
3. markante Objekte
4. Wetter
5. Licht/Tageszeit
6. Geländeform

Eine Abweichung in einer dieser Dimensionen gegenüber dem vorherigen Shot
derselben Location ist nur zulässig, wenn sie durch die Story (z.B. Zeitsprung,
siehe `lighting-rules.md`) oder einen tatsächlichen Ortswechsel begründet ist
— nicht als unbemerkte Nebenfolge einer neu formulierten Environment-Zeile.
Findet dieser Vergleich nicht statt, ist das genau der Fehlertyp aus
`negative-patterns.md` (Boden-Typ-Bruch, Episode 2 Shot 6), der so verhindert
werden soll.

**Prüfzeitpunkt:** wird während `shot-approval.md`, Punkt 4 ("Visual
Continuity") durchgeführt — dort verbindlich verankert, hier nicht
dupliziert wiederholt.

## Verletzungen / Schmutz / Kleidungszustand
Der Zustand von Leif (sauber vs. verschmutzt, unverletzt vs. verletzt,
Kleidung intakt vs. abgenutzt) ist Teil des Story-Fortschritts und muss
explizit im Prompt stehen, sobald er sich ändert — sonst fällt das Modell auf
den "sauberen" Standardzustand aus dem Master-Prompt zurück. Beispiel: nach
einem Sturm-Ereignis (Akt 3) explizit "mud-streaked clothing, small cut above
left eyebrow" ergänzen, bis die Story diesen Zustand wieder auflöst.

## Position von Gegenständen
Axt, Rucksack und alle wiederkehrenden Objekte behalten ihre in
`characters/leif.md` festgelegte Position/Handhabung, außer der Shot
beschreibt explizit eine andere Handlung damit (z.B. "places the axe against
a tree trunk"). Ohne explizite Anweisung gilt der Standardzustand aus dem
Master-Prompt.
