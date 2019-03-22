<template>
  <el-scrollbar style="height:100%;" ref="elscrollbar">
    <el-main class="main classification">
      <div class="container">
        <main class="d-flex-column">
          <div class="mb-2x">
            <h1 class="text-lg">旅行日志</h1>
          </div>
          <el-row class="d-flex-row flex class-list mr-N-1x ml-N-1x">
              <el-col :xs='12' :sm='12' :md='12' :lg='12'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <ImageShow :num="3" />
              </el-col>
          </el-row>
        </main>
      </div>
    </el-main>
    <Footer/>
  </el-scrollbar>
</template>

<script>
import Footer from "@/components/blog/common/Footer.vue";
import ImageShow from "@/components/blog/common/ImageShow.vue";

export default {
  name: "",
  components: {
    Footer,ImageShow
  }
};
</script>


<style lang="less">
.classification{
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
    .class-list{
        .el-col{
            padding: 1rem;
            display: flex;
            .list-item{
                flex-grow: 1;
            }
            &{
                @media screen and (max-width:992px){
                    padding: .5rem;
                }
            }
        }
        [class*=el-col-md-12]{
            .media::after{
                padding-top: 47.22222%
            }
        }
    }
}

</style>

