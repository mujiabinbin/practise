import {createRouter,createWebHistory}from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
const Register =()=>import('../views/Register.vue')
const routes=[
    {
        path:'/',
        name:'Home',
        component:Home 
    },
    {
        path:'/login',
        name:'Login',
        component:Login 
    },
    {
        path:'/reg',
        name:'Reg',
        component:Register
    }
]

const router= createRouter({
    routes:routes,
    history:createWebHistory()
})

export default router