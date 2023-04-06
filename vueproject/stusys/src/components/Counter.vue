<template>
  <div>
    <h1>计数器{{ $store.state.num }}</h1>
    <h1>计数器datanum{{ datanum }}</h1>
    <h1>计数器computednum{{ computednum }}</h1>
    <button @click="$store.commit('DECRECEMENT')">-1</button>
    <input type="text" v-model="inputnum" >
    <button @click="$store.commit('INCRECEMENT')">+1</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            datanum:this.$store.state.num,
            inputnum:''
        }
    },
    watch:{
        inputnum(){
            this.$store.commit('INPUTNUM',this.inputnum)
        }
    },
    computed:{
        computednum(){
           return  this.$store.state.num
        }
}
}
</script>

<style>

</style>