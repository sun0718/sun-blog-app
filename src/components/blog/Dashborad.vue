<template>
    <div class="home">
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
import Wrapper from '@/components/blog/common/Wrapper.vue'
import BigArticle from '@/components/blog/BigArticle.vue'
import LittleArticle from '@/components/blog/LittleArticle.vue'
import AboutMe from '@/components/blog/AboutMe.vue'
import RightSocial from '@/components/blog/RightSocial.vue'
import PecentPost from '@/components/blog/PecentPost.vue'
import Categroy from '@/components/blog/RightCategroy.vue'
import TrendingPosts from '@/components/blog/TrendingPosts.vue'

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
    // let offsetW = document.documentElement.offsetWidth || document.body.offsetWidth;
    // this.show = offsetW < 600 ? 1 : offsetW<1024 ?  2 :  3
    // setTimeout(()=>{
    //     console.log('img-----:'+this.$refs.imgHeight[0].height + 'px');
    //     this.carouselHeight = this.$refs.imgHeight[0].height + 'px';
    // },10)
    // this.$nextTick(()=>{
    //   window.onresize = function(){
    //     let offsetW = document.documentElement.offsetWidth || document.body.offsetWidth;
    //     this.show = offsetW < 600 ? 1 : offsetW<1024 ?  2 :  3;
    //     this.carouselHeight = this.$refs.imgHeight[0].height + 'px';
    //   }.bind(this);
    // })
  },
  methods:{
    goBack(){
      window.history.length > 1 ?this.$router.go(-1):this.$router.push('/')
    }
  }
};
</script>
