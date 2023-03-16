<template>
  <div>
    <h2>子组件</h2>
    <p>你好{{name}},年龄{{age}}</p>
    <p>{{gender}}</p>
    <button @click="$emit(`fatherevent`)">子组件触发父组件事件</button>
    <button @click="childevent">子组件js调用</button>
    <button @click="add">子组件传值给父组件</button>
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
 },
 methods: {
  childevent(){
    this.$emit(`fatherevent`)
  },
  add(){
    this.$emit(`add`,10)
  }
 },
}
    

</script>

<style>

</style>