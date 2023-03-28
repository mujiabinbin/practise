<template>
<div>
  <!--路由出口：当前路由组件渲染位置  -->
  <router-view>
  </router-view>
</div>
 <!--  <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/login">登陆</router-link>
     <router-link to="/reg">注册</router-link>
  </nav> -->
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
