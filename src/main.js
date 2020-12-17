import Vue from 'vue'
import Vue from './App.vue'
import App from './App.vue' 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routers:Routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
