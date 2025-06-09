import React from "react";
import "./home.scss";
// Removed import "./home.scss"; as SCSS imports are causing issues.
// Styles will be embedded directly in a <style> tag or handled by Tailwind.
import bgIMG from "../../../assets/img/generatedimg.png"; // Still import for reference, but path will be used in CSS.

const Home = React.forwardRef((props, ref) => {
  return (
    // The main container is relative to allow absolute positioning of the background image.
    // Tailwind classes provide centering and overflow handling.
    <div
      ref={ref}
      id="home"
      className="home-container flex items-center justify-center relative  w-full min-h-screen h-screen"
    >
      <div className="bg-image absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="bg-text grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 w-[75%] mx-auto h-full my-auto p-5 relative z-10 text-white">
        {" "}
        {/* Added text-white for visibility */}
        <div className="col-span-1">
          <div className="" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl font-bold mb-4">
              Web Developer Specializing in Laravel & React
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Currently working on healthcare systems that improve patient data
              management and clinical workflows.
            </p>
            <div
              className="flex space-x-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a
                href="#portfolio"
                className="bg-[#3c85c9] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg "
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-[#3c85c9] text-[#3c85c9] hover:bg-blue-50 hover:text-blue-700 font-bold py-3 px-6 rounded-lg "
              >
                Let's Connect
              </a>
            </div>
            <div
              className="flex justify-start items-center text-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex flex-col items-center">
                {/* Text color for stats needs to be visible against the blurred background */}
                <span className="text-4xl font-bold text-[#3c85c9]">3+</span>
                <span className="text-sm text-gray-200">
                  Years Experience
                </span>{" "}
                {/* Changed to gray-200 for visibility */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
});

export default Home;
