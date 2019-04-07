<template>
  <sun-wrapper>
    <el-row class="con-top d-flex-row mr-N-half ml-N-half">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" class="d-flex-row pl-half pr-half">
        <sun-imageShow :key="adList[0].id" :postData="adList[0]" :num="1"></sun-imageShow>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" class="d-flex-column pl-half pr-half">
        <sun-imageShow :key="adList[1].id" :postData="adList[1]" :num="1"></sun-imageShow>
        <sun-imageShow :key="adList[2].id" :postData="adList[2]" :num="1"></sun-imageShow>
      </el-col>
    </el-row>
    <el-row class="con-center d-flex-row mr-N-half ml-N-half">
      <el-col :xs="24" :sm="24" :md="18" :lg="18">
        <ArticleShow v-for="(item) in postData" :key="item.id" :postData="item">
          <sun-imageShow :key="item.id" :postData="item" :showTitle='false' :num="1"></sun-imageShow>
        </ArticleShow>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" style="display: flex;justify-content: center;">
          <el-pagination :page-size="10" :pager-count="6" layout="prev, pager, next" :total="205"></el-pagination>
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
import AboutMe from "@/views/blog/about/AboutImage.vue";
import RecentPosts from "@/views/blog/home/children/RecentPosts.vue";
import TagCloud from "@/views/blog/home/children/TagCloud.vue";
import ThreeImageShow from "@/views/blog/home/children/ThreeImageShow.vue";

import bus from "@/store/bus";

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
      searchData:'',
      postData: [],
      adList: []
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
    var self = this;
    this.$get("/getPosts", {
      getAd: true
    }).then(res => {
      var allList = res.result.list;
      if (allList.overHead.length < 3) {
        self.adList = res.result.list.overHead.concat(
          res.result.list.allPost.slice(0, 3 - allList.overHead.length)
        );
        self.postData = res.result.list.allPost.slice(
          3 - allList.overHead.length,
          res.result.list.allPost.length
        );
      } else {
        self.adList = res.result.list.overHead;
        self.postData = res.result.list.allPost;
      }
    });
  },
  watch: {}
};
</script>

<style lang="less">
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
  @media screen and (max-width: 992px) {
    margin-bottom: 1.5rem;
  }
}
& > [class*="mr-N-half"],
& > [class*="ml-N-half"] {
  @media screen and(max-width: 992px) {
    margin-right: 0;
    margin-left: 0;
  }
}
.con-center {
  margin-top: 2rem;
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
    .el-pagination {
      text-align: center;
    }
  }
}
</style>


