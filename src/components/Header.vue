<template>
  <div class="header-wrapper">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" style="margin-left:2%"><i class="el-icon-menu"></i><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/news">新闻</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/case">案例</router-link></el-menu-item>
      <!-- <el-menu-item index="4"><router-link to="/system">预测分析系统</router-link></el-menu-item> -->
      <el-menu-item index="5"><router-link to="/customization">定制解决方案</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="/questionaire">问卷调查</router-link></el-menu-item>
        <el-menu-item index="7" v-if="!isLogin" style="position:absolute;right:50px"><router-link to="/login">登录</router-link></el-menu-item>
        <el-menu-item index="8" v-if="!isLogin" style="position:absolute;right:150px"><router-link to="/login">注册</router-link></el-menu-item>
        <img
        v-if="isLogin"
        class="avatar"
        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        alt="avatar"
        style="position:absolute;right:180px;top:10px;border-radius:5px">
        <el-submenu index="9" v-if="isLogin" style="position:absolute;right:50px;">
          <template slot="title">{{user}}</template>
          <el-menu-item index="9-1"><router-link to="/user">我的信息</router-link></el-menu-item>
          <el-menu-item index="9-2"><router-link to="/user">我的方案</router-link></el-menu-item>
          <el-menu-item index="9-3" @click="logout">注销登录</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      user: 'CP-Master'
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout () {
      this.$store.commit('LOGOUT')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-wrapper
    position fixed
    width 100%
    right 0
    left 0
    z-index 999
    .el-menu
      border-color #545c64
  .avatar
    height 40px
    width 40px

</style>
