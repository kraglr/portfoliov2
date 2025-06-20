import React from "react";
import "./resume.scss";
import Skills from "../Skills/Skills";
import { motion } from "framer-motion";
import AnimatedSection from "../../utilities/AnimatedSection";

// Reusable ResumeItem component
const ResumeItem = ({
  type,
  title,
  period,
  institution,
  description,
  duties,
}) => {
  return (
    <div className="resume-item-container relative pl-12 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-300"></div>
      <div className="absolute left-[-6px] top-0 h-4 w-4 rounded-full bg-blue-300 border-2 border-white dark:border-gray-800"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 items-start">
        <div
          className={type === "education" ? "md:col-span-3" : "md:col-span-4"}
        >
          <h4 className="text-xl font-bold mb-1">{title}</h4>
          <h5 className="text-lg font-semibold mb-1">
            {period} <span className="italic">({institution})</span>
          </h5>
          {description && <p className="mb-3">{description}</p>}
          {duties && duties.length > 0 && (
            <ul className="list-disc pl-5 space-y-1 text-base">
              {duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="resume-container px-6 sm:px-10 transition-all ease-in-out duration-500 pt-20 pb-12">
      <div className="w-[90%] lg:w-[75%] xl:w-[75%] mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center font-jumbled">Resume</h2>
        <div className="text-center mx-auto justify-center items-center">
          <svg
            className="mx-auto text-center w-[300px] curved-line"
            viewBox="0 0 300 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0,10 C 60,0 90,20 150,10 C 210,0 240,20 300,10"
              fill="none"
              strokeWidth="2"
            ></path>
          </svg>
        </div>

        {/* Intro Paragraph */}
        <p className="text-center text-lg mt-6 mb-6 max-w-4xl mx-auto">
          Passionate full-stack developer with a strong foundation in ERP and
          healthcare systems. Proven ability to lead projects, design scalable
          architectures, and build efficient web solutions that solve real-world
          problems.
        </p>

        {/* Resume Button */}
        {/* <div className="text-center mb-12">
            <a
              href="https://github.com/kraglr/portfoliov2/blob/942400989aafa2e93afba1b4e58487833a89bacb/public/files/RESUME_KLA.pdf"
              download
              className="inline-block bg-[#3c85c9] hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Download Resume
            </a>
          </div> */}

        {/* Skills */}
        <AnimatedSection direction="top" delay={0.2} mode="wait">
          <h3 className="text-3xl font-semibold mb-6 border-b-2 border-yellow-500 pb-2 inline-block">
            Technical Skills
          </h3>
          <Skills />
        </AnimatedSection>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mt-16">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 border-b-2 border-yellow-500 pb-2 inline-block">
              Education
            </h3>
            <AnimatedSection mode="wait" direction="down">
              <ResumeItem
                type="education"
                title="Bachelor of Science in Computer Engineering"
                period="2014 - 2019"
                institution="Southern Luzon State University"
                description="Completed a comprehensive curriculum covering software development, hardware design, and network systems."
              />
            </AnimatedSection>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6 border-b-2 border-yellow-500 pb-2 inline-block">
              Professional Experience
            </h3>
            <AnimatedSection mode="wait" direction="down">
              <ResumeItem
                type="experience"
                title="SR. Developer & Supervisor"
                period="2025 - Present"
                institution="One Document Corporation"
                description="Led development teams for ERP and EHR systems, managing both technical architecture and developer growth."
                duties={[
                  "Architected modular systems for ERP and EHR platforms using Laravel and React.",
                  "Oversaw API integration and database optimization to support growing datasets and users.",
                  "Conducted code reviews, mentoring junior developers and enforcing clean code standards.",
                  "Collaborated with stakeholders to define project scope and timelines, ensuring timely delivery.",
                ]}
              />
            </AnimatedSection>
            <AnimatedSection mode="wait" direction="down">
              <ResumeItem
                type="experience"
                title="JR. Developer"
                period="2022 - 2024"
                institution="One Document Corporation"
                duties={[
                  "Developed and maintained responsive web apps focused on healthcare workflows.",
                  "Optimized SQL queries and implemented REST/SOAP API integrations.",
                  "Built reusable React components and participated in UI/UX reviews.",
                  "Collaborated with senior developers during planning, development, and code reviews.",
                ]}
              />
            </AnimatedSection>
            <AnimatedSection mode="wait" direction="down">
              <ResumeItem
                type="experience"
                title="Executive Researcher"
                period="2021 - 2022"
                institution="That's Great News"
                duties={[
                  "Generated leads from published content and managed publication tracking.",
                  "Maintained high accuracy under daily quota pressure across multiple data channels.",
                ]}
              />
            </AnimatedSection>
            <AnimatedSection mode="wait" direction="down">
              <ResumeItem
                type="experience"
                title="Technical Support (Intern)"
                period="2018"
                institution="RJ Globus Solutions"
                duties={[
                  "Provided first-level support for desktop, network, and printing issues.",
                  "Guided employees on basic troubleshooting and helped resolve service tickets.",
                ]}
              />
            </AnimatedSection>
          </div>

          {/* Experience */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
