/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     colors: {
//       // Using modern `rgb`
//           darkBrown:'hls(var(--DarkBrown) / <alpha-value>)',
//           cream:'hls(var(--cream) / <alpha-value>)',
//           paleOrange:'hls(var(--paleOrange) / <alpha-value>)',
//           softRed:'hls(var(--softRed) / <alpha-value>)',
//     }
//   }
// }