<template>
    <div class="list-item d-flex-column mb-1x">
        <div v-if="num==1" class="d-flex-row flex">
            <div class="media flex-height-1">
                <a class="media-content" :style="{backgroundImage:'url('+ postData.imageShow +')'}">
                    <span class="overlay"></span>
                </a>
            </div>
            <div class="list-item-content">
                <router-link :to="'/blog/post/some/'+postData.categorie">
                    <span class="badge badge-md text-uppercase bg-white-overlay">{{postData.categorie.slice(-1)[0]}}</span>
                </router-link>
                <router-link :to="'/blog/post/'+postData.id" class="list-body"  :class="showTitle?'':'hidden'">
                        <div class="list-title text-white h-2x">{{postData.title}}</div>
                </router-link>
            </div>
        </div>
        <div v-if="num==2" class="d-flex-row d-flex-wrap flex">
            <div class="media flex-height-2">
                <a class="media-content" style="background-image:url(https://demo.nicetheme.xyz/ashley-style-2/wp-content/uploads/sites/23/2019/02/2019020319280481-600x400.jpg)">
                    <span class="overlay"></span>
                </a>
            </div>
            <div class="list-item-content">
                <a>
                    <h2 class="d-inline-block text-uppercase text-white">旅行日志</h2>
                </a>
                <a class="list-body">
                    <div class="list-title text-white text-xs">12篇文章</div>
                </a>
            </div>
        </div>
        <div v-if="num==3" class="d-flex-row flex">
            <div class="media" :class="half ? 'flex-height-3':''">
                <a href="" target="_blank" class="media-content" style="background-image:url(https://demo.nicetheme.xyz/ashley-style-2/wp-content/uploads/sites/23/2019/02/2019020319280481-600x400.jpg)">
                    <span class="overlay"></span>
                </a>
            </div>
            <div class="list-item-content">
                <router-link :to="'/blog/post/'+postData.id" class="list-body" :class="showTitle?'':'hidden'">
                    <div class="list-title text-white text-normal h-2x">{{postData.title}}</div>
                    <div class="list-meta mt-half d-flex-row text-xs text-white">
                        <span class="d-inline-block">{{postData.createTime}}</span>
                        <span class="flex text-right">
                            <i class="text-sm fa fa-heart"></i> <span class="like-count ml-half">{{postData.like}}</span>
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'sunImageShow',
    data(){
        return{
            
        }
    },
    mounted(){
        // console.log(this.postData)
    },
    props:{
        num:Number,
        half:String,
        postData:{},
        showTitle:{
            type: Boolean,
            default: true
        }
    }
}
</script>


<style lang="less">
.list-item{
    position: relative;
    flex: 1 1 auto;
    min-width: 0;
    word-wrap: break-word;
    .media{
        position: relative;
        display: block;
        overflow: hidden;
        padding: 0;
        flex: 1 1 auto;
        align-items: flex-start;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0;
            background-color: rgba(39, 49, 73, 0.19);
            z-index: 1;
        }
        &.flex-height-1:after{
            padding-top: 60%;
        }
        &.flex-height-2:after{
            padding-top: 40%;
        }
        &::after{
            content: '';
            display: block;
            padding-top: 100%;
        }
        .media-content{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 0;
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120, 120, 120, 0.1);
            .overlay{
                width: 100%;
                height: 100%;
                position: absolute;
                opacity: .33;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.66);
                transition: opacity 0.3s ease-in-out;
            }
        }
    }
    .list-item-content{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        justify-content: center;
        padding: 0.5rem;
        z-index: 2;
        cursor: pointer;
        @media screen and (min-width: 992px){
            &{
                padding: 1rem;
            }
        }
        @media screen and (max-width: 992px){
            &{
                padding: .75rem;
            }
        }
        .list-body{
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            .list-title{
                max-height: 46px;
                margin-top: auto;
                margin-bottom: 1rem;
                @media screen and (max-width: 768px){
                        cursor: pointer;
                        overflow: hidden;
                        font-size: .75rem;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                }
            }
            &.hidden{
                visibility: hidden;
            }
        }
    }
}

</style>

