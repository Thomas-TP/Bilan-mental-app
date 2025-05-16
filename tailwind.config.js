/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'nuit-sereine': '#1A202C', // Fond principal (noir/gris foncé du logo)
        'craie-douce': '#F7FAFC',  // Texte principal (blanc du logo)
        'vert-accent': '#4FD1C5', // Couleur d'accent (anciennement vert-espoir)
        'bleu-lien': '#63B3ED', // Pour les liens si besoin (anciennement bleu-confiance)
        'fond-element': '#2D3748', // Fond pour cartes, sections internes (anciennement encre-profonde)
        // Conserver les couleurs de sidebar pour compatibilité si utilisées ailleurs
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
        sans: ['Inter', 'sans-serif'], // Police moderne et professionnelle
        // display: ['VotrePoliceHautDeGamme', 'serif'], // Si vous souhaitez une police spécifique pour les titres
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

