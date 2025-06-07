import React, { useContext } from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { DarkModeOutlined } from "@mui/icons-material";
import { DarkModeContext } from "../../contexts/darkModeContext";
import "./navigation.scss";

const Navigation = ({ scrollToSection, sectionRefs }) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <header className=" sticky top-0 z-50 py-3">
      <div
        className="w-[75%] shadow-md mx-auto py-4 px-5 grid grid-cols-5 justify-between items-center"
        style={{ borderRadius: "50px" }}
      >
        {darkMode ? (
          <DarkModeOutlined onClick={toggle} />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggle} />
        )}
        <nav className="space-x-4 col-span-3 justify-center mx-auto">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex space-x-6">
              <li>
                <span
                  role="button"
                  onClick={() => scrollToSection(sectionRefs.homeRef)}
                  className=" font-medium transition duration-300 ease-in-out focus:outline-none"
                >
                  Home
                </span>
              </li>
              <li>
                <span
                  role="button"
                  onClick={() => scrollToSection(sectionRefs.aboutRef)}
                  className=" font-medium transition duration-300 ease-in-out focus:outline-none"
                >
                  About
                </span>
              </li>
              <li>
                <span
                  role="button"
                  onClick={() => scrollToSection(sectionRefs.servicesRef)}
                  className=" font-medium transition duration-300 ease-in-out focus:outline-none"
                >
                  Services
                </span>
              </li>
              <li>
                <span
                  role="button"
                  onClick={() => scrollToSection(sectionRefs.contactRef)}
                  className=" font-medium transition duration-300 ease-in-out focus:outline-none"
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <div className="col-span-1 justify-end text-end">
          <XIcon />
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
    </header>
  );
};
export default Navigation;
