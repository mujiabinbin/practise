<template>
	<div>
		<!-- //template只接收一个子组件，所以最佳方式是用一个div包裹所有组件 -->
		<!-- <h1>App.vue</h1>
		<Test1></Test1> --><!-- //3 渲染子组件 -->
		<!-- <Basic></Basic>
		<Listfor></Listfor>
		<If></If> -->
		<!-- <shoppingcart></shoppingcart> -->
		<!-- <Movielist></Movielist> -->
		<!-- <Directive></Directive> -->
		<!-- <Basic-style></Basic-style> -->
		<!-- <Event></Event> -->
		<!-- <Computed></Computed> -->
		<!-- <Todolist></Todolist> -->
		<!-- <Model></Model>
		<Watch></Watch> -->
		<!-- <Datachange></Datachange> -->
		<!-- <Students></Students> -->
		<!-- <Lifecircle></Lifecircle> -->
		<!-- <Father></Father> -->
		<!-- <Fctest></Fctest> -->
		<!-- <Stu></Stu> -->
		<!-- <Tabfather></Tabfather> -->
		<!-- <Busemit></Busemit>
		<Buson></Buson> -->
		<!-- <Fatherslot></Fatherslot> -->
		<Axios></Axios>
	</div>
</template>

<script>
	//1 引入子组件
	import Test1 from './components/basicCom/Test1.vue';
	import Basic from './components/basicGra/Basic.vue';
	import Listfor from './components/basicGra/Listfor';
	import If from './components/basicGra/If';
	import Shoppingcart from './components/basicGra/Shoppingcart.vue';
	import Movielist from './components/basicGra/Movielist.vue';
	import Directive from './components/basicGra/Directive.vue';
	import Event from './components/basicGra/Event.vue';
	import BasicStyle from './components/style/BasicStyle.vue';
	import Computed from './components/computed/Computed.vue';
	import Todolist from './components/basicGra/Todolist.vue';
	import Model from './components/basicGra/Model.vue';
	import Watch from './components/watch/Watch.vue';
	import Datachange from './components/basicGra/Datachange.vue';
	import Students from './components/test/Students';
	import Lifecircle from './components/advCom/Lifecircle.vue';
	import Father from './components/advCom/Father.vue';
	import Fctest from './components/test/Fctest.vue';
	import Stu from './components/test/Stu';
	import Tabfather from './components/keepalive/Father.vue';
	import Busemit from './components/bus/Busemit.vue';
	import Buson from './components/bus/Buson.vue';
	import Fatherslot from './components/slot/Fatherslot.vue';
	import Axios from './components/axios/Axios.vue';
	//2 配置注册子组件
	export default {
		components: {
			Test1,
			Basic,
			Listfor,
			If,
			Shoppingcart,
			Movielist,
			Directive,
			BasicStyle,
			Event,
			Computed,
			Watch,
			Todolist,
			Model,
			Datachange,
			Students,
			Lifecircle,
			Father,
			Fctest,
			Stu,
			Tabfather,
			Busemit,
			Buson,
			Fatherslot,
			Axios
		}
	}
</script>
<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 -->
