<template>
 <div class="add">
  <div class="title">
<h3>搜索学生</h3>
  </div>
  
 <div class="content">
  <select v-model="property">
    <option value="name" selected>姓名</option>
    <option value="age">年龄</option>
    <option value="gender">性别</option>
  </select>  
   <input type="text" v-model="keywords">
 </div>
 
  <div class="btn" @click="searchstu">搜索
  </div>
  
 </div>
   
</template>

<script>
export default {
  data() {
    return {
      property:'',
      keywords:''
    }
  },
  methods: {
    searchstu(){
    this.$emit('searchstu',{property:this.property,keywords:this.keywords});
    }
  },
};
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