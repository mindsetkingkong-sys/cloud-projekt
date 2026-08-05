# Video Review Workflow

Wenn ein fertiges Video zur Analyse bereitgestellt wird: zuerst das gesamte
Video als Ganzes analysieren, danach einzelne Shots. Dieser Workflow dient
Phase 7 ("Ergebnisse analysieren und Learnings speichern") aus `../CLAUDE.md`.

Gilt unabhängig davon, wie ein einzelner Shot entstanden ist — auch ein Shot,
der außerhalb des regulären Claude-Workflows entstanden ist (z.B. manuell,
bei erschöpftem Nutzungslimit), durchläuft vor Freigabe denselben
Kontinuitäts- und Qualitätscheck wie ein regulär erstellter Shot. Keine
Ausnahme aufgrund der Entstehungsart.

**Prüfgrenzen und Unsicherheit** gelten hier verbindlich mit — einzige
Quelle dieser Regel ist `quality-check.md`, Punkt 8, hier nicht dupliziert.
Konkret betroffen: der Audio-Analyse-Lücke weiter unten in diesem Abschnitt.

## Technischer Ablauf (Video-Upload + Frame-Extraktion)

Fertige Clips können direkt als Videodatei hochgeladen werden — Frames werden
per `ffmpeg` extrahiert (Standard-Tool, lokal installiert, kein
Drittanbieter-Plugin). Praktischer Richtwert, ❓ nicht offiziell dokumentiert,
nur empirisch getestet: **~42s Upload bestätigt funktionsfähig, ~48s ist in
einem Test gescheitert** (Upload blieb im Lade-Feed hängen). Wahrscheinlich
begrenzt die Datei**größe** (abhängig von Auflösung/Bitrate), nicht die
Sekundenzahl direkt — bei längeren Episoden vorsorglich in 2 Teilen
hochladen oder Export-Bitrate in CapCut reduzieren.

Bei Videos über ~15s: Frames nicht literweise pro Sekunde extrahieren
(unnötig viele Bilder), sondern alle 3-5s oder gezielt an den bekannten
Shot-Übergängen — deckt Story-Fluss und Retention-Punkte ausreichend ab.

Audio-Spuren werden zwar technisch erkannt (Metadaten), können aber
**nicht inhaltlich analysiert werden** — kein Hör-/Transkriptions-Zugriff
verfügbar. `audio-design.md`-Konformität lässt sich damit bisher nicht
automatisiert prüfen, nur über die Beschreibung des Nutzers.

## 1. Story Review

- Ist die Geschichte verständlich?
- Gibt es einen klaren Anfang, Fortschritt und Abschluss?
- Funktioniert der Hook (siehe `story-structure.md`)?
- Bleibt eine offene Frage bestehen (Open Loop)?
- Ist der Payoff zufriedenstellend?

## 2. Character Review

Prüfe gegen den Kanon in `../characters/leif.md`:
- Gesichtskonsistenz
- Haare und Bart
- Alterseindruck (28 Jahre)
- Kleidung
- Canvas-Rucksack mit Schlafmatte
- Axt (genau eine)
- Körperproportionen

**Wichtig:** Rucksack und Axt an mindestens 3 Stellen im Clip prüfen
(Anfang/Mitte/Ende), nicht nur dort, wo ein Problem bereits gemeldet wurde
— Ausrüstung kann unbemerkt an einer anderen Stelle im Clip verschwinden
oder sich ändern.

Jede Szene mit möglicher Charakterabweichung markieren, mit Zeitstempel.

## 3. Cinematic Review

Analysiere gegen `camera-system.md` und `lighting-rules.md`:
- Kameraqualität
- Shot-Auswahl
- Bewegungen
- Perspektiven
- Licht
- Atmosphäre
- Übergänge

## 4. AI-Artefakt Review

Suche gezielt nach den Kategorien aus `negative-patterns.md`:
- Händen/Fingern
- Gesichtsveränderungen
- fließenden/schwebenden Objekten
- falscher Physik
- unnatürlichen Bewegungen
- wechselnden Details (Kleidung, Ausrüstung)
- **unerklärten Objekten** — ist jedes sichtbare Objekt im Clip durch
  Prompt-Text, Referenzbild oder eindeutig plausible natürliche Umgebung
  erklärt? Ein Objekt ohne diese Grundlage ist ein Fehler, auch wenn es
  harmlos wirkt oder später wieder verschwindet (siehe `negative-patterns.md`,
  Kategorie "Unplanned Object Generation / Scene Contamination")

## 5. Retention Review

- Erste 3 Sekunden
- Spannungsaufbau
- langweilige Stellen
- stärkste Szene
- schwächste Szene

## 6. Konkrete Verbesserungen (Ausgabeformat nach der Analyse)

1. Was funktioniert bereits?
2. Welche Shots sind problematisch?
3. Welche Shots sollten neu generiert werden?
4. Welche Prompt-Änderung würde das Problem lösen?
5. Welche Regel sollte eventuell angepasst werden?

## Bewertungssystem

| Kategorie | Skala |
|---|---|
| Story | 1-10 |
| Cinematic | 1-10 |
| Character Consistency | 1-10 |
| AI Quality | 1-10 |
| Retention | 1-10 |

## Regel

Nicht automatisch alles ändern. Erst analysieren und Verbesserungsvorschläge
geben. Änderungen am Produktionssystem (Kanon, Regeln, Prompts) nur nach
Bestätigung durch den Nutzer.
