const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./**/*.html'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                primary: '#009ef7',
                'dark-primary': '#1e1e2d',
                'dark-secondary': '#151521',
            },
            height: {
                sidebar: 'calc(100vh - 68px)',
            },
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
