import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";

const jersey10 = Jersey_10({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jersey-10',
});

export const metadata: Metadata = {
  title: "Maxwell Hicks | Software Engineer",
  description: "Personal Webiste of Maxwell Hicks - Software Engineering Graduate",
  openGraph: {
    title: "Maxwell — Software Engineer Portfolio",
    description: "Full-stack projects in Java, Spring Boot, Python, and React/TypeScript.",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxwell - Software Engineer Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jersey10.className}>
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
