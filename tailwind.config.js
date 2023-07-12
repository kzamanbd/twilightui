/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from '@iconify/tailwind';
import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const primary = colors.green;

export default {
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
