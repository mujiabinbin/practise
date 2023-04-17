<template>
    <div class="common-layout">
      <el-container class="container">
        <el-header>学生管理系统</el-header>
        <el-container>
          <el-aside width="200px">
           <Menu></Menu>
          </el-aside>
          <el-main>
            <h1>专业管理</h1>
            <el-table
            :stripe="true"
            :border="true"
            :data="subdata"
            style="width: 100%"
          >
            <el-table-column fixed prop="subname" label="专业名" />
            <el-table-column prop="claname" label="包含班级" >
            <template #default="scope">
               {{ scope.row.claname ? scope.row.claname : newarr=scope.row.claid.map(function(item){return item.classname}) }}
              </template>
          </el-table-column> 
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
  import Menu from '@/components/Menu.vue'
  import { createNamespacedHelpers } from "vuex";
  const { mapActions, mapState } = createNamespacedHelpers("subs");
  export default {
  components:{Menu},
  data() {
    return {
      newarr:[]
    }
  },
  computed:{
    ...mapState({subdata:"sublistdata"})
  },
  mounted() {
    this.getsublist()
  },
  methods: {
    ...mapActions(["getsublistAsync"]),
    async getsublist(){
      const data = await this.getsublistAsync() 
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