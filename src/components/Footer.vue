<template>
    <footer class="general-footer">
    <div class="footer-mask"></div>
    <div class="footer-inner">
        <div class="container">
            <div class="copyright-and-nav-row">
                <el-row class="row">
                    <el-col :lg=12 :md=12 :sm=12 :xs=24>
                        <div class="copyrights">
                            <p>Copyrights @ 2017 SunJilong</p>
                        </div>
                        <!-- // copyrights -->
                    </el-col>
                    <el-col :lg=12 :md=12 :sm=12 :xs=24>
                        <ul class="footer-navigation">
                            <li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Health</a></li>
                            <li><a href="#">Travel</a></li>
                            <li><a href="#">Article</a></li>
                        </ul>
                    </el-col>
                </el-row>
                <!-- // row -->
            </div>
            <!-- // copyright-and-nav-row -->
        </div>
        <!-- // container -->
    </div>
    <!-- // footer inner -->
</footer>
</template>

<script>
export default {
    name:'sunFooter'
}
</script>



<style lang="less">
footer{
    position: relative;
    background-color: #010101;
    color: #eee;
    padding: 10px 0 10px 0;
    background-size: cover;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-position: center center;
    .mask{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.8);
        transition-duration: 0.7s;
    }
    .footer-inner{
        .container{
            @media (min-width: 768px){
                width: 750px;
            }
            @media (min-width: 992px){
                width: 970px;
            }
            @media (min-width: 1200px){
                width: 1170px;
            }
           .copyright-and-nav-row{
                padding: 25px 0;
                .copyrights{
                    p{
                        text-align: left;
                    }
                }
                .footer-navigation{
                    text-align: right;
                    li{
                        display: inline-block;
                        padding-right: 15px;
                        a{
                            color: #eee;
                            &:hover{
                                color: #0078D7;
                            }
                        }
                    }
                }
           }
        }
    }
}
</style>
