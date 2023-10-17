import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register' // vite-plugin-svg-icons 注册脚本
import IconSvg from '@/components/iconSvg/iconSvg.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('IconSvg', IconSvg) // 全局注册组件
app.mount('#app')
