import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 安装babel-plugin-components插件控制ele按需引入
import { Button, Select, Row, Col, Menu, MenuItem, Submenu, Carousel, CarouselItem} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import '../public/common.css'

Vue.config.productionTip = false;

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Menu.name, Menu);
Vue.component(Col.name, Col);
Vue.component(Row.name, Row);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Submenu.name, Submenu);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
