<template>
  <el-aside width='200px' class="blog-navbar">
    <!-- nav icon -->
    <div class="navbar-icon d-flex-row">
      <h1 class="navbar-brand">
        <a href="https://demo.nicetheme.xyz/ashley-style-2">
          <img
            src="https://demo.nicetheme.xyz/ashley-style-2/wp-content/themes/Ashley/images/logo.png"
            alt="Ashley主题"
          >
        </a>
      </h1>
      <el-button
        type="button"
        class="text-white navbar-button"
        style="background: transparent;border: none;"
        icon="fa fa-reorder"
      ></el-button>
    </div>
    <!-- main menu -->
    <div class="main-menu">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#283149"
        text-color="#7a8b9a"
        active-text-color="#00818a"
      >>
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
        <a href="https://www.nicetheme.cn" target="_blank" class="pr-2 text-light">
          <i class="fa fa-weixin"></i>
        </a>
        <a class="btn-search text-light">
          <i class="fa fa-search"></i>
        </a>
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      navList: [
        {
          icon: "el-icon-lx-home",
          index: "dashboard",
          title: "博客首页"
        },
        {
          icon: "el-icon-lx-calendar",
          index: "2",
          title: "文章分类",
          subs: [
            {
              index: "form",
              title: "基本表单"
            },
            {
              index: "3-2",
              title: "三级菜单",
              subs: [
                {
                  index: "editor",
                  title: "富文本编辑器"
                },
                {
                  index: "markdown",
                  title: "markdown编辑器"
                }
              ]
            },
            {
              index: "upload",
              title: "文件上传"
            }
          ]
        },
        {
          icon: "el-icon-lx-calendar",
          index: "3",
          title: "时间轴线",
          subs: [
            {
              index: "form",
              title: "基本表单"
            },
            {
              index: "3-2",
              title: "三级菜单",
              subs: [
                {
                  index: "editor",
                  title: "富文本编辑器"
                },
                {
                  index: "markdown",
                  title: "markdown编辑器"
                }
              ]
            },
            {
              index: "upload",
              title: "文件上传"
            }
          ]
        },
        {
          icon: "el-icon-lx-emoji",
          index: "icon",
          title: "个人简介"
        }
      ]
    };
  },
  methods: {
    handleOpen: () => {},
    handleClose: () => {}
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
    }
  }
  .navbar-icon {
    padding: 3em 1.5rem;
    text-align: left;
    @media screen and (max-width: 992px) {
      & {
        padding: 1rem;
      }
    }
    .navbar-brand{
      @media screen and (max-width: 992px) {
        & {
          padding: 0 2rem;
        }
      }
    }
    .navbar-button {
      margin-left: auto;
      display: none;
      font-size: 2rem;
      @media screen and (max-width: 992px) {
        & {
          display: inline-block;
        }
      }
    }
  }
  .main-menu {
    @media screen and (max-width: 992px) {
      & {
        display: none;
      }
    }
    .el-menu-vertical-demo {
      border-right: none;
      text-align: left;
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
