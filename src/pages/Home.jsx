import React from "react";
import Navbar from "../components/home/Navbar";
import { SignIn } from "@clerk/clerk-react";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
