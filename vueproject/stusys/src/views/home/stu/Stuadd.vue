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
    <select>
      <option  v-for="item in cladata" :key="item" value="item">{{ item }}</option>
    </select>
    <label>上传图片</label>
    <input type="file" @change="uploadimg($event)">
    <button @click="addstu">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      userage:'',
      usergender:'',
      subdata:[],
      cladata:[],
      subid:{}
    }
  },
  mounted() {
    this.getsublist()
  },
methods: {
  async addstu(){
   const res= await this.api.stuapi.addstu({username:this.username,userage:this.userage,usergender:this.usergender});
   if(res.status==200){
      alert(`添加成功`)
   }else{
     alert(`添加失败`)
   }
   console.log(res);
  },
  async getsublist(){
        const data = await this.api.subapi.subget();
        this.subdata=data.data;
    },
    async searchsub(subid){
        const data = await this.api.subapi.searchsub(subid);
        this.cladata=data.data[0].claname
        console.log(data.data);
    },
  uploadimg(event){
    //通过event拿到图片信息
    const files=event.target.files;
    //将图片信息添加到表单对象
    const fd=new FormData();
    //表单对象添加图片信息，file是后端接收此图片需要的名称，由后端确定，files是获取图片的信息
    fd.append('file',files[0]);
    //请求axios将fd作为参数传给统一发送请求接口
  }
},
}
</script>

<style>

</style>