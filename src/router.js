import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/HomePage.vue'),
    },
    {
        path: '/anketa',
        name: 'anketa',
        component: () => import('./views/AnketaPage.vue'),
    },
    {
        path: '/annet',
        name: 'annet',
        component: () => import('./views/AnnetPage.vue'),
    },
    {
        path: '/ishihara',
        name: 'ishihara',
        component: () => import('./views/IshiharaPage.vue'),
    },
    {
        path: '/stroop',
        name: 'stroop',
        component: () => import('./views/StroopPage.vue'),
    },
    {
        path: '/delaystroop',
        name: 'delaystroop',
        component: () => import('./views/DelayStroopPage.vue'),
    },
    {
        path: '/cat',
        name: 'cat',
        component: () => import('./views/CatPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
