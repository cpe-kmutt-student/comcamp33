const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
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
