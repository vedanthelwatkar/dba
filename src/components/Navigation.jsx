"use client";

import CallIcon from "@/svgComponents/CallIcon";
import MailIcon from "@/svgComponents/MailIcon";
import WhatsappIcon from "@/svgComponents/WhatsappIcon";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false); // Start hidden
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [isNotDefault, setIsNotDefault] = useState(false);

  let heroInViewRef = useRef(null); // Start as true since hero is initially in view
  let heroObserverRef = useRef(null);

  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    if (location.pathname !== "/") {
      heroInViewRef = false;
      setIsNotDefault(true);
      setNavLinks(["Home"]);
    } else {
      heroInViewRef = true;
      setIsNotDefault(false);
      setNavLinks([
        "Home",
        "Designs",
        "Clients",
        "Services",
        "Testimonials",
        "Scenography",
      ]);
    }
  }, [location]);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    if (heroObserverRef.current) heroObserverRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          heroInViewRef.current = entry.isIntersecting;
          // Only show navbar when hero is NOT in view
          setIsVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(hero);
    heroObserverRef.current = observer;

    return () => {
      observer.disconnect();
      heroObserverRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // If hero is in view, keep navbar hidden
      if (heroInViewRef.current) {
        setIsVisible(false);
        return;
      }

      const current = window.scrollY;
      if (current > lastScrollY.current && current > 100) {
        setIsVisible(false);
      } else if (current < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToSection = (sectionId) => {
    if (isNotDefault) {
      setNavLinks([
        "Home",
        "Designs",
        "Clients",
        "Services",
        "Testimonials",
        "Scenography",
      ]);
      navigate("/");
    }
    const el = document.getElementById(sectionId.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ease-out transform ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="bg-background rounded-2xl shadow-xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  aria-label="Call"
                  className="w-12 h-12 bg-nyghtserif hover:bg-burnt/50 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <CallIcon />
                </button>
                <a
                  href="https://wa.me/919356666644"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Whatsapp"
                  className="w-12 h-12 bg-nyghtserif hover:bg-burnt/50
                  rounded-full flex items-center justify-center transition-all
                  duration-300"
                >
                  <WhatsappIcon />
                </a>
              </div>

              <div className="hidden lg:flex items-center space-x-8">
                {navLinks.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-nyghtserif hover:text-burnt transition-colors duration-300 tracking-wide text-md font-bold"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hidden md:block bg-nyghtserif hover:bg-burnt/50 text-white px-6 py-2 rounded-full  transition-all duration-300 text-md font-bold"
                >
                  Contact us
                </button>

                <button
                  onClick={() => setIsMobileMenuOpen((s) => !s)}
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                  className="lg:hidden w-10 h-10 bg-nyghtserif hover:bg-nyghtserif rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-20 left-4 right-4 bg-background border border-gray-200 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-nyghtserif font-nyghtserif tracking-tighter hover:opacity-80 transition-colors duration-300 text-left py-2"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-full text-white transition-all duration-300 text-md font-bold mt-4"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
