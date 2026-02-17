import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hello, I'm Maxwell Hicks.
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Software Engineer | Arizona State University Graduate
          </p>
          <p className="text-md text-gray-700 max-w-2xl mx-auto mb-8">
            My focus is build backend services and APIs.
            I have experience with a variety of programming languages and frameworks, and I'm always eager to learn new technologies and improve my skills.
            I enjoy working on challenging projects that allow me to solve complex problems and create innovative solutions!
          </p>
          <div className="flex gap-4 justify-center">
            {/* <a
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
            >
              View Projects
            </a> */}
            <a
              href="https://github.com/mahicks5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">My Skills:</h2>
          <div className="grid grid-cols-6 md:grid-cols4 gap-4">
            {['Java', 'JavaScript', 'Python', 'C', 'Linux' , 'Git', 'SQL', 'Design Patterns', 'Problem Solving'].map((skill) => (
              <div
                key={skill}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Let's Connect:</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me!
        </p>
        <a
          href="mailto:maxwellahicks5@gmail.com"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
        >
          Email Me
        </a>
      </section>
    </main>
  );
}
