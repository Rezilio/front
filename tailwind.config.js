/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Palette Rezilio — bleu nuit + cyan
        primary: {
          DEFAULT: '#00CFFF',
          50:  '#e0faff',
          100: '#b3f2ff',
          200: '#80eaff',
          300: '#4de2ff',
          400: '#1adaff',
          500: '#00CFFF',
          600: '#00a3cc',
          700: '#007a99',
          800: '#005266',
          900: '#002933',
        },
        rezilio: {
          dark:    '#0D1B2A',
          surface: '#0F2340',
          violet:  '#7B5EA7',
          cyan:    '#00CFFF',
        },
        // Statuts NIS2
        conforme:     '#22c55e',
        partiel:      '#f59e0b',
        nonConforme:  '#ef4444',
        naStatus:     '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'rezilio': '0 4px 24px 0 rgba(0, 207, 255, 0.08)',
      },
    },
  },
  plugins: [],
}
