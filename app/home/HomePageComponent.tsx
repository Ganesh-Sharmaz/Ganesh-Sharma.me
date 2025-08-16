'use client'

import { useTheme } from "@/components/context/ThemeContext.Provider";
import AllInfo from "@/components/home/AllInfo";
import Details from "@/components/home/Details";
import Header from "@/components/home/Header";
import ClickSpark from "@/components/ui/ClickSpark";
import React from "react";

const HomePageComponent = () => {
  const { theme } = useTheme();

  return (
    <ClickSpark
      sparkColor={theme === "light" ? "#0D1321" : "#F0EBD8"}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {/* Applying no-scrollbar on the page container and letting it scroll vertically */}
      <div
        className={`font-main min-h-screen h-fit flex w-full bg-[#F0EBD8] text-[#0D1321]
          dark:bg-[#0D1321] dark:text-[#F0EBD8] sm:py-8 py-4 flex-col no-scrollbar`}
      >
        <Header />
        <h2 className="max-w-4xl mx-auto px-4 sm:px-0 text-2xl md:text-7xl mb-6 text-shadow-lg dark:text-shadow-[#2E455D] text-shadow-[#B2BCC2]">
          Probably the one fixing your favorite developer&apos;s code.
        </h2>
        <Details />
        <AllInfo />
      </div>
    </ClickSpark>
  );
};

export default HomePageComponent;
