<template>
    <el-container style="height:100%" v-loading.fullscreen.lock="fullscreenLoading">
        <v-Menu></v-Menu>
        <transition name="move" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </el-container>
</template>

<script>
import vMenu from '@/components/blog/Menu.vue'

export default {
    name:'',
    components:{
        vMenu
    },
    data(){
        return{
            fullscreenLoading:false
        }
    },
    created(){
        this.fullscreenLoading= true;
    },
    mounted(){
        setTimeout(()=>{
            this.$get('/string').then((res)=>{
                console.log(res.data)
                this.fullscreenLoading = false
            })
        },2000)
    }
}
</script>

<style lang="less">
.el-container{
    @media screen and (max-width: 992px){
        &{
            flex-direction: column !important;
        }
    }
}
.el-main{
    padding: 0 !important;
}
</style>

