module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["Rubik", "ui-sans-serif"],
      sans: ["Fira Code", "monospace"],
    },
    extend: {
      colors: {
        primary_orange: {
          0: "#FF7A19",
        },
        darkmode_gray: {
          0: "#303030",
        },
      },
    },
  },
  plugins: [],
};
