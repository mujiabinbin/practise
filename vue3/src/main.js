import {
	createApp
} from 'vue';
import App from './App.vue';

const app= createApp(App);
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
