<template>
  <div class="admin">
    <sun-header></sun-header>
    <div class="main-con d-flex-row">
      <sun-sidebar></sun-sidebar>
      <div class="content-box">
        <sun-tags></sun-tags>
        <el-scrollbar class="content" style="height:100%;overflow-y:hidden">
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <router-view></router-view>
            </keep-alive>
          </transition>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/store/bus";
export default {
  data() {
    return {
      tagsList: [],
      isLoading: true
    };
  },
  mounted() {
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on("tags", msg => {
      let arr = [];
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  }
};
</script>

<style lang="less">
.admin {
  .container {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0.5rem;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 992px;
    }
  }
}

.main-con {
  height: calc(100% - 4rem);
  @media screen and (max-width: 992px) {
    height: auto;
    display: block;
  }
  .content-box {
    width: 100%;
    padding-bottom: 30px;
    transition: left 0.3s ease-in-out;
    background: #f0f0f0;
    .content {
      width: auto;
      height: 100%;
      padding: 0.5rem;
      overflow-y: scroll;
      box-sizing: border-box;
    }
    @media screen and (max-width: 992px) {
      position: static;
    }
  }
}
</style>

