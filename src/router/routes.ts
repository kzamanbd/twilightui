import HomeView from '@/pages/HomeView.vue';
import SalesDashboard from '@/pages/dashboard/sales/index.vue';

export const routes = [
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
                name: 'sales-dashboard',
                component: SalesDashboard
            },
            {
                path: 'analytics',
                name: 'dashboard-analytics',
                component: () => import('@/pages/dashboard/analytics/index.vue')
            },
            {
                path: 'crypto',
                name: 'crypto-dashboard',
                component: () => import('@/pages/dashboard/crypto/index.vue')
            },
            {
                path: 'crm',
                name: 'crm-dashboard',
                component: () => import('@/pages/dashboard/crm/index.vue')
            },
            {
                path: 'hrm',
                name: 'hrm-dashboard',
                component: () => import('@/pages/dashboard/hrm/index.vue')
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
];
