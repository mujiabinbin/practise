<template>
  <div>
    <header>学生管理系统</header>
    <main>
      <aside>
        <dl>
          <dt>学生管理</dt>
          <dd><router-link to='/home/stuadd'>新增学生</router-link></dd>
          <dd><router-link to='/home/stulist'>学生列表</router-link></dd>
        </dl>
         <dl>
          <dt>班级管理</dt>
          <dd>新增班级</dd>
          <dd>班级列表</dd>
        </dl>
      </aside>
      <section>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
main{
  display: flex;
  aside{
    width: 180px;
  }
}
</style>