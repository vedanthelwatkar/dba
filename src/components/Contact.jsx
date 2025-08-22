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
        <h1 className="text-[20rem] text-center font-nyghtserif text-black/5 select-none">
          DESIGNS BY ABHISHEK
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative">
              <img
                src="/luxury-haldi-event-designsbyabhishek.jpg"
                alt="Designs by Abhishek Setup"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-nyghtserif text-nyghtserif2 mb-4">
                  Get in Touch Today!
                </h2>
                <p className="text-nyghtserif2 text-lg font-cormorant">
                  Ready to transform your space? Let's discuss your vision.
                </p>
              </div>

              <div className="flex items-center justify-between">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="hover:opacity-80 transition-opacity p-4"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <QR />
                <span>
                  Scan the QR code to connect with our expert instantly on
                  Whatsapp
                </span>
                <img src="" />
              </div>
            </div>
          </div>

          {/* Right side - Contact Info and Navigation */}
          <div className="space-y-12">
            {/* Navigation Links */}
            <div>
              <nav className="space-y-4">
                <a
                  href="#home"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-lg transition-colors"
                >
                  Why choose us?
                </a>
                <a
                  href="#designs"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-lg transition-colors"
                >
                  Our Process
                </a>
                <a
                  href="#services"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-lg transition-colors"
                >
                  Reviews
                </a>
                <a
                  href="#testimonials"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-lg transition-colors"
                >
                  About
                </a>
                <a
                  href="#scenography"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-lg transition-colors"
                >
                  View portfolio
                </a>
                <a
                  href="#clients"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-lg transition-colors"
                >
                  Showroom
                </a>
                <a
                  href="#contact"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-lg transition-colors"
                >
                  FAQ
                </a>
              </nav>
            </div>

            {/* Promotional Card */}
            <div className="border-2 border-dashed border-black/20 rounded-3xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-nyghtserif2 font-cormorant text-lg mb-3">
                    Need premium event design services? Explore our extensive
                    portfolio for luxury events and celebrations!
                  </p>
                  <a
                    href="#portfolio"
                    className="text-nyghtserif2 font-nyghtserif text-lg underline hover:no-underline transition-all"
                  >
                    View now
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Embed */}
            <div className="bg-burnt/10 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-nyghtserif text-nyghtserif2">
                  Follow Our Work
                </h3>
                <a
                  href="https://instagram.com/designsbyabhishek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nyghtserif2 hover:text-black transition-colors font-nyghtserif"
                >
                  @designsbyabhishek
                </a>
              </div>

              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-background">
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

        {/* Bottom Section - Address and Contact */}
        <div className="mt-20 pt-12 border-t border-black/10 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
            <div>
              <h3 className="text-3xl font-nyghtserif text-nyghtserif2 mb-2">
                1st Floor, Modi House,
              </h3>
              <p className="text-nyghtserif2 font-nyghtserif text-xl">
                Off Link Rd, near Fun Republic, Mumbai, 400053
                <br />
                Maharashtra, India
              </p>
            </div>
          </div>
        </div>
        <span className="flex items-center gap-1 font-cormorant text-nyghtserif2 mb-4">
          <CopyrightIcon color="#211C1D" /> {new Date().getFullYear()} Designs
          By Abhishek
        </span>
      </div>
    </section>
  );
};

export default Contact;
