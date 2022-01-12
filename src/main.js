// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Common from './common/common'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/home.css'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css'; 
import store from './store'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.prototype.changeTimeDate = Common.changeTimeDate
Vue.prototype.changeTimeDate1 = Common.changeTimeDate1 
Vue.prototype.domainName = Common.domainName 
Vue.prototype.deepCopy = Common.deepCopy 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>',
})







