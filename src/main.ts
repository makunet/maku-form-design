import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import MakuFormDesign from 'maku-form-design'

import 'element-plus/dist/index.css'
import 'maku-form-design/lib/style.css'

const app = createApp(App)
app.use(ElementPlus, { locale: locale })

// 表单设计器
app.use(MakuFormDesign)

app.mount('#app')
