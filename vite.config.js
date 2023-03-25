// vite.config.js
const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
    build: {
        outDir: 'build',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                crm: resolve(__dirname, 'crm.html'),
                login: resolve(__dirname, 'login.html'),
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
