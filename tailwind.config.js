module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Varela", "sans-serif"],
      display: ["Varela", "sans-serif"],
    },

    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {
      colors: {
        rikbrown: "#44281d",
        rikpink: "#e89ac7",
        rikgreen: "#97ce4c",
        rikyellow: "#f0e14a",
        rikbg: "rgba(151,206,76,0.4)",
        orang: "#ffedd5",
      },
      animation: {
        'slow-ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) 1'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/logo.svg')",
        
       })
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      outline: ['hover', 'active'],
      borderWidth: ['hover', 'active'],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
