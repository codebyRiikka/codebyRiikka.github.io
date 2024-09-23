function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-100 via-purple-500 to-indigo-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white shadow-md rounded-lg p-8 transition transform hover:scale-105">
            <h4 className="text-2xl font-semibold mb-6 text-gray-700">Programming Languages</h4>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 transition transform hover:scale-105">
            <h4 className="text-2xl font-semibold mb-6 text-gray-700">Software</h4>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Visual Studio Code</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 transition transform hover:scale-105">
            <h4 className="text-2xl font-semibold mb-6 text-gray-700">Other Skills</h4>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Team Work</li>
              <li>Persistence</li>
              <li>Hard Worker</li>
              <li>Systematic</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 bg-white shadow-md rounded-lg p-8 transition transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Currently working on:</h3>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>
              Taking independently a fullstack web development course from <a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer" className="text-blue-800 underline hover:text-blue-700">FullStackOpen</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
