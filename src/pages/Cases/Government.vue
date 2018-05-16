<template>
  <div>
  <el-card class="card" shadow="hover">
    <img class="img" src="../../../static/政府充电桩数据.png" alt="">
    <div class="info">
      <div class="title">充电桩布局预测图</div>
    </div>
  </el-card>
  <br><br><br>
  <el-card class="card" shadow="hover">
    <img class="img" src="../../../static/道路规划.png" alt="">
        <div class="info">
      <div class="title">政府道路规划图</div>
    </div>
  </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .card
    height 400px
    display flex
    .img
      height 350px
      border solid #eee 4px
      float left
    .info
      float left
      .title
        font-size 35px
        text-align center
        padding-left 30px
        color #ccc
</style>
