import { Power4, ScrollTrigger, gsap } from "gsap/all";
import React, { useEffect, useRef } from "react";

const ImagesPage = () => {
  const imgOne = useRef(null);
  const imgTwo = useRef(null);
  const imgThree = useRef(null);
  const imgFour = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 a0%",
        // markers: true,
        scrub: 1,
      },
    });
    tl.to(
      imgOne.current,
      {
        x: 150,
        ease: "linear",
      },
      "a"
    );
    tl.to(
      imgTwo.current,
      {
        x: -100,
         ease: Power4.easeInOut,
      },
      "a"
    );
    tl.to(
      imgThree.current,
      {
        x: -100,
         ease: Power4.easeInOut,
      },
      "a"
    );
    tl.to(
      imgFour.current,
      {
        x: 100,
         ease: Power4.easeInOut,
      },
      "a"
    );
  },[]);
  return (
    <div
      ref={parent}
      className="w-full px-7.5 pb-20 sm:px-10 bg-white sm:pb-52 relative "
    >
      <div className="images-scroll w-full h-[66vh]  flex items-center justify-center relative sm:min-h-[140vh]">
        <div
          ref={imgOne}
          className="absolute z-20 w-16 h-22 right-10 top-32 sm:right-90 sm:top-72 sm:w-[10.69rem] sm:h-[15.12rem] bg-orange-300"
        >
          <img
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={imgTwo}
          className="absolute z-20  w-32 aspect-video -left-8 sm:left-35 sm:h-[13.37rem] sm:w-[23.75rem] bg-orange-300"
        >
          <video
            muted
            loop
            autoPlay
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={imgThree}
          className="absolute z-20  w-32 h-22 -left-6 bottom-14 sm:left-22 sm:bottom-1 sm:h-[15.81rem] sm:w-[23.5rem] bg-orange-300"
        >
          <img
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={imgFour}
          className="absolute z-20  w-32 h-32 -right-6 sm:right-10 sm:-bottom-14  bottom-1 sm:h-[23.5rem] sm:w-[23.5rem] bg-orange-300"
        >
          <video
            muted
            loop
            autoPlay
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <div className="w-[42%] h-[51%] relative sm:w-[23.5rem] sm:h-[40rem]">
          <img
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            alt=""
          />
        </div>
      </div>
      <div data-scroll data-scroll-speed=".1" className="images-bottom-text text-black mt-8 flex flex-col items-center gap-4 ">
        <div className="feature flex gap-2 text-sm">
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
          <h3>In the media</h3>
        </div>
        <h1 className="text-6xl my-6 text-center sm:text-[10vw] ">
          Spread <br /> the News
        </h1>
        <p className="text-center sm:text-2xl sm:w-1/3 sm:mt-2">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
        <a
          className="border-b border-black leading-none mt-4 sm:mt-10"
          href="#"
        >
          Browse all news
        </a>
      </div>
    </div>
  );
};

export default ImagesPage;
