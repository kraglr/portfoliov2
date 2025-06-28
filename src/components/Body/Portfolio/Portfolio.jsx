import React, { useState } from "react";
import jennie from "../../../assets/img/arts/jennie.jpg";
import aiah from "../../../assets/img/arts/aiah.jpg";
import aiah_vector from "../../../assets/img/arts/aiah_vector.jpg";
import colet from "../../../assets/img/arts/colet.jpg";
import colet_vector from "../../../assets/img/arts/colet_vector.jpg";
import jennie_portrait from "../../../assets/img/arts/jennie_portrait.jpg";
import Jhoanna from "../../../assets/img/arts/Jhoanna.jpg";
import karina from "../../../assets/img/arts/karina.jpg";
import maloi from "../../../assets/img/arts/maloi.jpg";
import mina from "../../../assets/img/arts/mina.jpg";
import sana from "../../../assets/img/arts/sana.jpg";
import designproject from "../../../assets/img/projects/DesignProject.png";
import chessapp from "../../../assets/img/projects/chessapp.png";
import tetrisapp from "../../../assets/img/projects/tetris.png";
import ERP from "../../../assets/img/projects/ERP.png";
import krweather from "../../../assets/img/projects/krweather.png";
import "./portfolio.scss";
import LaunchIcon from "@mui/icons-material/Launch";
import AnimatedSection from "../../utilities/AnimatedSection";

const Portfolio = () => {
  const [projType, setProjType] = useState("All");
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const portfolioItems = [
    {
      src: ERP,
      label: "Custom ERP System for Inventory and Finance",
      category: "Projects",
      description:
        "A comprehensive web-based ERP system developed using React, Node.js, and MySQL. Features include Purchase Requests (PR), Purchase Orders (PO), Goods Receipt (GR), Goods Return (GR), Accounts Payable (AP), Accounts Receivable (AR), and Journal Entries (JE) with integrated stockcard tracking and costing methods.",
    },
    {
      src: designproject,
      label: "Leave Application Management System A.Y.: 2017-2018",
      category: "Projects",
      description:
        "A web-based document filing system developed using native PHP, HTML, CSS, and JavaScript. Built for Sampaloc, Quezon Municipality during A.Y. 2017–2018, this system streamlines the leave application process for municipal employees with a simple and efficient UI.",
    },
    {
      src: krweather,
      label: "KR Weather - Real-Time Forecast App",
      category: "Projects",
      description:
        "A sleek and responsive weather application built with React, Vite, and Tailwind CSS. It uses the OpenWeatherMap API to provide real-time weather data including temperature, humidity, wind speed, and condition icons. Designed for both desktop and mobile users with a modern, glossy UI.",
      site: "https://kraglrweather.netlify.app/",
    },
    {
      src: chessapp,
      label: "Interactive Chess Application",
      category: "Projects",
      description:
        "A browser-based chess app built with React and Vite, styled with Tailwind CSS. Provides real-time gameplay with intuitive UI and responsive design for desktop and mobile users.",
    },
    {
      src: tetrisapp,
      label: "Classic Web Tetris Game",
      category: "Projects",
      description:
        "A Tetris game clone developed using React and Vite, styled with Tailwind CSS. Features smooth animations, responsive controls, and retro-inspired visuals for a nostalgic experience.",
    },
    {
      src: jennie,
      label: "Jennie (BLACKPINK) Vexel Art",
      category: "Arts",
      description:
        "A digital vexel art portrait of Jennie from BLACKPINK, highlighting vector-style rendering and layered shading techniques.",
    },
    {
      src: aiah,
      label: "Aiah (BINI) Portrait",
      category: "Arts",
      description:
        "A traditional portrait of Aiah from BINI, hand-drawn using graphite and charcoal pencils to create realistic texture and depth.",
    },
    {
      src: aiah_vector,
      label: "Aiah (BINI) Vexel Art",
      category: "Arts",
      description:
        "Vector-style vexel artwork of Aiah from BINI, focusing on detailed facial structure and vibrant color composition.",
    },
    {
      src: colet,
      label: "Colet (BINI) Portrait",
      category: "Arts",
      description:
        "Traditional pencil portrait of Colet from BINI, rendered using graphite and charcoal with emphasis on soft shadows and contrast.",
    },
    {
      src: colet_vector,
      label: "Colet (BINI) Vexel Art",
      category: "Arts",
      description:
        "A detailed vexel art of Colet from BINI, emphasizing vector-style precision and layered depth.",
    },
    {
      src: jennie_portrait,
      label: "Jennie (BLACKPINK) Portrait",
      category: "Arts",
      description:
        "Hand-drawn graphite and charcoal portrait of Jennie from BLACKPINK, capturing lifelike features and subtle shading.",
    },
    {
      src: Jhoanna,
      label: "Jhoanna (BINI) Portrait",
      category: "Arts",
      description:
        "A graphite and charcoal pencil portrait of Jhoanna from BINI, showcasing expressive eyes and delicate details.",
    },
    {
      src: karina,
      label: "Karina (aespa) Portrait",
      category: "Arts",
      description:
        "Realistic pencil portrait of Karina from aespa, drawn with graphite and charcoal to emphasize strong features and lighting.",
    },
    {
      src: maloi,
      label: "Maloi (BINI) Portrait",
      category: "Arts",
      description:
        "Traditional graphite and charcoal drawing of Maloi from BINI, highlighting refined textures and soft gradients.",
    },
    {
      src: mina,
      label: "Mina (TWICE) Vexel Art",
      category: "Arts",
      description:
        "A vector-style vexel artwork of Mina from TWICE, emphasizing clean lines, color blending, and stylized realism.",
    },
    {
      src: sana,
      label: "Sana (TWICE) Portrait",
      category: "Arts",
      description:
        "A traditional portrait of Sana from TWICE, hand-rendered using graphite and charcoal pencils for smooth gradients and fine detail.",
    },
  ];

  const categories = ["All", "Projects", "Arts"];

  const filteredItems =
    projType === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === projType);

  return (
    <div className="portfolio-container px-10 transition-all ease-in-out duration-500 pt-25 pb-10">
      <div className="w-[90%] lg:w-[75%] xl:w-[75%] mx-auto mb-12">
        <div className="portfolio-header my-3 text-center">
          <h2 className="font-jumbled">Portfolio</h2>
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

          {/* Category Navigation */}
          <nav className="justify-between align-middle items-center w-[50%] mx-auto mt-5">
            <ul className="flex flex-row justify-between">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer px-3 py-1 rounded transition-all duration-300 ${
                    projType === category
                      ? "bg-gray-800 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => setProjType(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="portfolio-body">
          <div className="images-div grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-7 gap-x-4">
            {filteredItems.map((item, i) => (
              <AnimatedSection direction="top" key={i}>
                <div className="img-box col-span-1">
                  <div className="img-container relative w-full aspect-square overflow-hidden rounded-xl shadow-md">
                    {!loadedImages[i] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                        <div className="w-6 h-6 border-4 border-t-transparent border-gray-600 rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img
                      src={item.src}
                      alt={item.label}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        loadedImages[i] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(i)}
                    />
                    {item.description && (
                      <div className="description cursor-pointer flex flex-col mt-2">
                        <span className="text-xs text-justify">
                          {item.description}
                        </span>
                        {item.site && (
                          <a
                            href={item.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 hover:underline inline-flex items-center gap-1 text-xl"
                          >
                            Visit Site
                            <LaunchIcon fontSize="small" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="block mt-2 text-center">{item.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
