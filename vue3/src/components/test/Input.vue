<template>
  <div>
    <button @click="minus">-</button>
    <input type="text" v-model.lazy="num">
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
data() {
    return {
        num:1
    }
},
methods: {
    minus(){
        if(this.num>0){
            this.num--
        }
    },
    add(){
        this.num++
    }
},
watch:{
    num(){
        this.$emit(`getdata`,this.num)
    }
}
}
</script>

<style>

</style>