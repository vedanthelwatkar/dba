"use client";

import CallIcon from "@/svgComponents/CallIcon";
import CopyrightIcon from "@/svgComponents/CopyrightIcon";
import FacebookIcon from "@/svgComponents/FacebookIcon";
import InstagramIcon from "@/svgComponents/InstagramIcon";
import LinkedinIcon from "@/svgComponents/LinkedinIcon";
import LocationIcon from "@/svgComponents/LocationIcon";
import MailIcon from "@/svgComponents/MailIcon";
import PinterestIcon from "@/svgComponents/PinterestIcon";
import QR from "@/svgComponents/QR";
import WhatsappIcon from "@/svgComponents/WhatsappIcon";
import Youtube from "@/svgComponents/Youtube";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import ImageModal from "./ImageModal";

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
      name: "designsbyabhishek@gmail.com",
      href: "mailto:designsbyabhishek@gmail.com",
      icon: <MailIcon color="#211C1D" />,
    },
    {
      name: "+91 93566 66644",
      href: "tel:+919356666644",
      icon: <CallIcon color="#211C1D" />,
    },
    {
      name: "Location",
      href: "https://maps.app.goo.gl/s9TNijuWmBkh95Le6",
      icon: <LocationIcon color="#211C1D" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/designsbyabhishek",
      icon: <InstagramIcon color="#211C1D" />,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@designsByAbhishek",
      icon: <Youtube color="#211C1D" />,
    },
  ];

  const mediaItems = [
    {
      src: "/media/media-7-designsbyabhishek.jpg",
      alt: "Media 7",
    },
    {
      src: "/media/media-11-designsbyabhishek.jpg",
      alt: "Media 11",
    },
    {
      src: "/media/media-9-designsbyabhishek.jpg",
      alt: "Media 9",
    },
    {
      src: "/media/media-10-designsbyabhishek.jpg",
      alt: "Media 10",
    },
    {
      src: "/media/media-6-designsbyabhishek.jpg",
      alt: "Media 6",
    },
    {
      src: "/media/media-8-designsbyabhishek.jpg",
      alt: "Media-8",
    },
    {
      src: "/media/media-4-designsbyabhishek.jpg",
      alt: "Media 4",
    },
    {
      src: "/media/media-5-designsbyabhishek.jpg",
      alt: "Media 5",
    },
    {
      src: "/media/media-1-designsbyabhishek.jpg",
      alt: "Media 1",
    },
    {
      src: "/media/media-3-designsbyabhishek.jpg",
      alt: "Media 3",
    },
    {
      src: "/media/media-12-designsbyabhishek.jpg",
      alt: "Media 12",
    },
    {
      src: "/media/media-13-designsbyabhishek.jpg",
      alt: "Media 13",
    },
    {
      src: "/media/media-14-designsbyabhishek.jpg",
      alt: "Media 14",
    },
  ];

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevItem = React.useCallback(() => {
    setActiveIndex((i) => (i - 1 + mediaItems.length) % mediaItems.length);
  }, []);

  const nextItem = React.useCallback(() => {
    setActiveIndex((i) => (i + 1) % mediaItems.length);
  }, []);

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
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
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

              <div className="bg-burnt/10 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <QR />
                  </div>
                  <span className="text-sm sm:text-base text-center sm:text-left font-cormorant text-nyghtserif2">
                    Scan the QR code to connect with our expert instantly on
                    Whatsapp
                  </span>
                </div>
              </div>

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
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:space-y-12 order-1 lg:order-2">
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
                  Designs
                </a>
                <a
                  href="#services"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Testimonials
                </a>
                <a
                  href="#scenography"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Scenography
                </a>
                <a
                  href="#clients"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Clients
                </a>
                <a
                  href="/privacy-policy"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-and-conditions"
                  className="block text-nyghtserif2 hover:text-black font-cormorant text-base lg:text-lg transition-colors py-1"
                >
                  Terms and Conditions
                </a>
              </nav>
            </div>
            {/* 
            <div className="bg-burnt/10 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <QR />
                </div>
                <span className="text-sm sm:text-base text-center sm:text-left font-cormorant text-nyghtserif2">
                  Scan the QR code to connect with our expert instantly on Whatsapp
                </span>
              </div>
            </div> */}

            <div className="flex-1">
              <h3 className="text-2xl font-nyghtserif text-nyghtserif2 mb-6 lg:mb-8">
                Media Coverage
              </h3>

              <div className="w-full h-full">
                <Carousel className="w-full h-full">
                  <CarouselContent className="h-full">
                    {mediaItems.map((item, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div className="p-1 h-full">
                          <Card className="h-full">
                            <CardContent className="p-0 h-full">
                              <button
                                type="button"
                                onClick={() => openLightbox(index)}
                                className="block w-full h-full"
                                aria-label={`Open media coverage: ${item.alt}`}
                              >
                                <div className="w-full h-full overflow-hidden rounded-xl bg-background flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
                                  <img
                                    src={item.src || "/placeholder.svg"}
                                    alt={item.alt}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                              </button>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 lg:left-4 w-10 h-10 lg:w-12 lg:h-12" />
                  <CarouselNext className="right-2 lg:right-4 w-10 h-10 lg:w-12 lg:h-12" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-20 pt-8 lg:pt-12 border-t border-black/10 mb-6 lg:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-nyghtserif text-nyghtserif2 mb-2">
                1st Floor, Modi House,
              </h3>
              <p className="text-nyghtserif2 font-nyghtserif text-lg sm:text-xl">
                Off Link Rd, Near Fun Republic, Mumbai, 400053
                <br />
                Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <span className="flex items-center justify-center lg:justify-start gap-1 font-cormorant text-nyghtserif2 mb-4">
            <CopyrightIcon color="#211C1D" /> {new Date().getFullYear()} Designs
            By Abhishek
          </span>
        </div>
      </div>

      <ImageModal
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={mediaItems}
        activeIndex={activeIndex}
        onPrevious={prevItem}
        onNext={nextItem}
        showNavigation={true}
        title="Media Coverage"
      />
    </section>
  );
};

export default Contact;
