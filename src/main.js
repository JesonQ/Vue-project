import Vue from 'vue'
import App from './App.vue'
import "@/mock"
import axios from '@/api'
import router from "@/router"
import "@/common/stylus/style.styl"
import "@/common/stylus/transition.styl"

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.prototype.bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
