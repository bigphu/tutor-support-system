/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapping background/border colors to your variables
        primary: {
          DEFAULT: 'var(--color-primary)',
          accent: 'var(--color-primary-accent)',
          hover: '#0f264f', // calculated from color.css
          active: '#07142e',
        },
        'secondary-accent': 'var(--color-secondary-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        
        // Specific text color palette
        text: {
          primary: 'var(--text-primary)',
          accent: 'var(--text-accent)',
          placeholder: 'var(--text-placeholder)',
          dark: 'var(--text-dark)',
          light: 'var(--text-light)',
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        // Matches your typography.css presets
        'small': '14px',
        'medium': '22.4px',
        'big': '57px',
        'hero': '91px',
      },
      // Matches your font weights and line heights
      fontWeight: {
        normal: '500',
        bold: '600',
        extrabold: '800',
      },
      lineHeight: {
        tightest: '1.16', // Matches text-extra-bold line-height
        relaxed: '1.5',   // Matches text-normal line-height
      }
    },
  },
  plugins: [],
}