import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import './common/stylus/index.styl'
import axios from 'axios'
Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  echarts,
  render: h => h(App)
})
