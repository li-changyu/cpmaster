<template>
  <el-row>
    <el-col :span = 12 v-for="item in content" :key="item.id">
      <div class="feature">
        <div class="feature-icon">
          <span class="icon iconfont" v-html="item.icon"></span>
        </div>
        <div class="feature-info">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import 'styles/iconfont.css'
export default {
  props: ['content']
}
</script>

<style lang="stylus" scoped>
  .feature
    display flex
    overflow hidden
    height 0
    padding-bottom 23%
    background-color #fff
    .feature-icon
      display inline-block
      padding 10px
      .icon
        font-size 100px
        color #409EFF
    .feature-info
      padding 10px
      .title
        line-height 40px
        font-size 30px
        color #303133
      .desc
        line-height 25px
        font-size 20px
        color #606266
</style>
