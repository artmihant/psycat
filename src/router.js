import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/HomePage.vue'),
    },
    {
        path: '/pallete',
        name: 'pallete',
        component: () => import('./pages/PalletePage.vue'),
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
        path: '/gilbert',
        name: 'gilbert',
        component: () => import('./pages/GilbertPage.vue'),
    },
    {
        path: '/picto',
        name: 'picto',
        component: () => import('./pages/PictoPage.vue'),
    },
 
    {
        path: '/thanks',
        name: 'thanks',
        component: () => import('./pages/ThanksPage.vue'),
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: () => import('./pages/StatisticsPage.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
