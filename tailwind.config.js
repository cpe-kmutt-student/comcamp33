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
        'bg-primary': '#11033E'
      },
    },
  },
  plugins: [],
}
