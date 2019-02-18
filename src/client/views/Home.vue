<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="@/client/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/client/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data:function(){
    return {
      msg: ''
    }
  },
  mounted() {
    this.$axios.get ('/login').then(res=>{this.msg = res.data.name;console.log(res)}).catch(err=>{console.log(err)});
  }
};
</script>
