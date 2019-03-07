<template>
  <div id="app">
    <el-scrollbar style="height:100%">
        <router-view />
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name:'',
  data:function(){
    return {
      admin:false
    }
  },
  mounted(){
  }
}
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .el-scrollbar {
    overflow-x: hidden;
  }
}
</style>