const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 3s infinite',
        float: 'floating 3s infinite ease-in-out',
        expand1: 'expand 1s infinite',
        expand2: 'expand 2s infinite',
        expand3: 'expand 3s infinite',
        expand4: 'expand 4s infinite',
        expand5: 'expand 5s infinite',
      },
      keyframes:{
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.05) rotate(1deg)',
          },
          '50%': {
            transform: 'scale(0.95) rotate(-1deg)',
          }
        },
        expand: {
          '0%, 100%': {
            transform: 'scale(1.005)',
          },
          '50%': {
            transform: 'scale(0.995)',
          }
        },
        floating: {
          '0%': {transform: "translate(0, 0px)"},
          '50%': {transform: "translate(0, 15px)"},
          '100%': {transform: 'translate(0, -0px)'}
        }
      },
      fontFamily: {
        'pixel': ['upheavtt'],
        'sans': ['Taviraj', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bg-primary': '#11033E',
        'text-highlight': '#DD517E'
      },
    },
    screens: {
      'se': '321px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
  plugins: [],
}
