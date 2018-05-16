<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span style="font-size: 20px; color: #ccc">{{content.title}}</span>
      <!-- <el-button type="text" class="btn">信息来源</el-button> -->
    </div>
    <div>
      <p>{{content.desc}}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  props:['content']
}
</script>

<style lang="stylus" scoped>
  .clearfix
    &:before,
    &:after
      display table
      content ""
      clear both
  .btn
    padding-right 0
</style>
