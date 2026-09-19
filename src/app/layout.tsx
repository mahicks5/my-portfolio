import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxwellhicks.dev"),
  title: "Maxwell Hicks | Software Engineer",
  description: "Software engineer building reliable backend systems and APIs with Java, Spring Boot, PostgreSQL, and React. Arizona State graduate open to full-time roles.",
  openGraph: {
    title: "Maxwell Hicks | Software Engineer Portfolio",
    description: "Full-stack projects in Java, Spring Boot, Python, and React/TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxwell Hicks, Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={shareTechMono.variable}>
      <body className="font-mono">
        <header className="bg-black text-[#00ff41]">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Maxwell Hicks</Link>
            <div className="flex gap-6">
              <Link href="/projects" className="hover:text-white transition-transform hover:scale-120">Projects</Link>
              <Link href="/about" className="hover:text-white transition-transform hover:scale-120">About</Link>
              <a href="mailto:maxwellahicks@gmail.com" className="hover:text-white transition-transform hover:scale-120">Contact</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
