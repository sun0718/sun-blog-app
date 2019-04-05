<template>
  <sun-wrapper>
    <div class="other-inner">
      <div class="post-header">
        <h2 class="post-title">時間軸綫</h2>
      </div>
      <div class="post-content">
        <div class="archives">
          <div class="archives_item">
            <h2>2018年07月</h2>
            <ul class="archives_list">
              <li>
                30日
                <a href="http://www.ptbird.cn/weex-module-dom.html">weex 内置模块 dom</a>
              </li>
              <li>
                29日
                <a href="http://www.ptbird.cn/weex-instance-variable.html">weex 实例属性的使用</a>
              </li>
              <li>
                29日
                <a href="http://www.ptbird.cn/weex-instance-variable.html">weex 实例属性的使用</a>
              </li>
              <li>
                29日
                <a href="http://www.ptbird.cn/weex-instance-variable.html">weex 实例属性的使用</a>
              </li>
              <li>
                29日
                <a href="http://www.ptbird.cn/weex-instance-variable.html">weex 实例属性的使用</a>
              </li>
            </ul>
          </div>
          <div class="archives_item">
            <h2>2018年07月</h2>
            <ul class="archives_list">
              <li>
                30日
                <a href="http://www.ptbird.cn/weex-module-dom.html">weex 内置模块 dom</a>
              </li>
              <li>
                29日
                <a href="http://www.ptbird.cn/weex-instance-variable.html">weex 实例属性的使用</a>
              </li>
              <li>
                29日
                <a href="http://www.ptbird.cn/weex-instance-variable.html">weex 实例属性的使用</a>
              </li>
              <li>
                29日
                <a href="http://www.ptbird.cn/weex-instance-variable.html">weex 实例属性的使用</a>
              </li>
              <li>
                29日
                <a href="http://www.ptbird.cn/weex-instance-variable.html">weex 实例属性的使用</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </sun-wrapper>
</template>

<script>
export default {
  name: "timeline",
  data() {
    return {};
  }
};
</script>


<style lang="less">
.post-header {
  margin: 0 0 3rem;
  line-height: 2.5rem;
  font-size: 18px;
  display: block;
  .post-title {
    font-weight: 700;
    color: #16a085;
  }
}
.post-content {
  .archives {
    .archives_item {
      h2 {
        border-bottom: 1px solid rgb(238, 238, 238);
        padding-bottom: 0.3em;
        font-size: 1.3em;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
        line-height: 1.25;
      }
      .archives_list {
        padding-left: 2rem;
        margin-bottom: 1rem;
        li {
          list-style: disc;
        }
        a {
          color: #2eabfd;
          padding-left: 1rem;
        }
      }
    }
  }
  & > *:last-child {
    margin-bottom: 0 !important;
  }
  & > *:first-child {
    margin-top: 0 !important;
  }
}
</style>
