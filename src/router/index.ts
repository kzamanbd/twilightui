import useAuth from '@/composables/useAuth';
import HomeView from '@/pages/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: HomeView,
            meta: {
                layout: 'blank'
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            children: [
                {
                    path: 'sales',
                    name: 'sales',
                    component: () => import('@/pages/dashboard/sales/index.vue')
                },
                {
                    path: 'crypto',
                    name: 'crypto',
                    component: () => import('@/pages/dashboard/crypto/index.vue')
                }
            ]
        },
        {
            path: '/table',
            name: 'table',
            component: () => import('@/pages/AboutView.vue')
        },
        // error page
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/pages/ErrorView.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn.value && to.name !== 'login') {
        next({ name: 'login' });
    } else if (to.name === 'login' && isLoggedIn.value) {
        next({ name: 'dashboard-sales' });
    } else {
        next();
    }
});

export default router;
