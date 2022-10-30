import React from "react";

import Footer from "../Layout/Footer/Footer";
import Masthead from "../components/Masthead/Masthead";
import Navbar from "../Layout/Navbar/Navbar";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Testimoni from "../components/Testimoni/Testimoni";

function Home() {
  return (
    <>
      <Navbar />
      <Masthead />
      <About />
      <Education />
      <Skills />
      <Project />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
