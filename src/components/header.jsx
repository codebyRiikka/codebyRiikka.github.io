function Header() {
  return (
   <header className="h-screen bg-gradient-to-b from-indigo-900 via-purple-700 to-pink-500 text-white flex justify-center items-center relative" data-aos="fade-in" style={{ backgroundAttachment: "fixed" }}>
      <div className="absolute bottom-0 left-0 w-full z-0 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#fff" fillOpacity="0.3" d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,149.3C672,139,768,181,864,213.3C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between h-full px-6">
        
        {/* Name and pic on the right side */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-8 pt-8 md:pt-[50px] md:pl-[110px]" data-aos="fade-right">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-widest text-shadow-lg" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: "600", fontStyle: "normal", textShadow: "3px 3px 8px rgba(0, 0, 0, 0.3)" }}>
            Riikka Luostarinen
          </h1>
          <img src="Images/cvpic.jpg" alt="Your Picture" className="w-36 h-36 md:w-52 md:h-52 rounded-full border-0 border-white object-cover transform transition-transform duration-500 hover:scale-110 hover:rotate-2" style={{ boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)" }}/>
        </div>

        {/* Nav in the right side */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end justify-center space-y-8 mt-8 md:mt-0 pt-9 pr-0 md:pt-[260px] md:pr-[130px]" data-aos="fade-left">
          <nav className="space-y-4 text-center md:text-right">
            <ul className="text-2xl md:text-3xl space-y-2">
              <li><a href="#about" className="hover:text-pink-300 font-bold transition-all duration-300 transform hover:scale-125 hover:border-b-2 hover:border-pink-300">About</a></li>
              <li><a href="#skills" className="hover:text-pink-300 font-bold transition-all duration-300 transform hover:scale-125 hover:border-b-2 hover:border-pink-300">Skills</a></li>
              <li><a href="#portfolio" className="hover:text-pink-300 font-bold transition-all duration-300 transform hover:scale-125 hover:border-b-2 hover:border-pink-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-pink-300 font-bold transition-all duration-300 transform hover:scale-125 hover:border-b-2 hover:border-pink-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

  
  export default Header;