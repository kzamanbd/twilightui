const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const primary = colors.violet;

module.exports = {
    content: ['./**/*.html', './core/**/*.js'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                dark: {
                    primary: '#1E1E2D',
                    secondary: '#151521',
                },
                light: {
                    gray: '#F5F8FA',
                },
                primary: {
                    100: primary[100],
                    200: primary[200],
                    300: primary[300],
                    400: primary[400],
                    500: primary[500],
                    600: primary[600],
                    700: primary[700],
                    800: primary[800],
                    900: primary[900],
                    DEFAULT: primary[500],
                },
                info: '#56B6F7',
                danger: colors.red[500],
                success: colors.green[600],
                warning: colors.yellow[500],
                secondary: primary[300],
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
};
