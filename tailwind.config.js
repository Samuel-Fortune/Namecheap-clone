/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jpg,png,gif,svg}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Barlow: ['Barlow', 'sans-serif'],
        IBMPlexSans: ['IBM Plex Sans', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        NotoSans: ['Noto Sans', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
        Outfit: ['Outfit', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        SlaboBig: ['Slabo 27px', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
        Lato: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}
