<template>
  <div>
    <h1>父组件</h1>
    <Child :name='name'  age='20' :bool='true' ></Child>
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
        name:`zhangsan`
    }
},

}
</script>

<style>

</style>