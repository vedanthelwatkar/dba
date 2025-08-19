import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".about-section",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.to(".client-logo", {
          y: (logo, index) =>
            Math.sin(progress * Math.PI * 2 + index * 0.5) * 20,
          rotation: (logo, index) => progress * (index % 2 === 0 ? 5 : -5),
          scale: 1 + progress * 0.1,
          duration: 0.3,
          ease: "power2.out",
        });

        // Added scroll animation for Abhishek images
        const image1 = document.querySelector(".abhishek-image-1");
        const image2 = document.querySelector(".abhishek-image-2");

        if (image1 && image2) {
          if (progress > 0.5) {
            gsap.to(image1, { opacity: 0, duration: 0.5 });
            gsap.to(image2, { opacity: 1, duration: 0.5 });
          } else {
            gsap.to(image1, { opacity: 1, duration: 0.5 });
            gsap.to(image2, { opacity: 0, duration: 0.5 });
          }
        }
      },
    });

    ScrollTrigger.create({
      trigger: ".client-logos-grid",
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        const logos = document.querySelectorAll(".client-logo-item");

        gsap.fromTo(
          logos,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotationY: 180,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          }
        );
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="about-section relative overflow-hidden bg-background">
      <div className="absolute top-10 md:top-20 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 bg-burnt/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-24 h-24 md:w-48 md:h-48 bg-burnt/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-2 h-2 bg-burnt rounded-full animate-pulse"></div>
              <div className="border-l-4 border-burnt/20 pl-4 md:pl-8 space-y-4">
                <div className="flex items-center gap-6">
                  <div>
                    <h2 className="font-dream text-burnt text-3xl md:text-6xl mb-2 tracking-tight">
                      Abhishek Kaushik
                    </h2>
                    <div className="flex items-center gap-3">
                      <div className="w-8 md:w-12 h-0.5 bg-burnt/40"></div>
                      <p className="text-burnt/80 text-lg md:text-xl font-medium tracking-wide">
                        Luxury Wedding Designer
                      </p>
                    </div>
                    <p className="text-burnt/60 text-base md:text-lg mt-1 italic">
                      DesignsByAbhishek
                    </p>

                    <div className="relative w-60 h-40 md:w-80 md:h-60 mt-6 mb-4 overflow-hidden rounded-xl shadow-lg">
                      <img
                        src="/profile-images/abhishek-kaushik-image-5-designsbyabhishek.jpg"
                        alt="Abhishek Kaushik"
                        className="abhishek-image-1 absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-burnt/5 p-4 md:p-8 rounded-2xl border border-burnt/10">
              <h3 className="text-burnt font-semibold text-base md:text-lg mb-4 tracking-wide">
                ILLUSTRIOUS PARTNERSHIPS
              </h3>
              <p className="text-burnt/80 text-base md:text-lg leading-relaxed">
                From the iconic unions of{" "}
                <span className="font-medium">Yuvraj Singh & Hazel Keech</span>{" "}
                and{" "}
                <span className="font-medium">
                  Bhuvneshwar Kumar & Nupur Nagar
                </span>{" "}
                to collaborations with{" "}
                <span className="font-medium">
                  Tony Robbins, Arjun Rampal, Anju Modi, Rohit Bal, and
                  Sabyasachi
                </span>
                , our journey is adorned with prestigious partnerships.
              </p>
            </div>

            <div className="relative">
              <p className="text-burnt/90 text-lg md:text-xl leading-relaxed font-light italic text-center py-6">
                Each event is a canvas—painting opulence, elegance, and bespoke
                artistry.
              </p>
              <div className="absolute bottom-0 right-0 text-3xl md:text-4xl text-burnt/10 font-serif">
                {" "}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-dream text-burnt text-2xl md:text-3xl mb-2">
                Our Prestigious Clients
              </h3>
              <div className="w-16 h-0.5 bg-burnt/40 mx-auto"></div>
            </div>

            <div className="client-logos-grid">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 p-6">
                {clientLogos.map((client, index) => (
                  <div
                    key={index}
                    className="client-logo-item relative bg-white rounded-xl shadow-md border border-gray-100 p-4 flex items-center justify-center aspect-square opacity-0 cursor-pointer transition-all duration-300 hover:shadow-lg"
                    style={{ perspective: "1000px" }}
                  >
                    <img
                      src={client.src || "/placeholder.svg"}
                      alt={client.name}
                      className="w-full h-full object-contain max-w-16 max-h-16 transition-transform duration-300"
                      draggable={false}
                    />
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-burnt text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                      {client.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
