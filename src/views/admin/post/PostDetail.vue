<template>
        <div class="post">
            <div class="container">
                <h2>{{title}}</h2>
                <div v-html="article"></div>
            </div>
        </div>
</template>

<script>

export default {
    name:'',
    data(){
        return{
            title:'',
            article:''
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            this.$get('/postArticle/'+this.$route.params.id).then((res)=>{
                this.title = res.data.title
                this.article = res.data.con
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>


<style lang="less">
.post {
    .code, pre {
        background: #48484a;
        padding: 20px 20px 20px;
        margin-bottom: 30px;
        list-style: none;
        word-break: break-all;
        line-height: 20px;
        word-wrap: break-word;
        color: #fff;
        font-size: 14px;
        overflow-x: auto;
        white-space: normal;
    }
    p{
        margin: 0 0 1.5rem
    }
    h2{
        font-size: 2rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
        font-weight: bold;
    }
}
</style>


