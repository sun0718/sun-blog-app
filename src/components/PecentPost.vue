<template>
    <div class="PecentPost">
        <div class="PecentPost-content">
            <div class="PecentPost-title">
                <h2>Recent posts</h2>
            </div>
            <el-carousel height="200px" class="PecentPost-main">
                <el-carousel-item v-for="item in 4" :key="item">
                    <div class="swiper-slide swiper-slide-active" style="width: 318px;">
                        <img src="@public/img/post-five.jpeg" alt="...">
                        <div class="mask"></div>
                        <div class="slide-content">
                            <div class="post-title">
                                <h5><a href="#">That Evening At Bali Beach Was Wounderful Then Any Other Mornings</a></h5>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- // widget-content -->
    </div>
</template>


<style lang="less">
.PecentPost{
    border: 1px solid #e0e0e0;
    margin-bottom: 40px;
    .PecentPost-content{
        .PecentPost-title{
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
        .PecentPost-main{
            padding: 20px 20px 30px 20px;
            .swiper-slide{
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>
