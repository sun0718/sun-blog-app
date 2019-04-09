<template>
  <sun-wrapper>
    <article class="about other-inner">
      <div class="post-header">
        <h2 class="post-title">关于博主</h2>
      </div>
      <div class="post-content">
        <p>你好，欢迎来到我的个人博客。</p>
        <p>我的姓名是「孙继龙」，今年25岁。我是一名前端程序员，目前居住在广东深圳。</p>
        <p>2016年 6月我本科毕业于湖南科技学院。</p>
        <p>毕业之后，转战互联网，开始从事前端相关工作，开始主要是负责企业网站的开发和维护。16年9月份来深，目前供职于平安金融科技[平安壹账通]，主要从事战略平台贸易系统的前端开发。</p>
        <p>我有轻微的强迫症和代码洁癖；我喜欢跑步，听音乐。</p>
        <p>这就是我：</p>
        <p>
          <img src="@/assets/img/itsme.jpg">
        </p>
      </div>
    </article>
  </sun-wrapper>
</template>

<style lang="less">
.about {

  .post-header {
    margin: 0 0 3rem;
    line-height: 32px;
    font-size: 18px;
    display: block;
    .post-title {
      font-weight: 700;
      color: #16a085;
    }
  }

  .post-content {
    img {
      border-radius: 10px;
      max-width: 400px;
      width: 100%;
    }
    p {
      margin-top: 0;
      margin-bottom: 20px;
    }
  }
}
</style>
