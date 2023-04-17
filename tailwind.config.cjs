// const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html', 
    './src/**/*.{vue,js}',
  ],
  theme: {
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
        'p': {marginBottom: theme('fontSize.lg')},
        'a': {textDecoration: 'underline'},
        'lable': {display:'block'},
    })
    }),
    require('@tailwindcss/forms'),
  ],
}