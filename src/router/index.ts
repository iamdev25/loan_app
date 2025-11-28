import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../components/pages/HomePage.vue';
import LoanInfo from '../components/pages/LoanInfo.vue';
import LoanEntry from '../components/pages/LoanEntry.vue';

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
    { path: "/loan-info", component: LoanInfo },
    { path: "/loan-entry", component: LoanEntry },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;