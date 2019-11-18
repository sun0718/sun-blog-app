<template>
  <!-- 正文 -->
  <div class="post-content">
    <main class="content__page">
      <article class="format-standard">
        <div class="media-wrap">
          <div class="entry__post-thumb">
            <img :src="imageShow" sizes="(max-width: 2000px) 100vw, 2000px" alt />
          </div>
        </div>

        <div class="content__page-header">
          <h1 class="content-header-title">{{title}}.</h1>
          <ul class="content-header-meta">
            <li class="author">
              By
              <a href="#0">Jilong Sun</a>
            </li>
            <li class="date">{{createTime}}</li>
            <li class="cat-links">
              <a href="#0">Marketing</a>
              <a href="#0">Management</a>
            </li>
          </ul>
        </div>
        <!-- end entry__header -->

        <div class="entry__content">
          <blockquote class="preface">
            <code>{{preface || '数据有问题啊'}}</code>
          </blockquote>
          <div v-html="article"></div>
          <p class="entry__tags">
            <span>Post Tags</span>
            <span class="entry__tag-list">
              <router-link to="/#" v-for="(item,index) in categorie" :key="index">{{item}}</router-link>
            </span>
          </p>
        </div>
        <!-- end entry content -->

        <ArticleShare />

        <div class="entry__pagenav">
          <div class="entry__nav">
            <div class="entry__prev">
              <a href="#0" rel="prev">
                <span>Previous Post</span>
                前端开发之路
              </a>
            </div>
            <div class="entry__next">
              <a href="#0" rel="next">
                <span>Next Post</span>
                哈尔滨之行
              </a>
            </div>
          </div>
        </div>
        <!-- end entry__pagenav -->

        <div class="entry__related">
          <h3 class="h2">Related Articles</h3>

          <ul class="related">
            <li class="related__item">
              <a href="single-standard.html" class="related__link">
                <img src="https://sunfafa.cn/upload/html5.jpg" />
              </a>
              <h5 class="related__post-title">Using Repetition and Patterns in Photography.</h5>
            </li>
            <li class="related__item">
              <a href="single-standard.html" class="related__link">
                <img src="https://sunfafa.cn/upload/html5.jpg" />
              </a>
              <h5 class="related__post-title">Health Benefits Of Morning Dew.</h5>
            </li>
            <li class="related__item">
              <a href="single-standard.html" class="related__link">
                <img src="https://sunfafa.cn/upload/html5.jpg" />
              </a>
              <h5 class="related__post-title">The Art Of Visual Storytelling.</h5>
            </li>
          </ul>
        </div>
        <!-- end entry related -->
      </article>
      <!-- end column large-full entry-->

      <div class="comments-wrap">
        <div id="comments" class="column large-12">
          <h3 class="h2">5 Comments</h3>

          <!-- START commentlist -->
          <ol class="commentlist">
            <li class="depth-1 comment">
              <div class="comment__avatar">
                <img class="avatar" src="images/avatars/user-01.jpg" alt width="50" height="50" />
              </div>

              <div class="comment__content">
                <div class="comment__info">
                  <div class="comment__author">Itachi Uchiha</div>

                  <div class="comment__meta">
                    <div class="comment__time">April 30, 2019</div>
                    <div class="comment__reply">
                      <a class="comment-reply-link" href="#0">Reply</a>
                    </div>
                  </div>
                </div>

                <div class="comment__text">
                  <p>
                    Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
                    facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.
                  </p>
                </div>
              </div>
            </li>
            <!-- end comment level 1 -->

            <li class="thread-alt depth-1 comment">
              <div class="comment__avatar">
                <img class="avatar" src="images/avatars/user-04.jpg" alt width="50" height="50" />
              </div>

              <div class="comment__content">
                <div class="comment__info">
                  <div class="comment__author">John Doe</div>

                  <div class="comment__meta">
                    <div class="comment__time">April 30, 2019</div>
                    <div class="comment__reply">
                      <a class="comment-reply-link" href="#0">Reply</a>
                    </div>
                  </div>
                </div>

                <div class="comment__text">
                  <p>
                    Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod
                    urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et
                    tantas semper delicatissimi.
                  </p>
                </div>
              </div>

              <ul class="children">
                <li class="depth-2 comment">
                  <div class="comment__avatar">
                    <img class="avatar" src="images/avatars/user-03.jpg" alt width="50" height="50" />
                  </div>

                  <div class="comment__content">
                    <div class="comment__info">
                      <div class="comment__author">Kakashi Hatake</div>

                      <div class="comment__meta">
                        <div class="comment__time">April 29, 2019</div>
                        <div class="comment__reply">
                          <a class="comment-reply-link" href="#0">Reply</a>
                        </div>
                      </div>
                    </div>

                    <div class="comment__text">
                      <p>
                        Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris
                      </p>
                    </div>
                  </div>

                  <ul class="children">
                    <li class="depth-3 comment">
                      <div class="comment__avatar">
                        <img
                          class="avatar"
                          src="images/avatars/user-04.jpg"
                          alt
                          width="50"
                          height="50"
                        />
                      </div>

                      <div class="comment__content">
                        <div class="comment__info">
                          <div class="comment__author">John Doe</div>

                          <div class="comment__meta">
                            <div class="comment__time">April 29, 2019</div>
                            <div class="comment__reply">
                              <a class="comment-reply-link" href="#0">Reply</a>
                            </div>
                          </div>
                        </div>

                        <div class="comment__text">
                          <p>
                            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                            etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <!-- end comment level 1 -->

            <li class="depth-1 comment">
              <div class="comment__avatar">
                <img class="avatar" src="images/avatars/user-02.jpg" alt width="50" height="50" />
              </div>

              <div class="comment__content">
                <div class="comment__info">
                  <div class="comment__author">Shikamaru Nara</div>

                  <div class="comment__meta">
                    <div class="comment__time">April 26, 2019</div>
                    <div class="comment__reply">
                      <a class="comment-reply-link" href="#0">Reply</a>
                    </div>
                  </div>
                </div>

                <div class="comment__text">
                  <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                </div>
              </div>
            </li>
            <!-- end comment level 1 -->
          </ol>
          <!-- END commentlist -->
        </div>
        <!-- end comments -->

        <div class="column large-12 comment-respond">
          <!-- START respond -->
          <div id="respond">
            <h3 class="h2">
              Add Comment
              <span>Your email address will not be published</span>
            </h3>

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
                  <textarea
                    name="cMessage"
                    id="cMessage"
                    class="full-width"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <input
                  name="submit"
                  id="submit"
                  class="btn btn--primary btn-wide btn--large full-width"
                  value="Add Comment"
                  type="submit"
                />
              </fieldset>
            </form>
            <!-- end form -->
          </div>
          <!-- END respond-->
        </div>
        <!-- end comment-respond -->
      </div>
      <!-- end comments-wrap -->
    </main>
    <ArticleCatalog v-if="cataLogShow"></ArticleCatalog>
    <ImageViewer v-if="showImageViewer" @hide="bigImgHide" :imgUrl="imgUrl"></ImageViewer>
  </div>
</template>

<script>
import ArticleShare from "@/views/blog/article/ArticleShare.vue";
import ImageViewer from "@/views/blog/article/ImageViewer.vue";

export default {
  name: "",
  components: {
    ArticleShare,
    ImageViewer
  },
  data() {
    return {
      title: "",
      preface: "",
      article: "",
      imageShow: "",
      showImageViewer: false,
      imgUrl: "",
      loading: false,
      cataLogShow: false
    };
  },
  mounted() {
    console.log(this.$route.params);
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
          this.imageShow = res.data.result.imageShow;
          this.categorie = res.data.result.categorie;
          this.createTime = res.data.result.createTime;
        })
        .then(() => {
          this.loading = false;
          this.scaleImage();
        })
        .then(() => {
          this.cataLogShow = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    scaleImage() {
      var conBox = document.querySelector(".content");
      var imgs = conBox.querySelectorAll("img");
      var imgW, imgH;
      for (var img of imgs) {
        let realH = img.height;
        let realW = img.width;
        var scale = 0.8;
        if (realH > 1280) {
          imgH = 1280;
          imgW = (imgH / realH) * realH;
        } else if (realW > conBox.offsetWidth) {
          imgW = conBox.offsetWidth * scale;
          imgH = (imgW / realW) * realH;
        } else {
          imgW = realW;
          imgH = realH;
        }
        img.width = imgW;
        img.height = imgH;
        img.style.cursor = "zoom-in";
      }
      var _that = this;
      conBox.addEventListener("click", function(e) {
        if (e.target == img) {
          _that.showImageViewer = true;
          _that.imgUrl = e.target.src;
        }
      });
    },
    bigImgHide() {
      this.showImageViewer = false;
    }
  }
};
</script>


<style lang="less">
.post-content {
  max-width: 900px;
  padding-bottom: 12rem;
  margin: 0 auto;
  .content__page {
    .format-standard {
      .media-wrap {
        margin-bottom: 7.2rem;
        img {
          margin-top: 3.2rem;
          margin-bottom: 3.2rem;
          width: 100%;
        }
      }
      .content__page-header {
        text-align: center;
        margin-bottom: 4rem;
        .content-header-title {
          font-size: 5.6rem;
          line-height: 1.143;
          letter-spacing: -0.05rem;
          margin-top: 0;
          margin-bottom: 0.8rem;
        }
        .content-header-meta {
          list-style: none;
          font-size: 1.8rem;
          font-weight: 300;
          line-height: 1.778;
          margin-left: 0;
          margin-top: 2rem;
          color: #000000;
          li {
            display: inline-block;
            padding-left: 0;
            margin: 0 0.8rem;
            a {
              color: rgba(0, 0, 0, 0.7);
              &:hover {
                color: #000;
              }
              &::after {
                content: ", ";
              }
              &:last-child::after {
                display: none;
              }
            }
          }
        }
      }
      .entry__content {
        .preface {
          padding: 3rem;
          code {
            white-space: pre-wrap;
            background: transparent;
            border: none;
            font-size: 3rem;
          }
        }
        img {
          width: 100%;
        }
        .entry__tags {
          margin-top: 6rem;
          font-family: "Heebo", sans-serif;
          span {
            font-weight: 500;
            color: #000000;
            padding-right: 56px;
            margin-right: 1.6rem;
            position: relative;
            &::after {
              display: inline-block;
              content: "";
              height: 1px;
              width: 40px;
              background-color: rgba(0, 0, 0, 0.2);
              position: absolute;
              top: 50%;
              right: 0;
            }
            &.entry__tag-list {
              display: inline-block;
              padding-right: 0;
              margin-right: 0;
              &::after {
                display: none;
              }
              a {
                display: inline-block;
                font-weight: 400;
                font-size: 1.3rem;
                line-height: inherit;
                color: #1a1a1a;
                border: 1px solid rgba(0, 0, 0, 0.3);
                border-radius: 3px;
                margin-right: 6px;
                margin-bottom: 8px;
                padding: 1px 12px;
                &:hover,
                &:focus {
                  background-color: #000000;
                  border-color: #000000;
                  color: #ffffff;
                }
                &:last-child {
                  margin-right: 0;
                }
              }
            }
          }
        }
      }
      .entry__pagenav {
        margin-top: 10.2rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        position: relative;
        .entry__nav {
          .entry__prev,
          .entry__next {
            width: 50%;
            float: left;
            padding-right: 2rem;
          }
          span {
            display: block;
            font-family: "IBM Plex Sans", sans-serif;
            font-weight: 400;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            color: #1a1a1a;
            margin-bottom: 1.6rem;
            transition: all 0.3s;
          }
          a {
            font-family: "Heebo", sans-serif;
            font-weight: 500;
            font-size: 3rem;
            line-height: 1.333;
            color: #000000;
            &:hover,
            &:focus {
              span {
                color: #33998a;
              }
            }
          }
          &:after {
            content: "";
            display: table;
            clear: both;
          }
        }
      }
      .entry__related {
        margin-top: 10.2rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        overflow: hidden;
        h3 {
          margin-top: 0;
          margin-bottom: 3.2rem;
        }
        h5 {
          margin-top: 0.8rem;
          font-size: 1.9rem;
          font-weight: 400;
          line-height: 2.8rem;
        }
        .related {
          list-style: none;
          margin-left: 0;
          .related__item {
            padding-left: 4rem;
              &:last-child{
                padding-right: 4rem;
              }
            margin-bottom: 3.2rem;
            .related__link {
              display: block;
              position: relative;
              &::before {
                content: "";
                display: block;
                background: rgba(255, 255, 255, 0.2);
                opacity: 0;
                visibility: hidden;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transition: all 0.3s;
              }
              &:hover::before {
                opacity: 1;
                visibility: visible;
              }
              img {
                vertical-align: bottom;
              }
            }
          }
        }
      }
    }
  }
  .comments-wrap {
    padding: 6.4rem 0 0 0;
    background-color: #ffffff;
    h3 {
      margin-top: 0;
      span {
        display: block;
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 1.556;
        color: #7e7e7e;
      }
    }
    #comments {
      padding-top: 2rem;
      padding-bottom: 1.2rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      ol,
      ul {
        list-style: none;
      }
      .commentlist {
        margin: 6rem 0 5.6rem;
        padding: 0;
        & > .comment {
          position: relative;
          list-style: none;
          margin: 0;
          padding: 2rem 0 0 0;
          padding-left: 14%;
          .comment__avatar {
            position: absolute;
            left: 0;
            display: block;
            img {
              height: 6.4rem;
              width: 6.4rem;
              border-radius: 100%;
              vertical-align: bottom;
            }
          }
          .comment__content {
            .comment__info {
              position: relative;
              .comment__author {
                font-family: "Heebo", sans-serif;
                font-weight: 500;
                font-size: 1.9rem;
                line-height: 1.684;
                font-style: normal;
                color: #000000;
              }
              .comment__meta {
                font-family: "IBM Plex Sans", sans-serif;
                font-style: normal;
                line-height: 2.4rem;
                display: block;
                color: #7e7e7e;
                text-align: right;
                width: 150px;
                position: absolute;
                top: 0;
                right: 0;
                .comment__time {
                  font-size: 1.4rem;
                  text-transform: uppercase;
                  letter-spacing: 0.1rem;
                  color: #7e7e7e;
                }
                .comment__reply {
                  a {
                    font-size: 1.3rem;
                    font-family: "IBM Plex Sans", sans-serif;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.2rem;
                    color: #000000;
                  }
                }
              }
            }
            .comment__text {
              clear: both;
              margin: 1.6rem 0 0 0;
              padding: 0 175px 0 0;
            }
          }
          & ul.children {
            margin: 0;
            padding: 0;
            li {
              padding-left: 5%;
              margin-top: calc(3.2rem + 2rem);
              border-left: 1px solid rgba(0, 0, 0, 0.15);
            }
          }
        }
      }
    }
    comment-respond {
      margin-top: 6.4rem;
      form {
        padding-top: 6rem;
      }
    }
  }
}
@media screen and (max-width: 1400px) {
  .post-content {
    .content__page {
      padding: 0 2rem;
      .format-standard {
        .content__page-header {
          .content-header-title {
            font-size: 5.2rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .comment__avatar img {
    height: 6rem;
    width: 6rem;
  }
  .comment__meta {
    text-align: left;
    width: auto;
    position: static;
  }
  .comment__meta .comment__time,
  .comment__meta .comment__reply {
    display: inline-block;
  }
  .comment__meta .comment__time {
    margin-right: 12px;
  }
  .comment__text {
    padding: 0;
  }
  .comments-wrap .comment-respond {
    margin-top: 4.4rem;
  }
}

@media screen and (max-width: 800px) {
  .post-content {
    .content__page {
      .format-standard {
        .content__page-header {
          .content-header-title {
            font-size: 4rem;
          }
          .entry__header-meta {
            font-size: 1.7rem;
          }
        }
        .entry__pagenav {
          margin-top: 4rem;
          .entry__prev,
          .entry__next {
            width: auto;
            float: none;
            padding-right: 0;
            a{
              font-size: 3rem;
            }
          }
        }
        .entry__related {
          margin-top: 4rem;
          .related {
            .related__item{
              padding-left: 1rem;
              &:last-child{
                padding-right: 1rem;
              }
            }
            .related__item:nth-child(2n + 1) {
              clear: both;
            }
          }
        }
      }
    }
    .comments-wrap {
      .comment__avatar img {
        margin-top: 0;
        height: 5.2rem;
        width: 5.2rem;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .post-content {
    .content__page {
      .format-standard {
        .content__page-header {
          .content-header-title {
            font-size: 3rem;
          }
          .entry__header-meta {
            font-size: 1.7rem;
          }
        }
        .entry__pagenav {
          .entry__prev,
          .entry__next {
            width: auto;
            float: none;
            padding-right: 0;
          }
        }
        .entry__related {
          .related {
            margin-left: -2rem;
            .related__item {
              padding-left: 2rem;
            }
            .related__item:nth-child(2n + 1) {
              clear: both;
            }
          }
        }
      }
    }
    .comments-wrap {
      .commentlist > .comment {
        padding-top: 0;
        padding-left: 0;
      }
      .comment__avatar {
        display: none;
      }
      .comment ul.children li {
        margin-top: calc(3.2rem + 0rem);
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .post-content {
    .comments-wrap {
      .comment ul.children li {
        border-left: none;
      }
    }
  }
}
@media screen and (max-width: 460px) {
  .related {
    margin-left: 0 !important;
  }
  .related__item {
    float: none;
    width: auto;
    padding-left: 0;
  }
}
@media screen and (max-width: 400px) {
  .content-header-title {
    font-size: 4rem !important;
  }
  .comment-respond form {
    padding-top: 3.2rem !important;
  }
}
</style>


