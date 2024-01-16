import React, { useState } from "react";
import wave from "../assets/wave-img.png";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" flex-wrap shadow-lg md:flex md:justify-center">
      <div className="md:w-[800px] ">
      <div className="flex flex-row justify-between items-center h-20 px-8">
        <div className="logo flex flex-row gap-2">
          <img src={wave} alt="logo image" className="w-6" />
          <h1 className=" font-medium">Samitha</h1>
        </div>

        <div className="nav-links hidden md:block">
          <ul className="flex flex-row justify-between gap-8">
            <li>Home</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <FiX size={30}/> : <FiAlignRight size={30}/>}
          </button>
        </div>
      </div>

      <div className=" text-center md:hidden ">
        {isOpen && (
            <ul className="flex flex-col gap-5 py-5">
              <a href=""><li>Home</li></a>
              <a href=""><li>Projects</li></a>
              <a href=""><li>Contact Me</li></a>
            </ul>
        )}
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
