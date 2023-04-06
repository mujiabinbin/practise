<template>
  <div>
    <h1>添加班级</h1>
    <input type="text" v-model="claadd.classname">
    <button @click="addcla(claadd)">添加班级</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            claadd:{}
        }
    },
    methods: {
        async addcla(claadd){
            const data = await this.api.claapi.addcla(claadd)
        }
    },

}
</script>

<style>

</style>