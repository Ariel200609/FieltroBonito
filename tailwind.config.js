/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fieltro': {
          purple: '#A66CF5',
          pink: '#F571E2', 
          lavender: '#D36CF5',
          indigo: '#796CF5',
          rose: '#F56C8E',
          light: '#E7BDF5',
        }
      },
      backgroundImage: {
        'gradient-romantic': 'linear-gradient(135deg,#6FA088,#ADC9B8,#C4D4A4,#DBD499',
        'gradient-soft': 'linear-gradient(135deg,rgb(96, 225, 105) 0%,rgb(58, 116, 46) 50%,rgb(47, 135, 62) 100%)',
      }
    },
  },
  plugins: [],
}