<template>
  <el-card class="card" shadow="hover">
    <div id="echartContainer3">

    </div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted () {
    var myChart = echarts.init(document.getElementById('echartContainer3'))
    var option = {
      title: {
        text: 'EV/CV占比',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2']
      },
      calculable: true,
      series: [
        {
          name: 'ev/cv对比',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          x: '50%',
          max: 40,
          sort: 'ascending',
          data: [
            {value: 194838, name: 'CV'},
            {value: 65842, name: 'EV'}
          ]
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>

<style lang="stylus" scoped>
  .card
    height 400px
    #echartContainer3
      z-index 1000
      width 280px
      height 300px
</style>
