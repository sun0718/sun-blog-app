import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 安装babel-plugin-components插件控制ele按需引入
import { Button, Select,Row, Col } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
