/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0358A7',
          light: '#4A9BD8',
        },
        navy: {
          DEFAULT: '#013778',
          dark: '#082A55',
        },
        coral: '#FF8950',
        surface: '#F7FAFD',
        ink: '#173657',
        muted: '#4C6480',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #0358A7 0%, #4A9BD8 100%)',
      },
      boxShadow: {
        elegant: '0 20px 50px -15px rgba(1, 55, 120, 0.18)',
        blue: '0 10px 40px -10px rgba(3, 88, 167, 0.3)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
