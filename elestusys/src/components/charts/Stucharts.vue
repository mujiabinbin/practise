<template>
  <div class="charts"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      stugender:["男","女"],
      stugenderdata:[20,10]

    }
  },
  mounted() {
    //const main=this.$refs.stuchartsref;
    var myChart = echarts.init(document.querySelector(".charts"));
    myChart.setOption({
      title: {
        text: "学生统计",
      },
      tooltip: {},
      xAxis: {
        data: this.stugender,
      },
      yAxis: {},
      series: [
        {
          name: "数量",
          type: "bar",
          data: this.stugenderdata,
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