import React from "react";
import Slider from "react-slick";
import "./skills.scss"; // Your custom SCSS
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme CSS

const Skills = () => {
  // Helper function to render stars based on a rating out of 5
  // The 'rating' parameter should be a number from 0 to 5 (e.g., 4.5 for 4 and a half stars)
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating - fullStars >= 0.5; // Check for a half star (0.5 or more of a star)

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-6 h-6 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.927 8.71c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Render half star if applicable
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-6 h-6 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.927 8.71c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
          />
        </svg>
      );
    }

    // Render empty stars
    const remainingStars = totalStars - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-6 h-6 text-gray-500 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.927 8.71c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      );
    }

    return <div className="flex items-center justify-start">{stars}</div>;
  };

  // React Slick settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 2000, // Auto-play speed in milliseconds
    responsive: [
      {
        breakpoint: 1200, // For screens larger than 1200px (xl)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // For screens larger than 992px (lg)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens larger than 768px (md)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576, // For screens smaller than 576px (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // An array of your skill data to easily map over
  const skillsData = [
    {
      name: "HTML",
      description:
        "Proficient in creating well-structured, semantic, and accessible web content using the latest HTML5 standards.",
      rating: 4.5,
    },
    {
      name: "CSS",
      description:
        "Skilled in crafting visually appealing and responsive layouts using modern CSS techniques, including Flexbox, Grid, and animations.",
      rating: 4.75,
    },
    {
      name: "JavaScript",
      description:
        "Comprehensive understanding of JavaScript (ES6+) for dynamic client-side scripting, interactive web features, and asynchronous operations.",
      rating: 4.0,
    },
    {
      name: "SQL",
      description:
        "Solid experience in designing, querying, and managing relational databases using SQL for efficient data retrieval and manipulation.",
      rating: 4.0,
    },
    {
      name: "React",
      description:
        "Expertise in building scalable, interactive, and high-performance user interfaces with modern React.js practices and component-based architecture.",
      rating: 4.0,
    },
    {
      name: "Node.js",
      description:
        "Proficient in server-side development, building robust RESTful APIs, and handling data persistence with Node.js and related frameworks like Express.",
      rating: 4.0,
    },
    {
      name: "Bootstrap",
      description:
        "Experienced in using Bootstrap for rapid development of responsive, mobile-first web projects with pre-built components and styling.",
      rating: 4.9,
    },
    {
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapid UI development and highly customizable designs, ensuring responsive and consistent styling.",
      rating: 4.0,
    },
    {
      name: "Laravel",
      description:
        "Adept at building robust, secure, and scalable web applications using the Laravel PHP framework and its rich ecosystem.",
      rating: 4.6,
    },
  ];

  return (
    <div className="skills-container mx-auto  p-10 transition-all ease-in-out duration-500 ">
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <div key={index} className="px-3">
              <div className="skill-box shadow-md rounded-lg px-6 py-10 transition-all ease-in-out duration-500 ">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-semibold mb-2 ">{skill.name}</h3>
                  <p className=" mb-4 flex-grow">{skill.description}</p>
                  <div className="grid grid-cols-4">
                    <div className="col-span-1 order-1">
                      <span className="text-right text-lg font-medium block mb-2">
                        {skill.rating}/5
                      </span>
                    </div>
                    <div className="col-span-3 order-0">
                      {renderStars(skill.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
