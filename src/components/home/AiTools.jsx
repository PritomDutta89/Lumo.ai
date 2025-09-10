import React from "react";
import { AiToolsData } from "../../assets/assets";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleRedirection = (path) => {
    user
      ? navigate(path)
      : toast.warn("Please sign in to use this tool.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
  };

  return (
    <div className="px-4 sm:px-20 xl:px-32 mt-[8rem]">
      <div className="flex flex-col items-center text-center gap-[0.5rem]">
        <h2 className="text-[#3B3B3B] text-2xl sm:text-4xl font-bold">
          Powerful AI Tools
        </h2>
        <p className="text-[#858585] max-w-xl">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>

      <div className="mt-[1rem] md:mt-[3rem] grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-1">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="p-8 m-4 rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col gap-[0.6rem]"
            onClick={() => handleRedirection(tool.path)}
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />
            <h3 className="text-lg font-semibold text-[#3E3E3E]">
              {tool.title}
            </h3>
            <p className="text-[#9A9A9A] text-xs">{tool.description}</p>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AiTools;
