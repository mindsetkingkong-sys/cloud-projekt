# Camera System

## Shot-Größen

| Größe | Verwendung |
|---|---|
| Extreme Close-up | Details: Hände, Axt, Feuer, Stiefel, Augen |
| Close-up | Gesicht, Emotion, stille Momente |
| Medium Shot | Über-Schulter-Blicke, Interaktion mit einem Objekt |
| Wide Shot | Leif in Aktion innerhalb der Umgebung (gehen, arbeiten) |
| Establishing Shot | neuer Ort/neue Episode, Landschaft ohne Fokus auf Handlung |

## Kamera-Bewegungen

| Bewegung | Verwendung |
|---|---|
| Dolly | langsame Annäherung/Entfernung, für Spannungsaufbau |
| Tracking | Leif läuft, Kamera folgt seitlich oder von hinten |
| Crane | Höhenwechsel, z.B. Aufdecken eines neuen Orts von oben |
| Pan | Landschaft/Umgebung abfahren, ohne dass Leif sich bewegt |
| Push-in | auf ein Detail oder Gesicht zusteuern, für Betonung |
| POV | aus Leifs Blickwinkel, für Entdeckungsmomente |

## Clip-Länge nach Shot-Größe

| Shot-Größe | Länge |
|---|---|
| Extreme Close-up | 2-3s |
| Close-up | 3-4s |
| Medium Shot | 4-6s |
| Wide Shot | 5-6s |
| Establishing Shot | 6-8s |

## Prompt-Formel (fix für jeden Shot)

`[Shot-Größe] + [Kamerabewegung] + [Objektiv/Look] + [Licht aus lighting_rules.md] + [eine Handlung]`

## Regel

Jeder Veo-Prompt braucht **explizit** eine Shot-Größe und eine Kamerabewegung
— nie nur eine mm-Zahl oder "Kamera bewegt sich" ohne Präzisierung. Ein Prompt
ohne beides gilt als nicht produktionsreif (siehe `quality_check.md`, Punkt 3).
