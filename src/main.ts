import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue';
import Nav from '@/components/Nav.vue';

Vue.config.productionTip = false

Vue.component('Layout',Layout)
Vue.component('Nav',Nav)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
