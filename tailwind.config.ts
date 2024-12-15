import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand_primary: {
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#d9d9d9',
          400: '#cccccc',
          500: '#bfbfbf',
          600: '#b3b3b3',
          700: '#a6a6a6',
          800: '#999999',
          900: '#8c8c8c'
        },
        brand_secondary: {
          100: '#97e0b9',
          200: '#83daac',
          300: '#70d49f',
          400: '#5cce92',
          500: '#49c885',
          600: '#49c885',
          700: '#38bf78',
          800: '#33ab6b',
          900: '#2d985f'
        },
        dark: {
          100: '#b3b3b3',
          200: '#8c8c8c',
          300: '#666666',
          400: '#4d4d4d',
          500: '#333333',
          600: '#292929',
          700: '#1f1f1f',
          800: '#141414',
          900: '#0a0a0a'
        },
        light: {
          100: 'rgba(255, 255, 255, 1)', // Opacity 1 (fully opaque)
          200: 'rgba(255, 255, 255, 0.9)',
          300: 'rgba(255, 255, 255, 0.8)',
          400: 'rgba(255, 255, 255, 0.7)',
          500: 'rgba(255, 255, 255, 0.6)',
          600: 'rgba(255, 255, 255, 0.5)',
          700: 'rgba(255, 255, 255, 0.4)',
          800: 'rgba(255, 255, 255, 0.3)',
          900: 'rgba(255, 255, 255, 0.2)'
        },




        'primary-color': 'var(--color-primary)',
        'secondary-color': 'var(--color-secondary)',
        'medium-color': 'var(--color-medium)',
        'background-color': 'var(--color-background)',
        'text-color': 'var(--color-text)',
        'textlight-color': 'var(--color-text-light)',
        'delete-color': 'var(--color-delete)',
        'error-color': 'var(--color-error)',
        'border-color': '#ccc',
      }
    },
  },
  plugins: [],
};
export default config;
