<template>
  <sun-wrapper>
    <div class="other-inner">
      <div class="post-header">
        <h2 class="post-title">时间轴线</h2>
      </div>
      <div class="post-content">
        <div class="archives">
          <div class="archives_item" v-for="(items,indexs) in postData" :key="indexs">
            <h2>{{`${indexs.slice(0,4)}年${indexs.slice(5-7)}日`}}</h2>
            <ul class="archives_list">
              <li v-for="(item,index) in items" :key="index">
                {{item.createTime.slice(9-11)}}日<a href="http://www.ptbird.cn/weex-module-dom.html">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </sun-wrapper>
</template>

<script>
export default {
  name: "timeline",
  data() {
    return {
      postData:[]
    };
  },
  mounted(){
    this.getData(1000)
  },
  methods:{
    getData(query){
      this.$get('/getPosts',{
        pagesize:query
      }).then((res)=>{
        var postData = res.result.list.allPost
        var postTimeLine = {}
        for(var item of postData){
          if(postTimeLine[item.createTime.slice(0,7)]){
             postTimeLine[item.createTime.slice(0,7)].push(item)
          }else{
            postTimeLine[item.createTime.slice(0,7)]=[]
            postTimeLine[item.createTime.slice(0,7)].push(item)
          }
        }
        console.log(postTimeLine)
        this.postData = postTimeLine
      })
    }
  }
};
</script>


<style lang="less">
.post-header {
  margin: 0 0 3rem;
  line-height: 2.5rem;
  font-size: 18px;
  display: block;
  .post-title {
    font-weight: 700;
    color: #16a085;
  }
}
.post-content {
  .archives {
    .archives_item {
      h2 {
        border-bottom: 1px solid rgb(238, 238, 238);
        padding-bottom: 0.3em;
        font-size: 1.3em;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
        line-height: 1.25;
      }
      .archives_list {
        padding-left: 2rem;
        margin-bottom: 1rem;
        li {
          list-style: disc;
        }
        a {
          color: #2eabfd;
          padding-left: 1rem;
        }
      }
    }
  }
  & > *:last-child {
    margin-bottom: 0 !important;
  }
  & > *:first-child {
    margin-top: 0 !important;
  }
}
</style>
