<template>
    <article class="LittleArticleSearch">
        <el-row class="row">
            <el-col :lg='10' :md="10" :sm="10" :xs="24">
                <div class="post-image">
                    <img src="@public/img/post-eight.jpeg" alt="....">
                </div>
                <!-- // post image -->
            </el-col>
            <!-- // col -->
            <el-col :lg='14' :md="14" :sm="14" :xs="24">

                <div class="post-meta-category">
                    <p><a href="#">Lifestyle</a></p>
                </div>

                <div class="post-title">
                    <h2><a href="#">That evening at bali beach was wounderful then any other evening</a></h2>
                </div>

                <div class="post-meta-posted-date">
                    <p><a href="#">January 1, 2018</a></p>
                </div>

                <AriticlSocial></AriticlSocial>
                    
            </el-col>
            <!-- // col -->
        </el-row>
        <!-- row -->
    </article>
</template>

<script>
import AriticlSocial from '@/components/AriticlSocial.vue'
export default {
    name:'',
    components:{
        AriticlSocial
    }
}
</script>


<style lang="less">
.LittleArticleSearch{
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 40px;
    margin-bottom: 40px;
    .el-row{
        .el-col{
            position: relative;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
        }
    }
    .post-image{
        position: relative;
        overflow: hidden;
        img{
            transition-duration: 0.7s;
            &:hover{
                transform: scale(1.3);
            }
        }
    }
    .post-meta-category{
        padding: 10px 0;
        p{
            a{
                font-family: "Spectral SC",serif;
                color:#111;
            }
        }
    }
    .post-title{
        padding-bottom: 10px;
        h2{
            font-size: 22px;
            padding: 0 !important;
            line-height: 1;
        }
    }
    .post-meta-posted-date{
        padding-bottom: 10px;
        a{
            font-size: 14px;
            font-weight: 500;
            color: #7b7b7b;
        }
    }

}
</style>

