/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Upright", "sans-serif"],
        dmsans: ["DM sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        primaryColor: "#2F4858",
        primaryColorLight: "#006A79",
        secondaryColor: "#FFCC00",
        paragraphColor: "#c0c0c0",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        darkColorLight: "#171717",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
  },
  plugins: [],
};
