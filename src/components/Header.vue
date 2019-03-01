<template>
    <header>
        <div class="header-top-wrapper">
            <div class="container">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="search">
                        <i class="el-icon-search hidden-xs-only"></i>
                        <input type="search" placeholder="Search ..........">
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="social-networks">
                        <ul class="social-links">
                            <li>
                                <a href="https://weibo.com/p/1005051846702114/home"></a>
                            </li>
                            <li>
                                <a href="https://weibo.com/p/1005051846702114/home"></a>
                            </li>
                            <li>
                                <a href="https://weibo.com/p/1005051846702114/home"></a>
                            </li>
                            <li>
                                <a href="https://weibo.com/p/1005051846702114/home"></a>
                            </li>
                            <li>
                                <a href="https://weibo.com/p/1005051846702114/home"></a>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="container">
            <div class="site-info">
                <h1 class="site-title">SunJilong blog</h1>
            </div>
        </div>
        <div class="line"></div>
        <nav class="main-nav">
            <a href="#" class="menu-toggle" @click="menuClick">
                <i class="el-icon-menu"></i> 
                Menu
            </a>
            <el-menu :default-active="activeIndex" class="main-nav-menu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">HOME</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">ARTICLE</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">IMAGES</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" >IMAGES</el-menu-item>
                <el-menu-item index="4" >ABOUT</el-menu-item>
                <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">MESSAGEBOARD</a></el-menu-item>
            </el-menu>
            <el-menu v-if="menuShow" default-active="activeIndex" class="main-nav-menu-vertical" @select="handleSelect">
                <a href="#" class="close-menu" @click="menuClick"><i class="el-icon-close"></i> <span>Close</span></a>
                <el-menu-item index="1">HOME</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">ARTICLE</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">IMAGES</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" >IMAGES</el-menu-item>
                <el-menu-item index="4" >ABOUT</el-menu-item>
                <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">MESSAGEBOARD</a></el-menu-item>
                <div class="social_share_btn">
                    <h3 class="">Subscribe</h3>
                    <ul>
                        <li class="li-facebook"><a href="#" target="_blank"><i class="fa fa-facebook"></i> Facebook</a></li>
                        <li class="li-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i> Twitter</a></li>
                        <li class="li-google-plus"><a href="#" target="_blank"><i class="fa fa-google-plus"></i> Google +</a></li>
                        <li class="li-pinterest"><a href="#" target="_blank"><i class="fa fa-pinterest-p"></i> Pinterest</a></li>
                    </ul>
                </div>
            </el-menu>
        </nav>
    </header>
</template>
<script>
export default {
  name: "sunHeader",
  data() {
      return {
        activeIndex: '1',
        menuShow:false,
      };
    },
    mounted(){
        this.$get('/apis/string')
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      menuClick(){
        this.menuShow = !this.menuShow
        console.log(this.menuShow)
      }
    }
};
</script>

<style lang="less">

@mainColor : #4267B2;
@border : rgba(0,0,0,0.15);

.container{
    margin: 0 -15px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.rounded-corners (@radius: 5px) {
    -webkit-border-radius: @radius;
    -moz-border-radius: @radius;
    -ms-border-radius: @radius;
    -o-border-radius: @radius;
    border-radius: @radius;
}

header{
    .header-top-wrapper{
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 20px;
        padding: 15px 0 15px 0;
        .container{
            .search{
                float: left;
                text-align: left;
                i{
                    font-weight: 700;
                    margin-right: 10px;
                    font-size: 18px;
                    position: relative;
                    top: 5px;
                }
                input{
                    border: 0;
                    border-bottom: 1px solid #111;
                    width: 80px;
                    letter-spacing: 2px;
                    font-weight: bold;
                    font-size: 12px;
                    padding: 5px 0px 5px 5px;
                    outline: 0px;
                    transition: 0.5s all cubic-bezier(0.55, 0, 0.1, 1);
                }
                input:focus{
                    width: 200px;
                }
            }
            .social-networks{
                float: right;
                .social-links{
                    list-style: none;
                    text-align: right;
                    li{
                        display: inline-block;
                        margin-right: 5px;
                        a{
                            width: 35px;
                            height: 35px;
                            border: 1px solid #e0e0e0;
                            position: relative;
                            border-radius: 100%;
                            padding: 6px;
                            vertical-align: middle;
                            display: inline-block;
                            text-align: center;
                            line-height: 20px;
                            &:before{
                                font-family: 'FontAwesome';
                                font-size: 16px;
                                color: #111;
                                transition: all 0.7s ease;
                            }
                            &:hover::before{
                                color:#fff
                            }
                        }
                        &:first-child a{
                            &::before{
                                content: "\f09a";
                            }
                            &:hover{
                               background-color: #4267B2;
                            }
                        }
                        &:nth-child(2) a{
                            &::before{
                                content: "\f099";
                            }
                            &:hover{
                               background-color: #1DA1F2;
                            }
                        }
                        &:nth-child(3) a{
                            &::before{
                                content: "\f16d";
                            }
                            &:hover{
                               background-color: #8A33A4;
                            }
                        }
                        &:nth-child(4) a{
                            &::before{
                                content: "\f16a";
                            }
                            &:hover{
                               background-color: red;
                            }
                        }
                        &:last-child a{
                            &::before{
                                content: "\f2ac";
                            }
                            &:hover{
                               background-color: #FFD600;
                            }
                        }
                    }
                }
            }
            @media screen and (max-width: 786px){
                & .search,
                & .social-networks .social-links{
                    text-align: center;
                    padding: 10px 0;
                    margin: 15px 0;
                }
                & .search input{
                    width: 150px;
                    border-bottom: 1px solid #d1d1d1;
                    text-align: center;
                }
            }
        }
    }
    .container{
        max-width: 100%;
        .site-info{
            text-align: center;
            padding: 10px 0;
            margin: 10px 0px 30px 0px;
            h1{
                font-family: "Stalemate",cursive;
                font-size: 72px;
                font-weight: 400;
            }
        }
    }
    .main-nav{
        padding: 0 10px;
        overflow: hidden;
        letter-spacing: 1px;
        .menu-toggle{
            display: none;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 18px;
            float: left;
        }
        .el-menu{
            display: table;
            margin: 0 auto;
            &.el-menu--horizontal{
                border-bottom: 0;
                .el-menu-item:hover{
                    color: @mainColor
                }
                .el-submenu__title:hover{
                    color: @mainColor
                }
            }
            &.main-nav-menu-vertical{
                position: fixed;
                top: 0;
                left: 0;
                z-index: 100000;
                width: 100%;
                height: 100%;
                max-width: 100%;
                overflow-x: hidden;
                overflow-y: auto;
                text-align: left;
                &>li,&>a:first-child{
                    font-size: 18px;
                    border-bottom: 1px solid @border;
                    .el-menu--inline{
                        margin: 0;
                        background: #d1d1d1;
                        width: 100%;
                    }
                }
                li>div,li>a{
                    font-size: 18px;
                    text-decoration: none;
                }
                .close-menu{
                    display: inline-block;
                    width: 100%;
                    line-height: 56px;
                    text-transform: uppercase;
                    text-decoration: none;
                    font-size: 18px;
                }
                .social_share_btn{
                    margin: 20px 0 30px;
                    font-size: 30px;
                    ul{
                        margin-top: 20px;
                        li{
                            display: block;
                            margin: 0;
                            float: left;
                            width: 25%;
                            a{
                                display: block;
                                padding: 10px 4px;
                                text-align: center;
                                color: #fff;
                                cursor: pointer;
                                -ms-transition: all .3s ease-out;
                                transition: all .3s ease-out;
                                text-decoration: none;
                                font-size: 12px;
                                text-transform: uppercase;
                                font-weight: 600;
                                border: 1px solid transparent;
                                i{
                                    display: block;
                                    height: 32px;
                                    width: 32px;
                                    margin: 0 auto 5px;
                                    border-radius: 25px;
                                    line-height: 32px;
                                    font-size: 16px;
                                    text-align: center;
                                }
                            }
                            &:nth-child(1) a{
                                background: #3b5998;
                                border-color: #3b5998;
                                i{
                                    background: #486dba;
                                    text-shadow: #283d6c 1px 1px, #283d6c 2px 2px, #283d6c 3px 3px, #293f6f 4px 4px, #2a4173 5px 5px, #2b4376 6px 6px, #2d457a 7px 7px, #2e477d 8px 8px, #2f4981 9px 9px, #314b84 10px 10px, #324d88 11px 11px, #334f8b 12px 12px, #35518f 13px 13px, #365392 14px 14px, #375596 15px 15px, #39579a 16px 16px;
                                }
                            }
                            &:nth-child(2) a{
                                background: #50abf0;
                                border-color: #50abf0;
                                i{
                                    background: #6fbaf3;
                                    text-shadow: #3878a8 1px 1px, #3878a8 2px 2px, #3878a8 3px 3px, #397bad 4px 4px, #3b7fb3 5px 5px, #3d83b8 6px 6px, #3f87be 7px 7px, #418bc3 8px 8px, #438fc9 9px 9px, #4493ce 10px 10px, #4697d4 11px 11px, #489bd9 12px 12px, #4a9fdf 13px 13px, #4ca3e4 14px 14px, #4ea7ea 15px 15px, #50abf0 16px 16px;
                                }
                            }
                            &:nth-child(3) a{
                                background: #df4a32; 
                                border-color: #df4a32;
                                i{
                                    background: #e76454;
                                    text-shadow: #9c3423 1px 1px, #9c3423 2px 2px, #9c3423 3px 3px, #a13524 4px 4px, #a63725 5px 5px, #ab3926 6px 6px, #b03a27 7px 7px, #b53c28 8px 8px, #ba3e29 9px 9px, #c03f2b 10px 10px, #c5412c 11px 11px, #ca432d 12px 12px, #cf442e 13px 13px, #d4462f 14px 14px, #d94830 15px 15px, #df4a32 16px 16px;
                                }
                            }
                            &:nth-child(4) a{
                                background: #cc2127;
                                border-color: #cc2127;
                                i{
                                    background: #e1373d;
                                    text-shadow: #901415 1px 1px, #901415 2px 2px, #901415 3px 3px, #941415 4px 4px, #991516 5px 5px, #9e1617 6px 6px, #a21617 7px 7px, #a71718 8px 8px, #ac1819 9px 9px, #b01819 10px 10px, #b5191a 11px 11px, #ba1a1b 12px 12px, #be1a1b 13px 13px, #c31b1c 14px 14px, #c81c1d 15px 15px, #cd1d1e 16px 16px;
                                }
                            }
                        }
                    }
                }
            }
        }
        
        @media screen and (max-width: 786px){
            .menu-toggle{
                display: block
            }
            & .main-nav-menu{
                display: none;
            }
        }
    }
}
</style>
