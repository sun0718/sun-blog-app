<template>
  <footer class="home-footer footer">
    <div class="row">
      <div class="column large-full footer__content">
        <div class="footer__copyright">
          <span>
            © Copyright Typerite 2019 -
            <a
              href="https://sunfafa.cn"
              title="sunfafa"
              rel="home"
            >sunjilong</a>All Rights Reserved.
          </span>
          <span>Record No. 粤ICP备19014387号-1</span>
        </div>
      </div>
    </div>
    <div class="go-top">
      <a class="smoothscroll" title="Back to Top" href="#top"></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "sunFooter"
};
</script>


<style lang="less">
.home-footer {
  padding-left: 330px;
  padding-right: 100px;
  padding-top: 4rem;
  padding-bottom: 8rem;
  max-width: 2140px;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  a {
    color: #000000;
  }
  .footer__copyright {
    span {
      display: inline-block;
      &::after {
        content: "|";
        display: inline-block;
        padding: 0 1.2rem 0 1.4rem;
        color: rgba(0, 0, 0, 0.3);
      }
      &:last-child::after {
        display: none;
      }
    }
  }
  .go-top {
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 200%, 0);
    transition: all 0.8s;
    position: fixed;
    bottom: 4rem;
    right: 2rem;
    &.link-is-visible {
      opacity: 1;
      visibility: visible;
      transform: translate3d(0, 0, 0);
    }
    a,
    a:visited {
      text-decoration: none;
      border: none;
      display: block;
      height: 6rem;
      width: 6rem;
      line-height: 6rem;
      text-align: center;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.5);
      transition: all 0.3s;
    }
  }
}

@media screen and (max-width:1600px) {
  .home-footer {
    padding-left: 320px;
  }
}

@media screen and (max-width:1200px) {
  .home-footer {
    padding-left: 290px;
    padding-right: 80px;
  }

}

@media screen and (max-width:1100px) {
  .home-footer {
    padding-right: 0;
    padding-left: 0;
  }

  .go-top {
    bottom: 0;
    right: 0;
  }

}

@media screen and (max-width:600px) {
  .footer__copyright span {
    display: block;
  }

  .footer__copyright span::after {
    display: none;
  }

}
</style>
