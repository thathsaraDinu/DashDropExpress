/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0F004A", // Change 'primary' to your preferred class name
        secondary: "#030637", // Add or modify other colors as needed
        ternary: "#720455",
        color4: "#3C0753",
        color5: "#720455",
      },
      textColor: {
        primary: "#ffffff",
        secondary: "#000000",
        color4: "#3C0753",
        color5: "#720455",
        color6: "#030637",
      },
      fontFamily: {
        sans: [
          "Arial",

          "sans-serif",
          // other fallback fonts
        ],
        sansserif: [
          "Arial",
          "sans-serif",

          // other fallback fonts
        ],
      },
    },
  },
  plugins: [],
};
