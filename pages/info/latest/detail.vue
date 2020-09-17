<template>
  <div>
    1
  </div>
</template>

<script>
export default {
  layout: 'title-aside',
  data() {
    return {
      news: {}
    }
  },
  created() {
    let newsId = this.$route.query.id
    if (!newsId) {
      this.$router.push('/info/latest')
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/block-news-list.stylus'
</style>
