module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'Helvetica', 'sans-serif'],
      'mono': ['Ubuntu Mono', 'ui-monospace', 'SFMono-Regular'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
