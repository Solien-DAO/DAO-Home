/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Update this to match the file patterns of your project
  theme: {
    extend: {
      // Custom colors
      colors: {
        'custom-blue': '#007ace',
        'custom-gray': '#f5f5f5',
        'yellow-1': '#F4E397',
        'yellow-2': '#fcf1c1',
        'b-blue': '#050718',
        // Add any additional custom colors here
      },
      // Custom screens (breakpoints)
      screens: {
        '2xl': '1440px',
      },
      // Customizing other theme values
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'font-inter': ['Inter', 'sans-serif'],
        body: ['grInter', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
      },
      // Adding a custom background image
      backgroundImage: {
        'hero': "url('/icons/hero-background.png')", // Replace with your image path
      },
      // Existing custom animations
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s linear infinite',
        // Glowing button animation
        'glow-slow': 'glow 2s infinite',
      },
      // Defining keyframes for the glowing animation
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px #f5dc69', opacity: '1' },
          '50%': { boxShadow: '0 0 5px #fcf1c1', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // or 'media' based on your preference
};
