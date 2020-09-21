<template>
  <div>
    <el-col :span="24" class="member-list">
      <div v-for="(member, index) in members" :key="'member' + index" class="member-block">
        <img :src="member.imgSrc" alt="">
      </div>
    </el-col>
  </div>
</template>

<script>
import { memberGetter } from '@/assets/getters'

export default {
  layout: 'title-aside',
  data() {
    return {
      members: []
    }
  },
  created() {
    this.members = memberGetter()
  }
}
</script>

<style lang="stylus">
.member-list
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: flex-start
  align-content: flex-start

  .member-block
    width: calc(33% - 4px)
    height: 180px
    margin: 10px 0
    border: solid 2px transparent

    &:hover
      border: solid 2px rgb(93, 176, 255)

    img
      max-height: 100%
      max-width: 100%
      margin: 0
</style>
