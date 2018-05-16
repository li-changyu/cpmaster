<template>
  <div>
    <div class="login-wrapper">
      <el-card shadow="hover" class="card-box" v-show="!isSubmit">
        <div slot="header" class="clearfix title">
          <span>定制解决方案</span>
        </div>
        <el-form class="form-group">
          <el-form-item label="输入你想了解的地区：">
            <el-input placeholder="例：四川省-成都市-武侯区"></el-input>
          </el-form-item>
          <el-form-item label="附加需求：">
            <el-input type="textarea"></el-input>
          </el-form-item>
          <el-form-item class="btn-group">
            <el-button type="primary" @click="handleSubmit">立即提交</el-button>
            <el-button @click="toHome">返回</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <el-card shadow="hover" class="card-box" v-show="isSubmit">
        <div slot="header" class="clearfix title">
          <span>提交成功</span>
        </div>
        <div class="info-200">
          <p>提交成功，我们将尽快给你答复</p>
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
  data () {
    return {
      isSubmit: false
    }
  },
  components: {
    HomeFooter
  },
  methods: {
    toHome () {
      this.$router.push({path: '/'})
    },
    handleSubmit () {
      setTimeout(() => {
        this.isSubmit = true
      }, 2000)
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
    background url("../../../static/login_bg2.jpg") no-repeat
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
      .form-group
        .btn-group
          text-align center
          padding-top 15px
      .info-200
        text-align center
</style>
