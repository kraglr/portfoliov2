import { useState, useEffect, useRef, useContext } from "react";
import "./App.css"; // Ensure App.css is in the same directory as App.jsx
// import "./styles.scss"; // Ensure styles.scss is in the same directory as App.jsx and your build setup handles SCSS

// Double-check these import paths and file names (including casing)
import Navigation from "./components/Header/Navigation";
import Home from "./components/Body/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/Body/About/About";
import Skills from "./components/Body/Skills/Skills";
import { DarkModeContext } from "./contexts/darkModeContext.jsx"; // Ensure this path is correct

function App() {
  const [count, setCount] = useState(0); // Keeping user's original state
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  // Now, useContext(DarkModeContext) will successfully get the value
  // because App will be wrapped by DarkModeContextProvider in index.js/main.jsx
  const { darkMode } = useContext(DarkModeContext);

  // Create refs for each section you want to scroll to
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling to a specific section
  const scrollToSection = (ref) => {
    if (ref.current) {
      // Ensure the ref is attached to a DOM element
      ref.current.scrollIntoView({
        behavior: "smooth", // Makes the scroll animation smooth
        block: "start", // Aligns the top of the element with the top of the viewport
      });
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    // Set initial value
    setIsMobileOrTablet(mediaQuery.matches);

    // Listener for resize
    function handleResize(e) {
      setIsMobileOrTablet(e.matches);
    }

    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    // The DarkModeContextProvider is removed from here.
    // It should wrap the <App /> component in your application's entry file (e.g., index.js or main.jsx).
    <div className={`theme-${darkMode ? "dark" : "light"} font-sans`}>
      {/* Pass scrollToSection function and an object of refs to Navigation */}
      <nav className="sticky top-0 z-50">
        <Navigation
          scrollToSection={scrollToSection}
          sectionRefs={{ homeRef, aboutRef, servicesRef, contactRef }}
        />
      </nav>

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Add padding-top to account for fixed navbar */}
        {/* Home Section - uses the user's provided Home component structure */}
        <section ref={homeRef} className="w-[100%]">
          <Home />
        </section>
        <section
          ref={aboutRef}
          id="about-me"
          className="text-gray-800 flex flex-col shadow-lg "
        >
          <About />
        </section>
        <section
          id="skills"
          className="skills section min-h-screen flex flex-col p-8 my-8 shadow-lg "
        >
          <Skills />
        </section>
        {/* About Section - Placeholder, integrate your actual About component here and pass ref */}
        <section
          id="about"
          className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-8 my-8 shadow-lg rounded-xl"
        >
          <div className="container mx-auto text-center py-16">
            <h2 className="text-4xl font-bold mb-6 text-blue-700">About Us</h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              We are a passionate team dedicated to crafting exceptional digital
              experiences. With years of expertise, we transform innovative
              ideas into robust, user-friendly solutions that drive success. Our
              commitment to quality and client satisfaction sets us apart.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3 text-blue-600">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To empower businesses and individuals with cutting-edge
                  technology and intuitive design, fostering growth and
                  connection.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3 text-blue-600">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To be a leader in digital innovation, creating solutions that
                  not only meet but exceed expectations, making a lasting
                  positive impact.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3 text-blue-600">
                  Our Values
                </h3>
                <p className="text-gray-700">
                  Integrity, Creativity, Collaboration, Excellence, and
                  User-Centricity guide everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section - Placeholder, integrate your actual Services component here and pass ref */}
        <section
          ref={servicesRef} // Attach the ref to this section
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
        </section>
        <section
          ref={contactRef} // Attach the ref to this section
          id="contact"
          className="min-h-screen bg-white text-gray-800 flex items-center justify-center p-8 mt-8 rounded-t-xl shadow-lg"
        >
          <div className="container mx-auto text-center py-16">
            <h2 className="text-4xl font-bold mb-6 text-blue-700">
              Contact Us
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Have a project in mind or just want to say hello? Feel free to
              reach out!
            </p>
            <form className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white p-6 text-center mt-12 rounded-t-xl">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
