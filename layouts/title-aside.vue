<template>
  <el-container class="frame-container">
    <el-header height="260px">
      <navbar />
    </el-header>
    <el-container>
      <el-aside class="side-bar">
        <div class="side-title" @click="goto(link)">{{ title }}</div>
      </el-aside>
      <el-main>
        <Nuxt class="main-content" />
      </el-main>
    </el-container>
    <el-footer>
      <feeter />
    </el-footer>
  </el-container>
</template>

<script>
import { menuStructure } from '@/assets/website-config'

export default {
  data() {
    return {
      title: '页面标题',
      link: '/'
    }
  },
  watch: {
    $route: 'updateTitle'
  },
  beforeMount() {
    this.updateTitle()
  },
  methods: {
    updateTitle() {
      let tree = menuStructure
      let paths = this.$route.path.split('/')
      let p = 1
      let link = ''
      while (p < paths.length && tree.children) {
        for (let item of tree.children) {
          if (item.name === paths[p]) {
            p += 1
            tree = item
            if (p <= 3) {
              link += `/${ tree.name }`
            }
          }
        }
      }
      this.title = tree.title
      this.link = link
    },
    goto(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="stylus">
.side-bar
  text-align: right
  font-size: 20px
  font-weight: 700
  color: #555

  .side-title
    padding-right: 15px
    height: 90px
    border-right: solid 5px rgb(69, 166, 255)
    cursor: pointer

.main-content
  font-size: 14px
  color: #333
  line-height: 20px
  letter-spacing: 0.8px
  padding-top: 60px
  text-align: center

  img
    max-width: 600px
    max-height: 400px
    margin: 15px 0

  h3
    font-size: 20px

  p
    text-align: left
    margin: 0 5px
    text-indent: 2em
</style>
