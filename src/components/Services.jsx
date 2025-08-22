"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef([]);

  const serviceData = [
    {
      title: "15+ Years of Excellence",
      subtitle: "Crafting Unforgettable Moments",
      description:
        "Our expertise, built upon years of dedication since 2008, allows us to transform your vision into extraordinary celebrations. Our approach is designed to be seamless and sophisticated, ensuring every detail reflects your unique story.",
      image: "/profile-images/abhishek-kaushik-image-3-designsbyabhishek.jpg",
    },
    {
      title: "Finest Quality and Bespoke Design",
      subtitle: "Luxury in Every Detail",
      description:
        "Lighting has the power to transform spaces, set moods, and create timeless memories. We specialize in curating elegant and magical lighting experiences that elevate your celebration with warmth and grandeur.",
      image: "/light-decoration-designsbyabhishek.jpg",
    },
    {
      title: "The Art of Flawless Execution",
      subtitle: "Your Vision, Our Passion",
      description:
        "From stage to seating, florals to flooring — we manage every production detail with precision. Our seamless coordination ensures your event unfolds effortlessly, leaving you stress-free to enjoy the moment.",
      image: "/production-designsbyabhishek.jpg",
    },
    {
      title: "More Than Just Events",
      subtitle: "Creating Lasting Memories",
      description:
        "From immersive 3D concepts to stunningly executed event layouts, we bring imagination to life. Our creative designs help you visualize the celebration even before it unfolds, ensuring perfection in planning and delivery.",
      image: "/3D-modelling-designsbyabhishek.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current.querySelectorAll(".char"),
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.02, // Reduced stagger for better performance
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      servicesRef.current.forEach((service, index) => {
        if (!service) return;

        const image = service.querySelector(".service-image");
        const content = service.querySelector(".service-content");

        gsap.fromTo(
          image,
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            scale: 1.1, // Reduced scale for better performance
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
            duration: 1.2, // Reduced duration
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: content,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          service.querySelector(".main-service-title"),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6 } // Reduced duration
        )
          .fromTo(
            service.querySelector(".service-subtitle"),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5 }, // Reduced duration
            0.15 // Reduced delay
          )
          .fromTo(
            service.querySelectorAll(".word"),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.015 }, // Reduced duration and stagger
            0.3 // Reduced delay
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitTextIntoChars = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const splitTextIntoWords = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="font-cormorant word inline-block mr-2">
        {word}
      </span>
    ));

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white via-background via-[50%] to-white to-[80%] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-nyghtserif2 text-sm uppercase tracking-wider mb-4">
            Features
          </p>

          <div ref={titleRef} className="mb-8 text-center">
            <h2 className="text-6xl md:text-8xl text-nyghtserif font-light leading-tight">
              {splitTextIntoChars("Why Designs by Abhishek?")}
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <button className="px-8 py-3 border border-stone-300 rounded-full text-stone-700 hover:bg-stone-100 transition-colors duration-300">
              Let's get started
            </button>
          </div>
        </div>

        <div className="space-y-32">
          {serviceData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (servicesRef.current[index] = el)}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image Section */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="service-image w-full h-full object-cover"
                    loading="lazy" // Added image optimization attributes
                    decoding="async"
                    fetchPriority={index < 2 ? "high" : "low"}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`service-content space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <h3 className="main-service-title text-3xl md:text-4xl text-nyghtserif2 font-light">
                    {service.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-nyghtserif2/20"></div>
                </div>

                <div className="service-description space-y-4">
                  <h4 className="service-subtitle font-cormorant text-xl text-nyghtserif">
                    {service.subtitle}
                  </h4>
                  <p className="text-nyghtserif leading-relaxed text-lg">
                    {splitTextIntoWords(service.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
