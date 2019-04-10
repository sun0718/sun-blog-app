<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i class="fa fa-th-large"></i>
        </div>
        <div class="logo">后台管理系统</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator ml-1x"><img src="@/assets/img/img.jpg"></div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name ml-half" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="http://sunfafa.cn/about/" target="_blank">
                            <el-dropdown-item>关于作者</el-dropdown-item>
                        </a>
                        <a href="https://github.com/sun0718/koa2-server" target="_blank">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import bus from '@/store/bus';
    export default {
        name:'sunHeader',
        data() {
            return {
                collapse: false,
                fullscreen: false,
                name: 'admin',
                message: 2
            }
        },
        computed:{
            username(){
                let username = sessionStorage.getItem('AcountName');
                return username ? username : this.name;
            }
        },
        methods:{
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    sessionStorage.removeItem('SUN_WEB_TOKEN')
                    this.$router.push('/login');
                }
            },
            // 侧边栏折叠
            collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            }
        },
        mounted(){
            if(document.body.clientWidth < 1500){
                this.collapseChage();
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 4rem;
        font-size: 1.2rem;
        color: #fff;
        background-color: #283149;
    }
    .collapse-btn{
        float: left;
        padding: 0 .875rem;
        cursor: pointer;
        line-height: 4rem;
    }
    .header .logo{
        float: left;
        width: 200px;
        line-height: 4rem;
    }
    .header-right{
        float: right;
        padding-right: 3rem;
    }
    .header-user-con{
        display: flex;
        height: 4rem;
        align-items: center;
    }
    .btn-bell {
        position: relative;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: 4px;
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-avator img{
        display: block;
        width: 2.5rem;
        height:2.5rem;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
