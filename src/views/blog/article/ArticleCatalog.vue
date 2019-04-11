<template>
  <div class="post-catalog">
    <div class="sidebar-block catalog-block">
      <nav class="article-catalog">
        <div class="catalog-title">目录</div>
        <div class="catalog-body">
          <ul data-v-3414e7f5 class="catalog-list" style="margin-top: 0px;">
            <li data-v-3414e7f5 class="item d1">
              <a
                href="#heading-0"
                title="先来看下默认的Nginx配置，我将以此为基础依次介绍Nginx的用法"
              >先来看下默认的Nginx配置，我将以此为基础依次介绍Nginx的用法</a>
              <!---->
            </li>
            <li data-v-3414e7f5 class="item d1">
              <a href="#heading-0" title="先来看下默认的Nginx配置，我将以此为基础依次介绍Nginx的用法">配置</a>
            </li>
            <li data-v-3414e7f5 class="item d1">
              <a href="#heading-0" title="先来看下默认的Nginx配置，我将以此为基础依次介绍Nginx的用法">高级</a>
              <ul class="sub-list">
                <li class="item d2">
                  <a href="#heading-3" title="匹配规则">匹配规则</a>
                  <!---->
                </li>
                <li class="item d2">
                  <a href="#heading-4" title="当然我们还可以通过状态码来过滤请求就像这样">当然我们还可以通过状态码来过滤请求就像这样</a>
                  <!---->
                </li>
              </ul>
            </li>
            <li data-v-3414e7f5 class="item d1">
              <a href="#heading-0" title="先来看下默认的Nginx配置，我将以此为基础依次介绍Nginx的用法">后续</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>


<style lang="less">
.post-catalog {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 15rem;
  .sidebar-block {
    position: fixed;
    top: 7rem;
    width: inherit;
    transition: top .2s;
    margin-bottom: 1.5rem;
    border-radius: 2px;
    .catalog-title {
      font-size: 0.875rem;
      color: #000;
    }
    .catalog-body {
      position: relative;
      margin: 6px 0;
      overflow: hidden;
      .catalog-list {
        position: relative;
        .item {
          margin: 0;
          padding: 0;
          font-size: 0.875rem;
          font-weight: 400;
          color: #333;
          list-style: none;
          a {
            display: block;
            position: relative;
            padding: 4px 0 4px 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &:before {
              content: "";
              position: absolute;
              top: 50%;
              left: 0;
              margin-top: -2px;
              width: 4px;
              height: 4px;
              background-color: currentColor;
              border-radius: 50%;
            }
            &:hover {
              background-color: #ebedef;
            }
          }
          &.d1 {
            font-weight: 600;
            color: #000;
            a {
              margin: 6px 0;
              padding: 4px 0 4px 21px;
              &::before {
                left: 5px;
                margin-top: -3px;
                width: 6px;
                height: 6px;
              }
            }
            &:first-child > a {
              margin-top: 0;
            }
          }
          &.d2 {
            a {
              padding-left: 36px;
              &::before {
                left: 24px;
              }
            }
          }
          &.active {
            a {
              color: #007fff;
              background-color: #ebedef;
            }
          }
        }
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 7px;
          bottom: 0;
          width: 2px;
          background-color: #ebedef;
          opacity: 0.5;
        }
      }
    }
  }
  @media screen and (max-width: 992px){
      display: none
  }
}
</style>
