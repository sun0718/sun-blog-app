import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import DetailPage from "../views/DetailPage.vue";
import SearchPage from "../views/ArticleList.vue";

import componentUI from '../components/index'

Vue.use(Router);
Vue.use(componentUI);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/DetailPage",
      name: "DetailPage",
      component: DetailPage
    },
    {
      path: "/Search",
      name: "Search",
      component: SearchPage
    },
    {
      path: "/article-list",
      name: "article-list",
      component: SearchPage
    }
  ]
});
