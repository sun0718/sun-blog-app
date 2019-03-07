import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "@/components/blog/About.vue";
import DetailPage from "@/components/blog/DetailPage.vue";
import SearchPage from "@/components/blog/ArticleList.vue";

import componentUI from '../components/index'

Vue.use(Router);
Vue.use(componentUI);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect : '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: { title : '博客首页'},
      children:[
        {
          path: "/home",
          name: "home",
          component: resolve => require(['../components/blog/Dashborad.vue'], resolve),
          meta: { title: '博客首页' }
        },
        {
          path: "/about",
          name: "about",
          meta: { title: '自我简介' },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: About
        },
        {
          path: "/detailPage",
          name: "DetailPage",
          component: DetailPage
        },
        {
          path: "/search",
          name: "Search",
          component: SearchPage
        },
        {
          path: "/article-list",
          name: "article-list",
          component: SearchPage
        }
      ]
    },
    {
      path: '/admin',
      component: resolve => require(['@/views/Admin.vue'], resolve),
      meta: { title: '自述文件' },
      children:[
          {
              path: 'dashboard',
              component: resolve => require(['@/components/admin/Dashboard.vue'], resolve),
              meta: { title: '系统首页' }
          },
          {
              path: 'icon',
              component: resolve => require(['@/components/admin/Icon.vue'], resolve),
              meta: { title: '自定义图标' }
          },
          {
              path: 'table',
              component: resolve => require(['@/components/admin/BaseTable.vue'], resolve),
              meta: { title: '基础表格' }
          },
          {
              path: 'tabs',
              component: resolve => require(['@/components/admin/Tabs.vue'], resolve),
              meta: { title: 'tab选项卡' }
          },
          {
              path: 'form',
              component: resolve => require(['@/components/admin/BaseForm.vue'], resolve),
              meta: { title: '基本表单' }
          },
          {
              // 富文本编辑器组件
              path: 'editor',
              component: resolve => require(['@/components/admin/VueEditor.vue'], resolve),
              meta: { title: '富文本编辑器' }
          },
          {
              // markdown组件
              path: 'markdown',
              component: resolve => require(['@/components/admin/Markdown.vue'], resolve),
              meta: { title: 'markdown编辑器' }    
          },
          {
              // 图片上传组件
              path: 'upload',
              component: resolve => require(['@/components/admin/Upload.vue'], resolve),
              meta: { title: '文件上传' }   
          },
          {
              // vue-schart组件
              path: 'charts',
              component: resolve => require(['@/components/admin/BaseCharts.vue'], resolve),
              meta: { title: 'schart图表' }
          },
          {
              // 拖拽列表组件
              path: 'drag',
              component: resolve => require(['@/components/admin/DragList.vue'], resolve),
              meta: { title: '拖拽列表' }
          },
          {
              // 拖拽Dialog组件
              path: 'dialog',
              component: resolve => require(['@/components/admin/DragDialog.vue'], resolve),
              meta: { title: '拖拽弹框' }
          },
          {
              // 权限页面
              path: 'permission',
              component: resolve => require(['@/components/admin/Permission.vue'], resolve),
              meta: { title: '权限测试', permission: true }
          },
          {
              path: '/404',
              component: resolve => require(['@/components/admin/404.vue'], resolve),
              meta: { title: '404' }
          },
          {
              path: '/403',
              component: resolve => require(['@/components/admin/403.vue'], resolve),
              meta: { title: '403' }
          },
          {
            path: '/login',
            component: resolve => require(['@/components/admin/Login.vue'], resolve)
          },
          {
              path: '*',
              redirect: '/404'
          }
        ]
    }
  ]
});
