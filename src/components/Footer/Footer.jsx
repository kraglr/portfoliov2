import React from "react";
import "./footer.scss";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div class="footer-container">
      {/* <div class="copyright text-center ">
        <p>
          © <span>Copyright</span>{" "}
          <strong class="px-1 sitename">EasyFolio</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div> */}
      <div className="w-[90%] lg:w-[75%] xl:w-[75%] mx-auto py-10 justify-center align-middle">
        <div class="social-links flex justify-center">
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
  );
};

export default Footer;
