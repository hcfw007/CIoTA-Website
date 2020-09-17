<template>
  <div>
    <el-col :span="24" class="block-news-list">
      <div v-for="(latest, index) in latestList" :key="'latest' + index" class="block-news" @click="goto(`/info/latest/detail?id=${ latest.id }`)">
        <img :src="latest.imgSrc" alt="">
        <div class="words-in-pic">{{ latest.title }}</div>
        <div class="block-news-title">{{ latest.title }}</div>
        <div class="block-news-content">{{ latest.content }}</div>
      </div>
    </el-col>
  </div>
</template>

<script>
import { latestGetter } from '@/assets/getters'

export default {
  layout: 'title-aside',
  data() {
    return {
      latestList: []
    }
  },
  created() {
    this.latestList = latestGetter()
  },
  methods: {
    goto(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/block-news-list.stylus'
</style>
