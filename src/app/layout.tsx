import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grilluxe Küchenkonfigurator",
  description: "Stell deine Grilluxe Außenküche live zusammen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
