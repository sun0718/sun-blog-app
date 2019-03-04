<template>
    <div class="detail-page">
        <Breadcrumb></Breadcrumb>
        <sunWrapper>
            <div slot="left">
                <article class="detail-holder">
                    <div class="detail-image">
                        <img src="@public/img/post-five.jpeg" alt="....">
                    </div>
                    <div class="detail-other-information-holder">
                        <div class="detail-category">
                            <div class="detail-meta-category">
                                <span><a href="#">Lifestyle</a></span>
                                <span><a href="#">Health</a></span>
                                <span><a href="#">Art</a></span>
                            </div>
                        </div>
                        <div class="detail-title">
                            <h2>That evening at bali beach was wounderful then any other evening</h2>
                        </div>
                        <!-- // post-title -->
                        <div class="detail-extra-meta">
                            <el-row>
                                <el-col :lg="12" :md="12" :sm="12" :xs="24">
                                    <div class="detail-author">
                                        <img src="@/assets/images/author.jpg" alt="....">
                                        <span><a href="#">Sparkle Themes</a></span>
                                    </div>
                                </el-col>
                                <el-col :lg="12" :md="12" :sm="12" :xs="24">
                                    <div class="detail-date">
                                        <span><a href="#">8 january 2018</a></span>
                                    </div>
                                </el-col>
                            </el-row>
                            <!-- // row -->
                        </div>
                        <!-- // post-extra-meta -->
                        <div class="detail-the-content">
                            <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                            </p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                            </p>
                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolorum debitis, numquam natus vitae mollitia vel fuga quae maiores repellat laborum, libero aliquam voluptate omnis, quibusdam, suscipit veritatis nesciunt ea. Iusto sit quae repellat nisi!</blockquote>
                            <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                        </div>
                        <!-- // post-the-content  -->
                        <div class="detail-share">
                            <AriticlSocial></AriticlSocial>
                        </div>
                        <div class="tags-meta-and-others">
                            <div class="detail-tags">
                                <span><a href="#">lifestyle</a></span>
                                <span><a href="#">Trending</a></span>
                            </div>
                            <div class="view-count">
                                <span class="display-view-count"><i class="fa fa-eye" aria-hidden="true"></i> 568 Views</span>
                            </div>
                        </div>
                    </div>
                    <!-- // single-page-information-holder -->
                </article>
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

import AriticlSocial from '@/components/AriticlSocial.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name:'DetailPage',
    components:{
        Breadcrumb,
        AriticlSocial
    }
}
</script>

<style lang="less">

@sun:red;
.detail-holder{
    border: 1px solid #e0e0e0;
    margin-bottom: 40px;
    padding-bottom: 30px;
    .detail-other-information-holder{
        padding: 0 30px;
        overflow: hidden;
        .detail-meta-category{
            padding-top: 30px;
            text-align: center;
            span{
                padding-right: 5px;
                font-family: "Spectral SC",serif;
                text-transform: uppercase;
                a{
                    color: #111;
                    &::after{
                        content: ',';
                        display: inline-block;
                        padding-left: 2px;
                    }
                }
                &:last-child{
                    a::after{
                        content: ''
                    }
                }
            }
        }
        .detail-title{
            padding: 20px 0;
            text-align: center;
        }
        .detail-extra-meta{
            padding: 5px 0 20px 0;
            text-align: center;
            .detail-author{
                img{
                    height: 44px;
                    width: 44px;
                    border: 1px solid #e0e0e0;
                    border-radius: 50%;
                    transform: translateX(-5px);
                    vertical-align: middle;
                    border: 1px solid #e0e0e0;
                    display: inline-block;
                    margin-right: 10px;
                }
                span{
                    position: relative;
                    font-family: "Spectral SC",serif;
                    text-transform: uppercase;
                    padding-right: 30px;
                    a{
                        color: #111;
                    }
                }
            }
            .detail-date{
                span{
                    position: relative;
                    font-family: "Spectral SC",serif;
                    text-transform: uppercase;
                    padding-right: 30px;
                    line-height: 44px;
                    a{
                        color: #111;
                    }
                }
            }
        }
        .detail-the-content{
            text-align: left;
            text-indent: 32px;
            p{
                padding-bottom: 15px;
            }
            blockquote {
                padding: 20px 20px;
                margin: 0 0 20px;
                font-size: 16px;
                border-left: 5px solid #e0e0e0;
            }
        }
        .detail-share{
            margin-top: 15px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            border-bottom: 1px solid #e0e0e0;
            padding: 20px 0;
            
        }
        .tags-meta-and-others{
            padding-top: 30px;
            .detail-tags{
                float: left;
                span{
                    position: relative;
                    font-family: "Spectral SC",serif;
                    text-transform: uppercase;
                    padding: 0 30px 0 15px;
                    &::before{
                        content: '#';
                        position: absolute;
                        left: 0px;
                        bottom: -6px;
                        font-size: 24px;
                    }
                    a{
                        color: #111;
                    }
                }
            }
            .view-count{
                float: right;
            }
        }
    }
}
</style>
