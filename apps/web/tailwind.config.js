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

        // Borders
        'border-primary': 'var(--border-primary)',

        // Text
        main: 'var(--text-main)',
        foreground: 'var(--text-foreground)',
        'foreground-muted': 'var(--text-foreground-muted)',
        gray: 'var(--text-gray)',
        blue: 'var(--text-blue)',
        red: 'var(--text-red)',

        // Button
        'btn-primary': 'var(--button-primary)',
        'btn-secondary': 'var(--button-secondary)',

        // Other
        skeleton: 'var(--skeleton-primary)',
      },
    },
  },
  plugins: [],
};
