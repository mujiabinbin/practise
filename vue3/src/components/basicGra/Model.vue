<template>
  <div>
    <h1>{{msg}}</h1>
    <input type="text" v-model="msg">
     <input type="text" v-model.lazy.number="msg">
    <h1>{{gender}}</h1>
    <input type="radio" v-model="gender" value="male"><label for="male">male</label>
    <input type="radio" v-model="gender" value="female"><label for="female">female</label>
    <h1>{{agree}}</h1>
    <input type="checkbox" v-model="agree"><label for="">同意以上协议</label>
    <h1>{{habit}}</h1>
    <input type="checkbox" v-model="habit" value="sports"><label for="">sports</label>
    <input type="checkbox" v-model="habit" value="travle"><label for="">travel</label>
    <input type="checkbox" v-model="habit" value="movie"><label for="">movie</label>

    <h1>{{city}}</h1>
    <select v-model="city">
        <option value="beijing">beijing</option>
        <option value="shanghai">shanghai</option>
        <option value="tianjin">tianjin</option>
    </select>
  </div>
</template>

<script>
export default {
data() {
    return {
        msg:`model value`,
        gender:`male`,
        agree:false,
        habit:[`movie`],
        city:``
    }
},
}
</script>

<style>

</style>