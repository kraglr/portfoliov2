import React from "react";
// Removed: import "./skills.scss"; as it caused a compilation error
// Removed: import LinearProgress from "@mui/material/LinearProgress";
// Removed: import Box from "@mui/material/Box"; // Box is no longer strictly needed for progress, but keeping if other MUI components rely on it.

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
          className="w-6 h-6 text-gray-300 inline-block"
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

  return (
    <div className="p-4 md:p-8 lg:p-16 mx-auto max-w-7xl">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
        {/* HTML Skill Card */}
        <div className="shadow-md rounded-lg p-6 bg-white transition-all ease-in-out duration-300">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">HTML</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            {/* Display percentage and stars based on 5-star rating */}
            <span className="text-right text-lg font-medium text-gray-700 block mb-2">
              4.5/5
            </span>
            {renderStars(4.5)} {/*4.5 of 5 stars is 4.5 */}
          </div>
        </div>

        {/* CSS Skill Card */}
        <div className="shadow-md rounded-lg p-6 bg-white transition-all ease-in-out duration-300">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">CSS</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
            </p>
            <span className="text-right text-lg font-medium text-gray-700 block mb-2">
              4.5/5
            </span>
            {renderStars(4.75)} {/* 95% of 5 stars is 4.75 */}
          </div>
        </div>

        {/* JavaScript Skill Card */}
        <div className="shadow-md rounded-lg p-6 bg-white transition-all ease-in-out duration-300">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              JavaScript
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Neque porro quisquam est qui dolorem ipsum quia dolor.
            </p>
            <span className="text-right text-lg font-medium text-gray-700 block mb-2">
              4/5
            </span>
            {renderStars(4.0)} {/* 4 of 5 stars is 4.0 */}
          </div>
        </div>

        {/* Photoshop Skill Card */}
        <div className="shadow-md rounded-lg p-6 bg-white transition-all ease-in-out duration-300">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">SQL</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Quis autem vel eum iure reprehenderit qui in ea voluptate.
            </p>
            <span className="text-right text-lg font-medium text-gray-700 block mb-2">
              4/5
            </span>
            {renderStars(4)} {/* 55% of 5 stars is 2.75 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
