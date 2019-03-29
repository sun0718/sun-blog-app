<template>
  <el-row class="threeImageShow d-flex-row flex">
    <el-col :span=6 class="d-flex-column flex">
      <div class="threeImageShow-title flex">
        <h2>
          <a href class="text-dark">旅行日志</a>
        </h2>
      </div>
      <div>
        <span class="text-muted text-xs">7篇文章</span>
      </div>
    </el-col>
    <el-col :span=12 class="d-flex-row">
        <el-row class="flex d-flex-row">
          <el-col :span=16 class="d-flex-row pl-quarter pr-quarter">
            <div class="media flex">
              <a
                class="media-content"
                style="background-image: url(https://demo.nicetheme.xyz/ashley-style-2/wp-content/uploads/sites/23/2019/02/2019020319280481-600x400.jpg);"
              ></a>
            </div>
          </el-col>
          <el-col :span=8 class="d-flex-column pl-quarter pr-quarter">
            <div class="media flex mb-half">
              <a
                class="media-content"
                style="background-image: url(https://demo.nicetheme.xyz/ashley-style-2/wp-content/uploads/sites/23/2019/02/2019020312034581.jpg);"
              ></a>
            </div>
            <div class="media flex">
              <a
                class="media-content"
                style="background-image: url(https://demo.nicetheme.xyz/ashley-style-2/wp-content/uploads/sites/23/2019/02/2019020312483651.jpg);"
              ></a>
              <a class="media-overlay active bg-dark-overlay">
                <small class="text-white mx-auto">7+</small>
              </a>
            </div>
          </el-col>
        </el-row>
    </el-col>
  </el-row>
</template>

<style lang="less">
.threeImageShow {
  padding: 1rem 0rem 1rem 1rem;
  position: relative;
  margin-bottom: 1rem;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 80%;
    height: 100%;
    background-color: #fff;
    z-index: -1;
  }
  .media {
        position: relative;
        display: block;
        overflow: hidden;
        padding: 0;
        &:after {
            content: '';
            display: block;
            padding-top: 100%;
        }
        .media-content {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 0;
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120, 120, 120, 0.1);
        }
        .media-overlay{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: .5rem .75rem;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            cursor: pointer;
        }
  }
}
</style>

