<template>
  <div>
    <p>{{num}}</p>
  </div>
</template>

<script>
import {bus} from './bus';
 
export default {
data() {
    return {
        num:1
    }
},
mounted() {
    bus.on('add',()=>{
       this.num++
    })
},
}
</script>

<style>

</style>