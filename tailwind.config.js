/** @type {import('tailwindcss').Config} */
module.exports = {
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
    clipPath: {
      mypoligon: 'polygon(0% 0%, 75% 0%, 80% 50%, 75% 100%, 0% 100%)',
    },
    extend: {
      backgroundImage: {
        'banner-section': "url('/background-img.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
      colors: {
        primary: '#3F3F95',
        secondary: '#EF3238',
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
        'gray-50': '#fafafa',
        'gray-100': '#f5f5f5',
        'gray-200': '#e5e5e5',
        'gray-300': '#d4d4d4',
        'gray-400': '#a3a3a3',
        'gray-500': '#737373',
        'gray-600': '#525252',
        'gray-700': '#404040',
        'gray-800': '#262626',
        'gray-900': '#171717',
      },
      gridTemplateAreas: {
        news: ['itemA itemB', 'itemA itemC'],
      },
      gridTemplateColumns: {
        news: '50% 50%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwind-clip-path'),
  ],
}
