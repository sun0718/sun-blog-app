import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import axiosApi from './api/axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/display.css';
import '@/assets/css/main.css';
import '@public/font-awesome/css/font-awesome.min.css';
// import axios from 'axios';
// 安装babel-plugin-components插件控制ele按需引入

import 'element-ui/lib/theme-chalk/index.css';
import '../public/common.css'

Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(axiosApi);
// Vue.prototype.$axios = axiosApi;

window.Vue =  new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
