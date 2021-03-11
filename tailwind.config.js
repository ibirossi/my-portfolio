module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   body: ['Varela', 'sans-serif'],
    //   display: ['Varela', 'sans-serif']
    // },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
