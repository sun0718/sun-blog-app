<template>
  <div class="home">
    <el-carousel v-show="show==3" class="general-banner" min-height="300px" trigger="click" >
      <el-carousel-item v-for="(item,index) in 1" :key="index">
          <ul class="general-banner-inner">
            <li style="width: 33.33%">
                <span>{{show*index + 1}}</span>
                <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
            </li>
            <li style="width: 33.33%">
                <span>{{show*index + 2}}</span>
                <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
            </li>
            <li style="width: 33.33%">
                <span>{{show*index + 3}}</span>
                <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
            </li>
          </ul>
      </el-carousel-item>
    </el-carousel>
    <el-carousel v-show="show==2" class="general-banner" min-height="300px" trigger="click" >
      <el-carousel-item v-for="(item,index) in 1" :key="index">
          <ul class="general-banner-inner">
            <li style="width: 50%">
                <span>{{show*index + 1}}</span>
                <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
            </li>
            <li style="width: 50%">
                <span>{{show*index + 2}}</span>
                <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
            </li>
          </ul>
      </el-carousel-item>
    </el-carousel>
    <el-carousel v-show="show==1" class="general-banner" min-height="300px" trigger="click" >
      <el-carousel-item v-for="(item,index) in 1" :key="index">
          <ul class="general-banner-inner">
            <li style="width: 100%">
                <span>{{show*index + 1}}</span>
                <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
            </li>
          </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: "home",
  data(){
    return{
      item: {

      }
    }
  },
  mounted(){
    //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
		// let w = document.documentElement.offsetWidth || document.body.offsetWidth;
		// if(w < 768){
		// 	this.show = 1;
		// }else if(w < 1000){
    //   this.show = 2
    // }else{
    //   this.show = 3
    // }
  },
  computed:{
    widthLi:function(){
      console.log(1 / this.show)
      return 1 / this.show
    },
    show:function(){
      var offsetW = document.documentElement.offsetWidth || document.body.offsetWidth
      console.log(offsetW)
      return offsetW < 768 ? 1 : offsetW < 1000 ? 2 :3
    }
  }
};
</script>

<style lang="less">
  .el-carousel__item ul{
    overflow: hidden;
    height: 100%;
  }
  .el-carousel__item li{
    // width: 33.33%;
    float: left;
    img {
      width: 100%;
    }
  }
</style>

