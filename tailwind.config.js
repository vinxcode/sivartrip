/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif']
      }
    },
    colors: {
      'primary': '#0E79B2',
      'white': '#FFFFFF',
      'primary-hover': '#1A6993',
      'secondary': '#BF1363',
      'secondary-hover': '#8B0C47',
      'warning': '#F39237',
      'quarzo': '#FBFEF9',
      'darkblack': '#191923',
      'gray': '#D0D0D0'
    }
  },
  plugins: [],
}

