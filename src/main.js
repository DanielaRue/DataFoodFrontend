import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Trend from "vuetrend"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Trend)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
