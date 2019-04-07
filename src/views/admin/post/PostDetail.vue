<template>
  <div class="post container">
    <h2 class="post-title">{{title}}</h2>
    <div class="post-content">
      <blockquote>{{preface}}</blockquote>
      <div v-html="article"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      article: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$get("/postArticle/" + this.$route.params.id)
        .then(res => {
          this.title = res.data.title;
          this.preface = res.data.preface;
          this.article = res.data.con;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>


<style lang="less">
.post.container {
  .post-title {
    color: #16a085;
    font-size: 2rem;
  }
  .post-content {
    overflow: hidden;
    .code,
    pre {
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
    p {
      margin: 0 0 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      line-height: 1.8;
    }
    h2 {
      font-size: 1.5rem;
      margin-top: 3rem;
      margin-bottom: 3rem;
      font-weight: bold;
    }
    blockquote {
      margin-left: 1em;
      margin-right: 1em;
      padding: 0.25em 1em;
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
}
</style>


