<template>
  <div>
    <el-col :span="24" class="register-form-container">
      <el-form ref="register-form" :model="form" label-width="120px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" />
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="form.mobile" />
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="form.mail" />
        </el-form-item>
        <el-form-item label="公司名称">
          <el-input v-model="form.orgnizationName" />
        </el-form-item>
        <el-form-item label="法人代表">
          <el-input v-model="form.representative" />
        </el-form-item>
        <el-form-item label="公司地点">
          <el-input v-model="form.location" />
        </el-form-item>
        <el-form-item label="成立时间">
          <el-input v-model="form.establishmentDate" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="register">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>

<script>
export default {
  layout: 'title-aside',
  data() {
    return {
      form: {}
    }
  }
}
</script>

<style lang="stylus">
.register-form-container

  .el-form-item__label
    text-align: left
    font-size: 16px
    font-weight: 700
    line-height: 50px

  .el-form-item__content
    max-width: 600px
    font-size: 16px
    font-weight: 700
    line-height: 50px

  .register
    width: 300px
    color: #000
    font-size: 18px
    foint-weight: 700
</style>
