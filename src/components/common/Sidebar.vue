<template>
  <el-aside :width="collapse?'64px':'200px'" style="transition:width .3s" class="blog-navbar">
    <!-- main menu -->
    <div class="admin-menu" v-if="menuHide">
      <el-menu
        :collapse="collapse"
        :default-active="onRoutes()"
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#283149"
        text-color="#7a8b9a"
        active-text-color="#00818a"
      >
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon" class="mr-1x"></i>
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
              <i :class="item.icon" class="mr-1x"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </el-aside>
</template>

<script>
import bus from "@/store/bus";

export default {
  name: "sunSidebar",
  data() {
    return {
      collapse: false,
      menuHide: true,
      screenWidth: "",
      items: [
        {
          icon: "fa fa-home",
          index: "/admin/dashboard",
          title: "系统首页"
        },
        {
          icon: "fa fa-file-text-o",
          index: "/admin/post",
          title: "文章管理"
        },
        {
          icon: "fa fa-user",
          index: "/admin/user",
          title: "用户管理"
        },
        {
          icon: "fa fa-envelope-square",
          index: "/admin/msg",
          title: "消息中心"
        }
      ]
    };
  },
  mounted() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    // 从bus获取collapse ,将值赋给collape
    bus.$on("collapseShow", msg => {
      this.collapse = msg;
    });
    bus.$on("menuHide", msg => {
      this.menuHide = msg;
    });

    this.getScreen()
    var _self = this
    window.onresize = ()=>{
      _self.getScreen()
    };
  },
  methods: {
    onRoutes() {
      return this.$route.path;
    },
    handleOpen() {},
    handleClose() {},
    handleSelect() {
      if (document.body.clientWidth <= 992) {
        this.menuHide = false;
      }
    },
    getScreen() {
      var screenWidth = document.body.clientWidth;
      var menuHide, collapse;
      if (screenWidth <= 992) {
        menuHide = false;
        collapse = false;
      } else if (screenWidth <= 1366) {
        collapse = true;
        menuHide = true;
      } else {
        collapse = false;
        menuHide = true;
      }
      console.log(collapse)
      bus.$emit("menuHide", menuHide);
      bus.$emit("collapseShow", collapse);
    }
  }
};
</script>


<style lang="less" scope>
.blog-navbar {
  @media screen and (max-width: 992px) {
    width: 100%;
    height: auto;
    .admin-menu {
      width: 100% !important;
      height: auto;
    }
  }
  .admin-menu {
    .el-menu-vertical-demo {
      border-right: none;
      &:not(.el-menu--collapse) {
        width: 100%;
        min-height: 400px;
      }
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
  }
}
</style>
