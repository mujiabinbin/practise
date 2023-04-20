import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Stu from '../views/stu/Stu.vue'
import StuAdd from '../views/stu/StuAdd.vue'
import Subject from '../views/sub/Sub.vue'
import Cla from '../views/cla/Cla.vue'
import Login from '../views/login/Login.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import api from '@/http/api'
import store from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: async(to, from, next) => {
      const token=localStorage.token;
      if(token){
        //将token发到后端并获取用户信息
        const {data}=await api.loginapi.getuserinfo();
        if(data.status==1){
          next();
          store.commit('GETUSERINFO',data.data)
        }/* else if(data.response.status==401){
          ElMessageBox.confirm(
            '请重新登陆',
            'token失效',
            {
              confirmButtonText: '好的',
              cancelButtonText: '取消',
              type: 'warning',
            }
          )
            .then(() => {
              router.push('/login')
            })
            .catch(() => {
              ElMessage({
                type: 'info',
                message: '操作取消',
              })
            })
        } */
        
        console.log(data);
        //1 if判断token有效，next进入目标页，并成功从后端获取用户信息保存到状态机主仓库供其他组件调用
        //1.1 引入仓库对象import store from ‘@/store/index。js’，而后store。commite（写好的方法，参数）来修改state数据
        //2 token无效或过期，返回401报错

      }else{
        ElMessageBox.confirm(
          '您还没登陆，请重新登陆',
          '抱歉',
          {
            confirmButtonText: '好的',
            cancelButtonText: '取消',
            type: 'warning',
          }
        )
          .then(() => {
            router.push('/login')
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '操作取消',
            })
          })
          
      }
    }
  },
  {
    path: '/stu',
    name: 'stu',
    component: Stu
  },
  {
    path: '/stuadd',
    name: 'stuadd',
    component: StuAdd
  },
  {
    path: '/subject',
    name: 'subject',
    component: Subject
  },
  {
    path: '/cla',
    name: 'cla',
    component: Cla
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
