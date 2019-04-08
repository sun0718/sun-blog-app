import Vue from "vue";
import Router from "vue-router";
import Blog from "@/views/blog/Blog.vue";
import Home from "@/views/blog/home/Home.vue";

import componentUI from '@/components/index'

Vue.use(Router);
Vue.use(componentUI);

const router = new Router({
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
          component: Home
        },{
          path: "home",
          name: "home",
          component: Home
        },
        {
          path: "post/:id",
          name: "post",
          component: resolve => require(['@/views/blog/article/PostDetail.vue'], resolve),
        },
        {
          path: "some",
          name: "some",
          component: resolve => require(['@/views/blog/class/Classification.vue'], resolve),
          // component: DetailPage
        },
        {
          path: "search",
          name: "search",
          // component: SearchPage
        },
        {
          path: "about",
          name: "about ",
          component: resolve => require(['@/views/blog/about/AboutMe.vue'], resolve)
        },
        {
          path: "timeline",
          name: "timelinet",
          component: resolve => require(['@/views/blog/timeline/TimeLine.vue'], resolve),
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['@/views/admin/user/Login.vue'], resolve)
    },
    {
      path: '/admin',
      component: resolve => require(['@/views/admin/Admin.vue'], resolve),
      redirect:'/admin/dashboard',
      meta: { requireAuth: true,title: '系统首页' },
      children:[
          {
              path: 'dashboard',
              name: '',
              component: resolve => require(['@/views/admin/dashboard/Index.vue'], resolve),
              meta: { requireAuth: true,title: '系统首页' }
          },
          {
              path: 'post',
              name: '',
              component: resolve => require(['@/views/admin/post/Post.vue'], resolve),
              meta: { requireAuth: true,title: '文章管理' }
          },
          {
              path: 'post/post-article',
              name: 'post-article',
              component: resolve => require(['@/views/admin/post/PostEditor.vue'], resolve),
              meta: { title: '新建文章' }
          },
          {
            path: 'post/detail/:id',
            name: 'post-detail',
            component: resolve => require(['@/views/admin/post/PostDetail.vue'], resolve),
            meta: { title: '文章预览' }
          },
          {
              path: 'user',
              name: 'user',
              component: resolve => require(['@/views/admin/user/User.vue'], resolve),
              meta: { requireAuth: true ,title: '用户管理'}
          },
          {
              path: 'msg',
              name: 'msg',
              component: resolve => require(['@/views/admin/msg/MsgCenter.vue'], resolve),
              meta: { requireAuth: true,title: '消息中心' }
          },
          {
              // 图片上传组件
              path: 'form/upload',
              name: 'upload',
              component: resolve => require(['@/views/admin/post/Upload.vue'], resolve),
              meta: { title: '文件上传' }   
          },
          {
              // 权限页面
              path: 'permission',
              name: '',
              component: resolve => require(['@/views/admin/error/Permission.vue'], resolve),
              meta: { title: '权限测试', permission: true }
          },
          {
              path: '404',
              component: resolve => require(['@/views/admin/error/404.vue'], resolve),
              meta: { title: '404' }
          },
          {
              path: '403',
              component: resolve => require(['@/views/admin/error/403.vue'], resolve),
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

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = sessionStorage.getItem('SUN_WEB_TOKEN')
    if (token && token !== 'null') {
      next()
    } else {
      next('/login')
    }
  } else {
     next()
  }
})

export default router;
