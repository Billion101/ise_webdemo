/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ee',
          100: '#cce1dd',
          200: '#99c4bb',
          300: '#66a699',
          400: '#338977',
          500: '#006b55', // Main primary color
          600: '#005644',
          700: '#004033',
          800: '#002b22',
          900: '#001511',
        },
        secondary: {
          50: '#e6eef4',
          100: '#ccdde9',
          200: '#99bbd3',
          300: '#6699bd',
          400: '#3377a7',
          500: '#005591', // Main secondary color
          600: '#004474',
          700: '#003357',
          800: '#00223a',
          900: '#00111d',
        },
        accent: {
          50: '#f9f5e8',
          100: '#f3ebd1',
          200: '#e7d7a3',
          300: '#dbc375',
          400: '#cfaf47',
          500: '#c39b19', // Main accent color
          600: '#9c7c14',
          700: '#755d0f',
          800: '#4e3e0a',
          900: '#271f05',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};