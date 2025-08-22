"use client";

import CallIcon from "@/svgComponents/CallIcon";
import CopyrightIcon from "@/svgComponents/CopyrightIcon";
import FacebookIcon from "@/svgComponents/FacebookIcon";
import LinkedinIcon from "@/svgComponents/LinkedinIcon";
import LocationIcon from "@/svgComponents/LocationIcon";
import MailIcon from "@/svgComponents/MailIcon";
import PinterestIcon from "@/svgComponents/PinterestIcon";
import QR from "@/svgComponents/QR";
import WhatsappIcon from "@/svgComponents/WhatsappIcon";

const Contact = () => {
  const navLinks = [
    {
      name: "Whatsapp",
      href: "https://wa.me/919356666644",
      icon: <WhatsappIcon color="#211C1D" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1GnsBMf2L9/?mibextid=wwXIfr",
      icon: <FacebookIcon color="#211C1D" />,
    },
    {
      name: "Pinterest",
      href: "https://in.pinterest.com/designsbyabhishek/",
      icon: <PinterestIcon color="#211C1D" />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/abhishek-kaushik-063888b/",
      icon: <LinkedinIcon color="#211C1D" />,
    },
    {
      name: "contact@learnshackedu.com",
      href: "mailto:contact@designs.com",
      icon: <MailIcon color="#211C1D" />,
    },
    {
      name: "+91 81787 59588",
      href: "tel:+918178759588",
      icon: <CallIcon color="#211C1D" />,
    },
    {
      name: "Location",
      href: "https://maps.app.goo.gl/s9TNijuWmBkh95Le6",
      icon: <LocationIcon color="#211C1D" />,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-background text-nyghtserif2 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] text-center font-nyghtserif text-black/5 select-none leading-none">
          DESIGNS BY ABHISHEK
        </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden mb-6 lg:mb-8 relative">
              <img
                src="/luxury-haldi-event-designsbyabhishek.jpg"
                alt="Designs by Abhishek Setup"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-nyghtserif text-nyghtserif2 mb-3 lg:mb-4">
                  Get in Touch Today!
                </h2>
                <p className="text-nyghtserif2 text-base sm:text-lg font-cormorant">
                  Ready to transform your space? Let's discuss your vision.
                </p>
              </div>

              {/* Social Icons - Responsive Grid */}
              <div className="grid grid-cols-4 sm:flex sm:items-center sm:justify-between gap-2 sm:gap-0">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="hover:opacity-80 transition-opacity p-2 sm:p-4 flex items-center justify-center"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              {/* QR Code Section - Responsive */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 rounded-xl">
                <div className="flex-shrink-0 self-center sm:self-start">
                  <QR />
                </div>
                <span className="text-sm sm:text-base text-center sm:text-left font-cormorant">
                  Scan the QR code to connect with our expert instantly on
                  Whatsapp
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:space-y-12 order-1 lg:order-2">
            {/* Navigation Links */}
            <div>
              <nav className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-4">
                <a
                  href="#home"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Why choose us?
                </a>
                <a
                  href="#designs"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Our Process
                </a>
                <a
                  href="#services"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Reviews
                </a>
                <a
                  href="#testimonials"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  About
                </a>
                <a
                  href="#scenography"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  View portfolio
                </a>
                <a
                  href="#clients"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Showroom
                </a>
                <a
                  href="#contact"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  FAQ
                </a>
              </nav>
            </div>

            {/* Promotional Card - Responsive */}
            <div className="border-2 border-dashed border-black/20 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-nyghtserif2 font-cormorant text-base sm:text-lg mb-3">
                    Need premium event design services? Explore our extensive
                    portfolio for luxury events and celebrations!
                  </p>
                  <a
                    href="#portfolio"
                    className="text-nyghtserif2 font-nyghtserif text-base sm:text-lg underline hover:no-underline transition-all"
                  >
                    View now
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Embed - Responsive */}
            <div className="bg-burnt/10 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 space-y-2 sm:space-y-0">
                <h3 className="text-xl sm:text-2xl font-nyghtserif text-nyghtserif2 text-center sm:text-left">
                  Follow Our Work
                </h3>
                <a
                  href="https://instagram.com/designsbyabhishek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nyghtserif2 hover:text-black transition-colors font-nyghtserif text-center sm:text-right"
                >
                  @designsbyabhishek
                </a>
              </div>

              <div className="relative w-full h-64 sm:h-80 rounded-xl lg:rounded-2xl overflow-hidden bg-background">
                <iframe
                  src="https://www.instagram.com/designsbyabhishek/embed"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  title="Instagram Feed - @designsbyabhishek"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Address and Contact - Responsive */}
        <div className="mt-12 lg:mt-20 pt-8 lg:pt-12 border-t border-black/10 mb-6 lg:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-nyghtserif text-nyghtserif2 mb-2">
                1st Floor, Modi House,
              </h3>
              <p className="text-nyghtserif2 font-nyghtserif text-lg sm:text-xl">
                Off Link Rd, near Fun Republic, Mumbai, 400053
                <br />
                Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright - Responsive */}
        <div className="text-center lg:text-left">
          <span className="flex items-center justify-center lg:justify-start gap-1 font-cormorant text-nyghtserif2 mb-4">
            <CopyrightIcon color="#211C1D" /> {new Date().getFullYear()} Designs
            By Abhishek
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
