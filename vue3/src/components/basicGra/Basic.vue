<template>
	<h1>hello,{{name}},今年{{age+1}}岁,性别{{gender}}</h1>
	<p>my friends are {{
		friends.map(function(item){
			return item
		})
	}}</p>
	<button v-on:click="name=`lisi`">改名字</button>
	<button v-on:click="age++">加年龄</button>
	<!-- 标签中reg属性，设置一个自定义标签，而通过“$refs.自定义标签”可以获得这个节点（$refs会获得一个对象） -->
	<input type="text" ref="newnumber" v-on:blur="age=$refs.newnumber.value">

</template>

<script>
	export default {
		data() {
			return {
				name: `zhangsan`,
				age: 20,
				gender: `male`,
				friends: [`jack`, `tom`, `john`]
			}
		},
	}
</script>

<style>
</style>
