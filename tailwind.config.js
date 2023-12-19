/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Playfair Display']
      },
      boxShadow: {
        '3xl': '0 35px 60px 1px rgba(0, 0, 0, 0.3)'
      },
      colors: {
        primary: '#1D3159',
        primaryLight: '#596E99',
        secondary: '#846F41',
        secondaryLight: '#DBB86B'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
