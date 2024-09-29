import glob from 'glob';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

const entries = glob.sync('./pages/**/*.html').reduce((acc, path) => {
    const name = path.split('/').pop().split('.').shift();
    acc[name] = path;
    return acc;
}, {});

export default defineConfig({
    optimizeDeps: {
        entries: Object.keys(entries),
    },
    plugins: [createHtmlPlugin()],
    build: {
        target: 'esnext',
        outDir: resolve(__dirname, 'build'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ...entries,
            },
            output: {
                assetFileNames: chunkInfo => {
                    let outDir = '';

                    // Fonts
                    if (/(ttf|woff|woff2|eot)$/.test(chunkInfo.name)) {
                        outDir = 'fonts';
                    }

                    // SVG
                    if (/svg$/.test(chunkInfo.name)) {
                        outDir = 'images/svg';
                    }

                    // Images
                    if (/(png|jpg|jpeg|gif|webp)$/.test(chunkInfo.name)) {
                        outDir = 'images';
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
        port: 6500,
        open: true,
    },
});
