import { useState, useEffect, useRef, useContext, useMemo } from "react";
import Navigation from "./components/Header/Navigation";
import Home from "./components/Body/Home/Home";
import About from "./components/Body/About/About";
import Resume from "./components/Body/Resume/Resume";
import Portfolio from "./components/Body/Portfolio/Portfolio";
import Contact from "./components/Body/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { DarkModeContext } from "./contexts/darkModeContext";
import { motion } from "framer-motion";
import "./App.css";

import AnimatedSection from "./components/utilities/AnimatedSection";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useMemo(() => ({
    home: homeRef,
    about: aboutRef,
    resume: resumeRef,
    portfolio: portfolioRef,
    contact: contactRef,
  }));

  // Scroll to section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // IntersectionObserver logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log("IN VIEW:", entry.target.id); // ✅ debug
          }
        });
      },
      {
        threshold: 0.059,
        rootMargin: "-20% 0px -20% 0px", // triggers earlier/later
      }
    );

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <header className="fixed top-0 right-0 lg:top-30 lg:left-10 lg:right-auto z-50 px-3 py-2">
        <Navigation
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
          activeSection={activeSection}
        />
      </header>

      <main className="">
        <section
          id="home"
          ref={homeRef}
          className="min-h-screen scroll-mt-20 transition-all duration-300 ease-in-out"
        >
          <AnimatedSection className="w-full" direction="down">
            <Home scrollToSection={scrollToSection} />
          </AnimatedSection>

          {/* </motion.div> */}
        </section>

        <section
          id="about"
          ref={aboutRef}
          className="min-h-screen scroll-mt-20 transition-all duration-300 ease-in-out"
        >
          <About />
        </section>

        <section
          id="resume"
          ref={resumeRef}
          className="min-h-screen scroll-mt-28 transition-all duration-300 ease-in-out"
        >
          <Resume />
        </section>

        <section
          id="portfolio"
          ref={portfolioRef}
          className="min-h-screen scroll-mt-28 transition-all duration-300 ease-in-out"
        >
          <Portfolio />
        </section>

        <section
          id="contact"
          ref={contactRef}
          className="min-h-screen scroll-mt-20 transition-all duration-300 ease-in-out"
        >
          <Contact />
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
