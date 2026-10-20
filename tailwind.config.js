/** Only the 9 colors chosen by Fatima. Every color on the site comes from this list. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2D1B16",    // titles and main text
        cocoa: "#351B12",  // darkest brown (rare)
        brown: "#4A2A20",  // buttons and details
        taupe: "#8B7465",  // decorations
        clay: "#A99583",   // secondary text
        mist: "#C5B7A9",   // shadows and image backgrounds
        cream: "#F4EDE5",  // main site background
        milk: "#FAF6F0",   // inner sections and cards
        blush: "#E8D9CC",  // soft decoration
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Vazirmatn", "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
