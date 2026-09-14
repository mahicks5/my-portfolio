import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Maxwell Hicks",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41] font-mono">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-base text-[#00992a] tracking-widest uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Page Not Found
        </h1>
        <p className="text-[#00ff41] text-2xl leading-snug max-w-2xl mb-6">
          This route doesn&apos;t exist.
        </p>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-xl mb-10">
          The page you&apos;re looking for may have been moved, renamed, or never existed
          in the first place. Here&apos;s where to go instead.
        </p>
        <div className="border border-[#003b0f] p-6 mb-10 overflow-x-auto">
          <p className="text-base text-[#00b32c] leading-relaxed whitespace-nowrap">
            <span className="text-[#00ff41]">&gt;</span> cd requested_page
            <br />
            no such file or directory
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="px-5 py-2.5 bg-[#00ff41] border border-[#00ff41] text-black text-base hover:bg-transparent hover:text-[#00ff41] transition-colors duration-200"
          >
            Back Home
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 border border-[#00ff41] text-[#00ff41] text-base hover:bg-[#00ff41] hover:text-black transition-colors duration-200"
          >
            View My Work
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 border border-[#00b32c] text-[#00b32c] text-base hover:bg-[#00b32c] hover:text-black transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </section>
    </main>
  );
}
