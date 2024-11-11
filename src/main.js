import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
//use(router) -> 우리가 라우터를 사용하고 router/index.js에 정의해 놨다는 것을 가리킴.