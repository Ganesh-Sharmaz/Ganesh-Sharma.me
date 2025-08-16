import React from "react";

const Details = () => {
  return (
    <div className="sm:mb-4 mb-2 max-w-4xl mx-auto w-full px-4 sm:px-0 font-main">
      <div className="mb-2">
        {/* mobile: column, desktop: unchanged horizontal layout */}
        <div className="flex flex-col md:flex-row md:items-start">
          <span className="text-gray-600 dark:text-gray-400 md:w-28">Languages:</span>
          <span className="text-black dark:text-white mt-1 md:mt-0">
            JavaScript, TypeScript, Python, C++, HTML/CSS
          </span>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex flex-col md:flex-row md:items-start">
          <span className="text-gray-600 dark:text-gray-400 md:w-28">Frameworks:</span>
          <span className="text-black dark:text-white mt-1 md:mt-0">
            React, Next.js, TailwindCSS, Express, Flask, FastApi
          </span>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex flex-col md:flex-row md:items-start">
          <span className="text-gray-600 dark:text-gray-400 md:w-28">Database:</span>
          <span className="text-black dark:text-white mt-1 md:mt-0">MongoDB, Redis</span>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex flex-col md:flex-row md:items-start">
          <span className="text-gray-600 dark:text-gray-400 md:w-28">DevOps:</span>
          <span className="text-black dark:text-white mt-1 md:mt-0">
            Docker, Digital Ocean, GitHub WorkFlow(CI/CD)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
