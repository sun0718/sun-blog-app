<template>
    <div class="container">
      <div class="main-wrapper">
        <el-row>
          <el-col :lg="16" :md="16" :sm="12" :xs="24" class="wrapper-left">
              <section name="" id="">
                    <slot name="left"></slot>
              </section>
          </el-col>
          <el-col :lg="8" :md="8" :sm="12" :xs="24" class="wrapper-right">
              <aside>
                    <slot name="right"></slot>
              </aside>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
export default {
    name:'sunWrapper'
}
</script>



<style lang='less'>
.container{
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    .main-wrapper{
      padding: 50px 10px;
      &>.el-row>.el-col{
        overflow: hidden;
      }
      .wrapper-left{
        padding-bottom: 40px;
      }
      .wrapper-right{
        padding: 0 20px;
      }
    }
}
aside{
    padding-left: 20px;
    @media screen and (max-width: 768px){
      padding-left: 0;
    }
  }
</style>
