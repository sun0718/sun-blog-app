<template>
  <div id="app">
    <router-view />
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  &>div{
    height: 100%;
  }
}
</style>