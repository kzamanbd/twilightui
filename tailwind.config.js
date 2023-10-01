/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from '@iconify/tailwind';
import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

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

export default {
    content: ['./src/**/*.{html,js}'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: colorConfig,
            fontFamily: {
                sans: ['Inter, Helvetica, "sans-serif"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, typography, aspectRatio, addDynamicIconSelectors()],
};
