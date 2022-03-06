module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['upheavtt'],
        'thai': ['Taviraj', "serif"]
      },
      colors: {
        'bg-primary': '#11033E',
        'text-highlight': '#FF00C6'
      },
    },
  },
  plugins: [],
}
