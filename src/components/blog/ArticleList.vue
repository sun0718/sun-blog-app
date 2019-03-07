<template>
    <div class="article-list">
        <sunWrapper>
            <div slot="left">
                <div class="article-search-head">
                    <h2>Search result for : <span>Something</span></h2>
                </div>
                <LittleArticleSearch></LittleArticleSearch>
                <LittleArticleSearch></LittleArticleSearch>
                <LittleArticleSearch></LittleArticleSearch>
                <LittleArticleSearch></LittleArticleSearch>
                <LittleArticleSearch></LittleArticleSearch>
                <LittleArticleSearch></LittleArticleSearch>
                <LittleArticleSearch></LittleArticleSearch>
                <LittleArticleSearch></LittleArticleSearch>
            </div>
            <div slot="right">
                <aside class="sidebar">
                    <AboutMe></AboutMe>
                    <Social></Social>
                    <PecentPost></PecentPost>
                    <Categroy></Categroy>
                    <TrendingPosts></TrendingPosts>
                </aside>
            </div>
        </sunWrapper>
    </div>
</template>
<script>
import AboutMe from '@/components/blog/AboutMe.vue'
import RightSocial from '@/components/blog/RightSocial.vue'
import PecentPost from '@/components/blog/PecentPost.vue'
import Categroy from '@/components/blog/RightCategroy.vue'
import TrendingPosts from '@/components/blog/TrendingPosts.vue'
import AriticlSocial from '@/components/blog/AriticlSocial.vue'
import LittleArticleSearch from '@/components/blog/LittleArticleSearch.vue'
export default {
    name:'articleList',
    components:{
        AriticlSocial,
        TrendingPosts,
        Categroy,
        PecentPost,
        RightSocial,
        AboutMe,
        LittleArticleSearch
    }
}
</script>


<style lang="less">
.article-list{
    .article-search-head{
        text-transform: uppercase;
        margin-bottom: 40px;
        text-align: left;
        span{
            color: #0078D7;
        }
    }
}
</style>
