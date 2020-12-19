module.exports = {
  purge: ["./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    animation: {
      jump: "jump 1.2s infinite",
    },
    keyframes: {
      jump: {
        "0%": { transform: "translate(0, 0) scale(1.25, 0.75)" },
        "50%": { transform: "translate(0, -50%) scale(1, 1)" },
        "55%": { transform: "translate(0, -50%) rotate(15deg)" },
        "60%": { transform: "translate(0, -50%) rotate(-15deg)" },
        "65%": { transform: "translate(0, -50%) rotate(15deg)" },
        "70%": { transform: "translate(0, -50%) rotate(-15deg)" },
        "100%": { transform: "translate(0, 0) scale(1.25, 0.75)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
