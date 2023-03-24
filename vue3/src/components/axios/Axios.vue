<template>
  <div>
    <p>axios</p>
  </div>
</template>

<script>
//import api from '../../../src/http/api';
export default {
created() {
  this.getindexdata()
},
methods: {
  async getindexdata(){
      const res= this.$api.index.get();
      console.log(res);
  }
},
    /* axios({
        url:'/index/get',
        method:'GET',
    }).then((res=>{
        console.log(res);
    })) */
}
</script>

<style>

</style>