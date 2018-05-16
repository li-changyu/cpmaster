<template>
  <div class="links-wrapper">
    <el-card>
      <span>友情链接</span>
      <el-collapse accordion>
        <el-collapse-item v-for="item in this.links" :key="item.id" :title="item.title">
          <div>{{item.desc}}</div>
          <div><a :href="item.url">点击进入</a></div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          id: '001',
          title: '特斯拉中国官网',
          desc: '美国电动车及能源公司，产销电动车、太阳能板、及储能设备。',
          url: 'https://www.tesla.cn/'
        },
        {
          id: '002',
          title: '特来电',
          desc: '特来电是为广大电动汽车用户量身定制的充电服务解决方案，与世界技术领先的智能充电系统配合使用，打造智能充电模式，让充电更加简单、安全、可靠。',
          url: 'https://www.teld.cn/'
        },
        {
          id: '003',
          title: '百度地图',
          desc: '浏览地图、搜索地点、查询公交驾车线路、您的出行指南、生活助手。',
          url: 'https://www.map.baidu.com/'
        },
        {
          id: '004',
          title: 'SecWiki',
          desc: '提供一个安全资讯分享平台,大家将看到的好文章,工具与优秀RSS提交分享,同时可以进行针对性讨论。',
          url: 'https://www.sec-wiki.com/'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
