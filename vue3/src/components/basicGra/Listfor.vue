<template>
	<div>
		<h1 v-for="item in 5" v-bind:key="item.fid">hello</h1>
		<h1 v-for="item in friends" v-bind:key="item.fid">{{item}}</h1>
		<button v-for="item in friends" v-bind:key="item.fid">{{item}}</button>
		<tr>
			<td>编号</td>
			<td>姓名</td>
		</tr>
		<tr v-for="(item,index) in friends">
			<td>{{item.fid}}</td>
			<td>{{item.name}}</td>
		</tr>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				friends: [{
						fid: `01`,
						name: `zhangsan`
					},
					{
						fid: `02`,
						name: `lisi`
					},
					{
						fid: `05`,
						name: `wangwu`
					}

				]
			}
		},
	}
</script>

<style>
</style>
