import React from "react";
import "./contact.scss";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <div className="contact-container mx-auto text-center py-16 min-h-screen">
      <div className="w-[90%] lg:w-[75%] xl:w-[75%] mx-auto py-10">
        <div className="contact-header">
          <h2 className="text-4xl font-bold font-jumbled  ">Contact Me</h2>
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
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </div>
        <div className="contact-body grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 contact-info">
            <div className="grid grid-cols-4 my-3">
              <div className="col-span-1 justify-center align-middle my-auto">
                <CallIcon />
              </div>
              <div className="col-span-3 justify-start align-middle items-start text-left">
                <h3 style={{ fontWeight: "bolder", fontSize: "larger" }}>
                  Call Me
                </h3>
                <span>+639606023995</span>
              </div>
            </div>
            <div className="grid grid-cols-4 my-3">
              <div className="col-span-1 justify-center align-middle my-auto">
                <EmailIcon />
              </div>
              <div className="col-span-3 justify-start align-middle items-start text-left">
                <h3 style={{ fontWeight: "bolder", fontSize: "larger" }}>
                  Email Me
                </h3>
                <span>aguilarkier25@gmail.com</span>
              </div>
            </div>
            <div className="col-span-1  mx-auto py-10 justify-center align-middle">
              <div className="social-links flex justify-center">
                <a href="https://www.linkedin.com/in/aguilar-kier-luna">
                  <LinkedInIcon />
                </a>
                <a href="https://www.facebook.com/aguilarkier">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/kraglr25/">
                  <InstagramIcon />
                </a>
                <a href="https://github.com/kraglr">
                  <GitHubIcon />
                </a>
              </div>
              {/* <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div> */}
            </div>
          </div>
          <div className="col-span-1 contact-form">
            <form className="max-w-md mx-auto p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full  hover:bg-blue-700 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
