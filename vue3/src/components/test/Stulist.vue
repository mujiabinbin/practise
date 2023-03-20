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
    <tr v-for="item in stu" :key="item.id">
      <td>{{item.id}}</td>
       <td>{{item.name}}</td>
        <td>{{item.age}}</td>
         <td>{{item.gender}}</td>
          <td><button>编辑</button><button>删除</button></td>
    </tr>
  </tbody>
 </table>
 <p>共6条学生数据 <button>首页</button><button>上一页</button><button>下一页</button><button>尾页</button> 共1页，当前第1页</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
     stu: [
        { id: `01`, name: `牟佳斌`, age: 41, gender: `男`},
        { id: `02`, name: `牟彦丞`, age: 10, gender: `男`},
        { id: `03`, name: `张秦宁`, age: 36, gender: `女`},
         { id: `04`, name: `姜英华`, age: 67, gender: `女`},
        { id: `05`, name: `张占州`, age: 60, gender: `男`},
        { id: `06`, name: `常养呢`, age: 59, gender: `女`},
      ],
    }
  },

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