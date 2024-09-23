import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Contact from './components/contactme';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      offset: 120,
      once: true,
     });
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      {/* More components in the future? */}
    </div>
  );
}

export default App;