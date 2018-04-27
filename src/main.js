import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/css/index.css'
import Element from "element-ui";
// import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js';



Vue.use(Element);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
