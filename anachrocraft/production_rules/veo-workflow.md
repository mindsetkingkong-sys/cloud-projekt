# Veo Workflow

## Ablauf

1. **Shot planen** — aus der Episoden-Shot-Liste (`episodes/`), Shot-Größe +
   Kamerabewegung aus `camera-system.md` wählen.
2. **Referenz prüfen** — passendes Keyframe aus dem Nano-Banana-Workflow
   liegt vor und hat Phase 3 (Konsistenzprüfung) bestanden.
3. **Prompt erstellen** — Formel aus `camera-system.md`, Licht/Wetter aus
   `lighting_rules.md` und `continuity_rules.md` für diese Episode
   übernehmen, Keyframe als Asset-Referenzbild anhängen.
4. **Video generieren** — 4, 6 oder 8 Sekunden je nach Shot-Größe, **eine**
   Handlung, kein Timestamp-Multi-Beat.
5. **Fehler analysieren** — Ergebnis gegen `negative_patterns.md` prüfen.
6. **Verbessern** — bei Fehler: Prompt präzisieren oder neu generieren, nicht
   den Fehler in der Nachbearbeitung "wegschneiden", wenn er den Charakter
   selbst betrifft (Gesicht/Ausrüstung).

## Wann ein Shot neu generiert werden muss

- Ausrüstung weicht vom Kanon ab (Rucksack, Axt-Anzahl, Mütze)
- Licht/Tageszeit passt nicht zum Episoden-Wert
- Zweite Handlung/Perspektivwechsel ist eingeschlichen
- Sichtbares Wasserzeichen liegt im relevanten Bildbereich
- Physik wirkt falsch (schwebende Objekte, unlogische Bewegung)

## Typische Veo-Fehler (worauf beim Ergebnis geachtet wird)

Siehe `negative_patterns.md` — das ist die verbindliche Liste, hier nicht
duplizieren.

## Qualitätskriterien

Ein Clip gilt als freigegeben, wenn er die komplette `quality_check.md`
besteht — nicht nach subjektivem "sieht gut aus".
