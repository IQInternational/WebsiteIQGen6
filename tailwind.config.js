import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"AKbalthom Kbach"', 'Georgia', 'serif'],
        sans: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', 'sans-serif'],
        ios: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
      },
      colors: {
        royal: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8eb6ff',
          400: '#598dff',
          500: '#3366ff',
          600: '#1a47f5',
          700: '#1535d1',
          800: '#162da8',
          900: '#172a85',
          950: '#0d1a52',
        },
        crimson: {
          50: '#fef3f3',
          100: '#fde4e4',
          200: '#fbcdcd',
          300: '#f7abab',
          400: '#f07878',
          500: '#e44e4e',
          600: '#cf3030',
          700: '#ab2424',
          800: '#8e2222',
          900: '#782222',
          950: '#410d0d',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        ivory: {
          50: '#fbfaf7',
          100: '#f6f3ec',
          200: '#ede7d8',
          300: '#e0d6bf',
          400: '#cdbf99',
          500: '#b9a274',
        },
        cerulean: {
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
      },
      borderRadius: {
        'ios': '24px',
        'ios-lg': '32px',
      },
      boxShadow: {
        'card': '0 24px 60px -12px rgba(13, 26, 82, 0.18), 0 8px 24px -8px rgba(13, 26, 82, 0.12)',
        'card-lg': '0 40px 100px -20px rgba(13, 26, 82, 0.28), 0 12px 40px -12px rgba(13, 26, 82, 0.16)',
        'inset-bevel': 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(13,26,82,0.08)',
      },
      keyframes: {
        'cloud-part': {
          '0%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'logo-pop': {
          '0%': { transform: 'scale(0.3) translateY(20px)', opacity: '0', filter: 'blur(12px)' },
          '60%': { transform: 'scale(1.08) translateY(0)', opacity: '1', filter: 'blur(0px)' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1', filter: 'blur(0px)' },
        },
        'subtext-rise': {
          '0%': { transform: 'translateY(12px)', opacity: '0', letterSpacing: '0.5em' },
          '100%': { transform: 'translateY(0)', opacity: '1', letterSpacing: '0.35em' },
        },
        'fold-out': {
          '0%': { transform: 'scale(0.4) rotateX(75deg)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'scale(1) rotateX(0deg)', opacity: '1' },
        },
        'vine-grow': {
          '0%': { strokeDashoffset: '1000', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '1' },
        },
        'sway': {
          '0%,100%': { transform: 'rotate(-1.2deg)' },
          '50%': { transform: 'rotate(1.2deg)' },
        },
        'card-rise': {
          '0%': { transform: 'translateY(40px) scale(0.96)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'cloud-part': 'cloud-part 2s ease-out forwards',
        'logo-pop': 'logo-pop 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'subtext-rise': 'subtext-rise 0.8s ease-out 0.5s forwards',
        'fold-out': 'fold-out 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'vine-grow': 'vine-grow 2.2s ease-out forwards',
        'sway': 'sway 6s ease-in-out infinite',
        'card-rise': 'card-rise 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'float': 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
