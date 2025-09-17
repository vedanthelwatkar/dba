"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageModal from "./ImageModal";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const serviceData = [
    {
      title: "15+ Years of Excellence",
      subtitle: "Crafting Unforgettable Moments",
      description:
        "For over two decades, we've been the storytellers behind India's most unforgettable celebrations—where design meets emotion, and every detail whispers luxury. From the star-studded unions of Yuvraj Singh & Hazel Keech; Bhuvneshwar Kumar & Nupur Nagar to collaborations with icons like Tony Robbins, Arjun Rampal, Anju Modi, Rohit Bal, and Sabyasachi, our journey has been adorned with illustrious partnerships. We've also had the privilege of crafting experiences for esteemed organizations such as DY Patil,  Sanjay Ghodawat Group, Dollar Club, Muthoot Group, Being Human,  Somany Tiles & Karnani Family.",
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
      images: [
        "/3d-models-1-designsbyabhishek.jpg",
        "/3d-models-2-designsbyabhishek.jpg",
        "/3d-models-3-designsbyabhishek.jpg",
        "/3d-models-4-designsbyabhishek.jpg",
        "/3d-models-5-designsbyabhishek.jpg",
      ],
    },
  ];

  const openSingleImageModal = (imageSrc, title) => {
    setCurrentImages([{ src: imageSrc, alt: title }]);
    setActiveImageIndex(0);
    setModalOpen(true);
  };

  const openCarouselModal = (images, startIndex = 0) => {
    setCurrentImages(
      images.map((src, index) => ({
        src,
        alt: `3D Design ${index + 1}`,
      }))
    );
    setActiveImageIndex(startIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePrevious = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleCarouselPrev = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? serviceData[3].images.length - 1 : prev - 1
    );
  };

  const handleCarouselNext = () => {
    setCarouselIndex((prev) =>
      prev === serviceData[3].images.length - 1 ? 0 : prev + 1
    );
  };

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

        const images = service.querySelectorAll(".service-image");
        const content = service.querySelector(".service-content");

        images.forEach((image, imgIndex) => {
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
        });

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
            <button
              className="px-8 py-3 border border-stone-300 rounded-full text-stone-700 hover:bg-stone-100 transition-colors duration-300"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
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
                {service.images ? (
                  <div className="relative">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <button
                        onClick={() =>
                          openSingleImageModal(
                            service.images[carouselIndex],
                            `${service.title} - Image ${carouselIndex + 1}`
                          )
                        }
                        className="w-full h-full block"
                        aria-label={`View ${service.title} - Image ${
                          carouselIndex + 1
                        }`}
                      >
                        <img
                          src={
                            service.images[carouselIndex] || "/placeholder.svg"
                          }
                          alt={`${service.title} - Image ${carouselIndex + 1}`}
                          className="service-image w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          loading="lazy"
                          decoding="async"
                          fetchPriority={index < 2 ? "high" : "low"}
                        />
                      </button>
                    </div>

                    {/* Carousel Navigation */}
                    <button
                      onClick={handleCarouselPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                      aria-label="Previous image"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={handleCarouselNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                      aria-label="Next image"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {service.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setCarouselIndex(imgIndex)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            imgIndex === carouselIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                          aria-label={`Go to image ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      openSingleImageModal(service.image, service.title)
                    }
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden block w-full"
                    aria-label={`View ${service.title}`}
                  >
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="service-image w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      loading="lazy"
                      decoding="async"
                      fetchPriority={index < 2 ? "high" : "low"}
                    />
                  </button>
                )}
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

      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={currentImages}
        activeIndex={activeImageIndex}
        onPrevious={currentImages.length > 1 ? handlePrevious : null}
        onNext={currentImages.length > 1 ? handleNext : null}
        showNavigation={currentImages.length > 1}
      />
    </section>
  );
}
