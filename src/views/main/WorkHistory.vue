<template>
  <div>
    <div id="three"></div>
  </div>
</template>
<script>
export default {
  name: "WorkHistory",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的three对应
      let myEchart = this.$echarts.init(document.getElementById("three"));
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
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
#three {
  width: 600px;
  height: 400px;
  margin: auto;
  margin-top: 100px;
}
</style>