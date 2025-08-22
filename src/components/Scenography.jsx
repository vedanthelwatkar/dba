"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const scenographyItems = [
  {
    videoId: "e0SL3m-PIRc",
    embedUrl:
      "https://www.youtube.com/embed/e0SL3m-PIRc?mute=1&loop=1&playlist=e0SL3m-PIRc&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1",
  },
  {
    videoId: "fq3OJHXBx7s",
    embedUrl:
      "https://www.youtube.com/embed/fq3OJHXBx7s?mute=1&loop=1&playlist=fq3OJHXBx7s&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1",
  },
  {
    videoId: "liMYhUzdXbs",
    embedUrl:
      "https://www.youtube.com/embed/liMYhUzdXbs?mute=1&loop=1&playlist=liMYhUzdXbs&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1",
  },
];

const Scenography = () => {
  const sectionRef = useRef(null);
  const iframeRefs = useRef([]);
  const [currentPlaying, setCurrentPlaying] = useState(-1);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const items = gsap.utils.toArray(".scenography-item");

    const scrollTrigger = gsap.to(items, {
      xPercent: -100 * (items.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scenography-container",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        end: () => "+=" + (items.length - 1) * window.innerWidth,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeIndex = Math.floor(progress * items.length);
          const clampedIndex = Math.min(activeIndex, items.length - 1);

          if (clampedIndex !== currentPlaying) {
            iframeRefs.current.forEach((iframe) => {
              if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(
                  '{"event":"command","func":"pauseVideo","args":""}',
                  "*"
                );
              }
            });
            setCurrentPlaying(clampedIndex);
            setIsPlaying(false);
          }
        },
      },
    });

    return () => {
      scrollTrigger.scrollTrigger?.kill();
    };
  }, []);

  const togglePlay = () => {
    const currentIframe = iframeRefs.current[currentPlaying];
    if (currentIframe && currentIframe.contentWindow) {
      if (isPlaying) {
        currentIframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      } else {
        currentIframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleAudio = () => {
    const currentIframe = iframeRefs.current[currentPlaying];
    if (currentIframe && currentIframe.contentWindow) {
      if (isMuted) {
        currentIframe.contentWindow.postMessage(
          '{"event":"command","func":"unMute","args":""}',
          "*"
        );
      } else {
        currentIframe.contentWindow.postMessage(
          '{"event":"command","func":"mute","args":""}',
          "*"
        );
      }
      setIsMuted(!isMuted);
    }
  };

  const seekVideo = (seconds) => {
    const currentIframe = iframeRefs.current[currentPlaying];
    if (currentIframe && currentIframe.contentWindow) {
      currentIframe.contentWindow.postMessage(
        `{"event":"command","func":"seekTo","args":[${seconds}, true]}`,
        "*"
      );
    }
  };

  return (
    <section
      id="scenography"
      ref={sectionRef}
      className="bg-black text-nyghtserif2 overflow-hidden"
    >
      <div className="scenography-container h-screen flex items-center">
        <div className="flex w-max">
          {scenographyItems.map((item, index) => (
            <div
              key={index}
              className="scenography-item w-screen h-screen flex-shrink-0 relative"
            >
              <iframe
                ref={(el) => (iframeRefs.current[index] = el)}
                src={item.embedUrl}
                className="absolute inset-0 w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Scenography Video ${index + 1}`}
              />

              {index === currentPlaying && currentPlaying >= 0 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full font-nyghtserif">
                  <button
                    onClick={() => seekVideo(0)}
                    className="text-nyghtserif2 hover:text-white transition-colors duration-300"
                    aria-label="Restart video"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={togglePlay}
                    className="text-nyghtserif2 hover:text-white transition-colors duration-300"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 9v6m4-6v6"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  <button
                    onClick={toggleAudio}
                    className="text-nyghtserif2 hover:text-white transition-colors duration-300"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                      </svg>
                    )}
                  </button>

                  <span className="text-nyghtserif2 text-sm font-nyghtserif">
                    {currentPlaying + 1} / {scenographyItems.length}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scenography;
