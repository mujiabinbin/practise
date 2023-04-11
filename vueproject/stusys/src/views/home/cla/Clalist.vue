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
import {createNamespacedHelpers} from 'vuex';
const {mapActions,mapState} =createNamespacedHelpers('classes');
export default {
   /* data() {
    return {
        cladata:this.$store.state.cladata
    }
   }, */
   mounted() {
    this.getclalistAsync();
    //this.$store.dispatch('getclalistAsync')
   },
   computed:{
    ...mapState(['classdata']),
    cladata(){
        return this.classdata
    }
   },
   methods: {
    ...mapActions(['getclalistAsync']),

    async getclalist(){
        const data = await this.getclalistAsync();
        //this.cladata=data.data;
    },
   },
}
</script>

<style>

</style>