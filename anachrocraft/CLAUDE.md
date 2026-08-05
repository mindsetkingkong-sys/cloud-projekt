# AnachroCraft — AI Cinematic Production System

Dieses Verzeichnis ist ein eigenständiges Content-Produktionssystem, unabhängig vom
Grilluxe-Küchenkonfigurator im Rest dieses Repos. Es dient der Produktion einer
seriellen, KI-generierten Video-Serie um den Charakter **Leif**.

## Projekt-Kurzfassung

Leif ist ein Skandinavier, der sich von Grund auf ein Leben in der Wildnis aufbaut.
Die Serie erzählt seine Geschichte über 30-60 Episoden hinweg, photorealistisch,
ohne Dialog/Worte (nur Ambient-Sound und Musik), veröffentlicht auf TikTok,
Instagram Reels und YouTube Shorts.

Ziel: Zuschauer sollen dem Fortschritt einer echten Baustelle/eines echten Lebens
folgen wollen — Serialisierung über Fortschritt und Cliffhanger, nicht über
Einzel-Pointen.

## Ordnerstruktur

- `characters/` — Charakter-Bibeln (Aussehen, Master-Prompts, Referenzbild-Regeln)
- `production_rules/` — feste technische und kreative Produktionsregeln:
  `camera-system.md`, `nano-banana-workflow.md`, `veo-workflow.md`,
  `capacity-and-cadence.md`, `story-structure.md`, `video-review-workflow.md`,
  `audio-design.md`, `prompt-versioning.md`, `shot-approval.md`,
  `quality-check.md`, `continuity-rules.md`, `lighting-rules.md`,
  `negative-patterns.md`, `channel-strategy.md`, `compliance.md`
- `shot_library/` — bewährte, wiederverwendbare Kamera-Shot-Vorlagen
- `episodes/` — Shot-Listen pro Episode
- `assets/reference_images/` — kanonische Referenzbilder für Charakterkonsistenz

## Workflow (11 Phasen)

1. **Story analysieren** — Bogen/Kontext aus `production_rules/story-structure.md`.
2. **Episode planen** — als Datei in `episodes/` anlegen, nach dem Muster von
   `episodes/episode-01-ankunft.md`.
3. **Shot-Liste erstellen** — Shot-Größen/Kamerabewegungen/Perspektive aus
   `production_rules/camera-system.md`.
4. **Shot-Freigabe** — gesamte Shot-Liste gegen
   `production_rules/shot-approval.md` prüfen, bevor Bildreferenzen oder
   Prompts entstehen.
5. **Bildreferenzen vorbereiten** — Keyframes über
   `production_rules/nano-banana-workflow.md`, nie direktes Text-zu-Video ohne
   Bild-Zwischenschritt.
6. **Quality Check** — jeder geplante Prompt durchläuft
   `production_rules/quality-check.md`, **bevor** er als finaler Veo-Prompt
   geschrieben und generiert wird.
7. **Veo-Prompts erstellen** — nach `production_rules/veo-workflow.md`. Nutze
   kurze Veo-Clips entsprechend den verfügbaren Einstellungen. Plane jede
   Szene so, dass sie innerhalb eines einzelnen Clips verständlich und
   visuell umsetzbar ist.
8. **Video generieren** — erst nachdem Phasen 4 und 6 bestanden sind. Nach
   Freigabe jedes Shots: Produktionsstand in der Episoden-Datei
   dokumentieren (verpflichtender Schritt 7 in
   `production_rules/veo-workflow.md`s Ablauf) — ein Shot gilt erst als
   abgeschlossen, wenn das erfolgt ist.
9. **Schnitt & Audio** — Zusammenschnitt in CapCut, Sounddesign nach
   `production_rules/audio-design.md`, Ergebnis ist ein fertiges Episoden-Video.
10. **Ergebnisse analysieren und Learnings speichern** — fertiges Video nach
    `production_rules/video-review-workflow.md` prüfen; neue Erkenntnisse
    (z.B. neue Fehlermuster, Kanon-Korrekturen) werden in der passenden
    `production_rules/`-Datei nachgetragen, nicht nur im Gespräch belassen.
11. **Produktionswissen sichern** — erfolgreiche Prompts nach
    `production_rules/prompt-versioning.md` als "Approved" dokumentieren,
    Audio-Learnings nach `production_rules/audio-design.md` festhalten;
    beides steht künftigen Episoden als Referenz zur Verfügung.

**Regel:** Niemals direkt fertige Prompts erstellen oder generieren, ohne
vorher Story, Shot-Liste, Shot-Freigabe (Phase 4) und Quality Check (Phase 6)
durchlaufen zu haben.

Kontingent-Entscheidungen (was wird neu generiert vs. aus dem B-Roll-Pool
wiederverwendet) richten sich nach `production_rules/capacity-and-cadence.md`.

## Verifikationsstand (wichtig für Vertrauenswürdigkeit)

Technische Aussagen zu Nano Banana Pro / Veo 3.1 in diesem System sind wie folgt
gekennzeichnet:
- ✅ **belegt** — gegen offizielle Google-Dokumentation geprüft
- ⚠️ **Konvention** — Fotografie-/Prompt-Engineering-Standard, nicht
  tool-spezifisch verifiziert
- ❓ **unklar** — muss in der Praxis (Nano Banana/Veo direkt) getestet werden

Diese Kennzeichnung steht direkt in den jeweiligen Regel-Dateien und sollte bei
jeder Ergänzung beibehalten werden.

## Nicht-Ziele

- Keine Produktion über Higgsfield (bewusste Entscheidung des Nutzers, aus
  Kontingent-/Kostengründen).
- Kein automatisiertes Publishing (Stand jetzt) — Veröffentlichung erfolgt
  manuell durch den Nutzer, nach eigener Qualitätskontrolle.
- Schnitt erfolgt in CapCut durch den Nutzer selbst; dieses System liefert
  Schnittlisten/Shot-Reihenfolgen, keine automatisierte Schnitt-Steuerung.
