<template>
  <el-menu
  class="slider"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
    <el-menu-item index="0"><router-link to="/">返回</router-link></el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <span>案例</span>
      </template>
      <el-submenu index="1-1">
        <template slot="title">
          <span>武侯区</span>
        </template>
          <el-menu-item index="1-1-1"><router-link to="/case/index">数据概览</router-link></el-menu-item>
          <el-menu-item index="1-1-2"><router-link to="/case/profit">利润预估分析</router-link></el-menu-item>
          <el-menu-item index="1-1-3"><router-link to="/case/prospect">发展前景报告</router-link></el-menu-item>
          <el-menu-item index="1-1-4"><router-link to="/case/company">企业解决方案</router-link></el-menu-item>
          <el-menu-item index="1-1-5"><router-link to="/case/grid">电网解决方案</router-link></el-menu-item>
          <el-menu-item index="1-1-6"><router-link to="/case/government">政府解决方案</router-link></el-menu-item>
      </el-submenu>

    </el-submenu>
  </el-menu>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .slider
    border #545c64 solid 1px
</style>
