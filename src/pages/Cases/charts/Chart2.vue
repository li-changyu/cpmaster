<template>
  <el-card class="card" shadow="hover">
    <div id="echartContainer2">

    </div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
import '../../../assets/sichuan.json'
import axios from 'axios'
export default {
  mounted () {
    var myChart = echarts.init(document.getElementById('echartContainer2'))
    var option = {
      title : {
        text: '充电桩分布图',
      },
    	geo: {
        map: '四川',
        itemStyle: {					// 定义样式
          normal: {					// 普通状态下的样式
              areaColor: '#404a59',
              borderColor: '#111'
          },
          emphasis: {					// 高亮状态下的样式
              areaColor: '#2a333d'
          }
        }
      },
      series: [
        {
          name: '充电桩数量',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: [
            {
              name: '成都市',
              value: [
                104.06,
                30.67,
                100
              ]
            },
            {
              name: '绵阳市',
              value: [
                104.26,
                32.67,
                40
              ]
            },
            {
              name: '德阳市',
              value: [
                104.37,
                32.13,
                40
              ]
            },
            {
              name: '自贡市',
              value: [
                105.06,
                29.07,
                40
              ]
            },
          ]
        }
      ]
    }
    axios.get('/api/sichuan').then((res) => {
      echarts.registerMap('四川', res.data);
      myChart.setOption(option)
    })
  }
}
</script>

<style lang="stylus" scoped>
  .card
    height 400px
    #echartContainer2
      z-index 1000
      width 280px
      height 300px
</style>
