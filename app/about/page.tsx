import React from "react";
import Navbar from "@/components/Navbar";
import Hero1 from "@/components/about/hero-about";
import DescAbout from "@/components/about/desk-about";
import SolutionAbout from "@/components/about/solution-about";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
    <Hero1 />
    <DescAbout />
    <SolutionAbout />
    <Footer/>
    </div>
  );
};

export default About;
