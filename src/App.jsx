import { useState, useEffect, useRef, useContext } from "react";
import "./App.css";

import Navigation from "./components/Header/Navigation";
import Home from "./components/Body/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/Body/About/About";
import Skills from "./components/Body/Skills/Skills";
import { DarkModeContext } from "./contexts/darkModeContext.jsx";
import Resume from "./components/Body/Resume/Resume.jsx";
import Contact from "./components/Body/Contact/Contact.jsx";
import Portfolio from "./components/Body/Portfolio/Portfolio.jsx";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
function App() {
  AOS.init();
  const { darkMode } = useContext(DarkModeContext);
  const [activeSection, setActiveSection] = useState("home");

  // Refs for all sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const portRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    resume: resumeRef,
    portfolio: portRef,
    // services: servicesRef,
    contact: contactRef,
  };

  // Scroll to section function
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Observe all sections and update activeSection accordingly
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          setActiveSection(id);
        }
      });
    }, options);

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("id", key);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"} font-sans`}>
      <header className="fixed top-0 right-0 lg:top-30 lg:left-10 lg:right-auto z-50 px-3 py-2">
        <Navigation
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
          activeSection={activeSection} // Active section for nav highlight
        />
      </header>

      <main className="w-full">
        <section id="home" ref={homeRef} className="w-[100%]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Home scrollToSection={scrollToSection} />
          </motion.div>
        </section>

        <section id="about" ref={aboutRef} className="w-[100%]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <About />
          </motion.div>
        </section>

        <section id="resume" ref={resumeRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Resume />
          </motion.div>
        </section>

        <section id="portfolio" ref={portRef} className="w-[100%]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Portfolio />
          </motion.div>
        </section>

        <section id="contact" ref={contactRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </section>

        {/* <section
          ref={servicesRef}
          id="services"
          className="min-h-screen bg-blue-500 text-white flex flex-col items-center justify-center p-8 my-8 shadow-lg rounded-xl"
        >
          <div className="container mx-auto text-center py-16">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-xl mb-12">
              We offer a wide range of services to meet your digital needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-blue-600 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
                <p className="text-gray-200">
                  Building responsive and high-performance websites.
                </p>
              </div>
              <div className="p-6 bg-blue-600 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
                <p className="text-gray-200">
                  Creating intuitive and visually appealing user interfaces.
                </p>
              </div>
              <div className="p-6 bg-blue-600 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">Mobile Apps</h3>
                <p className="text-gray-200">
                  Developing native and cross-platform mobile applications.
                </p>
              </div>
              <div className="p-6 bg-blue-600 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">
                  SEO Optimization
                </h3>
                <p className="text-gray-200">
                  Improving your website's visibility on search engines.
                </p>
              </div>
              <div className="p-6 bg-blue-600 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">Cloud Solutions</h3>
                <p className="text-gray-200">
                  Scalable and secure cloud infrastructure setup and management.
                </p>
              </div>
              <div className="p-6 bg-blue-600 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">
                  Digital Marketing
                </h3>
                <p className="text-gray-200">
                  Strategic marketing campaigns to grow your online presence.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* <footer className="">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
