import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
locale.use(lang);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
