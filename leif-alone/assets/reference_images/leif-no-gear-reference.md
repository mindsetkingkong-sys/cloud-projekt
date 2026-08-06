# Leif No-Gear Reference — Generierungsplan

**STATUS: APPROVED.** Bild generiert, geprüft (Gesichtsidentität gegen
`leif_face_reference_v1.jpeg`, kein Rucksack/Axt/Gurt sichtbar, Gesichts-
schärfe geprüft), freigegeben als Master Reference Asset:
`leif_no_gear_reference_v1.png`. Verlinkt in `../../characters/leif.md`.

Ziel: Referenz für Shots, in denen Leif Rucksack und Axt explizit **nicht**
trägt (z.B. am eigenen Lager, Ausrüstung abgelegt — siehe
`../../production_rules/continuity-rules.md`, "Position von Gegenständen").
Entstanden aus einem Praxisfehler in `episodes/episode-03-feuer.md`, Shot 2:
ein Referenzbild, das den Rucksack zeigt (Turnaround-Sheet), kombiniert mit
einer Text-Anweisung "nicht getragen" führte zu einer Rucksack-Verdopplung
(Objekt am Boden **und** am Körper). Dieses Asset löst den Widerspruch,
indem es die "kein Gepäck"-Variante direkt als Bild bereitstellt statt sie
nur textuell zu fordern.

Basis: `leif_face_reference_v1.jpeg` (Gesichtsidentität) +
`leif_character_sheet_v1.jpeg` (nur Kleidung, Rucksack/Axt aus diesem Bild
bewusst ignoriert).

## Was gezeigt werden muss

- Gesicht identisch zu `leif_face_reference_v1.jpeg`, in scharfem Fokus
  (nicht weichgezeichnet — zweiter Praxisfehler bei der Erstellung dieses
  Assets, siehe unten)
- Kleidung wie im Kanon (Flanellhemd, Cargo-Hose, Stiefel)
- **kein** Rucksack, keine Schlafmatte, keine Axt, keine Gurte — Rücken/
  Oberkörper komplett ausrüstungsfrei sichtbar
- neutrale Stehpose, kein Bezug zu einer bestimmten Episode/Handlung

## Praxisfehler bei der Erstellung (dokumentiert für künftige Assets)

Erster und zweiter Versuch zeigten ein Gesicht, das gegen den **Text** in
`characters/leif.md` ("28 Jahre", "leichte graue Strähnen am Kinn") zu alt
wirkte. Ursache war nicht das Alter, sondern zwei separate Effekte:
1. Der Vergleichsmaßstab war falsch — gegen den Text geprüft statt gegen
   das tatsächliche Referenzfoto (`leif_face_reference_v1.jpeg`), das
   selbst schon sichtbare Stirnfalten/Bartgrau zeigt.
2. Das Gesicht war zusätzlich echt weichgezeichnet (Schärfe-Vergleich
   Gesicht vs. Hemd im selben Bild bestätigte das) — behoben durch
   explizite Schärfe-Anweisung im Prompt ("sharp facial detail, crisp
   focus on the face — not soft, not blurred").

## Rolle im Workflow

Wird als zusätzliche Bild-Referenz (Image-Rolle "Kleidung/Ausrüstung ohne
Gepäck") für alle Shots verwendet, in denen Rucksack/Axt laut Shot-Handlung
abgelegt sind — ergänzt `leif_character_sheet_v1.jpeg`, ersetzt es nicht
für Shots mit vollständiger Standard-Ausrüstung.
