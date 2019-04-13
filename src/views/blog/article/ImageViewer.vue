<template>
  <div class="image-viewer-box">
    <div class="image-viewer">
      <div class="image-box" style="background-color: rgba(0, 0, 0, 0.65);">
        <img
          @click="hideImage"
          :src="imgUrl"
          class="image"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
      return{}
  },
  props:['imgUrl'],
  mounted() {
    this.imageShow();
  },
  methods: {
    imageShow() {
      var winH = document.body.clientHeight;
      var winW = document.body.clientWidth;
      var img = document.querySelector(".image-viewer-box img");
      var imgW, imgH;
      let realH = img.height;
      let realW = img.width;
      var scale = 0.8;
      if (realH > winH * scale) {
        imgH = winH * scale;
        imgW = (imgH / realH) * realH;
      } else if (realW > winW * scale) {
        imgW = winW * scale;
        imgH = (imgW / realW) * realH;
      } else {
        imgW = realW;
        imgH = realH;
      }
      
      var w = (winW - imgW) / 2;
      var h = (winH - imgH) / 2;

      img.width = imgW;
      img.height = imgH;
      img.style.top = h + 'px';
      img.style.left = w + 'px';
      img.className = 'image'

    },
    hideImage() {
       this.$emit('hide')
    }
  }
};
</script>


<style lang="less" scoped>
.image-viewer-box {
  .image-viewer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    .image-box {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 0;
      background-color: rgba(0, 0, 0, 0.8);
      overflow: auto;
      .image {
        position: absolute;
        transition: all .2s;
        cursor: zoom-out;
      }
    }
  }
}
</style>

