module.exports = {
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],

        // Dodaj inne niestandardowe czcionki, jeśli są potrzebne
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
