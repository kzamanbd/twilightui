const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./**/*.html'],
    darkMode: 'class',
    theme: {
        themeVariants: ['dark'],
        customForms: (theme) => ({
            default: {
                'input, textarea': {
                    '&::placeholder': {
                        color: theme('colors.gray.400'),
                    },
                },
            },
        }),
        extend: {
            maxHeight: {
                0: '0',
                xl: '36rem',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        backgroundColor: ['hover', 'focus', 'active', 'odd', 'dark'],
        display: ['responsive', 'dark'],
        textColor: ['focus-within', 'hover', 'active', 'dark'],
        placeholderColor: ['focus', 'dark'],
        borderColor: ['focus', 'hover', 'dark'],
        divideColor: ['dark'],
        boxShadow: ['focus'],
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
