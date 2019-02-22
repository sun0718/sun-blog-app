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
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="container"></div>
        <div class="main-nav layout-one">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>
<script>
export default {
  name: "sunHeader",
};
</script>

<style lang="less">
.header-inner{

    .header-top-wrapper{
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 20px;
        padding: 10px 0 15px 0;
        .header-top-inner{
            height: 35px;
            .container{
                width: 1170px;
                margin: 0 -15px;
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto;
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
                        margin-right: 5px;
                        list-style: none;
                        float: left;
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
                        }
                    }
                }
            }
        }
    }
    .container{
        max-width: 100%;
    }
    .main-nav{

    }
}
</style>
