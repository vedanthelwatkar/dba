"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clientLogos = [
  { src: "/clients/amp-motors-arigatoevents.png", name: "AMP Motors" },
  { src: "/clients/anju-modi-arigatoevents.png", name: "Anju Modi" },
  { src: "/clients/being-human-arigatoevents.png", name: "Being Human" },
  { src: "/clients/blackberrys-arigatoevents.png", name: "Blackberrys" },
  { src: "/clients/dollar-group-arigatoevents.png", name: "Dollar Group" },
  { src: "/clients/dyp-group-arigatoevents.png", name: "DYP Group" },
  {
    src: "/clients/manish-malhotra-arigatoevents.png",
    name: "Manish Malhotra",
  },
  { src: "/clients/muthoot-group-arigatoevents.png", name: "Muthoot Group" },
  { src: "/clients/punj-lloyd-arigatoevents.png", name: "Punj Lloyd" },
  { src: "/clients/rahul-mishra-arigatoevents.png", name: "Rahul Mishra" },
  {
    src: "/clients/rockland-hospitals-arigatoevents.png",
    name: "Rockland Hospitals",
  },
  { src: "/clients/sabyasachi-arigatoevents.png", name: "Sabyasachi" },
  {
    src: "/clients/sanjay-ghodawat-arigatoevents.webp",
    name: "Sanjay Ghodawat Group",
  },
  { src: "/clients/somany-arigatoevents.png", name: "Somany Tiles" },
  { src: "/clients/suneet-varma-arigatoevents.png", name: "Suneet Varma" },
  {
    src: "/clients/yuvraj-and-hazel-arigatoevents.png",
    name: "Yuvraj & Hazel",
  },
];

const PremiumCarousel = () => {
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredClient, setHoveredClient] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Animation refs
  const timelineRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  // State tracking
  const isHoveredRef = useRef(false);
  const baseSpeed = useRef(1);

  useEffect(() => {
    const carousel = carouselRef.current;
    const container = containerRef.current;

    if (!carousel || !container) return;

    // Calculate total width for seamless loop
    const logoWidth = 200; // Approximate width including gap
    const totalLogos = clientLogos.length;
    const singleSetWidth = totalLogos * logoWidth;

    // Create the main animation timeline
    timelineRef.current = gsap.timeline({
      repeat: -1,
      ease: "none",
    });

    // Animate from 0 to -singleSetWidth for seamless loop
    timelineRef.current.to(carousel, {
      x: -singleSetWidth,
      duration: 30, // Base duration - adjust for desired speed
      ease: "none",
    });

    // Create scroll trigger for speed variation
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        // Only modify speed if not hovered
        if (isHoveredRef.current) return;

        const velocity = Math.abs(self.getVelocity());

        // Calculate speed multiplier based on scroll velocity
        let speedMultiplier;
        if (velocity > 2000) {
          speedMultiplier = 3;
        } else if (velocity > 1000) {
          speedMultiplier = 2;
        } else if (velocity > 500) {
          speedMultiplier = 1.5;
        } else {
          speedMultiplier = 1;
        }

        baseSpeed.current = speedMultiplier;

        if (timelineRef.current) {
          gsap.to(timelineRef.current, {
            timeScale: speedMultiplier,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      },
      onLeave: () => {
        // Reset to normal speed when leaving viewport
        if (!isHoveredRef.current && timelineRef.current) {
          gsap.to(timelineRef.current, {
            timeScale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      },
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = (clientName, event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setHoveredClient(clientName);
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });

    isHoveredRef.current = true;

    // Smoothly pause the animation
    if (timelineRef.current) {
      gsap.to(timelineRef.current, {
        timeScale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredClient(null);
    isHoveredRef.current = false;

    // Resume animation with current base speed
    if (timelineRef.current) {
      gsap.to(timelineRef.current, {
        timeScale: baseSpeed.current,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  // Create enough duplicates for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-40 overflow-hidden">
      <div className="text-center mb-24 px-6">
        <h2 className="text-4xl md:text-5xl font-nyghtserif mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-nyghtserif text-lg font-cormorant">
          We've had the privilege of partnering with some of the most
          prestigious brands
        </p>
      </div>

      <div ref={containerRef} className="relative overflow-hidden w-full">
        {hoveredClient && (
          <div
            className="fixed z-50 pointer-events-none bg-black/80 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <span className="font-cormorant text-base font-medium whitespace-nowrap">
              {hoveredClient}
            </span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
          </div>
        )}

        <div
          ref={carouselRef}
          className="flex items-center gap-16 will-change-transform"
        >
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105"
              onMouseEnter={(e) => handleMouseEnter(client.name, e)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={client.src || "/placeholder.svg"}
                alt={client.name}
                className="h-16 w-auto object-contain 
                transition-all duration-300 hover:grayscale"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  return (
    <div className="bg-white">
      <PremiumCarousel />
    </div>
  );
};

export default Clients;
