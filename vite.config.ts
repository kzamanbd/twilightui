import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia'],
            dirs: ['src/components/**', 'src/composables/**', 'src/stores/**'],
            vueTemplate: true,
            eslintrc: {
                enabled: true,
                filepath: 'auto-imports.json'
            }
        }),
        Components({
            resolvers: [HeadlessUiResolver()]
        }),
        VueDevTools()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: { open: true, port: 1111 }
});
