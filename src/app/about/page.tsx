import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Description */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-5xl font-bold text-gray-800 text-center">Get To Know Me:</h2>

          <p className="text-md text-left text-gray-700 max-w-2xl mx-auto mb-8">
            I'm a Software Engineering graduate from Arizona State University with a passion
            for building scalable, well-designed applications. My journey into software
            engineering has been driven by a love for problem-solving and a curiosity about
            how things work under the hood.
          </p>

          <p className="text-md text-left text-gray-700 max-w-2xl mx-auto mb-8">
            I specialize in full-stack development with a strong foundation in object-oriented
            programming, data structures, and algorithms. Whether it's architecting a modular
            game engine with design patterns or integrating multiple AI APIs to create an
            adaptive virtual assistant, I enjoy tackling complex technical challenges and
            turning them into clean, maintainable code.
          </p>

          <p className="text-md text-left text-gray-700 max-w-2xl mx-auto mb-8">
            Before transitioning into software engineering, I spent several years as a Shift
            Supervisor at Starbucks, where I honed my leadership, communication, and
            problem-solving skills. Managing daily operations in a fast-paced environment
            taught me the importance of efficiency, teamwork, and staying calm under pressure.
          </p>

          <p className="text-md text-left text-gray-700 max-w-2xl mx-auto mb-8">
            I'm excited to bring my technical expertise and problem-solving mindset to an
            entry-level software engineering role where I can contribute to meaningful projects
            and continue growing as a developer.
          </p>

        </div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Education:</h2>
        <div className="bg-white rounded-lg shadow-sm p-8 mx-auto mb-8">
          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-xl text-gray-700 font-semibold">Bachelor of Science in Engineering</h3>
            <p className="text-gray-600">Software Engineering</p>
            <p className="text-gray-600">Arizona State University | Graduated August 2025</p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Relevant Coursework:</span> Data Structures &
              Algorithms, Secure Software Systems, Web Applications
            </p>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-5xl font-bold text-gray-800 text-center">What I'm Looking For:</h2>

          <p className="text-md text-left text-gray-700 max-w-2xl mx-auto mb-8">
            I'm seeking an entry-level Software Engineer position where I can apply my technical 
            skills to real-world problems, collaborate with experienced developers, and continue 
            learning and growing in my career.
          </p>

          <p className="text-md text-left text-gray-700 max-w-2xl mx-auto mb-8">
            I'm particularly interested in opportunities that involve full-stack development, 
            API design, or building scalable backend systems. I thrive in collaborative 
            environments and am always eager to learn new technologies and best practices.
          </p>
        </div>
      </section>
    </main>
  );
}
