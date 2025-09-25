import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/layout/SideBar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const { user } = useUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SignIn />
      </div>
    );
  }

  return (
    <div>
      <div className="border-b border-gray-200 w-full px-8 min-h-14 flex items-center justify-between">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="../../../public/favicon.svg"
            alt="icon"
            className="w-6 h-6"
          />
          <h1 className="text-[1.5rem] text-[#5044E5] font-semibold">
            Lumo.ai
          </h1>
        </div>

        {sideBar ? (
          <X
            onClick={() => setSideBar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => setSideBar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
          />
        )}
      </div>

      <div className="flex-1 flex w-full h-[calc(100vh-56px)]">
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
        <div className="bg-[#F4F7FB] flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
