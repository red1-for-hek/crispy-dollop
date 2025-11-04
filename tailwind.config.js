/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Background gradient colors
        'bg-start': '#06070a',
        'bg-end': '#0f1020',
        // Neon accent colors
        'neon-purple': '#8B5CF6',
        'neon-cyan': '#00D4FF',
        'neon-green': '#00FF88',
        'neon-blue': '#0066CC',
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Roboto Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-out': 'fadeOut 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'scale-out': 'scaleOut 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'rotate': 'rotate 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0ea5e9, 0 0 10px #0ea5e9, 0 0 15px #0ea5e9' },
          '100%': { boxShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(14, 165, 233, 0.8)',
            transform: 'scale(1.05)'
          },
        },
        matrix: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        particleFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
            opacity: '0.7'
          },
          '33%': { 
            transform: 'translateY(-30px) translateX(20px) rotate(120deg)',
            opacity: '1'
          },
          '66%': { 
            transform: 'translateY(20px) translateX(-15px) rotate(240deg)',
            opacity: '0.8'
          },
        },
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const neonUtilities = {
        '.neon-glow': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
          filter: 'drop-shadow(0 0 10px currentColor) drop-shadow(0 0 20px currentColor)',
        },
        '.neon-glow-purple': {
          textShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6, 0 0 40px #8B5CF6',
          filter: 'drop-shadow(0 0 10px #8B5CF6) drop-shadow(0 0 20px #8B5CF6)',
        },
        '.neon-glow-cyan': {
          textShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 30px #00D4FF, 0 0 40px #00D4FF',
          filter: 'drop-shadow(0 0 10px #00D4FF) drop-shadow(0 0 20px #00D4FF)',
        },
        '.neon-glow-green': {
          textShadow: '0 0 10px #00FF88, 0 0 20px #00FF88, 0 0 30px #00FF88, 0 0 40px #00FF88',
          filter: 'drop-shadow(0 0 10px #00FF88) drop-shadow(0 0 20px #00FF88)',
        },
        '.neon-glow-blue': {
          textShadow: '0 0 10px #0066CC, 0 0 20px #0066CC, 0 0 30px #0066CC, 0 0 40px #0066CC',
          filter: 'drop-shadow(0 0 10px #0066CC) drop-shadow(0 0 20px #0066CC)',
        },
        '.neon-border': {
          border: '1px solid currentColor',
          boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, inset 0 0 5px currentColor',
        },
        '.neon-border-purple': {
          border: '1px solid #8B5CF6',
          boxShadow: '0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6, inset 0 0 5px #8B5CF6',
        },
        '.neon-border-cyan': {
          border: '1px solid #00D4FF',
          boxShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF, inset 0 0 5px #00D4FF',
        },
        '.neon-border-green': {
          border: '1px solid #00FF88',
          boxShadow: '0 0 5px #00FF88, 0 0 10px #00FF88, 0 0 15px #00FF88, inset 0 0 5px #00FF88',
        },
        '.neon-border-blue': {
          border: '1px solid #0066CC',
          boxShadow: '0 0 5px #0066CC, 0 0 10px #0066CC, 0 0 15px #0066CC, inset 0 0 5px #0066CC',
        },
      };
      addUtilities(neonUtilities);
    },
  ],
}