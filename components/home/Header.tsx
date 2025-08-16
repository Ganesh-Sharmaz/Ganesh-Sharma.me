import React from "react";
import ThemeToggleButton from "../ui/ThemeToggleButton";
import ProfileCard from "../ui/ProfileCard";

const Header = () => {

  return <header className="max-w-4xl mx-auto px-4  w-full">
    <div className="w-full h-fit flex justify-end outline-none pb-4"><ThemeToggleButton /></div>
    <div className="w-full  h-fit"><ProfileCard /></div>
  </header>
};

export default Header;
