"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline()

      tl.from(imageRef.current, {
        scale: 1.2,
        duration: 2,
        ease: "power2.out",
      })
        .from(
          titleRef.current.children,
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=1.5",
        )
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8",
        )

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="/profile-images/abhishek-kaushik-wedding-designer-designsbyabhishek.jpeg"
          alt="Abhishek Kaushik Wedding Designer"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <div ref={titleRef} className="mb-6">
            <div className="text-white/90 text-lg md:text-xl font-light tracking-widest mb-4">DESIGNS BY</div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-tight">ABHISHEK</h1>
            <div className="text-4xl md:text-6xl lg:text-7xl font-light text-white/90 tracking-wider italic">
              Portfolio
            </div>
          </div>

          <p ref={subtitleRef} className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            Luxury Wedding Designer crafting extraordinary experiences through innovative design and meticulous
            attention to detail
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-light tracking-wide mb-2">EXPLORE</span>
          <div className="w-px h-12 bg-white/50" />
        </div>
      </div>
    </section>
  )
}

export default Hero
