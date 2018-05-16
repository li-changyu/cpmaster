<template>
  <div>
    <div class="login-wrapper">
      <el-card shadow="hover" class="card-box">
        <div slot="header" class="clearfix title">
          <span>404</span>
        </div>
        <div class="info-404">
          <p>该页面暂未开放，先去其他地方看看吧~</p>
          <br><br>
          <el-button @click="toHome">返回</el-button>
        </div>
      </el-card>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeFooter from '@/components/Footer.vue'
export default {
  components: {
    HomeFooter
  },
  methods: {
    toHome () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .clearfix
    &:before,
    &:after
      display table
      content ""
      clear both
  .login-wrapper
    height 90vh
    background url("../../../static/menhera_bg.jpg") no-repeat
    background-size 100%
    .card-box
      width 420px
      position absolute
      top 40%
      left 50%
      z-index 20
      transform translate(-50%,-50%)
      .title
        text-align center
        color #909399
        font-size 25px
      .info-404
        text-align center
</style>
