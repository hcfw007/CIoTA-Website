<template>
  <el-main>
    <el-row class="banner-row">
      <el-col :span="24" class="banner-container">
        <img src="@/static/images/index/big-banner.png" alt="" class="big-banner">
        <h1 class="banner-title">物联网产业技术创新战略联盟官网<br>全新上线</h1>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.banner-container
  position: relative

  .big-banner
    width: 100%
    height: 400px

  .banner-title
    position: absolute
    top: 15%
    width: 100%
    text-align: center
    font-size: 48px
    color: #fff
    line-height: 100px
    letter-spacing: 26px

</style>
