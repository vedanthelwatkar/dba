"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Contact = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={contentRef} className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8">Let's Create Something Extraordinary</h2>

          <p className="text-white/80 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Ready to transform your special day into an unforgettable experience? Let's discuss your vision and bring it
            to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-light mb-4">Email</h3>
              <p className="text-white/70">hello@designsbyabhishek.com</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Phone</h3>
              <p className="text-white/70">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Location</h3>
              <p className="text-white/70">Mumbai, India</p>
            </div>
          </div>

          <button className="bg-white text-stone-900 px-12 py-4 font-light tracking-wide hover:bg-white/90 transition-colors duration-300">
            GET IN TOUCH
          </button>
        </div>
      </div>

      <div className="border-t border-white/20 mt-16 pt-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/60 font-light">© 2024 Designs by Abhishek. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
