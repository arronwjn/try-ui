import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index'





Vue.use(Router)

const routerConfig = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
]


const routers = new Router({
  routes: routerConfig,
})

export default routers;
