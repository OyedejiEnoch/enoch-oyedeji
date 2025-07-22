import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Services from "@/sections/Services";
import Works from "@/sections/Works";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root className="relative min-h-screen w-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Experience />
      <Footer />
    </ReactLenis>
  );
}
