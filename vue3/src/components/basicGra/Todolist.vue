<template>
  <div>
    <input type="text" ref="addcourse" @keyup.enter="addcourse" /><button
      @click="addcourse"
    >
      添加
    </button>
    <ul v-for="item in filtercourse" :key="item.id">
      <li
        @click="item.isdone = !item.isdone"
        v-if="item.isdone"
        :class="{ redline: item.isdone }"
      >
        {{ item.name }}
      </li>
      <li @click="item.isdone = !item.isdone" v-else>{{ item.name }}</li>
    </ul>
    <template v-for="item in status">
      <span v-if="item.id == currentstatus" :key="item.id">{{
        item.name
      }}</span>
      <label
        class="labelstyle"
        v-else
        href="#"
        :key="item.id"
        @click.prevent="currentstatus = item.id"
        >{{ item.name }}</label
      >
    </template>

    <label for="">已完成{{ finishcourse }}/{{ course.length }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: [
        { id: 1, name: `html`, isdone: true },
        { id: 2, name: `css`, isdone: true },
        { id: 3, name: `javascript`, isdone: false },
      ],
      courseid: 4,
      status: [
        { id: `1`, name: `全部` },
        { id: `2`, name: `已完成` },
        { id: `3`, name: `未完成` },
      ],
      currentstatus: `1`,
    };
  },
  methods: {
    addcourse() {
      var addcoursename = this.$refs.addcourse.value;
      this.course.push({
        id: this.courseid++,
        name: addcoursename,
        isdone: false,
      });
      this.$refs.addcourse.value = "";
    },
  },
  computed: {
    finishcourse() {
      let num = this.course.filter(function (item) {
        return item.isdone == true;
      }).length;
      return num;
    },
    filtercourse() {
      if (this.currentstatus == `1`) {
        return this.course;
      } else if (this.currentstatus == `2`) {
        return this.course.filter((item) => item.isdone);
      } else if (this.currentstatus == `3`) {
        return this.course.filter((item) => !item.isdone);
      }
    },
  },
};
</script>

<style scoped>
.redline {
  color: red;
  text-decoration-line: line-through;
}
.labelstyle{
    text-decoration-line:underline;
    margin: 5px;
    
}
</style>