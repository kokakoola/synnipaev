const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Muller", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        secondary: {
          DEFAULT: "#A9EB00",
          dark: "#91CA00",
        },
        primary: {
          light: "#8AA5C6",
          lighter: "#182B4D",
          DEFAULT: "#0D1D39",
          dark: "#08142B",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
