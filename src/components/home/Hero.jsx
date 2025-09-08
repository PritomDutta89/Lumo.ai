import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen pt-[10rem] flex flex-col items-center px-4 sm:px-20 xl:px-32">
      <div>
        <h1 className="text-6xl font-bold mb-6 text-center">
          <span className="text-[#1E1E1E] ">Create amazing content</span> <br />{" "}
          with <span className="text-[#5044E5]">AI tools</span>{" "}
        </h1>

        <p className="text-[#606060] text-center max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto max-sm:text-xs">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      <div className="mt-[2rem] flex gap-[2rem]">
        <button
          type="button"
          className="text-white bg-[#5044E5] font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer hover:bg-[#261bc2] border border-[#261bc2]"
        >
          Start creating now
        </button>

        <button
          type="button"
          className="text-[#3B3B3B] bg-[#FFFFFF] font-medium rounded-lg text-sm px-5 py-3 cursor-pointer hover:bg-[#f7f7f7] border border-[#c6c5c9]"
        >
          Watch demo
        </button>
      </div>

      <div className="">
        
      </div>
    </div>
  );
};

export default Hero;
