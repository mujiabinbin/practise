<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header>学生管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <Menu></Menu>
        </el-aside>
        <el-main>
          <h1>学生列表</h1>
          <el-table
            :stripe="true"
            :border="true"
            empty-text="无数据"
            :data="stulist"
            style="width: 100%"
          >
            <el-table-column fixed prop="username" label="姓名" />
            <el-table-column prop="userage" label="年龄" />
            <el-table-column prop="usergender" label="性别" />
            <el-table-column prop="usersubname" label="专业" />
            <el-table-column prop="userclaname" label="班级" />
            <el-table-column label="头像" prop="stusrc" align="center">
              <template #default="scope">
                <el-image style="width: 50px" :preview-src-list="stupic" :src="scope.row.stusrc" fit="cover" preview-teleported />
              </template>
             <!--  <template slot-scope="scope">s
                <div v-for="item in scope.row.stusrc" :key="item">
                  <img :src="item" width="40" height="40" alt="" />
                </div>
              </template> -->
              <!--  <el-image style="width: 50px" :preview-src-list="stupic" :src="stusrc" fit="cover" />   -->
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template #default>
                <el-button link type="primary" size="small">编辑</el-button>
                <el-button link type="primary" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
  <script>
import Menu from "@/components/Menu.vue";
const fits = ["fill", "contain", "cover", "none", "scale-down"];
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("stu");
export default {
  components: { Menu },
  data() {
    return {
      pagedata: {
        pagesize: 10,
        currentpage: 1,
      },
    };
  },
  created() {
    this.getstulist();
  },
  computed: {
    ...mapState(["studata", "totaldata", "pagesdata", "stupresrc"]),
    stulist() {
      return this.studata;
    },
    total() {
      return this.totaldata;
    },
    pages() {
      return this.pagesdata;
    },
    stupic() {
      return this.stupresrc;
    },
  },
  watch: {
    pagedata: {
      handler() {
        this.getstulist();
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(["getstulistAsync"]),
    async getstulist() {
      const data = await this.getstulistAsync(this.pagedata);
    },
    async delstu(_id) {
      const data = await this.api.stuapi.delstu({ _id: _id });
      alert(data.data.msg);
      this.getstulist();
    },
  },
};
</script>
  
  <style>
.container {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>