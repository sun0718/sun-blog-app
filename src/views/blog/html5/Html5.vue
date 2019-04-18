<template>
  <sun-wrapper>
    <div class="wx_wrap">
        <slide />
        <banner />
        <navMenu />
    </div>
  </sun-wrapper>
</template>

<script>
import slide from '@/views/blog/html5/children/Slide.vue'
import banner from '@/views/blog/html5/children/Banner.vue'
import navMenu from '@/views/blog/html5/children/Nav.vue'

export default {
  name:'html5',
  components:{
    slide,banner,navMenu
  }
}
</script>



<style lang="less" scoped>
.wx_wrap{
  height: 100%;
  margin: 0 auto;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  background-color: red;
  &>div{
    position: relative;
  }
}
</style>
