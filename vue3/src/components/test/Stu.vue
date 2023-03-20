<template>
  <div>
    <Stunav></Stunav>
    <Stulist></Stulist>
  </div>
</template>

<script>
import Stulist from './Stulist.vue';
import Stunav from './Stunav.vue';
export default {
    components:{
        Stunav,
        Stulist
    }

}
</script>

<style scoped>
div{
    width: 100vw;
    height: 100vh;
    display: flex;
}
</style>>
