import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import '@/http/axios';
import api from './http/api';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
const app= createApp(App).use(store).use(ElementPlus).use(router);
app.directive('auth',{
    mounted(el, binding, vnode, prevVnode) {
        console.log(el);
    }
})
app.config.globalProperties.api = api;
axios.defaults.baseURL='http://120.55.77.129:3000';
app.mount('#app')
