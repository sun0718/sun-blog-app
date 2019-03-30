<template>
      <sun-wrapper>
        <el-row class="con-top d-flex-row mr-N-half ml-N-half">
          <el-col :xs="24" :sm="24" :md="16" :lg="16" class="d-flex-row pl-half pr-half">
            <sun-imageShow :key="postData[2].id" :postData="postData[2]" :num="1"></sun-imageShow>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="d-flex-column pl-half pr-half">
            <sun-imageShow :key="postData[3].id"  :postData="postData[3]" :num="1"></sun-imageShow>
            <sun-imageShow :key="postData[4].id"  :postData="postData[4]" :num="1"></sun-imageShow>
          </el-col>
        </el-row>
        <el-row class="con-center d-flex-row mr-N-half ml-N-half">
          <el-col :xs="24" :sm="24" :md="18" :lg="18">
            <ArticleShow>
              <sun-imageShow :num="1"></sun-imageShow>
            </ArticleShow>
            <ArticleShow>
              <sun-imageShow :num="1"></sun-imageShow>
            </ArticleShow>
            <ArticleShow>
              <sun-imageShow :num="1"></sun-imageShow>
            </ArticleShow>
            <ArticleShow>
              <sun-imageShow :num="1"></sun-imageShow>
            </ArticleShow>
            <ArticleShow>
              <sun-imageShow :num="1"></sun-imageShow>
            </ArticleShow>
            <ArticleShow>
              <sun-imageShow :num="1"></sun-imageShow>
            </ArticleShow>
            <ArticleShow>
              <sun-imageShow :num="1"></sun-imageShow>
            </ArticleShow>
            <ArticleShow>
              <sun-imageShow :num="1"></sun-imageShow>
            </ArticleShow>
            <ArticleShow>
              <sun-imageShow :num="1"></sun-imageShow>
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
            <sun-imageShow :num="2"></sun-imageShow>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" class="d-flex-row pl-half pr-half">
            <sun-imageShow :num="2"></sun-imageShow>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" class="d-flex-row pl-half pr-half">
            <ThreeImageShow></ThreeImageShow>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" class="d-flex-row pl-half pr-half">
            <ThreeImageShow></ThreeImageShow>
          </el-col>
        </el-row>
      </sun-wrapper>
</template>

<script>

import ArticleShow from "@/views/blog/home/children/ArticleShow.vue";
import AboutMe from "@/views/blog/about/AboutMe.vue";
import RecentPosts from "@/views/blog/home/children/RecentPosts.vue";
import TagCloud from "@/views/blog/home/children/TagCloud.vue";
import ThreeImageShow from "@/views/blog/home/children/ThreeImageShow.vue";

import bus from '@/store/bus';

export default {
  name: "home",
  data() {
    return {
      fixedStyle: {
        position: "",
        top: "",
        left: "",
        width: ""
      },
      postData:[
      {
        "createTime": "1553864902523",
        "_id": "5c9e18caa9daf422f4e5f70d",
        "id": 1,
        "title": "MongoDB安装与配置",
        "like": "86",
        "categorie": "markdown"
      },
      {
        "createTime": "1553865555301",
        "_id": "5c9e1b56f0141d3e20e18298",
        "id": 3,
        "title": "MarkDown的学习",
        "like": "102",
        "categorie": "markdown"
      },
      {
        "createTime": "1553877570547",
        "_id": "5c9e4ce7a0ae0a4ad4ab3a60",
        "id": 4,
        "title": "MarkDown的学习",
        "like": "102",
        "categorie": "markdown",
        "imageShow": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553888273642&di=22a28ef1f928acd85d12c4cab1e34097&imgtype=0&src=http%3A%2F%2Fp.ssl.qhimg.com%2Ft0183ace9a5dc7d817e.jpg"
      },
      {
        "createTime": "1553879552014",
        "_id": "5c9e5a1a081c00339cb8c8ef",
        "id": 5,
        "title": "朴信惠（박신혜，Park Shin Hye），1990年2月18日出生于韩国光州，韩国女演员，毕业于首尔中央大学戏剧电影学系",
        "like": "199",
        "categorie": "markdown",
        "imageShow": "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=8de7d69cb87eca80060831b5f04afcb8/e61190ef76c6a7eff1edd899f5faaf51f2de6641.jpg"
      },
      {
        "createTime": "1553879552014",
        "_id": "5c9e5cab081c00339cb8c8f0",
        "id": 6,
        "title": "金容仙，艺名Solar（ 颂乐），1991年2月21日出生于韩国首尔，韩国流行乐女歌手，女子演唱组合MAMAMOO成员。",
        "like": "199",
        "categorie": "韩国",
        "imageShow": "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=58a535e22af5e0fefa1581533d095fcd/c8177f3e6709c93dd875340c983df8dcd0005441.jpg"
      }
    ]
    };
  },
  components: {
    ArticleShow,
    AboutMe,
    RecentPosts,
    TagCloud,
    ThreeImageShow
  },
  mounted() {
    bus.$on("fixedStyle", msg => {
      this.fixedStyle = msg;
    });
    this.$get('/postList').then((res)=>{
        console.log(res.result.list)
        this.postData = res.result.list
    })
  },
  watch: {}
};
</script>

<style lang="less">
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


