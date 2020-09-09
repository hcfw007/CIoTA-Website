<template>
  <div>
    <el-row class="banner-row">
      <el-col :span="24" class="banner-container">
        <img src="@/static/images/index/big-banner.png" alt="" class="big-banner">
        <h1 class="banner-title">物联网产业技术创新战略联盟官网<br>全新上线</h1>
      </el-col>
    </el-row>
    <el-row class="block-row">
      <h3 class="block-title">最新资讯</h3>
      <swiper v-if="lattest.length > 0" ref="lattestSwiper" class="latest-swiper" :options="latestSwiperOptions">
        <swiper-slide v-for="(news, index) in lattest" :key="'lattest-' + index">
          <news-slide-block :title="news.title" :content="news.content" :img-src="news.imgSrc" />
        </swiper-slide>
      </swiper>
    </el-row>
    <el-row class="block-row">
      <h3 class="block-title">联盟介绍</h3>
    </el-row>
    <el-row class="block-row">
      <h3 class="block-title">联盟动态</h3>
    </el-row>
    <el-row class="block-row">
      <h3 class="block-title">物联大会</h3>
    </el-row>
    <el-row class="block-row">
      <h3 class="block-title">联盟成员</h3>
    </el-row>
  </div>
</template>

<script>
import { lattestGetter } from '@/assets/getters'

export default {
  data() {
    return {
      latestSwiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      },
      lattest: []
    }
  },
  mounted() {
    this.lattest = lattestGetter()
  }
}
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

.block-row

  .block-title
    width: 100%
    text-align: center

  &:nth-child(odd)
    background-color: rgb(42, 60, 76)
    color: #fff

  &:nth-child(even)
    background-color: #fff
    color: #333
</style>
