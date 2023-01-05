/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        overview: "url('../public/img/eagerBeaver.png')",
      },
    },
  },
  plugins: [],
};
