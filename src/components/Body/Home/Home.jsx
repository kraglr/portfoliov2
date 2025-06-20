import React from "react";
import "./home.scss";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import devAnimation from "../../../assets/lotties/Animation - 1749608750808.json";
import {
  SiLaravel,
  SiReact,
  SiMysql,
  SiNodedotjs,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiPostman,
  // SiNodedotjs,
} from "react-icons/si";
const TechStackIcons = () => {
  return (
    <div className="flex flex-wrap items-center gap-4  text-xl mt-4">
      <SiLaravel title="Laravel" className="hover:text-red-500" />
      <SiReact title="React" className="hover:text-blue-400" />
      <SiMysql title="MySQL" className="hover:text-[#00758F]" />
      <SiNodedotjs title="Node.js" className="hover:text-green-500" />
      <SiSass title="SCSS" className="hover:text-pink-500" />
      <SiBootstrap title="Bootstrap" className="hover:text-purple-600" />
      <SiTailwindcss title="TailwindCSS" className="hover:text-cyan-500" />
      <SiPostman title="Postman" className="hover:text-orange-500" />
    </div>
  );
};
const Home = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="home"
      className="home-container flex items-center justify-center relative  min-h-screen h-screen"
    >
      {/* Background Image Layer */}
      <div className="bg-image absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Foreground Text Layer */}
      <div className="bg-text grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 w-[90%] max-w-7xl mx-auto h-full p-8 relative z-10 text-white">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col justify-center space-y-6 px-25">
          {/* Typing Animation */}
          <h3 className="md:text-3xl text-xl font-bold text-center sm:text-left">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Laravel & React Developer",
                  "Building Scalable Web Systems",
                  "Crafting Seamless Frontends and Powerful Backends",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </h3>

          {/* Description */}
          <div>
            <p className="md:text-lg text-sm leading-relaxed text-center sm:text-left text-gray-200">
              I design and develop healthcare and ERP web systems that
              streamline data management, optimize workflows, and support better
              decision-making across clinical and business environments.
              {/* <span className="text-sm text-gray-400">
                Tech stack: Laravel, React, MySQL, REST APIs, Node.js, SCSS,
                Bootstrap, TailwindCSS
              </span> */}
            </p>
            <div className="flex items-center cursor-pointer">
              <TechStackIcons />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center sm:justify-start">
            <a
              href="#portfolio"
              className="bg-[#3c85c9] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-[#3c85c9] text-[#3c85c9] hover:bg-blue-50 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg text-center"
            >
              Let's Connect
            </a>
          </div>

          {/* Experience */}
          <div className="flex justify-center sm:justify-start">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#3c85c9]">3+</span>
              <span className="text-sm text-gray-200">Years Experience</span>
            </div>
          </div>
        </div>

        {/* Right Column: Lottie Animation */}
        <div className="col-span-1 hidden lg:flex items-center justify-center">
          <Lottie
            animationData={devAnimation}
            loop={true}
            className="w-[100%]"
          />
        </div>
      </div>
    </div>
  );
});

export default Home;
