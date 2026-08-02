# Nano Banana Workflow

## Phase 1 — Charakter-Referenzen vorbereiten

- Basis: `characters/leif.md` (Master Character Prompt) +
  `assets/reference_images/leif_reference_official_v1.png`.
- Daraus einmalig ein 3-Ansichten-Sheet erzeugen (Front, 3/4, Profil) und
  ebenfalls in `assets/reference_images/` ablegen.
- Dieses Sheet wird die feste Referenz für alle folgenden Keyframes — nicht
  bei jeder Episode neu erfinden.

## Phase 2 — Keyframe-Bilder erstellen

Für jeden Shot einer Episode ein einzelnes Foto-Keyframe generieren, das
bereits Pose, Ort, Licht und Handlung korrekt zeigt — Veo bekommt später nur
noch die Aufgabe, dieses Bild zu animieren.

Reihenfolge der Bildreferenzen im Prompt (explizit benennen, nicht nur
anhängen):
1. **Image 1 = Gesicht/Identität** (Front-Ansicht aus dem Sheet)
2. **Image 2 = Bart/Profil-Detail** (3/4- oder Profil-Ansicht)
3. **Image 3 = Kleidung/Ausrüstung** (Referenzbild mit vollständigem Outfit)

Umgebung und Handlung werden **nur im Text** beschrieben, nicht über ein
Referenzbild — sonst überträgt sich die alte Umgebung ungewollt auf die neue
Szene.

## Phase 3 — Konsistenz prüfen

Vor Freigabe eines Keyframes gegen `characters/leif.md` prüfen: Gesicht,
Bart, Rucksack, Axt-Anzahl, keine Mütze. Bei Abweichung: Keyframe verwerfen,
nicht in Veo weiterverwenden — ein fehlerhaftes Standbild wird durch Animation
nicht besser.

## Phase 4 — Bilder für Veo vorbereiten

- Seitenverhältnis 9:16 am Keyframe prüfen/zuschneiden.
- Bildecken auf sichtbares Wasserzeichen/Icon prüfen; falls vorhanden, Crop
  so wählen, dass es außerhalb des finalen Bildausschnitts liegt.
- Erst dann als Asset-Referenzbild in Veo verwenden (siehe
  `veo-workflow.md`).
