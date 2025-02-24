import React from "react";
import { motion } from "framer-motion";
import { Expo, Power4 } from "gsap";
import { stagger } from "motion";

const Landing = () => {
  return (
    <div className="relative w-full h-[150vh] sm:h-[240vh] ">
      <div className="picture w-full h-full overflow-hidden">
        <img
        data-scroll
        data-scroll-speed="-1"
          className="w-full h-full object-cover object-top"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className="landing-text max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-7 sm:px-10 ">
          <div className='para1 mt-74 text-lg font-["TWKL3"] leading-6 sm:leading-8 font-extralight opacity-85 sm:text-2xl sm:mt-[26.5rem] overflow-hidden'>
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              "exceptional experiences where people",
              "live, work, and unwind.",
            ].map((elem, index) => {
              return (
                <p key={index} className="masker overflow-hidden  origin-left">
                  <motion.span
                    initial={{ rotate: 90, y: "100%" }}
                    animate={{ rotate: 0, y: 0 }}
                    transition={{
                      ease: Expo.easeInOut,
                      duration: 1.5,
                      delay: index * 0.2,
                    }}
                    className="origin-left inline-block"
                  >
                    {elem}
                  </motion.span>
                </p>
              );
            })}
          </div>

          <div className="herotext text-6xl mt-6 font-['TWKL3'] leading-17 sm:leading-68 sm:text-[17vw] sm:mt-12 sm:tracking-tight overflow-hidden">
            {["Digital", "Design", "Experience"].map((elem, index) => {
              return (
                <h1 key={index} className="masker overflow-hidden">
                  <motion.span
                    className="origin-left inline-block"
                    initial={{ rotate: 90, y: "100%" }}
                    animate={{ rotate: 0, y: 0 }}
                    transition={{
                      ease: Expo.easeInOut,
                      duration: 1.5,
                      delay: 1 + index * 0.2,
                      // 1+ se timeline jaisa hoga
                    }}
                  >
                    {elem}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <motion.div
          initial={{opacity:0}}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.7, delay: 2 }}
          className="arrow-svg mt-9 md:hidden">
            <svg
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-arrow rotate-90 w-[3.2vw] "
              data-v-4c306161=""
            >
              <path
                d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                fill="currentColor"
                data-v-4c306161=""
              ></path>
            </svg>
          </motion.div>

          <div className="para-2 mt-10 opacity-85  sm:text-2xl sm:mt-28">
            <p className="sm:w-2/5">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <div className="flex justify-between items-center">
              <a
                className=" border-b-1 border-zinc-200/70 pb-1 inline-block mt-8 opacity-85 sm:mt-18 sm:text-lg "
                href="#"
              >
                The Studio
              </a>
              <div className="para-2-right hidden  sm:flex items-center gap-20 sm:text-base sm:items-start ">
                <div className="flex flex-col  gap-4 opacity-85">
                  {["Work", "Studio", "News", "Contact"].map((item, index) => (
                    <a
                      className="text-xs font-['TWKL3'] font-light sm:text-base"
                      key={index}
                      href="#"
                    >
                      {item}
                    </a>
                  ))}
                </div>
                <div className="flex  flex-col">
                  <a href="#">hello@exoape.com</a>
                  <a href="#">+31 772 086 200</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
