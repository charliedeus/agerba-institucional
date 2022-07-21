/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    colors: {
      primary: '#3F3F95',
      white: 'white',
      'green-50': '#f0fdf4',
      'green-100': '#dcfce7',
      'green-200': '#bbf7d0',
      'green-300': '#86efac',
      'green-400': '#4ade80',
      'green-500': '#22c55e',
      'green-600': '#16a34a',
      'green-700': '#15803d',
      'green-800': '#166534',
      'green-900': '#14532d',
    },
    extend: {},
  },
  plugins: [],
}
