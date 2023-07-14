/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

const primary = colors.green;

module.exports = {
    content: ['./src/**/*.{html,js}'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                dark: {
                    ...colors.slate,
                    DEFAULT: '#1F2937',
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    light: '#E0E6ED',
                },
                light: '#F5F8FA',
                primary: {
                    ...primary,
                    DEFAULT: '#00A76F',
                },
                info: {
                    ...colors.indigo,
                    DEFAULT: colors.indigo[500],
                },
                danger: {
                    ...colors.rose,
                    DEFAULT: colors.rose[500],
                },
                success: {
                    ...colors.emerald,
                    DEFAULT: colors.emerald[500],
                },
                warning: {
                    ...colors.amber,
                    DEFAULT: colors.amber[500],
                },
                secondary: {
                    ...colors.gray,
                    DEFAULT: colors.gray[400],
                },
            },
            fontFamily: {
                sans: ['Inter, Helvetica, "sans-serif"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, typography, aspectRatio, addDynamicIconSelectors()],
};
