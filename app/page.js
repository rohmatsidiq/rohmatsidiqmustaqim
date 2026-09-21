"use client";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function page() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Durasi animasi dalam milidetik (opsional)
    });
  }, []);
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Hero />
      <AboutMe />
      <Experience />
      {/* <Certificates /> */}
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}
