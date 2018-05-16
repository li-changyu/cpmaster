<template>
  <el-container class="case-wrapper">
    <el-aside class="aside-wrapper">
      <aside-slider></aside-slider>
    </el-aside>

    <el-main class="main-wrapper">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import AsideSlider from './Aside.vue'
export default {
  components: {
    AsideSlider
  }
}
</script>

<style lang="stylus" scoped>
  .case-wrapper
    .aside-wrapper
      position fixed
      height 100vh
      background-color #545c64
      border #545c64 solid 1px
    .main-wrapper
      background-color #eee
      height 100vh
      padding-left 330px
</style>
