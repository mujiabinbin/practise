<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header>学生管理系统</el-header>
      <el-container>
        <el-aside width="200px">
         <Menu></Menu>
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
components:{Menu}
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