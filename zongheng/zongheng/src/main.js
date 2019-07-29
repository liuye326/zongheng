import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './font/iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入axios.js文件
import axios from "./axios"
Vue.use(MintUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
