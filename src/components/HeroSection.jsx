import React from "react";
import profileimg from "../assets/profile_img.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FiArrowDownCircle } from "react-icons/fi";

function HeroSection() {
  return (
    <div id="home" className=" mx-9 my-6 flex flex-col md:flex-row md:gap-5 justify-center">
      <div className="hero-image w-full h-80 md:w-[400px] md:h-[400px]  rounded-3xl overflow-hidden">
        <img src={profileimg} alt="profile img" />
      </div>

      <div className="hero-details mt-6 md:w-[400px] md:h-[400px] rounded-3xl p-8 bg-gradient-to-r from-yellow-100  to-yellow-50 background-animate backdrop-blur-2xl">
        <div>
          <h1 className=" text-2xl font-medium leading-7">
            Hello, I’m Samitha, a frontend Developer specialized in React.
          </h1>
          <p className=" text-base leading-2 mt-5">
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
        </div>

        <div className="mt-6 md:mt-8 flex flex-col w-ful gap-4 md:gap-7">

          <a href="mailto:contact.samitha@gmail.com" className=" bg-black  text-white p-3 rounded-3xl flex items-center justify-center mx-8">Contact me</a>    

          <div className="flex flex-row items-center justify-center gap-8 ">
            <a href="https://www.linkedin.com/in/samitha-wickramasinghe/" target="_blank">
            <button className="bg-white p-3 rounded-full">
              <FaLinkedin/>
            </button>
            </a>
            <a href="https://github.com/samithadev" target="_blank">
            <button className="bg-white p-3 rounded-full">
              <FaGithub />
            </button>
            </a>
            <a href="" target="_blank">
            <button className="bg-white p-3 rounded-full">
              <FaDribbble />
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
