import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import router from './router'

const vue_app = createApp(App)

vue_app.use(router)

vue_app.mount('#app')
