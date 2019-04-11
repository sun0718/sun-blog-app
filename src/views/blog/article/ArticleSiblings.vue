<template>
  <div class="blog-router d-flex-row clearfix">
    <div v-if="Object.keys(prevBlog) !== 0" class="prev flex text-center">
      上一篇：
      <router-link :to="{path:'/blog',query:{id:prevBlog.id}}">{{prevBlog.title}}</router-link>
    </div>
    <div v-if="Object.keys(nextBlog) !== 0" class="next flex text-center">
      下一篇：
      <router-link :to="{path:'/blog',query:{id:nextBlog.id}}">{{nextBlog.title}}</router-link>
    </div>
  </div>
</template>

<script>
import { watch } from 'fs';
export default {
  name:'',
  data(){
    return{
        prevBlog:{},
        nextBlog:{}
    }
  },
  props:["sibling"],
  mounted(){
    this.prevBlog = this.sibling.prevBlog
    this.nextBlog = this.sibling.nextBlog
  },
  watch:{
    sibling(value){
      this.prevBlog = value.prevBlog
      this.nextBlog = value.nextBlog
    }
  }
}
</script>


<style lang="less">
.blog-router{
    width: 80%;
    margin: 2rem auto 1rem;
    font-size: .85rem;
    flex-wrap: wrap;
    a{
      font-size: .85rem;
    }
}
</style>
