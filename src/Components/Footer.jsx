import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black  sm:pt-24">
      <div className="w-full h-[86vh]  px-7.5 py-20 text-[#E0CCBB] overflow-hidden sm:h-screen sm:max-w-screen-xl mx-auto">
        <div className="f-top w-full flex items-center relative">
          <h1 className="sm:text-[10vw] text-6xl leading-none relative z-10">
            Our
            <br />
            Story
          </h1>
          <video
            muted
            loop
            autoPlay
            className="w-[70%] absolute -right-10 sm:w-[70%] "
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
        <p className="mt-7 text-lg opacity-80 sm:w-1/3 sm:text-2xl sm:mt-12">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
        <a
          className="border-b border-[#E0CCBB] leading-none mt-7 inline-block sm:hidden opacity-80"
          href="#"
        >
          Our Story
        </a>
        <span className="my-7 w-full h-[1px] bg-[#E0CCBB] inline-block sm:my-14"></span>
        <div className="f-links-ul flex items-end  justify-between">
          <div className="flex items-end gap-44">
            <ul className="hidden capitalize text-sm  sm:flex flex-col gap-2 opacity-85">
              <li>Willem II Singel 8</li>
              <li>6041 HS, Roermond</li>
              <li>The Netherlands</li>
              <li>hello@exoape.com</li>
            </ul>
            <ul className=" capitalize text-sm flex flex-col gap-2 opacity-85">
              <li>work</li>
              <li>Studio</li>
              <li>news</li>
              <li>contact</li>
            </ul>
            <ul className=" capitalize text-sm flex flex-col gap-2 opacity-85">
              <li>behance</li>
              <li>dribble</li>
              <li>linkedin</li>
              <li>instagram</li>
            </ul>
          </div>
          <a
            className="hidden border-b border-[#E0CCBB] leading-none mt-7 sm:inline-block "
            href="#"
          >
            Our Story
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
