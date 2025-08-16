import React from "react";

const Details = () => {
  return <div className="mb-8 max-w-4xl mx-auto w-full">
    <div className="mb-2">
      <div className="flex">
        <span className="text-gray-600 dark:text-gray-400 w-28">Languages:</span>
        <span className="text-black dark:text-white">JavaScript, TypeScript, Python, C++, HTML/CSS</span>
      </div>
    </div>
    <div className="mb-2"><div className="flex">
      <span className="text-gray-600 dark:text-gray-400 w-28">Frameworks:</span>
      <span className="text-black dark:text-white">React, Next.js, TailwindCSS, Express, Flask, FastApi</span>
    </div>
    </div>
    <div className="mb-2"><div className="flex">
      <span className="text-gray-600 dark:text-gray-400 w-28">Database:</span>
      <span className="text-black dark:text-white"> MongoDB, Redis</span>
    </div>
    </div>
    <div className="mb-2"><div className="flex">
      <span className="text-gray-600 dark:text-gray-400 w-28">DevOps:</span>
      <span className="text-black dark:text-white">Docker,Digital Ocean, GitHub WorkFlow(CI/CD)</span>
    </div>
    </div>
  </div>;
};

export default Details;
