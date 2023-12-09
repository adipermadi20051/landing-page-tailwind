/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0369a1",
        primaryMuda: "#0ea5e9",

        secondary: "#c2410c",
        secondaryMuda: "#f97316",

        tiga: "#0f766e",
        tigaMuda: "#14b8a6",

        empat: "#a21caf",
        empatMuda: "#d946ef",

        light: "#e2e8f0",
        dark: "#0f172a",

        darkBg: "#0f172a",
        darkBgMuda: "#1e293b"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

