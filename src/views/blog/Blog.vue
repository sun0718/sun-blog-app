<template>
  <el-container style="height:100%">
    <sun-Menu></sun-Menu>
    <div class="home-content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
      <sun-footer />
    </div>
  </el-container>
</template>

<style lang="less">
.el-container {
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  .home-content {
    padding-left: 330px;
    padding-right: 100px;
    max-width: 2140px;
    padding-top: 6.4rem;
    overflow-y: auto;
  }
  @media screen and (max-width: 1600px) {
    .home-content {
      padding-left: 320px;
    }
  }

  @media screen and (max-width: 1200px) {
    .home-content {
      padding-left: 290px;
      padding-right: 80px;
    }
  }

  @media screen and (max-width: 1100px) {
    .home-content {
      padding-right: 2rem;
      padding-left: 2rem;
      width: 100%;
      margin-top: 6.4rem;
      padding-top: 2rem;
      height: 100vh;
    }
  }

  @media screen and (max-width: 600px) {
    .home-content {
      padding-right: 0rem;
      padding-left: 0rem;
    }
  }
}
</style>

