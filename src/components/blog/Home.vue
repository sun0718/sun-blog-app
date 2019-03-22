<template>
  <el-scrollbar style="height:100%;" ref="elscrollbar">
    <el-main class="main">
      <div class="container">
        <el-row class="con-top d-flex-row mr-N-half ml-N-half">
          <el-col :xs="24" :sm="24" :md="16" :lg="16" class="d-flex-row pl-half pr-half">
            <ImageShow :num="1"></ImageShow>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="d-flex-column pl-half pr-half">
            <ImageShow :num="1"></ImageShow>
            <ImageShow :num="1"></ImageShow>
          </el-col>
        </el-row>
        <el-row class="con-center d-flex-row mr-N-half ml-N-half">
          <el-col :xs="24" :sm="24" :md="18" :lg="18">
            <ArticleShow>
              <ImageShow :num="1"></ImageShow>
            </ArticleShow>
            <ArticleShow>
              <ImageShow :num="1"></ImageShow>
            </ArticleShow>
            <ArticleShow>
              <ImageShow :num="1"></ImageShow>
            </ArticleShow>
            <ArticleShow>
              <ImageShow :num="1"></ImageShow>
            </ArticleShow>
            <ArticleShow>
              <ImageShow :num="1"></ImageShow>
            </ArticleShow>
            <ArticleShow>
              <ImageShow :num="1"></ImageShow>
            </ArticleShow>
            <ArticleShow>
              <ImageShow :num="1"></ImageShow>
            </ArticleShow>
            <ArticleShow>
              <ImageShow :num="1"></ImageShow>
            </ArticleShow>
            <ArticleShow>
              <ImageShow :num="1"></ImageShow>
            </ArticleShow>

            <el-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              style="display: flex;justify-content: center;"
            >
              <el-pagination
                :page-size="10"
                :pager-count="6"
                layout="prev, pager, next"
                :total="205"
              ></el-pagination>
            </el-col>
          </el-col>
          <el-col ref="sliderBar" class="sliderBar" :xs="24" :sm="24" :md="6" :lg="6">
            <aside ref="aside" :style="fixedStyle">
              <el-input
                placeholder="请输入搜索关键字"
                prefix-icon="el-icon-search"
                class="widget"
                v-model="searchData"
              ></el-input>
              <AboutMe/>
              <RecentPosts/>
              <TagCloud/>
            </aside>
          </el-col>
        </el-row>
        <el-row class="con-bottom d-flex-row mr-N-half ml-N-half">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" class="d-flex-row pl-half pr-half">
            <ImageShow :num="2"></ImageShow>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" class="d-flex-row pl-half pr-half">
            <ImageShow :num="2"></ImageShow>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" class="d-flex-row pl-half pr-half">
            <ThreeImageShow></ThreeImageShow>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" class="d-flex-row pl-half pr-half">
            <ThreeImageShow></ThreeImageShow>
          </el-col>
        </el-row>
        <Footer/>
      </div>
    </el-main>
  </el-scrollbar>
</template>

<script>
import ImageShow from "@/components/blog/common/ImageShow.vue";
import ArticleShow from "@/components/blog/common/ArticleShow.vue";
import AboutMe from "@/components/blog/common/AboutMe.vue";
import RecentPosts from "@/components/blog/common/RecentPosts.vue";
import TagCloud from "@/components/blog/common/TagCloud.vue";
import ThreeImageShow from "@/components/blog/common/ThreeImageShow.vue";
import Footer from "@/components/blog/common/Footer.vue";

export default {
  name: "home",
  data() {
    return {
      box: {
        height: "",
        width: "",
        offsetY: "",
        offsetX: ""
      },
      fixedStyle: {
        position: "",
        top: "",
        left: "",
        width: ""
      },
      tmp: "",
      resizeTimer: null
    };
  },
  methods: {},
  components: {
    ImageShow,
    ArticleShow,
    AboutMe,
    RecentPosts,
    TagCloud,
    ThreeImageShow,
    Footer
  },
  mounted() {
    // 获取元素
    var sliderBar = this.$refs["sliderBar"].$el;
    var aside = this.$refs["aside"];
    // 获取滚动的盒子
    var wrap = this.$refs["elscrollbar"].$refs["wrap"];

    this.sliderBar = sliderBar;
    this.wrap = wrap;
    this.aside = aside;
    // 获取元素数据和初始位置
    this.box.height = aside.offsetHeight;
    this.box.width = aside.offsetWidth;
    this.box.outwidth = sliderBar.offsetWidth - 16;
    this.box.offsetY = aside.getBoundingClientRect().bottom;
    this.box.offsetT = aside.getBoundingClientRect().top;
    this.box.offsetX = aside.getBoundingClientRect().left;

    // 临界点
    this.sliderBarHeight = sliderBar.getBoundingClientRect().bottom;
    // 获取滚动初始位置
    this.beforeY = wrap.scrollTop;
    // 获取屏幕高度
    this.screenY = document.body.clientHeight;

    // 监听滚动事件
    window.addEventListener("scroll", this.handleScroll, true);

    // 监听resize事件
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll(e) {
      // console.log(e)
      // 判断上滚还是下滚
      var afterY = this.wrap.scrollTop,
        delta = afterY - this.beforeY;
      if (delta == 0) return false;
      var end = delta > 0 ? "down" : "up";
      this.beforeY = afterY;
      // // 获取当前位置
      // var pos = sliderBar.getBoundingClientRect().left + 8
      if (end == "down") {
        // 滚动开始--------
        if(this.screenY<this.box.height){  //1 屏幕小于盒子高度
          if(afterY+this.screenY>= this.box.offsetY && afterY+this.screenY< this.sliderBarHeight){  // 2滚动至盒子与临界点中间
              if (this.aside.style.position !== "fixed" && this.tmp == "") {  //3.1普通往下的并且没有标记点，则固定底部
                  if(afterY>this.sliderBarHeight-this.box.height) return;
                  this.fixedStyle = {
                    position: "fixed",
                    bottom: "0",
                    left: this.box.outoffsetX + "px",
                    transform: `translateY(-20px)`,
                    width: this.box.outwidth + "px"
                  };
                } else if (this.aside.style.position !== "fixed" && this.tmp !== "") {  //3.2中间往返绝对定位有标记点
                  if (this.screenY + afterY >= this.tmp) {     //3.2.1 底部超过标记点
                    this.fixedStyle = {
                      position: "fixed",
                      bottom: "0",
                      left: this.box.outoffsetX + "px",
                      transform: `translateY(-20px)`,
                      width: this.box.outwidth + "px"
                    };
                    this.tmp = "";
                  } else {  return;}                           //3.2.1 底部没超过则无操作
                } else if (this.aside.style.position == "fixed" && this.aside.style.bottom == "") {  //3.3 从下到上然后往下
                  this.fixedStyle = {                        // 设置为固定定位
                    position: "absolute",
                    top: afterY - this.box.offsetT + "px",
                    width: this.box.outwidth + "px"
                  };
                  this.tmp = afterY + this.box.height;
                }
            }else if(afterY + this.screenY > this.sliderBarHeight){   // 屏幕底部超过临界点
                this.fixedStyle = {                        // 设置为固定定位
                  position: "absolute",
                  bottom: "0",
                  transform: `translateY(-20px)`,
                  width: this.box.outwidth + "px"
                };
            }
        }else{                             //屏幕大于盒子高度
            if(afterY>= this.box.offsetT && afterY+this.screenY< this.sliderBarHeight){  // 屏幕大于盒子顶部判断，否则吸顶
                this.fixedStyle = {
                    position: "fixed",
                    top: "0",
                    left: this.box.outoffsetX + "px",
                    transform: `translateY(20px)`,
                    width: this.box.outwidth + "px"
                  };
            }else if(afterY+this.screenY > this.sliderBarHeight){
                this.fixedStyle = {
                    position: "absolute",
                    bottom: "0",
                    transform: `translateY(-20px)`,
                    width: this.box.outwidth + "px"
                  };
            }
        }
      }else if(end == "up"){
        if(this.screenY<this.box.height){  
            if(afterY > this.sliderBarHeight - this.box.height){   //底部位于临界点和盒子中间
              this.fixedStyle = {
                position: "absolute",
                bottom: "0",
                transform: `translateY(-20px)`,
                width: this.box.outwidth + "px"
              };
            }else if(afterY < this.sliderBarHeight - this.box.height && afterY > this.box.offsetT){    //位于临界点和初始位置之间
                if (this.aside.style.position !== "fixed" && this.tmp == "") {
                  this.fixedStyle = {
                    position: "fixed",
                    top: "0",
                    left: this.box.offsetX + "px",
                    transform: `translateY(20px)`,
                    width: this.box.outwidth + "px"
                  };
                } else if (this.aside.style.position !== "fixed" && this.tmp !== "") {
                  if (afterY - this.box.offsetT <= this.tmp) {
                    this.fixedStyle = {
                      position: "fixed",
                      top: "0",
                      left: this.box.offsetX + "px",
                      transform: `translateY(20px)`,
                      width: this.box.outwidth + "px"
                    };
                    this.tmp = "";
                  } else {
                    return;
                  }
                } else if (
                  this.aside.style.position == "fixed" &&
                  this.aside.style.top == ""
                ) {
                  this.fixedStyle = {
                    position: "absolute",
                    top:
                      afterY +
                      this.screenY -
                      this.box.height -
                      this.box.offsetT +
                      "px",
                    width: "calc(100% - 16px)"
                  };
                  this.tmp =
                    afterY + this.screenY - this.box.height - this.box.offsetT;
                  }
            }else if(afterY < this.box.offsetT){
                this.fixedStyle = {
                    position: "absolute",
                    top:0,
                    width: "calc(100% - 16px)"
                  };
            }
        }else{
          if(afterY < this.sliderBarHeight - this.box.height && afterY > this.box.offsetT){   //底部位于临界点和盒子中间
            this.fixedStyle = {
              position: "absolute",
              bottom: "0",
              transform: `translateY(-20px)`,
              width: this.box.outwidth + "px"
            };
          }else if(afterY<this.box.offsetT){    //滚动到顶部和盒子初始位置之间
              this.fixedStyle = {
                position: "absolute",
                top: "0",
                width: this.box.outwidth + "px"
              };
          }else{
              this.fixedStyle = {
                position: "fixed",
                top: "0",
                left: this.box.outoffsetX + "px",
                transform: `translateY(20px)`,
                width: this.box.outwidth + "px"
              };
          }
        }
      }
    },
    handleResize() {
      var self = this;
      if (self.resizeTimer) clearTimeout(self.resizeTimer);

      self.box.offsetX = self.sliderBar.getBoundingClientRect().left + 8;
      self.box.outwidth = self.sliderBar.offsetWidth - 16;

      this.resizeTimer = setTimeout(function(self) {
        self.fixedStyle.left = self.box.offsetX + "px";
        self.fixedStyle.width = self.box.outwidth + "px";
      }, 100);
    }
  },
  watch: {}
};
</script>

<style lang="less">
.el-scrollbar__wrap {
  overflow: visible !important;
  overflow-x: hidden !important;
}
.main {
  width: 100%;
  padding-top: 2rem !important;
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    .con-top {
      @media screen and (max-width: 992px) {
        flex-direction: column;
        & > .d-flex-column {
          flex-direction: row;
          justify-content: space-between;
          & > .list-item:last-child {
            margin-left: 1rem;
          }
        }
      }
    }
    & > [class*="el-row"] {
      margin-bottom: 3rem;
    }
    & > [class*="mr-N-half"],
    & > [class*="ml-N-half"] {
      @media screen and(max-width: 992px) {
        margin-right: 0;
        margin-left: 0;
      }
    }
    .con-center {
      & > .el-col {
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        position: relative;
        &.sliderBar {
          @media screen and (max-width: 992px) {
            display: none;
          }
        }
        &:after {
          display: block;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 6;
        }
        .el-pagination {
          text-align: center;
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>


