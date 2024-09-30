import 'simplebar-vue/dist/simplebar.min.css';
import SimpleBar from 'simplebar-vue';
import ApexCharts from 'vue3-apexcharts';
import directives from '@/directives';

export default {
    install: (app) => {
        app.use(directives);
        app.use(ApexCharts);
        app.component('SimpleBar', SimpleBar);
    }
};
