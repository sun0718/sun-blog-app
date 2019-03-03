import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import axiosApi from './api/axios';
import 'element-ui/lib/theme-chalk/display.css';
import '@public/font-awesome/css/font-awesome.min.css';
// import axios from 'axios';
// 安装babel-plugin-components插件控制ele按需引入
import { Button, Select, Row, Col, Menu, MenuItem, Submenu, Carousel, CarouselItem, Scrollbar ,Pagination} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import '../public/common.css'

Vue.config.productionTip = false;

Vue.use(axiosApi);
// Vue.prototype.axios = axios;

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Menu.name, Menu);
Vue.component(Col.name, Col);
Vue.component(Row.name, Row);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Submenu.name, Submenu);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Scrollbar.name, Scrollbar);
Vue.component(Pagination.name, Pagination);

console.log(process.env.VUE_APP_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
