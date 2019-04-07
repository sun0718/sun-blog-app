<template>
  <div class="blog-router clearfix">
    <div v-if="1" class="fl">
      上一篇：
      <router-link :to="{path:'/blog',query:{id:blog.prevBlog.id}}">{{blog.prevBlog.title}}</router-link>
    </div>
    <div v-if="2" class="fr">
      下一篇：
      <router-link :to="{path:'/blog',query:{id:blog.nextBlog.id}}">{{blog.nextBlog.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return{
      blog:{
        nextBlog:{
          id:'6',
          title:'下一个是我的弟弟'
        },
        prevBlog:{
          id:'8',
          title:'上一个是我的哥哥'
        }
      }
    }
  }
}
</script>


<style lang="less">
.blog-router{
    width: 80%;
    margin: 2rem auto 1rem;
    font-size: .85rem;
    a{
      font-size: .85rem;
    }
}
</style>
