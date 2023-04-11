<template>
    <div>
      <h1>专业列表</h1>
      <label>请输入专业名称:</label>
      <input type="text" v-model="subadddata.subname">
      <label>请选择关联班级:</label>
      <div v-for="item in cladata" :key="item._id" >
        <input type="checkbox" v-model="subadddata.claid" :value="item._id"><label for="">{{item.classname}}</label>
      </div>
      
      
      <button @click="subadd(subadddata)">提交专业</button>
      <thead>
        <tr>
            <th>专业列表</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in subdata" :key="item._id">
            <td>{{item.subname}}</td>
        </tr>
      </tbody>
    </div>
  </template>
  
  <script>
  import { createNamespacedHelpers } from 'vuex';
  const {mapActions,mapState} = createNamespacedHelpers('subs');
  const {mapActions:claActions,mapState:claState} = createNamespacedHelpers('classes');
  export default {
     data() {
        return {
            subadddata:{
              subname:'',
              claid:[]
            },
            //subdata:[]
        }
     },
     mounted() {
    this.getclalist(),
    this.getsubdata()
   },
   computed:{
    ...claState(['classdata']),
    ...mapState(['sublistdata']),
    cladata(){
        return this.classdata
    },
    subdata(){
      return this.sublistdata
    }
   },
   methods: {
    ...mapActions(['getsublistAsync']),
    ...claActions(['getclalistAsync']),
    async getclalist(){
        const data = await this.getclalistAsync();
        //this.cladata=data.data;
    },
    async subadd(subadddata){
        const data=await this.api.subapi.addsub(subadddata);
        this.getsubdata();
        this.subadddata.subname='';
        this.subadddata.claid=[];

    },
    async getsubdata(){
        const data = await this.getsublistAsync();
        //this.subdata=data.data;
    },
   },
     
  }
  </script>
  
  <style>
  
  </style>