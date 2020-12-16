const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    preserveHtmlElements: true,
    enabled: true,
    content: ["./src/**/*.{ts,tsx}"],
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      indigo: colors.indigo,
      oragne: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
      green: colors.green,
      white: colors.white,
      black: colors.black,
    },

    extend: {
      scale: {
        102: "1.02",
      },

      truncate: {
        lines: {
          1: "1",
          2: "2",
          3: "3",
          5: "5",
          8: "8",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-truncate-multiline")(),
  ],
  corePlugins: {
    alignContent: true,
    gradientColorStops: true,
  },
  variants: {
    gradientColorStops: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
    boxShadow: ["responsive", "hover", "focus"],
    outline: ["responsive", "focus"],
    backgroundColor: ["responsive", "hover", "focus"],
    borderColor: [
      "responsive",
      "hover",
      "focus",
      "focus-within",
      "active",
      "group-hover",
    ],
    borderWidth: ["responsive", "last", "hover", "focus", "focus-within"],
    margin: ["responsive", "last"],
    alignContent: ["responsive", "hover", "focus"],
  },
};
