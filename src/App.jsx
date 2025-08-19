import About from "./components/About";
import Designs from "./components/Designs";
import ReactLenis from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <div className="w-full min-h-screen">
        {/* Hero Section - Keep the hero image but add texture overlay */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="/profile-images/abhishek-kaushik-wedding-designer-designsbyabhishek.jpeg"
              alt="Hero Background"
              className="w-full h-full object-cover object-center"
              style={{
                display: "block",
                opacity: 1,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              onLoad={(e) => {
                console.log("Image loaded successfully");
              }}
              onError={(e) => {
                console.log("Image failed to load:", e.target.src);
                e.target.style.display = "none";
                e.target.parentElement.style.backgroundColor = "#8B4513";
              }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Add subtle texture overlay on hero too */}
            <div
              className="absolute inset-0 z-5"
              style={{
                backgroundImage: "url('./images/crumple.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "500px 500px",
                opacity: 0.1,
                mixBlendMode: "overlay",
              }}
            />
          </div>

          {/* "designs by ABHISHEK" text overlay - Simplified for mobile */}
          <div className="absolute inset-0 flex items-center justify-center z-30 px-4">
            <div className="text-center">
              {/* Mobile-first approach with system font fallbacks */}
              <div
                className="text-white font-brittany flex items-start justify-start -ml-4"
                style={{
                  fontSize: "clamp(0.5rem, 4vw, 1.5rem)",
                }}
              >
                Designs by
              </div>
              <div
                className="text-white font-bebas leading-none w-full flex justify-start -ml-4 sm:-ml-7 sm:-mb-7 lg:-ml-10 -mb-3 lg:-mb-9"
                style={{ fontSize: "clamp(3rem, 10vw, 4rem)" }}
              >
                ABHISHEK
              </div>

              <div className="leading-none">
                <span
                  className="inline-block align-baseline text-white font-light font-dream tracking-tighter"
                  style={{ fontSize: "clamp(4.5rem, 14vw, 10rem)" }}
                >
                  PORT
                </span>
                <span
                  className="inline-block align-baseline text-white font-light italic font-notoSerif relative top-[0.06em] tracking-tighter"
                  style={{ fontSize: "clamp(4rem, 14.5vw, 10.5rem)" }}
                >
                  folio
                </span>
              </div>

              {/* Subtitle */}
              <div
                className="text-white/90 font-light"
                style={{
                  fontSize: "clamp(0.875rem, 3vw, 1.5rem)",
                  fontFamily: "Cormorant Garamond, serif, Georgia",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                }}
              >
                Luxury Wedding Designer
              </div>
            </div>
          </div>

          {/* Scroll indicator - Simplified */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 z-30">
            <div className="flex flex-col items-center">
              <span
                className="mb-2 font-light"
                style={{
                  fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                  fontFamily: "Cormorant Garamond, serif, Georgia",
                }}
              >
                Scroll to explore
              </span>
              <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-0.5 h-2 md:w-1 md:h-3 bg-white/70 rounded-full mt-1 md:mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections - These will inherit the texture from parent */}
        <div className="relative z-20">
          <Designs />
          <About />
          <div className="h-screen bg-red/80">hdhdh</div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
