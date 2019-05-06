import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.axios = axios

Vue.prototype.api = "/"
Vue.prototype.api = "http://127.0.0.1"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
