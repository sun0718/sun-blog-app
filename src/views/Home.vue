<template>
  <div class="home">
    <el-carousel height="150px" trigger="click" >
      <el-carousel-item v-for="item in 4" :key="item">
          <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
          <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
          <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: "home",
  data(){
    return{
      item:{

      }
    }
  }
};
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>

