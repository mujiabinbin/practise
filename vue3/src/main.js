import {
	createApp
} from 'vue';
import App from './App.vue';
import axios from 'axios';
import api from './http/api';
const app= createApp(App);
app.config.globalProperties.$api = api;
axios.defaults.baseURL='http://localhost:3000';
/* import mitt from 'mitt';
app.config.globalProperties.$bus = new mitt(); */
app.mount('#app')

/* import Vue from(`vue`);
import App from(`./App.vue`); */
//关闭生成提示
//Vue.config.productionTip = false;

//创建一个vue的实例对象
/* new Vue({
	//渲染方法，渲染App.vue文件中的内容放入内存
	render: h => h(App),
}).$mount(`#app`) //把渲染好内容放置到#app的标签内 */
