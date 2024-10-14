const { addDynamicIconSelectors } = require('@iconify/tailwind');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const primary = colors.green;
const colorConfig = {
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
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './pages/**/*.{html,js}',
        './public/features/**/*.{html,js}',
        'node_modules/preline/dist/*.js',
    ],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: colorConfig,
            fontFamily: {
                sans: ['Inter, Helvetica, "sans-serif"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        addDynamicIconSelectors(),
    ],
};
