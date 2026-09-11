import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41]">
      {/* Summary */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-4 leading-relaxed">
          <h2 className="text-5xl font-bold text-center">Summary:</h2>
          <p className="text-md text-left max-w-2xl mx-auto mb-8">
Software Engineering graduate from Arizona State University specializing in full-stack 
development with Java, Spring Boot, and React. Experienced building production-ready 
applications including REST APIs, database-backed services, and interactive web interfaces. 
Strong foundation in object-oriented design, data structures, and software testing. 
Actively seeking an entry-level Software Engineering role to deliver clean, scalable solutions 
to real-world problems.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-4 leading-relaxed">
          <h2 className="text-5xl font-bold text-center">Get To Know Me:</h2>
          <p className="text-md text-left max-w-2xl mx-auto mb-8">
Software Engineering graduate from Arizona State University focused on building scalable, 
full-stack applications with clean, maintainable code. I specialize in Java, Spring Boot, 
and React with hands-on experience across backend APIs, database design, and frontend development.
          </p>

          <p className="text-md text-left max-w-2xl mx-auto mb-8">
I've architected a modular Java game engine using OOP design patterns, built an adaptive
virtual assistant integrating multiple AI APIs, and developed full-stack web applications 
from the ground up. I'm drawn to complex technical challenges that require thoughtful 
system design and attention to detail.
          </p>

          <p className="text-md max-w-2xl mx-auto mb-8">
Before transitioning into software engineering, I spent years as a Shift Supervisor at 
Starbucks, leading teams, managing operations under pressure, and solving problems on the 
fly. That experience shaped how I communicate, collaborate, and stay calm when things 
get hard. It's an unconventional background for a developer, and I think that's an advantage.
          </p>

        </div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold mb-8 text-center">Education:</h2>
        <div className="bg-[#31363c] p-8 mx-auto mb-8">
          <div className="border-l-4 border-[#00ff41] pl-4">
            <h3 className="text-xl font-bold">Bachelor of Science in Engineering</h3>
            <p>Software Engineering</p>
            <p>Arizona State University | Graduated August 2025</p>
            <p className="mt-2">
              <span className="font-semibold">Relevant Coursework: </span>
Data Structures & Algorithms, Operating Systems, Secure Software Systems, 
Web Applications, Mobile Application Development, Distributed Software Systems, 
Embedded Systems, Software Design & Construction
            </p>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-4 leading-relaxed">
          <h2 className="text-5xl font-bold text-center">What I'm Looking For:</h2>

          <p className="text-md text-left max-w-2xl mx-auto mb-8">
I'm actively seeking an entry-level Software Engineering role where I can contribute 
from day one. My focus is backend and full-stack development, building APIs, designing 
scalable systems, and writing code that's built to last.
          </p>

          <p className="text-md text-left max-w-2xl mx-auto mb-8">
I'm drawn to teams that take engineering seriously, where code is reviewed, architecture 
is discussed, and engineers are expected to think beyond just making it work. If you're 
building something meaningful and need a developer who shows up ready to learn and ready 
to contribute, let's talk.
          </p>
        </div>
      </section>
    </main>
  );
}
