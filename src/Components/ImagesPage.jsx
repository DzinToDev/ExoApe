import React from "react";

const ImagesPage = () => {
  return (
    <div className="w-full px-7.5 sm:px-10 bg-white pb-20 ">
      <div className="images-scroll w-full h-[66vh] flex items-center justify-center relative">
        <div className="absolute z-20 w-16 h-22 right-10 top-32 bg-orange-300">
          <img
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute z-20  w-32 aspect-video -left-5 bg-orange-300">
          <video
            muted
            loop
            autoPlay
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div className="absolute z-20  w-32 h-22 -left-6 bottom-14 bg-orange-300">
          <img
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute z-20  w-32 h-32 -right-6 bottom-1 bg-orange-300">
          <video
            muted
            loop
            autoPlay
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <div className="w-[42%] h-[51%] relative">
          <div className="absolute z-20 "></div>
          <img
            className="w-full h-full object-center object-cover"
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            alt=""
          />
        </div>
      </div>
      <div className="images-bottom-text text-black mt-8 flex flex-col items-center gap-4 ">
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
        <h1 className="text-6xl my-6 text-center ">
          Spread <br /> the News
        </h1>
        <p className="text-center">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
        <a className="border-b border-black leading-none mt-4" href="#">
          Browse all news
        </a>
      </div>
    </div>
  );
};

export default ImagesPage;
