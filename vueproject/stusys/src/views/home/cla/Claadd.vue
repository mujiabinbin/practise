<template>
  <div>
    <h1>添加班级</h1>
    <input type="text" v-model="claadd.classname">
    <button @click="addcla(claadd)">添加班级</button>
  </div>
</template>

<script>
//非模块化
import { createNamespacedHelpers } from 'vuex';
const {mapActions} =createNamespacedHelpers('classes');
//模块化
/* import { createNamespacedHelpers } from 'vuex';
const {mapActions} = createNamespacedHelpers('classes') */
export default {
    data() {
        return {
            claadd:{}
        }
    },
    methods: {
        ...mapActions(['addclaAsync']),
        async addcla(claadd){
            //const data = await this.api.claapi.addcla(claadd)
            const data= await this.addclaAsync(claadd);
            this.$router.push('/home/clalist')
        }
    },

}
</script>

<style>

</style>