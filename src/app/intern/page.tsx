import { prisma } from "@/lib/prisma";
import { ADDONS, CATEGORIES, Selections, findFormat, findOption, isValidPlz } from "@/lib/product-data";

export const dynamic = "force-dynamic";

const money = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const dateFmt = new Intl.DateTimeFormat("de-DE", { dateStyle: "medium", timeStyle: "short" });

function describeSelections(raw: string): string {
  const selections = JSON.parse(raw) as Selections;
  const parts = [`Größe: ${findFormat(selections.format)?.label ?? "–"}`];
  for (const category of CATEGORIES) {
    const option = findOption(category.id, selections[category.id]);
    parts.push(`${category.label}: ${option?.label ?? "–"}`);
  }
  parts.push(`LED-Ambientelicht: ${selections.ledOn === "on" ? "an" : "aus"}`);
  for (const addon of ADDONS) {
    if (selections[addon.id] === "on") parts.push(addon.label);
  }
  if (isValidPlz(selections.plz)) parts.push(`PLZ: ${selections.plz}`);
  return parts.join(" · ");
}

export default async function InternPage() {
  const inquiries = await prisma.inquiry.findMany({
    include: { configuration: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 20px 64px" }}>
      <h1 className="display" style={{ fontSize: "1.8rem", marginBottom: 4 }}>
        Eingegangene Anfragen
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: 28 }}>
        {inquiries.length} {inquiries.length === 1 ? "Anfrage" : "Anfragen"}
      </p>

      {inquiries.length === 0 && <p style={{ color: "var(--text-faint)" }}>Noch keine Anfragen eingegangen.</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <strong>{inquiry.name}</strong>
              <span className="num" style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                {dateFmt.format(inquiry.createdAt)}
              </span>
            </div>
            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: 4 }}>
              {inquiry.email}
              {inquiry.phone ? ` · ${inquiry.phone}` : ""}
            </div>
            {inquiry.message && <p style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>{inquiry.message}</p>}
            <p style={{ marginTop: 10, fontSize: "0.82rem", color: "var(--text-faint)" }}>
              {describeSelections(inquiry.configuration.selections)}
            </p>
            <p className="num" style={{ marginTop: 6, fontWeight: 600 }}>
              {money.format(inquiry.configuration.totalPrice)}
            </p>
            <a href={`/konfiguration/${inquiry.configurationId}`} style={{ color: "var(--accent-strong)", fontSize: "0.85rem" }}>
              Konfiguration ansehen →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
