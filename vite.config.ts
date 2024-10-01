import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import autoImport from 'unplugin-auto-import/vite';
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers';
import components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        autoImport({
            dts: true,
            imports: ['vue', 'vue-router', 'pinia'],
            dirs: ['src/components/**', 'src/composables/**', 'src/stores/**'],
            vueTemplate: true,
            eslintrc: {
                enabled: true,
                filepath: 'auto-imports.json'
            }
        }),
        components({
            resolvers: [HeadlessUiResolver()]
        }),
        vueDevTools()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        target: 'esnext',
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo: any) => {
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
                entryFileNames: 'js/[name]-[hash].js'
            }
        },
        chunkSizeWarningLimit: 1000 // KiB
    },
    server: { open: true, port: 1111 }
});
