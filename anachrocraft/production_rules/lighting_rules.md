# Lighting Rules

Licht wird pro Episode einmal festgelegt und danach nicht mehr verändert,
außer die Story springt bewusst in der Zeit (siehe `continuity_rules.md`).

- **Tageszeit:** einmal pro Episode fix (z.B. "early morning"), in jedem Shot
  dieser Episode wortgleich wiederholt.
- **Sonnenstand:** aus der Tageszeit abgeleitet und ebenfalls fix
  wiederholen (z.B. "low sun from the east" für frühen Morgen). Nicht pro
  Shot neu erfinden lassen.
- **Farbtemperatur:** an Tageszeit gekoppelt — kühl/blau für früh
  morgens/Dämmerung, warm/golden für späten Nachmittag/Abend, neutral für
  Mittag bei Bewölkung. Ein Wert pro Episode, nicht pro Shot.
- **Wetter:** einmal pro Episode fix (siehe `continuity_rules.md`), da Wetter
  auch die Lichtqualität bestimmt (diffus bei Bewölkung, hart bei Sonne).
- **Atmosphäre:** Nebel/Dunst nur, wenn zur festgelegten Tageszeit/zum Wetter
  passend (z.B. Bodennebel ist morgens plausibel, nicht bei praller
  Mittagssonne).

**Beispielregel:** Beginnt eine Episode morgens, darf kein Shot dieser
Episode plötzlich wie Sonnenuntergang aussehen (warmes Streiflicht, tiefer
Sonnenwinkel von der falschen Seite). Weicht ein generierter Shot davon ab,
wird er verworfen oder neu generiert — nicht in den Schnitt übernommen.
