import Vue from 'vue'
import App from './App.vue'
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";
Vue.config.productionTip = false
Vue.use(VueScrollFixedNavbar);
new Vue({
  render: h => h(App),
}).$mount('#app')
