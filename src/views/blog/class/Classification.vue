<template>
  <sun-Wrapper>
    <main class="d-flex-column classification" v-loading="loading">
      <div class="mb-2x">
        <h2 class="text-lg post-title">{{cate}}</h2>
      </div>
      <el-row class="d-flex-row flex d-flex-wrap class-list mr-N-1x ml-N-1x" v-if="this.classList.length>0">
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <sun-imageShow :postData="firstList" :num="3" :key="firstList._id"/>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" v-for="item in classList" :key="'1'+item._id">
          <sun-imageShow :postData="item" :num="3" :key="'1'+item._id"/>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" v-for="item in classList" :key="'2'+item._id">
          <sun-imageShow :postData="item" :num="3" :key="'2'+item._id"/>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" v-for="item in classList" :key="'3'+item._id">
          <sun-imageShow :postData="item" :num="3" :key="'3'+item._id"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
            <p class="text-center">暂无数据！！</p>
        </el-col>
      </el-row>
    </main>
  </sun-Wrapper>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      loading: true,
      firstList: {},
      classList: []
    };
  },
  mounted() {
    this.cate =
      this.$route.params.cate == "work"
        ? "工作相关"
        : this.$route.params.cate == "life"
        ? "生活旅游"
        : "前端学习";
    this.getData();
  },
  methods: {
    getData() {
      this.$get("/getclassList", {
        class: this.cate
      }).then(res => {
        if(res.result.length>0){
          var result = res.result;
          this.firstList = result.shift();
          this.classList = result;
        }else{
          this.firstList = [];
          this.classList = [];
        }
      }).then(()=>{
        this.loading = false
      })
    }
  },
  watch: {
    $route(to, from) {
      if (to.name === "class") {
        console.log(to); // 在此调用函数
        this.cate = to.params.cate == "work"
        ? "工作相关"
        : to.params.cate == "life"
        ? "生活旅游"
        : "前端学习";
        this.getData()
      }
    }
  }
};
</script>


<style lang="less">
.classification {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  .post-title{
      font-weight: 700;
      color: #16a085;
  }
  .class-list {
    .el-col {
      padding: 1rem;
      display: flex;
      .list-item {
        flex-grow: 1;
      }
      & {
        @media screen and (max-width: 992px) {
          padding: 0.5rem;
        }
      }
    }
    [class*="el-col-md-12"] {
      .media::after {
        padding-top: 47.22222%;
      }
    }
    .mb-1x{
      margin-bottom: 0 ;
    }
  }
}
</style>

