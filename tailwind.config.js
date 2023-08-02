/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // boolean or 'media' or 'class'
  content: [
    "./public/index.html", 
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'icon-color': '#3F3F46',
      },
      backgroundImage: {
        'bali': 'url(../assets/img/bali.jpg)',
        'chicago': 'url(../assets/img/chicago.jpg)',
        'europe': 'url(./public/assets/img/europe.jpg)',
        'iceland': 'url(./public/assets/img/iceland.jpg)',
        'la': 'url(../assets/img/LA.jpg)',
        'miami': 'url(../assets/img/miami.jpg)',
        'newYork': 'url(../assets/img/new_york.jpg)',
        'norway': 'url(../assets/img/norway.jpg)',
        'sanFrancisco': 'url(../assets/img/sanFrancisco.jpg)',
        'sanFranciscoDesktop': 'url(../assets/img/sanFranciscoDesktop.jpg)',
        'seattle': 'url(../assets/img/seattle.jpg)',
        'switzerland': 'url(../assets/img/switzerland.jpg)',
        'sydney': 'url(./public/assets/img/sydney.jpg)',
        'yosemite': 'url(../assets/img/yosemite.jpg)',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
        'soft': 'rgba(229, 229, 229, 0.35)',
        'dark-mode': 'rgba(31, 41, 55, 1)'
      }),
      gridTemplateColumns: {
        'trending-stays': '1fr 2fr'
      },
      gridTemplateRows: {
        'trending-stays': 'repeat(4, minmax(0, 1fr))'
      },
      boxShadow: {
        'card': '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        'tapBar': '0 1px 6px 0 rgba(0, 0, 0, 0.25)',
      },
    },

    textColor: theme => ({
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'terciary': '#61AEC9',
      'light-color': 'rgba(204, 204, 204, 1)',
      'icon-color': '#3F3F46',
    }),
    fontFamily: {
      'montserrat': [
        'Montserrat',
        'sans-serif'
      ]
    },
  },
  plugins: [],
}

