# Veo Workflow

## Prompt-Struktur (fix für jeden Veo-Prompt)

Jeder Veo-Prompt enthält diese 7 Elemente, in dieser Reihenfolge:

1. **Shot Type** — Shot-Größe + Kamerabewegung + Perspektive (siehe `camera-system.md`)
2. **Character** — Master Character Prompt aus `../characters/leif.md`
3. **Main Action** — eine dominante Hauptaktion (kleine Nebenbewegungen erlaubt)
4. **Environment** — Ort/Umgebung, konsistent mit `continuity-rules.md`
5. **Camera Movement** — explizit benannt (siehe `camera-system.md`)
6. **Lighting** — aus `lighting-rules.md`, fix für die Episode
7. **Cinematic Style** — aus dem Style-Block des Master Character Prompts

Grundregeln: klare Hauptidee pro Shot, Szene nicht überladen, Kamera und
Bewegung physikalisch logisch, Charakterkonsistenz erhalten.

## Ablauf

1. **Shot planen** — aus der Episoden-Shot-Liste (`episodes/`), Shot-Größe +
   Kamerabewegung aus `camera-system.md` wählen.
2. **Referenz prüfen** — passendes Keyframe aus dem Nano-Banana-Workflow
   liegt vor und hat Phase 3 (Konsistenzprüfung) bestanden.
3. **Prompt erstellen** — Formel aus `camera-system.md`, Licht/Wetter aus
   `lighting-rules.md` und `continuity-rules.md` für diese Episode
   übernehmen, Keyframe als Asset-Referenzbild anhängen.
4. **Video generieren** — kurze Clip-Länge entsprechend der verfügbaren
   Einstellungen und der Shot-Größe (siehe `camera-system.md`). Eine
   **dominante Hauptaktion** pro Shot; kleine natürliche Bewegungen/Reaktionen
   sind erlaubt (z.B. "Leif läuft durch den Wald, bleibt stehen und schaut
   sich um"). Nicht erlaubt: mehrere unabhängige Handlungen oder Ortswechsel
   in einem Shot (z.B. "läuft, baut eine Hütte, kämpft, findet einen
   Gegenstand und wechselt den Ort"). Kein Timestamp-Multi-Beat.
5. **Fehler analysieren** — Ergebnis gegen `negative-patterns.md` prüfen.
6. **Verbessern** — bei Fehler: Prompt präzisieren oder neu generieren, nicht
   den Fehler in der Nachbearbeitung "wegschneiden", wenn er den Charakter
   selbst betrifft (Gesicht/Ausrüstung).

## Wann ein Shot neu generiert werden muss

- Ausrüstung weicht vom Kanon ab (Rucksack, Axt-Anzahl, Mütze)
- Licht/Tageszeit passt nicht zum Episoden-Wert
- Eine zweite, unabhängige Handlung ersetzt/überlagert die Hauptaktion (nicht
  zu verwechseln mit einer kleinen natürlichen Nebenbewegung) oder ein
  Perspektivwechsel ist eingeschlichen
- Sichtbares Wasserzeichen liegt im relevanten Bildbereich
- Physik wirkt falsch (schwebende Objekte, unlogische Bewegung)

## Typische Veo-Fehler (worauf beim Ergebnis geachtet wird)

Siehe `negative-patterns.md` — das ist die verbindliche Liste, hier nicht
duplizieren.

## Qualitätskriterien

Ein Clip gilt als freigegeben, wenn er die komplette `quality-check.md`
besteht — nicht nach subjektivem "sieht gut aus".
