<template>
    <el-container style="height:100%">
        <sun-Menu></sun-Menu>
        <transition name="move" mode="out-in">
            <router-view></router-view>
        </transition>
    </el-container>
</template>

<script>

export default {
    name:'',
    data(){
        return{
            fullscreenLoading:false
        }
    },
    created(){
    },
    mounted(){
        
    }
}
</script>

<style lang="less">
.el-container{
    background-color: #f5f5f5;
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

