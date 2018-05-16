<template>
  <div>
    <home-header></home-header>
    <div class="container">
      <home-banner></home-banner>
      <home-introduction></home-introduction>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header.vue'
import HomeFooter from '@/components/Footer.vue'
import HomeBanner from './Banner.vue'
import HomeIntroduction from './Introduction.vue'
export default {
  components: {
    HomeHeader,
    HomeFooter,
    HomeBanner,
    HomeIntroduction
  }
}
</script>

<style lang="stylus" scoped>
  .container
    overflow hidden
    background-color #eee
</style>
