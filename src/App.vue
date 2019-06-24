<template>
  <div id="app">
    <content class="content">
      <router-view></router-view>
    </content>
      <Commons v-if="$route.meta.fshow"></Commons>
  </div>
</template>

<script>
import Commons from "@/components/commons/common";
export default {
  name: "app",
  components: {
    Commons
  },
  data(){
    return{
      isfooter:true
    }
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
   font-family: "'PingFang SC','Microsoft YaHei','SimSun','Arial', sans-serif;";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}
.content{
  flex:1;
  max-width: 100%;
  background: #f5f6fa;
}
</style>
