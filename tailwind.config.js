/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html"],
  theme: {
    extend: {
      animation: {
        bounce_1: 'bounce 1s ease-in-out infinite',
        bounce_2: 'bounce 1.2s ease-in-out infinite',
        bounce_3: 'bounce 1.4s ease-in-out infinite',
        bounce_4: 'bounce 1.6s ease-in-out infinite',
        bounce_5: 'bounce 1.8s ease-in-out infinite',
        bounce_6: 'bounce 1.6s ease-in-out infinite',
      },
      colors: {
        primary: "#0369a1",
        primaryMuda: "#0ea5e9",

        secondary: "#c2410c",
        secondaryMuda: "#f97316",

        tiga: "#b91c1c",
        tigaMuda: "#ef4444",

        empat: "#15803d",
        empatMuda: "#22c55e",

        lima: "#a21caf",
        limaMuda: "#d946ef",

        light: "#e2e8f0",
        dark: "#0f172a",

        darkBg: "#0f172a",
        darkBgMuda: "#1e293b",

        darkGradient: "#172554"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        rethink: ["Rethink Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

