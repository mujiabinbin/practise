<template>
 <div class="add">
  <div class="title">
<h3>搜索学生</h3>
  </div>
  
 <div class="content">
  <select>
    <option value="name" selected>姓名</option>
    <option value="age">年龄</option>
    <option value="gender">性别</option>
  </select>  
   <input type="text">
 </div>
 
  <div class="btn">搜索
  </div>
  
 </div>
   
</template>

<script>
export default {};
</script>

<style scoped>
.add{
    padding: 10px;
    border-radius: 10px;
    background-color: white;
}
.content{
    margin-bottom: 10px;
}
select{
  width: 52px;
}
.title{
    text-align:center;
}
.btn{
    text-align:center;
    margin-top: 10px;
    color: white;
    background-color: darkgrey;
    border-radius: 5px;
}
</style>