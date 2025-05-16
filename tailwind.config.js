/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"], // Ou 'media' si vous préférez le mode sombre basé sur les préférences système
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'nuit-sereine': '#1A202C',
        'craie-douce': '#F7FAFC',
        'vert-espoir': '#4FD1C5',
        'bleu-confiance': '#63B3ED',
        'papier-naturel': '#F7FAFC',
        'encre-profonde': '#2D3748',
        // Conserver les couleurs de sidebar si elles sont toujours utilisées ou pour compatibilité
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      fontFamily: {
        // Ajouter ici les polices si elles sont importées globalement
        // Exemple: sans: ['Nunito Sans', 'sans-serif'],
        // Exemple: display: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-up': 'slide-in-up 0.5s ease-out forwards',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

