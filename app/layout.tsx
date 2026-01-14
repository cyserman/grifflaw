import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site Replacement - Griffiths Law Office",
  description: "Site is being replaced. The previous version has been backed up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
