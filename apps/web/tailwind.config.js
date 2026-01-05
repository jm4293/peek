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
        'layer-0': 'var(--bg-layer-0)',
        'layer-1': 'var(--bg-layer-1)',
        'layer-2': 'var(--bg-layer-2)',

        'modal-layer': 'var(--modal-bg-layer)',
        'modal-btn-left': 'var(--modal-bg-btn-left)',
        'modal-btn-right': 'var(--modal-bg-btn-right)',

        'border-0': 'var(--border-0)',

        main: 'var(--main)',
        foreground: 'var(--foreground)',
        white: 'var(--white)',
        black: 'var(--black)',
        gray: 'var(--gray)',
        blue: 'var(--blue)',
        red: 'var(--red)',
      },
    },
  },
  plugins: [],
};
