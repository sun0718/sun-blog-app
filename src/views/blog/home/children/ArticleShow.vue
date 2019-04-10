<template>
    <el-row class="article-show">
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
            <slot></slot>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
            <div class="list-content">
                <div class="list-body">
                    <div class="list-title">
                        <router-link :to="'/post/'+postData.id">{{postData.title}}</router-link>
                        <!-- <a href="" target="_blank" class="list-title">{{postData.title}}</a> -->
                    </div>
                    <div class="list-text"><div class="h-2x">{{postData.preface}}</div></div>
                </div>
                <div class="list-footer">
                    <div class="text-xs text-muted">
                        <span class="d-inline-block text-dark" v-if="postData.overHead">置顶</span>
                        <i class="text-primary pl-half pr-half" v-if="postData.overHead">•</i>                
                        <span class="d-inline-block">{{ postData.createTime }}</span>
                    </div>
                    <div class="ml-auto text-xs">
                        <a href="javascript:" class="d-inline-block pl-half text-dark">
                            <i class="fa fa-heart"></i> 
                            <span class="pl-half">{{ postData.like }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>

export default {
    name:'articleShow',
    mounted(){
        console.log(this.postData)
    },
    props:['postData'],
    filters:{
        formatCreateTime(value){
            var now = new Date(Number(value)),
                y = now.getFullYear(),
                m = now.getMonth() + 1,
                d = now.getDate();
                console.log(y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " ")
            return (
                y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " "
            );
        },
    }
}
</script>


<style lang="less">
.article-show{
    display: flex;
    margin-bottom: 1rem;
    [class*=el-col]{
        flex:1 1 auto;
        display: flex;
    }
    .list-item{
        margin-bottom: 0rem;
    }
    .list-content{
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        justify-content: center;
        padding: 1.5rem;
        background-color: #fff;
        .list-body{
            flex: 1 1 auto;
            .list-title{
                cursor: pointer;
                overflow: hidden;
                max-height: 66px;
                font-size: 1.25rem;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                a{
                    color: #000;
                }
            }
            .list-text{
                color: #404b69;
                font-size: 0.875rem;
                margin-top: 1rem;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            @media screen and (max-width: 768px){
                .list-title{
                    font-size: 1rem;
                }
                .list-text{
                    font-size: .75rem;
                }
            } 
        }
        .list-footer{
            margin-top: 1rem;
            display: flex;
        }
    }
}
</style>
