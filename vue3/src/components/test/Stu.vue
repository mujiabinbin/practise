<template>
  <div>
    <Stunav @getstu1='getstu1' :editstudata='editstudata'></Stunav>
    <Stulist :stu='stu' @removestu='removestu' @editstu='editstu'></Stulist>
  </div>
</template>

<script>
import Stulist from './Stulist.vue';
import Stunav from './Stunav.vue';
export default {
    components:{
        Stunav,
        Stulist
    },
    data() {
      return {
        stu: [
        { id: 1, name: `牟佳斌`, age: 41, gender: `男`,isshow:true},
        { id: 2, name: `牟彦丞`, age: 10, gender: `男`,isshow:true},
        { id: 3, name: `张秦宁`, age: 36, gender: `女`,isshow:true},
        { id: 4, name: `姜英华`, age: 67, gender: `女`,isshow:true},
        { id: 5, name: `张占州`, age: 60, gender: `男`,isshow:true},
        { id: 6, name: `常养呢`, age: 59, gender: `女`,isshow:true},
      ],
        stu2:{},
        id:1,
        editstudata:{}
      }
    },
    methods: {
      getstu1(stu){
        this.stu2=stu;
        this.addstu(this.stu2)
      },
      addstu(stu){
        this.stu.push(stu);
      },
      removestu(id){
         this.id=id;
         this.stu.forEach(element => {
          if(element.id==this.id){
            element.isshow=false
          }
         });
      },
      editstu(stu){
         this.editstudata=stu;
         console.log(this.editstudata)
      }
    },

}
</script>

<style scoped>
div{
    width: 100vw;
    height: 100vh;
    display: flex;
}
</style>>
