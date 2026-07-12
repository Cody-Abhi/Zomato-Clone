/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Brand color palette used across the whole app
      colors: {
        primary: "#E23744", // Zomato-style red
        secondary: "#FFFFFF", // white
        background: "#F8F8F8", // light page background
        text: "#1C1C1C", // near-black text
        accent: "#FFD166", // warm yellow accent
      },
      // Poppins is loaded from Google Fonts in index.html
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      // Soft, rounded shadows for a premium feel
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.06)",
        card: "0 8px 30px rgba(0, 0, 0, 0.08)",
        hover: "0 12px 40px rgba(0, 0, 0, 0.12)",
      },
      // Rounded corners used on cards and buttons
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
