/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './asset/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'layer-0': 'var(--bg-layer-0)',
        'layer-1': 'var(--bg-layer-1)',
        'layer-2': 'var(--bg-layer-2)',
        'layer-3': 'var(--bg-layer-3)',

        // Text
        main: 'var(--main)',
        foreground: 'var(--foreground)',
        'foreground-muted': 'var(--foreground-muted)',
        gray: 'var(--gray)',
        blue: 'var(--blue)',
        red: 'var(--red)',

        // Other
        skeleton: 'var(--skeleton-primary)',
      },
    },
  },
  plugins: [],
};
