"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const logosRef = useRef(null);
  const statsRef = useRef(null);

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
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.fromTo(
          words,
          { y: 100, opacity: 0, rotationX: 90 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: "bottom 20%",
            },
          }
        );
      }

      gsap.fromTo(
        imageRef.current,
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 70%",
          },
        }
      );

      const logoItems = logosRef.current?.querySelectorAll(".logo-item");
      if (logoItems) {
        logoItems.forEach((logo, index) => {
          gsap.fromTo(
            logo,
            {
              y: 60,
              opacity: 0,
              scale: 0.8,
              rotation: Math.random() * 360,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1,
              delay: index * 0.05,
              ease: "elastic.out(1, 0.8)",
              scrollTrigger: {
                trigger: logosRef.current,
                start: "top 80%",
              },
            }
          );

          gsap.to(logo, {
            y: "random(-10, 10)",
            x: "random(-5, 5)",
            rotation: "random(-3, 3)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1,
          });
        });
      }

      const statNumbers = statsRef.current?.querySelectorAll(".stat-number");
      if (statNumbers) {
        statNumbers.forEach((stat) => {
          const endValue = Number.parseInt(stat.dataset.value);
          gsap.fromTo(
            stat,
            { textContent: 0 },
            {
              textContent: endValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 80%",
              },
            }
          );
        });
      }
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={aboutRef}
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-stone-100 via-amber-50/30 to-stone-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-stone-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div ref={textRef} className="text-center mb-20">
          <div className="mb-8">
            {["Crafting", "Extraordinary", "Experiences"].map((word, index) => (
              <h2
                key={index}
                className="word inline-block mr-4 text-6xl md:text-8xl text-stone-800 font-light"
              >
                {word}
              </h2>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              "Where",
              "luxury",
              "meets",
              "artistry,",
              "and",
              "dreams",
              "become",
              "reality",
            ].map((word, index) => (
              <span
                key={index}
                className="word inline-block mr-2 text-xl md:text-2xl text-stone-600 font-light"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Image and profile */}
          <div className="space-y-8">
            <div ref={imageRef} className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/profile-images/abhishek-kaushik-image-5-designsbyabhishek.jpg"
                  alt="Abhishek Kaushik"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-stone-200/50">
                <h3 className="font-serif text-2xl text-stone-800 mb-1">
                  Abhishek Kaushik
                </h3>
                <p className="text-amber-600 font-medium">
                  Luxury Wedding Designer
                </p>
                <p className="text-stone-500 text-sm mt-1">DesignsByAbhishek</p>
              </div>
            </div>
          </div>

          {/* Right: Description and stats */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-stone-700 leading-relaxed text-lg">
                From the iconic unions of{" "}
                <span className="font-semibold text-amber-600">
                  Yuvraj Singh & Hazel Keech
                </span>{" "}
                and
                <span className="font-semibold text-amber-600">
                  {" "}
                  Bhuvneshwar Kumar & Nupur Nagar
                </span>{" "}
                to collaborations with industry luminaries like{" "}
                <span className="font-semibold text-amber-600">
                  Tony Robbins, Arjun Rampal, Anju Modi, Rohit Bal, and
                  Sabyasachi
                </span>
                , our journey is adorned with prestigious partnerships.
              </p>
              <p className="text-stone-600 leading-relaxed italic text-xl mt-6">
                "Each event is a canvas—painting opulence, elegance, and bespoke
                artistry."
              </p>
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50">
                <div
                  className="stat-number text-3xl font-serif text-amber-600 font-bold"
                  data-value="500"
                >
                  0
                </div>
                <p className="text-stone-600 text-sm mt-1">Events Crafted</p>
              </div>
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50">
                <div
                  className="stat-number text-3xl font-serif text-amber-600 font-bold"
                  data-value="15"
                >
                  0
                </div>
                <p className="text-stone-600 text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50">
                <div
                  className="stat-number text-3xl font-serif text-amber-600 font-bold"
                  data-value="50"
                >
                  0
                </div>
                <p className="text-stone-600 text-sm mt-1">Celebrity Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl text-stone-800 mb-4">
            Our Prestigious Clientele
          </h3>
          <div className="w-24 h-0.5 bg-amber-600 mx-auto"></div>
        </div>

        <div ref={logosRef} className="relative">
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="logo-item relative group cursor-pointer"
                style={{
                  transform: `translateY(${Math.sin(index * 0.5) * 20}px)`,
                }}
              >
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:bg-white">
                  <img
                    src={client.src || "/placeholder.svg"}
                    alt={client.name}
                    className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-stone-800 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
