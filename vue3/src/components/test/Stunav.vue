<template>
  <div>
    <Stuadd @addstu='addstu' ></Stuadd>
    <Stuedit :editstudata='editstudata'></Stuedit>
    <Stusearch @searchstu='searchstu'></Stusearch>
  </div>
</template>

<script>
import Stuadd from './Stuadd.vue'
import Stuedit from './Stuedit.vue'
import Stusearch from './Stusearch.vue'
export default {
    components:{
        Stuadd,
        Stuedit,
        Stusearch
    },
    props:{
       editstudata:Object
    },
    data() {
      return {
        stu1:{},
        searchstudata:{}
      }
    },
    methods: {
      addstu(stu){
        this.stu1 = stu;
        this.gestu1();
      },
      gestu1(){
        this.$emit('getstu1',this.stu1)
      },
      searchstu(stu){
        this.searchstudata=stu;
        this.$emit('searchstu',this.searchstudata)
      },

    },

}
</script>

<style scoped>
div{
   flex: 1;
   background-color: darkgrey;
   display: flex;
   flex-direction: column;
   border: 5px solid darkgrey;
   border-radius: 5px;

}
</style>