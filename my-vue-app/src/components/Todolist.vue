<template>
  <div>
    <div>
        <input type="text" v-model="state.addname">
        <button @click="addtodo">添加</button>
    </div>
    <ul>
        <li v-for="item in filterlist" :key="item.id" @click="item.done=!item.done" :class="{done:item.done}">{{ item.name }}</li>
    </ul>
    <template v-for="item in state.buttons" :key="item.id">
        <span  v-if="item.id==state.currentid">{{ item.name }}</span>
        <a  href="#" v-else @click="state.currentid=item.id">{{ item.name }}</a>
    </template>
  </div>
  
</template>

<script setup>
import { computed, reactive } from 'vue';
const state= reactive({
    todolist:[
        {id:1,name:"数学",done:false},
        {id:2,name:"语文",done:true},
        {id:3,name:"英语",done:false}
    ],
    addname:"",
    id:4,
    buttons:[
        {id:1,name:"全部"},
         {id:2,name:"已完成"},
          {id:3,name:"未完成"},
    ],
    currentid:1
})
const addtodo=()=>{
    state.todolist.push({
        id:state.id++,
        name:state.addname,
        done:false
    })
}
const filterlist= computed(()=>{
    if(state.currentid==1){
        return state.todolist
    }else if(state.currentid==2){
        return state.todolist.filter((item)=>item.done)
    }else{
        return state.todolist.filter((item)=> !item.done)
    }
})
</script>

<style scoped>
.done{
    color: red;
    text-decoration: line-through;
}
</style>