/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        utama: '#248277',
        item: '#18181b',
        rounded: '#469d89',
        kedua: '#6b7280',
      },
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};
