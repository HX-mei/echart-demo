<template>
  <div>
    <div id="main"></div>
  </div>
</template>
<script>
export default {
  name:'Home',
  methods:{
      drawChart() {
        // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
        let myEchart = this.$echarts.init(document.getElementById("main"));
        // 指定图表的配置项和数据
        let option = {
          title:{
            text:"Vue中使用Echarts小练习"
          },
          tooltip:{},
          legend:{
            data:["销量"]
          },
          xAxis:{
            data: ["苹果","香蕉","橘子","葡萄",]
          },
          yAxis:{},
          series:[{
            name:'销量',
            type:"bar",
            data:[50,60,45,30,]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myEchart.setOption(option);
      }
    },
    //新建monted(){},否则会出现init没有定义等等错误
    mounted() {
      this.drawChart();
    }
};
</script>
<style scoped>
#main {
    width: 600px;
    height:400px;
    margin: auto;
    margin-top: 100px
  }
</style>