<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-warn"></i> 权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <h1>管理员权限页面</h1>
            <p>不好意思，您的账号没有管理员权限，无法浏览这个页面，请重新使用管理员账号登录或者联系站长以获得权限。</p>
            <p>想尝试一下，请<router-link to="/login" class="logout">退出登录</router-link>，使用管理员账号登录，再进来试试看。</p>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        }
    }
</script>

<style scoped>
h1{
    text-align: center;
    margin: 30px 0;
}
p{
    line-height: 30px;
    margin-bottom: 10px;
    text-indent: 2em;
}
.logout{
    color: #07c4a8;
}
</style>