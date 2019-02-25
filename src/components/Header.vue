<template>
    <header class="header-inner">
        <div class="header-top-wrapper">
            <div class="header-top-inner">
                <el-row class="container">
                    <el-col :span="12">
                        <div class="search">
                            <i class="el-icon-search"></i>
                            <input type="search" placeholder="Search ..........">
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="social-networks">
                            <ul class="social-links">
                                <li>
                                    <a href="https://weibo.com/p/1005051846702114/home"></a>
                                </li>
                                <li>
                                    <a href="https://weibo.com/p/1005051846702114/home"></a>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="container">
            <div class="site-info">
                <h1 class="site-title">SunJilong blog</h1>
            </div>
        </div>
        <nav class="main-nav layout-one">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
        </nav>
    </header>
</template>
<script>
export default {
  name: "sunHeader",
  data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang="less">

@mainColor : #4267B2;

.container{
    width: 1170px;
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

.header-inner{

    .header-top-wrapper{
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 20px;
        padding: 10px 0 15px 0;
        .header-top-inner{
            height: 35px;
            .container{
                .search{
                    width: 290px;
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
                    text-align: right;
                    height: 35px;
                    float: right;
                    .social-links{
                        list-style: none;
                        float: right;
                        li{
                            float: left;
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
                                &:hover{
                                    background: @mainColor
                                }
                                &:hover::before{
                                    content: '';
                                    display: inline-block;
                                    width: 35px;
                                    height: 35px;
                                    position: absolute;
                                    top: 0px;
                                    left: 0px;
                                }
                            }
                            & a:first-child::before{
                                background: url(../assets/images/qq.png)
                            }
                            & a:last-child::before{
                                background: url(..//assets/images/sina.png)
                            }
                        }
                    }
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
        ul.el-menu{
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
        }
    }
}
</style>
