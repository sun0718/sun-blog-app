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
      }
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


