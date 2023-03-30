<template>
  <div>
    <input type="text" v-model="username">
    <input type="text" v-model="userage">
    <input type="radio" v-model="usergender" value="男">男
    <input type="radio" v-model="usergender" value="女">女
    <button>修改</button>
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
    //console.log(this.$route.params)
    this.geteditstudata()
},
methods: {
    async geteditstudata(){
      const data=  await this.$api.stuapi.editstu({_id:this.id});
      this.username=data.data.data[0].username;
      this.userage=data.data.data[0].userage;
      this.usergender=data.data.data[0].usergender;
    }
},
}
</script>

<style>

</style>