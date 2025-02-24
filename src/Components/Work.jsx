import React from "react";

const Work = () => {
  return (
    <div className="w-full relative bg-white text-black">
      <div className="allWorksContainer max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-7.5 sm:pr-10 sm:pl-36 py-20 sm:py-40">
        <div className="worlText w-full flex flex-col relative z-10">
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
            <h1 className="text-6xl mt-8 sm:text-[17vw]">Work</h1>
          </div>

          <p className="sm:w-1/3 sm:text-2xl ml-auto mt-8">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>

        <div className="work-container">
          <div className="work-top sm:flex w-full items-center gap-32">
            <div className="work w-full relative sm:-top-56">
              <div className="work-video w-full h-[104vw]  mt-8 mb-3 relative sm:w-[36.5rem] sm:h-[45.5rem] ">
                <img
                  className="hidden sm:block absolute w-full h-full hover:opacity-0 object-cover object-center "
                  src="https://a.storyblok.com/f/133769/2400x2990/dd4fa8bc81/stock-dutch-design-hero.jpg/m/2400x2990/filters:quality(80)"
                  alt=""
                />
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-center object-cover"
                  src="https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1740382311~exp=1740396711~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=5090c86523fffa6550a33265527883bf8d1f7e0038632c16d59ebb9bb54e182f&r=dXMtd2VzdDE%3D"
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
              <div className="work-video w-full h-[104vw] mt-8 mb-3 relative sm:w-[23.5rem] sm:h-[29.5rem]">
                <img
                  className="hidden sm:block absolute w-full h-full hover:opacity-0 object-cover object-center "
                  src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"
                  alt=""
                />
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-center object-cover"
                  src="https://download-video-ak.vimeocdn.com/v3-1/playback/be1179ab-5aaa-4f63-a9a7-f40c70ae895e/96953878?__token__=st=1740382327~exp=1740396727~acl=%2Fv3-1%2Fplayback%2Fbe1179ab-5aaa-4f63-a9a7-f40c70ae895e%2F96953878%2A~hmac=94bc86f370593c14c98166b0fb06d5533cc5dfd673d92e6c39b37cf4d6572f48&r=dXMtZWFzdDE%3D"
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
            <div className="work w-full sm:top-12">
              <div className="work-video w-full h-[104vw] bg-amber-500 mt-8 mb-3 relative sm:w-[30rem] sm:h-[37.5rem]">
                <img
                  className="hidden sm:block absolute w-full h-full hover:opacity-0 object-cover object-center "
                  src="https://a.storyblok.com/f/133769/2400x2990/61c001bac1/columbia-pictures-hero.jpg/m/2400x2990/filters:quality(80)"
                  alt=""
                />
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-center object-cover"
                  src="https://download-video-ak.vimeocdn.com/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1740382362~exp=1740396762~acl=%2Fv3-1%2Fplayback%2F4bdb3586-71c8-40be-b000-2ba5691333a3%2Fdee0a4f7%2A~hmac=4a049b42bb9a627e45fcbd1f60577e0981b2d7c8e6f20912eefde4a37fde5574&r=dXMtY2VudHJhbDE%3D"
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
                  className="hidden sm:block absolute w-full h-full hover:opacity-0 object-cover object-center "
                  src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
                  alt=""
                />
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-center object-cover"
                  src="https://download-video-ak.vimeocdn.com/v3-1/playback/c8169bff-def9-46a0-ab51-a3079dd79927/babd849a?__token__=st=1740382393~exp=1740396793~acl=%2Fv3-1%2Fplayback%2Fc8169bff-def9-46a0-ab51-a3079dd79927%2Fbabd849a%2A~hmac=f0a3b613f82ad327810c7ac3db74d57f38875c6e8713f9504177d00626263eed&r=dXMtZWFzdDE%3D"
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
