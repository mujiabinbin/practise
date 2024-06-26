import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/home/Home';
import Reg from '../views/reg/Reg';
const login = () => import('../views/login/Login');//箭头函数，依然是懒加载
const err = () => import('../views/err/Err');
import Stuadd from '../views/home/stu/Stuadd';
import Stulist from '../views/home/stu/Stulist';
import Stuedit from '../views/home/stu/Stuedit';
import Sublist from '../views/home/sub/Sublist';
import Clalist from '../views/home/cla/Clalist';
import Claadd from '../views/home/cla/Claadd';
import Counter from '../components/Counter'


const routes = [
  /* {
    //域名重定向，浏览器访问url会被重定向到redirect地址
    path: '/',
    redirect: '/home'
  }, */
  {
    //路由信息对象
    path: '/',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        next()
      } else {
        next('/login')
      }
    },
    children: [
      {
        path: 'stulist',
        component: Stulist,
        meta: {
          iskeepalive: false
        }
      },
      {
        //子路由路径不需要“/”
        path: 'stuadd',
        component: Stuadd,
        meta: {
          iskeepalive: true
        }
      },
      {
        //:id为动态路由，匹配动态部分
        path: 'stuedit/:id',
        component: Stuedit,
        props: true,
        meta: {
          iskeepalive: true
        }
      },
      {
        path: 'sublist',
        component: Sublist,
      },
      {
        path: 'clalist',
        component: Clalist,
      },
      {
        path: 'claadd',
        component: Claadd,
      },
      {
        path: 'counter',
        component: Counter,
      },
    ]
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
  /* {
    path: '/:pathMatch(.*)*',
    component: err
  } */


]

const router = createRouter({
  history: createWebHistory(),
  //路由配置
  routes: routes,
  //mode:'history'
});
/* router.beforeEach((to,from,next)=>{
  if(to.path.includes('home')){
    if(localStorage.token){
      next()
    }else{
      next('/login')
    }
  }else{
     next()
  }
 
}) */
//main.js引入此方法
export default router
