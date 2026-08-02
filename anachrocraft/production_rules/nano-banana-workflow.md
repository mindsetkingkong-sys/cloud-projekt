# Nano Banana Workflow

## Asset-Reihenfolge (verbindlich für alle Referenzbilder)

1. Asset generieren
2. Asset prüfen
3. Asset freigeben
4. Erst danach Dokumentation aktualisieren und verlinken

Ein Plan-Dokument für ein noch nicht existierendes Asset ist erlaubt, muss
aber eindeutig als "STATUS: GEPLANT — Bild existiert noch nicht" markiert
sein und darf nirgends verlinkt werden, bis Schritt 3 abgeschlossen ist.

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

Wenn mehrere Referenzbilder verwendet werden, muss **jedes Bild eine klare
Rolle erhalten** (explizit im Prompt benennen, nicht nur anhängen) — welche
Rollen genutzt werden, hängt vom Shot ab, nicht fix vorgeschrieben. Typisches
Muster für Leif:
- **Image 1 = Gesichtsidentität** (Front-Ansicht aus dem Charaktersheet)
- **Image 2 = Kleidung oder Ausrüstung** (z.B. Rucksack/Axt-Detail)
- **Image 3 = Stil** (Farbgrading/Look-Referenz, falls für den Shot relevant)

Je nach Bedarf können auch nur zwei Bilder mit Rollen (z.B. Gesicht +
Kleidung) genügen — entscheidend ist die klare Rollenzuweisung, nicht die
exakte Anzahl oder Reihenfolge.

**Priorität, welche Information bei Konflikt zwischen Referenzbildern gewinnt:**
1. Charakteridentität
2. Kleidung/Ausrüstung
3. Stil

(Umgebung steht bewusst nicht in dieser Liste — sie wird ausschließlich über
Text definiert, siehe unten, nicht über ein Bild.)

Umgebung und Handlung werden **nur im Text** beschrieben, nicht über ein
Referenzbild — sonst überträgt sich die alte Umgebung ungewollt auf die neue
Szene. Ausnahme: eine bereits bestätigte, wiederkehrende Location soll exakt
reproduziert werden — dann darf ein bestehendes Keyframe dieser Location
zusätzlich als Bild-Referenz dienen, mit klarer Rollenbenennung ("Image X =
Ortsreferenz, exakte Wiederverwendung").

## Phase 3 — Konsistenz prüfen

Vor Freigabe eines Keyframes gegen `characters/leif.md` prüfen: Gesicht,
Bart, Rucksack, Axt-Anzahl, keine Mütze. Bei Abweichung: Keyframe verwerfen,
nicht in Veo weiterverwenden — ein fehlerhaftes Standbild wird durch Animation
nicht besser.

## Phase 4 — Bilder für Veo vorbereiten

- Seitenverhältnis 9:16 am Keyframe prüfen/zuschneiden.
- Sichtbares Wasserzeichen/Icon (Gemini-Sparkle) ist aktuell technisch nicht
  zuverlässig vermeidbar und tritt bei praktisch jeder Generierung auf,
  wechselnd in Position. Nur croppen, wenn es in leerem Hintergrund landet
  und dabei kein relevanter Bildinhalt verloren geht — landet es auf
  Kleidung/Haut/Motiv, akzeptieren statt Bildausschnitt zu opfern oder neu
  zu generieren (siehe `veo-workflow.md`, Abschnitt "Wann ein Shot neu
  generiert werden muss").
- Erst dann als Asset-Referenzbild in Veo verwenden (siehe
  `veo-workflow.md`).
