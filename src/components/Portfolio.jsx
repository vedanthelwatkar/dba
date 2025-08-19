"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const portfolioItems = [
  {
    id: 1,
    src: "/portfolio/wedding-setup-designsbyabhishek.jpg",
    title: "Wedding Setup",
    category: "Wedding Design – Ceremony",
    content:
      "An elegant wedding setup featuring intricate floral designs and ambient lighting.",
  },
  {
    id: 2,
    src: "/portfolio/night-decor-designsbyabhishek.jpg",
    title: "Night Decor",
    category: "Event Design – Evening",
    content:
      "Transforming spaces with enchanting night decorations and captivating light installations.",
  },
  {
    id: 3,
    src: "/portfolio/sangeet-stage-light-designsbyabhishek.jpg",
    title: "Sangeet Stage Lighting",
    category: "Event Design – Stage Lighting",
    content:
      "Dynamic stage lighting for Sangeet ceremonies, creating a vibrant and festive atmosphere.",
  },
  {
    id: 4,
    src: "/portfolio/reception-floral-tunnel-designsbyabhishek.jpg",
    title: "Reception Floral",
    category: "Wedding Design – Reception",
    content:
      "A breathtaking floral tunnel entrance designed for grand wedding receptions.",
  },
  {
    id: 5,
    src: "/portfolio/floral-decoration-designsbyabhishek.jpg",
    title: "Floral Decoration",
    category: "Event Design – Floral",
    content:
      "Exquisite floral arrangements adding beauty and elegance to any event.",
  },
  {
    id: 6,
    src: "/portfolio/bride-entry-setup-designsbyabhishek.jpg",
    title: "Bride Entry Setup",
    category: "Wedding Design – Bridal",
    content:
      "A majestic and personalized setup for the bride's grand entrance.",
  },
  {
    id: 7,
    src: "/portfolio/indoor-decoration-designsbyabhishek.jpg",
    title: "Indoor Decoration",
    category: "Event Design – Indoor",
    content:
      "Sophisticated indoor decor solutions for various events and celebrations.",
  },
  {
    id: 8,
    src: "/portfolio/outside-wedding-setup-designsbyabhishek.jpg",
    title: "Outdoor Wedding Setup",
    category: "Wedding Design – Outdoor",
    content:
      "Charming outdoor wedding setups designed to blend with natural surroundings.",
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

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

      // Grid items animation
      gsap.from(".portfolio-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-stone-100 via-amber-50/30 to-stone-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-stone-800 tracking-tight mb-6">
            Portfolio
          </h2>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
            A curated collection of our most exceptional wedding and event
            designs
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-4">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-light mb-1">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
            <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedItem.src || "/placeholder.svg"}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-light text-stone-800 mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-stone-600 mb-4">{selectedItem.category}</p>
                <p className="text-stone-700 leading-relaxed">
                  {selectedItem.content}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
