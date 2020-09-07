<template>
  <div class="footer-container">
    <el-row>
      <el-col :span="13" :offset="1">
        <div class="menu-container">
          <div class="menu-col">
            <div class="menu-title">
              联盟介绍
            </div>
            <div class="submenu-title">
              联盟简介
            </div>
            <div class="submenu-title">
              联盟成员
            </div>
            <div class="submenu-title">
              宗旨理念
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="stylus">
.footer-container
  color: #fff
  background-color: rgb(37, 55, 72)

  .menu-container
    display: flex
    flex-direction: column
    justify-content: flex-start
    text-align: center
    width: 120px
</style>
