<template>
  <div>
    <p>axios</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
created() {
    axios({
        url:'http://localhost:3000/index/get',
        method:'GET',
    }).then((res=>{
        console.log(res);
    }))
},
}
</script>

<style>

</style>