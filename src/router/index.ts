import { useAuth } from '@/composables/useAuth';
import HomeView from '@/pages/HomeView.vue';
import SalesDashboard from '@/pages/dashboard/sales/index.vue';
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
                    name: 'dashboard-sales',
                    component: SalesDashboard
                },
                {
                    path: 'analytics',
                    name: 'dashboard-analytics',
                    component: () => import('@/pages/dashboard/analytics/index.vue')
                },
                {
                    path: 'crypto',
                    name: 'dashboard-crypto',
                    component: () => import('@/pages/dashboard/crypto/index.vue')
                },
                {
                    path: 'crm',
                    name: 'dashboard-crm',
                    component: () => import('@/pages/dashboard/crm/index.vue')
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
    ],
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

export default router;
