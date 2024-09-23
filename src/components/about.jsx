function About() {
    return (
      <section id="about" className="py-16 bg-gradient-to-b from-pink-500 via-purple-400 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                I am a 29-year-old career changer with a passion for technology, which led me to pursue a degree in Information and Communication Technology.
                In addition to programming, I have studied the fundamentals of ICT and basic embedded systems, which I also find fascinating.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Previously, I worked as a practical nurse in elderly care for seven years. However, I sought new challenges in my life and spent a long time 
                searching for the right path. Now, I believe I have found a new direction for my career, and I am very determinedly pursuing it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In my free time, I enjoy various forms of exercise, especially long-distance running and cycling. Additionally, I love playing video games with my partner and spending time with our three cats ^^.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Education and Career</h3>
              <p className="text-gray-700 leading-relaxed">
                I graduated from high school with satisfactory grades in 2015. Due to a challenging life situation at the time, I did not really have the opportunity
                to think deeply about what I truly wanted for my future.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Having seen the work of practical nurses up close, I decided to pursue a degree in practical nursing, studying from 2015 to 2017. I worked for seven years in elderly care, but now I am pursuing a new career in technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;