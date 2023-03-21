<template>
  <div>
    <Stunav
      @getstu1="getstu1"
      @searchstu="searchstu"
      :editstudata="editstudata"
    ></Stunav>
    <Stulist
      :stu="stu1"
      :stutotal="stu"
      @removestu="removestu"
      @editstu="editstu"
      @nextpage="nextpage"
      @frontpage="frontpage"
      @firstpage="firstpage"
      @lastpage="lastpage"
      :totalpage="totalpage"
      :currentpage="currentpage"
    ></Stulist>
  </div>
</template>

<script>
import Stulist from "./Stulist.vue";
import Stunav from "./Stunav.vue";
export default {
  components: {
    Stunav,
    Stulist,
  },
  data() {
    return {
      stu: [
        { id: 1, name: `牟佳斌`, age: 41, gender: `男`, isshow: true },
        { id: 2, name: `牟彦丞`, age: 10, gender: `男`, isshow: true },
        { id: 3, name: `张秦宁`, age: 36, gender: `女`, isshow: true },
        { id: 4, name: `姜英华`, age: 67, gender: `女`, isshow: true },
        { id: 5, name: `张占州`, age: 60, gender: `男`, isshow: true },
        { id: 6, name: `常养呢`, age: 59, gender: `女`, isshow: true },
        { id: 7, name: `牟佳斌01`, age: 41, gender: `男`, isshow: true },
        { id: 8, name: `牟彦丞01`, age: 10, gender: `男`, isshow: true },
        { id: 9, name: `张秦宁01`, age: 36, gender: `女`, isshow: true },
        { id: 10, name: `姜英华01`, age: 67, gender: `女`, isshow: true },
        { id: 11, name: `张占州01`, age: 60, gender: `男`, isshow: true },
        { id: 12, name: `常养呢01`, age: 59, gender: `女`, isshow: true },
      ],
      stu1: [],
      stu2: {},
      id: 1,
      editstudata: {},
      searchstudata: {},
      property: "",
      keywords: "",
      currentpage: 1,
      pagesize: 3,
    };
  },
  methods: {
    getstu1(stu) {
      this.stu2 = stu;
      this.addstu(this.stu2);
    },
    addstu(stu) {
      this.stu.push(stu);
      this.stu1 = this.stu;
    },
    removestu(id) {
      this.id = id;
      this.stu.forEach((element) => {
        if (element.id == this.id) {
          element.isshow = false;
        }
        this.stu1 = this.stu;
      });
    },
    editstu(stu) {
      this.editstudata = stu;
      this.stu1 = this.stu;
    },
    searchstu(stu) {
      this.searchstudata = stu;
      this.property = this.searchstudata.property;
      this.keywords = this.searchstudata.keywords;
      this.stu1 = this.stu.filter((item) => {
        return item[this.property] == this.keywords;
      });
    },
    firstpage() {
      this.currentpage = 1;
      this.stu1 = this.stu.slice(
        (this.currentpage - 1) * this.pagesize,
        (this.currentpage - 1) * this.pagesize + this.pagesize
      );
    },
    nextpage() {
      if (this.currentpage < this.totalpage) {
        this.currentpage = this.currentpage + 1;
        this.stu1 = this.stu.slice(
          (this.currentpage - 1) * this.pagesize,
          (this.currentpage - 1) * this.pagesize + this.pagesize
        );
      }
    },
    frontpage() {
      if (this.currentpage >= 2) {
        this.currentpage = this.currentpage - 1;
        this.stu1 = this.stu.slice(
          (this.currentpage - 1) * this.pagesize,
          (this.currentpage - 1) * this.pagesize + this.pagesize
        );
      }
    },
    lastpage() {
      this.currentpage = this.totalpage;
      this.stu1 = this.stu.slice(
        (this.currentpage - 1) * this.pagesize,
        (this.currentpage - 1) * this.pagesize + this.pagesize
      );
    },
  },
  computed: {
    totalpage() {
      return parseInt(this.stu.length / this.pagesize) + 1;
    },
  },
  watch: {
    page: {
      handler() {
        this.stu1 = this.stu.slice(
          (this.currentpage - 1) * this.pagesize,
          (this.currentpage - 1) * this.pagesize + this.pagesize
        );
      },
      immediate: true, //立即侦听
    },
  },
};
</script>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>>
