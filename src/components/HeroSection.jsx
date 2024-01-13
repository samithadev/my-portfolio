import React from "react";
import profileimg from "../assets/profile_img.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

function HeroSection() {
  return (
    <div className=" mx-9 my-6">
      <div className="hero-image w-full h-80  rounded-3xl overflow-hidden bg-white">
        <img src={profileimg} alt="profile img" />
      </div>

      <div className="hero-details mt-6 rounded-3xl p-8 bg-gradient-to-r from-yellow-100  to-yellow-50 background-animate backdrop-blur-2xl">
        <div>
          <h1 className=" text-2xl font-medium leading-7">
            Hello, I’m Samitha, a frontend Developer specialized in React.
          </h1>
          <p className=" text-base leading-2 mt-5">
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
        </div>

        <div className="mt-6 flex flex-col w-ful gap-4">
          <button className=" bg-black  text-white p-3 rounded-3xl">Contact me</button>
          <div className="flex flex-row items-center justify-center gap-8">
            <button className="bg-white p-3 rounded-full">
              <FaLinkedin/>
            </button>
            <button className="bg-white p-3 rounded-full">
              <FaGithub />
            </button>
            <button className="bg-white p-3 rounded-full">
              <FaDribbble />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
