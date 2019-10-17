import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import 'materialize-css/dist/js/materialize.min';
import './registerServiceWorker';

export const EventEmmiter = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
