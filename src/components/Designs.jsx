"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Designs = () => {
  const items = [
    { src: "/scenography/grand-sangeet-decoration-designsbyabhishek.jpg" },
    { src: "/scenography/haldi-decoration-designsbyabhishek.jpg" },
    { src: "/scenography/musical-setup-designsbyabhishek.jpg" },
    { src: "/scenography/haldi-event-designsbyabhishek.jpg" },
    { src: "/scenography/sangeet-setup-designsbyabhishek.jpg" },
    { src: "/scenography/haldi-floral-decoration-designsbyabhishek.jpg" },
    { src: "/scenography/wedding-hall-decoration-designsbyabhishek.jpg" },
    { src: "/scenography/wedding-mandap-decoration-designsbyabhishek.jpg" },
    { src: "/scenography/grand-sangeet-decoration-designsbyabhishek.jpg" },
    { src: "/scenography/haldi-decoration-designsbyabhishek.jpg" },
    { src: "/scenography/musical-setup-designsbyabhishek.jpg" },
    { src: "/scenography/haldi-event-designsbyabhishek.jpg" },
    { src: "/scenography/sangeet-setup-designsbyabhishek.jpg" },
    { src: "/scenography/haldi-floral-decoration-designsbyabhishek.jpg" },
    { src: "/scenography/wedding-hall-decoration-designsbyabhishek.jpg" },
    { src: "/scenography/wedding-mandap-decoration-designsbyabhishek.jpg" },
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".designs-container",
      start: "top top",
      end: "bottom -100%",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const leftTranslateY = -progress * (items.length - 3) * 120;
        const rightTranslateY = progress * (items.length - 3) * 120;

        gsap.set(".left-images", { y: leftTranslateY });
        gsap.set(".right-images", { y: rightTranslateY });
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div>
      <div className="designs-container sticky top-0 h-screen flex items-center justify-center overflow-hidden z-20 mb-0">
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full z-0 bg-background" />
          <div className="h-full w-full flex flex-col md:flex-row items-center justify-between z-10 relative px-4 md:px-0">
            <div className="relative z-10 skew-x-6 h-1/3 md:h-full w-full md:w-1/4 bg-background overflow-hidden flex items-center">
              <div className="left-images flex flex-col gap-2">
                {items.map((item, index) => (
                  <img
                    key={index}
                    src={item.src || "/placeholder.svg"}
                    alt="Design"
                    className="max-w-full"
                  />
                ))}
              </div>
            </div>

            <div className="leading-none w-full md:w-1/2 px-4">
              <div
                className="font-dream text-burnt text-center tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 8vw, 10rem)" }}
              >
                Designing Dreams,
              </div>
              <div
                className="font-dream italic text-burnt text-center tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 8vw, 6rem)" }}
              >
                Since 2012
              </div>
            </div>

            <div className="relative z-10 h-1/3 md:h-full -skew-x-6 w-full md:w-1/4 bg-background overflow-hidden flex items-center">
              <div className="right-images flex flex-col gap-2">
                {items
                  .slice()
                  .reverse()
                  .map((item, index) => (
                    <img
                      key={index}
                      src={item.src || "/placeholder.svg"}
                      alt="Design"
                      className="max-w-full"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designs;
