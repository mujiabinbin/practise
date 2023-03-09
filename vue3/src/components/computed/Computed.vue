<template>
  <div>
    <label for="">{{fullname}}</label>
    <button @click="fullname=`lisi`"></button>
  </div>
</template>

<script>
export default {
data() {
    return {
        firstname:`zhang`,
        lastname:`san`
    }
},
computed:{
   /*  fullname:function(){
     return this.firstname+this.lastname
    }  */
    fullname:{
        get(){
            return this.firstname+this.lastname
        },
        set(param){
            this.firstname=param[0],
            this.lastname=param[1]
        }
    }
    
}
}
</script>

<style>

</style>