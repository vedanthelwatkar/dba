"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Scenography from "./components/Scenography";
import Designs from "./components/Designs";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Navigation from "./components/Navigation";
import ScrollToHash from "./components/ScrollToHash";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const appRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Smooth page load animation
      gsap.from(".page-content", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div ref={appRef} className="w-full min-h-screen bg-stone-50">
        <ScrollToHash />
        <div className="page-content">
          <Hero />
          <Designs />
          <Clients />
          <Services />
          <Testimonials />
          <Scenography />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
