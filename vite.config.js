// vite.config.js
import glob from 'fast-glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

import { VitePWA } from 'vite-plugin-pwa';
const injectRegister = process.env.SW_INLINE ?? 'auto';
const selfDestroying = process.env.SW_DESTROY === 'true';

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
        }),

        VitePWA({
            includeAssets: ['favicon.svg'],
            injectRegister,
            selfDestroying,
            manifest: {
                name: 'TwilightUI',
                short_name: 'TwilightUI',
                theme_color: '#009EF7',
                icons: [
                    {
                        src: 'pwa-192x192.png', // <== don't add slash, for testing
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png', // <== don't remove slash, for testing
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png', // <== don't add slash, for testing
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
            devOptions: {
                enabled: process.env.SW_DEV === 'true',
                // when using generateSW the PWA plugin will switch to classic
                navigateFallback: 'pages-error404.html',
            },
        }),
    ],
    build: {
        outDir: 'build',
        rollupOptions: {
            input: Object.fromEntries(
                glob.sync(['./*.html']).map(file => [
                    // This remove `pages/` as well as the file extension from each
                    // file, so e.g. pages/nested/foo.html becomes nested/foo
                    path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)),
                    // This expands the relative paths to absolute paths, so e.g.
                    // pages/nested/foo becomes /project/pages/nested/foo.html
                    fileURLToPath(new URL(file, import.meta.url)),
                ]),
            ),
        },
        chunkSizeWarningLimit: 1000, // 1000kb
    },
    server: {
        port: 5000,
        open: '/login.html',
    },
});
