import { ScrollTrigger, gsap } from "gsap/all";
import React, { useEffect, useRef } from "react";

const PlayReelPage = () => {
  const videoDive = useRef(null)
  const h1sDive = useRef(null)
  const h1sReel = useRef(null);
  const parent = useRef(null)
  useEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current, 
        top: "0 0",
        markers: true,
        pin: true,
        scrub:1
      },
    })
    tl.to(videoDive.current, {
     
     width: "105%",
     height: "105%",
     ease: "linear",
    },'<')
    tl.to(h1sDive.current, {
      x:120,
      opacity:0,
      ease: "power4.out",
    },'<')
    tl.to(h1sReel.current, {
      x:-120,
      ease: "power4.out",
      opacity:0,
    },'<')
  }, [])
  return (
    <div ref={parent} className="w-full h-screen overflow-hidden bg-black text-zinc-200 relative">
      <div ref={videoDive} className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-44 sm:w-96 ">
        <video
          muted
          autoPlay
          loop
          className="w-full h-full object-center object-cover scale-1.1"
          src="https://player.vimeo.com/progressive_redirect/playback/724832427/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0ed44a0255edf7f44c0925e951a269426f3f4eb5a6c46f83df7da03d07e795aa"
        ></video>
      </div>
      <div className="overlay w-full h-full  px-7.5 py-20 sm:py-13 flex flex-col justify-between items-center">
        <div className="subHeading w-full flex items-center justify-center gap-2 text-sm text-center ">
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
          <h3 className="opacity-90">Work in motion</h3>
        </div>
        <h1 className=" w-full flex text-6xl items-center justify-between relative z-10 sm:w-[79%] sm:text-[9rem]">
          <div ref={h1sDive} className="absolute left-0 top-1/2 transform -translate-y-1/2">Play</div>
          <div className="sm:hidden "></div>
          <div ref={h1sReel} className="absolute right-0 top-1/2 transform -translate-y-1/2">Reel</div>
        </h1>
        <p className="text-sm opacity-90 text-center sm:w-1/5">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReelPage;
