import Image from "next/image";

const CORE_LANGUAGES = ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS',];
const FRAMEWORKS_LIBRARIES = ['Spring Boot', 'Spring Data JPA', 'React', 'REST APIs', 'JUnit',];
const DATABASES = ['PostgreSQL',];
const TOOLS_PLATFORMS = ['Git', 'Docker', 'Linux', 'AWS', 'CI/CD',];
const AI_LLM_INTEGRATION = ['Claude', 'GitHub Copilot', 'LLM API Integration', 'Prompt Engineering',];
const FUNDAMENTALS = ['Object-Oriented Design', 'Design Patterns', 'Data Structures & Algorithms', 'Agile/Scrum', 'Problem Solving'];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Hello, I'm Maxwell Hicks.
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Software Engineer | Arizona State University Graduate
          </p>
          <p className="text-md max-w-2xl mx-auto mb-8">
            My focus is build backend services and APIs.
            I have experience with a variety of programming languages and frameworks, and I'm always eager to learn new technologies and improve my skills.
            I enjoy working on challenging projects that allow me to solve complex problems and create innovative solutions!
          </p>
          <div className="flex gap-4 justify-center">
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="">
          <h2 className="text-center text-5xl font-bold mb-4">My Skills:</h2>

          {/* Core Languages */}
          <h2 className="text-xl font-bold mb-4">Core Languages:</h2>
          <div className="text-center">
            {CORE_LANGUAGES.map((item) => (
              <div key={item} className="inline-flex p-1 text-sm">
                <span key={item} className="px-4 py-2">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Frameworks and Libraries */}
          <h2 className="text-xl font-bold mb-4">Frameworks and Libraries:</h2>
          <div className="text-center">
            {FRAMEWORKS_LIBRARIES.map((item) => (
              <div key={item} className="relative rounded-lg inline-flex items-center justify-center p-1 text-sm">
                <span key={item} className="px-4 py-2">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Databases */}
          <h2 className="text-xl font-bold mb-4">Databases:</h2>
          <div className="text-center">
            {DATABASES.map((item) => (
              <div key={item} className="relative rounded-lg inline-flex items-center justify-center p-1 text-sm">
                <span key={item} className="px-4 py-2">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Tools and Platforms */}
          <h2 className="text-xl font-bold mb-4">Tools and Platforms:</h2>
          <div className="text-center">
            {TOOLS_PLATFORMS.map((item) => (
              <div key={item} className="relative rounded-lg inline-flex items-center justify-center p-1 text-sm">
                <span key={item} className="px-4 py-2">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* AI and LLM Integration */}
          <h2 className="text-xl font-bold mb-4">AI and LLM Integration:</h2>
          <div className="text-center">
            {AI_LLM_INTEGRATION.map((item) => (
              <div key={item} className="relative rounded-lg inline-flex items-center justify-center p-1 text-sm">
                <span key={item} className="px-4 py-2">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Fundamentals */}
          <h2 className="text-xl font-bold mb-4">Fundamentals:</h2>
          <div className="text-center">
            {FUNDAMENTALS.map((item) => (
              <div key={item} className="relative rounded-lg inline-flex items-center justify-center p-1 text-sm">
                <span key={item} className="px-4 py-2">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-5xl mb-4">Let's Connect:</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            I'm always open to new opportunities and collaborations.
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Feel free to reach out to me!
          </p>

          <div className="grid lg:grid-cols-6 gap-4">
            <a
              href="mailto:maxwellahicks5@gmail.com"
              className="flex justify-start col-span-2 text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 rounded-lg focus:outline-none box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-right inline-flex items-center dark:hover:bg-[#24292F]">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
              </svg>
              <p className="ml-auto mr-auto">
                Connect With Email
              </p>
            </a>
            <a
              href="https://github.com/mahicks5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start col-span-2 text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 rounded-lg focus:outline-none box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-right inline-flex items-center dark:hover:bg-[#24292F]">
              <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" /></svg>
              <p className="ml-auto mr-auto">
                Check Out My GitHub
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/maxwell-h-2647622a4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start col-span-2 text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 rounded-lg focus:outline-none box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-right inline-flex items-center dark:hover:bg-[#24292F]">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
              <p className="ml-auto mr-auto">
                Connect With LinkedIn
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
