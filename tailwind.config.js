/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'primary-heading': 'rgb(33, 33, 33)',
        'primary-bg': 'rgb(171, 239, 95)',
        'border-color': 'rgb(233, 233, 233)',
        'button-bg': '#ABEF5F',
        
      },
      backgroundImage: {
        'full-body': 'linear-gradient(0.00deg, rgb(255, 255, 255),rgba(255, 255, 255, 0) 100%)',
      }
    },
  },
  plugins: [],
}

