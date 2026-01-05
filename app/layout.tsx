import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FloatingActionButton from "@/components/FloatingActionButton";

export const metadata: Metadata = {
  title: "The Griffiths Law Office | Criminal Defense & Family Law | Phoenixville, PA",
  description: "20+ years defending clients in Chester & Montgomery County. Aggressive criminal defense, family law, and Pro Se resources. Located at 1457 Riverwood Ln, Phoenixville, PA.",
  keywords: "divorce lawyer Phoenixville, criminal defense Chester County, family law Montgomery County, DUI lawyer PA, custody attorney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <FloatingActionButton />
      </body>
    </html>
  );
}
