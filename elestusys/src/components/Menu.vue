<template>
   <el-menu
        background-color="#d3dce6"
        :default-active="$route.path"
        active-color="#409EFF"
        :router="true"
        :collapse-transition="false"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>学生管理</span>
          </template>
            <el-menu-item index="/stu">学生列表</el-menu-item>
            <el-menu-item index="/stuadd">新增学生</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/subject">
          <span>专业管理</span>
        </el-menu-item>
      </el-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>