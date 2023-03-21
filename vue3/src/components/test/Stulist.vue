<template>
  <div class="list">
  <h2>学生列表</h2> 
 <table>
  <thead>
    <tr>
      <th>编号</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody>
    <template v-for="item in stu">
     <tr v-if="item.isshow"  :key="item.id">
      <td>{{item.id}}</td>
       <td>{{item.name}}</td>
        <td>{{item.age}}</td>
         <td>{{item.gender}}</td>
          <td><button @click="editstu(item)">编辑</button><button @click="removestu(item.id)">删除</button></td>
    </tr>
    </template>
    
  </tbody>
 </table>
 <p>共{{totalstu}}条学生数据 
  <button @click="firstpage">首页</button>
  <button @click="frontpage">上一页</button>
  <button @click="nextpage">下一页</button>
  <button @click="lastpage">尾页</button> 
  共{{totalpage}}页，当前第{{currentpage}}页
  </p>
  </div>
</template>

<script>

export default {
  props:{
     stu:Array,
     currentpage:[Number,String],
     totalpage:[Number,String],
     stutotal:Array
  },
  data() {
    return {
      id:1
    }
  },
  methods: {
    removestu(id){
      this.id=id
      this.$emit('removestu',id)
    },
    editstu(item){
      this.$emit('editstu',item)
    },
    firstpage(){
      this.$emit('firstpage')
    },
    nextpage(){
      this.$emit('nextpage');
      console.log(`nextpage click`)
    },
    frontpage(){
      this.$emit('frontpage')
    },
    lastpage(){
      this.$emit('lastpage')
    },

  },
  computed:{
    totalstu(){
   const total= this.stutotal.filter(item=>{
      return item.isshow
    }).length;
    return total
    }
  }

}
</script>

<style scoped>
.list{
 flex: 4;
 display: flex;
 flex-wrap: wrap;
 padding-left: 20px;
 padding-right: 20px;
 flex-direction: column;
 text-align: center;
}

thead{
  background-color: darkgrey;
  color: white;
}
td{
  border: 1px solid darkgrey;
}
</style>