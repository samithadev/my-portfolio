import React from "react";
import profileimg from "../assets/profile_img.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

function HeroSection() {
  return (
    <div>
      <div className="hero-image">
        <img src={profileimg} alt="profile img" />
      </div>

      <div className="hero-details">
        <div>
          <h1>
            Hello, I’m Samitha, a frontend Developer specialized in React.
          </h1>
          <p>
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
        </div>

        <div>
            <button>Contact me</button>
            <button><FaLinkedin /></button>
            <button><FaGithub /></button>
            <button><FaDribbble /></button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
