const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./**/*.html'],
    darkMode: 'class', // or 'media'
    theme: {
        themeVariants: ['dark', 'light'],
        extend: {
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
    plugins: [
        require('@tailwindcss/forms')
    ],
}
