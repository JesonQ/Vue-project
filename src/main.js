import Vue from 'vue'
import App from './App.vue'
import "@/mock"
import router from "@/router"
import "@/common/stylus/style.styl"

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
