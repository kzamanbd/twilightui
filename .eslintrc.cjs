/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
        './auto-imports.json'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'import/no-default-export': 'off',
        'import/no-named-as-default': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        'no-var': 'error',
        'no-extra-semi': 'error',
        'default-param-last': ['error'],
        'no-empty': 'error',
        'no-else-return': 'error'
    },
    ignorePatterns: ['**/dist/*', '**/node_modules/*', 'public/*', 'src/shims-vue.d.ts']
};
