"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BACKGROUND_IMAGE,
  CATEGORIES,
  DEFAULT_SELECTIONS,
  KITCHEN_LINE,
  Selections,
  calculateTotalPrice,
  findOption,
} from "@/lib/product-data";

const money = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

type Props = {
  initialSelections?: Selections;
  initialConfigId?: string;
};

export default function Configurator({ initialSelections, initialConfigId }: Props) {
  const [selections, setSelections] = useState<Selections>(initialSelections ?? DEFAULT_SELECTIONS);
  const [openGroup, setOpenGroup] = useState<string>(CATEGORIES[0].id);
  const [savedLink, setSavedLink] = useState<string | null>(
    initialConfigId ? `${typeof window !== "undefined" ? window.location.origin : ""}/konfiguration/${initialConfigId}` : null
  );
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquirySubmitting, setInquirySubmitting] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquiryError, setInquiryError] = useState<string | null>(null);

  const totalPrice = calculateTotalPrice(selections);

  function selectOption(categoryId: string, optionId: string) {
    setSelections((prev) => ({ ...prev, [categoryId]: optionId }));
    setSavedLink(null);
  }

  async function saveConfiguration(): Promise<string | null> {
    setSaving(true);
    setSaveError(null);
    try {
      const res = await fetch("/api/configurations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kitchenLine: KITCHEN_LINE.id, selections, totalPrice }),
      });
      if (!res.ok) throw new Error("Speichern fehlgeschlagen");
      const data: { id: string } = await res.json();
      const link = `${window.location.origin}/konfiguration/${data.id}`;
      setSavedLink(link);
      return data.id;
    } catch {
      setSaveError("Konnte die Konfiguration nicht speichern. Bitte versuch es erneut.");
      return null;
    } finally {
      setSaving(false);
    }
  }

  async function handleInquirySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setInquirySubmitting(true);
    setInquiryError(null);
    const form = new FormData(e.currentTarget);
    try {
      const configId = savedLink ? savedLink.split("/").pop()! : await saveConfiguration();
      if (!configId) throw new Error("no config");
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          configurationId: configId,
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          message: form.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Anfrage fehlgeschlagen");
      setInquirySuccess(true);
      setShowInquiryForm(false);
    } catch {
      setInquiryError("Anfrage konnte nicht gesendet werden. Bitte versuch es erneut.");
    } finally {
      setInquirySubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px 64px" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "16px 20px",
          background: "#0a0a0a",
          borderBottom: "1px solid #262626",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, minWidth: 0 }}>
          <span className="wordmark" style={{ fontSize: "1.3rem", color: "#ffffff" }}>
            grilluxe
          </span>
          <span style={{ color: "#8a8a8a", fontSize: "0.82rem", whiteSpace: "nowrap" }}>Küchenkonfigurator</span>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.09em", textTransform: "uppercase", color: "#8a8a8a" }}>
            Gesamtpreis
          </div>
          <div className="num" style={{ fontSize: "1.25rem", fontWeight: 600, color: "#ffffff" }}>
            {money.format(totalPrice)}
          </div>
        </div>
      </header>

      <div style={{ paddingTop: 8 }}>
        <h1 className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", margin: "28px 0 4px", textWrap: "balance" }}>
          {KITCHEN_LINE.name}
        </h1>
        <p style={{ margin: "0 0 28px", color: "var(--text-muted)", maxWidth: "62ch" }}>
          Stell deine Außenküche live zusammen. Speichere deine Konfiguration und teile den Link, oder schick uns direkt eine
          Anfrage.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.35fr) minmax(300px, 0.9fr)",
          gap: 28,
          alignItems: "start",
        }}
        className="layout-grid"
      >
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "calc(var(--radius) + 6px)",
            padding: 20,
            position: "sticky",
            top: 84,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1240 / 744",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              background: "var(--surface-2)",
            }}
          >
            <Image src={BACKGROUND_IMAGE} alt="Grilluxe Außenküche" fill sizes="(max-width: 880px) 100vw, 700px" priority style={{ objectFit: "fill" }} />
            {CATEGORIES.filter((c) => c.id !== "ledColor").map((category) => {
              const option = findOption(category.id, selections[category.id]);
              if (!option?.image) return null;
              return (
                <Image
                  key={category.id}
                  src={option.image}
                  alt={`${category.label}: ${option.label}`}
                  fill
                  sizes="(max-width: 880px) 100vw, 700px"
                  style={{ objectFit: "fill" }}
                />
              );
            })}
            {(() => {
              const led = findOption("ledColor", selections.ledColor);
              if (!led?.image) return null;
              return (
                <Image
                  src={led.image}
                  alt={`LED-Ambientelicht: ${led.label}`}
                  fill
                  sizes="(max-width: 880px) 100vw, 700px"
                  style={{ objectFit: "fill" }}
                />
              );
            })()}
          </div>
          <p style={{ marginTop: 14, fontSize: "0.78rem", color: "var(--text-faint)", textAlign: "center" }}>
            Live-Vorschau auf Basis eurer Renderbilder.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {CATEGORIES.map((category) => {
            const isOpen = openGroup === category.id;
            const current = findOption(category.id, selections[category.id]);
            return (
              <div key={category.id} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden" }}>
                <button
                  onClick={() => setOpenGroup(isOpen ? "" : category.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    fontWeight: 600,
                    fontSize: "0.94rem",
                    background: "transparent",
                    border: "none",
                    color: "inherit",
                    textAlign: "left",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                    {category.label}
                    <span style={{ fontWeight: 400, color: "var(--text-muted)", fontSize: "0.82rem" }}>{current?.label}</span>
                  </span>
                  <span style={{ color: "var(--text-faint)", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}>
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: "4px 16px 16px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(84px, 1fr))", gap: 10 }}>
                      {category.options.map((option) => {
                        const active = selections[category.id] === option.id;
                        return (
                          <button
                            key={option.id}
                            aria-pressed={active}
                            onClick={() => selectOption(category.id, option.id)}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 6,
                              background: "var(--surface-2)",
                              border: active ? "1px solid var(--accent)" : "1px solid var(--border)",
                              boxShadow: active ? "0 0 0 1px var(--accent)" : "none",
                              borderRadius: 8,
                              padding: "8px 6px 9px",
                            }}
                          >
                            <span
                              style={{
                                width: 30,
                                height: 30,
                                borderRadius: "50%",
                                border: "1px solid var(--shadow)",
                                background:
                                  option.swatchColor === "transparent"
                                    ? "repeating-conic-gradient(var(--border) 0% 25%, transparent 0% 50%) 50% / 8px 8px"
                                    : option.swatchColor,
                              }}
                            />
                            <span style={{ fontSize: "0.72rem", textAlign: "center", lineHeight: 1.2 }}>{option.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 16 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderTop: "1px solid var(--border)",
                marginTop: 6,
                paddingTop: 10,
                fontSize: "1.05rem",
                fontWeight: 700,
              }}
            >
              <span>Gesamtpreis</span>
              <span className="num" style={{ fontSize: "1.3rem" }}>
                {money.format(totalPrice)}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
              <button
                onClick={saveConfiguration}
                disabled={saving}
                style={{
                  borderRadius: 8,
                  padding: "12px 16px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  textAlign: "center",
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--text)",
                }}
              >
                {saving ? "Speichert…" : "Konfiguration speichern & Link teilen"}
              </button>
              {savedLink && (
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", wordBreak: "break-all" }}>
                  Gespeichert:{" "}
                  <a href={savedLink} style={{ color: "var(--accent-strong)" }}>
                    {savedLink}
                  </a>
                </div>
              )}
              {saveError && <div style={{ fontSize: "0.8rem", color: "var(--accent-strong)" }}>{saveError}</div>}

              {!showInquiryForm && !inquirySuccess && (
                <button
                  onClick={() => setShowInquiryForm(true)}
                  style={{
                    borderRadius: 8,
                    padding: "12px 16px",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    textAlign: "center",
                    border: "1px solid transparent",
                    background: "var(--accent)",
                    color: "var(--accent-ink)",
                  }}
                >
                  Anfrage senden
                </button>
              )}

              {inquirySuccess && (
                <p style={{ fontSize: "0.85rem", color: "var(--text)" }}>
                  Danke! Deine Anfrage ist bei uns eingegangen — wir melden uns bei dir.
                </p>
              )}

              {showInquiryForm && (
                <form onSubmit={handleInquirySubmit} style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                  <input name="name" required placeholder="Name" style={inputStyle} />
                  <input name="email" type="email" required placeholder="E-Mail" style={inputStyle} />
                  <input name="phone" placeholder="Telefon (optional)" style={inputStyle} />
                  <textarea name="message" placeholder="Nachricht (optional)" rows={3} style={{ ...inputStyle, resize: "vertical" as const }} />
                  {inquiryError && <div style={{ fontSize: "0.8rem", color: "var(--accent-strong)" }}>{inquiryError}</div>}
                  <button
                    type="submit"
                    disabled={inquirySubmitting}
                    style={{
                      borderRadius: 8,
                      padding: "12px 16px",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      border: "1px solid transparent",
                      background: "var(--accent)",
                      color: "var(--accent-ink)",
                    }}
                  >
                    {inquirySubmitting ? "Sendet…" : "Absenden"}
                  </button>
                </form>
              )}

              <p style={{ fontSize: "0.72rem", color: "var(--text-faint)", marginTop: 10, textAlign: "center" }}>
                Alle Preise sind Richtwerte. Verbindliches Angebot nach persönlicher Beratung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: 8,
  padding: "10px 12px",
  color: "var(--text)",
  fontSize: "0.9rem",
};
