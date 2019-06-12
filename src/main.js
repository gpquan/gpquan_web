import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "@/assets/common/css/reset.css"
import "@/assets/common/css/public.css"
import "@/assets/common/css/common.css"
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import axios from 'axios'
import {post,fetch,patch,put} from './global/http'

NutUI.install(Vue);
Vue.config.productionTip = false
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.use(axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
