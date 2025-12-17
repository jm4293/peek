/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', './asset/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Main Brand Colors
        'theme-main-color': 'var(--main-color)',
        'theme-main-color-light': 'var(--main-color-light)',

        // Backgrounds
        'theme-bg-header': 'var(--bg-header)',
        'theme-bg-main': 'var(--bg-main)',
        'theme-bg-section': 'var(--bg-section)',
        'theme-bg-card': 'var(--bg-card)',
        'theme-bg-card-hover': 'var(--bg-card-hover)',

        // Borders
        'theme-border-light': 'var(--border-light)',
        'theme-border-medium': 'var(--border-medium)',

        // Text
        'theme-text-main': 'var(--text-main)',
        'theme-text-default': 'var(--text-default)',
        'theme-text-gray': 'var(--text-gray)',
        'theme-text-blue': 'var(--text-blue)',
        'theme-text-red': 'var(--text-red)',

        // Other
        'theme-skeleton-bg': 'var(--skeleton-bg)',
      },
    },
  },
  plugins: [],
};
