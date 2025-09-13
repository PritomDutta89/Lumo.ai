import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
          <div className="md:max-w-96">
            <div className="flex items-center gap-1 cursor-pointer">
              <img
                src="../../../public/favicon.svg"
                alt="icon"
                className="w-7 h-7"
              />
              <h1 className="text-[1.5rem] text-[#5044E5] font-semibold">
                Lumo.ai
              </h1>
            </div>
            <p className="mt-6 text-sm">
              LumoAI is your all-in-one AI companion, designed to simplify
              content creation and boost productivity. From generating text and
              images to streamlining workflows, we bring powerful AI tools
              together in one seamless platform—helping you create smarter,
              faster, and better.
            </p>
          </div>
          <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
              <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
              <div className="text-sm space-y-2">
                <p>+1-212-456-7890</p>
                <p>contact@lumoai.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright 2025 © LumoAI. All Right Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
