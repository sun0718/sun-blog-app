<template>
  <div class="home">
    <el-carousel class="general-banner" :height="carouselHeight" trigger="click"  :interval = '5000'>
      <el-carousel-item v-for="(item,index) in 3" :key="index">
          <ul class="general-banner-inner">
            <li v-for="(item,index) in show" :key="index">
                <img ref="imgHeight" alt="myself" src="@public/img/two.jpg" />
                <div class="content-holder">
                    <div class="content-meta">
                        <a href="#" class="category">lifestyle</a>
                    </div>
                    <div class="content-title">
                        <h2><a href="#">This is featured post</a></h2>
                    </div>
                    <div class="posted-date">
                        <span class="posted-date">17 December, 2017</span>
                    </div>
                </div>
                <div class="mask"></div>
            </li>
          </ul>
      </el-carousel-item>
    </el-carousel>
    <sunWrapper>
      <div slot="left">
              <BigArticle></BigArticle>
              <LittleArticle></LittleArticle>
              <LittleArticle></LittleArticle>
              <LittleArticle></LittleArticle>
              <LittleArticle></LittleArticle>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
      </div>
      <div slot="right">
          <aside class="sidebar">
                  <AboutMe></AboutMe>
                  <RightSocial></RightSocial>
                  <PecentPost></PecentPost>
                  <Categroy></Categroy>
                  <TrendingPosts></TrendingPosts>
              </aside>
      </div>
    </sunWrapper>
  </div>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue'
import BigArticle from '@/components/BigArticle.vue'
import LittleArticle from '@/components/LittleArticle.vue'
import AboutMe from '@/components/AboutMe.vue'
import RightSocial from '@/components/RightSocial.vue'
import PecentPost from '@/components/PecentPost.vue'
import Categroy from '@/components/RightCategroy.vue'
import TrendingPosts from '@/components/TrendingPosts.vue'

export default {
  name: "home",
  data(){
    return{
      item: {

      },
      carouselHeight:'500px',
      show:3
    }
  },
  components:{
    Wrapper,
    BigArticle,
    AboutMe,
    LittleArticle,
    RightSocial,
    PecentPost,
    Categroy,
    TrendingPosts,
  },
  mounted(){
    // 可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
    let offsetW = document.documentElement.offsetWidth || document.body.offsetWidth;
    this.show = offsetW < 600 ? 1 : offsetW<1024 ?  2 :  3
    setTimeout(()=>{
        console.log('img-----:'+this.$refs.imgHeight[0].height + 'px');
        this.carouselHeight = this.$refs.imgHeight[0].height + 'px';
    },10)
    this.$nextTick(()=>{
      window.onresize = function(){
        let offsetW = document.documentElement.offsetWidth || document.body.offsetWidth;
        this.show = offsetW < 600 ? 1 : offsetW<1024 ?  2 :  3;
        this.carouselHeight = this.$refs.imgHeight[0].height + 'px';
      }.bind(this);
    })
  },
  methods:{
    goBack(){
      window.history.length > 1 ?this.$router.go(-1):this.$router.push('/')
    }
  }
};
</script>

<style lang="less">

.home{
  .el-carousel__item ul{
    overflow: hidden;
    height: 100%;
    display: flex;
    & li{
    position: relative;
    overflow: hidden;
    &:hover > .mask{
      background-color: transparent;
    }
    .mask{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(17,17,17,0.5);
      transition-duration: 0.7s;
    }
    .content-holder{
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      max-width: 550px;
      width: 100%;
      margin: 0 auto;
      top: 50%;
      transform: translateY(-50%);
      padding: 10px 30px;
      cursor: pointer;
      z-index: 2;
      &:hover{
        background-color: rgba(0,0,0,0.3);
      }
      &:hover + .mask{
        background-color:  rgba(17,17,17,0.5);
      }
      .content-title{
        h2{
          margin: 10px 0;
          a{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: block;
            font-size: 28px;
          }
        }
      }
      a,span{
        color: #fff;
      }
    }
  }
  }
}
</style>

