/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'img-j': "url('/public/dist/image/img-j.jpg')",
        'img-k': "url('/public/dist/image/img-k.jpg')",
      },
    },
    fontFamily: {
      'quicksand': ['quicksand', 'system-ui']
    },
  },
  plugins: [],
}
