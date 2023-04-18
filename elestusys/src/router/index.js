import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Stu from '../views/stu/Stu.vue'
import StuAdd from '../views/stu/StuAdd.vue'
import Subject from '../views/sub/Sub.vue'
import Cla from '../views/cla/Cla.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
