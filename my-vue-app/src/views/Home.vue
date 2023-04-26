<template>
  <div>
    <h1>首页</h1>
    <router-link to="/reg">去注册</router-link>
    <button @click="tologin">登陆</button>
    <h2>{{ store.state.num }}</h2>
  </div>
</template>

<script setup>
import{useRouter,useRoute} from 'vue-router'
import{useStore} from 'vuex'
const store=useStore()
const router=useRouter()
const route=useRoute()
const tologin=()=>{
    router.push('/login')
}
</script>

<style>

</style>