<template>
  <div id="recent-posts" class="widget">
    <div class="widget-title border-top">近期文章</div>
    <ul>
      <li v-for="item in postList" :key="item.id">
        <router-link class='d-block' :to="'blog/post/'+item.id" >{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'',
  props:['postList']
}
</script>


<style lang="less">
#recent-posts{
    ul{
        padding-left: 1rem;
        li{
            list-style: circle;
            margin-bottom: .5rem;
            a{
                font-size: .875rem;
            }
        }
    }
}
</style>

