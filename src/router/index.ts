import { useAuth } from '@/composables/useAuth';

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 };
    }
});

router.beforeEach((to, from, next) => {
    const { isLoggedIn } = useAuth();

    const name = to.fullPath
        .split('/')
        .join(' ')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
        .replace(/([a-z])([A-Z])/g, '$1 $2'); // if find uppercase letter in the name and before uppercase find lowercase letter then add space

    document.title = `${name} - TwilightUI`;

    if (!isLoggedIn.value && to.name !== 'login') {
        next({ name: 'login' });
    } else if (to.name === 'login' && isLoggedIn.value) {
        next('/dashboard/sales');
    } else {
        next();
    }
});

router.afterEach((to, from, failure) => {
    if (!failure) {
        setTimeout(() => {
            window.HSStaticMethods.autoInit();
        }, 100);
    }
});

export default router;
