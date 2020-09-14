<template>
  <div class="navbar">
    <el-row class="nav-row">
      <el-col :span="9" :offset="1">
        <img src="@/static/images/logo.png" alt="" class="navbar-img">
        <img src="@/static/images/title.svg" alt="" class="navbar-img">
      </el-col>
      <el-col :span="11">
        <el-menu :default-active="'1'" mode="horizontal" background-color="transparent" text-color="#fff">
          <el-menu-item index="index">首页</el-menu-item>
          <el-submenu v-for="menu in menuStructure" :key="menu.index" :index="menu.name" :popper-append-to-body="false">
            <template slot="title">{{ menu.title }}</template>
            <el-menu-item v-for="child in menu.children" :key="child.index" :index="child.name">
              {{ child.title }}
            </el-menu-item>
          </el-submenu>
          <!-- <el-submenu index="intro" :popper-append-to-body="false">
            <template slot="title">联盟介绍</template>
            <el-menu-item index="alliance-intro">
              联盟简介
            </el-menu-item>
            <el-menu-item index="alliance-member">
              联盟成员
            </el-menu-item>
            <el-menu-item index="alliance-goal">
              宗旨理念
            </el-menu-item>
          </el-submenu>
          <el-submenu index="coferences" :popper-append-to-body="false">
            <template slot="title">物联大会</template>
            <el-menu-item index="past-coferences">往届回顾</el-menu-item>
          </el-submenu>
          <el-submenu index="info" :popper-append-to-body="false">
            <template slot="title">资讯中心</template>
            <el-menu-item index="latest">
              最新资讯
            </el-menu-item>
            <el-menu-item index="trends">
              联盟动态
            </el-menu-item>
            <el-menu-item index="projects">
              相关项目
            </el-menu-item>
          </el-submenu>
          <el-submenu index="member" :popper-append-to-body="false">
            <template slot="title">会员中心</template>
            <el-menu-item index="member-list">
              会员展示
            </el-menu-item>
            <el-menu-item index="how-to-join">
              注册指引
            </el-menu-item>
          </el-submenu> -->
          <el-menu-item index="contact">联系我们</el-menu-item>
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

img
  display: inline-block
</style>
