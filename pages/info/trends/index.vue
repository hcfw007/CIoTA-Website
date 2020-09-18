<template>
  <div>
    <el-col :span="24" class="row-news-list">
      <div v-for="(trends, index) in trendsList" :key="'trends' + index" class="row-news" @click="goto(`/info/trends/detail?id=${ trends.id }`)">
        <div class="row-news-title">{{ trends.title }}</div>
        <div class="row-news-abstract">{{ trends.abstract }}</div>
      </div>
    </el-col>
  </div>
</template>

<script>
import { trendsGetter } from '@/assets/getters'

export default {
  layout: 'title-aside',
  data() {
    return {
      trendsList: []
    }
  },
  created() {
    this.trendsList = trendsGetter()
  },
  methods: {
    goto(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/row-news-list.stylus'
</style>
