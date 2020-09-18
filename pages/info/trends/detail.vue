<template>
  <div>
    <el-col :span="24">
      <h3>{{ trends.title }}</h3>
      <div v-html="trends.content" />
    </el-col>
  </div>
</template>

<script>
import { trendsDetailGetter } from '@/assets/getters'

export default {
  layout: 'title-aside',
  data() {
    return {
      trends: {}
    }
  },
  created() {
    let trendsId = this.$route.query.id
    if (!trendsId) {
      this.$router.push('/info/trends')
    } else {
      this.trends = trendsDetailGetter(trendsId)
    }
  }
}
</script>

<style lang="stylus">
</style>
