/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════
      // 🎨 BABYBLOOM CUSTOM COLORS - Sage & Blush Theme
      // ═══════════════════════════════════════════════════════
      colors: {
        // Primary - Sage Green (Trust, Nature, Safety)
        primary: {
          50: '#f0f7f4',
          100: '#d9ebe2',
          200: '#b5d7c7',
          300: '#8bbda6',
          400: '#7EB09B', // Main primary
          500: '#6A9C87', // Hover
          600: '#5D8A78', // Active
          700: '#4a7162',
          800: '#3d5b50',
          900: '#344c43',
        },
        // Secondary - Soft Blush (Gentle, Warm, Caring)
        secondary: {
          50: '#fef5f5',
          100: '#feeaea',
          200: '#fcd9d9',
          300: '#F8C8C8', // Main secondary
          400: '#F0B0B0', // Hover
          500: '#e89a9a',
          600: '#d47a7a',
          700: '#b85c5c',
          800: '#984d4d',
          900: '#7e4343',
        },
        // Accent - Warm Honey (Warmth, Nourishment)
        accent: {
          50: '#fdf9f0',
          100: '#faf0db',
          200: '#f5e0b8',
          300: '#E8C8A0', // Main accent
          400: '#d4a86e',
          500: '#c4904a',
          600: '#a8743d',
          700: '#8c5a35',
          800: '#734931',
          900: '#5f3d2b',
        },
        // Neutral Colors (Backgrounds, Text, Borders)
        neutral: {
          50: '#FAFAF8', // Primary background
          100: '#F5F5F0', // Secondary background
          200: '#DFE6E9', // Borders
          300: '#B2BEC3', // Muted text
          400: '#636E72', // Secondary text
          500: '#2D3436', // Primary text
        },
        // Additional Accent Colors
        softBlue: {
          100: '#e8f4f8',
          200: '#B8D4E8',
          300: '#8bbcd8',
        },
        lavender: {
          100: '#f0ebf8',
          200: '#D4C8E8',
          300: '#b8a8d8',
        },
        peach: {
          100: '#fff5f0',
          200: '#FFEEE8',
          300: '#ffd4c4',
        },
        // Status Colors
        success: '#27AE60',
        error: '#E74C3C',
        warning: '#F39C12',
        info: '#3498DB',
        rating: '#F1C40F',
      },

      // ═══════════════════════════════════════════════════════
      // 🔤 CUSTOM FONT FAMILIES
      // ═══════════════════════════════════════════════════════
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },

      // ═══════════════════════════════════════════════════════
      // 📏 CUSTOM FONT SIZES
      // ═══════════════════════════════════════════════════════
      fontSize: {
        // Hero - 40-48px
        'hero-sm': ['40px', { lineHeight: '1.1', fontWeight: '700' }],
        hero: ['48px', { lineHeight: '1.1', fontWeight: '700' }],

        // Section Headings - 24-32px
        'section-sm': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        section: ['32px', { lineHeight: '1.2', fontWeight: '600' }],

        // Card/Product Title - 18-20px
        'card-title': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'card-title-sm': ['18px', { lineHeight: '1.3', fontWeight: '600' }],

        // Body Text - 14-16px
        body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],

        // Small/Tiny - 12px
        tiny: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },

      // ═══════════════════════════════════════════════════════
      // 📐 CUSTOM SPACING
      // ═══════════════════════════════════════════════════════
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },

      // ═══════════════════════════════════════════════════════
      // 🔲 CUSTOM BORDER RADIUS
      // ═══════════════════════════════════════════════════════
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },

      // ═══════════════════════════════════════════════════════
      // 🌫️ CUSTOM BOX SHADOWS
      // ═══════════════════════════════════════════════════════
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.06)',
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
        hover: '0 8px 24px rgba(0, 0, 0, 0.12)',
        button: '0 2px 4px rgba(126, 176, 155, 0.3)',
      },

      // ═══════════════════════════════════════════════════════
      // ⏱️ CUSTOM TRANSITIONS
      // ═══════════════════════════════════════════════════════
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },

      // ═══════════════════════════════════════════════════════
      // 🎬 CUSTOM ANIMATIONS
      // ═══════════════════════════════════════════════════════
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
        'scale-in': 'scaleIn 0.2s ease forwards',
      },
    },
  },
  plugins: [],
}
