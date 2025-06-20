import React from "react";
import "./about.scss";
import img from "../../../assets/img/viber_image_2025-06-07_12-21-23-240.jpg";

const About = () => {
  return (
    <div
      className="about-container mx-auto w-full pt-16 "
      // data-aos="slide-up"
      // data-aos-duration="800"
      // data-aos-easing="ease-in-out"
      // data-aos-delay="300"
    >
      <div className="w-[90%] lg:w-[75%] xl:w-[75%] mx-auto py-10">
        {/* Header */}
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
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="container-body my-3 about-container-body">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3">
            {/* Image with animation */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="300"
              className="w-80 mx-auto"
            >
              <img
                src={img}
                alt="Portrait of Kier Luna Aguilar"
                className="mx-auto my-auto"
              />
            </div>

            {/* Text with animation */}
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <div className="about-header my-3 px-3 py-2">
                <h2 className="font-jumbled text-center my-3 text-2xl">
                  Web Developer
                </h2>
                <p className="text-justify">
                  Results-driven Web Developer with 3+ years of experience
                  building responsive, high-performance web systems. Skilled in
                  Laravel, React.js, and full-stack development with a solid
                  foundation in MySQL, RESTful APIs, and modern UI frameworks.
                  Experienced in both healthcare and ERP applications, focusing
                  on scalable architectures, data security, and seamless user
                  experiences.
                </p>
              </div>

              {/* Personal Info Card */}
              <div className="card shadow-md personal-info p-5 my-3 overflow-auto">
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4">
                  {[
                    { label: "Name", value: "Kier Luna Aguilar" },
                    { label: "Phone", value: "+639606023995" },
                    { label: "Age", value: "27 Years" },
                    { label: "Email", value: "aguilarkier25@gmail.com" },
                    { label: "Occupation", value: "Web Developer" },
                    { label: "Nationality", value: "Filipino" },
                  ].map((item, idx) => (
                    <div className="col-span-1" key={idx}>
                      <div className="info-item flex flex-col gap-3">
                        <span className="label text-gray-500">
                          {item.label}
                        </span>
                        <span className="value">{item.value}</span>
                      </div>
                    </div>
                  ))}
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
