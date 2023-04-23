<template>
  <div class="charts"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    //const main=this.$refs.stuchartsref;
    var myChart = echarts.init(document.querySelector(".charts"));
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },
};
</script>

<style>
.charts {
  width: 400px;
  height: 400px;
  border: 1px solid red;
}
</style>