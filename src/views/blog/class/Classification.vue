<template>
      <sun-Wrapper>
        <main class="d-flex-column classification">
          <div class="mb-2x">
            <h1 class="text-lg">旅行日志</h1>
          </div>
          <el-row class="d-flex-row flex class-list mr-N-1x ml-N-1x">
              <el-col :xs='12' :sm='12' :md='12' :lg='12'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
              <el-col :xs='12' :sm='6' :md='6' :lg='6'>
                    <sun-imageShow :num="3" />
              </el-col>
          </el-row>
        </main>
      </sun-Wrapper>
</template>

<script>

export default {
  name: "",
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

