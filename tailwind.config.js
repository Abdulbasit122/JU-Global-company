/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        subtleSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'subtle-spin': 'subtleSpin 8s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
};
