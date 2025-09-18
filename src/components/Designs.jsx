"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Designs = () => {
  const designsRef = useRef(null);
  const craftingTextRef = useRef(null);
  const yearTextRef = useRef(null);

  const items = [
    { src: "/grand-sangeet-decoration-designsbyabhishek.jpg" },
    { src: "/wedding-hall-decoration-designsbyabhishek.jpg" },
    { src: "/tunnel-decor-designsbyabhishek.jpg" },
    { src: "/chandelier-decor-designsbyabhishek.jpg" },
    { src: "/indoor-floral-decor-designsbyabhishek.jpg" },
    { src: "/haldi-floral-decoration-designsbyabhishek.jpg" },
    { src: "/indoor-seating-designsbyabhishek.jpeg" },
    { src: "/night-chandelier-designsbyabhishek.jpg" },
  ];

  const itemsNew = [
    { src: "/indoor-decoration-designsbyabhishek.jpg" },
    { src: "/indoor-chandelier-designsbyabhishek.jpg" },
    { src: "/floral-decor-designsbyabhishek.jpg" },
    { src: "/wedding-setup-designsbyabhishek.jpg" },
    { src: "/wedding-setup-2-designsbyabhishek.jpg" },
    { src: "/warmup-dinner-designsbyabhishek.jpg" },
    { src: "/outdoor-setup-designsbyabhishek.jpg" },
    { src: "/entry-decor-designsbyabhishek.jpeg" },
  ];

  useEffect(() => {
    const imageHeight = 200;
    const containerHeight = window.innerHeight;
    const visibleImages = Math.floor(containerHeight / imageHeight);

    const leftScrollDistance = (items.length - visibleImages + 2) * imageHeight;
    const rightScrollDistance =
      (itemsNew.length - visibleImages + 2) * imageHeight;

    gsap.set(".left-images", { y: 0 });
    gsap.set(".right-images", { y: -rightScrollDistance });

    gsap.set(craftingTextRef.current, {
      opacity: 0,
      y: 20,
      rotationX: 15,
      transformOrigin: "center bottom",
    });
    gsap.set(yearTextRef.current, {
      opacity: 0,
      y: 15,
      scale: 0.9,
    });

    ScrollTrigger.create({
      trigger: ".designs-container",
      start: "top top",
      end: "bottom -200%",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress <= 0.7) {
          const imageProgress = progress / 0.7;

          const leftTranslateY = -imageProgress * leftScrollDistance;

          const rightTranslateY =
            -rightScrollDistance + imageProgress * rightScrollDistance;

          gsap.set(".left-images", { y: leftTranslateY });
          gsap.set(".right-images", { y: rightTranslateY });

          gsap.set(".left-images", { opacity: 1 });
          gsap.set(".right-images", { opacity: 1 });
        } else if (progress > 0.7 && progress <= 0.85) {
          const fadeProgress = (progress - 0.7) / 0.15;

          const leftFinalY = -leftScrollDistance - fadeProgress * 300;
          const rightFinalY = fadeProgress * 300;

          gsap.set(".left-images", {
            y: leftFinalY,
            opacity: 1 - fadeProgress,
          });
          gsap.set(".right-images", {
            y: rightFinalY,
            opacity: 1 - fadeProgress,
          });
        } else {
          gsap.set(".left-images", {
            y: -leftScrollDistance - 300,
            opacity: 0,
          });
          gsap.set(".right-images", {
            y: 300,
            opacity: 0,
          });
        }
      },
    });

    gsap.to(craftingTextRef.current, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".designs-container",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });

    gsap.to(yearTextRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".designs-container",
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
      },
    });

    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      gsap.to(".center-text", {
        yPercent: -5,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".designs-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    gsap.fromTo(
      designsRef.current,
      { yPercent: 120, opacity: 0, filter: "blur(8px)" },
      {
        yPercent: -100,
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
          trigger: ".designs-container",
          start: "top 30%",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    if (!isMobile) {
      gsap.to(craftingTextRef.current, {
        // y: "+=5",
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        scrollTrigger: {
          trigger: ".designs-container",
          start: "top top",
          end: "bottom top",
          scrub: false,
        },
      });
    }

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      id="designs"
      className="designs-container sticky top-0 h-screen flex items-center justify-center overflow-hidden z-20 mb-0"
    >
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0 bg-white" />
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-between z-10 relative px-4 md:px-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/goldenportoro.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.5,
            }}
          />

          <div className="relative z-10 skew-x-6 h-1/3 md:h-full w-full md:w-1/4 overflow-hidden flex items-start justify-center">
            <div className="left-images flex flex-col gap-2">
              {items.map((item, index) => (
                <img
                  key={index}
                  src={item.src || "/placeholder.svg"}
                  alt="Design"
                  className="max-w-full h-auto object-cover"
                  style={{ minHeight: "250px", maxHeight: "300px" }}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index < 2 ? "high" : "low"}
                />
              ))}
            </div>
          </div>

          <div className="center-text absolute inset-0 flex items-center justify-center z-20 px-4 md:px-8">
            <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl">
              <div
                ref={craftingTextRef}
                className="font-nyghtserif text-nyghtserif2 tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 6.5vw, 6rem)" }}
              >
                SOMANY TILES
              </div>
              <div
                ref={craftingTextRef}
                className="font-nyghtserif text-nyghtserif2 tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 6.5vw, 6rem)" }}
              >
                YUVRAJ SINGH - HAZEL KEECH
              </div>
              <div
                ref={craftingTextRef}
                className="font-nyghtserif text-nyghtserif2 tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 6.5vw, 6rem)" }}
              >
                DY PATIL - RUTURAJ PATIL
              </div>
              <div
                ref={craftingTextRef}
                className="font-nyghtserif text-nyghtserif2 tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 6.5vw, 6rem)" }}
              >
                MUTHOOT GROUP
              </div>
              <div
                ref={craftingTextRef}
                className="font-nyghtserif text-nyghtserif2 tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 6.5vw, 6rem)" }}
              >
                CENTURY PLYWOOD
              </div>
            </div>
          </div>

          <div className="relative z-10 h-1/3 md:h-full -skew-x-6 w-full md:w-1/4 overflow-hidden flex items-start justify-center">
            <div className="right-images flex flex-col gap-2">
              {itemsNew.map((item, index) => (
                <img
                  key={index}
                  src={item.src || "/placeholder.svg"}
                  alt="Design"
                  className="max-w-full h-auto object-cover"
                  style={{ minHeight: "250px", maxHeight: "300px" }}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index < 2 ? "high" : "low"}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          ref={designsRef}
          className="absolute bottom-4 md:bottom-0 left-1/2 -translate-x-1/2 max-w-md lg:max-w-lg z-30 pointer-events-none text-nyghtserif font-cormorant tracking-tight text-center text-sm md:text-md lg:text-lg xl:text-xl px-4"
        >
          Where luxury meets artistry, and every celebration becomes an
          unforgettable masterpiece — crafted with passion, precision, and
          unparalleled attention to detail.
        </div>
      </div>
    </section>
  );
};

export default Designs;
