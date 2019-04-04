<template>
    <div class="site-search">
    <div class="search-close">
        <div class="container">
            <div class="close-btn">
                <i class="fa fa-times"></i>
            </div>
        </div>
    </div>
    <div class="search-body">
        <div class="container">
            <form method="get" role="search" class="form-search" action="https://demo.nicetheme.xyz/ashley-style-2/">
                <div class="d-flex-row w-100">
                    <el-input v-model="input" placeholder="请输入内容" suffix-icon="fa fa-search"></el-input>
                </div><!-- /input-group -->
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'sunSearch'
}
</script>


<style lang="less">
.site-search{
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #283149;
    z-index: 9999;
    transition: all .3s;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    .search-close{
        padding: 1rem 0;
        text-align: right;
        color: #bbbbbb;
        .close-btn{
            display: inline-block;
            cursor: pointer;
            line-height: 1;
        }
    }
    .search-body{
        position: absolute;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        left: 0;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        transition: all 400ms cubic-bezier(.17, .67, .39, 1.09);
    }
}
</style>

