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

import "./portfolio.scss";

const Portfolio = () => {
  const [projType, setProjType] = useState("All");

  const portfolioItems = [
    {
      src: designproject,
      label: "Web-based Filling of Leave Application",
      category: "Projects",
      description:
        "A Web-based Filling of Documents for Sampaloc, Quezon Municipality. A.Y.2017-2018",
    },
    {
      src: chessapp,
      label: "Chess App",
      category: "Projects",
      description:
        "A Chess App developed using React + vite, with the use of TailwindCss",
    },
    {
      src: tetrisapp,
      label: "Web Tetris",
      category: "Projects",
      description:
        "A Tetris App developed using React + vite, with the use of TailwindCss",
    },
    { src: jennie, label: "Blackpink Jennie Vexel Art", category: "Arts" },
    { src: aiah, label: "Bini Aiah Portrait", category: "Arts" },
    { src: aiah_vector, label: "Bini Aiah Vexel Art", category: "Arts" },
    { src: colet, label: "Bini Colet Portrait", category: "Arts" },
    { src: colet_vector, label: "Bini Colet Vexel Art", category: "Arts" },
    {
      src: jennie_portrait,
      label: "Blackpink Jennie Portrait",
      category: "Arts",
    },
    { src: Jhoanna, label: "Bini Jhoanna Portrait", category: "Arts" },
    { src: karina, label: "Aespa Karina Portrait", category: "Arts" },
    { src: maloi, label: "Bini Maloi Portrait", category: "Arts" },
    { src: mina, label: "Twice Mina Vexel Art", category: "Arts" },
    { src: sana, label: "Twice Sana Portrait", category: "Arts" },
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
              <div className="img-box col-span-1" key={i}>
                <div className="img-container">
                  <img src={item.src} alt={item.label} />
                  {item.description && (
                    <div className="description">{item.description}</div>
                  )}
                </div>
                <span className="block mt-2 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
