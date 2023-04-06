/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const primary = colors.sky;

module.exports = {
    content: ['./**/*.html'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                dark: {
                    primary: '#1E1E2D',
                    secondary: '#151521',
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    light: '#E0E6ED',
                },
                light: {
                    gray: '#F5F8FA',
                },
                primary: {
                    100: primary[100],
                    200: primary[200],
                    300: primary[300],
                    400: primary[400],
                    600: primary[600],
                    700: primary[700],
                    900: primary[900],
                    light: primary[50],
                    DEFAULT: '#009EF7',
                },
                info: {
                    light: colors.blue[50],
                    DEFAULT: colors.blue[500],
                },
                danger: {
                    light: colors.red[50],
                    DEFAULT: colors.red[500],
                },
                success: {
                    light: colors.green[50],
                    DEFAULT: colors.green[500],
                },
                warning: {
                    light: colors.yellow[50],
                    DEFAULT: colors.yellow[500],
                },
                secondary: {
                    light: colors.gray[50],
                    DEFAULT: colors.gray[400],
                },
            },
            height: {
                sidebar: 'calc(100vh - 70px)',
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
            addVariant('vertical-menu', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.vertical-menu .${e(`vertical-menu${separator}${className}`)}`;
                });
            });
        }),
    ],
};
