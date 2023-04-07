<template>
  <div>
    <input type="text" v-model="username">
    <input type="text" v-model="userage">
    <input type="radio" v-model="usergender" value="男">男
    <input type="radio" v-model="usergender" value="女">女
    <label>专业</label>
    <select v-model="subid._id" @change="searchsub(subid)">
      <option :value="item._id" v-for="item in subdata" :key="item._id">{{ item.subname }}</option>
    </select>
    <span>班级</span>
    <select v-model="userclaname">
      <option  v-for="item in cladata" :key="item._id" :value="item.classname">{{ item.classname }}</option>
    </select>
    <button @click="updatestu">修改</button>
  </div>
</template>

<script>


export default {
    data() {
        return {
            username:'',
            userage:'',
            usergender:'',
            usersubname:'',
            userclaname:'',
            subid:{},
            subdata:[],
            cladata:[]
            
        }
    },
    props:['id'],
created() {
    this.geteditstudata();
    this.getsublist();
},
/* beforeRouteLeave(){
    if(this.username!=''){
        const isleave=confirm('确定离开吗？');
        if(isleave){
          next()
        }
    }
}, */

methods: {
  async getsublist(){
        const data = await this.api.subapi.subget();
        this.subdata=data.data;
    },
    async searchsub(subid){
        const data = await this.api.subapi.searchsub(subid);
        this.cladata=data.data[0].claid;
        this.usersubname=data.data[0].subname
    },
    async geteditstudata(){
      const data=  await this.api.stuapi.editstu({_id:this.id});
      this.username=data.data.data[0].username;
      this.userage=data.data.data[0].userage;
      this.usergender=data.data.data[0].usergender;
      this.usersubname=data.data.data[0].usersubname;
      this.userclaname=data.data.data[0].userclaname;
    },
    async updatestu(){
      const data=  await this.api.stuapi.updatestu({_id:this.id,username:this.username,userage:this.userage,usergender:this.usergender,usersubname:this.usersubname,userclaname:this.userclaname});
      if(data.data.status==1){
        alert("编辑成功")
      }
    }
},
}
</script>

<style>

</style>