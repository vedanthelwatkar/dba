"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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
]

const PremiumCarousel = () => {
  const carouselRef = useRef(null)
  const containerRef = useRef(null)
  const [hoveredClient, setHoveredClient] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const animationRef = useRef(null)
  const scrollSpeedRef = useRef(1)
  const isHoveredRef = useRef(false)

  useEffect(() => {
    const carousel = carouselRef.current
    const container = containerRef.current

    if (!carousel || !container) return

    const totalWidth = carousel.scrollWidth / 2

    gsap.set(carousel, { x: 0 })

    animationRef.current = gsap.to(carousel, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const parsed = Number.parseFloat(x)
          return `${parsed % totalWidth}px`
        },
      },
    })

    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (isHoveredRef.current) return

        const velocity = self.getVelocity()
        const speedMultiplier = Math.abs(velocity) > 100 ? 2 : 0.8
        scrollSpeedRef.current = speedMultiplier

        if (animationRef.current) {
          animationRef.current.timeScale(speedMultiplier)
        }
      },
    })

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleMouseEnter = (clientName, event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    setHoveredClient(clientName)
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    })
    isHoveredRef.current = true

    if (animationRef.current) {
      animationRef.current.pause()
    }
  }

  const handleMouseLeave = () => {
    setHoveredClient(null)
    isHoveredRef.current = false

    if (animationRef.current) {
      animationRef.current.resume()
      animationRef.current.timeScale(scrollSpeedRef.current)
    }
  }

  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos]

  return (
    <section id="clients" className="py-40 overflow-hidden">
      <div className="text-center mb-24 px-6">
        <h2 className="text-4xl md:text-5xl font-nyghtserif mb-4">Trusted by Industry Leaders</h2>
        <p className="text-nyghtserif text-lg font-cormorant">
          We've had the privilege of partnering with some of the most prestigious brands
        </p>
      </div>

      <div ref={containerRef} className="relative overflow-hidden w-full">
        {hoveredClient && (
          <div
            className="fixed z-50 pointer-events-none bg-background text-nyghtserif2 px-4 py-2 rounded-md"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <span className="font-cormorant text-xl font-medium text-nyghtserif2 whitespace-nowrap">
              {hoveredClient}
            </span>
          </div>
        )}

        <div ref={carouselRef} className="flex items-center gap-16">
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter(client.name, e)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={client.src || "/placeholder.svg"}
                alt={client.name}
                className="h-16 w-auto object-contain 
                filter hover:grayscale transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Clients = () => {
  return (
    <div className="bg-white">
      <PremiumCarousel />
    </div>
  )
}

export default Clients
