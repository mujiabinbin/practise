<template>
  <div>
    <h1>{{ students }}</h1>
    <button @click="add">add</button>
    <h1>{{person}}</h1>
    <button @click="shuzu">shuzu</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: {
        name: `zhangsan`,
      },
      person:[`lisi`,`wangwu`]
    };
  },
  methods: {
    add() {
      /* this.students={
            ...this.students,
            age:20
        }; */
      /*  this.$set(this.students,`age`,20); */
      /*  Object.assign({},this.students,{age:20}) */
      delete this.students.name;
      console.log(this.students);
    },
    shuzu(){
        this.person[0]=`zhao`;
        this.$set(this.person,0,`zhao`)
        this.person.length=0;//清空数组
        this.person.splice(0);
    }
  },
};
</script>

<style>
</style>