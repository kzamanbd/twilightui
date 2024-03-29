import glob from 'glob';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

const entries = glob.sync('./app/**/*.html').reduce((acc, path) => {
    const name = path.split('/').pop().split('.').shift();
    acc[name] = path;
    return acc;
}, {});

export default defineConfig({
    root: 'app',
    resolve: {
        alias: {
            '@tailwind.config': resolve(__dirname, './tailwind.config.js'),
            '@': resolve(__dirname, './app'),
        },
    },
    optimizeDeps: {
        entries: Object.keys(entries),
    },
    plugins: [createHtmlPlugin()],
    build: {
        target: 'esnext',
        outDir: resolve(__dirname, 'build'),
        rollupOptions: {
            input: entries,
            output: {
                assetFileNames: chunkInfo => {
                    let outDir = '';

                    // Fonts
                    if (/(ttf|woff|woff2|eot)$/.test(chunkInfo.name)) {
                        outDir = 'fonts';
                    }

                    // SVG
                    if (/svg$/.test(chunkInfo.name)) {
                        outDir = 'svg';
                    }

                    // Images
                    if (/(png|jpg|jpeg|gif|webp)$/.test(chunkInfo.name)) {
                        outDir = 'images';
                    }

                    // Media
                    if (/(mp3|mp4|webm|ogg|wav|flac|aac)$/.test(chunkInfo.name)) {
                        outDir += 'media';
                    }

                    // JSON
                    if (/json$/.test(chunkInfo.name)) {
                        outDir = 'json';
                    }

                    // JS
                    if (/js$/.test(chunkInfo.name)) {
                        outDir = 'js';
                    }

                    // CSS
                    if (/css$/.test(chunkInfo.name)) {
                        outDir = 'css';
                    }

                    return `${outDir}/[name][extname]`;
                },
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
            },
        },
        chunkSizeWarningLimit: 1500, // 1500KiB
    },
    server: {
        port: 6000,
        open: true,
        host: true,
    },
});
