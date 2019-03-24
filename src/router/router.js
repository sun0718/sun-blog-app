import Vue from "vue";
import Router from "vue-router";
import Blog from "../views/Blog.vue";
import Home from "@/components/blog/Home.vue";

import componentUI from '@/components/index'

Vue.use(Router);
Vue.use(componentUI);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect : '/blog'
    },
    {
      path: '/blog',
      component: Blog,
      meta: { title : '博客首页'},
      children:[
        {
          path: "/",
          name: "home",
          component: Home,
          meta: { title: '博客首页' }
        },
        {
          path: "/post",
          name: "post",
          meta: { title: '自我简介' },
          component: resolve => require(['@/components/blog/common/PostDetail.vue'], resolve),
        },
        {
          path: "/some",
          name: "some",
          component: resolve => require(['@/components/blog/common/Classification.vue'], resolve),
          // component: DetailPage
        },
        {
          path: "/search",
          name: "Search",
          // component: SearchPage
        },
        {
          path: "/article-list",
          name: "article-list",
          // component: SearchPage
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['@/components/admin/Login.vue'], resolve)
    },
    {
      path: '/admin',
      component: resolve => require(['@/views/Admin.vue'], resolve),
      redirect:'/admin/dashboard',
      meta: { title: '自述文件' },
      children:[
          {
              path: 'dashboard',
              name: '',
              component: resolve => require(['@/components/admin/Dashboard.vue'], resolve),
              meta: { title: '系统首页' }
          },
          {
              path: 'post',
              name: '',
              component: resolve => require(['@/components/admin/Post.vue'], resolve),
              meta: { title: '文章管理' }
          },
          {
              path: 'post/:id',
              name: 'post-article',
              component: resolve => require(['@/components/admin/PostEditor.vue'], resolve),
              meta: { title: '新建文章' }
          },
          {
              path: 'user',
              name: 'user',
              component: resolve => require(['@/components/admin/User.vue'], resolve),
              meta: { title: '用户管理' }
          },
          {
              path: 'msg',
              name: 'msg',
              component: resolve => require(['@/components/admin/MsgCenter.vue'], resolve),
              meta: { title: '消息管理' }
          },
          {
              // 图片上传组件
              path: 'form/upload',
              name: 'upload',
              component: resolve => require(['@/components/admin/Upload.vue'], resolve),
              meta: { title: '文件上传' }   
          },
          {
              // 权限页面
              path: 'permission',
              name: '',
              component: resolve => require(['@/components/admin/Permission.vue'], resolve),
              meta: { title: '权限测试', permission: true }
          },
          {
              path: '404',
              component: resolve => require(['@/components/admin/404.vue'], resolve),
              meta: { title: '404' }
          },
          {
              path: '403',
              component: resolve => require(['@/components/admin/403.vue'], resolve),
              meta: { title: '403' }
          },
          {
              path: '*',
              redirect: '/admin/404'
          }
        ]
    }
  ]
});
