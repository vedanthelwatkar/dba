"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "FLORAL ARCHITECTURE",
    description: "Flower designing; Sourcing; Art Installation",
    image: "/services/floral-architecture-designsbyabhishek.jpg",
  },
  {
    title: "CREATIVE CONCEPTS & DESIGN",
    description: "3D modelling, CAD Floor Plans; AI Designboards",
    image: "/services/3D-modelling-designsbyabhishek.jpg",
  },
  {
    title: "LIGHT DESIGN",
    description: "Thematic Ambience & Special effects",
    image: "/services/light-decoration-designsbyabhishek.jpg",
  },
  {
    title: "PRODUCTION & EXECUTION",
    description: "Space Transformation; Turnkey projects",
    image: "/services/production-designsbyabhishek.jpg",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-stone-800 tracking-tight mb-6">
            Services
          </h2>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
            Comprehensive design solutions for luxury weddings and exclusive
            events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-light text-stone-800 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
