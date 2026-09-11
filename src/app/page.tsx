import Link from "next/link";

const LANGUAGES = ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'];
const BACKEND = ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'Spring Scheduler', 'REST API Design', 'Springdoc OpenAPI', 'Lombok', 'Flask', 'Maven'];
const FRONTEND = ['React', 'Next.js', 'Tailwind CSS', 'Thymeleaf', 'Responsive Design'];
const DATABASES = ['PostgreSQL', 'Relational Data Modeling', 'Flyway Migrations'];
const TESTING = ['JUnit 5', 'Mockito', 'MockMvc'];
const DEVOPS_TOOLS = ['Git', 'GitHub', 'Docker', 'Linux', 'AWS', 'CI/CD', 'Vercel'];
const AI_LLM_INTEGRATION = ['Claude', 'GitHub Copilot', 'LLM API Integration', 'Prompt Engineering'];
const COMPUTER_SCIENCE = [
  'Object-Oriented Design',
  'Design Patterns',
  'Data Structures & Algorithms',
  'Distributed Systems',
  'Operating Systems',
  'Secure Software Development',
  'Mobile App Development',
  'Embedded Systems',
];
const PROFESSIONAL = ['Agile/Scrum', 'Team Leadership', 'Communication', 'Problem Solving'];

const SKILL_GROUPS = [
  { label: 'Languages', items: LANGUAGES },
  { label: 'Backend', items: BACKEND },
  { label: 'Frontend', items: FRONTEND },
  { label: 'Databases', items: DATABASES },
  { label: 'Testing', items: TESTING },
  { label: 'DevOps & Tools', items: DEVOPS_TOOLS },
  { label: 'AI & LLM Integration', items: AI_LLM_INTEGRATION },
  { label: 'Computer Science', items: COMPUTER_SCIENCE },
  { label: 'Professional', items: PROFESSIONAL },
];

const HIGHLIGHTS = [
  'Built a Spring Boot service that syncs live job postings from the Greenhouse API every hour, deduplicated and persisted in PostgreSQL',
  'Engineered a modular Java game engine using Factory, Strategy, and Singleton patterns across 15+ entity types',
  'Led teams as a Starbucks Shift Supervisor, bringing ownership and composure under pressure to every project',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41] font-mono">

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="inline-flex items-center gap-3 px-3 py-1 mb-8 border border-[#003b0f] text-sm text-[#00b32c]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ff41]" />
          </span>
          Open to full-time Software Engineering roles
        </div>
        <p className="text-base text-[#00992a] tracking-widest uppercase mb-4">
          Software Engineer · Backend &amp; Full-Stack
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Maxwell Hicks
        </h1>
        <p className="text-[#00ff41] text-2xl leading-snug max-w-2xl mb-6">
          I build reliable backend systems and the APIs that power them.
        </p>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-xl mb-10">
          Software Engineering graduate from Arizona State University. I design and ship
          full-stack applications with Java, Spring Boot, PostgreSQL, and React, from the
          data model and scheduled services to the interface on top, with clean,
          maintainable code built to scale.
        </p>
        <ul className="space-y-3 max-w-2xl mb-12">
          {HIGHLIGHTS.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-base text-[#00b32c] leading-relaxed">
              <span className="text-[#00ff41] shrink-0">&gt;</span>
              {highlight}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-[#00ff41] border border-[#00ff41] text-black text-base hover:bg-transparent hover:text-[#00ff41] transition-colors duration-200"
          >
            View My Work
          </Link>
          <a
            href="mailto:maxwellahicks@gmail.com"
            className="px-5 py-2.5 border border-[#00ff41] text-[#00ff41] text-base hover:bg-[#00ff41] hover:text-black transition-colors duration-200"
          >
            Email Me
          </a>
          <a
            href="https://github.com/mahicks5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#00b32c] text-[#00b32c] text-base hover:bg-[#00b32c] hover:text-black transition-colors duration-200"
          >
            GitHub
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

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-[#003b0f]" />
      </div>

      {/* Skills Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold tracking-tight mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {SKILL_GROUPS.map(({ label, items }) => (
            <div key={label}>
              <p className="text-sm text-[#00992a] tracking-widest uppercase mb-3">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-base border border-[#003b0f] text-[#00b32c] hover:border-[#00ff41] hover:text-[#00ff41] transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-[#003b0f]" />
      </div>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Let&apos;s Connect</h2>
        <p className="text-[#00b32c] text-lg leading-relaxed max-w-xl mb-10">
          I&apos;m open to full-time opportunities, collaborations, and conversations
          about software engineering. Reach out through any of the links below.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:maxwellahicks@gmail.com"
            className="px-5 py-2.5 border border-[#00ff41] text-[#00ff41] text-base hover:bg-[#00ff41] hover:text-black transition-colors duration-200"
          >
            Email Me
          </a>
          <a
            href="https://github.com/mahicks5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#00b32c] text-[#00b32c] text-base hover:bg-[#00b32c] hover:text-black transition-colors duration-200"
          >
            GitHub
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
