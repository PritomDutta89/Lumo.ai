import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-5 backdrop-blur-2xl w-full flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="../../../public/favicon.svg" alt="icon" className="w-6 h-6" />
        <h1 className="text-[1.5rem] text-[#5044E5] font-semibold">Lumo.ai</h1>
      </div>

      {user ? (
        <UserButton />
      ) : (
        <button
          type="button"
          className="text-white cursor-pointer bg-[#5044E5] hover:bg-[#261bc2] font-medium rounded-full text-sm px-5 py-2.5 text-center0 flex items-center gap-2"
          onClick={openSignIn}
        >
          get started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
