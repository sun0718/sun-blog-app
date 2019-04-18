<template>
  <div class="loading" style="/* display: none; */">
    <div class="content">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <p>加载中...</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'sunLoading',
    mounted(){

    }
}
</script>


<style lang="less" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 1;
  z-index: 999;
  transition: transform 1s ease, opacity 1s ease;
  transform: scale3d(1, 1, 1);
  .content {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 70px;
    height: 70px;
    .spinner {
      width: 70px;
      height: 70px;
      position: relative;
      margin: 0 auto 16px auto;
      .double-bounce1,
      .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #03a9f4;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        animation: bounce 2s infinite ease-in-out;
      }
      .double-bounce2 {
        animation-delay: -1s;
      }
    }
  }
}

@keyframes bounce {
    0%,100%{
        transform: scale(0)
    }
    50%{
        transform: scale(1)
    }
}
</style>
