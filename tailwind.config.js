/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs exactes du thème Flutter
        'bg-primary': '#181A2A',
        'bg-secondary': '#23254A',
        'white': '#F5F5F5',
        'gradient-start': '#0A1033',
        'gradient-end': '#3A7BFF',
        'primary-blue': '#3A7BFF',
        // FC Barcelone (exactement comme Flutter)
        'barca-red': '#A50044',
        'barca-blue': '#004D98',
        // Real Madrid (exactement comme Flutter)
        'real-gold': '#FDB913',
        'real-white': '#F5F5F5'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      borderRadius: {
        'card': '24px',
        'button': '16px'
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)'
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0A1033 0%, #3A7BFF 100%)',
        'gradient-barca': 'linear-gradient(135deg, #004D98 0%, #A50044 100%)',
        'gradient-real': 'linear-gradient(135deg, #FDB913 0%, #F5F5F5 100%)',
        'gradient-text': 'linear-gradient(135deg, #F5F5F5 0%, #3A7BFF 100%)',
        'gradient-radial': 'radial-gradient(circle, rgba(58, 123, 255, 0.1) 0%, transparent 70%)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'shimmer': 'shimmer 3s infinite'
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(58, 123, 255, 0.5), 0 0 40px rgba(58, 123, 255, 0.3)',
        'glow-barca': '0 0 20px rgba(0, 77, 152, 0.5), 0 0 40px rgba(165, 0, 68, 0.3)',
        'glow-real': '0 0 20px rgba(253, 185, 19, 0.5), 0 0 40px rgba(253, 185, 19, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(58, 123, 255, 0.2)'
      }
    }
  },
  plugins: []
}

