import React from "react";

const PlayReelPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-black text-zinc-200 relative">
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-44 sm:w-96 ">
        <video
          muted
          autoPlay
          loop
          className="w-full h-full object-center object-cover scale-1.1"
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1740335400~exp=1740349800~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=0b199e07605d58247964392c1654771dc0c87c74dcdbf0514aa136ccf1b23916&r=dXMtY2VudHJhbDE%3D"
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
          <div>Play</div>
          <div className="sm:hidden "></div>
          <div>Reel</div>
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
