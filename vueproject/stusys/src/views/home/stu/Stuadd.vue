<template>
  <div>
    <h2>新增学生</h2>
    <span>姓名</span><input type="text" v-model="username">
    <span>年龄</span><input type="text" v-model="userage">
    <span>性别</span><input type="radio" v-model="usergender" value="male">男<input type="radio" v-model="usergender" value="female">女
    <span>专业</span>
    <select v-model="subid._id" @change="searchsub(subid)">
      <option  v-for="item in subdata" :key="item._id"  :value="item._id">{{ item.subname }}</option>
    </select>
    <span>班级</span>
    <select v-model="userclaname">
      <option  v-for="item in cladata" :key="item._id" :value="item.classname">{{ item.classname }}</option>
    </select>
    <label>上传图片</label>
    <input type="file" @change="uploadimg($event)">
    <img :src="picurl" alt="">
    <button @click="addstu">提交</button>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
const{mapActions:claActions,mapState:claState}=createNamespacedHelpers('classes');
const{mapActions:subActions,mapState:subState}=createNamespacedHelpers('subs');
export default {
  data() {
    return {
      username:'',
      userage:'',
      usergender:'',
      //usersubname:'',
      userclaname:'',
      picname:'',
      picurl:'',
      //subdata:[],
      //cladata:[],
      subid:{}
    }
  },
  mounted() {
    this.getsublist()
  },
  computed:{
    ...subState(['sublistdata']),
    ...claState(['classdatabysub','subname']),
    subdata(){
      return this.sublistdata
    },
    cladata(){
      return this.classdatabysub
    },
    usersubname(){
      return this.subname
    }
  },
methods: {
  ...subActions(['getsublistAsync']),
  ...claActions(['getclassbysubAsync']),
  async addstu(){
   const res= await this.api.stuapi.addstu({username:this.username,userage:this.userage,usergender:this.usergender,usersubname:this.usersubname,userclaname:this.userclaname,picname:this.picname});
   if(res.status==200){
      alert(`添加成功`)
   }else{
     alert(`添加失败`)
   }
  },
  async getsublist(){
        const data = await this.getsublistAsync();
        //this.subdata=data.data;
    },
    async searchsub(subid){
        const data = await this.getclassbysubAsync(subid);
        //this.cladata=data.data[0].claid;
        //this.usersubname=data.data[0].subname
    },
  async uploadimg(event){
    //通过event拿到图片信息
    const files=event.target.files;
    //将图片信息添加到表单对象
    const fd=new FormData();
    //表单对象添加图片信息，file是后端接收此图片需要的名称，由后端确定，files是获取图片的信息
    fd.append('file',files[0]);
    //请求axios将fd作为参数传给统一发送请求接口
    const data=await this.api.stuapi.uploadpic(fd);
    this.picurl=`http://localhost:3000/temp/${data.data.data}`;
    this.picname=data.data.data
  }
},
}
</script>

<style>

</style>