import './assets/styles/app.css';
import './assets/addons';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import plugins from './plugins/index.d';
import App from './App.vue';
import router from './router';
import 'preline/preline';

const app = createApp(App);

app.use(createPinia()).use(router).use(plugins).mount('#app');
