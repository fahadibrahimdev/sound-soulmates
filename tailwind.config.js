/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xxxs': '320px',
        'xxs': '380px',
        'xs': '450px',
        '3xl': '1700px'
      },
      colors: {
        primary: '#C700D4',
        secondary: '#2C0864',
        'accent-primary': '#FCE307',
        'accent-secondary': '#4DC2F3'
      },
      backgroundColor: {
        'hero-bg': 'theme(\'colors.secondary\')',
        'footer-bg': 'theme(\'colors.primary\')',
      },
      textColor: {
        'gray': '#ADADAD'
      },
      spacing: {
        '9.5': '38px',
        '13': '50px',
        '18': '72px',
        '26': '106px',
        '38': '150px'
      },
      borderRadius: {
        '4xl': '38px',
        '6xl': '74px',
      },
      fontSize: {
        '4.5xl': '40px',
        '5.5xl': '56px'
      },
      height: {
        '146': '446px'
      },
      width: {
        '92': '360px'
      },
      boxShadow: {
        'nav': '0 2px 4px -2px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.10);',
        'card': '10px 8px 20px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        'good-vibes': ['"Great Vibes"', 'cursive']
      },
    },
    container: {
      center: true,
      padding: {
        'xxxs': '.3rem',
        'xxs': '.6rem',
        'md': '1rem',
        '2xl': '3rem',
        '3xl': '5rem'
      }
    },
  },
  plugins: [],
}
