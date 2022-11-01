import React, { useState, useEffect } from "react";

import Footer from "../Layout/Footer/Footer";
import Masthead from "../components/Masthead/Masthead";
import Navbar from "../Layout/Navbar/Navbar";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Testimoni from "../components/Testimoni/Testimoni";
import { HashLink } from "react-router-hash-link";
import Achievement from "../components/Timeline/Achievement";

function Home() {
  const [scroll, setScroll] = useState(false);
  const buttonScroll = () => {
    if (window.scrollY >= 700) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", buttonScroll);
    // }
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Masthead />
      <About />
      <Education />
      <Skills />
      <Project />
      <Achievement />
      <Testimoni />
      <Contact />
      <Footer />
      <HashLink className={scroll ? "flex fixed bottom-4 right-0 mx-2 bg-[#01d193] rounded-full" : "flex hide fixed bottom-4 right-0 mx-2 bg-[#01d193] rounded-full"} to="/#home" smooth>
        <img src="https://ps.w.org/wpfront-scroll-top/assets/icon.svg?rev=1534312" alt="" className="w-7 h-7" />
      </HashLink>
    </div>
  );
}

export default Home;
