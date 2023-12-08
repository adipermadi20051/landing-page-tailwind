/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0284c7",
        primaryMuda: "#0ea5e9",

        secondary: "#ea580c",
        secondaryMuda: "#f97316",

        tiga: "#16a34a",
        tigaMuda: "#22c55e",

        light: "#e2e8f0",
        dark: "#0f172a",

        darkBg: "#0f172a",
        darkBgMuda: "#1e293b"
      }
    },
  },
  plugins: [],
}

