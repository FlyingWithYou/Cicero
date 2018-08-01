// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from '@/router'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import { LoadingPlugin } from 'vux'
import './assets/iconfont/iconfont.css'

FastClick.attach(document.body)

Vue.use(infiniteScroll)
Vue.use(LoadingPlugin)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
