<template>
    <el-row class="article-show">
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
            <slot></slot>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
            <div class="list-content">
                <div class="list-body">
                    <div class="list-title">
                        <a href="" target="_blank" class="list-title">英国朝圣者之路Rochester狄更斯节篇：街头鬼魂游荡，露宿街头朝圣者，英格兰中世纪巡游</a>
                    </div>
                    <div class="list-text"><div class="h-2x">行走英国朝圣者之路，发现越来越精彩啦！本次继续英国名城罗切斯特，遇大文豪狄更斯节，一场穿越的故事即将开始！
        我是一个穷人，真的是一个穷人。行走在旅途中，望着别人风景而感叹的穷人，一个完全没有信仰孤独的贫穷旅行者。
        ...</div></div>
                </div>
                <div class="list-footer">
                    <div class="text-xs text-muted">
                        <span class="d-inline-block text-dark">置顶</span>
                        <i class="text-primary pl-half pr-half">•</i>                
                        <span class="d-inline-block">2019-02-03</span>
                    </div>
                    <div class="ml-auto text-xs">
                        <a href="javascript:" class="d-inline-block pl-half text-dark">
                            <i class="fa fa-heart"></i> 
                            <span class="pl-half">51</span>
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
        }
        .list-footer{
            display: flex;
            margin-top: 30%;
        }
    }
}
</style>
