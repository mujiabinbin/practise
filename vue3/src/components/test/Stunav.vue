<template>
  <div>
    <Stuadd></Stuadd>
    <Stuedit></Stuedit>
    <Stusearch></Stusearch>
  </div>
</template>

<script>
import Stuadd from './Stuadd.vue'
import Stuedit from './Stuedit.vue'
import Stusearch from './Stusearch.vue'
export default {
    components:{
        Stuadd,
        Stuedit,
        Stusearch
    }

}
</script>

<style scoped>
div{
   flex: 1;
   background-color: darkgrey;
   display: flex;
   flex-direction: column;
   border: 5px solid darkgrey;
   border-radius: 5px;

}
</style>