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
import AboutMe from '@/components/AboutMe.vue'
import RightSocial from '@/components/RightSocial.vue'
import PecentPost from '@/components/PecentPost.vue'
import Categroy from '@/components/RightCategroy.vue'
import TrendingPosts from '@/components/TrendingPosts.vue'
import AriticlSocial from '@/components/AriticlSocial.vue'
import LittleArticleSearch from '@/components/LittleArticleSearch.vue'
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
