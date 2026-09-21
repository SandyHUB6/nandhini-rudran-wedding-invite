/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#1a0205',
          900: '#2A050B',
          850: '#35070E',
          800: '#420A12',
          700: '#56101B',
          600: '#711825',
          500: '#8E2232',
        },
        ivory: {
          50: '#FDFCF9',
          100: '#FAF7F0',
          200: '#F5EFEB',
          300: '#ECE3D6',
          400: '#DDD0C0',
        },
        gold: {
          200: '#FCEFC7',
          300: '#F5DE9C',
          400: '#E5C578',
          500: '#C5A059',
          600: '#A37E38',
          700: '#805F24',
          800: '#5E4416',
        },
        sandalwood: {
          100: '#F5EFE6',
          200: '#EADBC8',
          300: '#D8C4B6',
          400: '#BCA392',
        },
        temple: {
          900: '#0F2117',
          800: '#183424',
          700: '#234633',
          600: '#345E47',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        'cinzel-dec': ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        tamil: ['"Noto Serif Tamil"', '"Mukta Malar"', 'serif'],
        arima: ['"Arima"', '"Noto Serif Tamil"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F9E7B9 0%, #D4AF37 35%, #AA7C11 70%, #E6C66E 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(245, 222, 156, 0.4), transparent)',
        'maroon-silk': 'radial-gradient(circle at 50% 30%, #420A12 0%, #2A050B 55%, #1A0205 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.28)',
        'gold-subtle': '0 4px 20px rgba(197, 160, 89, 0.15)',
        'card-luxury': '0 25px 50px -12px rgba(20, 2, 5, 0.45), 0 0 0 1px rgba(197, 160, 89, 0.2)',
        'envelope': '0 30px 60px -15px rgba(10, 1, 3, 0.7), 0 0 40px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'flame-flicker': 'flameFlicker 3s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', opacity: '0.95', filter: 'drop-shadow(0 0 8px rgba(255, 180, 50, 0.8))' },
          '25%': { transform: 'scale(1.05) rotate(1deg)', opacity: '1', filter: 'drop-shadow(0 0 12px rgba(255, 200, 60, 0.9))' },
          '50%': { transform: 'scale(0.96) rotate(-0.5deg)', opacity: '0.9', filter: 'drop-shadow(0 0 7px rgba(255, 160, 40, 0.75))' },
          '75%': { transform: 'scale(1.03) rotate(0.5deg)', opacity: '0.98', filter: 'drop-shadow(0 0 10px rgba(255, 190, 55, 0.85))' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
