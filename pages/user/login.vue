<template>
  <div class="frame">
    <div class="login-container">
      <img src="@/static/images/user/login-background.png" alt="" class="login-background">
      <div class="logo">
        <img src="@/static/images/logo.png" alt="" class="logo-img">
        <img src="@/static/images/title.svg" alt="" class="logo-img">
      </div>
      <div class="login-pannel">
        <h5 class="pannel-title">
          会员账号登录
        </h5>
        <div class="label">
          <label for="username">账号</label>
        </div>
        <div class="value">
          <input id="username" type="text">
        </div>
        <div class="label">
          <label for="password">密码</label>
        </div>
        <div class="value">
          <input id="password" type="password">
        </div>
        <div class="forget-password">
          <span>忘记密码？</span>
        </div>
        <el-button type="primary" class="login-button">登录</el-button>
        <div class="register-now">
          还没有账号？立即注册
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'special'
}
</script>

<style lang="stylus" scoped>
frame-width = 1000px
pannel-width = 400px

.frame
  width: 100%
  text-align: center

  .login-container
    width: frame-width
    margin: auto
    position: relative

    &>div
      position: absolute

    img.login-background
      width: 100%

    .logo
      height: 30px
      top: 40px
      left: 60px

      img.logo-img
        height: 100%

    .login-pannel
      width: pannel-width
      top: 150px
      left: ((frame-width - pannel-width) / 2)
      background-color: rgba(0, 21, 41, 0.8)
      color: #fff
      border-radius: 15px
      text-align: left
      padding: 20px

      .pannel-title
        font-size: 20px
        font-weight: 700
        margin: 0

      &>div
        display: inline-block
        margin: 0
        height: 30px
        line-height: 30px

      .label, .value
        margin-top: 15px

      .label
        width: 30%
        text-align: right
        font-size: 14px

      .value
        width: 60%
        padding-left: 30px

      input
        margin: 0
        width: 180px
        border: 0
        height: 100%
        font-size: 14px
        font-weight: 400
        background-color: rgb(200, 200, 200)
        padding: 0

      .forget-password
        text-align: right
        width: calc(100% - 80px)
        font-size: 12px
        padding-right: 80px
        margin-top: 5px

        span
          cursor: pointer

      .login-button
        margin-left: calc(30% +33px)
        height: 30px
        padding: 0
        border: none
        width: 180px

      .register-now
        margin-left: calc(30% +33px)
        cursor: pointer
        font-size: 12px
        font-weight: 400
        margin-top: 10px
</style>
