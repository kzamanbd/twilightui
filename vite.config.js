// vite.config.js
import glob from 'fast-glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
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
            input: Object.fromEntries(
                glob.sync(['./*.html', './pages/**/*.html']).map(file => [
                    // This remove `src/` as well as the file extension from each
                    // file, so e.g. src/nested/foo.js becomes nested/foo
                    path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)),
                    // This expands the relative paths to absolute paths, so e.g.
                    // src/nested/foo becomes /project/src/nested/foo.js
                    fileURLToPath(new URL(file, import.meta.url)),
                ]),
            ),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
