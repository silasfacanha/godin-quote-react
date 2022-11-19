import React from "react";
import "./Hero.css";
import FrontImage from "../FrontImage";
import HeroLeft from "../HeroLeft";

const Hero = () => {
  return (
    <section className="Hero">
      <HeroLeft />
      <FrontImage />
    </section>
  );
};

export default Hero;
