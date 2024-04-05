/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Skyblue: "rgb(0, 102, 255)"
      },
      fontFamily: {
        "Roboto-B": ["Roboto-Bold"],
        "RobotoMedium": ["RobotoMedium"],
        "RobotoRegular": ["RobotoRegular"]
      }
    },
  },
  plugins: [],
}

