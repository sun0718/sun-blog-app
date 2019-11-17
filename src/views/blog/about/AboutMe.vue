<template>
  <main class="about-me">
    <section class>
      <div class="media-wrap">
        <div>
          <img src="@public/img/contact-2000.jpg" alt />
        </div>
      </div>

      <div class="post-header">
        <h1 class>Hello, Welcome to my blog</h1>
      </div>
      <!-- end content__page-header -->
      <div class="post-content">
        <p>你好，欢迎来到我的个人博客。</p>
        <p>我的姓名是「孙继龙」，今年25岁。我是一名前端程序员，目前居住在广东深圳。</p>
        <p>2016年 6月我本科毕业于湖南科技学院。</p>
        <p>毕业之后，转战互联网，开始从事前端相关工作，开始主要是负责企业网站的开发和维护。16年9月份来深，目前供职于平安金融科技[平安壹账通]，主要从事战略平台贸易系统的前端开发。</p>
        <p>我有轻微的强迫症和代码洁癖；我喜欢跑步，听音乐。</p>
        <p>这就是我：</p>
        <p>
          <img src="@/assets/img/itsme.jpg" />
        </p>
      </div>

      <hr />

      <div class="post-info">
        <div class="list">
          <h4>Who We Are.</h4>
          <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
        </div>

        <div class="list">
          <h4>Our Mission.</h4>
          <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
        </div>

        <div class="list">
          <h4>Our Vision.</h4>
          <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
        </div>

        <div class="list">
          <h4>Our Core Values.</h4>
          <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
        </div>
      </div>
    </section>
    <h3 class="h2">Say Hello</h3>

    <form name="contactForm" id="contactForm" method="post" action autocomplete="off">
      <fieldset>
        <div class="form-field">
          <input
            name="cName"
            id="cName"
            class="full-width"
            placeholder="Your Name"
            value
            type="text"
          />
        </div>

        <div class="form-field">
          <input
            name="cEmail"
            id="cEmail"
            class="full-width"
            placeholder="Your Email"
            value
            type="text"
          />
        </div>

        <div class="form-field">
          <input
            name="cWebsite"
            id="cWebsite"
            class="full-width"
            placeholder="Website"
            value
            type="text"
          />
        </div>

        <div class="message form-field">
          <textarea name="cMessage" id="cMessage" class="full-width" placeholder="Your Message"></textarea>
        </div>

        <input
          name="submit"
          id="submit"
          class="btn btn--primary btn-wide btn--large full-width"
          value="Send Message"
          type="submit"
        />
      </fieldset>
    </form>
    <!-- end form -->
  </main>
</template>

<style lang="less">
.about-me {
  max-width: 900px;
  padding-bottom: 12rem;
  margin: 0 auto;
  .post-header {
    h1 {
      font-size: 5.6rem;
      line-height: 1.143;
      letter-spacing: -0.05rem;
      display: block;
    }
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

  .post-info{
    display: flex;
    flex-wrap: wrap;
    div{
      flex:0 0 50%;
      padding: 0 2rem;
    }
  }
}
</style>
