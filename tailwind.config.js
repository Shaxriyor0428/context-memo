/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeImage: "url('/assets/bgimage.png')",
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1143px",
      },
    },
  },
  plugins: [],
};
