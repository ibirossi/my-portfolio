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

      backgroundImage: theme => ({
        'hero-pattern': "url('/src/logo.svg')",
        
       }),

       keyframes: {
         'fade-in':{
            '0%': {
              opacity: '0'
            },
            '100%': {
              opacity: '100'
            }
         },
         
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-down': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-up': {
            '0%': {
                opacity: '1',
                transform: 'translateY(100%)'
            },
            '100%': {
                opacity: '0',
                transform: 'translateY(-150%)'
            },
        },

        'fade-in-left': {
          '0%': {
              opacity: '0',
              transform: 'translateX(-100px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateX(0)'
          },
      },

      'slide-in-element-left': {
        '0%': {
            opacity: '0',
            transform: 'translateX(-150%)'
        },
        '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
        },
    },
    'slide-in-element-right': {
      '0%': {
          opacity: '0',
          transform: 'translateX(150%)'
      },
      '100%': {
          opacity: '1',
          transform: 'translateX(0px)'
      },
  },

    },
    animation: {
        'fade-in-slow': 'fade-in 5s',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'slide-in-element-left': 'slide-in-element-left 1s ease-in-out',
        'slide-in-element-right': 'slide-in-element-right 1s ease-in-out',
        'slow-ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 1',
    }
       
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
