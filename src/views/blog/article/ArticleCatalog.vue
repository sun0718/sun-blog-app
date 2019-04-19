<template>
  <div class="post-catalog">
    <div class="sidebar-block catalog-block">
      <nav class="article-catalog">
        <div class="catalog-title">目录</div>
        <div class="catalog-body">
          <ul data-v-3414e7f5 class="catalog-list" style="margin-top: 0px;">
            <li data-v-3414e7f5 class="item d1" v-for="items in catalogList" :key="items.id">
              <a :href="items.id" :title="items.title" :data-id="items.id">{{items.title}}</a>
              <ul class="sub-list" v-if="items.child.length>0">
                <li class="item d2" v-for="item in items.child" :key="item.id">
                  <a :href="item.id" :title="item.title" :data-id="items.id">{{item.title}}</a>
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
      catalogOffsetTop: []
    };
  },
  mounted() {
    this.createCatalog();
    var _that = this;
    document.querySelector(".scrollBar").addEventListener(
      "scroll",
      function(e) {
        var arr = _that.catalogOffsetTop;

        Array.from(document.querySelectorAll(`a[data-id]`)).map(item => {
          item.className = "";
        });
        for (var i = 0; i < arr.length; i++) {
          if (e.target.scrollTop < arr[0].offsetTop) {
            document.querySelector(`a[data-id='${arr[0].id}']`).className =
              "current";
              console.log(1)
            break;
          }
          if (e.target.scrollTop > arr[arr.length-1].offsetTop) {
            document.querySelector(
              `a[data-id='${arr[arr.length-1].id}']`
            ).className = "current";
            console.log(2)
            break;
          }
          if (
            e.target.scrollTop >= arr[i].offsetTop &&
            e.target.scrollTop < arr[i + 1].offsetTop
          ) {
            // debugger;
            document.querySelector(`a[data-id='${arr[i].id}']`).className =
              "current";
            break;
          }
        }
      },
      true
    );
  },
  methods: {
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
        if (hList[j].tagName == "H3") {
          (hList[j].id = "catalog-" + j.toString()),
            catalogOffsetTop.push({
              id: "#" + hList[j].id,
              offsetTop: hList[j].offsetTop
            });
          catalogList[indexCata] = {
            id: "#catalog-" + j.toString(),
            title: hList[j].innerText,
            child: []
          };
          indexCata++;
        } else if (hList[j].tagName == "H4") {
          if (catalogList.length > 0) {
            (hList[j].id = "catalog-" + j.toString()),
              catalogList[catalogList.length - 1].child.push({
                id: "#catalog-" + j.toString(),
                title: hList[j].innerText
              });
          }
        }
      }
      console.log(catalogOffsetTop);
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
