/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

const primary = colors.green;

module.exports = {
    content: ['./src/**/*.{html,css,scss,js}'],
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
                    light: primary[50],
                    DEFAULT: '#00a76f',
                },
                info: {
                    light: colors.blue[50],
                    DEFAULT: colors.blue[500],
                    dark: colors.blue[700],
                },
                danger: {
                    light: colors.red[50],
                    DEFAULT: colors.red[500],
                    dark: colors.red[700],
                },
                success: {
                    light: colors.green[50],
                    DEFAULT: colors.green[500],
                    dark: colors.green[700],
                },
                warning: {
                    light: colors.yellow[50],
                    DEFAULT: colors.yellow[500],
                    dark: colors.yellow[700],
                },
                secondary: {
                    light: colors.gray[50],
                    DEFAULT: colors.gray[400],
                    dark: colors.gray[700],
                },
            },
            fontFamily: {
                sans: ['Inter, Helvetica, "sans-serif"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, typography, aspectRatio, addDynamicIconSelectors()],
};
