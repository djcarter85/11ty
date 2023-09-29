/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,md}"],
  theme: {
    colors: {
      // https://uicolors.app/edit?sv1=gray:50-f7f8f8/100-eceeee/200-dadddd/300-b9c0bf/400-929e9d/500-758281/600-5f6a6a/700-4d5757/800-424a4a/900-3a4040/950-272a2a;yellow:50-fefcec/100-fcf4c9/200-f9e88e/300-f6d653/400-f3c126/500-eda413/600-d17d0e/700-ae5a0f/800-8d4513/900-743913/950-431d05;blue:50-f2f9fd/100-e4f0fa/200-c4e2f3/300-90cae9/400-55afdb/500-2f95c8/600-1e72a2/700-1b5f89/800-1a5172/900-1b445f/950-122c3f
      'gray': {
        '50': '#f7f8f8',
        '100': '#eceeee',
        '200': '#dadddd',
        '300': '#b9c0bf',
        '400': '#929e9d',
        '500': '#758281',
        '600': '#5f6a6a',
        '700': '#4d5757',
        '800': '#424a4a',
        '900': '#3a4040',
        '950': '#272a2a',
      },
      'blue': {
        '50': '#f2f9fd',
        '100': '#e4f0fa',
        '200': '#c4e2f3',
        '300': '#90cae9',
        '400': '#55afdb',
        '500': '#2f95c8',
        '600': '#1e72a2',
        '700': '#1b5f89',
        '800': '#1a5172',
        '900': '#1b445f',
        '950': '#122c3f',
      },
      'yellow': {
        '50': '#fefcec',
        '100': '#fcf4c9',
        '200': '#f9e88e',
        '300': '#f6d653',
        '400': '#f3c126',
        '500': '#eda413',
        '600': '#d17d0e',
        '700': '#ae5a0f',
        '800': '#8d4513',
        '900': '#743913',
        '950': '#431d05',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

