/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        mono: ["IBM Plex Mono", "mono"],
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
          background: "#F5F5F5",
          inputBackground: "#ECECEC", // cinza claro
          surface: "#EAEAEA",
          accent: "#B0B0B0", // cinza médio
          primary: "#1A1A1A",
          secondary: "#555555",
          highlight: "#7A7A7A", // cinza escuro
          text: "#222222",
        },
        dark: {
          background: "#121212",
          inputBackground: "#1F1F1F",
          surface: "#1E1E1E",
          accent: "#00C853",
          primary: "#FFFFFF",
          secondary: "#AAAAAA",
          highlight: "#1E88E5",
          text: "#D0D0D0",
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
      },
      animation: {
        "slide-up": "slide-up 2s ease-out",
        "fade-in-up": "fade-in-up 2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
