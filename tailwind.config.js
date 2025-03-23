/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // navy blue
        secondary: '#FFB380', // light orange
        accent: '#FF9F57', // slightly darker orange for contrast
        background: '#F8FAFC' // light background
      },
      fontFamily: {
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'lato': ['Lato', 'sans-serif']
      },
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      }
    }
  },
  plugins: []
};