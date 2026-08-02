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
- `production_rules/` — feste technische und kreative Produktionsregeln
  (Kamera-System, Nano-Banana-Workflow, Veo-Workflow, Kapazitäts-/Kadenz-Strategie,
  Story-Struktur)
- `shot_library/` — bewährte, wiederverwendbare Kamera-Shot-Vorlagen
- `episodes/` — Shot-Listen pro Episode
- `assets/reference_images/` — kanonische Referenzbilder für Charakterkonsistenz

## Workflow (6 Phasen)

1. **Story analysieren** — Bogen/Kontext aus `production_rules/story-structure.md`.
2. **Episode planen** — als Datei in `episodes/` anlegen, nach dem Muster von
   `episodes/episode-01-ankunft.md`.
3. **Shot-Liste erstellen** — Shot-Größen/Kamerabewegungen/Perspektive aus
   `production_rules/camera-system.md`.
4. **Bildreferenzen vorbereiten** — Keyframes über
   `production_rules/nano-banana-workflow.md`, nie direktes Text-zu-Video ohne
   Bild-Zwischenschritt.
5. **Veo-Prompts erstellen** — nach `production_rules/veo-workflow.md`. Nutze
   kurze Veo-Clips entsprechend den verfügbaren Einstellungen. Plane jede
   Szene so, dass sie innerhalb eines einzelnen Clips verständlich und
   visuell umsetzbar ist.
6. **Quality Check** — jeder Shot durchläuft `production_rules/quality-check.md`
   vor Freigabe.
7. **Ergebnisse analysieren und Learnings speichern** — neue Erkenntnisse
   (z.B. neue Fehlermuster, Kanon-Korrekturen) werden in der passenden
   `production_rules/`-Datei nachgetragen, nicht nur im Gespräch belassen.

**Regel:** Niemals direkt fertige Prompts erstellen, ohne vorher Story, Shot
und Konsistenz zu prüfen (Phasen 1-3 vor Phase 5).

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
