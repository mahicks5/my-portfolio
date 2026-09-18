import type { Metadata } from "next";
import Link from "next/link";

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Distributed Software Systems',
  'Secure Software Systems',
  'Software Design & Construction',
  'Web Applications',
  'Mobile Application Development',
  'Embedded Systems',
];

export const metadata: Metadata = {
  title: "About | Maxwell Hicks",
  description: "Software Engineering graduate from Arizona State University building backend services and full-stack applications with Java, Spring Boot, and React.",
  openGraph: {
    title: "About | Maxwell Hicks",
    description: "Background, education, and what I am looking for in a software engineering role.",
    images: ["/og-image.png"],
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41] font-mono">

      {/* Intro Section */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-base text-[#00992a] tracking-widest uppercase mb-4">
          About Me
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Get to Know Me
        </h1>
        <p className="text-[#00ff41] text-2xl leading-snug max-w-2xl mb-6">
          Software Engineering graduate from Arizona State University, building scalable
          full-stack applications with clean, maintainable code.
        </p>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-xl">
          I specialize in Java, Spring Boot, and React, with hands-on experience across
          backend APIs, database design, and frontend development, all grounded in
          object-oriented design, data structures, and software testing.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-[#003b0f]" />
      </div>

      {/* Background Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold tracking-tight mb-8">My Background</h2>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-2xl">
          Before transitioning into software engineering, I spent years as a Shift Supervisor
          at Starbucks, leading teams, managing operations under pressure, and solving problems
          on the fly. That experience shaped how I communicate, collaborate, and stay calm when
          things get hard. It&apos;s an unconventional background for a developer, and I think
          that&apos;s an advantage.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-[#003b0f]" />
      </div>

      {/* Education Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold tracking-tight mb-8">Education</h2>
        <div className="border-l-2 border-[#00ff41] pl-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
            <h3 className="text-2xl font-bold">Arizona State University</h3>
            <span className="text-sm text-[#00992a] tracking-widest uppercase">
              Graduated Aug 2025
            </span>
          </div>
          <p className="text-[#00b32c] text-lg leading-relaxed mb-8">
            Bachelor of Science in Engineering, Software Engineering
          </p>
          <p className="text-sm text-[#00992a] tracking-widest uppercase mb-3">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {COURSEWORK.map((course) => (
              <span
                key={course}
                className="px-3 py-1.5 text-base border border-[#003b0f] text-[#00b32c] hover:border-[#00ff41] hover:text-[#00ff41] transition-colors duration-150"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-[#003b0f]" />
      </div>

      {/* What I Build Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold tracking-tight mb-8">What I Build</h2>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-2xl mb-4">
          I&apos;ve architected a modular Java game engine using OOP design patterns, built an
          adaptive virtual assistant powered by Google&apos;s Gemini API, and developed full-stack web
          applications from the ground up.
        </p>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-2xl">
          I&apos;m drawn to complex technical challenges that require thoughtful system design
          and attention to detail.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-[#003b0f]" />
      </div>

      {/* What I'm Looking For Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold tracking-tight mb-8">What I&apos;m Looking For</h2>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-2xl mb-4">
          I&apos;m actively seeking an entry-level Software Engineering role where I can
          contribute from day one. My focus is backend and full-stack development, building
          APIs, designing scalable systems, and writing code that&apos;s built to last.
        </p>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-2xl">
          I&apos;m drawn to teams that take engineering seriously, where code is reviewed,
          architecture is discussed, and engineers are expected to think beyond just making it
          work. If you&apos;re building something meaningful and need a developer who shows up
          ready to learn and ready to contribute, let&apos;s talk.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-[#003b0f]" />
      </div>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Let&apos;s Connect</h2>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-xl mb-10">
          See what I&apos;ve been building, or reach out directly. I&apos;d love to hear
          from you.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-[#00ff41] border border-[#00ff41] text-black text-base hover:bg-transparent hover:text-[#00ff41] transition-colors duration-200"
          >
            View My Work
          </Link>
          <a
            href="/Maxwell_Hicks_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#00ff41] text-[#00ff41] text-base hover:bg-[#00ff41] hover:text-black transition-colors duration-200"
          >
            Resume
          </a>
          <a
            href="mailto:maxwellahicks@gmail.com"
            className="px-5 py-2.5 border border-[#00ff41] text-[#00ff41] text-base hover:bg-[#00ff41] hover:text-black transition-colors duration-200"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/maxwell-h-2647622a4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#00b32c] text-[#00b32c] text-base hover:bg-[#00b32c] hover:text-black transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </section>

    </main>
  );
}
