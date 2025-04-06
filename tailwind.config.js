/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Noto Naskh Arabic"', 'serif'],
      },
      colors: {
        olive: {
          50: '#f6f6f2',
          100: '#e2e2d2',
          200: '#c8c8a8',
          300: '#acac7b',
          400: '#94945a',
          500: '#7b7b3f',
          600: '#646430',
          700: '#4f4f25',
          800: '#3c3c1c',
          900: '#2c2c13',
        },
      },
  
    },
  },
  plugins: [],
}
