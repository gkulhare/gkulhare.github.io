/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-grid': "url('/v882-kul-40.jpg')",
      },
    },
  },
  plugins: [],
}

