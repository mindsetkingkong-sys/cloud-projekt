# Video Review Workflow

Wenn ein fertiges Video zur Analyse bereitgestellt wird: zuerst das gesamte
Video als Ganzes analysieren, danach einzelne Shots. Dieser Workflow dient
Phase 7 ("Ergebnisse analysieren und Learnings speichern") aus `../CLAUDE.md`.

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
