# Continuity Rules

Ziel: Keine zufälligen Änderungen zwischen Shots derselben Szene/Episode.
Jeder Shot wird unabhängig generiert — Kontinuität entsteht nur, wenn sie
explizit in jedem Prompt wiederholt wird, nicht von selbst.

## Tageszeit
Definition und Festlegung des Werts: siehe `lighting-rules.md`, Abschnitt
"Tageszeit". Kontinuitäts-Pflicht (Aufgabe dieser Datei): der einmal
festgelegte Wert wird in jedem Shot-Prompt derselben Episode wortgleich
wiederholt, nicht pro Shot neu erfunden.

## Wetter
Gleiche Kontinuitäts-Pflicht wie Tageszeit: Definition siehe
`lighting-rules.md`, Abschnitt "Wetter"; einmal pro Episode fixiert, in
allen Shots dieser Episode identisch übernommen.

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

**Konkretisierung (aus Praxisfehler, Episode 2 Shot 6/7/8):** bei
Bau-Fortschritt reicht "neue Version" nicht als Beschreibung — die
**Menge/Dichte** der sichtbaren Baumaterialien muss explizit beziffert
werden (z.B. "only 3-4 branches placed, sparse" vs. "dense, fully woven
frame"). Mengenangaben dienen dabei nur als Orientierung für das Modell —
das eigentliche Ziel ist, dass der Baufortschritt für den Zuschauer **auf
den ersten Blick eindeutig erkennbar** ist, ohne die Shot-Beschreibung zu
kennen.

Baufortschritt und Lichtentwicklung müssen bei aufeinanderfolgenden Shots
**gemeinsam** geprüft werden, nicht getrennt — ein mittlerer Shot darf
weder den Bauzustand noch die Lichtstimmung des nachfolgenden Shots
vorwegnehmen (Fund: Shot 7 zeigte sowohl Baufortschritt als auch
Lichtstimmung fast auf Shot-8-Niveau, obwohl er direkt nach Shot 6 spielt
und damit klar davor liegen muss). Die Helligkeit/Farbstimmung muss ebenso
logisch zwischen dem vorherigen und dem folgenden Shot liegen wie der
Bauzustand.

**Prüffrage vor Freigabe (Teil dieser Regel, in `quality-check.md`
anzuwenden):** Würde ein Zuschauer allein anhand der Bilder die Reihenfolge
der Shots (z.B. Shot 6 → Shot 7 → Shot 8) korrekt erkennen — sowohl am
Baufortschritt als auch an der Lichtstimmung? Falls nicht eindeutig: der
Shot gilt als nicht freigabereif.

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
