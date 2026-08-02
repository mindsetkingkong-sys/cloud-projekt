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

## Regel

Nur **Approved**-Prompts gelten als Referenz für neue Episoden. Draft/Tested
werden nicht als Vorlage für andere Shots verwendet, bis sie selbst
Approved sind.
