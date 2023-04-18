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
  export default {
    data() {
      return {
        addstudata:{},
        value:[]
      }
    },
  components:{Menu},
  computed:{
    ...subsState({sublist:"sublistdata"})
  },
  mounted() {
    this.getsublistAsync();
  },
  methods: {
    ...mapActions(["stuaddAsync"]),
    ...subsActions(["getsublistAsync"]),
    async stuadd(){
      const data=await this.stuaddAsync(this.addstudata)
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
  
  </style>