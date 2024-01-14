import React from "react";
import img1 from "../assets/img1.jpg";
import { FaGithub } from "react-icons/fa";
import live_icon from "../assets/live-icon.json";

import Lottie from "lottie-react";

function ProjectCards() {
  const projects = [
    {
      title: "project 01",
      image: img1,
      github: "http://google.com",
    },
    {
      title: "project 02",
      image: img1,
      github: "http://google.com",
    },
    {
      title: "project 02",
      image: img1,
      github: "http://google.com",
    },
  ];

  return (
    <div className=" flex xl:items-center xl:justify-center">
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
                  <button className="bg-white p-2 rounded-full">
                    <FaGithub size={20} />
                  </button>
                </div>
                <div className="w-[60px]">
                  <a href="">
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
