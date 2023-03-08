<template>
  <div>
   <ul v-for="item in style" v-bind:key="item.id">
    <li v-if="item.id==selected" :class="{bgcolor}"><strong>{{item.name}}</strong></li>
    <li v-else v-on:click="selected=item.id"><label>{{item.name}}</label></li>
   </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
           style: [
              {id:`01`,name:`全部`},
                {id:`02`,name:`惊悚`},
                {id:`03`,name:`科幻`},
                {id:`04`,name:`动画`},
                ],
            selected:`01`,
            bgcolor:true
        }
        
    }

}
</script>

<style>
ul{
  list-style: none;
  display: flex;
}
li{
    margin: 5px;
}
.bgcolor{
  background-color: red;
  color: white;
}
</style>