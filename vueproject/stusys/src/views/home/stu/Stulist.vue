<template>
  <div>
    <h2>学生列表</h2>
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
        <tr v-for="item in stulist" :key="item._id">
            <td>{{item._id}}</td>
            <td>{{item.username}}</td>
            <td>{{item.userage}}</td>
            <td>{{item.usergender}}</td>
            <td><button>编辑</button><button @click="delstu(item._id)">删除</button></td>
        </tr>
    </tbody>
  </div>
</template>

<script>
export default {
    data() {
        return {
            stulist:[],
        }
    },
mounted() {
    this.getstulist();
},
methods: {
    async getstulist(){
        const data = await this.$api.stuapi.get();
        this.stulist=data.data.data.data
    },
    async delstu(_id){
        const data = await this.$api.stuapi.delstu({_id:_id});
        alert(data.data.msg);
         this.getstulist();
        console.log(data);
    }
    
},
}
</script>

<style>

</style>