<template>
    <div class="Social">
        <div class="Social-content">
            <div class="Social-title">
                <h2>I'M social</h2>
            </div>
            <div class="Social-extra-info-holder">
                <div class="Social-links">
                    <ul class="Social-links-list">
                        <li class="facebook-link">
                            <a href="http://facebook.com" class="clearfix" target="_blank">
                                Facebook                                
                                <span class="social-icon">
                                <i class="fa fa-facebook"></i>
                                    </span>                             
                                </a>
                        </li>
                        <li class="twitter-link">
                            <a href="http://twitter.com" class="clearfix" target="_blank">
                                    Twitter                             
                                    <span class="social-icon">
                                        <i class="fa fa-twitter"></i>
                                    </span>
                                </a>
                        </li>
                        <li class="googleplus-link">
                            <a href="http://plus.google.com" class="clearfix" target="_blank">
                                    Google Plus                             
                                    <span class="social-icon">
                                        <i class="fa fa-google-plus"></i>
                                    </span>
                                </a>
                        </li>
                        <li class="instagram-link">
                            <a href="http://instagram.com" class="clearfix" target="_blank">
                                    Instagram                              
                                        <span class="social-icon">
                                        <i class="fa fa-instagram"></i>
                                            </span>
                                </a>
                        </li>
                        <li class="linkedin-link">
                            <a href="http://linkedin.com" class="clearfix" target="_blank">
                                    Linked In                              
                                    <span class="social-icon">
                                        <i class="fa fa-linkedin"></i>
                                    </span>
                                </a>
                        </li>
                        <li class="youtube-link">
                            <a href="http://youtube.com" class="clearfix" target="_blank">
                                    Youtube                             
                                <span class="social-icon">
                                        <i class="fa fa-youtube"></i>
                                    </span>
                                </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- // widget-extra-info-holder -->
        </div>
        <!-- // widget-content -->
    </div>
</template>

<style lang="less" scoped>
.Social{
    border: 1px solid #e0e0e0;
    margin-bottom: 40px;
    .Social-title {
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
    .Social-extra-info-holder{
        padding: 20px 20px 30px 20px;
        .Social-links-list {
            padding-left: 0px;
            margin-left: 0px;
            list-style: none;
            text-align: left;
            li{
                a{
                    padding: 8px 5px 8px 15px;
                    border: 1px solid #e0e0e0;
                    margin-bottom: 7px;
                    display: block;
                    transition: 0.7s;
                    color: #111;
                    span{
                        text-align: center;
                        float: right;
                        width: 40px;
                        border-left: 1px dotted #e0e0e0;
                    }
                }
                &:hover a{
                    transition: 0.7s;
                    color: #fff;
                }
                &:first-child:hover a{
                        background-color:#4267B2;
                }
                &:nth-child(2):hover a{
                        background-color:#1DA1F2;;
                }
                &:nth-child(3):hover a{
                        background-color: #DC4C40;
                }
                &:nth-child(4):hover a{
                        background-color: #8A33A4;
                }
                &:nth-child(5):hover a{
                        background-color: #0274B3;
                }
                &:last-child:hover a{
                        background-color: red;
                }
            }
        }
    }
}
</style>

