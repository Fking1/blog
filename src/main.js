import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
