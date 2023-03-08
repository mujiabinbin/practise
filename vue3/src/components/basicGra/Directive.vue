<template>
  <!-- <h1 v-html="name"></h1> -->
  <div>
 <h1 v-show="false">v-show</h1>
  <button v-show="isshow" @click="isshow=!isshow">显示/隐藏</button>
<a v-bind:href="link">url</a>
<img :src="logo" alt="">
  </div>
</template>

<script>
export default {
data() {
    return {
        //name:`zhangsan`
        name:`<a href="">zhangsan</a>`,
        isshow:true,
        link:`http://www.baidi.com`,
        logo:require(`../../assets/logo.png`) 
    }
},
}
</script>

<style>

</style>