<template>
  <div class="introduction-wrapper">
    <div class="slogan">
      <img class="logo" src="../../../static/logo.png" alt="logo">
      <div class="slogan-info">
        <p class="title">CP master</p>
        <p class="desc">充电桩布局优化解决方案</p>
      </div>
    </div>
    <div class="features">
      <feature :content="this.features"></feature>
    </div>
  </div>
</template>

<script>
import Feature from './Feature.vue'
export default {
  data () {
    return {
      features: [
        {
          id: '001',
          icon: '&#xe603;',
          title: '系统动力学推演',
          desc: '系统动力学推演模型。预测电动汽车发展走势。'
        },
        {
          id: '002',
          icon: '&#xe607;',
          title: '布局优化',
          desc: '以图表的形式，直观的显示我们对充电桩的布局规划预测解决方案。'
        },
        {
          id: '003',
          icon: '&#xe600;',
          title: '数据封装',
          desc: '用户只需要提出需求，剩下的由我们来完成。'
        },
        {
          id: '004',
          icon: '&#xe601;',
          title: '精准定制',
          desc: '针对不同类型的用户，提出不同的有针对的解决方案。'
        }
      ]
    }
  },
  components: {
    Feature
  }
}
</script>

<style lang="stylus" scoped>
  .introduction-wrapper
    .slogan
      .logo
        display block
        margin 50px auto 0
        width 150px
        height 150px
        text-align center
        line-height 60px
      .slogan-info
        text-align center
        line-height 60px
        .title
          font-size 60px
          font-weight bold
          color #409EFF
        .desc
          font-size 40px
          color #bbb
          padding-bottom 10px
    .features
      padding-left 10%
      padding-right 10%
      background-color #fff
</style>
