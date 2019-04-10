<template>
  <sun-Wrapper>
    <div class="post">
      <h2 class="post-title">{{title}}</h2>
      <p class="post-readInfo">
          <span>评论：{{3}}</span>
          <span>阅读：{{24}}</span>
          <span>喜欢：{{0}}</span>
      </p>
      <div class="post-content">
        <blockquote>{{preface || '数据有问题啊'}}</blockquote>
        <div v-html="article"></div>
      </div>
      <ArticleLikes/>
      <ArticleShare/>
      <ArticleSiblings :sibling="sibling"/>
      <ArticleComment/>
    </div>
  </sun-Wrapper>
</template>

<script>
import ArticleComment from "@/views/blog/article/ArticleComment.vue";
import ArticleLikes from "@/views/blog/article/ArticleLikes.vue";
import ArticleShare from "@/views/blog/article/ArticleShare.vue";
import ArticleSiblings from "@/views/blog/article/ArticleSiblings.vue";

export default {
  name: "",
  components: {
    ArticleComment,ArticleShare,ArticleLikes,ArticleSiblings
  },
  data(){
    return{
      title:'',
      preface:'',
      article:'',
      sibling:{}
    }
  },
  mounted() {
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
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>


<style lang="less">
.post {
  background-color: #fff;
  margin: 0 auto 3rem;
  padding: 2rem 2rem 3rem;
  .post-title {
    color: #16a085;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .post-readInfo{
    span{
      font-size: .75rem;
      line-height: 2rem;
      margin-left: 1rem;
      display: inline-block;
      position: relative;
    }
    span:not(:first-of-type):before{
      content:'·';
      display: inline-block;
      position: absolute;
      top: 0;
      left: -1rem;
      width: 1rem;
      font-size: 1.5rem;
      text-align: center;
    }
  }
  .post-content {
    overflow: hidden;
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
        margin: 0 0 1.5rem;
        margin-bottom: 1.5rem;
        font-size: 1rem;
        line-height: 1.8;
    }
    h2{
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-weight: bold;
    }
    blockquote{
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
  @media (min-width: 992px) {
    max-width: 850px;
  }
}
</style>


