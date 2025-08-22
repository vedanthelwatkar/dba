"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const whyUsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(imageRef.current, {
        scale: 1.2,
        duration: 2,
        ease: "power2.out",
      }).from(
        titleRef.current.children,
        { y: 100, opacity: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" },
        "-=1.5"
      );

      gsap.to(imageRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        whyUsRef.current,
        { yPercent: 120, opacity: 0, filter: "blur(8px)" },
        {
          yPercent: -40,
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="/profile-images/abhishek-kaushik-wedding-designer-designsbyabhishek.jpeg"
          alt="Abhishek Kaushik Wedding Designer"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b
            pointer-events-none"
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <div ref={titleRef} className="mb-6">
            <div className="absolute inset-0 flex items-center justify-center z-30 px-4">
              <div className="text-center">
                <div
                  className="text-white font-brittany flex items-start justify-start -ml-4"
                  style={{ fontSize: "clamp(0.5rem, 4vw, 1.5rem)" }}
                >
                  Designs by
                </div>
                <div
                  className="text-white font-bebas leading-none w-full flex justify-start -ml-4 sm:-ml-7 sm:-mb-7 lg:-ml-10 -mb-3 lg:-mb-9"
                  style={{ fontSize: "clamp(3rem, 10vw, 4rem)" }}
                >
                  ABHISHEK
                </div>

                <div className="leading-none">
                  <span
                    className="inline-block align-baseline text-white font-light font-dream tracking-tighter"
                    style={{ fontSize: "clamp(4.5rem, 14vw, 10rem)" }}
                  >
                    PORT
                  </span>
                  <span
                    className="inline-block align-baseline text-white font-light italic font-notoSerif relative top-[0.06em] tracking-tighter"
                    style={{ fontSize: "clamp(4rem, 14.5vw, 10.5rem)" }}
                  >
                    folio
                  </span>
                </div>

                <div
                  className="text-white/90 font-light"
                  style={{
                    fontSize: "clamp(0.875rem, 3vw, 1.5rem)",
                    fontFamily: "Cormorant Garamond, serif, Georgia",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                  }}
                >
                  Luxury Wedding Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 z-20 pointer-events-none">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-light tracking-wide mb-2">EXPLORE</span>
          <div className="w-px h-12 bg-white/40" />
        </div>
      </div>

      <div
        ref={whyUsRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-burnt font-nyghtserif tracking-tight text-center"
        style={{ fontSize: "clamp(2rem, 10vw, 7rem)", lineHeight: 1 }}
      >
        Where dreams take shape
      </div>
    </section>
  );
};

export default Hero;
