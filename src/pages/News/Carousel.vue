<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in this.imgUrl" :key="item.url" class="carousel-item">
      <img :src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: [
        {
          url: '../../../static/banner1.jpg'
        },
        {
          url: '../../../static/banner2.jpg'
        },
        {
          url: '../../../static/banner3.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .carousel-item
    background-color #bbb
</style>
