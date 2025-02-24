import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="w-full relative bg-white text-black">
      <div className="allWorksContainer max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-7.5 sm:pr-10 sm:pl-36 py-20 sm:py-40">
        <div className="workText w-full flex flex-col relative z-10">
          <div className="featureHeading flex flex-col sm:flex-col-reverse text-sm ">
            <div className="flex gap-2 sm:mr-64 sm:ml-auto sm:mt-28  ">
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon w-3"
                data-v-669b4a84=""
              >
                <path
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="currentColor"
                  data-v-669b4a84=""
                ></path>
              </svg>
              <h3 className="">Feature Projects</h3>
            </div>
            <h1 className="text-6xl mt-8 sm:text-[17vw] overflow-hidden">
              <motion.span
                initial={{ rotate: 12, y: "98%", opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="inline-block origin-left"
              >
                Work
              </motion.span>
            </h1>
          </div>

          <p className="sm:w-1/3 sm:text-2xl ml-auto mt-8">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>

        <div className="work-container">
          <div className="work-top sm:flex w-full items-center gap-32 ">
            <div className="work w-full relative sm:-top-56">
              <div className="work-video w-full h-[104vw] mt-8 mb-3 relative sm:w-[36.5rem] sm:h-[45.5rem] bg-amber-500 overflow-hidden group">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="sm:block hidden absolute w-full h-full object-cover object-center z-10 transition-opacity duration-200 group-hover:opacity-0"
                  src="https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/2400x2990/filters:quality(80)"
                  alt=""
                />

                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-center object-cover"
                  src="../public/videos/1.mp4"
                ></video>
              </div>
              <div className="text-sm capitalize">
                <h3 className=' font-["TWKL5"]'>Ottografile</h3>
                <p className=" font-thin opacity-70">
                  Seamless Photographic Jourey
                </p>
              </div>
            </div>
            <div className="work w-full sm:mt-32">
              <div className="work-video w-full h-[104vw] mt-8 mb-3 relative sm:w-[23.5rem] sm:h-[29.5rem] bg-amber-500 overflow-hidden group">
                <img
                  className="hidden sm:block absolute w-full h-full hover:opacity-0 object-cover object-center z-10 transition-opacity duration-200 group-hover:opacity-0"
                  src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"
                  alt=""
                />
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-center object-cover"
                  src="../public/videos/2.mp4"
                ></video>
              </div>
              <div className="text-sm capitalize">
                <h3 className=' font-["TWKL5"]'>Amaterasu</h3>
                <p className=" font-thin opacity-70">
                  Frontier Health Innovation
                </p>
              </div>
            </div>
          </div>
          <div className="work-bottom w-full sm:flex flex-row-reverse sm:items-baseline sm:w-[81%] gap-32 mt-2 sm:mt-20 sm:h-screen ">
            <div
              // data-scroll
              // data-scroll-speed=".2"
              className="work w-full sm:top-12"
            >
              <div className="work-video w-full h-[104vw] bg-amber-500 mt-8 mb-3 relative sm:w-[30rem] sm:h-[37.5rem]">
                <img
                  className="hidden sm:block absolute w-full h-full hover:opacity-0 object-cover object-center z-10 transition-opacity duration-200 group-hover:opacity-0"
                  src="https://a.storyblok.com/f/133769/2400x2990/61c001bac1/columbia-pictures-hero.jpg/m/2400x2990/filters:quality(80)"
                  alt=""
                />
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-center object-cover"
                  src="../public/videos/3.mp4"
                ></video>
              </div>
              <div className="text-sm capitalize">
                <h3 className=' font-["TWKL5"]'>Columbia Pictures</h3>
                <p className=" font-thin opacity-70">
                  elebrating a Century of Cinema
                </p>
              </div>
            </div>
            <div className="work w-full relative sm:top-34">
              <div className="work-video w-full h-[104vw] bg-amber-500 mt-8 mb-3 relative sm:w-[17rem] sm:h-[21.5rem]">
                <img
                  className="hidden sm:block absolute w-full h-full hover:opacity-0 object-cover object-center z-10 transition-opacity duration-200 group-hover:opacity-0"
                  src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
                  alt=""
                />
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-center object-cover"
                  src="../public/videos/4.mp4"
                ></video>
              </div>
              <div className="text-sm capitalize">
                <h3 className=' font-["TWKL5"]'>Cambium</h3>
                <p className=" font-thin opacity-70">
                  Pioneering Sustainable Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
