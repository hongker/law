import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import 'lib-flexible'
// import Vant from 'vant';
// import 'vant/lib/index.css';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { post } from './request'

Vue.config.productionTip = false
Vue.prototype.$post = post;
// Vue.use(Vant)
// Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
