<template>
  <div>
  <el-card class="card" shadow="hover">
    <img class="img" src="../../../static/电网公司充电桩.png" alt="">
    <div class="info">
      <div class="title">电网充电桩布局</div>
    </div>
  </el-card>
  <br><br><br>
  <el-card class="card" shadow="hover">
    <img class="img" src="../../../static/超负荷.png" alt="">
        <div class="info">
      <div class="title" style="color: #ff9999">充电桩负载上限</div>
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
