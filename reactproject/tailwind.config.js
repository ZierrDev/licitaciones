/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "silver-50": "#f8f4e3",
        "silver-300": "#a6aeaf",
      },
    },
  },
  plugins: [],
};
