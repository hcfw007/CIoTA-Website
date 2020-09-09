<template>
  <div class="slide-block-container">
    <img :src="imgSrc" alt="">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    content: {
      type: String,
      default: 'content'
    },
    imgSrc: {
      type: String,
      default: 'imgSrc'
    }
  }
}
</script>

<style lang="stylus" scoped>
.slide-block-container
  text-align: center
  padding: 30px

  img
    width: 100%
    height: 200px
    margin: auto

  .content, .title
    text-align: left

  .title
    font-size: 20px
    color: #000

  .content
    font-size: 14px
    color: #333
    overflow: hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
</style>
