import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import api from './http/api';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
const app= createApp(App).use(store).use(ElementPlus).use(router);
app.config.globalProperties.api = api;
axios.defaults.baseURL='http://localhost:3000';
app.mount('#app')
