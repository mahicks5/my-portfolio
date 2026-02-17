import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maxwell Hicks | Software Engineer",
  description: "Personal Webiste of Maxwell Hicks - Software Engineering Graduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-black border-b border-gray-200">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold">Maxwell Hicks</a>
            <div className="flex gap-6">
              <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
              <a href="/about" className="hover:text-blue-600 transition">About</a>
              <a href="mailto:maxwellahicks@gmail.com" className="hover:text-blue-600 transition">Contact</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
