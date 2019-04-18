<template>
  <div class="mod_slide">
    <div class="mod_slide_inner">
      <ul class="mod_slide_list">
        <li class="mod_slide_list_item">
          <img src="http://jdc.jd.com/img/750x340">
        </li>
        <li class="mod_slide_list_item">
          <img src="http://jdc.jd.com/img/750x340">
        </li>
        <li class="mod_slide_list_item">
          <img src="http://jdc.jd.com/img/750x340">
        </li>
      </ul>
    </div>
    <div class="mod_slide_indexs">
      <span class="mod_slide_indexs_item"></span>
      <span class="mod_slide_indexs_item cur"></span>
      <span class="mod_slide_indexs_item"></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.mod_slide {
  .mod_slide_inner {
    overflow: hidden;
    .mod_slide_list {
      font-size: 0;
      font-family: none;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      overflow: hidden;
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .mod_slide_list_item {
        width: 100%;
        position: relative;
        height: 0;
        overflow: hidden;
        padding-top: 45.33333%;
        display: inline-block;
        vertical-align: top;
        img {
          width: 100%;
          height: auto;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
  .mod_slide_indexs {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 2.66667vw;
    font-size: 0;
    .mod_slide_indexs_item {
      display: inline-block;
      width: 1.06667vw;
      height: 1.06667vw;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 1.06667vw;
      &:not(:last-child) {
        margin-right: 1.33333vw;
      }
      &.cur {
        background-color: #e4393c;
      }
    }
  }
}
</style>
