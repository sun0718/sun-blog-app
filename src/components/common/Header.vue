<template>
  <div class="header d-flex-row d-flex-justify">
    <!-- 折叠按钮 -->
    <div class="logo d-flex-row">
      <div class="collapse-btn" @click="collapseChage">
        <i class="fa fa-th-large"></i>
      </div>
      <div class="logo-title">后台管理系统</div>
    </div>
    <div class="menu-btn" @click="menuChage">
      <i class="fa fa-th-large"></i>
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator ml-1x">
          <img src="@/assets/img/img.jpg">
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name ml-half" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="http://sunfafa.cn/about/" target="_blank">
              <el-dropdown-item>关于作者</el-dropdown-item>
            </a>
            <a href="https://github.com/sun0718/koa2-server" target="_blank">
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/store/bus";

export default {
  name: "sunHeader",
  data() {
    return {
      collapse: false,
      name: "admin",
      message: 2,
      menuHide: false
    };
  },
  computed: {
    username() {
      let username = sessionStorage.getItem("AcountName");
      return username ? username : this.name;
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        sessionStorage.removeItem("SUN_WEB_TOKEN");
        this.$router.push("/login");
      }
    },
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapseShow", this.collapse);
    },
    menuChage(){
        this.menuHide = !this.menuHide
        bus.$emit("menuHide", this.menuHide);
        bus.$emit("collapseShow", false);
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #283149;
  .logo {
    @media screen and(max-width: 992px) {
      display: none;
    }
    .collapse-btn {
      padding: 0 0.875rem;
      cursor: pointer;
      line-height: 4rem;
    }
    .logo-title {
      width: 200px;
      line-height: 4rem;
    }
  }
  .menu-btn {
    display: none;
    padding: 0 0.875rem;
    cursor: pointer;
    line-height: 4rem;
    @media screen and(max-width: 992px) {
      display: block;
    }
  }
}
.header-right {
  float: right;
  padding-right: 3rem;
  @media screen and (max-width: 992px) {
    padding-right: 0.5rem;
  }
  .header-user-con {
    display: flex;
    height: 4rem;
    align-items: center;
    .btn-bell {
      position: relative;
      .btn-bell-badge {
        position: absolute;
        right: 0;
        top: 4px;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #f56c6c;
        color: #fff;
      }
      .el-icon-bell {
        color: #fff;
      }
    }

    .user-avator {
      img {
        display: block;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }
    }
    .el-dropdown-link {
      color: #fff;
      cursor: pointer;
    }
    .el-dropdown-menu__item {
      text-align: center;
    }
  }
}
</style>
