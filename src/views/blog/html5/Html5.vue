<template>
  <div class="wx_wrap">
    <slide />
    <banner />
    <navMenu />
  </div>
</template>

<script>
import slide from "@/views/blog/html5/children/Slide.vue";
import banner from "@/views/blog/html5/children/Banner.vue";
import navMenu from "@/views/blog/html5/children/Nav.vue";

export default {
  name: "html5",
  components: {
    slide,
    banner,
    navMenu
  }
};
</script>



<style lang="less" scoped>
.wx_wrap {
  max-width: 900px;
  padding-bottom: 12rem;
  margin: 0 auto;
  height: 100%;
  & > div {
    position: relative;
  }
}
</style>
