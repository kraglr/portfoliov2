import React from "react";
import "./home.scss";

const Home = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="home" className="container p-7">
      {/* Added ref, id, and some layout classes for better integration */}
      <div className="grid grid-cols-2 w-[75%] mx-auto mt-10">
        <div className=" col-span-1">
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
                className="bg-[#3c85c9] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-[#3c85c9] text-[#3c85c9] hover:bg-blue-50 hover:text-blue-700 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
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
                <span className="text-4xl font-bold text-[#3c85c9]">3+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
              {/* Removed commented out stats from original Home.jsx to avoid clutter in the main file */}
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
});

export default Home;
