<template>
    <article class="article">
        <div class="article-image">
            <img src="@public/img/post-eight.jpeg" alt="....">
        </div>
        <!-- // article image -->
        <div class="article-title">
            <h2>That evening at bali beach was wounderful then any other evening</h2>
        </div>
        <!-- // article-title -->
        <div class="article-content clearfix layout-one-first-letter">
            <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </p>
        </div>
        <!-- // article-content -->
        <div class="article-permalink">
            <a href="#">Continue Reading</a>
        </div>
        <!-- // article-permalink -->
        <div class="article-meta-and-share">
            <el-row class="row">
                <el-col :lg="7" :md='7' :sm="7" :xs="24">
                    <div class="article-author">
                        <a href="#">Sparkle Themes</a>
                    </div>
                </el-col>
                <!-- // col 4 -->
                <el-col :lg="10" :md='10' :sm="10" :xs="24">
                    <ul class="article-share">
                        <li class="list-share list-share-facebook">
                            <a href="#" class="list-share-link">
                                <i class="fa fa-facebook list-share-logo"></i>
                            </a>
                        </li>
                        <li class="list-share list-share-twitter">
                            <a href="#" class="list-share-link">
                                <i class="fa fa-twitter list-share-logo"></i>
                            </a>
                        </li>
                        <li class="list-share list-share-email">
                            <a target="_self" href="mailto:?subject=Optimistic%20Blog&amp;body=https%3A%2F%2Foffshorethemes.com%2Fhtml%2Foptimistic-blog%2Fdemo%2Findex.php%23" class="list-share-link">
                                <i class="fa fa-at list-share-logo"></i>
                            </a>
                        </li>
                        <li class="list-share list-share-pinterest">
                            <a href="#" class="list-share-link">
                                <i class="fa fa-pinterest list-share-logo"></i>
                            </a>
                        </li>
                        <li class="list-share list-share-pocket">
                            <a href="#" class="list-share-link">
                                <i class="fa fa-get-pocket list-share-logo"></i>
                            </a>
                        </li>
                        <li class="list-share list-share-googleplus">
                            <a href="#" class="list-share-link">
                                <i class="fa fa-google list-share-logo"></i>
                            </a>
                        </li>
                        <li class="list-share list-share-linkedin">
                            <a href="#" class="list-share-link">
                                <i class="fa fa-linkedin list-share-logo"></i>
                            </a>
                        </li>
                    </ul>
                </el-col>
                <!-- // col 4 -->
                <el-col :lg="7" :md='7' :sm="7" :xs="24">
                    <div class="article-comment-count">
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
export default {
  name: "article",
  data(){
    return{
      
    }
  }
}
</script>


<style lang="less">
article.article{
    border: 1px solid #e0e0e0;
    margin-bottom: 40px;
    text-align: center;
    .article-image{
        overflow: hidden;
        img{
            max-width: 100%;
            transition: all 0.6s;
            &:hover{
                transform: scale(1.4)
            }
        }
    }
    .article-title{
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
    .article-content{
        padding: 10px 30px 15px;
    }
    .article-permalink{
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
    .article-meta-and-share{
            border-top: 1px solid #e0e0e0;
            padding: 10px 20px;
            margin-top: 40px;
            .article-author{
                text-align: left;
            }
            .article-comment-count{
                text-align: right;
            }
            .article-share{
                .list-share{
                    display: inline-block;
                    margin: 0 8px;
                    border: none;
                }
                .list-share-facebook a{
                    color: #3b5998;
                    &:hover{
                        color: #2d4373;
                    }
                }
                .list-share-pocket a{
                    color: #ef4056;
                    &:hover{
                        color: #e9132e;
                    }
                }
                .list-share-googleplus a{
                    color: #ef4056;
                    &:hover{
                        color: #c23321;
                    }
                }
                .list-share-pinterest a{
                    color: #cb2027;
                    &:hover{
                        color: #9f191f;
                    }
                }
                .list-share-linkedin a{
                    color: #007bb6;
                    &:hover{
                        color: #005983
                    }
                }
                .list-share-email a{
                    color: #3490F3;
                    &:hover{
                        color: #0e76e6;
                    }
                }
                .list-share-twitter a{
                    color: #00aced;
                    &:hover{
                        color: #0087ba
                    }
                }
            }
            .article-author,.article-comment-count{
                a{
                    color: #111;
                    font-family: "Spectral SC",serif;
                    font-size: 14px;
                    text-transform: uppercase;
                    transition: color 200ms ease-in-out;
                }
            }
            @media screen and (max-width: 768px){
                .article-author,.article-comment-count{
                    text-align: center;
                }
            }
    }
}
</style>

