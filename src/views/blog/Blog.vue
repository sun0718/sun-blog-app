<template>
    <el-container style="height:100%">
            <sun-loading v-if="loading" />
            <sun-Menu></sun-Menu>
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
    </el-container>
</template>

<script>
import { setTimeout } from 'timers';

export default {
    name:'',
    data(){
        return{
            loading:true
        }
    },
    created(){
    },
    mounted(){
        setTimeout(()=>{this.loading = false},2000)
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

