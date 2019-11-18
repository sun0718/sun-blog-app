<template>
  <div class="masonry-wrap" v-loading='homeLoading'>
    <div class="masonry">
      <el-row :gutter="30">
        <el-col :span="colSpan" v-if="this.colNum >= 1" ref="col1">
          <article class="entry" v-for="item in listCon1" :key="item.id">
            <div class="entry__thumb">
              <router-link :to="'/blog/post/'+item.id" class="entry__thumb-link">
                <img :src="item.imageShow" alt />
              </router-link>
            </div>
            <div class="entry__text">
              <div class="entry__header">
                <h2 class="entry__title">
                  <router-link :to="'/blog/post/'+item.id">{{item.title}}.</router-link>
                </h2>
                <div class="entry__meta">
                  <span class="entry__meta-cat">
                    <span v-for="scope in item.categorie" :key="scope" v-html="scope"></span>
                  </span>
                  <span class="entry__meta-date">
                    <span href="single-standard.html" class="time">{{item.createTime}}</span>
                  </span>
                </div>
              </div>
              <div class="entry__excerpt">
                <p>{{item.preface}}</p>
              </div>
            </div>
          </article>
        </el-col>
        <el-col :span="colSpan" v-if="this.colNum >= 2" ref="col2">
          <article class="entry" v-for="item in listCon2" :key="item.id">
            <div class="entry__thumb">
              <router-link :to="'/blog/post/'+item.id" class="entry__thumb-link">
                <img :src="item.imageShow" alt />
              </router-link>
            </div>
            <div class="entry__text">
              <div class="entry__header">
                <h2 class="entry__title">
                  <router-link :to="'/blog/post/'+item.id">{{item.title}}.</router-link>
                </h2>
                <div class="entry__meta">
                  <span class="entry__meta-cat">
                    <span v-for="scope in item.categorie" :key="scope" v-html="scope"></span>
                  </span>
                  <span class="entry__meta-date">
                    <span href="single-standard.html" class="time">{{item.createTime}}</span>
                  </span>
                </div>
              </div>
              <div class="entry__excerpt">
                <p>{{item.preface}}</p>
              </div>
            </div>
          </article>
        </el-col>
        <el-col :span="colSpan" v-if="this.colNum >= 3" ref="col3">
          <article class="entry" v-for="item in listCon3" :key="item.id">
            <div class="entry__thumb">
              <router-link :to="'/blog/post/'+item.id" class="entry__thumb-link">
                <img :src="item.imageShow" alt />
              </router-link>
            </div>
            <div class="entry__text">
              <div class="entry__header">
                <h2 class="entry__title">
                  <router-link :to="'/blog/post/'+item.id">{{item.title}}.</router-link>
                </h2>
                <div class="entry__meta">
                  <span class="entry__meta-cat">
                    <span v-for="scope in item.categorie" :key="scope" v-html="scope"></span>
                  </span>
                  <span class="entry__meta-date">
                    <span href="single-standard.html" class="time">{{item.createTime}}</span>
                  </span>
                </div>
              </div>
              <div class="entry__excerpt">
                <p>{{item.preface}}</p>
              </div>
            </div>
          </article>
        </el-col>
        <el-col :span="colSpan" v-if="this.colNum >= 4" ref="col4">
          <article class="entry" v-for="item in listCon4" :key="item.id">
            <div class="entry__thumb">
              <router-link :to="'/blog/post/'+item.id" class="entry__thumb-link">
                <img :src="item.imageShow" alt />
              </router-link>
            </div>
            <div class="entry__text">
              <div class="entry__header">
                <h2 class="entry__title">
                  <router-link :to="'/blog/post/'+item.id">{{item.title}}.</router-link>
                </h2>
                <div class="entry__meta">
                  <span class="entry__meta-cat">
                    <span v-for="scope in item.categorie" :key="scope" v-html="scope"></span>
                  </span>
                  <span class="entry__meta-date">
                    <span href="single-standard.html" class="time">{{item.createTime}}</span>
                  </span>
                </div>
              </div>
              <div class="entry__excerpt">
                <p>{{item.preface}}</p>
              </div>
            </div>
          </article>
        </el-col>
      </el-row>
      <!-- end article -->
    </div>
    <!-- end masonry -->
    <sun-page v-if="!homeLoading"/>
  </div>
  <!-- end masonry-wrap -->
</template>

<script>
import bus from "@/store/bus";

export default {
  name: "home",
  data() {
    return {
      colNum: 1,
      colSpan: 24,
      listCon1: [],
      listCon2: [],
      listCon3: [],
      listCon4: [],
      homeLoading: false
    };
  },
  components: {},
  created() {
    var wid = this.getClient().width;
    this.colNum = wid > 1800 ? 4 : wid > 1500 ? 3 : wid > 800 ? 2 : 1;
    this.colSpan = 24 / this.colNum;
    this._homePageData()
  },
  mounted() {
    var _that = this;
    this.homeLoading = true;
    this.mountMenu();
    window.addEventListener(
      "resize",
      this.throttle(() => {
        (this.listCon1 = []),
          (this.listCon2 = []),
          (this.listCon3 = []),
          (this.listCon4 = []);
        var wid = this.getClient().width;
        this.colNum = wid > 1800 ? 4 : wid > 1500 ? 3 : wid > 800 ? 2 : 1;
        this.colSpan = 24 / this.colNum;
        this.$nextTick(() => {
          this.mountMenu();
        });
      }, 1000)
    );
  },
  methods: {
    throttle(fn, delay) {
      let canRun = true; // 通过闭包保存一个标记
      return function() {
        // 在函数开头判断标记是否为true，不为true则return
        if (!canRun) return;
        // 立即设置为false
        canRun = false;
        // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => {
          // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
          // 当定时器没有执行的时候标记永远是false，在开头被return掉
          fn.apply(this, arguments);
          canRun = true;
        }, delay);
      };
    },
    _homePageData() {
      this.$get("/getPosts", {
        getAd: true
      }).then(res => {
        this.postList  = res.result.list.allPost
        this.mountMenu();
      });
    },
    //clientWidth 处理兼容性
    getClient() {
      return {
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
      };
    },
    // 瀑布流
    mountMenu(arg) {
      var temp = this.postList;
      if(!temp || !temp.length) return;
      var index = arg || 0;
      var num = this.selectCol();
      if (temp.length > index) {
        this[`listCon${num}`].push(this.postList[index]);
        this.$nextTick(() => {
          this.mountMenu(index + 1);
        });
      }else{
        this.homeLoading = false;
      }
    },
    selectCol() {
      var _that = this;
      var getHeight = ref => {
        return _that.$refs[ref].$el.offsetHeight;
      };
      var hei = [];
      for (var i = 1; i <= this.colNum; i++) {
        this[`listCon${i}`] = this[`listCon${i}`] || [];
        hei[i - 1] = getHeight(`col${i}`);
      }
      switch (Math.min(...hei)) {
        case hei[0]:
          return "1";
          break;
        case hei[1]:
          return "2";
          break;
        case hei[2]:
          return "3";
        case hei[3]:
          return "4";
          break;
      }
    }
  },
  watch: {}
};
</script>

<style lang="less">
.masonry-wrap {
  width: 100%;
  .masonry {
    margin-bottom: 3.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    .el-row {
      margin-left: 0 !important;
      margin-right: 0 !important;
      .entry {
        margin-bottom: 40px;
        color: rgba(0, 0, 0, 0.5);
        .entry__thumb {
          position: relative;
          overflow: hidden;
          .entry__thumb-link {
            img {
              vertical-align: bottom;
              transition: all 0.3s;
            }
            &::before {
              content: "";
              display: block;
              background: rgba(21, 21, 21, 0.6);
              opacity: 0;
              visibility: hidden;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              transition: all 0.3s;
              z-index: 1;
            }
            &::after {
              content: "...";
              font-family: georgia, serif;
              font-size: 2.4rem;
              z-index: 1;
              display: block;
              height: 88px;
              width: 88px;
              letter-spacing: -1px;
              line-height: 88px;
              margin-left: -44px;
              margin-top: -44px;
              position: absolute;
              left: 50%;
              top: 50%;
              text-align: center;
              color: #ffffff;
              opacity: 0;
              visibility: hidden;
              transition: all 0.3s;
              -webkit-transform: scale(0.5);
              transform: scale(0.5);
            }
          }
          &:hover {
            .entry__thumb-link {
              &::before {
                opacity: 1;
                visibility: visible;
              }
              &::after {
                opacity: 1;
                visibility: visible;
                transform: scale(1);
              }
              img {
                transform: scale(1.05);
              }
            }
          }
        }
        .entry__text {
          padding: 3.2rem 2.8rem 4rem;
          background-color: #ffffff;
          p {
            margin-bottom: 0;
          }
          .entry__header {
            .entry__title {
              font-size: 2.6rem;
              font-weight: 400;
              line-height: 1.231;
              margin-top: 0;
              margin-bottom: 0.8rem;
              a {
                color: #000000;
                &:hover,
                &:focus {
                  color: #267367;
                }
              }
            }
            .entry__meta {
              font-family: "IBM Plex Sans", sans-serif;
              font-weight: 400;
              font-size: 11.5px;
              line-height: 2rem;
              text-transform: uppercase;
              letter-spacing: 1.2px;
              margin-bottom: 3.2rem;
              .entry__meta-cat {
                margin-right: 2rem;
                span {
                  margin-right: 0;
                }
                span::after {
                  content: ", ";
                }
                span:last-child::after {
                  display: none;
                }
              }
              .entry__meta-date {
                display: inline-block;
                span {
                  color: #000000;
                }
              }
            }
          }
          .entry__excerpt {
            font-size: 1.7rem;
            line-height: 1.882;
          }
        }
      }
    }
  }
}
</style>


