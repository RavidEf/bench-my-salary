import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

const tailwindConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    animation: {
      carousel: 'carousel 40s linear infinite',
    },
    keyframes: {
      carousel: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
  },
  plugins: [daisyui, forms],
};

export default tailwindConfig;
