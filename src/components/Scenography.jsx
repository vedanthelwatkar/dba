"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const scenographyItems = [
  {
    src: "/scenography/grand-sangeet-decoration-designsbyabhishek.jpg",
  },
  {
    src: "/scenography/haldi-decoration-designsbyabhishek.jpg",
  },
  {
    src: "/scenography/musical-setup-designsbyabhishek.jpg",
  },
];

const Scenography = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Horizontal scroll animation
    const items = gsap.utils.toArray(".scenography-item");

    gsap.to(items, {
      xPercent: -100 * (items.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scenography-container",
        pin: true,
        scrub: 1,
        snap: 1 / (items.length - 1),
        end: () => "+=" + items.length * window.innerWidth,
      },
    });

    // Individual item animations
    items.forEach((item, index) => {
      gsap.fromTo(
        item.querySelector(".scenography-content"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "left center",
            end: "right center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-stone-900 text-white overflow-hidden"
    >
      <div className="py-20 px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-serif mb-6">
          <h2 className="text-amber-400">Scenography</h2>
        </h2>
        <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
          Immersive environments that tell your story through space and design
        </p>
      </div>

      <div className="scenography-container h-screen flex items-center">
        <div className="flex w-max">
          {scenographyItems.map((item, index) => (
            <div
              key={index}
              className="scenography-item w-screen h-screen flex-shrink-0 relative"
            >
              <div
                className="absolute inset-0 bg-cover bg-center parallax-img"
                style={{ backgroundImage: `url(${item.src})` }}
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="scenography-content relative z-10 h-full flex items-center justify-center px-6">
                <div className="text-center max-w-2xl">
                  <div className="w-24 h-24 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-amber-400 rounded-full" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">
                    Scene {index + 1}
                  </h3>
                  <p className="text-xl text-stone-200 leading-relaxed">
                    Every space tells a story. We craft environments that
                    immerse your guests in unforgettable experiences.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scenography;
