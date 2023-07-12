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
                    DEFAULT: '#1E293B',
                    secondary: '#151521',
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    light: '#E0E6ED',
                },
                light: {
                    DEFAULT: '#F5F8FA',
                },
                primary: {
                    ...primary,
                    DEFAULT: '#00A76F',
                },
                info: {
                    ...colors.blue,
                    DEFAULT: colors.blue[500],
                },
                danger: {
                    ...colors.red,
                    DEFAULT: colors.red[500],
                },
                success: {
                    ...colors.green,
                    DEFAULT: colors.green[500],
                },
                warning: {
                    ...colors.yellow,
                    DEFAULT: colors.yellow[500],
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
