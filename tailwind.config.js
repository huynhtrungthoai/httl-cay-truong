/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          light: '#E0C158',
          dark: '#A07F16',
        },
        ivory: '#F8F5EE',
        brown: {
          DEFAULT: '#3B2F2F',
          light: '#5A4A4A',
          dark: '#241B1B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E0C158 0%, #C9A227 50%, #A07F16 100%)',
      },
      boxShadow: {
        elegant: '0 20px 50px -15px rgba(59, 47, 47, 0.35)',
        gold: '0 10px 40px -10px rgba(201, 162, 39, 0.45)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
