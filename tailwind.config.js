/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core surfaces */
        background: "#0F0F14",     // app background
        surface: "#16161D",        // cards, panels
        borderDark: "#23232D",

        /* Text */
        textPrimary: "#FFFFFF",
        textSecondary: "#A1A1AA",

        /* Brand / Accent */
        primary: "#7C5CFF",        // matte purple
        primaryHover: "#6A4CFF",

        /* Utility */
        success: "#22C55E",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
};
