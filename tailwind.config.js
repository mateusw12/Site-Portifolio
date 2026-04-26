/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        subtitle: [
          "1.5rem",
          {
            fontWeight: "500",
          },
        ],
      },
      colors: {
        light: {
          background: "#F6F7F9",
          inputBackground: "#FFFFFF",
          surface: "#FFFFFF",
          accent: "#D7DEE7",
          primary: "#0C1B33",
          secondary: "#1D4ED8",
          highlight: "#3B82F6",
          text: "#213047",
        },
        dark: {
          background: "#0B1220",
          inputBackground: "#111B2E",
          surface: "#111B2E",
          accent: "#1E3355",
          primary: "#E2E8F0",
          secondary: "#60A5FA",
          highlight: "#93C5FD",
          text: "#C7D2E6",
        },
      },

      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "slide-up": "slide-up 2s ease-out",
        "fade-in-up": "fade-in-up 2s ease-out forwards",
        "fade-in": "fade-in 0.9s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 10s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
