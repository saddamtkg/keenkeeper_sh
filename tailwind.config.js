/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        sm: '767px',
        md: '980px',
        lg: '1200px',
        xl: '1440px',
      },
    },
  },
  plugins: [require('daisyui')],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};

export default config;
