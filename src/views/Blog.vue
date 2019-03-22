<template>
    <el-container style="height:100%">
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

