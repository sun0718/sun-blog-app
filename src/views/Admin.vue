<template>
  <div class="admin">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <v-tags></v-tags>
      <el-scrollbar class="content" style="height:100%;overflow-y:hidden">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import vHead from "@/components/admin/common/Header.vue";
import vSidebar from "@/components/admin/common/Sidebar.vue";
import vTags from "@/components/admin/common/Tags.vue";

import bus from "@/components/admin/common/bus";
export default {
  data() {
    return {
      tagsList: [],
      collapse: false,
      isLoading: true
    };
  },
  components: {
    vHead,
    vSidebar,
    vTags
  },
  mounted() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });

    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on("tags", msg => {
      let arr = [];
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
    // console.log(this.$get('/',string))
    // new Promise((resolve,reject)=>{
    //     this.$get('/',string)
    // })
  },
  watch:{
      
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
  }
}
.content-box {
  position: absolute;
  left: 200px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
  &.content-collapse {
    left: 65px;
  }
  .content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
  }
}
</style>

