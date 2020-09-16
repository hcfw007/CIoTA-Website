<template>
  <div>
    <el-table :data="members" class="member-table" :span-method="memberSpanMethod" border>
      <el-table-column prop="index" label="序号" width="120" />
      <el-table-column prop="title" label="联盟职务" width="180" />
      <el-table-column prop="name" label="单位" />
    </el-table>
  </div>
</template>

<script>
import { allMemberGetter } from '@/assets/getters'

export default {
  layout: 'title-aside',
  data() {
    return {
      members: []
    }
  },
  created() {
    let allMember = allMemberGetter()
    let members = []
    for (let i in allMember) {
      let tier = allMember[i]
      for (let item of tier.list) {
        members.push({
          index: item.index,
          title: tier.title,
          name: item.name
        })
      }
    }
    this.members = members
  },
  methods: {
    memberSpanMethod({ columnIndex, row, rowIndex }) {
      let members = this.members
      if (columnIndex === 1) {
        if (rowIndex > 1 && members[rowIndex - 1].title === row.title) {
          return [0, 1]
        } else {
          let count = 1
          for (let i = rowIndex + 1; i < members.length; i++) {
            if (members[i].title === row.title) {
              count += 1
            } else {
              break
            }
          }
          return [count, 1]
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.member-table
  td, th
    vertical-align: top
</style>
