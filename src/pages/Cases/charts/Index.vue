<template>
  <div>
    <el-row :gutter="20">
      <Chart1></Chart1>
    </el-row>
    <br><br><br>
    <el-row :gutter="20">
      <el-col :span="8" >
        <Chart2></Chart2>
      </el-col>
      <el-col :span="8" >
        <Chart3></Chart3>
      </el-col>
      <el-col :span="8" >
        <Chart4></Chart4>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Chart1 from './Chart1.vue'
import Chart2 from './Chart2.vue'
import Chart3 from './Chart3.vue'
import Chart4 from './Chart4.vue'
export default {
  components: {
    Chart1,
    Chart2,
    Chart3,
    Chart4
  }
}
</script>

<style lang="stylus" scoped>
  .box
    height 400px
    background #fff
</style>
