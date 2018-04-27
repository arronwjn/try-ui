import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index'





Vue.use(Router)

const routerConfig = [{
  path: '',
  redirect: '/service'
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
]


const routers = new Router({
  mode: 'history',
  routes: routerConfig,
})

export default routers;
