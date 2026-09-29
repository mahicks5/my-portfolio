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
        <header className="bg-black text-foreground">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-y-2">
            <Link href="/" className="text-xl font-bold">Maxwell Hicks</Link>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/projects" className="hover:text-white transition-transform hover:scale-120">Projects</Link>
              <Link href="/about" className="hover:text-white transition-transform hover:scale-120">About</Link>
              <a href="/Maxwell_Hicks_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform hover:scale-120">Resume</a>
              <a href="mailto:maxwellahicks@gmail.com" className="hover:text-white transition-transform hover:scale-120">Contact</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-border">
          <div className="max-w-4xl mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-x-6 gap-y-4 text-sm">
            <p className="text-foreground-muted">
              &copy; {new Date().getFullYear()} Maxwell Hicks
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://github.com/mahicks5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/maxwell-h-2647622a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:maxwellahicks@gmail.com"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Email
              </a>
              <a
                href="/Maxwell_Hicks_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
