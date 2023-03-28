<template>
  <div>
    <h1>页面找不到</h1>
    <h2>{{num}}秒后返回首页</h2>
  </div>
</template>

<script>
export default {
data() {
    return {
        num:5
    }
},
mounted() {
   const err= setInterval(() => {
        this.num--;
        if(this.num<=0){
            clearInterval(err);
            this.$router.push('/home')
        }
    }, 1000);
},

}
</script>

<style>

</style>