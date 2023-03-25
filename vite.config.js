// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
        }),
    ],
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
