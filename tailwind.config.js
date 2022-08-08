const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./**/*.html', './core/**/*.js'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                'primary-600': '#009EF7',
                'primary-700': '#0079C2',
                'dark-primary': '#1E1E2D',
                'dark-secondary': '#151521',
            },
            height: {
                sidebar: 'calc(100vh - 68px)',
            },
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                8: '8px',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
