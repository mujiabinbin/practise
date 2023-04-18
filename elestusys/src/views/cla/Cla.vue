<template>
<div class="common-layout">
    <el-container class="container">
      <el-header>学生管理系统</el-header>
      <el-container>
        <el-aside width="200px">
         <Menu></Menu>
        </el-aside>
        <el-main>
          <h1>班级管理</h1>
          <el-table
          :stripe="true"
          :border="true"
          :data="cladata"
          style="width: 100%"
        >
          <el-table-column fixed prop="classname" label="班级名" />
         
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("classes");
export default {
components:{Menu},

computed:{
  ...mapState({cladata:"classdata"})
},
mounted() {
  this.getclalist()
},
methods: {
  ...mapActions(["getclalistAsync"]),
  async getclalist(){
    const data = await this.getclalistAsync() 
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