import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import Home from '../views/home/Home';
import Login from '../views/login/Login';
import Reg from '../views/reg/Reg';


const routes = [
  {
    //路由信息对象
  path:'/',
  component:Home
  },
  {
    path:'/login',
    component:Login
    },
    {
      path:'/reg',
      component:Reg
      },

 
]

const router = createRouter({
  history: createWebHashHistory(),
  //路由配置
  routes:routes
})
//main.js引入此方法
export default router
