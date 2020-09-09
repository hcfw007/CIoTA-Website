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
      <swiper ref="lattestSwiper" class="latest-swiper" :options="latestSwiperOptions">
        <swiper-slide v-for="(news, index) in lattest" :key="'lattest-' + index">
          <news-slide-block :title="news.title" :content="news.content" :img-src="news.imgSrc" />
        </swiper-slide>
      </swiper>
    </el-row>
    <el-row class="block-row">
      <h3 class="block-title">联盟介绍</h3>
      <el-col :span="12" class="intro-block-left content-block">
        <div class="block-logo">
          <img src="@/static/images/logo.png" alt="" class="intro-block-img">
          <img src="@/static/images/title.svg" alt="" class="intro-block-img">
        </div>
        <p><span class="dark-blue">中国物联网产业技术创新战略联盟</span>中国物联网产业技术创新战略联盟由物联网部际联席会议的14部委推荐的40家单位发起，于2013年10月24日成立，中国电子科技集团公司任理事长单位。</p>
        <el-button type="primary">主要按钮</el-button>
      </el-col>
      <el-col :span="12" class="intro-block-right content-block">
        <p>2013年10月24日，“物联网产业技术创新战略联盟”成立大会在京成功召开，科技部曹健林副部长出席会议并讲话，国家发展改革委、工信部等物联网发展部际联席会议14个部委作为联盟指导单位参会，来自40家联盟发起单位的代表参加了会议。</p>
        <p>联盟按照“战略引领、协同创新、产业推动、合作共赢”的原则组建，是由我国物联网产业链优势企业、科研院所、高校、组织共同发起组建的首个国家级物联网产业战略联盟。</p>
        <p>联盟将围绕产业政策研究、重大技术攻关、提供物联网公共服务等方面开展工作，并向全国公开征集联盟会员，形成面向行业的、开放的、具有国际先进水平的行业共性技术创新平台。</p>
      </el-col>
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

  .content-block
    padding: 40px

  .intro-block-img
    height: 40px

p
  text-indent: 2em
</style>
