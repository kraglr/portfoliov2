import React from "react";
import "./about.scss";
import img from "../../../assets/img/viber_image_2025-06-07_12-21-23-240.jpg";

const About = () => {
  return (
    <div className="about-container mx-auto w-full pt-16">
      <div className="w-[90%] lg:w-[75%] xl:w-[75%] mx-auto py-10">
        <div className="container-header w-full text-center justify-center py-5">
          <h1 className="font-jumbled text-4xl font-bold text-gray-800 text-center">
            About
          </h1>

          <div className="text-center mx-auto justify-center items-center">
            <svg
              className="mx-auto text-center w-[300px]"
              viewBox="0 0 300 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="mx-auto"
                d="M 0,10 C 60,0 90,20 150,10 C 210,0 240,20 300,10"
                fill="none"
                // stroke="#3c85c9"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="w-[75%] mx-auto"></div>
        </div>

        <div className="container-body my-3 about-container-body">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3">
            <div className="about-img col-span-1 lg:p-16 md:p-10 p-2 items-center align-middle my-auto justify-center">
              <img src={img} alt="About Image" className="mx-auto my-auto" />
            </div>

            <div className="about-content col-span-1 py-7 px-3">
              <div className="about-header my-3 px-3 py-2">
                <h2 className="font-jumbled text-center my-3">Web Developer</h2>
                <p className="text-justify">
                  Web Developer with 3 years of experience in designing,
                  developing, and maintaining responsive websites and web
                  applications. Proficient in HTML, CSS, JavaScript, PHP,
                  Laravel, and React.js, with a strong understanding of database
                  management (MySQL, MongoDB) and API integration. Adept at
                  troubleshooting, optimizing website performance, and ensuring
                  security best practices. Passionate about creating
                  user-friendly, scalable, and high-performing web solutions
                  that meet business needs.
                </p>
              </div>

              <div className="card shadow-md personal-info p-5 my-3 overflow-auto">
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4">
                  <div className="col-span-1">
                    <div className="info-item flex flex-col gap-3">
                      <span className="label text-gray-500">Name</span>
                      <span className="value">Kier Luna Aguilar</span>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="info-item flex flex-col gap-3">
                      <span className="label text-gray-500">Phone</span>
                      <span className="value">+639606023995</span>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="info-item flex flex-col gap-3">
                      <span className="label text-gray-500">Age</span>
                      <span className="value">27 Years</span>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="info-item flex flex-col gap-3">
                      <span className="label text-gray-500">Email</span>
                      <span className="value">aguilarkier25@gmail.com</span>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="info-item flex flex-col gap-3">
                      <span className="label text-gray-500">Occupation</span>
                      <span className="value">Web Developer</span>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="info-item flex flex-col gap-3">
                      <span className="label text-gray-500">Nationality</span>
                      <span className="value">Filipino</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
