<template>
  <div>
    <h1>父组件</h1>
    <p>{{num}}</p>
    <Child :name='name'  age='20' :bool='true' @fatherevent="sayhello" @add="add"></Child>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
components:{
    Child
},
data() {
    return {
        name:`zhangsan`,
        num:1
    }
},
methods: {
  sayhello(){
    console.log(`父组件hello`)
  },
  add(param){
    this.num+=param
  }
},
}
</script>

<style>

</style>