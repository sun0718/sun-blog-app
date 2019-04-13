<template>
  <el-aside width="200px" class="blog-navbar">
    <!-- nav icon -->
    <div class="navbar-icon d-flex-row">
      <h1 class="navbar-brand">
        <a href="https://sunfafa.cn">
          <!-- <img
            src="@public/img/logo.png"
            alt=""
          >-->
          <embed
            src="https://cdn-img.easyicon.net/image/2019/panda-index.svg"
            width="60"
            height="60"
            type="image/svg+xml"
            pluginspage="http://www.adobe.com/svg/viewer/install/"
          >
        </a>
      </h1>
      <el-button
        ref="hBtn"
        type="button"
        class="text-white navbar-button"
        style="background: transparent;border: none;"
        icon="fa fa-reorder"
        @click="menuShow"
      ></el-button>
    </div>
    <!-- main menu -->
    <div class="main-menu" ref="menu">
      <el-menu
        default-active="dashboard"
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose"
        @select="menuShow"
        background-color="#283149"
        text-color="#7a8b9a"
        active-text-color="#00818a"
      >
        <template v-for="item in navList">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <span slot="title">{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item
                    v-for="(threeItem,i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                  >{{ threeItem.title }}</el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
      <!-- share -->
      <div class="navbar-share">
        <a href="javascript:" class="pr-2 text-light single-popup">
          <i class="fa fa-qq"></i>
        </a>
        <a href="javascript:" class="pr-2 text-light single-popup">
          <i class="fa fa-weibo"></i>
        </a>
        <a href="https://www.weixin.com" target="_blank" class="pr-2 text-light">
          <i class="fa fa-weixin"></i>
        </a>
        <a class="btn-search text-light" @click="showSearch">
          <i class="fa fa-search"></i>
        </a>
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {
  name: "sunMenu",
  data() {
    return {
      navList: [
        {
          index: "/blog/home",
          title: "博客首页"
        },
        {
          index: "/blog/article",
          title: "文章分类",
          subs: [
            {
              index: "/blog/class/work",
              title: "工作相关"
            },
            {
              index: "/blog/class/life",
              title: "生活旅游"
            },
            {
              index: "/blog/class/study",
              title: "前端学习"
            }
          ]
        },
        {
          index: "/blog/timeline",
          title: "时间轴线"
        },
        {
          index: "/blog/about",
          title: "个人简介"
        },
        {
          index: "/admin",
          title: "后台管理"
        }
      ]
    };
  },
  methods: {
    handleOpen: () => {},
    handleClose: () => {},
    menuShow() {
      if (document.body.clientWidth <= 992) {
        this.$refs.menu.style.display =
          this.$refs.menu.style.display == "none" ||
          this.$refs.menu.style.display == ""
            ? "block"
            : "none";
      }
    }
  }
};
</script>



<style lang="less">
.blog-navbar {
  background-color: #283149;
  height: 100%;
  overflow: hidden !important;
  @media screen and (max-width: 992px) {
    & {
      width: 100% !important;
      height: auto;
      text-align: center;
    }
  }
  .navbar-icon {
    padding: 3em 1.5rem;
    text-align: left;
    @media screen and (max-width: 992px) {
      & {
        padding: 0;
        line-height: 60px;
        .navbar-brand {
          padding: 0 2rem;
          img,
          embed {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    .navbar-button {
      margin-left: auto;
      display: none;
      font-size: 1.2rem;
      margin-right: 10px;
      @media screen and (max-width: 992px) {
        & {
          display: inline-block;
        }
      }
    }
  }
  .main-menu {
    @media screen and (max-width: 992px) {
      display: none;
      .el-menu-vertical-demo {
        width: 100% !important;
        min-height: auto !important;
      }
      .el-menu-vertical-demo > li,
      .el-submenu__title {
        font-weight: blod;
        text-align: center !important;
        font-weight: blod;
        font-size: 1rem;
        color: #fff !important;
      }
    }
    .el-menu-vertical-demo {
      border-right: none;
      text-align: left;
      width: 100% !important;
      .el-icon-arrow-down:before {
        content: "·";
        font-weight: 600;
        color: #00818a;
      }
      .el-menu-item:hover,
      .el-menu-item:hover span,
      .el-submenu .el-submenu__title:hover span {
        color: #00818a !important;
      }
    }
    .navbar-share {
      text-align: center;
      padding-top: 3rem;
      margin: 3rem 1.5rem;
      border-top: 1px solid #404b69;
      a {
        display: inline-block;
        color: #e8e9ea;
        padding-right: 1rem;
      }
    }
  }
}
</style>
