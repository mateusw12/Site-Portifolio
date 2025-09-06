/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        mono: ['IBM Plex Mono', 'mono'],
      },
      fontSize: {
        subtitle: [
          '1.5rem',
          {
            fontWeight: '500',
          },
        ],
      },
      colors: {
        light: {
          background: '#F5F5FA', // mais claro e neutro
          surface: '#E4E4F1',    // leve contraste com o fundo
          accent: '#D0D0F3',
          primary: '#1B0E3B',   // escuro para bom contraste
          secondary: '#5A5FA5',
          highlight: '#2F2F36',
          text: '#2C2C35',      // texto mais escuro para melhor legibilidade
        },
        dark: {
          background: '#121212', // escuro neutro
          surface: '#1E1E24',    // leve contraste
          accent: '#3D3D49',
          primary: '#918CFF',
          secondary: '#C0C3FD',
          highlight: '#E3E3FF',
          text: '#D0D0E0',       // contraste suficiente
        },
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(-50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 2s ease-out',
        'fade-in-up': 'fade-in-up 2s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
