<template>
    <div>
        <h2>学生列表</h2>
        <thead>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>专业</th>
                <th>班级</th>
                <th>头像</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in stulist" :key="item._id">
                <td>{{ item._id }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.userage }}</td>
                <td>
                    {{
                        item.usergender == "男" ? item.usergender : (item.usergender = "女")
                    }}
                </td>
                <td>{{ item.usersubname ? item.usersubname : "暂无" }}</td>
                <td>{{ item.userclaname ? item.userclaname : "暂无" }}</td>
                <td>
                    <img :src="`http://localhost:3000/img/${item.picname ? item.picname : 'default.jpg'
                        }`" />
                </td>
                <td>
                    <router-link tag="button" :to="'/home/stuedit/' + item._id">编辑</router-link><button
                        @click="delstu(item._id)">删除</button>
                </td>
            </tr>
        </tbody>
        <div>
            <span>每页显示</span>
            <select v-model="pagedata.pagesize">
                <option selected value="3">3</option>
                <option selected value="5">5</option>
                <option value="10">10</option>
            </select><span>条数据</span> <span>共{{ total }}条数据</span><span>当前第{{ pagedata.currentpage }}页，共{{ pages }}页</span>
        </div>
        <div>
            <button @click="pagedata.currentpage = 1">首页</button>
            <button @click="pagedata.currentpage--">上一页</button>
            <button @click="pagedata.currentpage++">下一页</button>
            <button @click="pagedata.currentpage = pages">尾页</button>
        </div>
    </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
const {mapActions,mapState}=createNamespacedHelpers('stu');
export default {
    data() {
        return {
            //stulist: [],
            pagedata: {
                pagesize: 3,
                currentpage: 1,
            },
            //total: 0,
            //pages: 1,
        };
    },
    mounted() {
        this.getstulist();
    },
    computed:{
        ...mapState(['studata','totaldata','pagesdata']),
        stulist(){
            return this.studata
        },
        total(){
            return this.totaldata
        },
        pages(){
            return this.pagesdata
        }
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
        ...mapActions(['getstulistAsync']),
        async getstulist() {
            const data = await this.getstulistAsync(this.pagedata);
            //this.stulist = data.data.data.data;
            //this.total = data.data.data.total;
            //this.pages = data.data.data.pages;
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
 img{
    width: 50px;
 }
</style>