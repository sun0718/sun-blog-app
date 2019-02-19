<template>
  <div class="home">
    <img alt="myself" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=41d0a34ca5773912d26cd8328a76f625/ae51f3deb48f8c54233d20de36292df5e1fe7f51.jpg" />
    <HelloWorld msg="Welcome to SunJilong‘s blog" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
