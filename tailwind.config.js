/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // BABYBLOOM CUSTOM COLORS - Sage & Blush Theme

      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#d9ebe2',
          200: '#b5d7c7',
          300: '#8bbda6',
          400: '#7EB09B',
          500: '#6A9C87',
          600: '#5D8A78',
          700: '#4a7162',
          800: '#3d5b50',
          900: '#344c43',
        },
        secondary: {
          50: '#fef5f5',
          100: '#feeaea',
          200: '#fcd9d9',
          300: '#F8C8C8',
          400: '#F0B0B0',
          500: '#e89a9a',
          600: '#d47a7a',
          700: '#b85c5c',
          800: '#984d4d',
          900: '#7e4343',
        },
        accent: {
          50: '#fdf9f0',
          100: '#faf0db',
          200: '#f5e0b8',
          300: '#E8C8A0',
          400: '#d4a86e',
          500: '#c4904a',
          600: '#a8743d',
          700: '#8c5a35',
          800: '#734931',
          900: '#5f3d2b',
        },
        neutral: {
          50: '#FAFAF8',
          100: '#F5F5F0',
          200: '#DFE6E9',
          300: '#B2BEC3',
          400: '#636E72',
          500: '#2D3436',
        },
        success: '#27AE60',
        error: '#E74C3C',
        warning: '#F39C12',
        info: '#3498DB',
        rating: '#F1C40F',
      },

      // ═══════════════════════════════════════════════════════
      // 🔤 FONTS
      // ═══════════════════════════════════════════════════════
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },

      // ═══════════════════════════════════════════════════════
      // 🪟 GLASSMORPHISM
      // ═══════════════════════════════════════════════════════
      backdropBlur: {
        xs: '2px',
      },

      // ═══════════════════════════════════════════════════════
      // 🌫️ BOX SHADOWS (including glass shadows)
      // ═══════════════════════════════════════════════════════
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.06)',
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
        hover: '0 8px 24px rgba(0, 0, 0, 0.12)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.08)',
      },

      // ═══════════════════════════════════════════════════════
      // 🎬 ANIMATIONS
      // ═══════════════════════════════════════════════════════
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}
