# Grilluxe Küchenkonfigurator

Next.js-App zum Zusammenstellen einer Grilluxe-Außenküche (Gehäusefarbe, Schrankfronten,
Arbeitsplatte, LED-Ambientelicht) mit Live-Bildvorschau, speicherbarem Teilen-Link und
interner Anfrage-Übersicht.

## Setup

```bash
npm install
cp .env.example .env   # DATABASE_URL + INTERN_PASSWORD anpassen
npx prisma db push     # legt die lokale SQLite-Datenbank an
npm run dev
```

App läuft dann auf `http://localhost:3000`. Interne Anfrage-Übersicht unter `/intern`
(HTTP-Basic-Auth, Passwort aus `INTERN_PASSWORD`).

## Produktdaten & Preise

`src/lib/product-data.ts` enthält die Küchenlinie, alle Kategorien/Optionen (aus den
gelieferten Renderbildern in `public/kitchen/`) sowie die Preise. Aktuell ist ein
Platzhalter-Festpreis von 23.000 € für die fertige Küche hinterlegt (alle Optionen ohne
Aufpreis) — bei Bedarf hier durch echte Preise ersetzen.

## Deployment

Für den produktiven Einsatz `prisma/schema.prisma` auf `provider = "postgresql"`
umstellen und `DATABASE_URL` auf eine gehostete Postgres-Instanz (z. B. Neon oder
Supabase) zeigen lassen; lokal genügt SQLite.
