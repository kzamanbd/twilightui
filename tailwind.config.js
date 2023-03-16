const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const primary = colors.sky;

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
                    DEFAULT: '#009EF7',
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
                sans: ['Inter, Helvetica, "sans-serif"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('prettier-plugin-tailwindcss'),
        plugin(function ({ addVariant, e }) {
            // mini sidebar variant
            addVariant('mini-sidebar', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.mini-sidebar .${e(`mini-sidebar${separator}${className}`)}`;
                });
            });
        }),
    ],
};
