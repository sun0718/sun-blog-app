<template>
  <div id="app">
    <el-scrollbar style="height:100%">
      <sunHeader />
      <router-view />
      <sunFooter />
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name:'',
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
}
</style>
