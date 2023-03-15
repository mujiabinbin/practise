<template>
  <div>
    <h1>生命周期函数</h1>
    <button @click="num++">{{num}}</button>

    <Child></Child>
  </div>
</template>

<script>
import Child from './Child';
export default {
    components:{
        Child
    },
    data() {
        return {
            num:1
        }
    },
    //创建阶段
beforeCreate() {
    console.log(`child创建前执行`)
},
created() {
    console.log(`child创建完成执行`)
},
//挂载阶段，创建好的组件渲染到页面中
beforeMount() {
    console.log(`child挂载前执行`);
},
mounted() {
    console.log(`child挂载完成执行`);
},
//组件更新阶段，组件用到的数据发生变化才会执行,如上面例子，只有点击button时才会触发
beforeUpdate() {
    console.log(`child组件更新前执行`);
},
updated() {
    console.log(`child组件更新完成执行`);
},
//组件销毁阶段，销毁完成后之前更新将不再执行
beforeDestroy() {
    console.log(`child组件销毁钱执行`)
},
destroyed() {
    console.log(`child组件销毁完成执行`)
},
}
</script>

<style>

</style>