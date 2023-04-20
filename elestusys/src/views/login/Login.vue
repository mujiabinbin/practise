<template>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="用户名">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登陆</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
    data() {
        return {
            form:{}
        }
    },
    methods: {
       async onSubmit() {
        const {data}=await this.api.loginapi.login(this.form);
        if(data.status){
            localStorage.token=data.token;
            this.$message({
          message: '登陆成功',
          center: true
        });
        this.$router.push('/');
        }else{
            this.$message.error('用户名或密码错误，请重新登陆');
        }
        
        console.log(data);
      }
    },

}
</script>

<style>

</style>