import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/svg-icon'

import '@/styles/index.scss'

const app = createApp(App)
app.use(createPinia())
app.use(SvgIcon)
app.use(ElementPlus)
app.mount('#app')
