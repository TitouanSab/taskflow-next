import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "Projets et tâches — M2 ESIEE-IT",
};

type Props = { children: ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr">
      <body>
        <div className="app">
          <header className="topbar">
            <Link href="/" className="brand">
              TaskFlow
            </Link>
            <nav className="nav" aria-label="Navigation">
              <Link href="/">Projets</Link>
              <Link href="/about">À propos</Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}