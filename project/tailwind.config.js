/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#2D1B69',
        },
        indigo: {
          900: '#1E1B4B',
        },
      },
    },
  },
  plugins: [],
};