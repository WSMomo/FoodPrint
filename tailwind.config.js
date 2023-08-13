/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#1b212c",
        "secondary-color": "#d7d1c6",
      },
    },
  },
  plugins: [],
};
