import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store/index'
import axios from 'axios'
import Vuex from 'vuex'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueMobileDetection from 'vue-mobile-detection'

Vue.use(Vuex)
Vue.use(VueMobileDetection)
window.axios = axios
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
