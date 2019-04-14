<template>
  <el-scrollbar style="height:100%;" ref="elscrollbar" class="flex scrollBar">
    <el-main class="main">
      <div class="container">
        <slot></slot>
        <sun-footer></sun-footer>
      </div>
    </el-main>
  </el-scrollbar>
</template>

<script>
import bus from "@/store/bus";

export default {
  name: "sunWrapper",
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
  mounted() {
    // 获取元素
    if (this.$slots.default[1]) {
      var sliderBar = this.$slots.default[1].context.$refs["sliderBar"].$el;
      var aside = this.$slots.default[1].context.$refs["aside"];
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
      if (this.sliderBarHeight !== this.box.offsetY) {
        // 监听滚动事件
        // window.addEventListener("scroll", this.handleScroll, true);
        this.wrap.addEventListener("scroll", this.handleScroll, true);
        // 监听resize事件
        window.addEventListener("resize", this.handleResize);
      }
    }
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
      if (end == "down") {
        // 滚动开始--------
        if (this.screenY < this.box.height) {
          //1 屏幕小于盒子高度
          if (
            afterY + this.screenY >= this.box.offsetY &&
            afterY + this.screenY < this.sliderBarHeight
          ) {
            // 2滚动至盒子与临界点中间
            if (this.aside.style.position !== "fixed" && this.tmp == "") {
              //3.1普通往下的并且没有标记点，则固定底部
              if (afterY > this.sliderBarHeight - this.box.height) return;
              this.fixedStyle = {
                position: "fixed",
                bottom: "0",
                left: this.box.outoffsetX + "px",
                transform: `translateY(-20px)`,
                width: this.box.outwidth + "px"
              };
            } else if (
              this.aside.style.position !== "fixed" &&
              this.tmp !== ""
            ) {
              //3.2中间往返绝对定位有标记点
              if (this.screenY + afterY >= this.tmp) {
                //3.2.1 底部超过标记点
                this.fixedStyle = {
                  position: "fixed",
                  bottom: "0",
                  left: this.box.outoffsetX + "px",
                  transform: `translateY(-20px)`,
                  width: this.box.outwidth + "px"
                };
                this.tmp = "";
              } else {
                return;
              } //3.2.1 底部没超过则无操作
            } else if (
              this.aside.style.position == "fixed" &&
              this.aside.style.bottom == ""
            ) {
              //3.3 从下到上然后往下
              this.fixedStyle = {
                // 设置为固定定位
                position: "absolute",
                top: afterY - this.box.offsetT + "px",
                width: this.box.outwidth + "px"
              };
              this.tmp = afterY + this.box.height;
            }
          } else if (afterY + this.screenY > this.sliderBarHeight) {
            // 屏幕底部超过临界点
            this.fixedStyle = {
              // 设置为固定定位
              position: "absolute",
              bottom: "0",
              transform: `translateY(-20px)`,
              width: this.box.outwidth + "px"
            };
          }
        } else {
          //屏幕大于盒子高度
          if (
            afterY >= this.box.offsetT &&
            afterY + this.screenY < this.sliderBarHeight
          ) {
            // 屏幕大于盒子顶部判断，否则吸顶
            this.fixedStyle = {
              position: "fixed",
              top: "0",
              left: this.box.outoffsetX + "px",
              transform: `translateY(20px)`,
              width: this.box.outwidth + "px"
            };
          } else if (afterY + this.screenY > this.sliderBarHeight) {
            this.fixedStyle = {
              position: "absolute",
              bottom: "0",
              transform: `translateY(-40px)`,
              width: this.box.outwidth + "px"
            };
          }
        }
      } else if (end == "up") {
        if (this.screenY < this.box.height) {
          if (afterY > this.sliderBarHeight - this.box.height) {
            //底部位于临界点和盒子中间
            this.fixedStyle = {
              position: "absolute",
              bottom: "0",
              transform: `translateY(-20px)`,
              width: this.box.outwidth + "px"
            };
          } else if (
            afterY < this.sliderBarHeight - this.box.height &&
            afterY > this.box.offsetT
          ) {
            //位于临界点和初始位置之间
            if (this.aside.style.position !== "fixed" && this.tmp == "") {
              this.fixedStyle = {
                position: "fixed",
                top: "0",
                left: this.box.offsetX + "px",
                transform: `translateY(20px)`,
                width: this.box.outwidth + "px"
              };
            } else if (
              this.aside.style.position !== "fixed" &&
              this.tmp !== ""
            ) {
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
          } else if (afterY < this.box.offsetT) {
            this.fixedStyle = {
              position: "absolute",
              top: 0,
              width: "calc(100% - 16px)"
            };
          }
        } else {
          if (
            afterY > this.box.offsetT &&
            afterY < this.sliderBarHeight - this.screenY
          ) {
            //底部位于临界点和盒子中间
            this.fixedStyle = {
              position: "fixed",
              top: "0",
              transform: `translateY(20px)`,
              width: this.box.outwidth + "px"
            };
          } else if (afterY < this.box.offsetT) {
            //滚动到顶部和盒子初始位置之间
            this.fixedStyle = {
              position: "absolute",
              top: "0",
              width: this.box.outwidth + "px"
            };
          } else if (afterY > this.sliderBarHeight - this.box.height) {
            //滚动到顶部和盒子初始位置之间
            return;
          } else {
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

      bus.$emit("fixedStyle", this.fixedStyle);
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
  }
};
</script>


<style lang="less">
.scrollBar {
  .el-scrollbar__wrap {
    overflow: visible !important;
    overflow-x: hidden !important;
  }
}

.main {
  width: 100%;
  padding-top: 2rem !important;
  .container {
    width: 100%;
    padding-top: 2rem;
    margin-right: auto;
    margin-left: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 768px) {
      max-width: 540px;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      & > .ml-N-half.mr-N-half {
        margin-right: 0;
      }
    }
    @media (min-width: 768px) {
      max-width: 720px;
      padding-right: 1rem;
      padding-left: 1rem;
      & > .ml-N-half.mr-N-half {
        margin-right: 0;
      }
    }
    @media (min-width: 992px) {
      max-width: 960px;
      padding-right: 1rem;
      padding-left: 1rem;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
      padding-right: 2rem;
      padding-left: 2rem;
    }
    .other-inner {
      width: 100%;
      padding: 2rem;
      margin: auto;
      flex: 1;
      @media (max-width: 768px) {
        max-width: 540px;
        padding: 0.5rem;
      }
      @media (min-width: 768px) {
        max-width: 720px;
        padding: 1rem;
      }
      @media (min-width: 992px) {
        max-width: 860px;
      }
    }
  }
}
</style>

