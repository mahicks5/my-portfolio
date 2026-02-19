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
              href="https://github.com/mahicks5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
            >
              GitHub
            </a> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">My Skills:</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {['Java', 'JavaScript', 'Python', 'C', 'Linux' , 'Git', 'SQL', 'Design Patterns', 'Problem Solving'].map((skill) => (
              <div key={skill} className="border-solid border-1 border-white relative rounded-lg inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-heading rounded-base group bg-gradient-to-br from-purple-600 to-blue-500 hover:to-purple-600 hover:from-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span key={skill} className="border-solid relative rounded-lg px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base hover:bg-transparent hover:dark:bg-transparent leading-5">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Let's Connect:</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me!
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {/* <a
              href="mailto:maxwellahicks5@gmail.com"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
            >
              Email Me
            </a>
            <a
              href="https://github.com/mahicks5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
            >
              GitHub
            </a> */}

            <button type="button" className="justify-center col-span-2 text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 rounded-lg focus:outline-none focus:ring-[#0f1419]/50 box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#24292F] dark:focus:ring-[#24292F]/55">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/></svg>
                Email Me
            </button>

            <button type="button" className="justify-center col-span-2 text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 rounded-lg focus:outline-none focus:ring-[#0f1419]/50 box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#24292F] dark:focus:ring-[#24292F]/55">
              <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/></svg>
                Check Out My GitHub
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
