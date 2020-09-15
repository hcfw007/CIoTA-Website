<template>
  <div class="navbar">
    <el-row class="nav-row">
      <el-col :span="9" :offset="1" class="logo-container" @click.native="goto('/')">
        <img src="@/static/images/logo.png" alt="" class="navbar-img">
        <img src="@/static/images/title.svg" alt="" class="navbar-img">
      </el-col>
      <el-col :span="11">
        <el-menu :default-active="'1'" mode="horizontal" background-color="transparent" text-color="#fff">
          <el-menu-item index="index" @click.native="goto('/')">首页</el-menu-item>
          <el-submenu v-for="menu in menuStructure" :key="menu.index" :index="menu.name" :popper-append-to-body="false">
            <template slot="title">{{ menu.title }}</template>
            <el-menu-item v-for="child in menu.children" :key="child.index" :index="child.name" @click.native="goto(`/${ menu.addr }/${ child.addr}`)">
              {{ child.title }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="contact" @click.native="goto('/contact')">联系我们</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="3" style="height: 100%">
        <div class="user">登录</div>
        <div class="user">注册</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { menuStructure } from '@/assets/website-config'

export default {
  data() {
    return {
      menuStructure: menuStructure.children.filter(ele => ele.children)
    }
  },
  methods: {
    goto(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="stylus" scoped>
navbarHeight = 60px // height of navbar content

.navbar
  background-color: rgb(0, 21, 41)
  background-image: linear-gradient(rgb(0, 21, 41), rgb(55,64,89))
  border: solid 1px rgba(50, 53, 95, 1)
  box-shadow: 0px -5px 30px 0px rgb(37, 40, 75) inset
  height: (navbarHeight + 200px - 2px) // - 2 for border width

  .navbar-img
    height: navbarHeight

  .nav-row
    height: navbarHeight
    margin-top: (navbarHeight / 2)

  .el-menu.el-menu--horizontal
    border: none

  .user
    display: inline-block
    line-height: navbarHeight
    margin-left: 30px
    cursor: pointer

  .user, .el-menu-item, >>>.el-submenu__title
    color: #fff
    font-size: 16px
    padding: 0 10px

    &:hover
      color: rgb(24, 144, 244) !important
      background-color: transparent !important

  submenuWidth = 85px
  >>>ul.el-menu--popup.el-menu
    min-width: submenuWidth

    .el-menu-item
      font-size: 14px
      text-align: center
      min-width: submenuWidth

.logo-container
  cursor: pointer

img
  display: inline-block
</style>
