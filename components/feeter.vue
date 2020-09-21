<template>
  <div class="footer-container">
    <el-row>
      <el-col :span="15" :offset="1">
        <div class="menu-container">
          <div v-for="menu in menuStructure" :key="menu.name" class="menu-col">
            <div class="menu-title">
              {{ menu.title }}
            </div>
            <div v-for="child in menu.children" :key="child.name" class="menu-subtitle" @click="goto(`/${ menu.addr }/${ child.addr}`)">
              {{ child.title }}
            </div>
            <div v-if="menu.name === 'contact'" class="contact">
              <div class="address">
                地址：
              </div>
              <div class="tel">
                电话：
              </div>
              <div class="email">
                邮箱：
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="logo-container">
          <img src="@/static/images/logo.png" alt="" class="footer-logo-img">
          <img src="@/static/images/title.svg" alt="" class="footer-logo-img">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1" class="copyright-col">
        <div class="copyright">
          版权号
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { menuStructure } from '@/assets/website-config'

export default {
  data() {
    return {
      menuStructure: menuStructure.children.filter(ele => !ele.hide)
    }
  },
  methods: {
    goto(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="stylus">
.footer-container
  color: #fff
  background-color: rgb(37, 55, 72)
  height: 260px

  .copyright-col
    .copyright
      font-size: 14px
      color: rgba(215, 215, 215, 0.749019607843137)
      text-align: left
      float: right
      width: 140px

  .logo-container
    text-align: right
    margin-top: 120px

    .footer-logo-img
      height: 30px

  .menu-container
    margin: 30px 0
    display: flex
    flex-direction: row
    justify-content: flex-start
    text-align: center

    .menu-title, .menu-subtitle
      cursor: pointer

    .menu-col
      width: 120px

      .menu-title
        font-size: 16px
        color: #F2F2F2

      .menu-subtitle
        margin-top: 30px
        font-size: 12px
        color: rgba(215, 215, 215, 0.749019607843137)

        &:hover
          color: rgb(24, 144, 255)

    .contact
      width: 120px

      div
        margin-top: 20px
        font-size: 12px
        color: rgba(215, 215, 215, 0.749019607843137)
        text-align: left
        padding-left: 30px
</style>
