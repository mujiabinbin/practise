<template>
  <div>
    <header>学生管理系统</header>
    <main>
      <aside>
        <dl>
          <dt>学生管理</dt>
          <dd><router-link active-class="active" to='/home/stuadd' :replace="true">新增学生</router-link></dd>
          <dd><router-link active-class="active" to='/home/stulist'>学生列表</router-link></dd>
        </dl>
        <dl>
          <dt><router-link to='/home/sublist'>专业列表</router-link></dt>
        </dl>
         <dl>
          <dt>班级管理</dt>
          <dd><router-link to='/home/claadd'>添加班级</router-link></dd>
          <dd><router-link to='/home/clalist'>班级列表</router-link></dd>
        </dl>
        <dl>
          <dt>其他功能</dt>
          <dd><router-link to='/home/counter'>计数器</router-link></dd>
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
    .active{
      color: green;
      font-display: none;
      font-weight: bold;
    }
  }
}
</style>