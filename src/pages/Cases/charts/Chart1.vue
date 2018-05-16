<template>
  <el-card class="card" shadow="hover">
    <div id="echartContainer1">

    </div>
  </el-card>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
export default {
  mounted () {
    var myChart = echarts.init(document.getElementById('echartContainer1'))
    var data,
        names,
        series1,
        series2

    axios.get('/api/data').then((res) => {
      data = res.data
      names=data.CV_parc.Time
			series2=data.CV_parc.value
      series1=data.EV_parc.value
      var option = {
        title : {
          text: 'EV/CV预测保有量对比图',
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['EV','CV']
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : names,
            axisLabel: {
              formatter: '{value} 天'
            }
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisLabel : {
                formatter: '{value} 辆'
            }
          }
        ],
        series : [
          {
            name:'EV保有量',
            type:'line',
            data:series1,
            markLine : {
              data : [
                {type : 'average', name: '平均值'}
              ]
            }
          },
          {
            name: 'CV保有量',
            type: 'line',
            data: series2,
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      }
      myChart.setOption(option)
    })
  }
}
</script>

<style lang="stylus" scoped>
  .card
    height 400px
    #echartContainer1
      width 950px
      height 300px
</style>
