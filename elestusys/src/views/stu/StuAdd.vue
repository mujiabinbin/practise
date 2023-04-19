<template>
    <div class="common-layout">
      <el-container class="container">
        <el-header>学生管理系统</el-header>
        <el-container>
          <el-aside width="200px">
           <Menu></Menu>
          </el-aside>
          <el-main>
            <h1>新增学生</h1>
            <el-row type="flex" class="row-bg" justify="center">
  
  <el-col :span="6"><div class="grid-content bg-purple-light">
    <el-input v-model="addstudata.username" placeholder="请输入学生姓名" clearable></el-input>
  </div>
  </el-col>
  
</el-row>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><div class="grid-content bg-purple-light">
    <el-input v-model="addstudata.userage" placeholder="请输入学生年龄" clearable></el-input>
  </div>
  </el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><div class="grid-content bg-purple-light">
  <el-radio-group v-model="addstudata.usergender">
    <el-radio-button label="male">男</el-radio-button>
    <el-radio-button label="female">女</el-radio-button>
  </el-radio-group>
  </div>
  </el-col>
</el-row>    
<el-select v-model="subid" placeholder="请选择专业" @change="getclassbysub(subid)">
      <el-option v-for="item in sublist" :key="item._id" :label="item.subname" :value="item._id"></el-option>
    </el-select>
    <el-select v-model="addstudata.userclaname" placeholder="请选择班级">
      <el-option v-for="item in classdatabysub" :key="item._id" :label="item.classname" :value="item.classname"></el-option>
    </el-select>
    <el-upload
  class="avatar-uploader"
  action="http://localhost:3000/pics/upload"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img class="avatar">
  <i class="el-icon-plus avatar-uploader-icon"></i>
 
</el-upload>

<!-- <el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><div class="grid-content bg-purple-light">
    <el-cascader
    v-model="value"
    :options="sublist"
    @change="handleChange"></el-cascader>
  </div>
  </el-col>
</el-row>     -->
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><div class="grid-content bg-purple-light">
    <el-button type="primary" @click="stuadd">添加</el-button>
  </div>
  </el-col>
</el-row>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
  import Menu from '@/components/Menu.vue'
  import { createNamespacedHelpers } from "vuex";
  const { mapActions, mapState } = createNamespacedHelpers("stu");
  const { mapActions:subsActions, mapState:subsState } = createNamespacedHelpers("subs");
  const { mapActions:claActions, mapState:claState } = createNamespacedHelpers("classes");
  export default {
    data() {
      return {
        addstudata:{},
        value:[],
        subid:'',
        
      }
    },
  components:{Menu},
  computed:{
    ...subsState({sublist:"sublistdata"}),
    ...claState(["classdatabysub","subname"])
  },
  mounted() {
    this.getsublistAsync();
  },
  methods: {
    ...mapActions(["stuaddAsync"]),
    ...subsActions(["getsublistAsync"]),
    ...claActions(["getclassbysubAsync"]),
    async stuadd(){
      const data=await this.stuaddAsync(this.addstudata)
    },
    async getclassbysub(subid){
      const data=await this.getclassbysubAsync({_id:subid});
      this.addstudata.usersubname=this.subname;
    },
    handleAvatarSuccess(res, file) {
        //this.imageUrl = URL.createObjectURL(file.raw);
        this.addstudata.picname=res.data
        console.log(res);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
  }
  </script>
  
  <style>
  .container{
    height: 100vh;
  }
  .el-header{
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside{
    background-color: #d3dce6;
    color: #333;
    text-align: center;
  }
  .el-main{
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
  .avatar-uploader >>> .el-upload  {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader >>> .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar    {
    width: 178px;
    height: 178px;
    display: block;
  }
  </style>