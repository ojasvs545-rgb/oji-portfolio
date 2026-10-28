"use client";

import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Particles from "@/components/Particles";
import Hero from "@/components/Hero"; 
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Workflow from "@/components/Workflow";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

     <ScrollProgress />
     <Particles />

      <Intro />

      <CustomCursor />

      <Navbar />

      <main>
        <Hero />

        <About />

        <Stats />

        <Services />

        <Portfolio />

        <Skills />

        <Testimonials />

        <Workflow />

        <Tools />

        <Contact />
      </main>

      <Footer />

      <div className="noise" />
    </>
  );
}