import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Maxwell Hicks",
  description: "Backend services and full-stack applications in Java, Spring Boot, PostgreSQL, and React, including a job board monitor, a Tarot REST API, and a Java dungeon crawler.",
  openGraph: {
    title: "Projects | Maxwell Hicks",
    description: "Backend services and full-stack applications in Java, Spring Boot, PostgreSQL, and React.",
    images: ["/og-image.png"],
  },
};

const projects = [
    {
        title: "Job Board Monitor",
        description: "A full-stack web application that automatically tracks and aggregates job postings from target companies in real time. Polls the Greenhouse ATS API on a scheduled interval, persists new postings to a PostgreSQL database, and displays them through a clean web interface, only surfacing roles that haven't been seen before.",
        techStack: ["Java", "Spring Boot 3.5", "Spring Data JPA", "Spring Scheduler", "PostgreSQL", "Flyway", "Thymeleaf", "Maven"],
        github: "https://github.com/mahicks5/job-monitor",
        highlights: [
            "Built a full-stack job monitoring application in Java and Spring Boot that automatically aggregates live postings from target companies via the Greenhouse ATS API",
            "Implemented a scheduled polling system using Spring Scheduler that syncs new job postings hourly without duplicates, using external ID deduplication backed by PostgreSQL",
            "Designed a relational data model with Spring Data JPA/Hibernate and managed schema evolution using Flyway database migrations",
            "Containerized the development database using Docker for a reproducible local environment",
            "Rendered a dynamic web interface with Thymeleaf templating and responsive CSS",
        ],
    },
    {
        title: "Tarot Card REST API",
        description: "A RESTful Tarot card service built with Spring Boot that serves the full 78-card deck and draws single or multiple unique random cards, backed by PostgreSQL and documented with OpenAPI.",
        techStack: ["Java 17", "Spring Boot 4.1", "Spring Data JPA", "Hibernate", "PostgreSQL", "Springdoc OpenAPI", "JUnit 5", "Mockito", "Lombok", "Maven"],
        github: "https://github.com/mahicks5/tarot_api",
        highlights: [
            "Designed a layered Controller → Service → Repository architecture that separates HTTP handling, business logic, and data access for independent testability",
            "Built endpoints to retrieve the full deck and draw 1 or n random cards, shuffling the deck so every card in a draw is unique",
            "Validated draw requests and centralized error handling in a global exception handler, returning 400 Bad Request for invalid counts",
            "Seeded all 78 cards into PostgreSQL on startup from a JSON dataset, skipping the load when the data already exists",
            "Wrote unit tests with JUnit 5 and Mockito for draw logic and boundary conditions, plus MockMvc tests for HTTP responses and error handling",
        ],
    },
    {
        title: "Text-Based Dungeon Crawler",
        description: "A console-based dungeon crawler RPG built in Java with character creation, turn-based combat, a shop, and leveling, architected with Factory, Mediator, and Singleton design patterns across 15+ entity types and 2,500+ lines of code.",
        techStack: ["Java", "OOP", "Design Patterns", "JUnit 4", "Gradle", "Checkstyle", "SpotBugs"],
        github: "https://github.com/mahicks5/console-dungeon-game",
        highlights: [
            "Built a turn-based combat system where minor, major, and boss enemies spawn based on dungeon depth, with health and damage scaling as players descend",
            "Applied the Factory pattern to create weapons, armor across five equipment slots, and minor, major, and boss enemies",
            "Routed game events through a GameManager mediator to centralize communication between game components",
            "Implemented a Singleton dice class backed by SecureRandom to drive critical hits, misses, bonus chests, and status effects",
            "Designed RPG progression with XP-based leveling, stat point allocation across attack, defense, stamina, and speed, and a shop for potions, antidotes, and spell tomes",
            "Wrote a 12-test JUnit 4 suite covering factories, stats, inventory, enemies, and RNG, with Checkstyle and SpotBugs static analysis configured in the Gradle build",
        ],
    },
    {
        title: "Adaptive Virtual Assistant",
        description: "A full-stack Flask web application built as a team project that uses Google's Gemini API to deliver personalized educational support, adapting answers to each student's age, academic level, learning style, and interests.",
        techStack: ["Python", "Flask", "Flask-Login", "WTForms", "Jinja2", "Google Gemini API", "NLTK", "Bootstrap", "Bleach", "Markdown"],
        github: "https://github.com/mahicks5/group21_adaptivevirtualassistant",
        highlights: [
            "Integrated Google's Gemini API to generate answers tailored to each learner's profile, including academic level, learning style, and personal interests",
            "Built a comprehension scoring service that evaluates user understanding and adjusts response-style weights to adapt future answers",
        ],
    },
    {
        title: "Personal Portfolio Website",
        description: "A website built using Next.js and Tailwind CSS to showcase my projects, skills, and experience, with a terminal-inspired design. (This website!)",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/mahicks5/my-portfolio",
        highlights: [
            "Implemented a responsive design using Tailwind CSS, ensuring optimal viewing across devices",
            "Optimized performance with statically prerendered pages, next/font for font loading, and client-side navigation with next/link",
            "Deployed the website on Vercel, enabling seamless updates and continuous deployment",
        ],
    },
]

export default function Projects() {
    return (
        <main className="min-h-screen bg-black text-[#00ff41] font-mono">

            {/* Intro Section */}
            <section className="max-w-3xl mx-auto px-6 py-24">
                <p className="text-base text-[#00992a] tracking-widest uppercase mb-4">
                    Projects
                </p>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                    What I&apos;ve Built
                </h1>
                <p className="text-[#00ff41] text-2xl leading-snug max-w-2xl mb-6">
                    Backend services, full-stack web apps, and software designed to last.
                </p>
                <p className="text-[#00b32c] text-lg leading-relaxed max-w-xl">
                    Here&apos;s a look at what I&apos;ve built so far, from scheduled Spring Boot
                    services backed by PostgreSQL to object-oriented game engines and AI-integrated
                    assistants.
                </p>
            </section>

            {/* Divider */}
            <div className="max-w-3xl mx-auto px-6">
                <div className="border-t border-[#003b0f]" />
            </div>

            {/* Project List */}
            <section className="max-w-3xl mx-auto px-6 py-20">
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="border border-[#003b0f] hover:border-[#00ff41] transition-colors duration-200 p-6 sm:p-8"
                        >
                            {/* Number, Title, and GitHub Link */}
                            <p className="text-sm text-[#00992a] tracking-widest uppercase mb-2">
                                {String(index + 1).padStart(2, '0')}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
                                <h2 className="text-3xl font-bold tracking-tight">
                                    {project.title}
                                </h2>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 text-base hover:underline"
                                >
                                    View on GitHub --&gt;
                                </a>
                            </div>

                            {/* Description */}
                            <p className="text-[#00b32c] text-lg leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-3 mb-8">
                                {project.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-3 text-base text-[#00b32c] leading-relaxed">
                                        <span className="text-[#00ff41] shrink-0">&gt;</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <p className="text-sm text-[#00992a] tracking-widest uppercase mb-3">
                                Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-base border border-[#003b0f] text-[#00b32c] hover:border-[#00ff41] hover:text-[#00ff41] transition-colors duration-150"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-3xl mx-auto px-6">
                <div className="border-t border-[#003b0f]" />
            </div>

            {/* GitHub Section */}
            <section className="max-w-3xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold tracking-tight mb-4">Want to See More?</h2>
                <p className="text-[#00b32c] text-lg leading-relaxed max-w-xl mb-10">
                    Check out my GitHub for additional projects and contributions, or reach out
                    directly.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://github.com/mahicks5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00ff41] border border-[#00ff41] text-black text-base hover:bg-transparent hover:text-[#00ff41] transition-colors duration-200"
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.070a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" /></svg>
                        mahicks5 on GitHub
                    </a>
                    <a
                        href="mailto:maxwellahicks@gmail.com"
                        className="px-5 py-2.5 border border-[#00ff41] text-[#00ff41] text-base hover:bg-[#00ff41] hover:text-black transition-colors duration-200"
                    >
                        Email Me
                    </a>
                </div>
            </section>

        </main>
    );
}
