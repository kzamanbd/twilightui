const { resolve } = require('path')
export default {
    plugins: [],
    server: {
        open: '/index.html',
        port: 3020,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            }
        }
    }
}