<template>
  <div id="tag_cloud" class="widget">
    <div class="widget-title border-top">标签</div>
    <div class="tagcloud">
      <router-link v-for="item in tags" :to="'/blog/class/'+item.tag" :key="item.id">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return{
      tags :[]
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      this.$get('/tagList').then((res)=>{
        console.log(res)
        this.tags= res.result
      })
    }
  }
}
</script>


<style lang="less">
#tag_cloud{
    a{
        position: relative;
        font-size: .875rem !important;
        letter-spacing: 1px;
        line-height: 12px;
        text-transform: uppercase;
        display: inline-block;
        margin: 0 .75rem 0.5rem 0;
        &::before{
            content: '#';
            font-size: .875rem;
            display: inline-block;
            color: #8a92a9;
            margin-right: 5px;

        }
    }
}
</style>

