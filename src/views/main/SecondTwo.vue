<template>
  <div>
    <div id="two"></div>
  </div>
</template>
<script>
export default {
  name: "SecondTwo",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的two对应
      let myEchart = this.$echarts.init(document.getElementById("two"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
#two {
  width: 600px;
  height: 400px;
  margin: auto;
  margin-top: 120px;
}
</style>