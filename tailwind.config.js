/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amor': {
          purple: '#A66CF5',
          pink: '#F571E2', 
          lavender: '#D36CF5',
          indigo: '#796CF5',
          rose: '#F56C8E',
          light: '#E7BDF5',
        }
      },
      backgroundImage: {
        'gradient-romantic': 'linear-gradient(135deg, #A66CF5 0%, #F571E2 25%, #D36CF5 50%, #796CF5 75%, #F56C8E 100%)',
        'gradient-soft': 'linear-gradient(135deg, #E7BDF5 0%, #D36CF5 50%, #A66CF5 100%)',
      }
    },
  },
  plugins: [],
}