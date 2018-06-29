import Vue from 'vue';
import App from './App.vue';

import store from './store';
import './registerServiceWorker';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
Vue.config.productionTip = false;
console.log(process.env.NODE_ENV);
Vue.use(Buefy);
new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

(() => {
  store.commit('loadPomodoros');
  Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
  });
})();
