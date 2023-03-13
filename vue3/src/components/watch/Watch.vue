<template>
 <div>
   <!--   <h1>{{num}}</h1>
  <button @click="num++"></button> -->
  <h1>{{students.age}}</h1>
  <button @click="students.age++">addage</button>
  
 </div>
</template>

<script>
export default {
data() {
    return {
        num:1,
        students:{
            age:20
        }
    }
},
watch:{
    num(){
        console.log(`num change`)
    },
   /*  "students.age"(){
        console.log(`students change`)
    } */
    students:{
        handler(){
            console.log(`深度侦听`)
        },
        deep:true,//深度侦听
        immediate:true//立即侦听
    }
}
} 
</script>

<style>

</style>