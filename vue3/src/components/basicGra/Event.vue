<template>
  <div>
    <button @click="sayhello">sayhello</button>
    <button @click="sayhi(`lisi`)">sayhi</button>
    <a href="http:www.baidu.com" @click.prevent="sayhello">link</a>
    <input @keyup.enter="submit" />
  </div>
</template>

<script>
export default {
data() {
    return {
        name:`zhangsan`
    }
},
methods: {
    sayhello(){
        console.log(this.name);
        this.sayhi(this.name);
    },
    sayhi(para){
        console.log(`hi`+para);
    },
    submit(){
        console.log(`enter`)
    }
},
}
</script>

<style>

</style>