<template>
  <div>
<div>
    <button @click="currenttab='TabA'">TabA</button>
     <button @click="currenttab='TabB'">TabB</button>
      <button @click="currenttab='TabC'">TabC</button>
</div>
<div>
    <keep-alive include="TabA" exclude="TabC">
     <component :is='currenttab'></component>
    </keep-alive>
   
</div>
  </div>
</template>

<script>
import TabA from './TabA.vue'
import TabB from './TabB.vue'
import TabC from './TabC.vue'
export default {
components:{
TabA,TabB,TabC
},
data() {
    return {
        currenttab:TabA 
    }
},
}
</script>

<style>

</style>