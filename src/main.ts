import { createApp } from 'vue'


import App from './App.vue'

// 样式初始化
import 'normalize.css'

const app = createApp(App)

// 引入并使用
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
app.use(ArcoVue);

// 引入并使用pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// 引入并使用router
import router from '@/router/index'
app.use(router)

// 引入路由鉴权模块
import './permission'

app.mount('#app')
