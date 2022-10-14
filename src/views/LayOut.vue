<template>
    <div class="background" :style="background">
        <HeaderNav/>
        <router-view></router-view>
    </div>
</template>
<script>
import HeaderNav from "../components/HeaderNav.vue"
export default {
    components:{
      HeaderNav
    },
    data() {
    return {
      background: {
        //动态绑定背景图
        //require要用到拼接。
        //某些时候，../assets可能会失效,改成~@/assets试试
        backgroundImage: "url(" + require("../assets/images/1.jpg") + ")",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        backgroundSize: "cover",
      },
    };
  },
}
</script>
<style scoped>
.background {
  padding: 0px;
  margin: 0px;
  background-size: 100%;
  height: 100%;
  width: 100%;
  z-index: -10;
}
</style>