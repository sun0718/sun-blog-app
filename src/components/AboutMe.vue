<template>
    <div class="aboutMe">
        <div class="about-me-profile">
            <img src="@public/img/aboutMe.jpg" alt="...">
        </div>
        <div class="author-info-holder">
            <div class="author-name">
                <h3>孙继龙</h3>
                <span class="author-profession">Died Blogger</span>
            </div>
            <div class="author-bio">
                <p>I love you not for who you are, but for who I am with you.</p>
            </div>
            <div class="author-social">
                <ul class="social-links">
                    <li><a href="https://facebook.com"></a></li>
                    <li><a href="https://twitter.com"></a></li>
                    <li><a href="https://instagram.com"></a></li>
                    <li><a href="https://youtube.com"></a></li>
                    <li><a href="https://snapchat.com"></a></li>
                </ul>
            </div>
            <div class="author-signature">
                <!-- <img src="./assets/dist/img/post/man/signature-one.jpg" alt="..."> -->
            </div>
        </div>
        <!-- // aboutMe -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
.aboutMe{
    border: 1px solid #e0e0e0;
    margin-bottom: 40px;
    .about-me-profile{
        position: relative;
        overflow: hidden;
        img{
            transition: all 0.6s;
            &:hover{
                transform: scale(1.3)
            }
        }
    }
    .author-info-holder{
        padding: 20px 30px 20px;
        .author-name{
            padding-top: 10px;
            h3{
                padding-bottom: 10px;
                font-family: "Microsoft-soft",sans-serif;
            }
            span{
                padding-bottom: 10px;
                font-size: 14px;
                display: inline-block;
                text-transform: uppercase;
                color: #0078D7;
            }
        }
    }
    .author-social{
        padding: 20px 0;
        .social-links{
            li{
                display: inline-block;
                margin-right: 5px;
                a{
                    width: 35px;
                    height: 35px;
                    border: 1px solid #e0e0e0;
                    border-radius: 100%;
                    padding: 6px;
                    vertical-align: middle;
                    display: inline-block;
                    text-align: center;
                    line-height: 20px;
                    &:hover::before{
                        color:#fff
                    }
                    &:before{
                        font-family: 'FontAwesome';
                        font-size: 16px;
                        color: #111;
                        transition: all 0.7s ease;
                        height: 0px;
                        display: inline-block;
                        font-size: 16px;
                    }
                }
                &:first-child{
                    a:hover{
                        background-color: #4267B2;
                    }
                    a:before{
                        content: "\f09a";
                    }
                }
                &:nth-child(2){
                    a:hover{
                        background-color: #1DA1F2;
                    }
                    a:before{
                        content: "\f099";
                    }
                }
                &:nth-child(3){
                    a:hover{
                        background-color: #8A33A4;
                    }
                    a:before{
                        content: "\f16d";
                    }
                }
                &:nth-child(4){
                    a:hover{
                        background-color: red;
                    }
                    a:before{
                        content: "\f16a";
                    }
                }
                &:last-child{
                    a:hover{
                        background-color: #FFD600;
                    }
                    a:before{
                        content: "\f2ac";
                    }
                }
            }
        }
    }
}
</style>

