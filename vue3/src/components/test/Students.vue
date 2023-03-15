<template>
  <div>
    <table>
      <thead>
        <tr>
          <td><input type="checkbox" v-model="check"><label for="">全选 共选中{{total}}条数据</label><button @click="removes">删除选中</button></td>
        </tr>
        <tr>
          <th>选择</th>
          <th>编号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>班级</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in stu">
          <tr :key="item.id" v-if="item.isshow">
            <template v-if="item.id == editting">
              <td><input type="checkbox" v-model="item.checked"></td>
              <td>{{ item.id }}</td>
              <td>请输入姓名：<input type="text" v-model="editstu.name" /></td>
              <td>请输入年龄：<input type="text" v-model="editstu.age" /></td>
              <td>
                请选择性别：<input
                  type="radio"
                  v-model="editstu.gender"
                  value="男"
                /><label for="male">男</label>
                <input type="radio" v-model="editstu.gender" value="女" /><label
                  for="female"
                  >女</label
                >
              </td>
              <td>
                <select v-model="editstu.classname">
                  <option value="1班">1班</option>
                  <option value="2班">2班</option>
                  <option value="3班">3班</option>
                </select>
              </td>
              <td>
                <button @click="save">保存</button>
                <button @click="cancel">取消修改</button>
                <button @click="item.isshow=false">删除</button>
              </td>
            </template>
            <template v-else>
              <td><input type="checkbox" v-model="item.checked"></td>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.classname }}</td>
              <td>
                <button @click="edit(item)">编辑</button
                ><button @click="item.isshow=false">删除</button>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stu: [
        { id: `01`, name: `牟佳斌`, age: 41, gender: `男`, classname: `1班` ,checked:false,isshow:true},
        { id: `02`, name: `牟彦丞`, age: 10, gender: `男`, classname: `2班` ,checked:true,isshow:true},
        { id: `03`, name: `张秦宁`, age: 36, gender: `女`, classname: `3班` ,checked:false,isshow:true},
      ],
      editstu: {},
      editting: ``,
      check:false
    };
  },
  methods: {
    cancel() {
      this.editting = ``;
    },
    save() {
      this.stu = this.stu.map((item) => {
        if (item.id == this.editstu.id) {
          return this.editstu;
        } else {
          return item;
        }
      });
      this.editting = ``;
    },
    edit(stu) {
      this.editting = stu.id;
      this.editstu = { ...stu };
    },
    removes(){
      this.stu.forEach(element=>{
       if(element.checked){
element.isshow=false
       }
      })
    }
  },
  computed:{
      total:{
        get(){
          return this.stu.filter(item=>{
return item.checked==true
        }).length
        }
      }
  },
  watch:{
    check(){
      if(this.check){
        this.stu.forEach(element => {
          element.checked=true
        });
      }else{
        this.stu.forEach(element => {
          element.checked=false;
        })
      }
    }
  }
};
</script>

<style>
</style>