/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A57E8',
          50: '#EEF1FD',
          100: '#DCE3FB',
          500: '#3A57E8',
          600: '#2F46C7',
          700: '#26399F'
        },
        accent: {
          DEFAULT: '#08B1BA'
        },
        page: '#F5F6FA',
        surface: '#FFFFFF',
        border: '#E9ECEF',
        textPrimary: '#232D42',
        textSecondary: '#8A92A6'
      },
      borderRadius: {
        DEFAULT: '10px',
        card: '10px'
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.05)'
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: []
}
