import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

function Footer() {
  return (
    <div className="flex justify-center h-[300px] mx-9 my-6">
      <div className="h-[300px] w-full md:w-[800px] rounded-xl shadow-lg bg-gradient-to-r from-yellow-100  to-yellow-50 background-animate backdrop-blur-2xl p-8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          laborum quidem vitae. Quia tempore eveniet quaerat mollitia ipsam
          ratione nulla, atque rem sed, error repudiandae velit reprehenderit
          rerum. Necessitatibus, consequuntur.
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
