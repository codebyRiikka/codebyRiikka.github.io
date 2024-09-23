function Contact() {
    return (
      <section id="contact" className="py-16 bg-gradient-to-b from-white via-purple-500 to-indigo-900">
        <div className="container mx-auto px-6">
          {/* Valkoinen kortti, jossa on yhteystiedot */}
          <div className="mt-12 bg-white shadow-md rounded-lg p-8 transition transform hover:scale-105">
            {/* Otsikko */}
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 shadow-sm">
              Contact Me
            </h2>
            
            {/* Yhteystieto-teksti */}
            <div className="text-center text-lg text-gray-700 mb-6">
              <p>If you wish to reach out to me, feel free to contact me via email or connect on LinkedIn.</p>
            </div>
            
            {/* Sähköposti- ja LinkedIn-linkit, modernit painikkeet */}
            <div className="flex flex-col items-center space-y-4">
              <a 
                href="mailto:rixuuu95@gmail.com" 
                className="text-lg text-white bg-blue-700 hover:bg-blue-800 transition-all duration-300 ease-in-out py-3 px-6 rounded-full shadow-md transform hover:scale-105">
                <strong>Email:</strong> rixuuu95@gmail.com
              </a>
  
              <a 
                href="https://www.linkedin.com/in/riikka-luostarinen-921734307/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-white bg-blue-800 hover:bg-blue-900 transition-all duration-300 ease-in-out py-3 px-6 rounded-full shadow-md transform hover:scale-105">
                <strong>LinkedIn:</strong> Riikka Luostarinen
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;