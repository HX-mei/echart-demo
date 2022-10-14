<template>
  <div>
    <el-menu
      :default-active="active"
      class="demo"
      router
      mode="horizontal"
      background-color="#5F9EA0"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/" style="margin-left: 150px; height: 50px">
        柱状图
      </el-menu-item>
      <el-menu-item
        index="/basedata"
        style="margin-left: 220px; height: 50px"
      >
        堆叠折线图
      </el-menu-item>
      <el-menu-item
        index="/practiceitem"
        style="margin-left: 130px; height: 50px"
      >
        基础饼图
      </el-menu-item>
      <el-menu-item
        index="/workhistory"
        style="margin-left: 140px; height: 50px"
      >
        圆环图
      </el-menu-item>
      <el-menu-item
        index="/SelfEvalu"
        style="margin-left: 150px; height: 50px"
      >
        基础散点图
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  // name: "headernav",
  data() {
    return {
      active: "/",
    };
  },
};
</script>

<style scoped>
/*base*/
* {
  margin: 0 0;
  padding: 0 0;
}
.ziti {
  text-align: left;
  margin-top: 0%;
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.el-menu.el-menu--horizontal {
  height: 50px !important;
}
</style>