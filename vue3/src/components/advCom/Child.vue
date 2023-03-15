<template>
  <div>
    <h2>子组件</h2>
    <p>你好{{name}},年龄{{age}}</p>
    <p>{{gender}}</p>
  </div>
</template>

<script>


export default {
 //props:[`name`,`age`],
 props:{
  name:String,
  age:[Number,String],
  /* gender:{
    required:true
  } */
  gender:{
    default:`male`
  },
  friends:{
    default:function(){
    return {} 
  },
  classname:{
    validator:function(value){
        //自定义验证规则，value是父组件classname传过来的值
        return //返回true false
    }
  }
  }
 }
}
    

</script>

<style>

</style>