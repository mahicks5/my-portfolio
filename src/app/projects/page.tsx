import Image from "next/image";

const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A website built using Next.js and Tailwind CSS to showcase my projects, skills, and experience. It features a clean and modern design. (This website!)",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/mahicks5/my-portfolio",
        highlights: [
            "Implemented a responsive design using Tailwind CSS, ensuring optimal viewing across devices.",
            "Optimized performance by leveraging Next.js features such as server-side rendering and image optimization.",
            "Deployed the website on Vercel, enabling seamless updates and continuous deployment.",
        ],
    },
    {
        title: "Job Board Monitor",
        description: "A full-stack web application that automatically tracks and aggregates job postings from target companies in real time. Polls the Greenhouse ATS API on a scheduled interval, persists new postings to a PostgreSQL database, and displays them through a clean web interface — only surfacing roles that haven't been seen before.",
        techStack: ["Java", "Spring Boot 3.5", "Spring Data JPA", "Spring Scheduler", "PostgreSQL", "FLyway", "Thymeleaf", "Maven"],
        github: "https://github.com/mahicks5/job-monitor",
        highlights: [
            "Built a full-stack job monitoring application in Java and Spring Boot that automatically aggregates live postings from target companies via the Greenhouse ATS API",
            "Implemented a scheduled polling system using Spring Scheduler that syncs new job postings hourly without duplicates, using external ID deduplication backed by PostgreSQL",
            "Designed a relational data model with Spring Data JPA/Hibernate and managed schema evolution using Flyway database migrations",
            "Containerized the devlopment database using Docker for a reproducible local environment",
            "Rendered a dynamic web interface with Thymeleaf templating with a responsive CSS interface",
        ],
    },
    {
        title: "Adaptive Virtual Assistant",
        description: "A web-based virtual assistant that integrates multiple AI APIs to provide personalized responses and adapt to user preferences.",
        techStack: ["Python", "REST APIs"],
        github: "https://github.com/mahicks5/group21_adaptivevirtualassistant",
        highlights: [
            "Implemented a RESTful API using Flask, allowing users to perform CRUD operations on a database.",
            "Designed and optimized database schema for efficient data retrieval and storage.",
        ],
    },
    {
        title: "Text-Based Dungeon Crawler",
        description: "A modular dungeon crawler game engine built in Java, utilizing Factory, Strategy, and Singleton design patterns to manage 15+ entity types and dynamic game states across 2,500+ lines of code.",
        techStack: ["Java", "OOP", "Design Patterns", "JUnit"],
        github: "https://github.com/mahicks5/console-dungeon-game",
        highlights: [
            "Implemented a RESTful API using Flask, allowing users to perform CRUD operations on a database.",
            "Designed and optimized database schema for efficient data retrieval and storage.",
        ],
    },
]

export default function Projects() {
    return (
        <main className="min-h-screen bg-black text-[#00ff41]">
            <div className="max-w-4xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-center mb-8">Projects:</h1>
                    <p className="text-xl">
                        Here's a look at what I've built so far.
                    </p>
                </div>

                {/* Project List */}
                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-[#31363c] transition p-8"
                        >
                            {/* Project Title and Description */}
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold">
                                    {project.title}
                                </h2>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center hover:underline">
                                    View on GitHub --&gt;
                                </a>

                            </div>

                            {/* Description */}
                            <p className="leading-relaxed mb-6 italic">
                                {project.description}
                            </p>

                            {/* Highlights */}
                            <ul className="mb-6 space-y-2">
                                {project.highlights.map((highlight, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        {/* Custom bullet point */}
                                        <span>
                                            ·
                                        </span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm px-3 py-1 rounded transition-transform hover:scale-120"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* GitHub Plug */}
                    <div className="text-center mt-16">
                        <p className="text-gray-600 mb-6">
                            Interested in seeing more? Check out my GitHub for additional projects and contributions!
                        </p>
                        <a
                            href="https://github.com/mahicks5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="justify-center col-span-2 text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 rounded-lg focus:outline-none box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#24292F]">
                            <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" /></svg>
                            mahicks5 on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
