<template>
  <el-aside class="blog-navbar">
    <!-- nav icon -->
    <div class="navbar-top">
      <div class="navbar-logo">
        <a class="site-logo" href="https://sunfafa.cn">
          <img src="@public/img/logo.png" alt="首页" />
        </a>
      </div>
      <div class="navbar-search" :class="{'is-search': isSearch}">
        <el-form :model="search" class="navbar-search-form">
          <el-form-item label="Search for:">
            <el-input v-model="search.keys" placeholder="Type Keywords"></el-input>
          </el-form-item>
        </el-form>
        <el-tooltip class="item" effect="dark" content="Close Search" placement="right">
          <i class="el-icon-close navbar-search-close" @click="searchShow"></i>
        </el-tooltip>
      </div>
      <!-- end navbar-search -->

      <!-- toggles -->
      <a
        href="#0"
        class="navbar-search-trigger"
        :class="{'is-clicked':isClicked}"
        @click="searchShow"
      >
        <i class="el-icon-search"></i>
      </a>
      <a href="#0" class="navbar-menu-toggle" :class="{'is-clicked':isClicked}" @click="menuShow">
        <span>Menu</span>
      </a>
    </div>
    <!-- main menu -->
    <div class="main-menu" :class="{'is-clicked':isClicked}" ref="menu">
      <el-menu
        default-active="dashboard"
        class="el-menu-vertical-demo navbar-menu"
        router
        @open="handleOpen"
        @close="handleClose"
        @select="menuShow"
        background-color="#151515"
        text-color="rgba(255, 255, 255, 0.6)"
        active-text-color="#fff"
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
      <!-- social -->
      <div class="navbar-social">
        <a href="javascript:" class="pr-2 text-light single-popup">
          <i class="fa fa-qq"></i>
        </a>
        <a href="javascript:" class="pr-2 text-light single-popup">
          <i class="fa fa-weibo"></i>
        </a>
        <a href="https://www.weixin.com" target="_blank" class="pr-2 text-light">
          <i class="fa fa-weixin"></i>
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
      search: {
        keys: ""
      },
      isClicked: false,
      isSearch: false,
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
          index: "/blog/html5",
          title: "H5展示"
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
    menuShow() {
      this.isClicked = !this.isClicked;
    },
    searchShow() {
      this.isSearch = !this.isSearch;
    },
    handleClose() {},
    handleOpen() {}
  }
};
</script>

<style lang="less">
.el-aside.blog-navbar {
  height: 100%;
  width: 290px !important;
  display: flex;
  flex-flow: column nowrap;
  background-color: #151515;
  padding: 6.4rem 3.2rem 0 4.4rem;
  overflow: auto hidden;
  vertical-align: top;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 1000;
  .navbar-top {
    .navbar-logo {
      padding-left: 20px;
      .site-logo {
        display: block;
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
        transition: all 0.3s;
      }
    }
    .navbar-search {
      z-index: 2000;
      display: block;
      text-align: center;
      background-color: #ffffff;
      transition: all 0.3s;
      opacity: 0;
      visibility: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &.is-search {
        transition: opacity 0.5s;
        opacity: 1;
        visibility: visible;
      }
      .navbar-search-form {
        width: 100%;
        transform: translate3d(0, -50%, 0);
        position: absolute;
        top: 50%;
        .el-form-item {
          display: block;
          margin-right: 0;
          .el-form-item__label {
            float: none;
            text-align: center;
            font-size: 1.4rem;
          }
          .el-form-item__content {
            input {
              background-color: transparent;
              color: #000000;
              height: auto;
              width: 100%;
              font-family: "IBM Plex Sans", sans-serif;
              font-weight: 700;
              font-size: 6rem;
              line-height: 1.6;
              border: none;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
              max-width: 680px;
              padding-top: 0.8rem !important;
              padding-bottom: 0.8rem !important;
              margin: 0 auto;
              text-align: center;
            }
          }
          &::after {
            content: "Press Enter to begin your search.";
            display: block;
            letter-spacing: 0.6px;
            font-size: 1.6rem;
            margin-top: 3.2rem;
            text-align: center;
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
      .navbar-search-close {
        position: absolute;
        display: block;
        width: 45px;
        height: 45px;
        top: 21px;
        left: 50%;
        margin-left: -23px;
        text-shadow: none;
        color: transparent;
        &::before {
          color: #000000;
          cursor: pointer;
          font-weight: 600;
          font-size: 2.2rem;
        }
      }
    }
    .navbar-search-trigger {
      z-index: 1;
      display: block;
      color: #000;
      height: 16px;
      width: 16px;
      position: fixed;
      right: 40px;
      top: 6.4rem;
      &::before {
        content: "";
        display: block;
        width: 1px;
        height: calc(100vh - 200px);
        background-color: rgba(0, 0, 0, 0.1);
        position: fixed;
        right: 48px;
        top: auto;
        bottom: 0;
      }
      &::after {
        content: "Search";
        font-family: "Heebo", sans-serif;
        font-weight: 500;
        font-size: 11px;
        line-height: 1.6rem;
        text-transform: uppercase;
        letter-spacing: 5px;
        width: auto;
        transform: rotate(-90deg);
        transform-origin: 1.6rem 100%;
        position: absolute;
        top: 72px;
        left: 0;
      }
    }
    .navbar-menu-toggle {
      display: none;
      height: 42px;
      width: 42px;
      line-height: 42px;
      font-family: "IBM Plex Sans", sans-serif;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: rgba(255, 255, 255, 0.5);
      transition: all 0.3s;
      position: absolute;
      right: 4rem;
      top: 18px;
      &:hover,
      &:focus {
        color: #ffffff;
      }
      span {
        display: block;
        width: 16px;
        height: 2px;
        margin-top: -1px;
        background-color: #ffffff;
        transition: all 0.5s;
        font: 0/0 a;
        text-shadow: none;
        color: transparent;
        position: absolute;
        top: 50%;
        left: 9px;
        right: auto;
        bottom: auto;
        &::before,
        &::after {
          content: "";
          width: 24px;
          height: 100%;
          background-color: inherit;
          position: absolute;
          left: 0;
          transition: all 0.5s;
        }
        &::before {
          top: -8px;
        }
        &::after {
          bottom: -8px;
        }
      }
      &.is-clicked {
        span {
          background-color: rgba(255, 255, 255, 0);
          transition: all 0.1s;
          &::before,
          &::after {
            background-color: white;
          }
          &::before {
            top: 0;
            transform: rotate(135deg);
          }
          &::after {
            bottom: 0;
            transform: rotate(225deg);
          }
        }
      }
    }
  }
  .main-menu {
    flex: 1 0 0%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: stretch;
    max-width: 100%;
    background-color: #151515;
    margin-top: 3.2rem;
    .navbar-menu {
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
        color: #fff !important;
        transition: all 0.5s;
      }
    }
    .navbar-social {
      text-align: center;
      display: flex;
      padding-top: 3rem;
      margin: 3rem 0;
      border-top: 1px solid #404b69;
      a {
        cursor: pointer;
        display: inline-block;
        display: block;
        background-color: rgba(255, 255, 255, 0.04);
        color: rgba(255, 255, 255, 0.5);
        height: 3.6rem;
        width: 3.6rem;
        border-radius: 50%;
        position: relative;
        margin-right: 0.75rem;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          i::before {
            font-size: 2rem;
          }
        }
        i {
          z-index: 1;
          display: block;
          background-repeat: no-repeat;
          background-position: center center;
          transform: translate3d(-50%, -50%, 0);
          transition: all 0.3s;
          color: #fff;
          position: absolute;
          left: 50%;
          right: 0;
          top: 50%;
          &::before {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .el-aside.blog-navbar {
    width: 270px;
    padding-right: 2.8rem;
    padding-left: 4rem;
    .navbar-menu {
      font-size: 15.5px;
    }
  }
}
@media screen and (max-width: 1100px) {
  .el-aside.blog-navbar {
    height: 0;
    width: 100% !important;
    background: transparent;
    padding: 0;
    position: static;
    top: 0;
    bottom: auto;
    .navbar-top {
      z-index: 100;
      background: #111111;
      width: 100%;
      height: 78px;
      position: fixed;
      top: 0;
      left: 0;
      .navbar-logo {
        margin-top: 4px;
        transform: translate3d(0, -50%, 0);
        position: absolute;
        top: 50%;
        left: 4rem;
        img {
          height: 50px;
        }
      }
      .navbar-search {
        .el-form-item__content {
          input {
            max-width: none;
            width: 75%;
            font-size: 4.2rem;
          }
          &::after {
            font-size: 1.5rem;
          }
        }
      }
      .navbar-menu-toggle {
        z-index: 101;
        display: block;
      }
      .navbar-search-trigger {
        height: 20px;
        width: 20px;
        top: 29px;
        color: #fff;
        right: 9.8rem;
        i {
          display: block;
        }
        &::before,
        &::after {
          display: none;
        }
        &.is-clicked {
          display: none;
        }
      }
    }
    .main-menu {
      z-index: 99;
      background: #151515;
      opacity: 0;
      visibility: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
      margin: 0;
      overflow-y: auto;
      padding: 164px 60px 64px;;
      .navbar-menu {
        border-top: 1px dotted rgba(255, 255, 255, 0.04);
        li > span,
        div > span {
          font-size: 1.8rem;
        }
        li {
          font-size: 1.4rem;
        }
      }
      .navbar-social {
        margin-top: 8rem;
        a {
          height: 4.4rem;
          width: 4.4rem;
        }
      }
      &.is-clicked {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.5s;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .el-aside.blog-navbar {
    .navbar-top {
      .navbar-search {
        .el-form-item__content {
          input {
            font-size: 3.4rem !important;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .el-aside.blog-navbar .main-menu {
    padding: 152px 44px 64px;
  }
}
@media screen and (max-width: 400px) {
  .el-aside.blog-navbar {
    .navbar-top {
      .navbar-logo {
        left: 2rem;
      }
      .navbar-menu-toggle {
        right: 2rem;
      }
      .navbar-search-trigger {
        right: 6.8rem;
      }
      .navbar-search {
        .navbar-search-form {
          .el-form-item {
            .el-form-item__content {
              input {
                font-size: 2.6rem !important;
              }
            }
          }
        }
      }
    }
    .main-menu {
      .navbar-menu {
        padding: 80px 40px 64px;
      }
    }
  }
}
</style>
