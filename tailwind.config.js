/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111",
        primary: "#333",
        secondary: "#555",
        tertiary: "#777",
        "gray-dark": "#aaa",
        gray: "#ccc",
        "gray-light": "#ddd",
        background: "#efefef",
        orange: "#ff5900",
        "orange-light": "#ff7900",
        "orange-dark": "#ff3900",
        yellow: "#ffdb00",
        "yellow-light": "#ffeb00",
        "yellow-dark": "#ffbb00",
        green: "#166534",
        "green-light": "#15803d",
        "green-dark": "#14532d",
        pink: "#f9a8d4",
        "pink-light": "#fbcfe8",
        "pink-dark": "#f472b6",
      },
      animation: {
        pop: "pop 300ms ease-in-out",
      },
      keyframes: {
        pop: {
          "0%": { opacity: 0, transform: "translateY(32px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        banner: `url('../public/assets/images/img-fireworks.jpg')`,
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
