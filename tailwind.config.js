/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors:{
  secondary:"#FF5934"
},
fontFamily:{
  raleway :[  "Raleway", "sans-serif"]
}


    },
  },
  plugins: [],
}

