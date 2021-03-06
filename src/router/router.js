import Vue from "vue";
import Router from "vue-router";

import componentUI from '@/components/index'

Vue.use(Router);
Vue.use(componentUI);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect : '/blog'
    },
    {
      path: '/blog',
      component: resolve => require(['@/views/blog/Blog.vue'], resolve),
      meta: { title : '博客首页'},
      children:[
        {
          path: "/",
          name: "home",
          component: resolve => require(['@/views/blog/home/Home.vue'], resolve)
        },{
          path: "home",
          name: "home",
          component: resolve => require(['@/views/blog/home/Home.vue'], resolve)
        },
        {
          path: "post",
          name: "post",
          component: resolve => require(['@/views/blog/article/PostDetail.vue'], resolve),
        },
        {
          path: "post/:id",
          name: "postDetail",
          component: resolve => require(['@/views/blog/article/PostDetail.vue'], resolve),
        },
        {
          path: "class",
          name: "class",
          component: resolve => require(['@/views/blog/class/Classification.vue'], resolve),
          // component: DetailPage
        },
        {
          path: "class/:cate",
          name: "class",
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
          name: "timeline",
          component: resolve => require(['@/views/blog/timeline/TimeLine.vue'], resolve),
        },
        {
          path: "html5",
          name: "html5",
          component: resolve => require(['@/views/blog/html5/Html5.vue'], resolve),
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
              meta: { requireAuth: true, title: '系统首页' }
          },
          {
              path: 'post',
              name: '',
              component: resolve => require(['@/views/admin/post/Post.vue'], resolve),
              meta: { requireAuth: true, title: '文章管理' }
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
