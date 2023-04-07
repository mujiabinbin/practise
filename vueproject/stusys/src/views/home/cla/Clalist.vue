<template>
  <div>
    <h1>班级列表</h1>
    <thead>
        <tr>
            <th>班级名称</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in cladata" :key="item._id">
            <td>{{item.classname}}</td>
        </tr>
    </tbody>
  </div>
</template>

<script>
export default {
   /* data() {
    return {
        cladata:this.$store.state.cladata
    }
   }, */
   mounted() {
    this.$store.dispatch('getclalistAsync')
   },
   computed:{
    cladata(){
        return this.$store.state.cladata
    }
   },
   methods: {
   /*  async getclalist(){
        const data = await this.api.claapi.claget();
        this.cladata=data.data;
    }, */
   },
}
</script>

<style>

</style>