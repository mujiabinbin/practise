<template>
<div>
 <!-- <h1 :class="{red:isred,bigfont}">样式</h1>
  <button @click="isred=!isred,bigfont=!bigfont"></button>
  <h2 :style="{color:colorred}">内连样式</h2> -->
  <h1 :class="[colorclass,fontclass]">数组样式</h1>
</div>
 
</template>s

<script>
export default {
data() {
    return {
        /* isred:true,
        bigfont:true,
        colorred:`red` */
        colorclass:"red",
        fontclass:"bigfont"
        
    }
},
}
</script>

<style>
/* @import "./basic.css"; */
.red{
    color: red;
}
.bigfont{
    font-size: large;
}
</style>