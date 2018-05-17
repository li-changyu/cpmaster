<template>
  <div class="news-wrapper">
    <news-carousel></news-carousel>
    <news-item v-for="item in this.news" :key="item.id" class="news-item" :content="item"></news-item>
  </div>
</template>

<script>
import NewsCarousel from './Carousel'
import NewsItem from './NewsItem'
export default {
  data () {
    return {
      news: [
        {
          id: '001',
          title: '浙江杭州:到2020年市区电动汽车充电半径小于1公里',
          desc: '新华社杭州5月16日电(记者朱涵)记者16日从国网杭州供电公司了解到,到2020年,该公司将完成50座公用充换电站和3000个公用充电桩的建设任务,届时,杭州市区电动汽车...'
        },
        {
          id: '002',
          title: '与蔚来牵手 龙蟠科技进军电动汽车领域',
          desc: '5月14日,龙蟠科技负责人对记者表示,作为我国车用化学品的龙头企业,龙蟠科技顺应汽车发展新形势,不断加大新产品开发力度,目前已推出满足电动汽车所需的防冻液、玻璃...'
        },
        {
          id: '003',
          title: '大众集团下640亿美元电池大订单 全面发力电动汽车',
          desc: '大众新上任的CEO 迪斯不久前就在集团年度会议上宣布,公司计划在2025年前,每年销售300万辆纯电动汽车,大众旗下的奥迪品牌则计划在此期限前电动与插电式混动车的年...'
        },
        {
          id: '004',
          title: '人口、市场双方面优势助力低速电动汽车发展',
          desc: '近几年,低速电动汽车行业飞速发展,不管是在一线城市还是二、三线城市,甚至农村都出现了它们活跃的身影。小巧、精美,作为一种独有的形象,成为汽车市场上一道道引人...'
        },
        {
          id: '005',
          title: '从二、三线城市窥探低速电动汽车未来发展',
          desc: '近几年,低速电动汽车行业飞速发展,不管是在一线城市还是二、三线城市,甚至农村都出现了它们活跃的身影。小巧、精美,作为一种独有的形象, 成为汽车市场上一道道引...'
        },
        {
          id: '006',
          title: '市面上的那些纯电动汽车质量怎么样?',
          desc: '新能源车已经成为国内汽车市场上炙手可热的产品,销量在逐年大幅上涨,前景不可限量。而且仔细分析发现,除了北上广这些超一线城市,因为限购政策搞得只能选择新能源车...'
        }
      ]
    }
  },
  components: {
    NewsCarousel,
    NewsItem
  }
}
</script>

<style lang="stylus" scoped>
  .news-item
    padding-bottom 20px
    margin-bottom 20px
</style>
