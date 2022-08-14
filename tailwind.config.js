const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./**/*.html', './core/**/*.js'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                info: '#56B6F7',
                danger: '#F3616D',
                primary: '#AC39FF',
                success: '#28AB55',
                warning: '#EACA4A',
                secondary: '#EBEEF3',
                'white-gray': '#F5F8FA',
                'primary-600': '#AC39FF',
                'primary-700': '#A32DF9',
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
