import React from "react";
import img1 from "../assets/img1.jpg";
import { FaGithub } from "react-icons/fa";
import live_icon from "../assets/live-icon.json";
import blog from "../assets/dev_blog.png";
import img2 from "../assets/agency_web1.png";
import img3 from "../assets/AT-digital_web.png";
import img4 from "../assets/travel-agency-web.png";

import Lottie from "lottie-react";

function ProjectCards() {
  const projects = [
    {
      title: "Blogging Platform for Developers",
      image: blog,
      github: "https://github.com/samithadev/mern_blog",
      live: "",
    },
    {
      title: "Aversan delivers: Agency Website",
      image: img2,
      github: "https://github.com/samithadev/Avero_Business_Website",
      live: "https://samithadev.github.io/Avero_Business_Website/",
    },
    {
      title: "AT-Digital Digital Marketing Agency WebSite",
      image: img3,
      github: "https://github.com/samithadev/AT_Digital",
      live: "https://at-digital-samitha.netlify.app/",
    },
    {
      title: "Travel agency Website",
      image: img4,
      github: "https://github.com/samithadev/travel_agency_Site",
      live: "https://travel-agency-site.vercel.app/",
    },
  ];

  return (
    <div id="projects" className=" flex xl:items-center xl:justify-center">
      <div className="flex flex-col  gap-5 md:grid md:grid-cols-2 mx-9 my-6 xl:w-[800px]">
        {projects.map((items) => (
          <div className="relative w-full  md:h-[400px] overflow-hidden rounded-2xl shadow-lg group ">
            <img
              src={items.image}
              alt="projimg"
              className=" transition-transform group-hover:scale-110 duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex flex-row justify-between">
              <div className=" flex items-end pb-10 pl-5">
                <h1 className=" text-white font-bold text-xl">{items.title}</h1>
              </div>
              <div className="flex gap-5 pt-5 px-5">
                <div>
                  <a href={items.github} target="_blank">
                    <button
                      className="bg-white p-2 rounded-full"
                      formTarget="_blank"
                    >
                      <FaGithub size={20} />
                    </button>
                  </a>
                </div>
                <div className="w-[60px]">
                  <a href={items.live} target="_blank">
                    <div className="bg-white p-2 rounded-full">
                      <Lottie loop={true} animationData={live_icon} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;
