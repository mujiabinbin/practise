import { createApp } from 'vue'
import App from './App.vue'
//引入路由实例对象
import router from './router'//完整写法：import router from './router/index.js'
import store from './store'//引入仓库实例对象完整写法：import store from './store/index.js'
import axios from 'axios';
import api from './http/api';
//后续在组件中通过this.$store获取此实例对象
const app= createApp(App).use(store).use(router);
app.config.globalProperties.api = api;
axios.defaults.baseURL='http://localhost:3000';
//后续在组件中通过this.$router获取此实例对象
app.mount('#app')
