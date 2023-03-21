<template>
 <div class="add">
  <div class="title">
<h3>添加学生</h3>
  </div>
  
  <div class="content">
 <span>姓名：</span><input type="text" v-model="addname">
  </div>
 <div class="content" >
<span>年龄：</span><input type="text" v-model="addage">
 </div>
  <div class="content">
<span>性别：</span><input type="radio" v-model="addgender" value="男">男<input type="radio" v-model="addgender" value="女">女
  </div>
  <div class="btn" @click="addstu">确认添加</div>
  
 </div>
   
</template>

<script>
export default {
  data() {
    return {
        id:12,
        addname:'',
        addage:'',
        addgender:'', 
      }
    },
  methods: {
    addstu(){
      this.id++;
      this.$emit(`addstu`,{id:this.id,name:this.addname,
        age:this.addage,
        gender:this.addgender,isshow:true});
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