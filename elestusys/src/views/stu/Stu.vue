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
            :data="stulist"
            style="width: 100%"
          >
            <el-table-column fixed prop="username" label="姓名" />
            <el-table-column prop="userage" label="年龄" />
            <el-table-column prop="usergender" label="性别" />
            <el-table-column prop="usersubname" label="专业">
              <template #default="scope">
                {{
                  scope.row.usersubname ? scope.row.usersubname : "无专业信息"
                }}
              </template>
            </el-table-column>

            <el-table-column prop="userclaname" label="班级">
              <!--  <template #default="scope">
                {{
                  scope.row.userclaname | isclaname
                }}
              </template>  -->
              <template #default="scope">
                {{
                  scope.row.userclaname ? scope.row.userclaname : "无班级信息"
                }}
              </template>
            </el-table-column>
            <el-table-column label="头像" prop="stusrc" align="center">
              <template #default="scope">
                <el-image
                  style="width: 50px"
                  :preview-src-list="stupic"
                  :src="scope.row.stusrc"
                  fit="cover"
                  preview-teleported
                />
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template #default="scope">
                <el-button link type="primary" size="small">编辑</el-button>
                <el-button
                  link
                  type="primary"
                  size="small"
                  v-auth
                  @click="delstu(scope.row._id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            :background="true"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagedata.currentpage"
            :page-sizes="[3, 5, 10]"
            :page-size="pagedata.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
  <script>
  
import Menu from "@/components/Menu.vue";
import { ref } from "vue";
import { createNamespacedHelpers } from "vuex";
import mixpagedata from '@/mixins/pagedatamix' 
const { mapActions, mapState } = createNamespacedHelpers("stu");

export default {
  
  components: { Menu },
  mixins:[mixpagedata],
  filters:{
    isclaname(val){
     if(val){
      return val
     }else{
      return 'no class data'
     }
    }
  },
  
  created() {
    this.getstulist();
  },
  computed: {
    ...mapState(["studata", "totaldata", "pagesdata", "stupresrc"]),
    //...mapState({stylist:"studata",total: "totaldata", pages:"pagesdata", stupresrc:"stupresrc"}),
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
  
  <style scoped>
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
.el-pagination {
  margin-top: 20px;
}
</style>