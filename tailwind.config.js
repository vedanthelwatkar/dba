/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx}",
    "./public/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        dream: ["Dream Avenue", "sans-serif"],
        brittany: ["Brittany", "sans-serif"],
        notoSerif: ["Noto Serif Display", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        nyghtserif: ["NyghtSerif", "sans-serif"],
      },
      letterSpacing: {
        ultra: "-0.1em",
      },
      colors: {
        foreground: "hsl(26 26 26)",
        background: "#cec3b8",
        light: "#fff",
        burnt: "#211C1D",
        gold: "#F1E2AD",
        nyghtserif2: "#51483f",
        nyghtserif: "#675b50",
        primary: {
          DEFAULT: "#532200",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(30 30 30)",
          foreground: "hsl(26 26 26)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 96.1%)",
          foreground: "hsl(0 0% 45.9%)",
        },
        accent: {
          DEFAULT: "hsl(0 0% 96.1%)",
          foreground: "hsl(26 26 26)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(0 0% 98%)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
