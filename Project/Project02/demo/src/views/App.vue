<template>
  <div class id="app">
    <div class="container">
      <div>
        <h3>人员档案综合查询系统</h3>
        <el-input v-model="account" placeholder="账号" autofocus resize="none" row='1'></el-input>
      <el-input v-model="psw" placeholder="密码" show-password resize="none"></el-input>

        <el-button type="primary" @ keyup.enter.native="login" round>登录</el-button>

      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      psw: ""
    };
  }
};
</script>

<style scoped>
.container{
    width:1920px;
    height: 1080px;
    display:flex;
    justify-content: center;
    align-items:center;
}
</style>