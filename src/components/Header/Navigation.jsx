import React, { useContext, useState } from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { DarkModeOutlined } from "@mui/icons-material";
import { DarkModeContext } from "../../contexts/darkModeContext";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import "./navigation.scss";

const Navigation = ({ scrollToSection, sectionRefs, activeSection }) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = [
    { key: "home", icon: <HomeIcon />, label: "Home" },
    { key: "about", icon: <PersonOutlineIcon />, label: "About" },
    { key: "resume", icon: <ArticleIcon />, label: "Resume" },
    { key: "portfolio", icon: <PermMediaIcon />, label: "Portfolio" },
    // { key: "services", icon: <ArticleIcon />, label: "Services" },
    { key: "contact", icon: <PermPhoneMsgIcon />, label: "Contact" },
  ];

  return (
    <div className="nav-container sticky left-0 flex flex-col z-50 py-3 transition-all ease-in-out duration-500">
      <div style={{ borderRadius: "50px" }}>
        <nav className="menu-nav space-x-4 lg:justify-start justify-end items-end mx-auto transition-all ease-in-out duration-500">
          <div className="mx-auto flex lg:justify-start justify-end items-end transition-all ease-in-out duration-500">
            <ul
              className={`flex space-x-6 flex-col lg:justify-start lg:items-start justify-end items-end ${
                menuOpen ? "menu-open" : ""
              }`}
            >
              {/* Theme Toggle */}
              <li
                role="button"
                onClick={toggle}
                className="font-medium transition duration-300 ease-in-out focus:outline-none"
              >
                <span className="theme">
                  {darkMode ? <DarkModeOutlined /> : <WbSunnyOutlinedIcon />}
                </span>
              </li>

              {/* Menu Toggle */}
              <li
                role="button"
                onClick={handleMenuClick}
                className="toggle-menu font-medium w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 items-center justify-center transition-all duration-300"
              >
                <span role="button" className="span-group">
                  <span className="nav-icon align-middle order-1">
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                  </span>
                </span>
              </li>

              {/* Navigation Items */}
              {navItems.map((item) => (
                <li
                  key={item.key}
                  role="button"
                  onClick={() => scrollToSection(sectionRefs[item.key])}
                  className={`font-medium transition duration-300 ease-in-out focus:outline-none ${
                    activeSection === item.key ? "text-blue-500 font-bold" : ""
                  }`}
                >
                  <span role="button" className="span-group">
                    <span className="nav-icon align-middle lg:order-0 order-1">
                      {item.icon}
                    </span>
                    <span className="nav-label hidden lg:order-1 order-0">
                      {item.label}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
