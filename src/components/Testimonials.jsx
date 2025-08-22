"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "Abhishek, you lived up to our expectations and how! Bravo Bravo Bravo!! May SHE and He shower you with happiness and great success and may you make every family's wish come true. Your dedication is applaudable and I, as the eldest of the Karnani family, thank you profusely. May GOD bless you. I take a bow and offer our standing ovation.",
    name: "CI Umesh Karnani Ji",
    title: "Karnani Family Elder",
    rating: 5,
  },
  {
    id: 2,
    text: "Abhishek, you have truly been a pivotal and integral part in our wedding and helped shape it in the most beautiful, royal and heavenly way! 6 months of a journey we all have embarked on together comes to an end in the most magical way and this is safe to say by not only the families but also each and every guest - the decor for every function was just beyond words! Thank you so much for making our dreams a tangible reality!",
    name: "Shloka Shah",
    title: "Bride, Shloka & Kush Wedding",
    rating: 5,
  },
  {
    id: 3,
    text: "The Grand opening of JW Marriot Walnut Grove Resort & Spa was very creatively designed and executed in Mussoorie Hills. The one of its kind opening of our hotel is complimenting the beauty of this place called queen of hills, Mussoorie.",
    name: "Mr. Raj Chopra",
    title: "Owner, JW Marriot, Mussoorie",
    rating: 5,
  },
  {
    id: 4,
    text: "Successfully designed and executed this private function at Mr.Singh's residence. Good job done by the team...will recommend you in future.",
    name: "Mr. Singh",
    title: "AMP Motors",
    rating: 5,
  },
  {
    id: 5,
    text: "Successfully designed and executed a social private event of Muthoot Group grand daughter at Taj Vivanta, Surajkund. The work is really appreciable and they have delivered more than the commitment.",
    name: "Mr. George Muthoot",
    title: "Muthoot Group",
    rating: 5,
  },
  {
    id: 6,
    text: "Beautifully designed and executed Diwan Sahib's daughter's wedding and Sangeet at Amaanta Farms. The work was applauded a lot and our client was delighted. The kind of work you have done is commendable and outstanding stuff is used throughout both the themes.",
    name: "Mr. Surinder Diwan",
    title: "Diwan Saheb",
    rating: 5,
  },
  {
    id: 7,
    text: "A Baby Shower was creatively designed and a new theme was build up at Hyatt, Bhikaji Delhi for Shorewalas daughter Tarini. The ballroom was converted into a wonderland with whites and greens. Delighted and elated to see this kind of work and the team has really shown what they are capable of by making our dream come true for our daughter.",
    name: "Ms. Shorewala",
    title: "Civil Lines",
    rating: 5,
  },
  {
    id: 8,
    text: "The designs were customised and incorporated post the inputs from bride and the wedding pre-function was executed successfully in Maurya, Kamal Mahal. Outstanding designs and flawless execution ...stunning work thanks a ton.",
    name: "Mr. Srivastava",
    title: "MD, Rockland Group",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const currentSpeedRef = useRef(1);
  const scenographyRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const background = backgroundRef.current;
    const carousel = carouselRef.current;

    if (!container || !background || !carousel) return;

    gsap.to(background, {
      yPercent: -40, // Reduced parallax effect for better performance
      scale: 1.2, // Reduced scale
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Reduced scrub value
      },
    });

    gsap.fromTo(
      scenographyRef.current,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: -70,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: background.current,
          start: "top top",
          end: "bottom top",
          scrub: 1, // Reduced scrub value
        },
      }
    );

    const testimonialElements = carousel.children;
    const totalWidth = Array.from(testimonialElements).reduce(
      (acc, el) => acc + el.offsetWidth + 32,
      0
    );

    const duplicatedTestimonials = Array.from(testimonialElements).map((el) =>
      el.cloneNode(true)
    );
    duplicatedTestimonials.forEach((el) => carousel.appendChild(el));

    animationRef.current = gsap.to(carousel, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    let scrollTimeout;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        currentSpeedRef.current = 2; // Reduced speed multiplier
        animationRef.current.timeScale(currentSpeedRef.current);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        currentSpeedRef.current = 1;
        animationRef.current.timeScale(currentSpeedRef.current);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume();
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-400"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat z-10"
        style={{
          backgroundImage: 'url("/bride-entry-setup-designsbyabhishek.jpg")',
        }}
      />

      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="font-nyghtserif text-5xl md:text-6xl text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-white/80 font-cormorant text-lg max-w-2xl mx-auto px-4">
            Hear what our valued clients have to say about their experience
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-8 will-change-transform"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-96 bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20"
              >
                <div className="flex justify-center mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-white text-center mb-6 leading-relaxed font-cormorant text-lg italic">
                  "{testimonial.text}"
                </p>

                <div className="text-center">
                  <h4 className="text-white font-serif text-xl mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/70 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            ref={scenographyRef}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none 
             text-nyghtserif2 font-nyghtserif tracking-tight text-center z-[5]"
            style={{ fontSize: "clamp(2rem, 10vw, 7rem)", lineHeight: 1 }}
          >
            Scenography
          </div>
        </div>
      </div>
    </section>
  );
}
