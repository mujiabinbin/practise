<template>
  <div>
    <input type="text" v-model="username">
    <input type="text" v-model="userage">
    <input type="radio" v-model="usergender" value="男">男
    <input type="radio" v-model="usergender" value="女">女
    <button @click="updatestu">修改</button>
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
    props:['id'],
created() {
    this.geteditstudata()
},
methods: {
    async geteditstudata(){
      const data=  await this.$api.stuapi.editstu({_id:this.id});
      this.username=data.data.data[0].username;
      this.userage=data.data.data[0].userage;
      this.usergender=data.data.data[0].usergender;
    },
    async updatestu(){
      const data=  await this.$api.stuapi.updatestu({_id:this.id,username:this.username,userage:this.userage,usergender:this.usergender});
      if(data.data.status==1){
        alert("编辑成功")
      }
    }
},
}
</script>

<style>

</style>