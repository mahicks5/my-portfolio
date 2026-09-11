import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";

import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxwellhicks.dev"),
  title: "Maxwell Hicks | Software Engineer",
  description: "Personal Webiste of Maxwell Hicks - Software Engineering Graduate",
  openGraph: {
    title: "Maxwell — Software Engineer Portfolio",
    description: "Full-stack projects in Java, Spring Boot, Python, and React/TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxwell - Software Engineer Portfolio",
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
    <html lang="en">
      <body className={`${shareTechMono.variable} font-mono`}>
        <header className="bg-black text-[#00ff41]">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold">Maxwell Hicks</a>
            <div className="flex gap-6">
              <a href="/projects" className="hover:text-white transition-transform hover:scale-120">Projects</a>
              <a href="/about" className="hover:text-white transition-transform hover:scale-120">About</a>
              <a href="mailto:maxwellahicks@gmail.com" className="hover:text-white transition-transform hover:scale-120">Contact</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
