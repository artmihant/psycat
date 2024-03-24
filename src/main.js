import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'

import './index.css'
import router from './router'

const vue_app = createApp(App)

const pinia = createPinia()

vue_app.use(pinia);

vue_app.use(router)

vue_app.mount('#app')
