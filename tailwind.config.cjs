const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lime: {
          '50': '#f7f8f3',
          '100': '#eef0d7',
          '200': '#d6e3a9',
          '300': '#a8c573',
          '400': '#65a144',
          '500': '#498425',
          '600': '#3a6c19',
          '700': '#305216',
          '800': '#223813',
          '900': '#17220f',
        },
        gray: {
          '50': '#f8f8f6',
          '100': '#eeeeed',
          '200': '#dbdbd9',
          '300': '#b6b9b4',
          '400': '#8a938c',
          '500': '#6e7368',
          '600': '#5a584f',
          '700': '#46433d',
          '800': '#312e2c',
          '900': '#201e1d',
        },
        
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.gray.100'),
            '--tw-prose-bold': theme('colors.lime.200'),
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.yellow.200'),
            },
            strong: {
              fontWeight: '800'
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents({
        'article.prose > *:not(.figures)': {
          "@apply px-8 mx-auto md:ml-[10vw] md:max-w-3xl lg:max-w-5xl": {}
        },
        'article.prose > *:not(.figures) > *': {
          "max-width": "65ch"
        }
      })
    }),
  ],
}