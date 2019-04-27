<template>
  <div class="post-catalog">
    <div class="sidebar-block catalog-block">
      <nav class="article-catalog">
        <div class="catalog-title">目录</div>
        <div class="catalog-body">
          <ul data-v-3414e7f5 class="catalog-list" style="margin-top: 0px;">
            <li data-v-3414e7f5 class="item d1" v-for="items in catalogList" :key="items.id">
              <a :href="items.id" :title="items.title" :data-id="items.id" :class="{'current':currentIndex===items.index}">{{items.title}}</a>
              <ul class="sub-list" v-if="items.child.length>0">
                <li class="item d2" v-for="item in items.child" :key="item.id">
                  <a :href="item.id" :title="item.title" :data-id="items.id" :class="{'current':currentIndex===item.index}">{{item.title}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "",
  data() {
    return {
      catalogList: [],
      catalogOffsetTop: [],
      currentIndex: 0,
      screenY:-1
    };
  },
  mounted() {
    this.createCatalog();
    console.log(this.catalogOffsetTop)
    document.querySelector(".scrollBar").addEventListener("scroll",this._scrollEvent,true);
  },
  watch:{
    screenY(newY) {
      const listHeight = this.catalogOffsetTop;
      if(newY>0 && newY <= this.catalogOffsetTop[1].offsetTop){
        this.currentIndex = 0
        return
      }
      // 在中间部分滚动
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i].offsetTop
        let height2 = listHeight[i + 1].offsetTop
        if (newY >= height1 && newY < height2) {
          this.currentIndex = i
          return
        }
      }
      // 当滚动到底部，且-newY大于最后一个元素的上限
      this.currentIndex = listHeight.length - 1
    }
  },
  methods: {
    _scrollEvent(e){
        this.screenY = e.target.scrollTop
    },
    createCatalog() {
      var con = document.querySelector(".content").childNodes[1].childNodes;
      var hList = [],
        catalogList = [],
        indexCata = 0,
        catalogOffsetTop = [];
      for (var i = 0; i < con.length; i++) {
        if (
          con[i].tagName.substr(0, 2) == "H3" ||
          con[i].tagName.substr(0, 2) == "H4"
        ) {
          hList.push(con[i]);
        }
      }
      for (var j = 0; j < hList.length; j++) {
        // 存储元素的偏移位置
        catalogOffsetTop.push({
          offsetTop: hList[j].offsetTop,
          index : j
        });
        if (hList[j].tagName == "H3") {
          hList[j].id = "catalog-" + j.toString(),
          catalogList[indexCata] = {
            id: "#catalog-" + j.toString(),
            index: j,
            title: hList[j].innerText,
            child: []
          };
          indexCata++;
        } else if (hList[j].tagName == "H4") {
          if (catalogList.length > 0) {
            (hList[j].id = "catalog-" + j.toString()),
              catalogList[catalogList.length - 1].child.push({
                id: "#catalog-" + j.toString(),
                index: j,
                title: hList[j].innerText
              });
          }
        }
      }
      this.catalogList = catalogList;
      this.catalogOffsetTop = catalogOffsetTop;
    }
  }
};
</script>


<style lang="less">
.post-catalog {
  position: absolute;
  top: 2rem;
  right: 0rem;
  width: 15rem;
  .sidebar-block {
    position: fixed;
    top: 7rem;
    width: inherit;
    transition: top 1s ease-in;
    margin-bottom: 1.5rem;
    border-radius: 2px;
    .catalog-title {
      font-size: 0.875rem;
      font-weight: 600;
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
              background-color: #000;
              border-radius: 50%;
            }
            &:hover {
              background-color: #ebedef;
            }
            &.current {
              color: #00818a;
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
  @media screen and (max-width: 992px) {
    display: none;
  }
}
</style>
