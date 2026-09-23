import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Maxwell Hicks",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-foreground font-mono">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-base text-foreground-muted tracking-widest uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Page Not Found
        </h1>
        <p className="text-foreground text-2xl leading-snug max-w-2xl mb-6">
          This route doesn&apos;t exist.
        </p>
        <p className="text-foreground-secondary text-lg leading-relaxed max-w-xl mb-10">
          The page you&apos;re looking for may have been moved, renamed, or never existed
          in the first place. Here&apos;s where to go instead.
        </p>
        <div className="border border-border p-6 mb-10 overflow-x-auto">
          <p className="text-base text-foreground-secondary leading-relaxed whitespace-nowrap">
            <span className="text-foreground">&gt;</span> cd requested_page
            <br />
            no such file or directory
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="px-5 py-2.5 bg-foreground border border-foreground text-black text-base hover:bg-transparent hover:text-foreground transition-colors duration-200"
          >
            Back Home
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 border border-foreground text-foreground text-base hover:bg-foreground hover:text-black transition-colors duration-200"
          >
            View My Work
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 border border-foreground-secondary text-foreground-secondary text-base hover:bg-foreground-secondary hover:text-black transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </section>
    </main>
  );
}
