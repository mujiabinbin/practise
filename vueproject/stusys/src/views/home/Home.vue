<template>
  <div>
    <h1>首页</h1>
    <button @click="reg">去注册</button>
    <router-link to='/login'>去登陆</router-link>
  </div>
</template>

<script>
export default {
    methods: {
        reg(){
            this.$router.push('/reg');
        }
    },
}
</script>

<style>

</style>