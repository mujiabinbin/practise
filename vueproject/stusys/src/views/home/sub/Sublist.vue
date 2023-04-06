<template>
    <div>
      <h1>专业列表</h1>
      <label>请输入专业名称:</label>
      <input type="text" v-model="subadddata.subname">
      <label>请选择关联班级:</label>
      <div v-for="item in cladata" :key="item._id" >
        <input type="checkbox" v-model="subadddata.claname" :value="item.classname"><label for="">{{item.classname}}</label>
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
  export default {
     data() {
        return {
            cladata:[],
            subadddata:{
              subname:'',
              claname:[]
            },
            subdata:[]
        }
     },
     mounted() {
    this.getclalist(),
    this.getsublist()
   },
   methods: {
    async getclalist(){
        const data = await this.api.claapi.claget();
        this.cladata=data.data;
    },
    async subadd(subadd){
        const data=await this.api.subapi.addsub(this.subadddata);
        this.getsublist();
        this.subadddata.subname='';
        this.subadddata.claid=[];

    },
    async getsublist(){
        const data = await this.api.subapi.subget();
        this.subdata=data.data;
        
    },
   },
     
  }
  </script>
  
  <style>
  
  </style>