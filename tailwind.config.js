const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./**/*.html'],
    darkMode: 'class', // or 'media'
    theme: {
        themeVariants: ['dark', 'light'],
        extend: {
            colors: {
                primary: colors.indigo[600],
                'dark-primary': '#1e1e2d',
                'dark-secondary': '#151521',
            },
            maxHeight: {
                xl: '36rem',
            },
            maxWidth: {
                '8xl': '90rem',
            },
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
