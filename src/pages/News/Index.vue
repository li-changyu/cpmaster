<template>
  <div>
    <home-header></home-header>
    <div class="container">
      <el-row type="flex" justify="space-around">
        <el-col :span="4">
          <sponsor></sponsor>
        </el-col>
        <el-col :span="10">
          <news></news>
        </el-col>
        <el-col :span="6">
          <news-links></news-links>
        </el-col>
      </el-row>
    </div>
    <home-footer class="footer"></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header.vue'
import HomeFooter from '@/components/Footer.vue'
import Sponsor from './Sponsor.vue'
import NewsLinks from './Links.vue'
import News from './News.vue'

export default {
  components: {
    HomeHeader,
    HomeFooter,
    Sponsor,
    NewsLinks,
    News
  }
}
</script>

<style lang="stylus" scoped>
  .container
    background-color #eee
    padding-top 90px
    .box
      height 200px
      backkground-color white
      border solid black 2px
  .footer
    z-index 999
</style>
