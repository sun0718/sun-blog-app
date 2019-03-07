<template>
    <article class="bigArticle">
        <div class="bigArticle-image">
            <img src="@public/img/post-eight.jpeg" alt="....">
        </div>
        <!-- // bigArticle image -->
        <div class="bigArticle-title">
            <h2>That evening at bali beach was wounderful then any other evening</h2>
        </div>
        <!-- // bigArticle-title -->
        <div class="bigArticle-content clearfix layout-one-first-letter">
            <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </p>
        </div>
        <!-- // bigArticle-content -->
        <div class="bigArticle-permalink">
            <a href="#">Continue Reading</a>
        </div>
        <!-- // bigArticle-permalink -->
        <div class="bigArticle-meta-and-share">
            <el-row class="row">
                <el-col :lg="7" :md='7' :sm="7" :xs="24">
                    <div class="bigArticle-author">
                        <a href="#">Sparkle Themes</a>
                    </div>
                </el-col>
                <!-- // col 4 -->
                <el-col :lg="10" :md='10' :sm="10" :xs="24">
                    <ArticleSocial></ArticleSocial>
                </el-col>
                <!-- // col 4 -->
                <el-col :lg="7" :md='7' :sm="7" :xs="24">
                    <div class="bigArticle-comment-count">
                        <a href="#">0 Comment</a>
                    </div>
                </el-col>
                <!-- // col 4 -->
            </el-row>
            <!-- // row -->
        </div>
    </article>
</template>
<script>
import ArticleSocial from './AriticlSocial.vue'

export default {
  name: "bigArticle",
  components:{
       ArticleSocial   
  },
  data(){
    return{
      
    }
  }
}
</script>


<style lang="less">
article.bigArticle{
    border: 1px solid #e0e0e0;
    margin-bottom: 40px;
    text-align: center;
    .bigArticle-image{
        overflow: hidden;
        img{
            transition: all 0.6s;
            &:hover{
                transform: scale(1.4)
            }
        }
    }
    .bigArticle-title{
        padding: 0 30px;
        h2{
            padding: 30px 0 15px 0;
            font-size: 30px;
            max-height: 130px;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            @media (max-width: 768px) {
                line-height: 1;
                max-height: 90px;
            }
        }
    }
    .bigArticle-content{
        padding: 10px 30px 15px;
    }
    .bigArticle-permalink{
        text-align: center;
        a{
            position: relative;
            display: inline-block;
            border: 2px solid #e0e0e0;
            padding: 10px 30px;
            text-transform: capitalize;
            transition-duration: 0.7s;
            &::after{
                content: '\f105';
                font-family: 'fontAwesome';
                position: absolute;
                right: 15px;
                top: 11px;
                color: #0078D7;
                transition-duration: 0.7s;
            }
            &:hover{
                background-color: #0078D7;
                color: #fff;
                transition-duration: 0.7s;
            }
            &:hover::after{
                color: #fff
            }
        }
    }
    .bigArticle-meta-and-share{
            border-top: 1px solid #e0e0e0;
            padding: 10px 20px;
            margin-top: 40px;
            .bigArticle-author{
                text-align: left;
            }
            .bigArticle-comment-count{
                text-align: right;
            }
            .bigArticle-author,.bigArticle-comment-count{
                a{
                    color: #111;
                    font-family: "Spectral SC",serif;
                    font-size: 14px;
                    text-transform: uppercase;
                    transition: color 200ms ease-in-out;
                }
            }
            @media screen and (max-width: 768px){
                .bigArticle-author,.bigArticle-comment-count{
                    text-align: center;
                }
            }
    }
}
</style>

