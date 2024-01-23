import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

function Footer() {
  return (
    <div id="footer" className="flex justify-center h-[300px] mx-9 my-6">
      <div className="h-[300px] w-full md:w-[800px] rounded-xl shadow-lg bg-gradient-to-r from-yellow-100  to-yellow-50 background-animate backdrop-blur-2xl p-8">
        <h1 className="text-2xl sm:text-5xl ">Want to work together?</h1>
        
        <p className=" mt-5">
        Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <div className="mt-2 sm:mt-16">
          <a href="mailto:contact.samitha@gmail.com" className="flex flex-row items-center gap-2 ">
            <h1 className="text-sm sm:text-3xl">contact.samitha@gmail.com</h1>
            <FiArrowRightCircle size={20}/>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Footer;
