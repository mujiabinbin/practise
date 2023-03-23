<template>
  <div>
    <h1>子组件</h1>
    <!-- <slot name="slot1"></slot>
    <hr>
     <slot name="slot2"></slot> -->
     <slot name='slot1' :stu='stu'></slot>
  </div>
</template>

<script>
export default {
    data() {
        return {
             stu: [
        { id: 1, name: `牟佳斌`, age: 41, gender: `男`, isshow: true },
        { id: 2, name: `牟彦丞`, age: 10, gender: `男`, isshow: true },
        { id: 3, name: `张秦宁`, age: 36, gender: `女`, isshow: true },]
        }
    },

}
</script>

<style>

</style>