<template>
	<div>
		<button v-on:click="isshow=!isshow">切换显示</button>
		<!-- <h1 v-if="isshow">是否渲染1</h1>
		<h2 v-else-if="true">是否渲染3</h2>
		<h1 v-else>是否渲染2</h1> -->

		<!-- 虚拟节点，在浏览器端不显示此标签，为了将一组标签一起操作更方便 -->
		<template v-if="isshow">
			<h1>123</h1>
			<h1>123</h1>
			<h1>123</h1>
		</template>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isshow: true
			}
		}
	}
</script>

<style>
</style>
