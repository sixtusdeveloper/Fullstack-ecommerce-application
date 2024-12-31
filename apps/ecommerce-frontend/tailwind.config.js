const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      'sans': 'Inter var, ui-sans-serif, system-ui',
      'serif': 'Inter var, ui-sans-serif, system-ui',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        fantasy: {
          primary: '#0000FF',
          'primary-content': '#ffffff',
          secondary: '#f6f6f6',
          neutral: '#E8E8E8',
      },
      }, 
    ],
    base: true,
    utils: true,
    logs: true,
    styled: true,
    themeRoot: ':root',
    prefix: '',
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
};
