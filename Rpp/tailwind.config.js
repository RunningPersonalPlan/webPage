/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
      black: "var(--black)",
      white: "var(--white)",
      yellow: "var(--yellow)",
    },
    fontFamily: {
      "body-text": "var(--body-text-font-family)",
      "description-text": "var(--description-text-font-family)",
      "heading-1": "var(--heading-1-font-family)",
      "heading-2": "var(--heading-2-font-family)",
      "heading-3": "var(--heading-3-font-family)",
      "heading-4": "var(--heading-4-font-family)",
    },},
  },
  plugins: [],
}

