/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-yellow" : '#FCB216',
        "my-purple": "#4D44B5", 
        'my-red' : "#E62C39", 
        "my-green" : "#35A232",
      },
    },
  },
  plugins: [],
}
