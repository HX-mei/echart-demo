<template>
  <div>
    <div id="one"></div>
  </div>
</template>
<script>
export default {
  name: "FirstOne",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的one对应
      let myEchart = this.$echarts.init(document.getElementById("one"));
      // 指定图表的配置项和数据
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myEchart.setOption(option);
    },
  },
  //新建monted(){},否则会出现init没有定义等等错误
  mounted() {
    this.drawChart();
  },
};
</script>
<style scoped>
#one {
    width: 600px;
    height:400px;
    margin: auto;
    margin-top: 100px
  }
</style>