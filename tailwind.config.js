/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      height :{
     "99":"40rem"
      },
      width:{
        "99":"30rem"
      }
    },
  },
  plugins: [],
}
