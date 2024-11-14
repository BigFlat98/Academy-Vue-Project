import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from "@/components/flagment/PageTitle.vue"
import ChildComponent from "@/components/flagment/ChildComponent.vue"
// createApp(App).use(store).use(router).mount('#app').component(PageTitle)
const app = createApp(App)
app.use(store)
app.use(router)
app.component('PageTitle',PageTitle) //component를 추가하는 방법. 보통 여기에 추가해 놓고 View에서 import없이 사용함.
app.component('ChildComponent',ChildComponent)
app.mount('#app')

//use(router) -> 우리가 라우터를 사용하고 router/index.js에 정의해 놨다는 것을 가리킴.

