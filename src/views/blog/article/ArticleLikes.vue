<template>
  <div class="post-action text-center mt-2x">
    <el-button type="danger">
      <i class="fa fa-heart"></i> 喜欢
      <small>
        (
        <span class="like-count">11</span>)
      </small>
    </el-button>
  </div>
</template>


<style lang="less" scoped>
.post-like.current {
        background: #e45d6a;
        border-color: #e45d6a;
        box-shadow: 0px 5px 20px -3px rgba(228, 93, 106, 0.55) !important;
  }
</style>
