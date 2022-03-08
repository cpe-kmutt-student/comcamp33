const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 2s infinite',
        float: 'floating 3s infinite ease-in-out'
      },
      keyframes:{
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.05) rotate(3deg)',
          },
          '50%': {
            transform: 'scale(0.9) rotate(-3deg)',
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
    },
  },
  plugins: [],
}
