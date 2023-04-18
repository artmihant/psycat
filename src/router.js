import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/HomePage.vue'),
    },
    {
        path: '/anketa',
        name: 'anketa',
        component: () => import('./pages/AnketaPage.vue'),
    },
    {
        path: '/testfirebase',
        name: 'testfirebase',
        component: () => import('./pages/TestFireBasePage.vue'),
    },
    {
        path: '/annet',
        name: 'annet',
        component: () => import('./pages/AnnetPage.vue'),
    },
    {
        path: '/ishihara',
        name: 'ishihara',
        component: () => import('./pages/IshiharaPage.vue'),
    },
    {
        path: '/stroop',
        name: 'stroop',
        component: () => import('./pages/StroopPage.vue'),
    },
    {
        path: '/delaystroop',
        name: 'delaystroop',
        component: () => import('./pages/DelayStroopPage.vue'),
    },
    {
        path: '/cat',
        name: 'cat',
        component: () => import('./pages/CatPage.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
