<template>
    <div class="TrendingPosts">
        <div class="TrendingPosts-content">
            <div class="TrendingPosts-title">
                <h2>Trending Posts</h2>
            </div>
            <div class="TrendingPosts-main">
                <ul class="TrendingPosts-listings">
                    <li>
                        <div class="posts">
                            <div class="post-thumb">
                                <img src="@public/img/four.jpg" alt=".....">
                            </div>
                            <div class="post-title">
                                <h5><a href="#">5 Reasons Why Ladies Prefer To Have Brown Hair And Black Dress</a></h5>
                            </div>
                            <div class="post-view-count">
                                <p>345 <span>comments</span></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- // widget-content -->
    </div>
</template>


<style lang="less">
.TrendingPosts{
    border: 1px solid #e0e0e0;
    margin-bottom: 40px;
    .TrendingPosts-content{
        .TrendingPosts-title{
            padding: 30px 20px 20px 20px;
            h2{
                overflow: hidden;
                position: relative;
                text-transform: uppercase;
                font-size: 24px;
                letter-spacing: 2px;
                font-family: "Spectral SC",serif;
                text-align: left;
                &::after{
                    content: "";
                    display: inline-block;
                    height: 0.7em;
                    vertical-align: bottom;
                    width: 100%;
                    margin-right: -100%;
                    margin-left: 10px;
                    border-top: 3px solid #111;
                }
            }
        }
        .TrendingPosts-main{
            padding: 20px 20px 30px 20px;
            .TrendingPosts-listings{
                li{
                    .posts{
                        border-bottom: 1px solid #e0e0e0;
                        padding-bottom: 20px;
                        margin-bottom: 20px;
                        overflow: hidden;
                        .post-thumb{
                            float: left;
                            max-width: 125px;
                            margin-right: 15px;
                            position: relative;
                            overflow: hidden;
                            img{
                                max-width: 100%;
                                vertical-align: middle;
                            }
                        }
                        .post-title{
                            text-align: left;
                        }
                        .post-view-count{
                            padding: 5px 0;
                            color: #0078D7;
                            p{
                                text-transform: uppercase;
                                font-size: 14px;
                                text-align: left;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
