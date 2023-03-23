<template>
  <div>
<!-- <Child>
    <template v-slot:slot1>
        <p>this is for childslot1</p>
    </template>
     <template v-slot:slot2>
        <p>this is for childslot2</p>
    </template>
   
</Child> -->
<Child>
    <template  #slot1='{stu}'>
         <ur>
        <li v-for="item in stu" :key="item.id">{{item.name}}</li>
    </ur>
    </template>
   
</Child>
<Child>
 <template  v-slot='{stu}'>
         <ol>
        <li v-for="item in stu" :key="item.id">{{item.name}}</li>
    </ol>
    </template>
</Child>
  </div>
</template>

<script>
import Child from './Childslot.vue';
export default {
components:{
    Child
}
}
</script>

<style>

</style>