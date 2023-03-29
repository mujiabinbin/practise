<template>
  <div>
    <h2>新增学生</h2>
    <span>姓名</span><input type="text" v-model="username">
    <span>年龄</span><input type="text" v-model="userage">
    <span>性别</span><input type="radio" v-model="usergender" value="male">男<input type="radio" v-model="usergender" value="female">女
    <button @click="addstu">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      userage:'',
      usergender:''
    }
  },
methods: {
  async addstu(){
   const res= await this.$api.stuapi.addstu({username:this.username,userage:this.userage,usergender:this.usergender});
   if(res.status==200){
      alert(`添加成功`)
   }else{
     alert(`添加失败`)
   }
   console.log(res);
  }
},
}
</script>

<style>

</style>