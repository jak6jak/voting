/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'dark-blue': '#4C6085',
      'light-blue': '#39A0ED',
      'light-green': '#2a9d8f',
      'dark-green': '#264653',
      'mellow-yellow': '#e9c46a',
      'orange': '#f4a261',
      'black': '#32322C',
      'ghost-white': '#F4F1F8',
      'smoky-black': '#100B04',
      'ming': '#28666E',
      'dark-byzantium': '#673956',
      'gold-metallic': '#E0BC51',
      'cultured': '#F3F4F6',


      'background-dark': '#012E40',
      'background-mid': '#024959',
      'background-light': '#3CA6A6',
      'egg-shell': '#F2E3D5',
      'highlight': '#3CA6A6'




      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
