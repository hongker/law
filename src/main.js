import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {post} from './assets/js/request'

Vue.config.productionTip = false
Vue.prototype.$post = post;
new Vue({
  el: '#app',
  router,
  render: h =>h(App)
}).$mount("#app")
