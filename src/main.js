// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from '@/router'
import axios from 'axios'
import store from '@/store'
import infiniteScroll from 'vue-infinite-scroll'
import { LoadingPlugin, ConfirmPlugin, AlertPlugin } from 'vux'
import './assets/iconfont/iconfont.css'

FastClick.attach(document.body)

Vue.use(infiniteScroll)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
