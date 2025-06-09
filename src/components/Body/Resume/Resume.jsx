import React from "react";
import "./resume.scss";
import Skills from "../Skills/Skills";

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
          {
            <h5 className="text-lg font-semibold mb-1">
              {period} <span className="italic">({institution})</span>
            </h5>
          }
          {description && <p className="mb-3">{description}</p>}
          {duties && duties.length > 0 && (
            <ul className="list-disc pl-5 space-y-1">
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

// Use forwardRef to expose the ref
const Resume = () => {
  return (
    <div className="resume-container px-10 transition-all ease-in-out duration-500 pt-25 pb-10">
      <div className="w-[90%] lg:w-[75%] xl:w-[75%] mx-auto mb-12">
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
        <p className="text-center text-lg mb-12 max-w-4xl mx-auto">
          I am a dedicated and results-oriented professional with a passion for
          continuous learning and problem-solving. My resume showcases my
          experience and growth in the tech industry, highlighting my commitment
          to developing innovative solutions and leading successful projects.
        </p>

        <h3 className="text-3xl font-semibold mb-6 border-b-2 border-yellow-500 pb-2 inline-block">
          Technical Skills
        </h3>
        <Skills />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 my-10">
          {/* Left: Education */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 border-b-2 border-yellow-500 pb-2 inline-block">
              Education
            </h3>
            <ResumeItem
              type="education"
              title="Bachelor of Science in Computer Engineering"
              period="2014 - 2019"
              institution="Southern Luzon State University"
              description="Completed a comprehensive curriculum covering software development, hardware design, and network systems."
            />
          </div>

          {/* Right: Experience */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 border-b-2 border-yellow-500 pb-2 inline-block">
              Professional Experience
            </h3>
            <ResumeItem
              type="experience"
              title="SR. Developer & Supervisor"
              period="2025 - Present"
              institution="One Document Corporation"
              description="Led and managed a team of developers, overseeing the full software development lifecycle from design to deployment. Responsible for technical guidance, project coordination, and ensuring high-quality deliverables."
              duties={
                [
                  // "Oversaw and guided development teams in building and optimizing web applications based on client or company needs, specializing in Healthcare Information Systems.",
                  // "Assisted in managing and optimizing database schemas (MySQL) and complex queries for enhanced system performance and scalability.",
                  // "Architected and integrated robust RESTful and SOAP APIs, ensuring seamless connectivity with third-party services.",
                  // "Provided technical leadership, code reviews, and mentorship to junior developers, facilitating skill development and adherence to best practices.",
                  // "Drove technical decision-making and problem-solving for complex development challenges.",
                ]
              }
            />
            <ResumeItem
              type="experience"
              title="JR. Developer"
              period="2022 - 2024"
              institution="One Document Corporation"
              duties={[
                "Developed and maintained responsive web applications using HTML, CSS, and JavaScript, with a focus on Healthcare Information Systems.",
                "Implemented features and optimized existing web applications according to project requirements and design specifications.",
                "Assisted in managing and optimizing database queries (MySQL) for application functionality.",
                "Integrated and consumed RESTful and SOAP APIs for various application functionalities.",
                "Collaborated with senior developers on technical solutions and participated in code reviews.",
              ]}
            />
            <ResumeItem
              type="experience"
              title="Executive Researcher"
              period="2021 - 2022"
              institution="That's Great News"
              duties={[
                "Delivers the required number of leads on a daily, weekly, and monthly basis.",
                "Manages assigned publication, ensuring all issues are updated.",
              ]}
            />
            <ResumeItem
              type="experience"
              title="Technical Support (Intern)"
              period="2018"
              institution="RJ Globus Solutions"
              duties={[
                "Assist employees with troubleshooting hardware and software issues.",
                "Provide remote or on-site technical support via phone, email, or chat.",
                "Guide users on basic troubleshooting steps and IT best practices.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
