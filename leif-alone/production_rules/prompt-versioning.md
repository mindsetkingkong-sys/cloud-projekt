# Prompt Versioning System

Ziel: erfolgreiche Prompts nachvollziehbar speichern und verbessern, statt
sie nach Gebrauch zu verlieren. Erfolgreiche Prompts dienen später als
Referenz für neue Episoden (vergleichbar mit `shot_library/cinematic-shots.md`
auf Kamera-Ebene, hier auf Prompt-Ebene).

## ID-Schema

Jeder finale Prompt erhält eine ID aus Episode, Shot-Nummer und Version:

```
Episode01_Shot03_V1
```

Zusätzlich pro Prompt festgehalten:
- Datum
- Status

## Status-Werte

- **Draft** — Prompt geschrieben, noch nicht getestet
- **Tested** — mindestens einmal generiert, Ergebnis liegt vor
- **Approved** — besteht `quality-check.md` und `video-review-workflow.md`,
  freigegeben für den Schnitt
- **Archived** — durch neuere Version ersetzt, bleibt als Nachvollzug
  erhalten (nicht löschen)

## Bei Änderungen dokumentieren

Für jede neue Version eines Prompts:
- Was wurde geändert?
- Warum wurde es geändert?
- Welches Problem wurde gelöst?
- Ergebnis nach Test

## Ablage

Versionierte Prompts werden direkt in der jeweiligen Episoden-Datei
(`episodes/episode-XX-*.md`) unter einem Abschnitt "Finale Prompts" mit der
ID-Schreibweise oben dokumentiert — kein separater Speicherort, damit Shot,
Prüfung und Prompt-Historie an einer Stelle bleiben.

**Zeitpunkt:** dieser Abschnitt wird erst ergänzt, wenn die Episode
**vollständig produziert** ist (alle Shots laut Produktionsstand-Tabelle,
siehe `veo-workflow.md` Schritt 7, auf "Final"/bestanden stehen) — nicht
schon nach jedem einzelnen Shot, damit dort nicht wechselnde
Zwischenversionen aus laufender Iteration landen. Dokumentiert werden nur
die tatsächlich finalen, freigegebenen Prompt-Fassungen jedes Shots.

## Regel

Nur **Approved**-Prompts gelten als Referenz für neue Episoden. Draft/Tested
werden nicht als Vorlage für andere Shots verwendet, bis sie selbst
Approved sind.

## Approved Shot Protection

Setzt voraus, dass der Shot bereits die harten Kriterien aus
`veo-workflow.md`, Abschnitt "Wann ein Shot neu generiert werden muss"
bestanden hat (Ausrüstung, Licht/Tageszeit, Handlung, Physik) — diese Liste
hier ist die zusätzliche, strengere Schwelle **nach** der Freigabe, nicht
ein Ersatz dafür.

Sobald ein Shot alle vier Kriterien besteht —
- Charakterkonsistenz
- Bewegungsqualität
- Szenenlogik
- Timing

— gilt er als **bevorzugte Fassung** und bekommt Bestandsschutz.

**Nicht neu generieren wegen kleiner visueller Artefakte** (z.B. ein
einzelnes unerklärtes Nebenobjekt in einem Frame ohne Story-Relevanz, siehe
`negative-patterns.md`). **Nur neu generieren, wenn der Fehler die
Story-Logik oder die Zuschauerwahrnehmung tatsächlich beschädigt** — nicht
bei jeder Abweichung, die bei genauem Hinsehen auffällt.

Ein missglückter Regenerierungsversuch verdrängt niemals automatisch eine
bereits Approved-Fassung — die letzte erfolgreiche Version bleibt gültig,
bis eine nachweislich bessere sie ersetzt (nicht nur eine andere).
