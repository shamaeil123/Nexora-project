/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink: '#080910', violet: '#8b5cf6', cyan: '#38bdf8' }, fontFamily: { display: ['Space Grotesk', 'sans-serif'], sans: ['DM Sans', 'sans-serif'] } } },
  plugins: []
}
