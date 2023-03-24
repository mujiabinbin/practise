<template>
  <div>
    <p>axios{{stu}}</p>
  </div>
</template>

<script>
//import api from '../../../src/http/api';
export default {
data() {
  return {
    stu:{}
  }
},
created() {
  this.getindexdata()
},
methods: {
  async getindexdata(){
      const res= await this.$api.index.get();
      this.stu=res.data.data.data[0];
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