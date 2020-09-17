<template>
  <div>
    <el-col :span="24">
      <h3>{{ latest.title }}</h3>
      <div v-html="latest.content" />
    </el-col>
  </div>
</template>

<script>
import { latestDetailGetter } from '@/assets/getters'

export default {
  layout: 'title-aside',
  data() {
    return {
      latest: {}
    }
  },
  created() {
    let latestId = this.$route.query.id
    if (!latestId) {
      this.$router.push('/info/latest')
    } else {
      this.latest = latestDetailGetter(latestId)
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/block-news-list.stylus'
</style>
