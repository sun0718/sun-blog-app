<template>
  <sun-Wrapper>
    <article class="post" v-loading="loading">
      <!-- seo优化 -->
      <meta itemprop="url" content="https://juejin.im/post/5cae9de95188251ae2324ec3">
      <meta itemprop="headline" content="前端想要了解的Nginx">
      <meta itemprop="keywords" content="Nginx">
      <meta itemprop="datePublished" content="2019-04-11T01:54:19.534Z">
      <meta itemprop="image" content="https://b-gold-cdn.xitu.io/icon/icon-128.png">
      <div itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person"><meta itemprop="name" content="快狗打车前端团队"><meta itemprop="url" content="https://juejin.im/user/5c90d966f265da61173a2cd8"></div>
      <div itemprop="publisher" itemscope="itemscope" itemtype="http://schema.org/Organization"><meta itemprop="name" content="掘金"><div itemprop="logo" itemscope="itemscope" itemtype="https://schema.org/ImageObject"><meta itemprop="url" content="https://b-gold-cdn.xitu.io/icon/icon-white-180.png"><meta itemprop="width" content="180"><meta itemprop="height" content="180"></div></div>
      <!-- 正文 -->
      <div class="post-content">
        <h2 class="title">{{title}}</h2>
        <p class="readInfo">
          <span>评论：{{3}}</span>
          <span>阅读：{{24}}</span>
          <span>喜欢：{{0}}</span>
        </p>
        <div class="content">
          <blockquote>
            <code>{{preface || '数据有问题啊'}}</code>
          </blockquote>
          <div v-html="article"></div>
        </div>
        <ArticleLikes/>
        <ArticleShare/>
        <ArticleSiblings :sibling="sibling"/>
        <ArticleComment/>
      </div>
        <ArticleCatalog v-if="cataLogShow"></ArticleCatalog>
        <ImageViewer v-if="showImageViewer" @hide="bigImgHide" :imgUrl= "imgUrl" ></ImageViewer>
    </article>
  </sun-Wrapper>
</template>

<script>
import ArticleComment from "@/views/blog/article/ArticleComment.vue";
import ArticleLikes from "@/views/blog/article/ArticleLikes.vue";
import ArticleShare from "@/views/blog/article/ArticleShare.vue";
import ArticleSiblings from "@/views/blog/article/ArticleSiblings.vue";
import ArticleCatalog from "@/views/blog/article/ArticleCatalog.vue";
import ImageViewer from "@/views/blog/article/ImageViewer.vue";

export default {
  name: "",
  components: {
    ArticleComment,
    ArticleShare,
    ArticleLikes,
    ArticleSiblings,
    ArticleCatalog,
    ImageViewer
  },
  data() {
    return {
      title: "",
      preface: "",
      article: "",
      sibling: {},
      showImageViewer:false,
      imgUrl:'',
      loading:false,
      cataLogShow:false
    };
  },
  mounted() {
    this.loading = true;
    this.getData();
  },
  methods: {
    getData() {
      this.$get("/getPost/" + this.$route.params.id)
        .then(res => {
          this.title = res.data.result.title;
          this.preface = res.data.result.preface;
          this.article = res.data.result.con;
          this.sibling = res.data.sibling;
        }).then(()=>{
          this.loading = false;
          this.scaleImage();
        }).then(()=>{
          this.cataLogShow = true
        })
        .catch(err => {
          console.log(err);
        });
    },
    scaleImage(){
      var conBox = document.querySelector('.content')
      var imgs = conBox.querySelectorAll('img')
      var imgW ,imgH;
      for(var img of imgs){
        let realH = img.height;
        let realW = img.width;
        var scale = 0.8;
        if(realH>1280){
            imgH = 1280
            imgW = imgH / realH * realH
        }else if(realW> conBox.offsetWidth){
            imgW = conBox.offsetWidth * scale
            imgH = imgW / realW * realH
        }else{
            imgW = realW
            imgH = realH
        }
        img.width = imgW
        img.height = imgH
        img.style.cursor = 'zoom-in'
        console.log(img)
      }
      var _that = this
      conBox.addEventListener('click',function(e){
        if(e.target == img){
            _that.showImageViewer = true;
            _that.imgUrl = e.target.src;
        }
      })
    },
    bigImgHide(){
      this.showImageViewer = false
    }
  }
};
</script>


<style lang="less">
.post {
  margin-bottom:3rem;
  padding-bottom:3rem;
  position: relative;
  .post-content {
    background-color: #fff;
    max-width: calc(100% - 272px);
    padding: 1rem 1rem;
    .title {
      color: #16a085;
      font-size: 2rem;
      margin: 2rem 0;
    }
    .readInfo {
      margin: 1rem 0;
      span {
        font-size: 0.75rem;
        line-height: 2rem;
        margin-left: 1rem;
        display: inline-block;
        position: relative;
      }
      span:not(:first-of-type):before {
        content: "·";
        display: inline-block;
        position: absolute;
        top: 0;
        left: -1rem;
        width: 1rem;
        font-size: 1.5rem;
        text-align: center;
      }
    }
    .content {
      overflow: hidden;
      .code,
      pre {
        background: rgb(248, 248, 248);
        padding: 20px 20px 20px;
        margin-bottom: 30px;
        list-style: none;
        word-break: break-all;
        line-height: 20px;
        word-wrap: break-word;
        color: #333;
        font-size: .75rem;
        overflow-x: auto;
      }
      p {
        margin: 0 0 1rem;
        font-size: .9rem;
        line-height: 1.8;
      }
      ul{
        list-style: disc inside;
        li{
          margin-bottom: 1rem;
          font-size: .9rem;
        }
      }
      h2 {
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-weight: bold;
      }
      h3,h4,h5,h6 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: bold;
      }
      blockquote {
        margin-left: 1em;
        margin-right: 1em;
        padding: 0.5em 1em;
        color: #777;
        border-left: 0.25em solid #ddd;
      }
      img {
        max-width: 100%;
        margin: 0 auto;
        height: auto;
        display: block;
        margin-bottom: 20px;
      }
    }
    .post-like.current {
      background: #e45d6a;
      border-color: #e45d6a;
      box-shadow: 0px 5px 20px -3px rgba(228, 93, 106, 0.55) !important;
    }
  }
}
</style>


