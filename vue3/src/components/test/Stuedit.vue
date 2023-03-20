<template>
 <div class="add">
  <div class="title">
<h3>编辑学生</h3>
  </div>
  
  <div class="content">
 <span>姓名：</span><input type="text">
  </div>
 <div class="content">
<span>年龄：</span><input type="text">
 </div>
  <div class="content">
<span>性别：</span><input type="radio">男<input type="radio">女
  </div>
 <div class="btn">确认修改</div>
  
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