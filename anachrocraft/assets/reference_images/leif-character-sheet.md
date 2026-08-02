# Leif Character Sheet — Generierungsplan

**STATUS: APPROVED.** Bild generiert, geprüft, Wasserzeichen zugeschnitten,
freigegeben als Master Reference Asset: `leif_character_sheet_v1.jpeg`.
Verlinkt in `../../characters/leif.md`.

Ziel: eine konsistente visuelle Referenz für Nano Banana und Veo. Basis:
Master Character Prompt aus `../../characters/leif.md` +
`leif_reference_official_v1.png` als Identitäts-Anker (Image 1 im
Generierungs-Prompt).

**Fixe Rahmenbedingungen für alle drei Ansichten (identisch, damit die
Panels konsistent zueinander sind):**
- gleiche neutrale Pose (Arme entspannt am Körper), nur um jeweils 90°
  gedreht
- gleicher Hintergrund: neutrale Waldlichtung, bewölkt-diffuses Tageslicht
- gleicher Abstand/Bildausschnitt (ganze Figur, Kopf bis Fuß) in allen drei
  Panels
- Axt durchgehend in derselben Hand (rechte Hand — hier erstmals fixiert,
  da `characters/leif.md` nur "in der Hand getragen" sagt, ohne Seite;
  diese Festlegung gilt ab jetzt als Teil des Kanons für alle drei Panels)

## 1. Front View

- **Gesicht:** direkter Blick in die Kamera, neutraler Ausdruck; markantes
  Kinn, wettergegerbte Haut, ausgeprägte Brauen, eisblau-graue Augen
- **Haare:** schulterlang, glatt, dunkelblond, mittig gescheitelt, offen
- **Bart:** voll, mittellang, dunkelblond mit leichten grauen Strähnen am
  Kinn
- **Kleidung:** rot-schwarzes Buffalo-Check-Flanellhemd (obere Knöpfe
  offen), dunkles Thermo-Unterhemd am Kragen sichtbar, oliv-brauner
  Cargo-Hose, braune Leder-Schnürstiefel
- **Ausrüstung:** Rucksackträger über beiden Schultern von vorne sichtbar,
  Axt in der rechten Hand, Griff nach unten

## 2. Side Profile

- **Gesichtsprofil:** 90°-Seitenansicht — Kinnlinie, Nase, Braue, Bartform
  von der Seite
- **Haarlänge:** schulterlanges Haar hängt natürlich in dieser Ansicht
- **Bartform:** Bart-Silhouette von der Seite, gleiche Länge/Form wie
  Front View
- **Körperhaltung:** identische Pose wie Front View, nur um 90° gedreht
- **Rucksack-Silhouette:** Canvas-Rucksack mit Schlafmatte oben drauf, aus
  dieser Ansicht am besten erkennbare Gesamtform (Referenz für Größe/Form)

## 3. Back View

- **Rucksack:** vollständige Rückansicht, Träger über beide Schultern,
  Canvas-Material, Lederriemen
- **Schlafmatte:** horizontal auf dem Rucksack verschnürt, von hinten
  vollständig sichtbar
- **Kleidungssilhouette:** Rückseite des Flanellhemds, Cargo-Hose von
  hinten
- **Axt-Position:** rechte Hand (konsistent mit Front/Profil), Axt leicht
  seitlich am Oberschenkel sichtbar, nicht am Rucksack befestigt

## Format

Ein einzelnes Bild mit den drei Panels nebeneinander (Split-Screen), nicht
drei separate Generierungen — das hält die drei Ansichten intern
konsistenter zueinander (siehe `../../production_rules/nano-banana-workflow.md`
Phase 1).

**Hinweis:** `nano-banana-workflow.md` Phase 1 nennt bisher "Front, 3/4,
Profil" als Ansichten; dieser Plan verwendet stattdessen Front/Side/Back
gemäß aktueller Anforderung. Keine Änderung an der Regel-Datei
vorgenommen — nur zur Kenntnisnahme.
