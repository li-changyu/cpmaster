<template>
  <el-card class="card" shadow="hover">
    <div id="echartContainer4">

    </div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted () {
    var myChart = echarts.init(document.getElementById('echartContainer4'))
    myChart.setOption({
      title: { text: '利润预估' },
      tooltip: {},
      xAxis: {
        data: ['1', '2', '3', '4', '5', '6']
      },
      yAxis: {},
      series: [{
        name: '利润率',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }
}
</script>

<style lang="stylus" scoped>
  .card
    height 400px
    #echartContainer4
      z-index 1000
      width 280px
      height 300px
</style>
