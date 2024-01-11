import React from "react";
import wave from '../assets/wave-img.png'

function Navbar() {
  return(
    <nav className="flex flex-row justify-between bg-orange-300 h-20 items-center px-8">
        <div className="logo flex flex-row gap-2">
            <img src={wave} alt="logo image" className="w-6"/>
            <h1 className=" font-medium">Samitha</h1>
        </div>

        <div className="nav-links absolute bg-gray-800">
            <ul className="">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar;
