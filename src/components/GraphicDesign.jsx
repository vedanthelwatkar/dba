"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { graphicDesign3DItems } from "../data/graphicDesignItems";

const GraphicDesign = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Masonry-style animation
    gsap.utils.toArray(".design-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, rotation: 5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax for background elements
    gsap.to(".design-bg", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-br from-amber-50 to-stone-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="design-bg absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-stone-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-6xl text-stone-800 mb-6">
            Graphic & <h2 className="text-amber-600">3D Design</h2>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Bringing concepts to life through innovative design and
            visualization
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {graphicDesign3DItems.map((item, index) => (
            <div
              key={item.id}
              className="design-card break-inside-avoid group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6">
                  <div className="text-sm text-amber-600 font-medium mb-2 tracking-wide">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-cormorant text-stone-800 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
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

export default GraphicDesign;
