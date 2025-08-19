"use client"

import { useState, useEffect } from "react"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider text-stone-800">
            DESIGNS BY <span className="font-medium">ABHISHEK</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-stone-700 hover:text-stone-900 transition-colors duration-300 font-light tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
