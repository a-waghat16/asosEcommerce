import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#111111", color: "white" }}>
      <Navbar isHome={true}/>
      <Hero />
    </div>
  );
};

export default Home;
