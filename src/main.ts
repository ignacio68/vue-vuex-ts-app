import Vue from 'vue';
import '@/plugins/axios';
import '@/plugins/bootstrap-vue';
import '@/plugins/vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import {Http} from '@/namespaces/Http';

Vue.config.productionTip = false;

new Http.ApiJwtService();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
