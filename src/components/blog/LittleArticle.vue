<template>
    <el-row class="media">
        <el-col :lg="24" :md="24" :sm="24" :xs="24">
            <div class="media-left">
                <a href="#"><img src="@public/img/370x300-2.jpg" alt=""></a>
            </div>
            <!-- /.Post image -->
            <div class="media-body">
                <div class="media-body-header">
                    <div class="media-body-cat"><span>In</span> <a href="#">Lifestyle</a></div>
                    <h3 class="media-body-heading"><a href="#">that a reader will be distracted.</a></h3>
                    <div class="entry-meta">
                        <span class="entry-date"><i class="fa fa-calendar-o" aria-hidden="true"></i><time datetime="2018-01-21T19:00">Jan 21, 2018</time></span> 
                        <span class="comment-link"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i>9 Comments</a></span>
                    </div>
                    <!-- /.Post meta -->
                </div>
                <p class="hidden-md-only">There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                <div class="element-block">
                    <a href="#" class="btn">Reading ⇾</a>
                    <!-- /.Post button -->
                    <div class="media-body-share">
                        <a class="smedia facebook fa fa-facebook" href="#"></a>
                        <a class="smedia twitter fa fa-twitter" href="#"></a>
                        <a class="smedia googleplus fa fa-google-plus" href="#"></a>
                    </div>
                    <!-- /.Post social share -->
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<style lang="less">
.media{
    padding-bottom: 20px;
    margin: 0 0 20px;
    border-bottom: 1px dashed #eaeaea;
    overflow: hidden;
    .media-left{
        float: left;
        padding-right: 20px;
        a{
            position: relative;
            overflow: hidden;
            display: block;
            img{
                width: 300px;
                transform: scale(1);
                transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                @media (max-width: 1199px) and (min-width: 860px){
                    width: 175px;
                }
                @media (max-width: 860px) and (min-width: 768px){
                    width: 130px;
                }
            }
        }
        @media (max-width: 550px) and (min-width: 0px){
            & a img{
                width:100%;
            }
            & {
                padding-right: 0;
                width: 100%;
                padding-bottom: 10px;
            }
        }
    }
    .media-body{
        overflow: hidden;
        zoom: 1;
        text-align: left;
        .media-body-header{
            padding-bottom: 20px;
            .media-body-cat{
                span{
                    font-style: italic;
                    margin-right: 5px;
                    color: rgba(72, 72, 72, 0.5);
                    font-family: 'Playfair Display', serif;
                }
                a{
                    position: relative;
                    display: inline-block;
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    margin-right: 5px;
                    color: #d17c78;
                }
            }
            .media-body-heading{
                color: #222;
                font-weight: 600;
                font-family: 'Playfair Display', serif;
                line-height: 1.5;
                a{
                    color: #222;
                }
            }
            .entry-meta{
                span{
                    display: inline-block;
                    position: relative;
                    font-weight: 500;
                    margin-right: 8px;
                }
                & span, & span a {
                    color: rgba(72, 72, 72, 0.5);
                    font-size: 13px;
                    @media screen and (min-width: 768px){
                        font-size: 10px
                    }
                }
                i{
                    margin-right: 5px;
                }
            }
        }
        p{
            font-weight: 400;
            margin: 0 0 20px;
        }
        .element-block{
            .btn{
                display: inline-block;
                color: #d17c78;
                padding: 6px 20px;
                font-size: 16px;
                border-radius: 0;
                border-radius: 2em;
                border: 1px dashed #d17c78;
                transition: color .3s ease-out,border .3s ease-out,background .3s ease-out;
                &:hover{
                    color: #fff;
                    background-color: #d17c78
                }
            }
            .media-body-share{
                width: 32px;
                height: 32px;
                border: 1px solid #eaeaea;
                float: right;
                position: relative;
                line-height: 31px;
                text-align: center;
                cursor: pointer;
                margin-top: 4px;
                &::before{
                    content: "\f1e0";
                    font: normal normal normal 14px/1 FontAwesome;
                    position: absolute;
                    top: 9px;
                    left: 9px;
                }
                .smedia {
                    position: absolute;
                    display: inline;
                    opacity: 0;
                    width: 32px;
                    height: 32px;
                    z-index: 100;
                    background: no-repeat;
                    right: 0;
                    transition: all 0.3s;
                    border: 1px solid #eaeaea;
                    top: -1px;
                    line-height: 31px !important;
                    font-size: 14px;
                    color: #fff;
                    overflow: hidden;
                }
                &:hover > .smedia{
                    opacity: 1;
                }
                &:hover > :nth-child(1){
                    right:34px;
                    background: #3b5998;
                    border-color: #3b5998;
                }
                &:hover > :nth-child(2){
                    right:69px;
                    background: #50abf0;
                    border-color: #50abf0;
                }
                &:hover > :nth-child(3){
                    right:104px;
                    background: #df4a32; 
                    border-color: #df4a32;
                }
            }
        }
        @media (max-width: 550px) and (min-width: 0px){
            & {
                width: 100%;
            }
        }
    }
}
</style>

