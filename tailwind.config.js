/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-gray': '0px 2px 4px 0px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
