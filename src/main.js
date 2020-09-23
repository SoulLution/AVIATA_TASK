import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/main.scss'

Vue.config.productionTip = false

// components
import button from './components/button.vue'
import checkBox from './components/check-box.vue'
import popupMin from './components/popup-min.vue'

Vue.component('vButton', button)
Vue.component('vCheckBox', checkBox)
Vue.component('vPopupMin', popupMin)


// axios
import axios from 'axios';

Vue.prototype.$axios = axios;

// functions
import functions from './assets/functions.js';

Vue.prototype.$f = functions;


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
