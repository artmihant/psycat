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
        path: '/strooptraining',
        name: 'strooptraining',
        component: () => import('./pages/StroopTrainingPage.vue'),
    },
    {
        path: '/delaystroop',
        name: 'delaystroop',
        component: () => import('./pages/DelayStroopPage.vue'),
    },
    {
        path: '/gilberttraining',
        name: 'gilberttraining',
        component: () => import('./pages/GilbertTrainingPage.vue'),
    },
    {
        path: '/gilbert',
        name: 'gilbert',
        component: () => import('./pages/GilbertPage.vue'),
    },
    {
        path: '/thanks',
        name: 'thanks',
        component: () => import('./pages/ThanksPage.vue'),
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
