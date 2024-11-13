import { createRouter, createWebHistory } from 'vue-router' 
import HomeView from '../views/HomeView.vue'

const routes = [ //이 라우터는 장고에서 urls랑 같은 기능을 함.
  {
    path: '/',
    name: 'home',
    component: HomeView //이건 라우터에 해당되는 요청이 왔을 때 컴포넌트 자체를 쏴주는 방식
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" , webpackPrefetch:true*/ '../views/AboutView.vue') // 이거 파라미터 주석 아님.
                            //처음 사이트에 접속했을 때 about에 접속했을 때 사용하는 컴포넌트를 미리 받는 코드 webpackPrefetch:true
                            //네트원크에서 about에 접속하면 다시 받는것 처럼 보이는데 받은 크기를 확인해보면 캐쉬에서 받았다고 나옴.
                            //만약 webpackPrefetch:true 이걸 안 쓰면 청크를 받아오는데 라우트에 해당되는 요청이 왔을 때 실행됨
                            //이게 청크파일
                            //webpackChunkName: "about" -> 이건 청크 파일 이름 정해주는 코드
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" , webpackPrefetch:true*/ '../views/TestView.vue')
  },
  {
    path: '/string',
    name: 'string',
    component: () => import(/* webpackChunkName: "dataBinding" , webpackPrefetch:true*/ '../views/DataBinding/DataBindingStringView.vue')
  },
  {
    path: '/html',
    name: 'html',
    component: () => import(/* webpackChunkName: "dataBinding" , webpackPrefetch:true*/ '../views/DataBinding/HtmlView.vue')
  },
  {
    path: '/attribute',
    name: 'attribute',
    component: () => import(/* webpackChunkName: "dataBinding" , webpackPrefetch:true*/ '../views/DataBinding/AttributeView.vue')
  },
  {
    path: '/class',
    name: 'class',
    component: () => import(/* webpackChunkName: "dataBinding" , webpackPrefetch:true*/ '../views/DataBinding/ClassView.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import(/* webpackChunkName: "dataBinding" , webpackPrefetch:true*/ '../views/DataBinding/InputView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "dataBinding" , webpackPrefetch:true*/ '../views/DataBinding/ListView.vue')
  },
  {
    path: '/tt',
    name: 'tt',
    component: () => import(/* webpackChunkName: "dataBinding" , webpackPrefetch:true*/ '../views/DataBinding/tt.vue')
  },
  {
    path: '/CBS',
    name: 'cbs',
    component: () => import(/* webpackChunkName: "dataBinding" , webpackPrefetch:true*/ '../views/DataBinding/CheckboxSelectRadioView.vue')
  }, //chunkname을 동일하게 사용한 라우터는 캐시 매모리에 모두 저장이 된다. 즉 첫 페이지 접속했을 때 같은 청크명을 사용하는 라우터에 해당하는 컴포넌트는 모두 불러온다는 말임
    //그럼 사용에 따라 용량이 커지고 불러오는 시간이 길어지기 때문에 적절히 사용해 줘야함.
  {
    path: '/click',
    name: 'click',
    component: () => import(/* webpackChunkName: "Event" , webpackPrefetch:true*/ '../views/Event/ClickView.vue')
  },
  {
    path: '/change',
    name: 'change',
    component: () => import(/* webpackChunkName: "Event" , webpackPrefetch:true*/ '../views/Event/ChangeView.vue')
  },
  {
    path: '/change2',
    name: 'change2',
    component: () => import(/* webpackChunkName: "Event" , webpackPrefetch:true*/ '../views/Event/PracChangeView.vue')
  },
  {
    path: '/key',
    name: 'key',
    component: () => import(/* webpackChunkName: "Event" , webpackPrefetch:true*/ '../views/Event/KeyView.vue')
  },
  {
    path: '/render',
    name: 'render',
    component: () => import(/* webpackChunkName: "Extra" , webpackPrefetch:true*/ '../views/Extra/RenderView.vue')
  },
  {
    path: '/rendershow',
    name: 'rendershow',
    component: () => import(/* webpackChunkName: "Extra" , webpackPrefetch:true*/ '../views/Extra/RenderShowView.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import(/* webpackChunkName: "Extra" , webpackPrefetch:true*/ '../views/Extra/computedView.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "Extra" , webpackPrefetch:true*/ '../views/Extra/WatchView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})//이게 사용자가 라우터를 이동했을 때 이동 기록인가?


export default router

