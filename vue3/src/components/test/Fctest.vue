<template>
  <div>
    <Show :data='data'></Show>
    <Input @getdata='getdata'></Input>
  </div>
</template>

<script>
import Input from "./Input.vue";
import Show from "./Show.vue";
export default {
  components: {
    Input,
    Show,
  },
  data() {
    return {
        data:1
    }
  },
  methods: {
    getdata(num){
       this.data=num
    }
  },
};
</script>

<style>
</style>