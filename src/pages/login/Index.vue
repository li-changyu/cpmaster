<template>
  <div>
    <div class="login-wrapper">
      <el-card shadow="hover" class="card-box" v-show="isLoginPage">
        <div slot="header" class="clearfix title">
          <span>登   录</span>
        </div>
        <el-form class="form-group">
          <el-form-item label="账号：">
            <el-input v-model="id" type="text"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="pwd" type="password"></el-input>
          </el-form-item>
          <a href="script:;" @click="handlePage">没有账号？点击注册</a>
          <el-form-item class="btn-group">
            <el-button type="primary" @click="login">立即登录</el-button>
            <el-button @click="toHome">返回</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <el-card shadow="hover" class="card-box" v-show="!isLoginPage">
        <div slot="header" class="clearfix title">
          <span>注   册</span>
        </div>
        <el-form class="form-group">
          <el-form-item label="账号：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input></el-input>
          </el-form-item>
          <a href="script:;" @click="handlePage">点击这里登录</a>
          <el-alert title="sorry~注册功能还未开放，先用测试账号登录吧~" type="info" close-text="好嘞"></el-alert>
          <el-form-item class="btn-group">
            <el-button type="primary">立即注册</el-button>
            <el-button @click="toHome">返回</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import axios from 'axios'
import HomeFooter from '@/components/Footer.vue'
export default {
  data () {
    return {
      id: 'cpmaster',
      pwd: '123',
      isLoginPage: true
    }
  },
  components: {
    HomeFooter
  },
  methods: {
    handlePage () {
      this.isLoginPage = !(this.isLoginPage === true)
    },
    toHome () {
      this.$router.push({path: '/'})
    },
    login () {
      // this.$store.commit('LOGIN')
      let userInfo = null
      axios.get('/api/user').then((res) => {
        userInfo = res.data
        if (userInfo.userId === this.id && userInfo.userPwd === this.pwd) {
          this.$store.commit('LOGIN')
          this.$router.push({path: '/'})
        } else {
          alert('请检查账号密码是否正确')
        }
      })
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
</style>
