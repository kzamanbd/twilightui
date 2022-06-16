const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./**/*.html'],
    darkMode: 'class', // or 'media'
    theme: {
        themeVariants: ['dark', 'light'],
        extend: {
            colors: {
                primary: colors.purple[600],
            },
            maxHeight: {
                xl: '36rem',
            },
            maxWidth: {
                '8xl': '90rem',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
