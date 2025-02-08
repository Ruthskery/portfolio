import About from "@/Components/About";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import React, { useState } from "react";

// Rename the component from `index` to `Index`
const Index = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navigation */}
        <Nav openNav={openNav} />
        <MobileNav nav={nav} closeNav={closeNav} />
        {/* Hero Section */}
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Index;
