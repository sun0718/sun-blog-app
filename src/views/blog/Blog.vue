<template>
  <el-container style="height:100%">
    <sun-Menu></sun-Menu>
    <div class="home-content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <sun-footer />
  </el-container>
</template>

<style lang="less">
.el-container {
  flex-direction: column;
  .home-content {
    padding-left: 330px;
    padding-right: 100px;
    max-width: 2140px;
    padding-top: 6.4rem;
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
      padding-right: 0;
      padding-left: 0;
      padding-top: 9rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    .home-content {
      padding-top: 9rem;
    }
  }
}
</style>

