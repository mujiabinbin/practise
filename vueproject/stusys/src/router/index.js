import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/home/Home';
import Reg from '../views/reg/Reg';
const login = () => import('../views/login/Login');//箭头函数，依然是懒加载
const err = () => import('../views/err/Err');


const routes = [
  {
    //域名重定向，浏览器访问url会被重定向到redirect地址
    path: '/home',
    redirect: '/'
  },
  {
    //路由信息对象
    path: '/',
    component: Home
  },
  {
    path: '/login',
    //路由懒加载，只有当浏览器url匹配到“/login”时才会加载，而import Home from '../views/home/Home'是只要index.js被引用时就会加载
    component: login//() => import('../views/login/Login')
  },
  {
    path: '/reg',
    component: Reg
  },
  {
    path: '/:pathMatch(.*)*',
    component: err
  }


]

const router = createRouter({
  history: createWebHistory(),
  //路由配置
  routes: routes,
  //mode:'history'
})
//main.js引入此方法
export default router
