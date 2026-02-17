import Image from "next/image";

const projects = [
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
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-4xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">Projects</h1>
                    <p className="text-xl text-gray-600">
                        A look at what I've built so far.
                    </p>
                </div>

                {/* Project List */}
                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-8"
                        >
                            {/* Project Title and Description */}
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {project.title}
                                </h2>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm border-gray-300 px-4 py-2 rounded-lg text-blue-400 hover:border-blue-500 hover:text-blue-700 transition ml-4 whitespace-nowrap"
                                >
                                    View on GitHub
                                </a>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Highlights */}
                            <ul className="mb-6 space-y-2">
                                {project.highlights.map((highlight, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-gray-700"
                                    >
                                        <span className="text-blue-500">▹</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
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
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
